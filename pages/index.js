import Image from "next/image";
import ImageSlider from "../components/ImageSlider";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.scss";
import Notice from "../components/Notice";
import Teacher from "../components/Teacher";
import News from "../components/News";
import Gellary from "../components/Gellary";
import Theme from "../components/Theme";
import Link from "next/link";
import Loading from "../components/Loading";
import Preloading from '../components/Preloading'
import { Email, Person, Phone, PinDrop, School, Timelapse, WorkSharp } from "@material-ui/icons";

export default function Home() {
  const [pageData, setpageData] = useState({});
  const [loading, setloading] = useState(true);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [imgSliderOpen, setImgSliderOpen] = useState(false);
  const [firstLanding, setFirstLanding] = useState(true)

  useEffect(() => {
    setloading(true);
    const server = `https://school-management-api-six.vercel.app`;

    fetch(`${server}/homePage`)
      .then((res) => res.json())
      .then((data) => {
        setpageData(data);
        setloading(false);
        setFirstLanding(false)
      });
  }, []);

  return (
    <><Preloading firstLanding={firstLanding}/>
      {loading && <Loading loading={loading} />}
      {!loading && (
        <div className={styles.home}>
          <div className={styles.land}>
            <div className={styles.banner}>
              {pageData.banner && <Theme banners={pageData.banner} />}
            </div>

            {pageData.notice && (
              <div className={styles.notice}>
                <div className={styles.heading}>Notice Board</div>
                <div className={styles.container}>
                  {pageData.notice.map((item) => (
                    <Notice key={item._id} noticeInfo={item} />
                  ))}
                </div>
                <div className={styles.all}>
                  <Link href={"/notice"}>
                    <a>View All</a>
                  </Link>
                </div>
              </div>
            )}
          </div>
          <div className={styles.heading}>About KHSC</div>
          <div className={styles.headerUnderline}></div>
          <div className={styles.about}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
            similique deleniti hic enim! Id, cupiditate aliquam sit, harum
            perferendis laboriosam neque veniam inventore dolorum, maiores animi
            repudiandae natus ipsam sint! Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Possimus corrupti quibusdam doloribus,
            minus magnam ipsum incidunt voluptates saepe voluptatibus cum
            similique est, alias itaque quia, unde nam nulla. Voluptatum, nam!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
            corrupti quibusdam doloribus, minus magnam ipsum incidunt voluptates
            saepe voluptatibus cum similique est, alias itaque quia, unde nam
            nulla. Voluptatum, nam! Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Possimus corrupti quibusdam doloribus, minus
            magnam ipsum incidunt voluptates saepe voluptatibus cum similique
            est, alias itaque quia, unde nam nulla. Voluptatum, nam! Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Possimus corrupti
            quibusdam doloribus, minus magnam ipsum incidunt voluptates saepe
            voluptatibus cum similique est, alias itaque quia, unde nam nulla.
            Voluptatum, nam!
            <div className={styles.all}>
              <Link href={"/teacher"}>
                <a>See more</a>
              </Link>
            </div>
          </div>

          <div className={styles.heading}>Head Teacher</div>
          <div className={styles.headerUnderline}></div>
          <div className={styles.headTeacher}>
            <div className={styles.imgContainer}>
              {pageData.headTeacher[0].img && (
                <Image
                  layout='responsive'
                  width={"10%"}
                  height="10%"
                  src={pageData.headTeacher[0].img}
                  alt="photo"
                />
              )}
            </div>
            <div className={styles.textContainer}>
              <div className={styles.text}>
                <Person/>
                <span>Name :</span>
                <span>{pageData.headTeacher[0].name}</span>
              </div>
              <div className={styles.text}>
                <Email/>
                <span>Email :</span>
                <span>{pageData.headTeacher[0].email}</span>
              </div>
              <div className={styles.text}>
                <Phone/>
                <span>Phone :</span>
                <span>{pageData.headTeacher[0].phone} </span>
              </div>
              <div className={styles.text}>
                <School/>
                <span>Qualification :</span>
                <span>{pageData.headTeacher[0].qualification}</span>
              </div>
              <div className={styles.text}>
                <WorkSharp/>
                <span>Join Date : </span>
                <span>{pageData.headTeacher[0].joinDate}</span>
              </div>
              <div className={styles.text}>
                <PinDrop/>
                <span>Address :</span>
                <span>{pageData.headTeacher[0].address}</span>
              </div>
            </div>
          </div>

          {pageData.teacher && (
            <>
              <div className={styles.heading}>Assistant Teachers</div>
              <div className={styles.headerUnderline}></div>
              <div className={styles.teachers}>
                <div className={styles.container}>
                  {pageData.teacher.map((item) => (
                    <Teacher key={item._id} teacherInfo={item} />
                  ))}
                </div>
                <div className={styles.all}>
                  <Link href={"/teachers"}>
                    <a>View all</a>
                  </Link>
                </div>
              </div>
            </>
          )}

          {pageData.news && (
            <>
              <div className={styles.heading}>News</div>
              <div className={styles.headerUnderline}></div>
              <div className={styles.news}>
                <div className={styles.container}>
                  {pageData.news.map((item) => (
                    <News key={item._id} allData={item} />
                  ))}
                </div>
                <div className={styles.all}>
                  <Link href={"/news"}>View all</Link>
                </div>
              </div>
            </>
          )}

          {pageData.gellary && (
            <>
              <div className={styles.heading}>Photo Gellary</div>
              <div className={styles.headerUnderline}></div>
              <div className={styles.gellary}>
              <div className={styles.sliderBtn} onClick={()=>{setImgSliderOpen(true);setCurrentItemIndex(0)}}>

                View Slider

                </div>
                <div className={styles.container}>
                  {pageData.gellary.map((item,index) => (
                    <div onClick={()=>{setCurrentItemIndex(index);setImgSliderOpen(true)}} key={index}>
                    <Gellary   gellaryInfo={item} />
                    </div>
                  ))}
                </div>
                <div className={styles.all}>
                  <Link href={"/gellary"}>View All</Link>
                </div>
              </div>
              {imgSliderOpen && <ImageSlider 
                items={pageData.gellary}
                currentItemIndex={currentItemIndex}
                setImgSliderOpen={setImgSliderOpen } />}
            </>
          )}
        </div>
      )}
    </>
  );
}

// export const getServerSideProps = async (ctx) => {
//   const server = `https://school-management-api-six.vercel.app`;

//   const res = await fetch(`${server}/homePage`);
//   const getData = await res.json();

//   return {
//     props: {
//       ...getData,
//     },
//   };
// };
