import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import LinkList from './components/LinkList'
import ToggleStatsBtn from './components/ToggleStatsBtn'

function App() {
  return (
    <>
      <ToggleStatsBtn />
      <Header />
      <main>
        <LinkList />
      </main>
      <Footer />
    </>
  )
}

export default App
