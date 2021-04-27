// Global Styles
import '../styles/global.scss'

import { FooterContextProvider } from '../contexts/FooterContext'

import { Footer } from '../components/footer'

function MyApp({ Component, pageProps }) {
  return(
    <>
      <FooterContextProvider>
        <Component {...pageProps} />
        <Footer>
          <div><h1>a</h1></div>
        </Footer>
      </FooterContextProvider>
    </>
  ) 
}

export default MyApp