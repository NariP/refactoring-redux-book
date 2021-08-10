import React from 'react'

function AuthorWithPublishedDate({ volumeInfo }) {
  return (
    <div className={styles.meta}>
      {volumeInfo?.authors && (
        <p className={styles.authors}>{volumeInfo.authors.join(', ')}</p>
      )}
      <p className={styles.publishedDate}>{volumeInfo?.publishedDate}</p>
    </div>
  )
}

const styles = {
  meta: 'flex items-center text-sm',
  authors: 'mr-2 text-gray-900',
  publishedDate: 'text-gray-600'
}

export default AuthorWithPublishedDate
