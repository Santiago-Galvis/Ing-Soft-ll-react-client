import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./config/routes";

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <route.layout>
                <route.component></route.component>
                <h2>Child Component</h2>
              </route.layout>
            }
          />
        ))}
      </Routes>
    </Router>
  );
}

{
  /* <Route path='/' element={<Home />} />
        <Route path='contact' element={<Contact />} />
        <Route path='users' element={<Users />} />
        <Route path='*' element={<NotFound />} /> */
}
/*Creación Componentes*/
function Home() {
  return <h2>Component Home Works</h2>;
}

function Contact() {
  return <h2>Component Contact Works</h2>;
}

function Users() {
  return <h2>Component Users Works</h2>;
}

function NotFound() {
  return <h2>Component not found!</h2>;
}

export default App;
