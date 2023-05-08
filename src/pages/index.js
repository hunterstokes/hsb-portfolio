import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from 'NextTS/styles/Home.module.css'
import { LandingPage } from '../components/landing'
import { Navbar } from '../components/navbar'
import { Projects } from '../components/projects'
import { Skills } from '../components/skills'
import { Contact } from '../components/contact'
import { About } from '../components/about'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
    <title>Hunter's Web</title>
    
    <Navbar />
      <LandingPage />
      <About />
      <Skills />
      <Projects />
      <Contact />

    </div>
  )
}
