import './globals.css'
import Image from 'next/image'

import SearchBar from './components/SearchBar'
import { headers } from 'next/dist/client/components/headers'

export default function Home() {
  return (
    <main>
      <SearchBar />
    </main>
  )
}
