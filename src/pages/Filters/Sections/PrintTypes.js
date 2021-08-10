import React from 'react'
import { Stack, Radio, Fieldset } from 'components'

function PrintTypes({ state: { printType }, handleChange }) {
  return (
    <Fieldset legend="도서 종류">
      <Stack gaps={[0, 20, 20]} direction="horizontal">
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
const printTypes = [
  { id: 'printTypeAll', value: 'all', label: '전체' },
  { id: 'printTypeBook', value: 'books', label: '일반도서' },
  { id: 'printTypeMagazines', value: 'magazines', label: '잡지' }
]
export default PrintTypes
