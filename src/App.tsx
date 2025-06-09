import Banner from "./components/Banner"
import Header from "./components/Header"
import MovieSection from "./components/MovieSection"

function App() {
  return (
    <div>
      <Header/>
      <Banner src="/Imagens/Banner Desktop.png" alt="Banner"/>
      <MovieSection/>
    </div>
  )
}

export default App
