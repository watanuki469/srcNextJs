
import Link from 'next/link'
import x from '@/styles/app.module.css'
import y from '@/styles/app2.module.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'home page',
  description: 'meta data description',
}
//get api
export default function Home() {
 
  return (
    <div>
      <ul>
        <li className={x['red']}>
          <Link href={"/facebook"}>  <span className={y['red']}> Facebook </span> </Link>
        </li>
        <li>
          <a href=""></a>
        </li>
        <li>
          <a href=""></a>
        </li>
      </ul>

    </div>
  )
}
