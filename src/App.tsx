import { TabBar } from './components/TabBar'

function App() {
  return (
    <div style={{ minHeight: '100vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ position: 'relative', width: 1000, height: 1000, backgroundColor: '#101010' }}>
        <div style={{ position: 'absolute', bottom: 120, left: '50%', transform: 'translateX(-50%)' }}>
          <TabBar />
        </div>
      </div>
    </div>
  )
}

export default App
