import React from 'react'
import { VERTICAL } from 'constants/direction'
import { css } from 'emotion'

function Stack({ children, gaps, direction = VERTICAL }) {
  const dir = direction === VERTICAL ? 'top' : 'left'
  const style = css`
    ${gaps.map(
      (gap, index) => `& > *:nth-child(${index + 1}) { 
        margin-${dir}: ${gap}px 
      }`
    )}
  `

  return <div className={style}>{children}</div>
}

export default Stack
