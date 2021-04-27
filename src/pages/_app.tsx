// Global Styles
import '../styles/global.scss'

import { FooterContextProvider } from '../contexts/FooterContext'

import { Footer } from '../components/footer'

function MyApp({ Component, pageProps }) {
  return(
    <>
      <FooterContextProvider>
        <Component {...pageProps} />
          <Footer/>
      </FooterContextProvider>
    </>
  ) 
}

export default MyApp