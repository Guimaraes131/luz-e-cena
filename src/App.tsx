import Banner from "./components/Banner"
import Header from "./components/Header"
import MovieSection from "./components/MovieSection"
import Newsletter from "./components/Newsletter"

function App() {
  return (
    <div>
      <Header/>
      <Banner src="/Imagens/Banner Desktop.png" alt="Banner"/>
      <MovieSection/>
      <Banner src="/Imagens/Banner Combo Desktop.png" alt="Combo"/>
      <Newsletter/>
    </div>
  )
}

export default App
