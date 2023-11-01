'use client'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { Metadata } from 'next'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'home page',
  description: 'meta data description',
}
//get api
export default function Home() {

  return (
    <div>
      <ul>
        <li>
          <Link href={"/facebook"}>  <span> Facebook </span> </Link>
        </li>
       
      </ul>

    </div>
  )
}
