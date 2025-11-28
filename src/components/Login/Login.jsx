import { useState } from 'react'
import './Login.css'

function Login({ onLogin }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí puedes agregar la lógica de autenticación
    console.log('Login attempt:', { username, password, rememberMe })
    
    // Por ahora, cualquier credencial funciona para demo
    // En producción, aquí validarías con el backend
    if (username && password) {
      if (rememberMe) {
        localStorage.setItem('rememberedUser', username)
      }
      onLogin()
    }
  }

  return (
    <div className="login-container">
      <div className="login-content">
        {/* Logo */}
        <div className="logo-container">
          <svg className="logo-icon" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Dome/Arc shape */}
            <path d="M10 35 Q30 15 50 35" stroke="white" strokeWidth="2.5" fill="none" opacity="0.9"/>
            {/* Upward arrow/mountain peak */}
            <path d="M30 5L50 25H35V35H25V25H10L30 5Z" fill="white" opacity="0.9"/>
            {/* Starburst in center */}
            <g transform="translate(30, 40)">
              <path d="M0,-4 L1.5,-1.5 L4,0 L1.5,1.5 L0,4 L-1.5,1.5 L-4,0 L-1.5,-1.5 Z" fill="white" opacity="0.9"/>
            </g>
          </svg>
          <h1 className="logo-text">ISPEAK</h1>
        </div>

        {/* Login Form */}
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              id="username"
              className="form-input"
              placeholder="Usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              id="password"
              className="form-input"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-options">
            <label className="checkbox-label">
              <input
                type="checkbox"
                className="checkbox-input"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span className="checkbox-text">Recordar cuenta</span>
            </label>
            <a href="#" className="forgot-password">¿Olvidaste tu contraseña?</a>
          </div>

          <button type="submit" className="login-button">
            ACCEDER
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login

