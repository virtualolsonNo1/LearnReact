import Versions from './components/Versions'
import TopBar from './components/TopBar'
import electronLogo from './assets/electron.svg'

function App() {
  const ipcHandle = () => window.electron.ipcRenderer.send('ping')

  return (
    <>
    <TopBar></TopBar>
    <h1 className='text-lg'>Hello World</h1>
    </>
  )
}

export default App
