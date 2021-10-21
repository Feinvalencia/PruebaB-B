import Container from './components/Container'
import SectionButtons from './components/SectionButtons'
import Menu from './components/Menu'
import SectionImg from './components/SectionImg'
import SectionAbout from './components/SectionAbout'

function App() {
  return (
    <Container>
      <Menu/>
      <SectionButtons/>
      <SectionImg/>
      <SectionAbout/>
    </Container>
  )
}

export default App;
