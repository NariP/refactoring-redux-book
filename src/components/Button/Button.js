import React from 'react'
import { cx } from 'emotion'

function Button({ children, type, specificStyle, onClickHandler }) {
  return (
    <button
      type={type}
      className={cx([styles.button, specificStyle])}
      onClick={onClickHandler}
    >
      {children}
    </button>
  )
}
const styles = {
  button: 'w-20 font-bold py-2 px-4 rounded-full',
  cancel:
    'border border-blue-500 hover:border-blue-700 text-blue-500 hover:text-blue-700',
  submit: 'bg-blue-500 hover:bg-blue-700 text-white'
}

export default Button
