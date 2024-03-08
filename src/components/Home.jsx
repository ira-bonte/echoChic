import Landing from '../assets/images/landingImage.jpg';
import uberEats from '../assets/images/uberEats.png';
import slack from '../assets/images/slack.png';
import microsoft from '../assets/images/microsoft.png';
import amazon from '../assets/images/amazon.png';
import about from '../assets/images/aboutUs.jpg';
import sofa from '../assets/images/sofa.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import productOne from '../assets/images/productOne.jpg';
import productTwo from '../assets/images/productTwo.jpg';
import profileOne from '../assets/images/profileOne.jpg';
import profileTwo from '../assets/images/profileTwo.jpg';
import profileThree from '../assets/images/profileThree.jpg';
import profileFour from '../assets/images/profileFour.jpg';
import video from '../assets/videos/video.mp4';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Home(){
    return  <main>
                <section id="landing">
                    <img src={Landing} alt="Landing Imag"></img>
                    <div className="cards">
                        <div className="card">
                            <h1>Make your place a <span>better living</span></h1>
                            <p>Urban crafty furniture with modern, simple and elegant designs for your home.</p>
                            <a href="home.html"><button>Buy Now</button></a>
                        </div>
                        <div className="icons">
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-twitter"></i>
                        </div>
                    </div>
                </section>
                <section id="sponsors">
                    <div className="every"> 
                       <div className="title">
                            <h1>Our sponsor</h1>
                       </div>
                       <div className="card">
                        <img src={uberEats} alt="UberEats"></img>
                        <img src={slack} alt='slack'></img>
                        <img src={microsoft} alt='microsoft'></img>
                        <img src={amazon} alt='amazon'></img>
                       </div>
                    </div>
                </section>
                <section id="about">
                    <div className="text">
                        <div className='title'>
                            <h1>About Us</h1>
                        </div>
                        <div className="about">
                            <p>Urban crafty furniture with modern, simple and elegant designs for your home
                            We are a group of passionate developers who have come together to create an application that can
                            make your place a better place <span>read more...</span></p>
                        </div>
                    </div>
                    <div className="images">
                        <img src={sofa} alt="aboutImage" />
                        <img src={about} alt="aboutImage" />
                    </div>
                </section>
                <section id="choose">
                    <div className="title">
                        <h1>Why choose us?</h1>
                        <p>It is very important for the customer to pay attention to the advising process. Do it, or what pains exercise the most.</p>
                    </div>
                    <div>
                        <Swiper className="cards" pagination={{clickable: true,}} modules={[ Pagination]} spaceBetween={50} loop={true} slidesPerView={3}>
                            <SwiperSlide className="card">
                                <i className="fa-solid fa-star"></i>
                                <h2>Quality</h2>
                                <p>It is very important for the customer to pay attention to the advising process. She is never bound to be burdened by the laborious undertaking of a wise man...</p>
                                <a href="#"><button>More</button></a>
                            </SwiperSlide>
                            <SwiperSlide className="card">
                                <i className="fa-solid fa-star"></i>
                                <h2>Quality</h2>
                                <p>It is very important for the customer to pay attention to the advising process. She is never bound to be burdened by the laborious undertaking of a wise man...</p>
                                <a href="#"><button>More</button></a>
                            </SwiperSlide>
                            <SwiperSlide className="card">
                                <i className="fa-solid fa-star"></i>
                                <h2>Quality</h2>
                                <p>It is very important for the customer to pay attention to the advising process. She is never bound to be burdened by the laborious undertaking of a wise man...</p>
                                <a href="#"><button>More</button></a>
                            </SwiperSlide>
                            <SwiperSlide className="card">
                                <i className="fa-solid fa-star"></i>
                                <h2>Quality</h2>
                                <p>It is very important for the customer to pay attention to the advising process. She is never bound to be burdened by the laborious undertaking of a wise man...</p>
                                <a href="#"><button>More</button></a>
                            </SwiperSlide>
                            <SwiperSlide className="card">
                                <i className="fa-solid fa-star"></i>
                                <h2>Quality</h2>
                                <p>It is very important for the customer to pay attention to the advising process. She is never bound to be burdened by the laborious undertaking of a wise man...</p>
                                <a href="#"><button>More</button></a>
                            </SwiperSlide>
                            <SwiperSlide className="card">
                                <i className="fa-solid fa-star"></i>
                                <h2>Quality</h2>
                                <p>It is very important for the customer to pay attention to the advising process. She is never bound to be burdened by the laborious undertaking of a wise man...</p>
                                <a href="#"><button>More</button></a>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </section>
                <section id="products">
                    <div className="title">
                        <h1>Our Products</h1>
                        <p>It is very important for the customer to pay attention to the advising process. Do it, or what pains exercise the most.</p>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <div className="image">
                                <img src={productOne} alt="productImage" />
                            </div>
                            <div className="text">
                                <div className="heading">
                                    <h3>Office table</h3>
                                    <div className="stars">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                </div>
                                <div className="subHead">
                                    <h4>Price</h4>
                                    <h4>$100.00</h4>
                                </div>
                                <p className="description">It is very important for the customer to pay attention to the advising process. Do it, or what pains exercise the most.</p>
                                <a href="#"><button>Buy Now</button></a>
                            </div>
                        </div>
                        <div className="card">
                            <div className="image">
                                <img src={productTwo} alt="productImage" />
                            </div>
                            <div className="text">
                                <div className="heading">
                                    <h3>Sofa chair</h3>
                                    <div className="stars">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                </div>
                                <div className="subHead">
                                    <h4>Price</h4>
                                    <h4>$250.00</h4>
                                </div>
                                <p className="description">It is very important for the customer to pay attention to the advising process. Do it, or what pains exercise the most.</p>
                                <a href="#"><button>Buy Now</button></a>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="clients">
                    <div className="title">
                        <h1>Our happy Clients</h1>
                        <p>It is very important for the customer to pay attention to the advising process. Do it, or what pains exercise the most.</p>
                    </div>
                    <div>
                        <Swiper  className="cards" navigation={true} pagination={{clickable: true,}} autoplay={{delay: 3000, disableOnInteraction: false,}} modules={[ Pagination, Navigation, Autoplay]} spaceBetween={50} loop={true} slidesPerView={3}>
                            <SwiperSlide className='card'>
                                <p>Over the past several years, I have turned to Dr. Lynch to make sense of complicated....</p>
                                <div className="profile">
                                    <div className="img">
                                        <img src={profileOne} alt="imageOne" />
                                    </div>
                                    <div className="header">
                                        <h3>Jan Bruce</h3>
                                        <h4>CEO MeQuilibrium</h4>
                                        <div className="stars">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star-half-stroke"></i>
                                            <i className="fa-regular fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='card'>
                                <p>Over the past several years, I have turned to Dr. Lynch to make sense of complicated....</p>
                                <div className="profile">
                                    <div className="img">
                                        <img src={profileTwo} alt="imageTwo" />
                                    </div>
                                    <div className="header">
                                        <h3>Jan Bruce</h3>
                                        <h4>CEO MeQuilibrium</h4>
                                        <div className="stars">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star-half-stroke"></i>
                                            <i className="fa-regular fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='card'>
                                <p>Over the past several years, I have turned to Dr. Lynch to make sense of complicated....</p>
                                <div className="profile">
                                    <div className="img">
                                        <img src={profileThree} alt="imageThree" />
                                    </div>
                                    <div className="header">
                                        <h3>Jan Bruce</h3>
                                        <h4>CEO MeQuilibrium</h4>
                                        <div className="stars">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star-half-stroke"></i>
                                            <i className="fa-regular fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='card'>
                                <p>Over the past several years, I have turned to Dr. Lynch to make sense of complicated....</p>
                                <div className="profile">
                                    <div className="img">
                                        <img src={profileFour} alt="imageFour" />
                                    </div>
                                    <div className="header">
                                        <h3>Jan Bruce</h3>
                                        <h4>CEO MeQuilibrium</h4>
                                        <div className="stars">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star-half-stroke"></i>
                                            <i className="fa-regular fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </section>
                <section id="join">
                    <div className="title">
                        <h1>Join with us</h1>
                        <p>It is very important for the customer to pay attention to the advising process. Do it, or what pains exercise the most.</p>
                    </div>
                    <div  className="content">
                        <div className="video">
                            <video src={video} controls></video>
                        </div>
                        <div className="form">
                            <form action="#" method="post">
                                <input type="text" placeholder='Email' />
                                <input type="password" placeholder='Email' />
                                <button type="submit">Sign Up</button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
}
export default Home;