import React from 'react'
import ReactDOM from 'react-dom/client'
import TasksApp from './components/TasksApp'
import FirstFormApp from './components/FirstFormApp'
import './style.css'
import UseRefApp from './components/UseRefApp'
import UseMemoApp from './components/UseMemoApp'
import UseCallBackApp from './components/UseCallBackApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <TasksApp /> */}
    {/* <FirstFormApp/> */}
    {/* <UseRefAp/> */}
    {/* <UseMemoApp/> */}
    <UseCallBackApp/>
  </React.StrictMode>,
)

