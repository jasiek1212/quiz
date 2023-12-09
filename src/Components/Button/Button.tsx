import "./ButtonStyles.css"

interface ButtonProps {
    categoryID?: number
    questionCount?: number
    onClick: ()=>void
    disabled: boolean
    children?:React.ReactNode
  }
  
  const Button = ({onClick,children}:ButtonProps) => {
    
    return (
      <button className="text-xl underline content-center" onClick={() => {
        onClick();
      }}>
        {children}
      </button>
    )
  }
  export default Button;