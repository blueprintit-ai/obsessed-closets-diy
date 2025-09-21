import { clsx } from 'clsx'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'default', 
  className = '', 
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
  
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-white hover:bg-gray-50 text-gray-900 border border-gray-300',
    outline: 'border border-white text-gray-900 hover:bg-white hover:text-gray-900 bg-white'
  }
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    default: 'px-4 py-2 text-sm',
    lg: 'px-8 py-3 text-lg'
  }
  
  const classes = clsx(
    baseClasses,
    variants[variant],
    sizes[size],
    className
  )
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}

export default Button
