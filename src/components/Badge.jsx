import { clsx } from 'clsx'

const Badge = ({ children, className = '', ...props }) => {
  const classes = clsx(
    'inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold',
    'bg-blue-600 text-white',
    className
  )
  
  return (
    <span className={classes} {...props}>
      {children}
    </span>
  )
}

export default Badge
