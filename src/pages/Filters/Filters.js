import React from 'react'
import { useHistory } from 'react-router-dom'
import useForm from 'hooks/useForm'
import { Stack } from 'components'
import {
  FilteringOptions,
  PrintTypes,
  OrderOptions,
  FilterButtonGroup
} from './Sections'

function Filters() {
  const history = useHistory()
  const { state, handleChange, handleSubmit } = useForm()
  const handleCancel = () => {
    history.goBack()
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack gaps={[0, 20, 20, 40]}>
        <FilteringOptions state={state} handleChange={handleChange} />
        <PrintTypes state={state} handleChange={handleChange} />
        <OrderOptions state={state} handleChange={handleChange} />
        <FilterButtonGroup handleCancel={handleCancel} />
      </Stack>
    </form>
  )
}

export default Filters
