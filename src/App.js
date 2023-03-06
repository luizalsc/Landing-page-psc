import { Nav } from './ui/components/navbar/nav'
import { About } from './ui/partials/about/about'
import { Schedule } from './ui/partials/schedule/schedule'
import { Comunities } from './ui/partials/comunities/comunities'
import { Ministries } from './ui/partials/ministries/ministries'
import { Faq } from './ui/partials/faq/faq'
import { Footer } from './ui/components/footer/footer'


function App() {
  return (
  <>
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

export default App
