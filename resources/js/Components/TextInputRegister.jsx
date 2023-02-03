import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInputRegister(
    { type = 'text', name, id, value, className, autoComplete, placeholder = '', required, isFocused, handleChange },
    ref
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <input
                type={type}
                name={name}
                id={id}
                value={value}
                className={
                    `block 
                        w-full 
                        mb-4
                        px-4 py-3
                        bg-white
                        border-0
                        rounded-lg
                        font-Proxima-Nova
                        text-[#5F5F5F]
                        drop-shadow-[0px_16px_24px_rgba(190,190,190,0.16)] ` +
                    className
                }
                ref={input}
                autoComplete={autoComplete}
                required={required}
                placeholder={placeholder}
                onChange={(e) => handleChange(e)}
            />
        </div>
    );
});
