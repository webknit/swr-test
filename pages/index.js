import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';

import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Home() {

    const { data, error } = useSWR('/api/hello', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <div>{data.num}</div>
  )
}
