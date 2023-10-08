import React from 'react'
import  css from '@/style/Carasol.module.css'
const Carasole = () => {
  return (
    <div className={css.box}>
        <h1 className={css.txt1}>Welcome.</h1>
        <h5 className={css.txt2}>Millions of movies, TV shows and people to discover. Explore now.</h5>
        <img src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/pQvqGK6KQDILL7SJrhMQsRvJfLB.jpg" alt="" />
    </div>
  )
}

export default Carasole