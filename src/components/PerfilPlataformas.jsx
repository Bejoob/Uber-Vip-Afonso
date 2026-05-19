import { Star, CheckCircle2 } from 'lucide-react'
import { driverProfiles } from '../data/driverProfiles'

const sectionStyle =
  'rounded-2xl border border-white/10 bg-zinc-900/50 p-6 shadow-luxury backdrop-blur-sm md:p-8'

const platforms = [
  {
    key: 'uber',
    name: 'Uber',
    accent: 'border-white/15 hover:border-white/30',
    brandClass: 'text-white tracking-tight',
  },
  {
    key: 'app99',
    name: '99',
    accent: 'border-[#ffdd00]/20 hover:border-[#ffdd00]/45',
    brandClass: 'text-[#ffdd00] font-bold',
  },
]

function PerfilPlataformas() {
  return (
    <section id="perfil-plataformas" className={sectionStyle}>
      <h2 className="text-2xl font-semibold text-gold md:text-3xl">Perfil nas Plataformas</h2>
      <p className="mt-2 max-w-2xl text-zinc-400">
        Desempenho e credibilidade nos aplicativos de mobilidade.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {platforms.map(({ key, name, accent, brandClass }) => {
          const profile = driverProfiles[key]

          return (
            <article
              key={key}
              className={`flex flex-col rounded-xl border bg-black/40 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-luxury ${accent}`}
            >
              <div className="flex items-center justify-between gap-3">
                <span className={`text-2xl font-semibold md:text-3xl ${brandClass}`}>{name}</span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                  <CheckCircle2 size={14} />
                  Perfil ativo
                </span>
              </div>

              <div className="mt-5 space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm text-zinc-400">Nota</span>
                  <span className="flex items-center gap-1.5 text-lg font-semibold text-gold">
                    <Star size={18} fill="currentColor" />
                    {profile.rating}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm text-zinc-400">Corridas</span>
                  <span className="font-medium text-zinc-100">{profile.trips}</span>
                </div>
              </div>

            </article>
          )
        })}
      </div>

      <p className="mt-6 text-center text-xs text-zinc-500 md:text-left">
        As avaliações são atualizadas manualmente com base nas informações exibidas nos aplicativos.
      </p>
    </section>
  )
}

export default PerfilPlataformas
