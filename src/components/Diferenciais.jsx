import { CheckCircle2 } from 'lucide-react'

const diferenciais = [
  'Carro sempre limpo e confortavel',
  'Ar-condicionado',
  'Agua disponivel',
  'Atendimento educado e profissional',
  'Pontualidade garantida',
]

function Diferenciais() {
  return (
    <section className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6 md:p-8">
      <h2 className="text-2xl font-semibold text-gold md:text-3xl">Diferenciais</h2>
      <ul className="mt-5 space-y-3">
        {diferenciais.map((item) => (
          <li key={item} className="flex items-center gap-3 text-zinc-200">
            <CheckCircle2 className="text-gold" size={20} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Diferenciais
