export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between py-5 px-6 border-b border-black/10 bg-white">
      <h1 className="text-xl font-semibold tracking-tight">Juan Vila</h1>

      <ul className="flex items-center gap-8 text-sm text-gray-600">
        <li className="hover:text-black cursor-pointer transition">Sobre mí</li>
        <li className="hover:text-black cursor-pointer transition">Proyectos</li>
        <li className="hover:text-black cursor-pointer transition">Contacto</li>
      </ul>
    </nav>
  );
}