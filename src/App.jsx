import { GithubRepos } from './components/GithubRepos';
import { ContactForm } from './components/ContactForm';
import { FolderGit2, Mail, GraduationCap, Code2, User } from 'lucide-react';

export default function App() {
  const GITHUB_USERNAME = "Caheve";

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      {/* 1. Barra de Navegación */}
      <header className="border-b border-gray-800 sticky top-0 bg-gray-900/90 backdrop-blur z-10">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <span className="text-xl font-bold text-blue-400">CaheveDev</span>
          <nav className="flex gap-4 text-sm text-gray-300">
            <a href="#sobre-mi" className="hover:text-blue-400 transition">Sobre mí</a>
            <a href="#estudios" className="hover:text-blue-400 transition">Estudios</a>
            <a href="#repositorios" className="hover:text-blue-400 transition">Proyectos</a>
            <a href="#contacto" className="hover:text-blue-400 transition">Contacto</a>
          </nav>
        </div>
      </header>

      {/* 2. Contenido Principal */}
      <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">

        {/* Presentación (Hero) */}
        <section className="text-center py-1 space-y-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">
            Hola, soy <span className="text-blue-400">Desarrollador de Software</span>
          </h1>
          <p className="text-gray-400 text-lg mx-auto">
            Estudiante de Ingeniería de Sistemas enfocado en desarrollo web, infraestructura y mantenimiento informático.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition"
            >
              <FolderGit2 className="w-5 h-5" /> Perfil de GitHub
            </a>
            <a
              href="#contacto"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition"
            >
              <Mail className="w-5 h-5" /> Contactar
            </a>
          </div>
        </section>

        {/* Sección: Sobre Mí */}
        <section id="sobre-mi" className="space-y-4">
          <div className="flex items-center gap-2 text-2xl font-bold text-white border-b border-gray-800 pb-2">
            <User className="text-blue-400" />
            <h2>Sobre Mí</h2>
          </div>
          <p className="text-gray-300 leading-relaxed">
            Me dedico al estudio y desarrollo de aplicaciones web, gestión de repositorios con Git y control de versiones. Además de la programación, tengo experiencia técnica en mantenimiento y reparación de computadores y formateo de dispositivos.
          </p>
        </section>

        {/* Sección: Estudios y Formación */}
        <section id="estudios" className="space-y-6">
          <div className="flex items-center gap-2 text-2xl font-bold text-white border-b border-gray-800 pb-2">
            <GraduationCap className="text-blue-400" />
            <h2>Estudios y Formación Académica</h2>
          </div>

          {/* Carrera Principal */}
          <div className="bg-gray-800 border border-gray-700 p-5 rounded-lg space-y-2">
            <div className="flex justify-between items-start flex-wrap gap-2">
              <div>
                <h3 className="text-xl font-bold text-white">Ingeniería de Sistemas</h3>
                <p className="text-blue-400 font-medium">Universidad Nacional Abierta y a Distancia (UNAD)</p>
              </div>
              <span className="text-xs bg-blue-900/60 text-blue-300 border border-blue-700 px-3 py-1 rounded-full">
                2020 - Presente (11° Semestre)
              </span>
            </div>
            <p className="text-gray-300 text-sm">
              Formación profesional enfocada en desarrollo de software, arquitectura de sistemas, gestión de bases de datos e infraestructura.
            </p>
          </div>

          {/* Diplomados y Cursos Especializados */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-200">Diplomados y Certificaciones de Programación</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              {/* Misión TIC 2022 / UTP */}
              <div className="bg-gray-800/60 border border-gray-700 p-4 rounded-lg space-y-2">
                <span className="text-xs text-blue-400 font-semibold">Misión TIC 2022 — UTP (800 Horas)</span>
                <h4 className="font-bold text-white">Ruta de Formación en Desarrollo Web</h4>
                <ul className="text-xs text-gray-300 space-y-1 list-disc list-inside">
                  <li>Desarrollo de Aplicaciones Web</li>
                  <li>Desarrollo de Software</li>
                  <li>Programación Básica en Java</li>
                  <li>Fundamentos de Programación en Python</li>
                </ul>
              </div>

              {/* Ciencia de Datos / Análisis */}
              <div className="bg-gray-800/60 border border-gray-700 p-4 rounded-lg space-y-2">
                <span className="text-xs text-blue-400 font-semibold">Coursera / UNAD / IBM</span>
                <h4 className="font-bold text-white">Análisis de Datos & Machine Learning</h4>
                <ul className="text-xs text-gray-300 space-y-1 list-disc list-inside">
                  <li>Análisis de Datos (UNAD / Coursera — 144 horas)</li>
                  <li>Machine Learning with Python (IBM)</li>
                  <li>Insights of Power BI (Fractal Analytics)</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Formación Complementaria y Técnica */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-200">Formación Técnica y Complementaria</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">            

              <div className="bg-gray-800/40 border border-gray-700/80 p-4 rounded-lg">
                <span className="text-xs text-gray-400">SENA</span>
                <h4 className="font-bold text-white text-sm mt-1">Herramientas Informáticas & Ética</h4>
                <p className="text-xs text-gray-400 mt-1">Formación en competencias laborales informáticas</p>
              </div>

              <div className="bg-gray-800/40 border border-gray-700/80 p-4 rounded-lg">
                <span className="text-xs text-gray-400">Prosperidad Social (2021)</span>
                <h4 className="font-bold text-white text-sm mt-1">Habilidades para la Vida</h4>
                <p className="text-xs text-gray-400 mt-1">Liderazgo, trabajo en equipo y comunicación asertiva</p>
              </div>

            </div>
          </div>
        </section>

        {/* Sección: Repositorios (Llamada al componente dinámico) */}
        <section id="repositorios" className="space-y-6">
          <div className="flex items-center gap-2 text-2xl font-bold text-white border-b border-gray-800 pb-2">
            <Code2 className="text-blue-400" />
            <h2>Mis Repositorios públicos en Git</h2>
          </div>
          <p className="text-gray-400">
            Proyectos obtenidos directamente de la API pública de GitHub en modo de solo lectura.
          </p>

          <GithubRepos username={GITHUB_USERNAME} />
        </section>

        {/* Sección: Contacto */}
        <section id="contacto" className="space-y-6 pb-12">
          <div className="flex items-center gap-2 text-2xl font-bold text-white border-b border-gray-800 pb-2">
            <Mail className="text-blue-400" />
            <h2>Contacto</h2>
          </div>

          <p className="text-gray-300">
            ¿Tienes alguna consulta, propuesta de proyecto o soporte técnico? Déjame un mensaje y te responderé directamente a tu correo.
          </p>

          {/* Invocación del formulario de contacto */}
          <ContactForm />
        </section>
      </main>

      {/* Pie de página */}
      <footer className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} - Creado con React y Tailwind CSS CaheveDev</p>
      </footer>
    </div>
  );
}