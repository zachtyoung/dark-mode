import useLocalStorage from './useLocalStorage.js';
import React, { useEffect } from 'react';

const useDarkMode = (key, initialValue)=> {
    const [someValue, setSomeValue] = useLocalStorage(key, initialValue);
    useEffect(() => {
        const bodyVar = document.querySelector('body')
        if(someValue) 
            bodyVar.classList.add('dark-mode')
        
        else
            bodyVar.classList.remove('dark-mode')
        
    },[someValue])
    return [someValue, setSomeValue];
}   
export default useDarkMode;