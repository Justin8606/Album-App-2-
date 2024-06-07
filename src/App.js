import logo from './logo.svg';
import './App.css';
import AddAlbum from './components/AddAlbum';
import SearchAlbum from './components/SearchAlbum';
import DeleteAlbum from './components/DeleteAlbum';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<AddAlbum/>}/>
    <Route path='/Search' element={<SearchAlbum/>}/>
    <Route path='/Delete' element={<DeleteAlbum/>}/>
    <Route path='/View' element={<ViewAll/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
