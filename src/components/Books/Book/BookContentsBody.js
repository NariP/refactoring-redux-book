import React from 'react'
import { css } from 'emotion'

function BookContentsBody({ children }) {
  return <div className={styles.body}>{children}</div>
}

const styles = {
  body: `w-full p-2 border border-l-0 border-gray-400 rounded rounded-l-none ${css(
    {
      maxWidth: 'calc(100% - 128px)'
    }
  )}`
}

export default BookContentsBody
