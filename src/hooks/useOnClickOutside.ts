import React, { useEffect } from 'react';

export function useOnClickOutside(ref: any, handler: (event: React.SyntheticEvent) => void) {
    useEffect(
      () => {
        const listener: any = (event: React.MouseEvent) => {
          if (!ref.current || ref.current.contains(event.target)) {
            return;
          }
  
          handler(event);
        };
  
        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);
  
        return () => {
          document.removeEventListener('mousedown', listener);
          document.removeEventListener('touchstart', listener);
        };
      },

      [ref, handler]
    );
  }