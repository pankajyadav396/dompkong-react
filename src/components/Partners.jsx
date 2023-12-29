import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import sliderimg1 from "../assets/images/NFTeveningLogo.png"
import sliderimg2 from "../assets/images/nft-calenderr.png"
import sliderimg3 from "../assets/images/furnirtur-mart.png"
import sliderimg4 from "../assets/images/fannei-mae.png"

export const Partners = () => {
    const SliderFour = {
        dots: false,
        infinite: true,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 0,
        speed: 3000,
        slidesToShow: 4,
        slidesToScroll: 1,
        cssEase: "linear",

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.4,
                    slidesToScroll: 1,
                    dots: false,
                },
            },
        ],
    };
    return (
        <div className='bg-clr pt-4 pb-md-5 pb-0'>
            <div className="container-xxl mb-sm-4">
                <p className="text-white fs-xxl m-0  fw-normal text-center ff-azo pt-4 pb-5">PARTNERS</p>
                <Slider {...SliderFour}>
                    <div className="d-flex justify-content-center" >
                        <img src={sliderimg1} alt="#" className="w-100 mx-h-153"/>
                    </div>
                    <div className="d-flex justify-content-center">
                        <img src={sliderimg2} alt="#" className="w-100 mx-h-153" />
                    </div>
                    <div className="d-flex justify-content-center" >
                        <img src={sliderimg3} alt="#" className="w-100 mx-h-153" />
                    </div>
                    <div className="d-flex justify-content-center">
                        <img src={sliderimg4} alt="#" className="w-100 mx-h-153" />
                    </div>
                    <div className="d-flex justify-content-center" >
                        <img src={sliderimg1} alt="#" className="w-100 mx-h-153" />
                    </div>
                    <div className="d-flex justify-content-center">
                        <img src={sliderimg2} alt="#" className="w-100 mx-h-153" />
                    </div>
                    <div className="d-flex justify-content-center" >
                        <img src={sliderimg3} alt="#" className="w-100 mx-h-153" />
                    </div>
                    <div className="d-flex justify-content-center">
                        <img src={sliderimg4} alt="#" className="w-100 mx-h-153" />
                    </div>
                </Slider>
            </div>
        </div>
    )
}
export default Partners