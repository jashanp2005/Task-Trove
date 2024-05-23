import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import { store } from './store';
import {Provider} from 'react-redux'

import App from './App.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Todo from './components/todo/Todo.jsx'
import Signup from './components/signup/Signup.jsx'
import SignIn from './components/signup/SignIn.jsx'

const shooter = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='todo' element={<Todo/>}/>
      <Route path='signup' element={<Signup/>}/>
      <Route path='signin' element={<SignIn/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={shooter} />
    </Provider>
  </React.StrictMode>,
)
