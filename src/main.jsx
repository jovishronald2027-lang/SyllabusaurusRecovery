import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// TEMP-DIAGNOSTIC-START
const showDiag = (label, err) => {
const msg = err instanceof Error ? "${err.name}: ${err.message}" : String(err)
const box = document.getElementById('diag-overlay') || document.body.appendChild(Object.assign(document.createElement('pre'), { id: 'diag-overlay' }))
box.style.cssText = 'position:fixed;inset:0;z-index:2147483647;margin:0;padding:16px;overflow:auto;background:#fff;color:#b00020;font:14px/1.4 monospace;white-space:pre-wrap'
box.textContent += "[${label}] ${msg.slice(0, 300)}\n"
}

window.addEventListener('error', (e) => showDiag('error', e.error || e.message))
window.addEventListener('unhandledrejection', (e) => showDiag('unhandledrejection', e.reason))

import('./App.jsx')
.then(({ default: App }) => {
createRoot(document.getElementById('root')).render(
<StrictMode>
<App />
</StrictMode>,
)
})
.catch((err) => showDiag('startup', err))
// TEMP-DIAGNOSTIC-END