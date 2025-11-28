import React, { useState, useEffect } from 'react'
import './LlamadasCola.css'

function LlamadasCola({ onBack }) {
  const [queueTimes, setQueueTimes] = useState({
    1: 322, // 5:22 en segundos
    2: 435, // 7:15
    3: 470, // 7:50
    4: 541, // 9:01
    5: 641, // 10:41
    6: 690  // 11:30
  })

  // Actualizar tiempos en cola cada segundo
  useEffect(() => {
    const interval = setInterval(() => {
      setQueueTimes(prev => {
        const updated = { ...prev }
        Object.keys(updated).forEach(key => {
          updated[key] = updated[key] + 1
        })
        return updated
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const queueCalls = [
    { id: 1, name: 'Ernesto Cruz', phone: '+52 55 265 0024' },
    { id: 2, name: 'María Pérez', phone: '+52 55 001 4725' },
    { id: 3, name: 'Juan Ortiz', phone: '+52 55 445 1026' },
    { id: 4, name: 'Isabel San Juan', phone: '+52 55 544 2020' },
    { id: 5, name: 'Miranda Soto', phone: '+52 55 111 2066' },
    { id: 6, name: 'Roberto Cea', phone: '+52 55 152 2200' }
  ]

  const handleAccept = (callId) => {
    console.log('Aceptar llamada:', callId)
    // Aquí puedes agregar la lógica para aceptar la llamada
  }

  const handleReject = (callId) => {
    console.log('Rechazar llamada:', callId)
    // Aquí puedes agregar la lógica para rechazar la llamada
  }

  return (
    <div className="llamadas-cola-container">
      <h1 className="cola-title">LLAMADAS EN COLA</h1>
      
      <div className="cola-card">
        {/* Header del card */}
        <div className="cola-header">
          <button className="info-btn">Información</button>
          
          <div className="cola-nav">
            <div className="logo-small">
              <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 35 Q30 15 50 35" stroke="white" strokeWidth="2.5" fill="none" opacity="0.9"/>
                <path d="M30 5L50 25H35V35H25V25H10L30 5Z" fill="white" opacity="0.9"/>
                <g transform="translate(30, 40)">
                  <path d="M0,-4 L1.5,-1.5 L4,0 L1.5,1.5 L0,4 L-1.5,1.5 L-4,0 L-1.5,-1.5 Z" fill="white" opacity="0.9"/>
                </g>
              </svg>
            </div>
            <div className="nav-icons">
              <button className="nav-icon-btn" onClick={onBack}>
                <span>←</span>
              </button>
              <button className="nav-icon-btn">
                <span>→</span>
              </button>
              <button className="nav-icon-btn" onClick={onBack}>
                <span>⌂</span>
              </button>
            </div>
          </div>
        </div>

        {/* Lista de llamadas */}
        <div className="cola-list">
          {queueCalls.map((call) => (
            <div key={call.id} className="cola-item">
              <div className="cola-caller-info">
                <div className="profile-icon">👤</div>
                <div className="caller-data">
                  <div className="caller-name">{call.name}</div>
                  <div className="caller-phone">{call.phone}</div>
                </div>
              </div>

              <div className="cola-actions">
                <button 
                  className="action-btn accept-btn"
                  onClick={() => handleAccept(call.id)}
                >
                  Aceptar llamada
                </button>
                <button 
                  className="action-btn reject-btn"
                  onClick={() => handleReject(call.id)}
                >
                  Rechazar llamada
                </button>
              </div>

              <div className="cola-status">
                <div className="call-number">Llamada #{call.id}</div>
                <div className="queue-time-label">Tiempo en cola</div>
                <div className="queue-time-value">Esperando: {formatTime(queueTimes[call.id])}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LlamadasCola

