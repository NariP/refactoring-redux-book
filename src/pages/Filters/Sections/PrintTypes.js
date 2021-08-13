import React from 'react'
import { Stack, Radio, Fieldset } from 'components'
import { printTypes } from 'constants/filters'
import { HORIZONTAL } from 'constants/direction'

function PrintTypes({ state: { printType }, handleChange }) {
  return (
    <Fieldset legend="도서 종류">
      <Stack gaps={[0, 20, 20]} direction={HORIZONTAL}>
        {printTypes.map(({ id, value, label }) => (
          <Radio
            key={id}
            id={id}
            name="printType"
            value={value}
            checked={printType === value}
            onChange={handleChange}
            label={label}
          />
        ))}
      </Stack>
    </Fieldset>
  )
}
export default PrintTypes
