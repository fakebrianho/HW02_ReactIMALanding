import styled from 'styled-components'
import {ReactComponent as LogoSVG} from './lr.svg'
import {Marginals} from '../../styles'
export const Logo = styled(LogoSVG)`
  height: auto;
  max-width: 760px;
  width: 100%;
`

export const Header = styled.header`
  ${Marginals}
  overflow: hidden;
  height: 100vh;
  align-content: center;
  justify-content: center;
  padding: 30px;
  opacity: 0;
  @media (max-width: 700px) {
    /* top: 150px; */
    padding: 15px;
  }
`
