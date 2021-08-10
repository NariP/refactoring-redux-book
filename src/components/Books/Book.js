import React from 'react'
import { css, cx } from 'emotion'

function Book({ defaultClassName, volumeInfo }) {
  return (
    <div className={cx([defaultClassName, styles.wrapper])}>
      <img
        src={volumeInfo?.imageLinks?.thumbnail}
        className={styles.media}
        alt=""
      />
      <div className={styles.body}>
        <div className={styles.content}>
          <div className={styles.title} title={volumeInfo?.title}>
            {volumeInfo?.title}
          </div>
          <p className={styles.description} title={volumeInfo?.description}>
            {volumeInfo?.description}
          </p>
        </div>
        <div className={styles.meta}>
          {volumeInfo?.authors && (
            <p className={styles.authors}>{volumeInfo.authors.join(', ')}</p>
          )}
          <p className={styles.publishedDate}>{volumeInfo?.publishedDate}</p>
        </div>
      </div>
    </div>
  )
}

const styles = {
  wrapper: 'flex',
  media: `object-cover ${css({
    width: 128,
    height: 128
  })}`,
  body: `w-full p-2 border border-l-0 border-gray-400 rounded rounded-l-none ${css(
    {
      maxWidth: 'calc(100% - 128px)'
    }
  )}`,
  content: 'mb-4',
  title: 'mb-2 text-gray-900 font-bold text-lg truncate',
  description: `text-gray-700 text-base ${css({
    display: '-webkit-box',
    overflow: 'hidden',
    WebkitLineClamp: 1,
    WebkitBoxOrient: 'vertical'
  })}`,
  meta: 'flex items-center text-sm',
  authors: 'mr-2 text-gray-900',
  publishedDate: 'text-gray-600'
}

export default Book
