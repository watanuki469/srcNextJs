'use client'
import Link from 'next/link'
import { increment, decrement, incrementByAmount } from './redux/slice'
import { useSelector, useDispatch } from 'react-redux'
import { Metadata } from 'next'
import { RootState } from './redux/store'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'home page',
  description: 'meta data description',
}
//get api
export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch();
  return (
    <div>
      <ul>
        <li>
          <Link href={"/facebook"}>  <span> Facebook </span> </Link>
        </li>
        <li>
          <button
            className={styles.button}
            onClick={() => dispatch(increment())}
          >Increment</button>
        </li>
        <li>
          <span>{count}</span>
        </li>
        <li>
          <button
            className={styles.button}
            onClick={() => dispatch(decrement())}
          >Decrement</button>
        </li>
        <li>
          <button
            className={styles.button}
            onClick={() => dispatch(incrementByAmount(2))}
          >Reset</button>
        </li>

      </ul>

    </div>
  )
}
