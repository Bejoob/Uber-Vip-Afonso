import { motion } from 'framer-motion'
import { Crown, MessageCircle } from 'lucide-react'

const whatsappLink = 'https://wa.me/5511951748978'

function Hero() {
  return (
    <header className="relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/veiculo/veiculo.jpeg')" }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-black/75"
      />

      <div className="relative mx-auto flex min-h-[75vh] w-full max-w-6xl flex-col items-start justify-center px-4 py-20 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-black/40 px-4 py-2 text-sm text-gold">
            <Crown size={16} />
            Experiencia premium
          </span>

          <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
            Uber VIP • Atendimento Exclusivo
          </h1>
          <p className="mt-4 text-lg text-zinc-200 md:text-xl">
            Conforto, seguranca e experiencia premium em cada viagem
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3 font-medium text-black transition duration-300 hover:scale-105 hover:bg-[#e8c65a]"
          >
            <MessageCircle size={18} />
            Solicitar Viagem no WhatsApp
          </a>
        </motion.div>
      </div>
    </header>
  )
}

export default Hero
