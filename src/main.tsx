import 'reflect-metadata'
import DI from 'Core/utilities/di'

import router from 'Core/router'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import './index.css'
import Loader from 'Presentation/shared/loader'

// DI Container
DI.init()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <React.Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </React.Suspense>
  </React.StrictMode>
)
