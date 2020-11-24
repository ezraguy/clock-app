import './App.css';
import Main from './components/main.jsx';
import { TimeProvider } from './contexts/time-context';
function App() {
  return (
    <div className="App">
      <TimeProvider>
        <Main />
      </TimeProvider>
    </div>
  );
}

export default App;
