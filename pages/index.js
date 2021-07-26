import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'semantic-ui-css/semantic.min.css'

import Menubar from '../components/Menubar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Menubar />
    </div>
  )
}
