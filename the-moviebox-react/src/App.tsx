import { Header } from "./componentes/layout/header"
import { Footer } from "./componentes/layout/footer"
import { Navbar } from "./componentes/layout/navbar"

function App() {
 

  return (
    <>
     <Header />
     <main>
      <Navbar/>
     </main>
     <Footer/>
    </>
  )
}

export default App