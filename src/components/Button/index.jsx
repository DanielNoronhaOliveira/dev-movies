

import {ButtonRed, ButtonWhite} from "./styles"

import PropTypes from 'prop-types'

function Button({ children, red, ...rest }) {
  return (
  <>
  { red ? (
     <ButtonRed >{children}</ButtonRed>
  ) : (
  <ButtonWhite {...rest}>{children}</ButtonWhite>
)}
  </>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};
Button.propTypes = {
 red: PropTypes.node.isRequired,
};


export default Button;