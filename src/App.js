import logo from './logo.svg';
import './App.css';
import UploadPage from './components/UploadPage'
import Menu from './components/Menu'


function App() {
  return (
    <div className="flex">
      <Menu />
      <UploadPage />
    </div>
  );
}

export default App;
