import { Nav } from './ui/components/navbar/nav'
import { About } from './ui/partials/about/about'
import { Schedule } from './ui/partials/schedule/schedule'
import { Comunities } from './ui/partials/comunities/comunities'
import { Ministries } from './ui/partials/ministries/ministries'
import { Faq } from './ui/partials/faq/faq'
import { Footer } from './ui/components/footer/footer'
import { createGlobalStyle } from 'styled-components'


function App() {
  return (
  <>
    <GlobalStyle/>
    <Nav/>
    <About/>
    <Schedule/>
    <Comunities/>
    <Ministries/>
    <Faq/>
    <Footer/>
  </>
  )
}

const GlobalStyle = createGlobalStyle`
  *{
    marging: 0;
    padding: 0;
    list-style: none;
  }

  html{
    font-size: 62.5%;
  }
`

export default App
