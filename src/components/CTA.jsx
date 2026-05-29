import { MessageCircle } from 'lucide-react'

const whatsappLink = 'https://wa.me/5511999999999'

function CTA() {
  return (
    <section className="rounded-2xl border border-gold/40 bg-gradient-to-r from-[#151515] to-[#1f1a0d] p-8 text-center shadow-luxury">
      <h2 className="text-3xl font-semibold text-white md:text-4xl">
        Pronto para uma experiencia VIP?
      </h2>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-lg font-semibold text-black transition duration-300 hover:scale-105 hover:bg-[#e8c65a]"
      >
        <MessageCircle size={20} />
        Chamar no WhatsApp
      </a>
    </section>
  )
}

export default CTA
