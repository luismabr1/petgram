import React, { Fragment } from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import {Error, Form, Input, Title} from './styles'
import {SubmitButton} from '../SubmitButton'

export const UserForm = ({disabled, error, onSubmit, title }) => {
    const email = useInputValue('')
    const password = useInputValue('')

    const handleSubmit = (event) => {
      event.preventDefault()
      onSubmit({
        email: email.value, 
        password: password.value
      })
    }
  
    return (
      <Fragment>
       
        <Form disabled={disabled} onSubmit={handleSubmit}>
          <Title>{title}</Title>
          {/*  en vez de usar las propiedades por separado usamos el operador spread "..." y se usa todo de una vez  */}
          <Input disabled={disabled} placeholder='Email' {...email} />
          <Input disabled={disabled} placeholder='Password' type='password' {...password} />
          <SubmitButton>{title}</SubmitButton>
        </Form>
        {error && <Error>{error}</Error>}
      </Fragment>
    )
  }
