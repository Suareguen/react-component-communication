import './Header.css'
import PropTypes from 'prop-types'
import InputSearch from '../InputSearch/InputSearch'

function Header({ title }) {

  return (
    <div>
        <h1>{title}</h1>
        <InputSearch />
    </div>
  )
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header