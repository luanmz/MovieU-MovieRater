import React from 'react'
import './Register.css'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as yup from 'yup'

function Register() {

    function handleClickRegister (values){
        console.log(values)
    }

    const validationsRegister = yup.object().shape({
        email: yup
          .string()
          .email("*Email inválido")
          .required("*O email é obrigatório"),
        password: yup
          .string()
          .min(6, "*A senha deve ter pelo menos 6 caracteres")
          .required("*A senha é obrigatória"),
        confirmPassword: yup
          .string()
          .oneOf([yup.ref("password"), null], "*As senhas não são iguais" )
          .required("*Confirme sua senha"),
      });

    return (
      <div className="Register-container">
        <h1>Sign up</h1>
        <Formik 
        initialValues={{}} 
        onSubmit={handleClickRegister} 
        validationSchema={validationsRegister}>

            <Form className="Register-form">

                <div className="Register-form-group">
                    <Field name="email" 
                    className="form-field" 
                    placeholder="Email"></Field>

                    <ErrorMessage 
                    component="span"
                    name="email"
                    className='form-error'
                    />
                    
                </div>

                <div className="Register-form-group">
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

                <div className="Register-form-group">
                    <Field name="confirmPassword"  
                    type='password'
                    className="form-field"
                    placeholder="Confirme sua senha"></Field>

                    <ErrorMessage 
                    component="span"
                    name="confirmPassword"
                    className='form-error'
                    />
                    
                </div>

                <button className='button-sign-up' type='submit'>Sign Up</button>

            </Form>

        </Formik>
      </div>
    );
  }
  
  export default Register;
  