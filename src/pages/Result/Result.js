import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBooks, selectBooks, Status } from 'store/books'
import {
  Loading,
  Stack,
  SearchForm,
  Books,
  Pagination,
  ResultNotFound
} from 'components'

function Result() {
  const dispatch = useDispatch()
  const { search } = useLocation()
  const { status, items } = useSelector(selectBooks)
  const isLoading = status === Status.Loading

  useEffect(() => {
    search && dispatch(fetchBooks(search))
  }, [dispatch, search])

  return (
    <div className={styles.wrapper}>
      <Stack gaps={[0, 10, 20, 20]}>
        <SearchForm />
        <Books items={items} />
        {isLoading && <Loading />}
        {!isLoading && (items.length > 0 ? <Pagination /> : <ResultNotFound />)}
      </Stack>
    </div>
  )
}

const styles = {
  wrapper: 'pb-4'
}

export default Result
