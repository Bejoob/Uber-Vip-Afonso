import { Star } from 'lucide-react'

const depoimentos = [
  '"Excelente atendimento, carro impecavel!"',
  '"Muito pontual e extremamente educado. Recomendo!"',
  '"Viagem tranquila, com muito conforto e seguranca."',
]

function Avaliacoes() {
  return (
    <section className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6 md:p-8">
      <h2 className="text-2xl font-semibold text-gold md:text-3xl">Avaliacoes</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {depoimentos.map((depoimento) => (
          <article
            key={depoimento}
            className="rounded-xl border border-white/10 bg-black/40 p-5 transition duration-300 hover:border-gold/50"
          >
            <p className="text-zinc-200">{depoimento}</p>
            <div className="mt-4 flex items-center gap-1 text-gold">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={`${depoimento}-${index}`} size={16} fill="currentColor" />
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Avaliacoes
