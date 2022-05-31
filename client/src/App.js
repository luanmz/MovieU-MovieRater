import './App.css';
import MovieDetails from './components/movieDetails/MovieDetails';
import Main from './components/main/Main'
import Nav from './components/nav/Nav'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/login/Login';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/:id' element={<MovieDetails/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
