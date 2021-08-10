import React from 'react'
import { css, cx } from 'emotion'
import {
  BookContentsBody,
  TitleWithDescription,
  AuthorWithPublishedDate
} from './index'

function Book({ defaultClassName, volumeInfo }) {
  return (
    <div className={cx([defaultClassName, styles.wrapper])}>
      <img
        src={volumeInfo?.imageLinks?.thumbnail ?? 'noImage.jpg'}
        className={styles.media}
        alt={`${volumeInfo?.title} thumbnail`}
      />
      <BookContentsBody>
        <TitleWithDescription volumeInfo={volumeInfo} />
        <AuthorWithPublishedDate volumeInfo={volumeInfo} />
      </BookContentsBody>
    </div>
  )
}

const styles = {
  wrapper: 'flex',
  media: `object-cover ${css({
    width: 128,
    height: 128
  })}`
}

export default Book
