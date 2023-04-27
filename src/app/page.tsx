import { Inter } from 'next/font/google'
import MainComponent from './components/MainComponent'
const inter = Inter({ subsets: ['latin'] })

const Home: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MainComponent />
    </main>
  )
}

export default Home
