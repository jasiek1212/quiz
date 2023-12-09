interface ButtonProps {
    categoryName: string
  }
  
  const Button = ({categoryName}:ButtonProps) => {
    return (
      <button>
        {categoryName}
      </button>
    )
  }
  export default Button;