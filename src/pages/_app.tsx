// Global Styles
import '../styles/global.scss'

//style app
import styles from '../styles/app.module.scss';


import { FooterContextProvider } from '../contexts/FooterContext'

import { Footer } from '../components/Footer/footer'

function MyApp({ Component, pageProps }) {
  return(
    <>
      <FooterContextProvider>
        <div className={styles.wrapper}>
        <main>
        <Component {...pageProps} />
        </main>
          <Footer/>
        </div>
      </FooterContextProvider>
    </>
  ) 
}

export default MyApp