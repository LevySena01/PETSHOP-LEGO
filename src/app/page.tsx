export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg border border-gray-100">
        <h1 className="text-3xl font-bold text-center text-green-600 mb-6">Levy Sena Pet Shop</h1>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nome do Pet</label>
            <input 
              type="text" 
              placeholder="Ex: Totó"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Espécie</label>
            <select className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 outline-none bg-white">
              <option>Cachorro</option>
              <option>Gato</option>
              <option>Pássaro</option>
              <option>Outro</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Idade (anos)</label>
            <input 
              type="number" 
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>

          <button 
            type="submit" 
            className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-md transition-colors shadow-md"
          >
            Cadastrar Pet
          </button>
        </form>
      </div>
    </main>
  );
}