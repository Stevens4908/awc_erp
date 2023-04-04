import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/login_styles.css'



class Logearse extends React.Component{


    constructor(props) {
        super(props);
    
        this.state = {
          username: '',
          password: '',
          error: '',
        };
      }

      handleSubmit = (event) => {
        event.preventDefault();
    
        
        const { username, password } = this.state;
    
        
        if (username === 'eztibenz' && password === 'hola1') {
          
          alert(`Bienvenido, ${username}!`);
          
          window.open("/dashboard" , '_self')
        } else {
          this.setState({ error: 'Usuario o contraseña incorrectos.' });
        }
      };
    
      handleUsernameChange = (event) => {
        this.setState({ username: event.target.value });
      };
    
      handlePasswordChange = (event) => {
        this.setState({ password: event.target.value });
      };

    render(){

        const { username, password, error } = this.state;
        return(
        
        <React.Fragment>
            
                

            <div className="vidrio">

                <div className="login-centro ">

                    <form onSubmit={this.handleSubmit}>
                        <div class="mb-3 mx-4">
                            <label for="exampleInputEmail1"  class="form-label">usuario</label>
                            <input type="text" class="form-control" id="username" value={username} onChange={this.handleUsernameChange} aria-describedby="emailHelp"/>
                            
                        </div>

                        <div class="mb-3 mx-4">
                            <label for="exampleInputPassword1" value="password" class="form-label">Contraseña</label>
                            <input type="password" class="form-control" id="password" value={password} onChange={this.handlePasswordChange}/>
                        </div>
                      
                        <button type="submit" class="btn btn-primary d-grid gap-2 col-6 mx-auto">Ingresar</button>

                        <div class="row mt-3">

                            <div class="col-6 ">
                                
                                <div id="emailHelp" className="form-text text-primary d-flex justify-content-center">Registrarse</div>
                            
                            </div>
                            <div class="col-6 justify-content-center">
                                
                                <div id="emailHelp" className="form-text text-primary d-flex justify-content-center">Olvidé la contraseña</div>

                            </div>

                        </div>

                        {error && <p>{error}</p>}
                    </form>

                </div>

            </div>

        </React.Fragment>
        
        
        
        
        )

    }
    
}


export default Logearse