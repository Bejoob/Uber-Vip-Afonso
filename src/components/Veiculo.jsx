import { CarFront, Wind, CalendarRange, Sofa } from 'lucide-react'

const infos = [
  { icon: CarFront, label: 'Modelo: BYD Dolphin GS' },
  { icon: CalendarRange, label: 'Ano: 2025' },
  { icon: Wind, label: 'Ar-condicionado' },
  { icon: Sofa, label: 'Bancos confortaveis' },
]

function Veiculo() {
  return (
    <section className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6 md:p-8">
      <div className="grid gap-6 md:grid-cols-2">
        <img
          src="/images/veiculo/veiculo.jpeg"
          alt="Carro VIP"
          className="h-64 w-full rounded-xl object-cover"
        />
        <div>
          <h2 className="text-2xl font-semibold text-gold md:text-3xl">Veiculo</h2>
          <ul className="mt-4 space-y-3">
            {infos.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3 text-zinc-200">
                <Icon size={18} className="text-gold" />
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Veiculo
