import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Twopac from '../assets/images/2Pac-roadmap.png'
import RM_LINE from '../assets/images/RM_LINE.png'

export const Roadmapsec = () => {
    return (
        <section className='py-5 mt-4 position-relative'>
            <div className='timeline d-xl-none d-block'>
                <div className='yellow-circle yellow-boll-6 '></div>
                <div className='yellow-circle yellow-boll-7 '></div>
                <div className='yellow-circle yellow-boll-8 '></div>
                <div className='yellow-circle yellow-boll-9 '></div>
                <div className='yellow-circle yellow-boll-10 '></div>
            </div>
            <Container >
                <h2 className="text-white fs-xxl m-0 mt-1  fw-normal text-center ff-azo" data-aos='zoom-in' data-aos-duration='2000' data-aos-delay='1000'>Roadmap</h2>
                <Row>
                    <Col xl={4} className='d-flex align-items-center justify-content-center justify-content-xl-start position-relative'>
                        <img src={Twopac} alt="#" />
                        <img className='white-line d-none d-xl-block' src={RM_LINE} alt="#" />
                    </Col>
                    <Col xl={8} className='mt-5'>
                        <div className='d-flex ms-sm-4 ms-xl-0 align-items-center mb-4 pb-2 position-relative Roadmap flex-sm-row flex-column'>
                            <span className='yellow-circle d-none d-xl-block yellow-boll-1' data-aos='zoom-in' data-aos-duration='2000' data-aos-delay='1000'></span>
                            <a className='white-line1 d-none d-xl-block' href="#"><svg xmlns="http://www.w3.org/2000/svg" width="179" height="12" viewBox="0 0 179 12" fill="none">
                                <path d="M0.666667 6C0.666666 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666666 0.666667 3.05448 0.666667 6ZM167.667 6.00001C167.667 8.94553 170.054 11.3333 173 11.3333C175.946 11.3333 178.333 8.94553 178.333 6.00002C178.333 3.0545 175.946 0.666681 173 0.666681C170.054 0.666681 167.667 3.0545 167.667 6.00001ZM6 7L173 7.00001L173 5.00001L6 5L6 7Z" fill="white" />
                            </svg></a>

                            <div className='ms-0 ms-xl-4 ps-0 ps-xl-3'><h2 className='Percent-box m-0'>20%</h2></div>
                            <div className='ps-30 ps-sm-5 ' data-aos='fade-left' data-aos-duration='2000' data-aos-delay='1000'>
                                <p className='text-white ff-azo m-0 mb-2 fw-normal fs-sm2'>Phase 1</p>
                                <p className='text-white fs-sm ff-mon fw-normal mx-522'>Mi amet elementum, posuere tempus odio eu lacinia. Natoque arcu viverra ullamcorper condimentum massa laoree</p>
                            </div>
                        </div>

                        <div className='d-flex ms-sm-4 ms-xl-0 align-items-center mb-4 pb-2 position-relative Roadmap flex-sm-row flex-column'>
                            <span className='yellow-circle d-none d-xl-block yellow-boll-2' data-aos='zoom-in' data-aos-duration='3000' data-aos-delay='1000'></span>
                            <a className='white-line2 d-none d-xl-block' href="#"><svg xmlns="http://www.w3.org/2000/svg" width="109" height="12" viewBox="0 0 109 12" fill="none">
                                <path d="M0.666667 6C0.666666 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666666 0.666667 3.05448 0.666667 6ZM97.6667 6.00001C97.6667 8.94553 100.054 11.3333 103 11.3333C105.946 11.3333 108.333 8.94553 108.333 6.00001C108.333 3.05449 105.946 0.666675 103 0.666675C100.054 0.666675 97.6667 3.05449 97.6667 6.00001ZM6 7L103 7.00001L103 5.00001L6 5L6 7Z" fill="white" />
                            </svg></a>
                            <div className='ps-0 ps-xl-5 ms-xl-4 ms-0'><h2 className='Percent-box ms-0 m-0  ms-xl-2'>40%</h2></div>
                            <div className='ps-30 ps-sm-5'>
                                <h2 className='text-white m-0 ff-azo mb-2 fw-normal fs-sm2'>Phase 2</h2>
                                <p className='text-white fs-sm ff-mon fw-normal mx-480'>Amet viverra diam netus aenean at mauris, facilisis quis. Urna euismod sed ultricies arcu ullamcorper </p>
                            </div>
                        </div>

                        <div className='d-flex ms-sm-4 ms-xl-0 align-items-center mb-4 pb-2 position-relative Roadmap flex-sm-row flex-column'>
                            <span className='yellow-circle d-none d-xl-block yellow-boll-3'></span>
                            <a className='white-line3 d-none d-xl-block' href="#"><svg width="123" height="12" viewBox="0 0 123 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.666667 6C0.666667 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666667 0.666667 3.05448 0.666667 6ZM111.667 6C111.667 8.94552 114.054 11.3333 117 11.3333C119.946 11.3333 122.333 8.94552 122.333 6C122.333 3.05448 119.946 0.666667 117 0.666667C114.054 0.666667 111.667 3.05448 111.667 6ZM6 7H117V5H6V7Z" fill="white" />
                            </svg>
                            </a>
                            <div className='ps-0 ps-xl-5 ms-xl-5 ms-0'><h2 className='Percent-box ms-xl-5 ms-0 m-0'>60%</h2></div>
                            <div className='ps-30 ps-sm-5' data-aos='fade-left' data-aos-duration='2000' data-aos-delay='1000'>
                                <h2 className='text-white m-0 mb-2 ff-azo fw-normal fs-sm2'>Phase 3</h2>
                                <p className='text-white fs-sm ff-mon fw-normal mx-440'>Hendrerit massa non sed sit. Lobortis in pulvinar lectus ut in elit nibh faucibus mauris. </p>
                            </div>
                        </div>

                        <div className='d-flex ms-sm-4 ms-xl-0 align-items-center mb-4 pb-2 position-relative Roadmap flex-sm-row flex-column'>
                            <span className='yellow-circle d-none d-xl-block yellow-boll-4' data-aos='zoom-in' data-aos-duration='3000' data-aos-delay='1000'></span>
                            <a className='white-line4 d-none d-xl-block' href="#"><svg width="97" height="12" viewBox="0 0 97 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.666667 6C0.666666 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666666 0.666667 3.05448 0.666667 6ZM85.6667 6.00001C85.6667 8.94553 88.0545 11.3333 91 11.3333C93.9455 11.3333 96.3333 8.94553 96.3333 6.00001C96.3333 3.05449 93.9455 0.666674 91 0.666674C88.0545 0.666674 85.6667 3.05449 85.6667 6.00001ZM6 7L91 7.00001L91 5.00001L6 5L6 7Z" fill="white" />
                            </svg></a>

                            <div className='ps-xl-5 ps-0 ms-xl-4 ms-0'><h2 className='Percent-box ms-0 m-0  ms-xl-2' data-aos='zoom-in' data-aos-duration='3000' data-aos-delay='1000'>80%</h2></div>
                            <div className='ps-30 ps-sm-5' data-aos='fade-left' data-aos-duration='2000' data-aos-delay='1000'>
                                <h2 className='text-white m-0 mb-2 ff-azo fw-normal fs-sm2'>Phase 4</h2>
                                <p className='text-white fs-sm fw-normal ff-mon mx-522'>Ut egestas lacus nec varius blandit volutpat, malesuada nunc, nisl. Nisl mattis convallis lacus tristique.</p>
                            </div>
                        </div>

                        <div className='d-flex ms-sm-4 ms-xl-0 align-items-center mb-4 pb-2 position-relative Roadmap flex-sm-row flex-column'>
                            <span className='yellow-circle d-none d-xl-block yellow-boll-5' data-aos='zoom-in' data-aos-duration='3000' data-aos-delay='1000'></span>
                            <a className='white-line5 d-none d-xl-block' href="#"><svg width="133" height="12" viewBox="0 0 133 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.666667 6C0.666666 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666666 0.666667 3.05448 0.666667 6ZM121.667 6.00001C121.667 8.94553 124.054 11.3333 127 11.3333C129.946 11.3333 132.333 8.94553 132.333 6.00001C132.333 3.05449 129.946 0.666677 127 0.666677C124.054 0.666677 121.667 3.05449 121.667 6.00001ZM6 7L127 7.00001L127 5.00001L6 5L6 7Z" fill="white" />
                            </svg></a>

                            <div className='ms-xl-4 ms-0 ps-xl-3 ps-0'><h2 className='Percent-box m-0' data-aos='zoom-in' data-aos-duration='3000' data-aos-delay='1000'>100%</h2></div>
                            <div className='ps-30 ps-sm-5' data-aos='fade-left' data-aos-duration='2000' data-aos-delay='1000'>
                                <h2 className='text-white m-0 mb-2 fw-normal ff-azo fs-sm2'>Phase 5</h2>
                                <p className='text-white fs-sm fw-normal ff-mon mx-522'>Faucibus congue risus nisl dictum. A, viverra malesuada nunc varius. Ut dignissim mauris eu sed nisl neque. </p>
                            </div>
                        </div>

                    </Col>
                </Row>
                <div className='d-flex justify-content-center mt-4'>
                    <button className='main-btn fs-sm fw-normal text-black ff-azo'> Read Our Whitepaper</button>
                </div>
            </Container>
        </section>
    )
}
export default Roadmapsec

