import {ButtonRed, ButtonWhite} from "./styles"

import PropTypes from 'prop-types'

function Button2({ children, red, ...rest }) {
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

Button2.propTypes = {
  children: PropTypes.node.isRequired,
};
Button2.propTypes = {
 red: PropTypes.node.isRequired,
};


export default Button2;