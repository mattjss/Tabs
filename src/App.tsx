import { TabBar } from './components/TabBar'

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor: '#101010', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', bottom: 80, left: '50%', transform: 'translateX(-50%)' }}>
        <TabBar />
      </div>
    </div>
  )
}

export default App
