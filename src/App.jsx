import { useState } from 'react'
import Navbar from './components/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <Navbar />
        <main className="max-w-5xl mx-auto flex flex-col items-center justify-center py-8 px-4">
         
        </main>
      </div>
    </>
  )
}

export default App
