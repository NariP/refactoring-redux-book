import React from 'react'
import { cx } from 'emotion'
import { Stack } from 'components'
import { HORIZONTAL } from 'constants/direction'
import { SUBMIT, BUTTON } from 'constants/buttonType'

function FilterButtonGroup({ handleCancel }) {
  return (
    <Stack gaps={[0, 10]} direction={HORIZONTAL}>
      <button
        type={BUTTON}
        className={cx([styles.button, styles.cancel])}
        onClick={handleCancel}
      >
        취소
      </button>
      <button type={SUBMIT} className={cx([styles.button, styles.submit])}>
        확인
      </button>
    </Stack>
  )
}
const styles = {
  button: 'w-20 font-bold py-2 px-4 rounded-full',
  cancel:
    'border border-blue-500 hover:border-blue-700 text-blue-500 hover:text-blue-700',
  submit: 'bg-blue-500 hover:bg-blue-700 text-white'
}

export default FilterButtonGroup
