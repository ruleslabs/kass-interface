import clsx from 'clsx'

import Box, { BoxProps } from 'src/theme/components/Box'
import * as styles from './containers.css'
import * as Text from 'src/theme/components/Text'

export const Container = ({ className, ...props }: BoxProps) =>
  <Box className={clsx(className, styles.container())} {...props} />

interface MediaContainerProps extends BoxProps {
  isDisabled: boolean
}

export const MediaContainer = ({ className, isDisabled, ...props }: MediaContainerProps) =>
  <Box className={clsx(className, styles.mediaContainer({ disabled: isDisabled }))} {...props} />

export const DetailsContainer = ({ className, ...props }: BoxProps) =>
  <Box className={clsx(className, styles.detailsContainer)} {...props} />

export const PrimaryInfo = ({ className, ...props }: Text.TextProps) =>
  <Text.Small className={clsx(className, styles.primaryInfo)} {...props} />
