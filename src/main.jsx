import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Contact from './routes/Contact'
import History from './routes/History'
import Project from './routes/Project'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/contact",
//     element: <Contact />,
//   },
//   {
//     path: "/history",
//     element: <History />,
//   },
//   {
//     path: "/project",
//     element: <Project />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
