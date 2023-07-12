import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../assets/css/login.css'
import { faUser, faUnlockAlt  } from '@fortawesome/free-solid-svg-icons'
function Index() {
    return (
        <div className='container_login'>
            <div className="login_form_container">
            <div className="login_form">
                <h2>Acceder</h2>
                <div className="input_group">
                    <FontAwesomeIcon icon={faUser}/>
                    <input
                        type="text"
                        placeholder="Username"
                        className="input_text"
                        autocomplete="off"
                    />
                </div>
                <div className="input_group">
                    <FontAwesomeIcon icon={faUnlockAlt}/>
                    <input
                        type="password"
                        placeholder="Password"
                        className="input_text"
                        autocomplete="off"
                    />
                </div>
                <div className="button_group" id="login_button">
                    <a>Ingresar</a>
                </div>
                <div className="fotter">
                    <a>Solicitar credenciales al administrador</a>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Index