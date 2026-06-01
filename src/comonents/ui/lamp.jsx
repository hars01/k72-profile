import React from 'react'

export const LampContainer = ({ children, className = '' }) => {
  return (
    <div className={`relative min-h-screen flex items-center justify-center p-6 ${className}`}>
      <style>{`
        @keyframes lampGlow {
          0% { transform: translateY(-10px) scale(0.98); opacity: 0.9; }
          50% { transform: translateY(-22px) scale(1); opacity: 1; }
          100% { transform: translateY(-10px) scale(0.98); opacity: 0.9; }
        }
      `}</style>

      <div className="absolute top-8 left-0 right-0 flex justify-center pointer-events-none z-10">
        <div
          className="w-3/5 h-0.5 rounded"
          style={{
            background: 'linear-gradient(90deg, rgba(6,182,212,0.95), rgba(99,102,241,0.8))',
            boxShadow: '0 0 30px rgba(6,182,212,0.6)',
          }}
        />
      </div>

      <div className="absolute top-16 left-0 right-0 flex justify-center pointer-events-none z-0">
        <div
          style={{
            width: '60%',
            height: 260,
            borderRadius: '9999px',
            background: 'radial-gradient(circle at 50% 25%, rgba(6,182,212,0.95) 0%, rgba(6,182,212,0.25) 18%, rgba(0,0,0,0) 60%)',
            filter: 'blur(48px)',
            transform: 'translateY(-20px)',
            animation: 'lampGlow 3.2s ease-in-out infinite',
          }}
        />
      </div>

      <div className="relative z-20 w-full">
        {children}
      </div>
    </div>
  )
}

export default LampContainer
