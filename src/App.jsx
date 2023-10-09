import './App.css';
import DogInfo from './components/DogInfo';
import BanList from './components/BanList';

export default function App() {
  return (
    <main className="App">
        <h1>Dog Finder</h1>
        <p>Let's explore different dog breeds! 🐶</p>
        <DogInfo />
    </main>
  )
}
