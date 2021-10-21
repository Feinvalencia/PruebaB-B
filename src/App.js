import Container from './components/Container'
import SectionButtons from './components/SectionButtons'
import Menu from './components/Menu'
import SectionImg from './components/SectionImg'
import SectionAbout from './components/SectionAbout'
import Footer from './components/Footer'
function App() {
  return (
    <>
      <Container>
          <Menu/>
          <SectionButtons/>
          <SectionImg/>
      </Container>
      <SectionAbout/>
      <Container>
        <Footer/>
      </Container>
    </>
  )
}

export default App;
