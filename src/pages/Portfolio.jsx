export default function Portfolio() {
  const projects = [
    {
      title: 'Визитка-портфолио',
      description: 'Этот самый сайт! React + Vite + TailwindCSS',
      tech: ['React', 'Vite', 'Tailwind', 'React Router'],
      link: '#',
      bg: 'from-indigo-500 to-purple-600',
    },
    {
      title: 'Интерактивная кнопка',
      description: 'Первое задание: смена фона + счетчик кликов',
      tech: ['HTML', 'CSS', 'JavaScript'],
      link: '#',
      bg: 'from-emerald-500 to-teal-600',
    },
    {
      title: 'Скоро здесь...',
      description: 'Третий проект в разработке',
      tech: ['React', 'Framer Motion'],
      link: '#',
      bg: 'from-pink-500 to-rose-600',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
          Мои проекты
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-4 h-80 bg-gradient-to-br from-slate-50 to-indigo-100 p-8 flex flex-col">
            <div
              className={`w-full h-40 rounded-2xl bg-gradient-to-br ${project.bg} opacity-10 group-hover:opacity-20 transition-all duration-500 mb-6 flex items-center justify-center`}>
              <span className="text-4xl opacity-0 group-hover:opacity-100 transition-all duration-500">
                🚀
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-indigo-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-800 transition-colors group/link">
                Посмотреть проект →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
