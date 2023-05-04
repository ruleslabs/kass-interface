import { Connection } from 'src/connections'
import { Row } from 'src/theme/components/Flex'
import * as Text from 'src/theme/components/Text'
import * as styles from './Option.css'
import { useTryActivation } from 'src/hooks/useWalletActivation'
import noop from 'src/utils/noop'

interface OptionProps {
  connection: Connection
}

export default function Option({ connection }: OptionProps) {
  // wallet activation
  const tryActivation = useTryActivation()
  const activate = () => tryActivation(connection, noop)

  // modal

  return (
    <Row gap={'12'} className={styles.option} onClick={activate}>
      <img width={32} height={32} src={connection.getIcon!()} />
      <Text.Body>{connection.getName()}</Text.Body>
    </Row>
  )
}
