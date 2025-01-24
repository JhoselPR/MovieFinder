import './App.css'
import MainPage from './components/MainPage';
import { Route, Routes } from 'react-router-dom';
import SingleMovie from './components/SingleMovie';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/movies/:id' element={<SingleMovie />} />
      </Routes>
    </div>
  )
}

export default App
