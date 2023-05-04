import Box from './Box'
import { sprinkles } from '../css/sprinkles.css'

export const Body = (props: any) =>
  <Box
    className={sprinkles({
      fontWeight: 'normal',
      color: 'text1',
      fontSize: '16',
    })}
    {...props}
  />

export const HeadlineSmall = (props: any) =>
  <Box
    className={sprinkles({
      fontWeight: 'medium',
      color: 'text1',
      fontSize: '18',
    })}
    {...props}
  />
