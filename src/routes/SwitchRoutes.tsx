import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Example from '../components/Example/Example'
import routes from './Routes'

const SwitchRoutes = () => (
  <Router>
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.main()} />
      ))}
      <Route path='*' element={<Example />} />
    </Routes>
  </Router>
)
export default SwitchRoutes
