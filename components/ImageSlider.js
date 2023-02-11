

import {useState} from 'react'
import Image from 'next/image';
import Styles from '../styles/ImageSlider.module.scss'
import { Cancel, KeyboardArrowLeft , KeyboardArrowRight } from '@material-ui/icons';
export default function ImageSlider({items,currentItemIndex,setImgSliderOpen}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(currentItemIndex)
  const currentItem = items[currentImageIndex]
  const previous =()=>{
    if (currentImageIndex == 0) {
      setCurrentImageIndex(items.length - 1)
      
    } else {
      setCurrentImageIndex((pre) => pre - 1)
    }

  }

  const next =()=>{
    if (currentImageIndex == (items.length - 1)) {
      setCurrentImageIndex(0)
    } else {
      setCurrentImageIndex((pre) => pre + 1)
    }
  }
  return (
    <div className={Styles.imageSlider}>
        <div className={Styles.container}>
            <div className={Styles.index}>
                <span>{currentImageIndex + 1}</span>
                <span>/</span>
                <span>{items.length}</span>

            </div>
          <div className={Styles.imgContainer}>
            <Image layout='responsive' height={'100%'} src={currentItem.img} width='100%'/>

          </div>
          <div className={Styles.textContainer}>
            <div className={Styles.name}>
              {currentItem.headline}

            </div>
            <div className={Styles.date}>
              {new Date(currentItem.createdAt).toDateString() }
            </div>
          </div>

        </div>
        <KeyboardArrowLeft onClick={previous} className={Styles.previous}/>
        <KeyboardArrowRight onClick={next} className={Styles.next} />
        <Cancel className={Styles.cancel} onClick={()=>setImgSliderOpen(false)}/>
    </div>
  )
}
