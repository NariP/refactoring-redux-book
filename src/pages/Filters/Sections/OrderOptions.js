import React from 'react'
import { Stack, Radio, Fieldset } from 'components'
import { orderTypes } from 'constants/filters'
import { HORIZONTAL } from 'constants/direction'

function OrderOptions({ state: { orderBy }, handleChange }) {
  return (
    <Fieldset legend="정렬 순서">
      <Stack gaps={[0, 20, 20]} direction={HORIZONTAL}>
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

export default OrderOptions
