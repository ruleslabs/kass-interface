import Box from 'src/theme/components/Box'
import * as styles from './Content.css'
import * as Text from 'src/theme/components/Text'
import * as Icons from 'src/theme/components/Icons'
import { Column, Row } from 'src/theme/components/Flex'

interface ContentProps {
  children: React.ReactNode
  title: string
  close: () => void
}

export default function Content({ children, title, close }: ContentProps) {
  return (
    <Box className={styles.content}>
      <Column gap={'32'}>
        <Row justifyContent={'space-between'}>
          <Text.HeadlineSmall>{title}</Text.HeadlineSmall>

          <Box className={styles.closeContainer} >
            <Icons.Close onClick={close} />
          </Box>
        </Row>

        {children}
      </Column>
    </Box>
  )
}
