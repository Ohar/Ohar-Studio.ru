import React from "react"

const YandexMetrika = () => (
  <section
    dangerouslySetInnerHTML={{
      __html: `
        <div>
            <script type="text/javascript">
              ((d,w,c) => {
                (w[c] = w[c] || []).push(() => {
                  try {
                    w.yaCounter21398491 = new Ya.Metrika({
                      id: 21398491,
                      webvisor: true,
                      clickmap: true,
                      trackLinks: true,
                      accurateTrackBounce: true,
                      trackHash: true,
                    })
                  } catch (e) {}
                })

                var n = d.getElementsByTagName("script")[0], s = d.createElement("script"),
                f = function () {n.parentNode.insertBefore(s, n)}
                s.type = "text/javascript"
                s.async = true
                s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js"

                if (w.opera == "[object Opera]") {
                  d.addEventListener("DOMContentLoaded", f, false)
                } else {
                  f()
                }
              })(document,window,'yandex_metrika_callbacks')
            </script>

            <noscript>
              <div><img src="//mc.yandex.ru/watch/21398491" style="position:absolute; left:-9999px;" alt=""/></div>
            </noscript>
        </div>
      `,
    }}
  />
)

export default YandexMetrika
