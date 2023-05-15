import { useState } from 'react'

import Box from 'src/theme/components/Box'
import * as styles from './style.css'
import * as Text from 'src/theme/components/Text'
import { Row } from 'src/theme/components/Flex'

interface TogglerProps extends React.HTMLAttributes<HTMLDivElement> {
  modes: string[]
}

export default function Toggler({ modes, ...props }: TogglerProps) {
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
