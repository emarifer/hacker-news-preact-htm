import { html } from '../preact+htm.js'

export const Article = ({ title, time_ago: timeAgo, url, points, domain }) => {
  return html`
    <article>
      <a href="${url}" alt="${title}" target="_blank" >
        <h3>${title}</h3>
        <section>
          <div>
            <date>⏰ ${timeAgo}</date>
            <strong>⭐ ${points}</strong>
          </div>
          <span>${domain}</span>
        </section>        
      </a>
    </article>
  `
}
