import { useState } from 'react'

import * as styles from './style.css'
import * as Text from 'src/theme/components/Text'
import { Row } from 'src/theme/components/Flex'

interface TogglerProps {
  modes: string[]
}

export default function Toggler({ modes }: TogglerProps) {
  const [selectedMode, setSelectedModel] = useState(modes[0])

  return (
    <Row gap={'24'} className={styles.togglerContainer}>
      {modes.map((mode) => (
        <Text.Custom
          key={mode}
          className={styles.togglerButton({ active: mode === selectedMode })}
          onClick={() => setSelectedModel(mode)}
        >
          {mode}
        </Text.Custom>
      ))}
    </Row>
  )
}
