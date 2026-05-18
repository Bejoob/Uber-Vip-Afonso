const sectionStyle =
  'rounded-2xl border border-white/10 bg-zinc-900/50 p-6 shadow-luxury backdrop-blur-sm md:p-8'

function Sobre() {
  return (
    <section id="sobre" className={sectionStyle}>
      <div className="grid items-center gap-6 md:grid-cols-[220px_1fr]">
        <img
          src="/images/motorista/motorista.jpeg"
          alt="Motorista Benny"
          className="h-56 w-full rounded-xl object-cover"
        />
        <div>
          <h2 className="text-2xl font-semibold text-gold md:text-3xl">Sobre o Motorista</h2>
          <h3 className="mt-2 text-xl font-medium">Afonso Souza</h3>
          <p className="mt-3 text-zinc-300">
            Motorista profissional com atendimento diferenciado, focado em pontualidade,
            conforto e seguranca para cada cliente.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Sobre
