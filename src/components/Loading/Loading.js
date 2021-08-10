import React from 'react'
import { css, keyframes } from 'emotion'

function Loading() {
  return (
    <span className={styles.wrapper} role="img" aria-label="books">
      📚
    </span>
  )
}

const slide = keyframes`
from {
transform: translateX(0);
}
to {
transform: translateX(100px);
}
`
const styles = {
  wrapper: `block ${css({
    animation: `${slide} 1s ease infinite`
  })}`
}
export default Loading
