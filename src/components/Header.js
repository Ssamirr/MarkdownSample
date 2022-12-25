import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div className='header'>
            <div >
                <ul>
                    <li>
                        <NavLink to={"/"}>{"<>"} File</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/preview"}>Preview</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header