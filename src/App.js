import './App.css';
import Main from './components/main.jsx';
import { LocationProvider } from './context/location-context';
import { MoreInfoProvider } from './context/more-info-context';
import { TimeProvider } from './context/time-context';
function App() {
  return (
    <div className="App">

      <LocationProvider>
        <MoreInfoProvider>
          <TimeProvider>
            <Main />
          </TimeProvider>
        </MoreInfoProvider>
      </LocationProvider>
    </div>
  );
}

export default App;
