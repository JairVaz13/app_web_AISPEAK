import React, { useState, useEffect } from 'react'
import LlamadasCola from '../llamada_cola'
import DetalleLlamada from '../detalles_llamada'
import './Dashboard.css'

function Dashboard({ onLogout }) {
  const [callTime, setCallTime] = useState(0) // tiempo en segundos
  const [isOnHold, setIsOnHold] = useState(false)
  const [showQueue, setShowQueue] = useState(false)
  const [selectedCall, setSelectedCall] = useState(null)

  // Simular el timer de la llamada
  useEffect(() => {
    const interval = setInterval(() => {
      setCallTime(prev => prev + 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const callHistory = [
    { 
      name: 'Ernesto Cruz', 
      phone: '+52 55 265 0024', 
      duration: '1:59',
      usuario: 'Ernesto Cruz',
      duracion: '00:01:59',
      telefono: '55 265 0024',
      fecha: '25/05/2005',
      hora: '10:30:15 am'
    },
    { 
      name: 'María Pérez', 
      phone: '+52 55 001 4725', 
      duration: '3:59',
      usuario: 'María Pérez',
      duracion: '00:03:59',
      telefono: '55 001 4725',
      fecha: '25/05/2005',
      hora: '09:15:42 am'
    },
    { 
      name: 'Juan Ortiz', 
      phone: '+52 55 445 1026', 
      duration: '2:20',
      usuario: 'Juan Ortiz',
      duracion: '00:02:20',
      telefono: '55 445 1026',
      fecha: '25/05/2005',
      hora: '08:45:10 am'
    }
  ]

  // Si se muestra el detalle de llamada, renderizar ese componente
  if (selectedCall) {
    return <DetalleLlamada callData={selectedCall} onBack={() => setSelectedCall(null)} />
  }

  // Si se muestra la cola, renderizar ese componente
  if (showQueue) {
    return <LlamadasCola onBack={() => setShowQueue(false)} />
  }

  return (
    <div className="dashboard-container">
      {/* Panel izquierdo */}
      <div className="left-panel">
        <div className="logo-section">
          <div className="logo">
            <span className="logo-icon">A</span>
            <span className="logo-text">ISPEAK</span>
          </div>
          <h2 className="welcome-text">!Bienvenido!</h2>
        </div>

        <div className="call-center-card">
          <div className="user-info">
            <div className="profile-icon">👤</div>
            <div className="user-details">
              <div className="user-name">Aldo Laurel</div>
              <div className="user-role">Operador</div>
            </div>
          </div>

          <div className="line-status">
            <div className="status-indicator">
              <span className="status-dot green"></span>
              <span>Línea activa</span>
            </div>
            <button className="disconnect-btn">
              <span className="status-dot red"></span>
              Desconectar línea
            </button>
          </div>

          <div className="navigation">
            <a href="#" className="nav-link active">
              <span className="nav-icon">📊</span>
              Panel principal
            </a>
            <a href="#" className="nav-link">
              <span className="nav-icon">📞</span>
              Registro de llamadas
            </a>
          </div>

          <button className="logout-btn" onClick={onLogout}>
            <span className="logout-icon">→</span>
            Cerrar sesión
          </button>
        </div>

        <button className="assistant-btn">
          <span className="assistant-icon">A</span>
          Asistente
        </button>
      </div>

      {/* Panel derecho */}
      <div className="right-panel">
        <h1 className="panel-title">Panel principal</h1>

        {/* Llamada en curso */}
        <div className="current-call-section">
          <div className="call-header">
            <div className="caller-info">
              <div className="profile-icon">👤</div>
              <div className="caller-details">
                <div className="caller-name">Elena Hernández</div>
                <div className="caller-phone">+52 55 221 5890</div>
              </div>
            </div>
            <div className="call-actions">
              <button 
                className={`action-btn hold-btn ${isOnHold ? 'active' : ''}`}
                onClick={() => setIsOnHold(!isOnHold)}
              >
                <span className="btn-icon">⏸</span>
                En espera
              </button>
              <button className="action-btn hangup-btn">
                <span className="btn-icon">●</span>
                Colgar
              </button>
            </div>
          </div>

          <div className="queue-section">
            <button className="queue-btn" onClick={() => setShowQueue(true)}>
              Ver llamadas en cola
            </button>
          </div>

          <div className="call-timer">
            <div className="timer-label">Tiempo en llamada</div>
            <div className="timer-display">{formatTime(callTime)}</div>
          </div>
        </div>

        {/* Historial de llamadas */}
        <div className="call-history-section">
          <h2 className="section-title">Historial de llamadas</h2>
          <div className="history-list">
            {callHistory.map((call, index) => (
              <div 
                key={index} 
                className="history-item"
                onClick={() => setSelectedCall(call)}
                style={{ cursor: 'pointer' }}
              >
                <div className="profile-icon">👤</div>
                <div className="history-details">
                  <div className="history-name">{call.name}</div>
                  <div className="history-phone">{call.phone}</div>
                </div>
                <div className="history-status">
                  <div className="status-text">Llamada terminada</div>
                  <div className="history-duration">Duración: {call.duration}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

