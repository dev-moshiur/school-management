import Styles from "../styles/Gellary.module.scss";
import React, { useState } from "react";
import Gellary from "../components/Gellary";
import GalleryForm from "../popupForms/gellary/Gellary";
import ImageSlider from "../components/ImageSlider";
export default function Gell({ getData }) {
  const [formOpen, setFormOpen] = useState(false);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [imgSliderOpen, setImgSliderOpen] = useState(false)


  return (
    <>
      <div className={Styles.gellary}>
        <div className={Styles.container}>
          <div onClick={() => setFormOpen(true)} className={Styles.add}>
            <button>Add an image</button>
          </div>
          <div className={Styles.sliderBtn} onClick={()=>{setImgSliderOpen(true);setCurrentItemIndex(0)}}>

                View Slider

                </div>
          <div className={Styles.gellaryContainer}>
            {getData.map((item,index) => (
              <div onClick={()=>{setCurrentItemIndex(index);setImgSliderOpen(true)}} key={index}>
              <Gellary   gellaryInfo={item} />
              </div>
            ))}
          </div>
        </div>
        {imgSliderOpen && <ImageSlider 
                items={getData}
                currentItemIndex={currentItemIndex}
                setImgSliderOpen={setImgSliderOpen } />}
      </div>
      <GalleryForm
        formOpen={formOpen}
        setFormOpen={setFormOpen}
        method={"post"}
      />
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  const server = `https://school-management-api-six.vercel.app`;
  const res = await fetch(`${server}/gellary`);
  const getData = await res.json();
  return {
    props: {
      getData,
    },
  };
};
