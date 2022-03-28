import React from 'react'
import './style.css'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as yup from 'yup'

function Login() {

    function handleClickLogin (values){
        console.log(values)
    }

    const validationsLogin = yup.object().shape({
        email: yup
          .string()
          .email("Email inválido")
          .required("O email é obrigatório"),
        password: yup
          .string()
          .min(6, "A senha deve ter pelo menos 6 caracteres")
          .required("A senha é obrigatória"),
      });

    return (
      <div className="Login-container">
        <h1>Log in</h1>
        <Formik 
        initialValues={{}} 
        onSubmit={handleClickLogin} 
        validationSchema={validationsLogin}>

            <Form className="login-form">

                <div className="login-form-group">
                    <Field name="email" className="form-field" placeholder="Email"></Field>

                    <ErrorMessage 
                    component="span"
                    name="email"
                    className='form-error'
                    />
                    
                </div>

                <div className="login-form-group">
                    <Field name="password" className="form-field" placeholder="Senha"></Field>

                    <ErrorMessage 
                    component="span"
                    name="password"
                    className='form-error'
                    />
                    
                </div>

                <button className='button-login' type='submit'>Login</button>

            </Form>

        </Formik>

        <p>
            Ainda não possui uma conta? 
            <a> Sign up</a>
        </p>
      </div>
    );
  }
  
  export default Login;
  