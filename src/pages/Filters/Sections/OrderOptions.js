import React from 'react'
import { Stack, Radio, Fieldset } from 'components'

function OrderOptions({ state: { orderBy }, handleChange }) {
  return (
    <Fieldset legend="정렬 순서">
      <Stack gaps={[0, 20, 20]} direction="horizontal">
        {orderTypes.map(({ id, value, label }) => (
          <Radio
            key={id}
            id={id}
            name="orderBy"
            value={value}
            checked={orderBy === value}
            onChange={handleChange}
            label={label}
          />
        ))}
      </Stack>
    </Fieldset>
  )
}
const orderTypes = [
  { id: 'orderByRelevance', value: 'relevance', label: '관련성' },
  { id: 'orderByNewest', value: 'newest', label: '최신순' }
]

export default OrderOptions
