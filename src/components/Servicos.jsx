import { BriefcaseBusiness, CalendarClock, Plane, Star } from 'lucide-react'

const servicos = [
  { title: 'Viagens executivas', icon: BriefcaseBusiness },
  { title: 'Transporte para aeroportos', icon: Plane },
  { title: 'Atendimento VIP personalizado', icon: Star },
  { title: 'Viagens agendadas', icon: CalendarClock },
]

function Servicos() {
  return (
    <section className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6 md:p-8">
      <h2 className="text-2xl font-semibold text-gold md:text-3xl">Servicos Oferecidos</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {servicos.map(({ title, icon: Icon }) => (
          <article
            key={title}
            className="group rounded-xl border border-white/10 bg-black/40 p-5 transition duration-300 hover:-translate-y-1 hover:border-gold/60"
          >
            <Icon className="text-gold transition duration-300 group-hover:scale-110" size={22} />
            <h3 className="mt-3 font-medium">{title}</h3>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Servicos
