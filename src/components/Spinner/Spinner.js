import { html } from '../../preact+htm.js'

export const Spinner = () => {
  return html`
    <div class="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  `
}
