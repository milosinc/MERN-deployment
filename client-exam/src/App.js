import './App.css';
import { Route, Routes } from 'react-router-dom'
import PetList from './components/petList';
import PetForm from './components/petForm';
import PetViewer from './components/petViewer';
import PetShelter from './views/PetShelter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <PetShelter></PetShelter>
      <Routes>
        <Route path='/' element={<PetList/>}></Route>
        <Route path='/view/:id' element={<PetViewer/>}></Route>
        <Route path='/:action/' element={<PetForm/>}></Route>
        <Route path='/:action/:id' element={<PetForm/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
