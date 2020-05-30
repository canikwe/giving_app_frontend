import React, { useState } from 'react'

const LoginForm = ({ handleLogin, setLoginModal }) => {
  const [name, setName] = useState('')

  const handleChange = e => setName(e.target.value)

  const handleSubmit = e => {
    e.preventDefault()
    handleLogin({ name })
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <label htmlFor='name'>Name</label>
      <input type='text' onChange={handleChange} value={name} />
      <input type='submit' value='Login' />
      <button onClick={() => setLoginModal(false)}>Close</button>
    </form>
  )
}

export default LoginForm