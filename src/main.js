// just want htm + preact in a single file? there's a highly-optimized version of that:
import { html, render } from './preact+htm.js'
import { HackerNewsApp } from './components/HackerNewsApp.js'

render(html`<${HackerNewsApp} />`, document.body)
