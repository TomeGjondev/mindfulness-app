import './App.css';
import Header1 from './components/Header1';
import MyCards from './components/MyCards';
import Calendar from './components/Calendar';


function App() {
  return (
    <div className="app">
      <Header1 />
      <div className="content">
        <div className="karti">
        <MyCards />
        </div>
        <div className="kalendar">
        <Calendar />
        </div>
      </div>
    </div>
  );
}

export default App;
