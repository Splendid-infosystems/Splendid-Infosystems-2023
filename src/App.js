import './App.css';
import Navbar from './components/Navbar/Navbar'
import StudentData from './components/StudentData/StudentData'
import Upcomingbatch from './components/Upcomingbatch/Upcomingbatch'
import About from './components/About/AboutInfo'

function App() {
  return (
    <div className="App">
      <Navbar />
      <StudentData />
      <Upcomingbatch />
      <About />
    </div>
  );
}

export default App;
