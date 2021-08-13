import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectBooks, fetchBooks } from 'store/books'
import { useLocation } from 'react-router-dom'

function Pagination() {
  const dispatch = useDispatch()
  const location = useLocation()
  const { startIndex, totalItems } = useSelector(selectBooks)

  return (
    <button
      className={styles.button}
      disabled={startIndex === totalItems}
      onClick={() => {
        dispatch(fetchBooks(location.search, startIndex))
      }}
    >
      {startIndex === totalItems ? '더 이상 결과 없음' : '더보기'}
    </button>
  )
}

const styles = {
  button:
    'bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'
}

export default Pagination
