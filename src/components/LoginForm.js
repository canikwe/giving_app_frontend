import React, { useState } from 'react'
import { Modal, Grid, Segment, Button, Divider, Form } from 'semantic-ui-react'

const LoginForm = ({ handleLogin, handleCreate, setLoginModal, loginModal }) => {
  const [name, setName] = useState('')
  const [displayLogin, setDisplayLogin] = useState(true)

  const handleChange = e => setName(e.target.value)

  const handleSubmitLogin = e => {
    e.preventDefault()
    handleLogin({ name })
  }

  const handleSubmitCreate = e => {
    e.preventDefault()
    handleCreate({ name })
  }

  return (
    <Modal open={loginModal} onClose={() => setLoginModal(false)} closeIcon>
      <Modal.Header>Log In or Sign Up</Modal.Header>
      <Segment placeholder>
        <Grid columns={2} relaxed='very' stackable>
          <Grid.Column>
            {displayLogin ? 
            <Form onSubmit={handleSubmitLogin}>
              <Form.Input
                icon='user'
                iconPosition='left'
                label='Name'
                placeholder='Name'
                onChange={handleChange}
                value={name}
              />
              <Button content='Log In' onClick={handleSubmitLogin} primary />
            </Form>
                :
              <Button onClick={() => setDisplayLogin(true)} content='Log In' icon='signup' size='big' />
            
            }
          </Grid.Column>

          <Grid.Column verticalAlign='middle'>
            {!displayLogin ?
              <Form onSubmit={handleSubmitCreate}>
                <Form.Input
                  icon='user'
                  iconPosition='left'
                  label='Name'
                  placeholder='Name'
                  onChange={handleChange}
                  value={name}
                />
                <Button content='Sign In' onClick={handleSubmitCreate} primary />
              </Form>
              :
            <Button onClick={() => setDisplayLogin(false)} content='Sign up' icon='signup' size='big' />
          }
          </Grid.Column>
        </Grid>

        <Divider vertical>Or</Divider>
      </Segment>
    </Modal>
  )
}

export default LoginForm
