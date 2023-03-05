import React from "react";
import ReactDOM  from "react-dom/client";
import App from './componentes/App'
import './styles/global.scss'

const rootElement = ReactDOM.createRoot(document.getElementById("app"));

rootElement.render(<App />);
