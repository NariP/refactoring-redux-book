import React from 'react'

function Layout({ children }) {
  return <div className={styles.wrapper}>{children}</div>
}
const styles = {
  wrapper: 'relative max-w-screen-sm p-4 mx-auto'
}
export default Layout
