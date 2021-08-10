import React from 'react'
import { Button, Stack } from 'components'

function FilterButtonGroup({ handleCancel }) {
  return (
    <Stack gaps={[0, 10]} direction="horizontal">
      <Button
        type="button"
        specificStyle={styles.cancel}
        onClickHandler={handleCancel}
      >
        취소
      </Button>
      <Button
        type="submit"
        specificStyle={styles.submit}
        onClickHandler={handleCancel}
      >
        확인
      </Button>
    </Stack>
  )
}
const styles = {
  cancel:
    'border border-blue-500 hover:border-blue-700 text-blue-500 hover:text-blue-700',
  submit: 'bg-blue-500 hover:bg-blue-700 text-white'
}
export default FilterButtonGroup
