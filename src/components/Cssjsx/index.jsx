import React from 'react'
import css from 'styled-jsx/css'
import { Link } from 'react-router-dom'
function getLinkStyles(color) {
  return css.resolve`
    a { color: ${color} }
  `
}
 
export default (props) => {
  const { className, styles } = getLinkStyles('red')
  console.log(className,styles)
  return (
    <div>
      <Link className={className}>About</Link>
      {styles}
    </div>
  )
}