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
          <div className="space-y-3 text-gray-300 leading-relaxed text-justify">
            <p>
              Soy estudiante de <strong className="text-white">Ingeniería de Sistemas</strong> y de la <strong className="text-white">Tecnología en Desarrollo de Software e Infraestructura</strong>. Me caracterizo por ser una persona responsable, puntual, creativa y con alta capacidad de adaptación para abordar proyectos de innovación tecnológica y enfoque social.
            </p>
            <p>
              Cuento con más de 5 años de experiencia empírica y práctica en el área de la informática y el soporte técnico, especializándome en mantenimiento informático, diagnóstico de hardware, formateo y optimización de equipos informáticos.
            </p>
            <p>
              En el ámbito del desarrollo de software, poseo formación sólida en lenguajes como <strong className="text-blue-400">Python, Java y JavaScript</strong>, control de versiones con <strong className="text-blue-400">Git/GitHub</strong>, desarrollo web con React y Tailwind CSS, así como fundamentos en análisis de datos y machine learning.
            </p>
          </div>
        </section>

        {/* Sección: Estudios y Formación */}
        <section id="estudios" className="space-y-6">
          <div className="flex items-center gap-2 text-2xl font-bold text-white border-b border-gray-800 pb-2">
            <GraduationCap className="text-blue-400" />
            <h2>Estudios y Formación Académica</h2>
          </div>

          {/* Formación Superior Activa */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-200">Educación Superior</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              {/* Nueva Tecnología Activa */}
              <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg space-y-2">
                <div className="justify-between items-start flex-wrap gap-1">
                  <div>
                    <h4 className="text-xl font-bold text-white">Tecnología en Desarrollo de Software e Infraestructura</h4>
                    <p className="text-blue-400 font-medium text-sm">Virtual</p>
                  </div>
                  <span className="text-xs bg-green-900/60 text-green-300 border border-green-700 px-3 py-1 rounded-full justify-self-end">
                    En Curso (2026-2)
                  </span>
                </div>
                <p className="text-gray-300 text-sm">
                  Enfoque en desarrollo de software, despliegue de soluciones, redes e infraestructura tecnológica.
                </p>
              </div>

              {/* Ingeniería de Sistemas */}
              <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg space-y-2">
                <div className="justify-between items-start flex-wrap gap-1">
                  <div>
                    <h4 className="text-xl font-bold text-white">Ingeniería de Sistemas</h4>
                    <p className="text-blue-400 font-medium text-sm">UNAD</p>
                  </div>
                  <span className="text-xs bg-blue-900/60 text-blue-300 border border-blue-700 px-3 py-1 rounded-full">
                    En Curso 12° Semestre (2020 - Presente)
                  </span>
                </div>
                <p className="text-gray-300 text-sm">
                  Formación profesional enfocada en arquitectura de sistemas, desarrollo de software y gestión de bases de datos.
                </p>
              </div>

            </div>
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

          <p className="text-gray-300 leading-relaxed pb-5">
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