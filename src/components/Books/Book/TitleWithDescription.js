import React from 'react'
import { css } from 'emotion'

function TitleWithDescription({ volumeInfo }) {
  return (
    <div className={styles.content}>
      <div className={styles.title} title={volumeInfo?.title}>
        {volumeInfo?.title}
      </div>
      <p className={styles.description} title={volumeInfo?.description}>
        {volumeInfo?.description}
      </p>
    </div>
  )
}

const styles = {
  content: 'mb-4',
  title: 'mb-2 text-gray-900 font-bold text-lg truncate',
  description: `text-gray-700 text-base ${css({
    display: '-webkit-box',
    overflow: 'hidden',
    WebkitLineClamp: 1,
    WebkitBoxOrient: 'vertical'
  })}`
}

export default TitleWithDescription
