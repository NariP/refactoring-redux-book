import React from 'react'
import { Fieldset, Select } from 'components'
import { filteringOptions } from 'constants/filters'

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
export default FilteringOptions
