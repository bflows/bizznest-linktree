import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import LinkList from './components/LinkList'

function App() {
  const [showStats, setShowStats] = useState(false)

  return (
    <>
      <meta name="description" content="A modern Linktree with a little JS personality." />
      <Header 
        showStats={showStats}
        onToggle={() => setShowStats((state) => !state)}
      />
      <main>
        <LinkList showStats={showStats} />
      </main>
      <Footer />
    </>
  )
}

export default App
