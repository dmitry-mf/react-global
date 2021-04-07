export function ServiceErrorsDecorator(OriginalClass: any) {
    const methods: Array<{
        name: string,
        method: (args: any) => any
     }> = Object.keys(OriginalClass).map((name: string) => ({
        name,
        method: OriginalClass[name]
     }));
 
    methods.forEach(({ name, method }) => {
       OriginalClass[name] = async (args: any) => {
            const response: Response = await method(args);

            if (response.ok) {
                return await response.json();
            } else {
                const { messages } = await response.json();
                throw new Error(messages.join(''));
            }
       };
    });
 
    return OriginalClass;
 }