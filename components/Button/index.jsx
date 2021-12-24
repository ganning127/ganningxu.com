export const Button = (props) => (
    <button className={`${props.bg} px-3 duration-300 ${props.fontSize} rounded-lg font-bold ${props.color} ${props.hover} ${props.classes}`}>{props.children}</button>
)
