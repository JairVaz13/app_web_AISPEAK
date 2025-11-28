import React from 'react'
import './Perfil.css'

function Perfil({ userData, onBack }) {
  // Datos por defecto si no se pasan
  const defaultUserData = {
    nombre: 'Andrea González Hérnandez',
    email: 'andygo@gmail.com',
    username: 'Andrea@25'
  }

  const data = userData || defaultUserData

  return (
    <div className="perfil-container">
      {/* Panel izquierdo */}
      <div className="perfil-left-panel">
        <div className="perfil-content">
          {/* Icono de perfil */}
          <div className="perfil-avatar">
            <div className="avatar-circle">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="50" fill="#E5E7EB"/>
                <path d="M50 30C43.3726 30 38 35.3726 38 42C38 48.6274 43.3726 54 50 54C56.6274 54 62 48.6274 62 42C62 35.3726 56.6274 30 50 30Z" fill="#1F2937"/>
                <path d="M30 75C30 65 38 60 50 60C62 60 70 65 70 75V80H30V75Z" fill="#1F2937"/>
              </svg>
            </div>
          </div>

          {/* Tag con logo y username */}
          <div className="perfil-tag">
            <div className="tag-logo">
              <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 35 Q30 15 50 35" stroke="white" strokeWidth="2.5" fill="none" opacity="0.9"/>
                <path d="M30 5L50 25H35V35H25V25H10L30 5Z" fill="white" opacity="0.9"/>
                <g transform="translate(30, 40)">
                  <path d="M0,-4 L1.5,-1.5 L4,0 L1.5,1.5 L0,4 L-1.5,1.5 L-4,0 L-1.5,-1.5 Z" fill="white" opacity="0.9"/>
                </g>
              </svg>
            </div>
            <span className="tag-username">{data.username}</span>
          </div>

          {/* Información del usuario */}
          <div className="perfil-info">
            <div className="info-field">
              <div className="info-label">Nombre Completo</div>
              <div className="info-value">{data.nombre}</div>
            </div>

            <div className="info-field">
              <div className="info-label">Correo Electrónico</div>
              <div className="info-value">{data.email}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Panel derecho */}
      <div className="perfil-right-panel">
        {/* Logo ISPEAK en la esquina superior derecha */}
        <div className="perfil-header-logo">
          <div className="header-logo-icon">
            <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 35 Q30 15 50 35" stroke="white" strokeWidth="2.5" fill="none" opacity="0.9"/>
              <path d="M30 5L50 25H35V35H25V25H10L30 5Z" fill="white" opacity="0.9"/>
              <g transform="translate(30, 40)">
                <path d="M0,-4 L1.5,-1.5 L4,0 L1.5,1.5 L0,4 L-1.5,1.5 L-4,0 L-1.5,-1.5 Z" fill="white" opacity="0.9"/>
              </g>
            </svg>
          </div>
          <span className="header-logo-text">ISPEAK</span>
        </div>

        {/* Botón Inicio en la esquina inferior derecha */}
        <div className="perfil-footer">
          <button className="inicio-btn" onClick={onBack}>
            Inicio
          </button>
        </div>
      </div>
    </div>
  )
}

export default Perfil

