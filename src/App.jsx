import './App.scss'
import { Header } from './components/Header'
import { Skills } from './components/Skills'
import { Who } from './components/Who'

function App() {
  // Анимашка при скролле
  function onEntry(entry) {
    entry.forEach((change) => {
      // Если элемент в зоне видимости, то класс добавляется
      if (change.isIntersecting) {
        change.target.classList.add('title__show')
      }
      // Если элемент пропал из зоны видимости, то класс убирается
      else {
        change.target.classList.remove('title__show')
      }
    })
  }

  let options = {
    threshold: [0.5],
  }
  let observer = new IntersectionObserver(onEntry, options)
  let elements = document.querySelectorAll('.title__animation')

  for (let elm of elements) {
    observer.observe(elm)
  }

  return (
    <>
      <Header />
      <Who />
      <Skills />
    </>
  )
}

export default App
