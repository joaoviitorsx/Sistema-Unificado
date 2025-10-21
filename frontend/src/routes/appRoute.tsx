import { Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/auth';
import CustomChild from './customChild';
import Dashboard from '../pages/dashboard/index';
import ModulosPage from '../pages/modulos/index';
import FornecedoresPage from '../pages/fornecedor/index';
import NotFoundPage from '../pages/notFound';
import adminPage from '../pages/admin';

function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<CustomChild Child={LoginPage}/>} />
        <Route path="/dashboard" element={<CustomChild Child={Dashboard}/>} />
        <Route path="/modulos" element={<CustomChild Child={ModulosPage}/>}/>
        <Route path="/fornecedores" element={<CustomChild Child={FornecedoresPage}/>}/>
        <Route path="/administracao" element={<CustomChild Child={adminPage}/>}></Route>
        <Route path="*" element={<CustomChild Child={NotFoundPage}/>} />
    </Routes>
  );
}

export default AppRoutes