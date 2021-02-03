import React, {useState} from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import {loginRequest} from '../actions'
import Header from '../components/Header'
import '../assets/styles/App.scss'
import '../assets/styles/components/Login.scss';

const Login = props => {

    const [form, setValues] = useState({
        email: '',
    });

    const handleInput = event => {
        setValues({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.loginRequest(form);
        props.history.push('/')
    }

    return (
        <>
            <Header isLogin/>
            <section className="login">
                <div className="login__container">
                    <h2 tabIndex="0">Inicia Sesión</h2>
                    <form className="login__container--form" onSubmit={handleSubmit}>
                        <input 
                            name="email"
                            className="input" 
                            aria-label="Correo electrónico" 
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
                        <button className="button" type="submit" >Iniciar sesión</button>
                        <div className="login__container--remember-me">
                            <label>
                                <input type="checkbox" id="cbox1" value="checkbox"/>Recuérdame
                            </label>
                            <a href="#">Olvidé mi contraseña</a>
                        </div>
                    </form>
                    <section className="login__container--social-media">
                        <div><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADcUlEQVRoge2aT4iVVRiHn3MdZ8CSNK3oH2WlIakN0SLKHIqGFrVqUbYz2oSZtgiCIEKhRW0LMgpsEdWuTX8giMqaFpKoKAQxOgQ1MtrOBod05nHxXeHeO3PvPef7zucl8Le8nPN7n/fwfed9z/kuXFVvqavU1XX5h1xG6u3A48AYcB+wAVjVMewfYBI4BkwA34UQZnIxJEsdUV9UD6oLpuui+r26XR26kuDL1VfV6RLQ3fSn+oLaqBv+EfVERvBOHVY31wHeUN9QL9QIf1lz6q6c8MPq51cAvFP7rfpuNOG/HQC8FhvD01XgG+oXA4R/perqvzVA+N1V4ccs9ulBwEev/JKVWB2hqJb3lskdOAx8A5wETjfj3AhsBsaB0S6xBfaEEN4rEbfFRV8vsXIX1Y/VOyP8t6if2V69qz/zTfMV6plE+JPq/SVijVtU8zzwTdOXE+En1LUV4t2kPp8Fvmn4WwL8KfWGbMGrSt2QAP+fumnQzJ2d3xMJcz8KIZzICVNGnX3Gtsh588Db/QapAdifChWh4yGE95cKeDzy8TkYE0UNCY9kiv64HKPREqwBrI9cga8ix9WldeowtL8D1wIjkQaT2ZHSNATcBu0JrEwwmM6KU04rYfEuFKtstxkVdA20J/BvwuRb8rKU0nloT+AcMBc5+Z7sOOmahZYEQggLFO1vjJ6qgyhRp2HxOxBbWR9Wb83Lk6SZEMI5WFyJfwKeizBYBrwJvNRrUAhB9dlIqOuBD4jbIH5f8ld1fUI1vKBuiYTrK/WdhNj7ehkdSjCaMkM7rT5o0d3G6rFeZjsTjFR/rZKEerf6V0K8szbbiG6GK9SZxCSm1AdKwG9V/06M1f/Ar76WaKo6rx5Q10X436F+aPo964I62urV7VplGDgKbIxczLbpwBGKa5VJir5pHlhL8eFjDHiUcm3MlyGEZ1p/6LplqVuBH1i81Q5K88Bo5ymw6yqEEH4B9tZNlaB3k4+wFieqT0q8D7l1xF47T58khtWvBwg/rd5VCr4lieXqpwOAP2uuam/xOO0xrWJW0aRa5nK5byIPqcdqhj+gdn5jzprEkLrLtBYgRofU8drAl0hkRN2h/mhRicto1uKq/ckyDDn/anAzxdXkNmATxR3Tmo5hc8AUxcnvKPAzMBFCmM3FkV3qddb4Z4//vS4B0bdeaq3U/rQAAAAASUVORK5CYII=" alt="Google"/>Inicia sesión con Google</div>
                        <div><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADaklEQVRoge2ZTYhVZRjHf4+TNUFN2jjVBFERjJjkcmoTFhQuyk27osBFi2hMQQQrhKBFEEQtrGjTx6pFQdJA20wopA8qtA/SpIWCiU7NqEzMVebX4r3djmeO9557Pec2xP3BC/c+5z3v83/e87zn/TgwYMCAvqNuVF9XD6oz6l/qr+q0ukUdKdHGcDljhagb1H125pQ6pQ4VtDGuvqZuy18YVX9Qb6tJ/CPquRLis3yijqhXq5vUt5tP64R6Xd7BzuZNP6ujFYt/QD3fpfh/OKkuZP4vqpuLnHyaqXRQvbki8WPqHz2KL2JHpu2JFRlf6zO/7wK+UNdWEMNuYHUF7cwDW4ED6rPqIeCO1lW1URDtnPpYrx5Nudtt3l+KWS9Ow115Z+0cvWcP40LdXJH4PO+okXf2Y4ebZtSt6hVdBPBcDeLfUFupnx0Dn3fQcz2wBzisblevLRHDTWWDLclTETEVEYtLrphmx26YVd9VH1avKvKmvlll1xf5iJzDfcB9PfTMOeDrZvkGOA4cA54EXuihvSIaEbGko/IB3AJ8T0qX5cZMRKzJG1tjQB2JiGPAFmChn8pKMldkzA7io+r7wCpgB3CmH6q64LciY/aVOAc82izLkaNFxuwT+KpPQnrl2yJjNoDpPgnplQNFxtZbSF0JHAFu7ZeiLpgBbiiawFpPICLOA9vyFZYJHxfOvlycQkTENPBKXyR1x97SNdVQXzLtfJYDx03pXciKvCEijIjngU3Adz31V7W81Uzv8qhr1JXqsPqEaZ/8X3BGHWun9VJr+/uBD7qKuh5ejYhT7SpEkVG9EviJ7J6z/5wEJiKi7ZJmyRgAiIgG8AxQuAbvE1OdxHfEeraEZagufU374IVOHivksLqqsgCaQdypfqReqFn8WXV9Z0X/UjiI2wQyTtpyrgMeB27v5v4OzAMPRcRnFba5FNPp8N6Ke35efbBu4atNR3p/Viz+hDpZl+ghdVLdY8rPqvnSdJDQM6FuAIZJ42GsWcaBSWAjaY9cNQ3gReDliLhwWS2Z1jxPq7/X0MN5Fk1vs3WVdEMukGtME9eRGoQvqB+qd1cuvCCQUO81fc45fRmiG+p+05efG+vS23YeMB1hTwD3NMta0qndaLMMkY4VZ0n71l9Ii8BDwP6IOFuX8AEDBvxP+BvEUMGNUHf4AAAAAABJRU5ErkJggg==" alt="Twitter"/>Inicia sesión con Twitter</div>
                    </section>
                    <p className="login__container--register">
                        No tienes ninguna cuenta 
                        <Link className="registerLink" to="/register">
                            Regístrate
                        </Link>
                    </p>
                </div>
            </section>
        </>
    )
}

const mapDispatchToProps = {
    loginRequest
}

export default connect(null, mapDispatchToProps)(Login)