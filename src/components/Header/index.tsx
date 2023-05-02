import styled from 'styled-components'

import { Flex } from 'rebass'
import Logo from 'src/assets/logo-white.svg'
import { PrimaryButton } from '../Button'

const StyledHeader = styled.header`
  position: sticky;
  padding: 24px;
`

export default function Header() {
  return (
    <StyledHeader>
      <Flex justifyContent={'space-between'}>
        <img height={'32px'} src={Logo} alt={'Logo'} />

        <PrimaryButton>Connect wallet</PrimaryButton>
      </Flex>
    </StyledHeader>
  )
}
