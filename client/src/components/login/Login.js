import React from 'react'
import './Login.css'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as yup from 'yup'

function Login() {

    function handleClickLogin (values){
        console.log(values)
    }

    const validationsLogin = yup.object().shape({
        email: yup
          .string()
          .email("*Email inválido")
          .required("*O email é obrigatório"),
        password: yup
          .string()
          .min(6, "*A senha deve ter pelo menos 6 caracteres")
          .required("*A senha é obrigatória"),
      });

    return (
      <div className="Login-container">
        
        <div className='imageContainer'></div>

        <Formik 
        initialValues={{}} 
        onSubmit={handleClickLogin} 
        validationSchema={validationsLogin}>

            

            <Form className="login-form">

              <div className='title'>
               <h1>Login</h1>
                <h2>Welcome again</h2>
              </div> 
              

              <div className="login-form-group">
                  <Field name="email" 
                  className="form-field" 
                  placeholder="Email"
                  autocomplete="off"></Field>

                  <ErrorMessage 
                  component="span"
                  name="email"
                  className='form-error'
                  />
                  
              </div>

              <div className="login-form-group">
                  <Field name="password"
                  type='password'
                  className="form-field" 
                  placeholder="Senha"></Field>

                  <ErrorMessage 
                  component="span"
                  name="password"
                  className='form-error'
                  />
                  
              </div>

              <button className='button-login' type='submit'>Login</button>
              
              <p className='register-link-text'>
              Ainda não possui uma conta? 
              <a href='register' target='_blank' > Sign up</a>
              </p>

            </Form>
            

        </Formik>

        
      </div>
    );
  }
  
  export default Login;
  