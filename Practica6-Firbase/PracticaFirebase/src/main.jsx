import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// // eslint-disable-next-line no-unused-vars
// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import firebaseConfig from './components/config/config'; 
// import FirebaseAppProvider from 'reactfire'
// import { Suspense } from 'react';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <FirebaseAppProvider firebaseConfig={ firebaseConfig }>
//   <Suspense fallback={<p>Cargando...</p>}>
//       <App/>
//   </Suspense>
// </FirebaseAppProvider>,
// )
