export default function InputLabelRegister({ forInput, value, className, children }) {
    return (
        <label htmlFor={forInput} 
            className={`block
                font-Gilroy-ExtraBold 
                text-[24px] 
                leading-[28px] 
                mb-4
                text-title ` + className}>
            {value ? value : children}
        </label>
    );
}
