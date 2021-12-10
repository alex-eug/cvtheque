import './app.scss'
import { Home } from '../Home';
import {useEffect} from 'react'



function App() {
  useEffect(() => {
    document.title = "alexandre-portofolio"
 }, []);
  
  return (


    <div className="App">

      <Home />
      
    </div>
  );
}

export default App;
