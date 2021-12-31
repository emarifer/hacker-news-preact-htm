import { html, useEffect, useState } from '../preact+htm.js'
import { Article } from './Article.js'
import { Spinner } from './Spinner/Spinner.js'

export const HackerNewsApp = () => {
  const [loading, setLoading] = useState(false)

  const [data, setData] = useState([])

  useEffect(() => {
    setLoading(true)
    window.fetch('https://api.hnpwa.com/v0/news/1.json')
      .then(res => res.json())
      .then(response => {
        setLoading(false)
        setData(response)
      })
  }, [])

  return (
    html`
      <main>        
        ${loading
            // ? html`<center><i>🌀</i></center>`
            ? html`<${Spinner} />`
            : data.map(article => (
              html`
                <${Article} ...${article} />
              `
        ))}
      </main>
    `
  )
}

/**
 * EN LA CONFIGURACION DE LAS NORMAS DE STANDARD JS «fetch» Y OTRAS FUNCIONALIDADES
 * DE "COLGAR" OBLIGATORIAMENTE DE WINDOWS, PORQUE SI NO DARA UN ERROR ("fetch" is not defined).
 * ES UNA MANERA DE OBLICAR AL USUARIO A QUE DEFINA "MEJOR" ESAS FUNCIONALIDADES
 * DEL AMBITO DEL NAVEGADOR
 * VER:
 * https://github.com/standard/standard/issues/821
 *
 * EL FUTURO DEL DESARROLLO WEB Y PERFORMANCE DE UNA APLICACION. INTERESANTE EXPLICACION. VER:
 * https://youtu.be/f-Mpz_vKx28?t=3918
 */
