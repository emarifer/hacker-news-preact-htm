// just want htm + preact in a single file? there's a highly-optimized version of that:
import { HackerNewsApp } from './components/HackerNewsApp.js'
import { html, render } from './preact+htm.js'

render(html`<${HackerNewsApp} />`, document.body)
