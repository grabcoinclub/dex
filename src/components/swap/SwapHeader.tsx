import { Percent } from '@uniswap/sdk-core'
import styled from 'styled-components/macro'

import { RowEnd } from '../Row'
import SettingsTab from '../Settings'

const StyledSwapHeader = styled.div`
  padding: 28px 38px 0;
  width: 100%;
  color: ${({ theme }) => theme.text2};
`

export default function SwapHeader({ allowedSlippage }: { allowedSlippage: Percent }) {
  return (
    <StyledSwapHeader>
      <RowEnd>
        <SettingsTab placeholderSlippage={allowedSlippage} />
      </RowEnd>
    </StyledSwapHeader>
  )
}
