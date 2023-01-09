import { NavLink } from 'react-router-dom'
import { useAuth } from './auth'

export const Navbar = () => {
  const auth = useAuth()
  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? '' : '#153C00',
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'none' : 'none',
      margin: isActive ? '20px' : '20px',
      bacgroundColor : isActive ? '#417b4d' : '#667d6b'
    }
  }

  return (
    <nav className='navbar navbar-expand-lg' id='Navbar'>
      <NavLink to='/' style={navLinkStyles}>
        Home
      </NavLink>
      <NavLink to='/popular' style={navLinkStyles}>
      Community
      </NavLink>
      <NavLink to='/yourPerfil' style={navLinkStyles}>
        Profile
      </NavLink>
      {!auth.user && (
        <NavLink to='/login' style={navLinkStyles}>
          Login
        </NavLink>
      )}
      <NavLink to='/logout' id='logout' style={({ isActive }) => ({
              color: isActive ? '#153C00' : '#153C00',
              fontWeight: isActive ? 'bold' : 'normal',
              textDecoration: isActive ? 'none' : 'none',
              margin: isActive ? '50%' : '50%',
              fontSize: isActive ? '1px' : '20px'
            })}>
        Logout
      </NavLink>
    </nav>
  )
}
export default Navbar