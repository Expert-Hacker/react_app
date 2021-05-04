import {NavLink} from 'react-router-dom';
import './index.css'
function Menu()
{
    return (
        <>
        <a href="/">About</a>
        <a href="/contact">contact</a>
        <br/>
        <NavLink to="/" exact activeClassName="act_cls">About</NavLink>
        <NavLink to="/contact"exact  activeClassName="act_cls">Contact</NavLink>
        </>
        
    )
}
export default Menu;