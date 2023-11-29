
import './App.css';
import {Header} from './Header';
import {NewsDashboard} from './NewsDashboard';
import {ImgMediaCard} from './NewsDashboard';

function App() {
  return (<div >
     <Header/>
  <NewsDashboard/>
  <div className='main-container'>
  <ImgMediaCard/>
  <ImgMediaCard/>
  <ImgMediaCard/>
  <ImgMediaCard/>
  </div>
  

  </div>
  
  );
}

export default App;
