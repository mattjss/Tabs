import { TabBar } from './components/TabBar'

function App() {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      background: '#101010',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div
        className="project-frame"
        style={{
          position: 'relative',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: 10,
          overflow: 'hidden',
          background: '#101010',
          flexShrink: 0,
        }}
      >
        <div style={{
          position: 'absolute',
          bottom: 44,
          left: '50%',
          transform: 'translateX(-50%)',
        }}>
          <TabBar />
        </div>
      </div>
    </div>
  )
}

export default App
