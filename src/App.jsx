import Hero from './components/Hero'
import Sobre from './components/Sobre'
import PerfilPlataformas from './components/PerfilPlataformas'
import Servicos from './components/Servicos'
import Diferenciais from './components/Diferenciais'
import Veiculo from './components/Veiculo'
import Avaliacoes from './components/Avaliacoes'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Hero />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 pb-8 md:px-8">
        <Sobre />
        <PerfilPlataformas />
        <Servicos />
        <Diferenciais />
        <Veiculo />
        <Avaliacoes />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
