export default function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
          Немного обо мне
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Привет! Я Kirill 👋</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Фронтенд-разработчик из <span className="font-semibold text-indigo-600">Ярославля</span>
            . Начинаю путь в веб-разработку с нуля и уже умею создавать современные сайты на React +
            Vite + TailwindCSS.
          </p>
          <p className="text-xl text-gray-600 leading-relaxed">
            Люблю чистый код, быстрые сайты и красивый дизайн. Сейчас изучаю React Router, формы,
            API и анимации.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-8 border-t border-gray-200">
            <div>
              <div className="text-2xl font-bold text-indigo-600">0+</div>
              <div className="text-sm text-gray-600">Проектов</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-emerald-600">100%</div>
              <div className="text-sm text-gray-600">Responsive</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-3xl backdrop-blur-xl border border-white/30 mx-auto p-8 flex items-center justify-center shadow-2xl">
            <div className="text-6xl">🚀</div>
          </div>
        </div>
      </div>

      <div className="mt-24 grid md:grid-cols-2 gap-8">
        <div className="p-8 bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">🛠️ Мой стек</h3>
          <div className="space-y-2 text-gray-600">
            <p>• React 18 + Vite (HMR 50мс)</p>
            <p>• TailwindCSS (utility-first)</p>
            <p>• React Router v6</p>
            <p>• Git + GitHub</p>
          </div>
        </div>

        <div className="p-8 bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            🎯 Сейчас изучаю
          </h3>
          <div className="space-y-2 text-gray-600">
            <p>• Framer Motion (анимации)</p>
            <p>• React Query (API)</p>
            <p>• TypeScript</p>
            <p>• Vercel (деплой)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
