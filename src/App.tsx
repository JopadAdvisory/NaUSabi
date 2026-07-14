import './App.css';
import { Nav } from './components/nav';
import { Community } from './sections/community';
import { Hero } from './sections/hero';
import { Join } from './sections/join';
import { Rules } from './sections/rules';

function App() {
  return (
    <main className="App">
      <Nav />
      <Hero />
      <Community />
      <Rules />
      <Join />
    </main>
  )
}

export default App
