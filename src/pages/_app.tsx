// Global Styles
import '../styles/global.scss'

//style app
import styles from '../styles/app.module.scss';

import { FooterContextProvider } from '../contexts/FooterContext'

import { Footer } from '../components/Footer/footer'
import { UserContextProvider } from '../contexts/UserContext';

function MyApp({ Component, pageProps }) {
  return(
    <>
      <FooterContextProvider>
        <UserContextProvider>
        <div className={styles.wrapper}>
        <main>
        <Component {...pageProps} />
        </main>
          <Footer/>
        </div>
        </UserContextProvider>
      </FooterContextProvider>
    </>
  ) 
}

export default MyApp