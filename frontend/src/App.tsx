import AppRoutes from './routes/routes';
import { BrowserRouter } from 'react-router';

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;