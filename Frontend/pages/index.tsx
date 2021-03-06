import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Button } from "@chakra-ui/react"
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        <h1 className={styles.title}>
          Bem vindo!
        </h1>
        <Link href="login" passHref>
          <Button colorScheme="teal">Entrar</Button>
        </Link>
        

      </main>

      <footer className={styles.footer}>
        Powered by: TDD
      </footer>
    </div>
  )
}

export default Home
