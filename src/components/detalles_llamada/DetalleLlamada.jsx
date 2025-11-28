import React from 'react'
import './DetalleLlamada.css'

function DetalleLlamada({ callData, onBack }) {
  // Datos por defecto si no se pasan
  const defaultCallData = {
    usuario: 'Andrea González Hérnandez',
    duracion: '00:01:30',
    telefono: '775 152 0263',
    fecha: '25/05/2005',
    hora: '11:59:03 am'
  }

  const data = callData || defaultCallData

  const transcription = [
    { speaker: 'Agente', text: '¡Gracias por llamar a AISPEAK!, ¿con quién tengo el gusto de hablar?' },
    { speaker: 'Cliente', text: 'Hola, mi nombre es Andrea González' },
    { speaker: 'Agente', text: 'Hola, Andrea González ¿En qué puedo ayudarle hoy?' },
    { speaker: 'Cliente', text: 'Necesito revisar el estado de mi pedido número 85493. Lo hice hace una semana y aún no he recibido ninguna actualización.' },
    { speaker: 'Agente', text: 'Entiendo perfectamente su preocupación. Permítame un momento mientras localizo la información. (Pausa breve)' },
    { speaker: 'Agente', text: 'Gracias por su espera, Andrea González Veo que su pedido ya fue despachado y se encuentra actualmente en tránsito con la paquetería El tiempo estimado de entrega es entre mañana y pasado mañana. ¿Le gustaría que le envíe el número de seguimiento por mensaje de texto o correo electrónico?' },
    { speaker: 'Cliente', text: 'Sí, por favor, envíemelo al correo electrónico que tienen registrado.' },
    { speaker: 'Agente', text: 'Hecho. Acabo de enviarle el correo con toda la información. ¿Hay algo más en lo que pueda ayudarle con su pedido o cualquier otro servicio?' },
    { speaker: 'Cliente', text: 'No, eso sería todo. Muchas gracias.' }
  ]

  const handleDownloadPDF = () => {
    console.log('Descargar PDF de la llamada')
    // Aquí puedes agregar la lógica para descargar el PDF
  }

  const handleHistory = () => {
    if (onBack) {
      onBack()
    }
  }

  return (
    <div className="detalle-llamada-container">
      {/* Panel izquierdo */}
      <div className="detalle-left-panel">
        <h1 className="detalle-title">Detalle de Llamadas</h1>
        
        <div className="detalle-info-section">
          <div className="info-item">
            <div className="info-label">Usuario</div>
            <div className="info-value">{data.usuario}</div>
          </div>

          <div className="info-item">
            <div className="info-label">Duración</div>
            <div className="info-value">{data.duracion}</div>
          </div>

          <div className="info-item">
            <div className="info-label">Telefóno</div>
            <div className="info-value">{data.telefono}</div>
          </div>

          <div className="info-item">
            <div className="info-label">Fecha y Hora</div>
            <div className="info-value">
              <div>{data.fecha}</div>
              <div>{data.hora}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Panel derecho */}
      <div className="detalle-right-panel">
        {/* Header del panel derecho */}
        <div className="detalle-header">
          <div className="assistant-header">
            <div className="assistant-logo">
              <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 35 Q30 15 50 35" stroke="white" strokeWidth="2.5" fill="none" opacity="0.9"/>
                <path d="M30 5L50 25H35V35H25V25H10L30 5Z" fill="white" opacity="0.9"/>
                <g transform="translate(30, 40)">
                  <path d="M0,-4 L1.5,-1.5 L4,0 L1.5,1.5 L0,4 L-1.5,1.5 L-4,0 L-1.5,-1.5 Z" fill="white" opacity="0.9"/>
                </g>
              </svg>
            </div>
            <span className="assistant-text">Asistente</span>
          </div>
          
          <button className="download-pdf-btn" onClick={handleDownloadPDF}>
            Descargar PDF
          </button>
        </div>

        {/* Transcripción IA */}
        <div className="transcription-section">
          <h2 className="transcription-title">Transcripción IA</h2>
          
          <div className="transcription-content">
            {transcription.map((item, index) => (
              <div key={index} className="transcription-line">
                <div className={`speaker-icon ${item.speaker.toLowerCase()}`}>
                  {item.speaker === 'Agente' ? (
                    <span className="check-icon">✓</span>
                  ) : (
                    <span className="dots-icon">⋯</span>
                  )}
                </div>
                <div className="transcription-text">
                  <span className="speaker-name">{item.speaker}:</span>
                  <span className="speaker-message"> {item.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Botón Historial */}
        <div className="detalle-footer">
          <button className="history-btn" onClick={handleHistory}>
            Historial
          </button>
        </div>
      </div>
    </div>
  )
}

export default DetalleLlamada

