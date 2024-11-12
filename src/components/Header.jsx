import { Navigation } from './Navigation'
import { Who } from './Who'
export const Header = () => {
  return (
    <header className='header' id='main'>
      <div className='container'>
        <Navigation />
        <Who />
      </div>
    </header>
  )
}
