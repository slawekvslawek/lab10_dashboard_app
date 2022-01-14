//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from './components/Data.jsx';
import LineChart from './components/LineChart.jsx';

const styles = {
   display: 'flex',
   justifyContent: 'space-between'
};

function App() {
  return (
     <div className="App">
       <div style={styles}>
           <div className="col-2">
               <Data/>
           </div>
           <div className="col-10">
             <LineChart />
           </div>
       </div>
     </div>
  );
}

export default App;
