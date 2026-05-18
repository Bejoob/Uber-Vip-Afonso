function Footer() {
  return (
    <footer className="mt-8 border-t border-white/10 bg-black/50 px-4 py-8 md:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 text-sm text-zinc-400 md:flex-row md:items-center md:justify-between">
        <p className="font-medium text-zinc-200">Afonso Souza Uber VIP</p>
        <p>WhatsApp: (11) 95174-8978</p>
        <p>&copy; {new Date().getFullYear()} Todos os direitos reservados</p>
      </div>
    </footer>
  )
}

export default Footer
