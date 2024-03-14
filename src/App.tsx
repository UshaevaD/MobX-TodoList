import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { route } from './routes/routes';

const App = () => {
  const router = createBrowserRouter(route);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
