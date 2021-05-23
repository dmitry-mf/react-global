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
  
        //window.document.addEventListener('mousedown', listener);
        //window.document.addEventListener('touchstart', listener);
  
        return () => {
          //window.document.removeEventListener('mousedown', listener);
          //window.document.removeEventListener('touchstart', listener);
        };
      },

      [ref, handler]
    );
  }