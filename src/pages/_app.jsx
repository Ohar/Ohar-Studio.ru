import { useRouter } from "next/router"
import React from "react"

import LanguageProvider from "@/components/LanguageProvider"

import "@/fonts/oharname/oharname.css"
import "@/components/Layout/active_elements_default.css"
import "@/components/Layout/article.css"
import "@/components/Layout/breadcrumbs.css"
import "@/components/Layout/button.css"
import "@/components/Layout/fonts.css"
import "@/components/Layout/LayoutStyles.css"
import "@/components/Layout/main.css"
import "@/components/Layout/time.css"
import "@/components/Header/HeaderStyles.css"
import "@/components/Menu/MenuStyles.css"
import "@/components/MenuLink/MenuLinkStyles.css"
import "@/components/Icon/IconStyles.css"
import "@/components/LanguageSwitcher/LanguageSwitcherStyles.css"
import "@/components/Footer/footer.css"
import "@/components/PageTitle/PageTitleStyles.css"
import "@/components/Contacts/ContactsStyles.css"
import "@/components/DwLayout/active_elements_default.css"
import "@/components/DwLayout/article.css"
import "@/components/DwLayout/DwLayoutStyles.css"
import "@/components/DwCommonMoves/DwCommonMovesStyles.css"
import "@/components/DwEquipment/DwEquipmentStyles.css"
import "@/components/DwMenu/DwMenuStyles.css"
import "@/components/DwMenu/components/DwClassLinks/DwClassLinksStyles.css"
import "@/components/DwMove/DwMoveStyles.css"
import "@/components/DwMoveLink/DwMoveLinkStyles.css"
import "@/components/DwMoveList/DwMoveListStyles.css"
import "@/components/DwNote/DwNoteStyles.css"
import "@/components/DwPcClass/DwPcClassStyles.css"
import "@/components/DwQuote/DwQuoteStyles.css"
import "@/components/DwTag/DwTagStyles.css"
import "@/components/Quotes/QuotesStyles.css"
import "@/components/TC/Operative/styles.css"
import "@/components/TC/OperativeList/styles.css"
import "@/pages/tc/styles.css"
import "@/styles/offset.css"
import "@/styles/mechanicus.css"

const App = ({ Component, pageProps }) => {
  const router = useRouter()
  const pathname = router.asPath.split(/[?#]/)[0] || "/"

  return (
    <LanguageProvider pathname={pathname}>
      <Component {...pageProps} />
    </LanguageProvider>
  )
}

export default App
