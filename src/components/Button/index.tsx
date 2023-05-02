import styled from 'styled-components'
import { Button as RebassButton } from 'rebass/styled-components'

export const Base = styled(RebassButton)`
  border-radius: 10px;
  font-weight: 500;
`

export const PrimaryButton = styled(Base)`
  background: ${({ theme }) => theme.primary1};
`
