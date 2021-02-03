import React from 'react'
import className from 'classnames'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import {logoutRequest} from '../actions'
import gravatar from '../utils/gravatar'
import PropTypes from 'prop-types'
import '../assets/styles/components/Header.scss'
import userPicture from '../assets/static/usuario.png'

const Header = props => {
    
    const { user, isLogin, isRegister, isNotFound } = props;
    const hasUser = Object.keys(user).length > 0;

    const handleLogOut = () => {
        props.logoutRequest({})
    }

    const headerClass = className('header', {
        isLogin,
        isRegister,
        isNotFound,
    })

    return(
        <header className={headerClass}>
            <Link to="/">
                <img className="header__img" src="https://raw.githubusercontent.com/platzi/PlatziVideo/feature/react/src/assets/static/logo-platzi-video-BW2.png" alt="Logo de Platzi Video"/>
            </Link>
            <div className="header__menu">
                <div className="header__menu--profile">
                    { hasUser ?
                        <img src={gravatar(user.email)} alt="Profile Picture"/>
                    : 
                        <img src={userPicture} alt="User"/>
                    }
                    <p>Perfil</p>
                </div>
                <ul>
                    { hasUser ?
                        <li><a href="#">{user.name}</a></li>
                    : null
                    }
                    {hasUser ? 
                        <li>
                            <a href="#logOut" onClick={handleLogOut}>Cerrar Sesión</a>
                        </li>
                    :
                        <li>
                            <Link to="/login">
                                Iniciar Sesión
                            </Link>
                        </li>
                    }
                </ul>
            </div>
        </header>
    )
}

const mapStateToProps = state => {
    return {
        user : state.user
    }
}

const mapDispatchToProps = {
    logoutRequest
}

Header.propTypes = {
    user: PropTypes.object,
    isLogin: PropTypes.bool,
    isRegister: PropTypes.bool
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)