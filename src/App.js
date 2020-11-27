import './App.css';
import Main from './components/main.jsx';
import { LocationProvider } from './context/location-context';
import { MoreInfoProvider } from './context/more-info-context';
import { TimeProvider } from './context/time-context';
import { FullTimeProvider } from './context/full-time-context';
function App() {
  return (
    <div className="App">
      <FullTimeProvider>
        <LocationProvider>
          <MoreInfoProvider>
            <TimeProvider>
              <Main />
            </TimeProvider>
          </MoreInfoProvider>
        </LocationProvider>
      </FullTimeProvider>
    </div>
  );
}

export default App;
