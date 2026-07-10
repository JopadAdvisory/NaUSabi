import './App.css';
import { Community } from './sections/community';
import { Hero } from './sections/hero';
import { Rules } from './sections/rules';

function App() {
  return (
    <main className="App">
      <Hero />
      <Community />
      <Rules />
    </main>
  )
}

export default App
