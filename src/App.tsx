import './App.css';
import { MyComponent } from './components/MyComponent';
import { RegistrationForm } from './components/RegistrationForm';

function App() {
  return (
    <div className="App">
      App {process.env.REACT_APP_BASE_URL}
      <RegistrationForm />
      {/* <MyComponent /> */}
    </div>
  );
}

export default App;
