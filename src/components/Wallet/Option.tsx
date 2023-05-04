import { Connection } from 'src/connections'
import { Row } from 'src/theme/components/Flex'
import * as Text from 'src/theme/components/Text'
import * as styles from './Option.css'

interface OptionProps {
  connection: Connection
}

export default function Option({ connection }: OptionProps) {
  return (
    <Row gap={'12'} className={styles.option}>
      <img width={32} height={32} src={connection.getIcon!()} />
      <Text.Body>{connection.getName()}</Text.Body>
    </Row>
  )
}
