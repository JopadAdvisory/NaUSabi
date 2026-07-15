import './App.css';
import { Nav } from './components/nav';
import { Community } from './sections/community';
import { Hero } from './sections/hero';
import { Join } from './sections/join';
import { Rules } from './sections/rules';
import { Footer } from './components/footer';

function App() {
  return (
    <main className="App">
      <Nav />
      <Hero />
      <Community />
      <Rules />
      <Join />
      <Footer />
    </main>
  )
}

export default App
