import React from 'react'
import { Fieldset, Select } from 'components'

function FilteringOptions({ state: { filter }, handleChange }) {
  return (
    <Fieldset legend="필터링">
      <Select id="filter" value={filter} onChange={handleChange}>
        {filteringOptions.map(([value, label]) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </Select>
    </Fieldset>
  )
}
const filteringOptions = [
  ['', '없음'],
  ['partial', '미리보기 가능'],
  ['full', '전체 공개'],
  ['ebooks', '전체 eBooks'],
  ['free-ebooks', '무료 eBooks'],
  ['paid-ebooks', '유료 eBooks']
]
export default FilteringOptions
