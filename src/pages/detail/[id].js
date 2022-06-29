import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../../component/Header'
import { Button } from '../../assets/styles/globalStyles';
import InputText from '../../component/InputText';



function Ourwork(props) {
    const router = useRouter()
    const { id } = router.query;
    const [data, setData] = useState({})
    const [like, setLike] = useState("un-like");
    const [point, setPoint] = useState("un-point");

    const initialForm = {
        comment: "",
    };
    const [form, setForm] = useState(initialForm);

    useEffect(() => {
        setData(props.dataList)
    }, [])

    return (
        <div>
            <Header title="OK Rs Report" description="Jenosize" keywords="Jenosize" />
            <section className="py-3">
                <Container>
                    <Row className=' '>
                        <Col lg={8} md={8} sm={8} xs={8} className="d-flex align-items-center" >
                            <i class="fa fa-user-circle gray-40 font30 mr-2"></i>
                            <div>
                                <p className='font14 mb-0 blod'>{data.name}</p>
                                <p className='font14 mb-0'>{data.position}</p>
                            </div>
                        </Col>
                        <Col lg={4} md={4} sm={4} xs={4} className="" >
                            <div className=' d-flex align-items-center justify-content-end'>
                                <i class="fas fa-calendar-alt gray-60 mr-2"></i>
                                <p className='font14 mb-0 '>{data.date}</p>
                            </div>
                            <div className=' d-flex align-items-center justify-content-end'>
                                <i class="fas fa-clock gray-60 mr-2"></i>
                                <p className='font14 mb-0 '>{data.time}</p>
                            </div>
                        </Col>
                    </Row>

                    {data.content && data.content.map((item, index) => {
                        return <div key={index} className='mt-4'>
                            <p className='font14 mb-0 text-gray'>Contant {index + 1}</p>
                            <p className='font14 mb-0 mt-2'>{item.contentDt}</p>
                        </div>
                    })
                    }

                    <div className='mt-4'>
                        <p className='font14 mb-0 text-gray'>image</p>
                        <div className="d-flex justify-content-start mt-2">
                            {data.img && data.img.map((item, index) => {
                                return <div key={index} className={index > 1 ? "" : "mr-2"}>
                                    <img className="img-fluid" src={item.imgdt} alt="img" />
                                </div>
                            })
                            }
                        </div>
                    </div>

                    <div className='mt-4'>
                        <p className='font14 mb-0 text-gray'>Attach File</p>
                        <i class="fa fa-paperclip mr-2 mt-2"></i> <span className='font14 mb-0 mt-2 blue-80'>Update Design OKRS.pdf</span>
                    </div>
                </Container>

                <Container className='bg-detail mt-4 '>
                    <Row className='py-3'>
                        <Col lg={3} md={3} sm={3} xs={3} className="d-flex align-items-center border-r" >
                            <div className="w-100">
                                <div className=''>
                                    <p className='font12 mb-0 text-gray'>Read ({data.read})</p>
                                </div>
                            </div>
                        </Col>

                        <Col lg={3} md={3} sm={3} xs={3} className="d-flex align-items-center border-r">
                            <div className="w-100">
                                <div className=''>
                                    <p className='font12 mb-0 text-gray'>Unroad ({data.unroad})</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={3} sm={3} xs={3} className="d-flex align-items-center ">
                            <div className="w-100">
                                <div className=''>
                                    <p className='font12 mb-0 text-gray'>Like ({data.like})</p>
                                </div>
                            </div>
                        </Col>

                        <Col lg={3} md={3} sm={3} xs={3} className="d-flex align-items-center ">
                            <div className="w-100">
                                <div className='d-flex align-items-center justify-content-end'>
                                    <span className='font12 mb-0 blue-80 mr-2'>View </span>
                                    <i class="fa fa-chevron-right blue-80"></i>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container className='mt-4'>
                    <div className="d-flex align-items-center  justify-content-center">
                        <Button bg={point === "point" ? "#3766FF" : "#fff"} color={point === "point" ? "#fff" : "#3766FF"}
                            shadow border_radius="50px" border="1px solid #3766FF" type="none" className='mr-4' width="117px"
                            onClick={() => {
                                if (point === "un-point") {
                                    setPoint("point")
                                } else {
                                    setPoint("un-point")
                                }

                            }}
                        >
                            <span className="d-flex align-items-center justify-content-center font12 p-2">
                                <i className="fa fa-gift mr-2"></i>
                                Give Point
                            </span>
                        </Button>

                        <Button bg={like === "like" ? "#3766FF" : "#fff"} color={like === "like" ? "#fff" : "#3766FF"}
                            shadow border_radius="50px" border="1px solid #3766FF" type="none" width="117px"
                            onClick={() => {
                                if (like === "un-like") {
                                    setLike("like")
                                } else {
                                    setLike("un-like")
                                }

                            }}
                        >
                            <span className="d-flex align-items-center justify-content-center font12 p-2">
                                <i className="fa fa-thumbs-up mr-2"></i>
                                Like
                            </span>
                        </Button>
                    </div>

                    {data.comment && data.coment.map((item, index) => {
                        return <div key={index} className='mt-4'>
                            <div className='border mt-4 '></div>
                            <Row className='mt-4'>
                                <Col lg={12} md={12} sm={12} xs={12} className="d-flex align-items-center" >
                                    <i class="fa fa-user-circle gray-40 font30 mr-2"></i>
                                    <div>
                                        <p className='font14 mb-0 blod'>{item.name}</p>
                                        <p className='font14 mb-0'>{item.position}</p>
                                    </div>
                                </Col>

                                <Col lg={12} md={12} sm={12} xs={12} className="" >
                                    <div className='mt-4'>
                                        <p className='font14 mb-0 mt-2'>{item.comment_detail}</p>
                                    </div>
                                </Col>

                                <Col lg={12} md={12} sm={12} xs={12} className="mt-2" >
                                    <div className=' d-flex  justify-content-between'>
                                        <div className=' d-flex '>
                                            <p className='font14 mb-0 '>2 days ago</p>
                                            <p className='font14 mb-0 blue-80 ml-4'>{item.like} Like</p>
                                        </div>
                                        <div className=' d-flex '>
                                            <div className='d-flex'>
                                                <img className="img-fluid" src="/images/svg/icon-comment.svg" alt="" />
                                                <p className='font14 mb-0 blue-80 ml-2'>Reply</p>
                                            </div>
                                            <div className='d-flex ml-4'>
                                                <img className="img-fluid" src="/images/svg/icon-like.svg" alt="" />
                                                <p className='font14 mb-0 ml-2 blue-80 '>Like</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    })
                    }

                    <div className='border mt-4 '></div>
                    <Row className='mt-4'>
                        <Col lg={12} md={12} sm={12} xs={12} className="d-flex " >
                            <div className='mt-3 d-flex mr-4'>
                                <i class="fas fa-image gray-60 mr-4 font20" ></i>
                                <i class="fa fa-paperclip mr-4  gray-60 font20"></i>
                                <i class="fa fa-at gray-60 "></i>
                            </div>
                            <div className='w-100'>
                                <InputText title="" type="text" idName="comment" classFormGroup="mt-2"
                                    placeholder="comment" classLabel="normal" value={form.comment}
                                    handleChange={(value) => {
                                        setForm({ ...form, comment: value })
                                    }}
                                />
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>
        </div >
    )
}

export async function getStaticPaths() {

    return {
        paths: [
            { params: { id: '1' } },
            { params: { id: '2' } },
            { params: { id: '3' } },
            { params: { id: '4' } },
            { params: { id: '5' } },
            { params: { id: '6' } },
            { params: { id: '7' } },
        ],
        fallback: false
    }
}

export const getStaticProps = async ({ params }) => {
    const data = [
        {
            id: 1,
            name: "Ekarach Sripen",
            position: " Graphic Design",
            calendar: "Daily Report",
            like: "40",
            comment: "22",
            point: "200",
            diamond: "30",
            read: "20",
            unroad: "45",
            unlike: "53",
            date: "14/01/2020",
            time: "10:34",
            img: [
                { imgdt: "/images/svg/imgtest.svg" },
                { imgdt: "/images/svg/imgtest.svg" },
                { imgdt: "/images/svg/imgtest.svg" },
            ],
            content: [
                { contentDt: `Content creators promote companies' products and services by developing copy for websites, social media, marketing materials, and other platforms.` },
                { contentDt: `We are looking for a Content Creator to write and publish various types of pieces for our company’s web pages, like articles, ebooks and social media posts.` },
                { contentDt: `Learn about digital content creation. The edX platform offers training in digital marketing with courses designed in partnership with leaders in the field.` },
            ],
            coment: [
                {
                    name: "Dichapart  KornKang",
                    position: "Creative",
                    comment_detail: "Learn about the key requirements, duties, responsibilities, and skills that should be in a content writer job description.Writer Job Description",
                    like: "30"
                },
                {
                    name: "Dichapart  Resunkang",
                    position: " Graphic Design",
                    comment_detail: "Learn about the key requirements, duties, responsibilities, and skills that should be in a content writer job description.Writer Job Description",
                    like: "10"
                }
            ]
        },
        {
            id: 2,
            name: "Dichapart  KornKang",
            position: "Creative",
            calendar: "Daily Report",
            like: "43",
            comment: "24",
            point: "300",
            diamond: "40",
            read: "20",
            unroad: "25",
            unlike: "53",
            date: "15/02/2020",
            time: "11:34",
            img: [
                { imgdt: "/images/svg/imgtest.svg" },
                { imgdt: "/images/svg/imgtest.svg" },
                { imgdt: "/images/svg/imgtest.svg" },
            ],
            content: [
                { contentDt: `Content creators promote companies' products and services by developing copy for websites, social media, marketing materials, and other platforms.` },
                { contentDt: `We are looking for a Content Creator to write and publish various types of pieces for our company’s web pages, like articles, ebooks and social media posts.` },
                { contentDt: `Learn about digital content creation. The edX platform offers training in digital marketing with courses designed in partnership with leaders in the field.` },
            ],
            coment: [
                {
                    name: "Ekarach Sripen",
                    position: " Graphic Design",
                    comment_detail: "Learn about the key requirements, duties, responsibilities, and skills that should be in a content writer job description.Writer Job Description",
                    like: "30"
                },
                {
                    name: "Sasina jumput",
                    position: " Graphic Design",
                    comment_detail: "Learn about the key requirements, duties, responsibilities, and skills that should be in a content writer job description.Writer Job Description",
                    like: "10"
                },
            ]
        },
        {
            id: 3,
            name: "Asananda Ray",
            position: "HR",
            calendar: "Weekly Report",
            like: "30",
            comment: "24",
            point: "310",
            diamond: "40",
            point: "300",
            diamond: "40",
            read: "20",
            unroad: "25",
            unlike: "53",
            date: "13/05/2020",
            time: "13:34",
            img: [
                { imgdt: "/images/svg/imgtest.svg" },
                { imgdt: "/images/svg/imgtest.svg" },
                { imgdt: "/images/svg/imgtest.svg" },
            ],
            content: [
                { contentDt: `Content creators promote companies' products and services by developing copy for websites, social media, marketing materials, and other platforms.` },
                { contentDt: `We are looking for a Content Creator to write and publish various types of pieces for our company’s web pages, like articles, ebooks and social media posts.` },
                { contentDt: `Learn about digital content creation. The edX platform offers training in digital marketing with courses designed in partnership with leaders in the field.` },
            ],
            coment: [
                {
                    name: "Ekarach Sripen",
                    position: " Graphic Design",
                    comment_detail: "Learn about the key requirements, duties, responsibilities, and skills that should be in a content writer job description.Writer Job Description",
                    like: "30"
                },
                {
                    name: "Sasina jumput",
                    position: " Graphic Design",
                    comment_detail: "Learn about the key requirements, duties, responsibilities, and skills that should be in a content writer job description.Writer Job Description",
                    like: "10"
                },
            ]
        },
        {
            id: 4,
            name: "Ekarach Sripen",
            position: " Graphic Design",
            calendar: "Daily Report",
            like: "50",
            comment: "15",
            point: "300",
            diamond: "50",
            point: "300",
            diamond: "40",
            read: "20",
            unroad: "25",
            unlike: "53",
            date: "12/01/2020",
            time: "11:34",
            img: [
                { imgdt: "/images/svg/imgtest.svg" },
                { imgdt: "/images/svg/imgtest.svg" },
                { imgdt: "/images/svg/imgtest.svg" },
            ],
            content: [
                { contentDt: `Content creators promote companies' products and services by developing copy for websites, social media, marketing materials, and other platforms.` },
                { contentDt: `We are looking for a Content Creator to write and publish various types of pieces for our company’s web pages, like articles, ebooks and social media posts.` },
                { contentDt: `Learn about digital content creation. The edX platform offers training in digital marketing with courses designed in partnership with leaders in the field.` },
            ],
            coment: [
                {
                    name: "Ekarach Sripen",
                    position: " Graphic Design",
                    comment_detail: "Learn about the key requirements, duties, responsibilities, and skills that should be in a content writer job description.Writer Job Description",
                    like: "30"
                },
                {
                    name: "Sasina jumput",
                    position: " Graphic Design",
                    comment_detail: "Learn about the key requirements, duties, responsibilities, and skills that should be in a content writer job description.Writer Job Description",
                    like: "10"
                },
            ]
        },
        {
            id: 5,
            name: "Asananda Ray",
            position: " Graphic Design",
            calendar: "Daily Report",
            like: "25",
            comment: "10",
            point: "500",
            diamond: "50",
            point: "300",
            diamond: "40",
            read: "20",
            unroad: "25",
            unlike: "53",
            date: "14/01/2020",
            time: "11:34",
            img: [
                { imgdt: "/images/svg/imgtest.svg" },
                { imgdt: "/images/svg/imgtest.svg" },
                { imgdt: "/images/svg/imgtest.svg" },
            ],
            content: [
                { contentDt: `Content creators promote companies' products and services by developing copy for websites, social media, marketing materials, and other platforms.` },
                { contentDt: `We are looking for a Content Creator to write and publish various types of pieces for our company’s web pages, like articles, ebooks and social media posts.` },
                { contentDt: `Learn about digital content creation. The edX platform offers training in digital marketing with courses designed in partnership with leaders in the field.` },
            ],
            coment: [
                {
                    name: "Ekarach Sripen",
                    position: " Graphic Design",
                    comment_detail: "Learn about the key requirements, duties, responsibilities, and skills that should be in a content writer job description.Writer Job Description",
                    like: "30"
                },
                {
                    name: "Sasina jumput",
                    position: " Graphic Design",
                    comment_detail: "Learn about the key requirements, duties, responsibilities, and skills that should be in a content writer job description.Writer Job Description",
                    like: "10"
                },
            ]
        },
        {
            id: 6,
            name: "Ekarach Sripen",
            position: " Graphic Design",
            calendar: "Daily Report",
            like: "43",
            comment: "20",
            point: "400",
            diamond: "55",
            read: "20",
            unroad: "25",
            unlike: "53",
            date: "12/02/2020",
            time: "12:34",
            img: [
                { imgdt: "/images/svg/imgtest.svg" },
                { imgdt: "/images/svg/imgtest.svg" },
                { imgdt: "/images/svg/imgtest.svg" },
            ],
            content: [
                { contentDt: `Content creators promote companies' products and services by developing copy for websites, social media, marketing materials, and other platforms.` },
                { contentDt: `We are looking for a Content Creator to write and publish various types of pieces for our company’s web pages, like articles, ebooks and social media posts.` },
                { contentDt: `Learn about digital content creation. The edX platform offers training in digital marketing with courses designed in partnership with leaders in the field.` },
            ],
            coment: [
                {
                    name: "Ekarach Sripen",
                    position: " Graphic Design",
                    comment_detail: "Learn about the key requirements, duties, responsibilities, and skills that should be in a content writer job description.Writer Job Description",
                    like: "30"
                },
                {
                    name: "Sasina jumput",
                    position: " Graphic Design",
                    comment_detail: "Learn about the key requirements, duties, responsibilities, and skills that should be in a content writer job description.Writer Job Description",
                    like: "10"
                },
            ]
        },
        {
            id: 7,
            name: "Ekarach Sripen",
            position: " Graphic Design",
            calendar: "Daily Report",
            like: "56",
            comment: "40",
            point: "576",
            diamond: "60",
            read: "20",
            unroad: "25",
            unlike: "53",
            date: "15/02/2020",
            time: "11:34",
            img: [
                { imgdt: "/images/svg/imgtest.svg" },
                { imgdt: "/images/svg/imgtest.svg" },
                { imgdt: "/images/svg/imgtest.svg" },
            ],
            content: [
                { contentDt: `Content creators promote companies' products and services by developing copy for websites, social media, marketing materials, and other platforms.` },
                { contentDt: `We are looking for a Content Creator to write and publish various types of pieces for our company’s web pages, like articles, ebooks and social media posts.` },
                { contentDt: `Learn about digital content creation. The edX platform offers training in digital marketing with courses designed in partnership with leaders in the field.` },
            ],
            coment: [
                {
                    name: "Ekarach Sripen",
                    position: " Graphic Design",
                    comment_detail: "Learn about the key requirements, duties, responsibilities, and skills that should be in a content writer job description.Writer Job Description",
                    like: "30"
                },
                {
                    name: "Sasina jumput",
                    position: " Graphic Design",
                    comment_detail: "Learn about the key requirements, duties, responsibilities, and skills that should be in a content writer job description.Writer Job Description",
                    like: "10"
                },
            ]
        },
    ]

    let dataList = {}
    data.filter((item, index) => {
        if (item.id == params.id) {
            dataList = item
        }
    })
    return {
        props: { dataList },
    }
}

export default Ourwork;
