export default function Contacts() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
          Связаться со мной
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
      </div>

      <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-12 border border-white/50">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Контакты */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">📧 Email</h3>
              <p className="text-xl text-gray-600">kirill@example.com</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">📍 Местоположение</h3>
              <p className="text-xl text-gray-600">Ярославль, Россия</p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200">
              <a
                href="#"
                className="w-12 h-12 bg-indigo-600 hover:bg-indigo-700 rounded-2xl flex items-center justify-center text-white text-xl transition-all duration-300 hover:scale-110">
                GH
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-2xl flex items-center justify-center text-white text-xl transition-all duration-300 hover:scale-110">
                LI
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-sky-500 hover:bg-sky-600 rounded-2xl flex items-center justify-center text-white text-xl transition-all duration-300 hover:scale-110">
                TG
              </a>
            </div>
          </div>

          {/* Форма */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Имя</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                placeholder="Kirill"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                placeholder="kirill@example.com"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Сообщение</label>
              <textarea
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 resize-vertical"
                placeholder="Расскажи, над чем работаешь..."></textarea>
            </div>

            <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-8 rounded-2xl font-semibold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              Отправить сообщение
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
