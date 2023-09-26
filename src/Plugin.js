// This file is modified for this Vite demo

import AppAdapter from '@dhis2/app-adapter'
import { Layer, layers, CenteredContent, CircularLoader } from '@dhis2/ui'
import React from 'react'

// * Import Spinner instead of app

const D2App = React.lazy(() =>
    import(/*webpackChunkName: 'app'*/ './D2App/components/Spinner/Spinner.js')
) // Automatic bundle splitting!

const appConfig = {
    url: process.env.REACT_APP_DHIS2_BASE_URL,
    appName: process.env.REACT_APP_DHIS2_APP_NAME || '',
    appVersion: process.env.REACT_APP_DHIS2_APP_VERSION || '',
    apiVersion: parseInt(process.env.REACT_APP_DHIS2_API_VERSION),
    pwaEnabled: process.env.REACT_APP_DHIS2_APP_PWA_ENABLED === 'true',
    // Hardcode this for vite demo:
    plugin: true // process.env.REACT_APP_DHIS2_APP_PLUGIN === 'true',
}

const App = () => (
    <AppAdapter {...appConfig}>
        <React.Suspense
            fallback={
                <Layer level={layers.alert}>
                    <CenteredContent>
                        <CircularLoader />
                    </CenteredContent>
                </Layer>
            }
        >
            <D2App config={appConfig} />
        </React.Suspense>
    </AppAdapter>
)

export default App
