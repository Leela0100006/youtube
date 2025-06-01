import './App.css';
import Sidebar from './Components/Sidebar';
import Content from './Components/Content';
import Register from './Components/Register';
import Error from './Components/Error';
import List from './Components/List';
import { BrowserRouter,Routes,Route,Links } from 'react-router-dom';

function App() {
     
 const message="Hello from app using Props";
const message2="Hii";


 return(
  <>
      <div className='container-fluid main'>

        <div className='row'>

         <BrowserRouter>
          <Sidebar/>
          <Routes>
            <Route path='*' element={<Error/>}></Route>
            <Route path='/' element={<Content/>}></Route>
            <Route path='/register' element= {<Register mydata={message} mydata1={message2} />}></Route>
            <Route path='/list' element={<List/>}></Route>
        
            




          </Routes>
         </BrowserRouter>
        </div>

      </div>
  </>
  
 )
}

export default App;
