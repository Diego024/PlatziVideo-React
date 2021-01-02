import React from 'react'
import '../assets/styles/components/Header.scss'
import user from '../assets/static/usuario.png'

const Header = () => (

    <header className="header">
        <a href="#"><img className="header__img" src="https://raw.githubusercontent.com/platzi/PlatziVideo/feature/react/src/assets/static/logo-platzi-video-BW2.png" alt="Logo de Platzi Video"/></a>
        <div className="header__menu">
            <div className="header__menu--profile">
                <img src={user} alt="User"/>
                <p>Perfil</p>
            </div>
            <ul>
                <li><a href="#">Cuenta</a></li>
                <li><a href="../login/login.html">Cerrar Sesión</a></li>
            </ul>
        </div>
    </header>

)

export default Header;