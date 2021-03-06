import React, {useState} from 'react';
import {connect} from 'react-redux'
import {registerRequest} from '../actions'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import '../assets/styles/components/Register.scss';

const Register = props => {
    
    const [form, setValues] = useState({
        email: '',
        name: '',
        password: ''
    });

    const handleInput = event => {
        setValues({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        registerRequest(form)
        props.history.push('/')
        console.log(form)
    }

    return(
        <>
            <Header isRegister />
            <section className="register">
                <div className="register__container">
                    <h2 tabIndex="0">Regístrate</h2>
                    <form className="register__container--form" onSubmit={handleSubmit}>
                        <input 
                            name="name"
                            className="input" 
                            aria-label="Nombre"  
                            type="text" 
                            placeholder="Nombre"
                            onChange={handleInput}
                        />
                        <input 
                            name="email"
                            className="input" 
                            aria-label="Correo" 
                            type="text" 
                            placeholder="Correo electrónico"
                            onChange={handleInput}
                        />
                        <input 
                            name="password"
                            className="input" 
                            aria-label="Contraseña" 
                            type="password" 
                            placeholder="Contraseña"
                            onChange={handleInput}
                        />
                        <button className="button" type="submit">Registrarme</button>
                    </form>
                    <p className="register__container--register">
                        <Link to="login">
                            Iniciar sesión
                        </Link>
                    </p>
                </div>
            </section>
        </>
    )
};

export default connect(null, null)(Register);