import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import BiVerse from './Components/BibleVerseLanding/BiVerse'
import ThemeProvider from './Components/Themes/ThemeProvider'

function App() {

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<BiVerse/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
