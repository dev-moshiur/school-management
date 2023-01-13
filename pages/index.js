import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import styles from "../styles/Home.module.scss";
import Notice from "../components/Notice";
import Teacher from "../components/Teacher";
import News from "../components/News";
import Gellary from "../components/Gellary";
import Theme from "../components/Theme";
import Link from "next/link";
import { Call, Phone } from "@material-ui/icons";
export default function Home({ notice, teacher, headTeacher, news, gellary }) {
  return (
    <div className={styles.home}>
      <div className={styles.land}>
        <div className={styles.banner}>
          <Theme />
        </div>

        {notice && (
          <div className={styles.notice}>
            <div className={styles.heading}>Notice Board</div>
            <div className={styles.container}>
              {notice.map((item) => (
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam similique
        deleniti hic enim! Id, cupiditate aliquam sit, harum perferendis
        laboriosam neque veniam inventore dolorum, maiores animi repudiandae
        natus ipsam sint! Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Possimus corrupti quibusdam doloribus, minus magnam ipsum incidunt
        voluptates saepe voluptatibus cum similique est, alias itaque quia, unde
        nam nulla. Voluptatum, nam! Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Possimus corrupti quibusdam doloribus, minus magnam
        ipsum incidunt voluptates saepe voluptatibus cum similique est, alias
        itaque quia, unde nam nulla. Voluptatum, nam! Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Possimus corrupti quibusdam
        doloribus, minus magnam ipsum incidunt voluptates saepe voluptatibus cum
        similique est, alias itaque quia, unde nam nulla. Voluptatum, nam! Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Possimus corrupti
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
          {headTeacher.img && (
            <Image
              layout="responsive"
              width={"100%"}
              height="100%"
              src={headTeacher.img}
              alt="photo"
            />
          )}
        </div>
        <div className={styles.textContainer}>
          <div className={styles.text}>
            <span>Name :</span>
            <span>{headTeacher.name}</span>
          </div>
          <div className={styles.text}>
            <span>Email :</span>
            <span>{headTeacher.email}</span>
          </div>
          <div className={styles.text}>
            <span>Phone :</span>
            <span>{headTeacher.phone} </span>
          </div>
          <div className={styles.text}>
            <span>Qualification :</span>
            <span>{headTeacher.qualification}</span>
          </div>
          <div className={styles.text}>
            <span>Join Date : </span>
            <span>{headTeacher.joinDate}</span>
          </div>
          <div className={styles.text}>
            <span>Address :</span>
            <span>{headTeacher.address}</span>
          </div>
        </div>
      </div>

      {teacher && (
        <>
          <div className={styles.heading}>Assistant Teachers</div>
          <div className={styles.headerUnderline}></div>
          <div className={styles.teachers}>
            <div className={styles.container}>
              {teacher.map((item) => (
                <Teacher key={item._id} teacherInfo={item} />
              ))}
            </div>
            <div className={styles.all}>
              <Link href={"/teacher"}>
                <a>View all</a>
              </Link>
            </div>
          </div>
        </>
      )}

      {news && (
        <>
          <div className={styles.heading}>News</div>
          <div className={styles.headerUnderline}></div>
          <div className={styles.news}>
            <div className={styles.container}>
              {news.map((item) => (
                <News key={item._id} allData={item} />
              ))}
            </div>
            <div className={styles.all}>
              <Link href={"/news"}>View all</Link>
            </div>
          </div>
        </>
      )}

      {gellary && (
        <>
          <div className={styles.heading}>Photo Gellary</div>
          <div className={styles.headerUnderline}></div>
          <div className={styles.gellary}>
            <div className={styles.container}>
              {gellary.map((item) => (
                <Gellary key={item._id} gellaryInfo={item} />
              ))}
            </div>
            <div className={styles.all}>
              <Link href={"/gellary"}>View All</Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const server = `http://localhost:8002https://school-management-api-six.vercel.app`;

  const res = await fetch(`${server}/homePage`);
  const getData = await res.json();

  return {
    props: {
      ...getData,
    },
  };
};
