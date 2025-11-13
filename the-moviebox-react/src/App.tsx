import { Header } from "./componentes/layout/header";
import { Footer } from "./componentes/layout/footer";
import { Navbar } from "./componentes/layout/navbar";
import { MovieService } from "./cases/services/movie.service";
import { MovieContent } from "./cases/components/movie-content";
import { Highlight } from "./componentes/layout/highligth";

function App() {
  return (
    <>
      <Header />
      <main>
        <Highlight />

        <Navbar />
        <MovieContent />
      </main>
      <Footer />
    </>
  );
}

export default App;
