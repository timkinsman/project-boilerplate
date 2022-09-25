import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { NotFound } from '../views/NotFound';
import routes from './Routes';

const SwitchRoutes = () => (
  <Router>
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.main()} />
      ))}
      <Route path='*' element={<NotFound />} />
    </Routes>
  </Router>
);
export default SwitchRoutes;
