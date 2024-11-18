import './App.scss'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Portfolio } from './components/Portfolio'
import { Skills } from './components/Skills'
import { Who } from './components/Who'

function App() {
  return (
    <>
      <Header />
      <Who />
      <Skills />
      <Portfolio />
      <Footer />
    </>
  )
}

export default App
