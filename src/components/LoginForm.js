import React, { useState } from 'react'

const LoginForm = ({ handleLogin, handleCreate, setLoginModal }) => {
  const [name, setName] = useState('')

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
    <>
      <form onSubmit={handleSubmitLogin}>
        <h1>Login</h1>
        <label htmlFor='name'>Name</label>
        <input type='text' onChange={handleChange} value={name} />
        <input type='submit' value='Login' />
      </form>
      <hr />
      <form onSubmit={handleSubmitCreate}>
        <h1>Sign Up</h1>
        <label htmlFor='name'>Name</label>
        <input type='text' onChange={handleChange} value={name} />
        <input type='submit' value='Create User' />
      </form>
      <hr />
      <button onClick={() => setLoginModal(false)}>Close</button>
    </>
  )
}

export default LoginForm