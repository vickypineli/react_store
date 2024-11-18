import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'


const Navbar = () => {
    const context = useContext(ShoppingCartContext)
    const activeStyle = "underline underline-offset-8"
    
    
    return (
       <nav className="flex justify-between items-center fixed z-10 top-0 left-0 w-full py-5 px-8 text-sm font-light">
        <ul className="flex items-center gap-3">
            <li className="font-semibold text-lg">
                <NavLink 
                    to="/"
                    className={({isActive}) => isActive ? activeStyle : undefined
                    }>
                    Shopi
                </NavLink>
            </li>
            <li><NavLink 
                    to="/"
                    className={({isActive}) => isActive ? activeStyle : undefined
                    }>
                    All
                </NavLink>
            </li>
            <li><NavLink 
                to="/clothes"
                className={({isActive}) => isActive ? activeStyle : undefined
                }>
                Clothes
                </NavLink>
            </li>
            <li>
                <NavLink 
                to="/electronics"
                className={({isActive}) => isActive ? activeStyle : undefined
                }>
                Electronics
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/fornitures"
                    className={({isActive}) => isActive ? activeStyle : undefined
                    }>Fornitures
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/toys"
                    className={({isActive}) => isActive ? activeStyle : undefined
                    }>
                    Toys
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/others"
                    className={({isActive}) => isActive ? activeStyle : undefined
                    }>Others
                </NavLink>
            </li>
        </ul>
        <ul className="flex items-center gap-3">    
            <li className="text-black-500">info@store.com</li>
            <li>
                <NavLink 
                    to="/my_account"
                    className={({isActive}) => isActive ? activeStyle : undefined
                       }>
                     My Account
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/my_orders"
                    className={({isActive}) => isActive ? activeStyle : undefined
                    }>
                    My Orders
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/signin"
                    className={({isActive}) => isActive ? activeStyle : undefined
                    }>
                    Signin
                </NavLink>
            </li>
            <li>
                🛒 {context.count}
            </li>
        </ul>
       </nav>
    )
}
export default Navbar