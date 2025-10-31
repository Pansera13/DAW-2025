import { Header } from "./componentes/layout/header"
import { Footer } from "./componentes/layout/footer"
import { Navbar } from "./componentes/layout/navbar"
import { MovieService } from "./cases/services/movie.service"
import { MovieContent } from "./cases/components/movie-content"

function App() {
 

  return (
    <>
     <Header />
     <main>
      <Navbar/>
      <MovieContent/>
     </main>
     <Footer/>
    </>
  )
}

export default App