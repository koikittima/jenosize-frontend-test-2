import React, { useState } from 'react'
import Header from '../component/Header'
import { Container, Row, Col } from 'react-bootstrap';
import { BoxCard } from '../assets/styles/globalStyles';


function Home() {

  const dataList = [
    {
      id: 1,
      name: "ChocolateVille (ชอคโกแลต วิลล์)",
      detail: "ขอต้อนรับทุกท่านสู่ร้านอาหาร Chocolate Ville สถานที่ซึ่งเต็มไปด้วยความสุขและเสียงหัวเราะ นอกจากรับประทานอาหารแสนอร่อยแล้ว เราอยากจะชักชวนทุกท่านให้สำรวจส่วนต่างๆของร้านอาหาร เรามีประภาคารสูงตระหง่านที่สามารถชมวิวได้ 360 องศา น้ำตกที่อุดมสมบูรณ์ ตึกรามบ้านช่องน้อยใหญ่ที่เต็มไปด้วยเรื่องเล่า และเป็ดน้อยที่รอทักทายผู้มาเยี่ยมเยียน ให้ทุกท่านได้ร่วมกันสร้างความทรงจำดีดีกับคนที่คุณรักที่ร้านอาหาร Chocolate Ville ดูน้อยลง ",
      img: "/images/chocoloate.jpg"
    },
    {
      id: 3,
      name: "ChocolateVille (ชอคโกแลต วิลล์)",
      detail: "ขอต้อนรับทุกท่านสู่ร้านอาหาร Chocolate Ville สถานที่ซึ่งเต็มไปด้วยความสุขและเสียงหัวเราะ นอกจากรับประทานอาหารแสนอร่อยแล้ว เราอยากจะชักชวนทุกท่านให้สำรวจส่วนต่างๆของร้านอาหาร เรามีประภาคารสูงตระหง่านที่สามารถชมวิวได้ 360 องศา น้ำตกที่อุดมสมบูรณ์ ตึกรามบ้านช่องน้อยใหญ่ที่เต็มไปด้วยเรื่องเล่า และเป็ดน้อยที่รอทักทายผู้มาเยี่ยมเยียน ให้ทุกท่านได้ร่วมกันสร้างความทรงจำดีดีกับคนที่คุณรักที่ร้านอาหาร Chocolate Ville ดูน้อยลง ",
      img: "/images/chocoloate.jpg"
    },
    {
      id: 3,
      name: "ChocolateVille (ชอคโกแลต วิลล์)",
      detail: "ขอต้อนรับทุกท่านสู่ร้านอาหาร Chocolate Ville สถานที่ซึ่งเต็มไปด้วยความสุขและเสียงหัวเราะ นอกจากรับประทานอาหารแสนอร่อยแล้ว เราอยากจะชักชวนทุกท่านให้สำรวจส่วนต่างๆของร้านอาหาร เรามีประภาคารสูงตระหง่านที่สามารถชมวิวได้ 360 องศา น้ำตกที่อุดมสมบูรณ์ ตึกรามบ้านช่องน้อยใหญ่ที่เต็มไปด้วยเรื่องเล่า และเป็ดน้อยที่รอทักทายผู้มาเยี่ยมเยียน ให้ทุกท่านได้ร่วมกันสร้างความทรงจำดีดีกับคนที่คุณรักที่ร้านอาหาร Chocolate Ville ดูน้อยลง ",
      img: "/images/chocoloate.jpg"
    },


  ]

  const initialForm = {
    search: ""
  }
  const [form, setForm] = useState(initialForm);

  const renderRestaurant = (data) => {
    if (data.length > 0) {
      return data.map((item, index) => (
        <Col lg={9} md={9} sm={12} xs={12} className="mb-4 " key={index}
        >
          <BoxCard className="w-100 h-100 p-4 cursor-p mt-4 ">
            <Row >
              <Col lg={4} md={12} sm={12} xs={12} className="d-flex align-items-center ">
                <div className="w-100">
                  <div className="d-flex justify-content-center">
                    <img className=" image-sub  image-width" src={item.img} alt="" />
                  </div>
                </div>
              </Col>
              <Col lg={7} md={12} sm={12} xs={12} className="d-flex align-items-center pb-auto ">
                <div className="w-100">
                  <div className="mt-2">
                    <span className='font18 blod'>{item.name}</span>
                  </div>
                  <div className='mt-2'>
                    <span className='font14'>{item.detail}</span>
                  </div>
                </div>
              </Col>
            </Row>
          </BoxCard>
        </Col>
      ))
    }
  };


  return (
    <div >
      <Header title="Jenosize" description="Jenosize" keywords="Jenosize" />
      <section className="py-4 ">

        <section>
          <Container>
            <div className="d-flex justify-content-end">
              <div class="form-group has-search ">
                <span class="fa fa-search form-control-feedback text-blue"></span>
                <input type="text" value={form.search} id="search" class="form-control" placeholder="Search" aria-label="Search"
                  onChange={(e) => {
                    setForm({ ...form, search: e.target.value })
                  }}

                />
              </div>
            </div>
          </Container>
        </section>

        <section>
          <Container className='px-4'>
            <Row className='d-flex justify-content-center'>
              {renderRestaurant(dataList)}
            </Row>
          </Container>
        </section>
        <section className="py-5"> </section>
      </section>
    </div >
  )
}

export const getStaticProps = async () => {
  return {
    props: {
    },
  }
}

export default Home
