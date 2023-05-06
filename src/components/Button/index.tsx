import clsx from 'clsx'

import Box, { BoxProps } from 'src/theme/components/Box'
import * as styles from './style.css'

type ButtonProps = Omit<BoxProps, 'as'>

export const PrimaryButton = (props: ButtonProps) =>
  <Box as={'button'} className={clsx(props.className, styles.primaryButton)} {...props} />

export const SecondaryButton = (props: ButtonProps) =>
  <Box as={'button'} className={clsx(props.className, styles.secondaryButton)} {...props} />
