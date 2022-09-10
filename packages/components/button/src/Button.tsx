import type { FC } from "react";
export interface IButtonProps {
    type?: 'primary' | 'text' | 'link',
    children?: React.ReactNode
}
const Button: FC<IButtonProps> = ({ type, children }) => {
    const SR = type == 'link' ? 'a' : 'button'
    return <>
        <SR style={{ background: type == 'primary' ? 'red' : 'blue' }}>
            {children}
        </SR>
    </>
}

export default Button