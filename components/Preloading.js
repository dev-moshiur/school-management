

import React from 'react'
import Styles from '../styles/Preloading.module.scss'
import Image from 'next/image';
import preloading from './preloading.gif'
export default function Preloading({firstLanding}) {
  return (
    <div className={`${Styles.preloading} ${
        firstLanding ? Styles.active : ""
      }`}>

        <div className={Styles.imgContainer}>
            <Image src={preloading} layout='responsive' height={'100%'} width='100%' />


        </div>

    </div>
  )
}


