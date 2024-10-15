import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './styleHomePage.scss';
import { memo } from 'react';
import featProducts, { renderFeaturedProducts } from './allProducts';
import slider1 from './img/slider1.png';
import slider2 from './img/slider2.png';
import slider3 from './img/slider3.png';
import slider4 from './img/slider4.png';
import slider5 from './img/slider5.png';

const HomePage = () => {
    const responsive = { 
        superLargeDesktop: { 
            breakpoint: { max: 4000, min: 3000 }, 
            items: 5 
        }, 
        desktop: { 
            breakpoint: { max: 3000, min: 1024 }, 
            items: 4
        }, 
        tablet: { 
            breakpoint: { max: 1024, min: 464 }, 
            items: 2 
        }, 
        mobile: { 
            breakpoint: { max: 464, min: 0 }, 
            items: 1 
        } 
    }; 

    const sliderItem = [
        { bgImg: slider1 },
        { bgImg: slider2 },
        { bgImg: slider3 },
        { bgImg: slider4 },
        { bgImg: slider5 },
    ];

    return (
        <>
            <Carousel responsive={responsive} className='slider'>
                {
                    sliderItem.map((item, key) => (
                        <div 
                            className='slider_item'
                            style={{ backgroundImage: `url(${item.bgImg})` }} 
                            key={key}
                        ></div>
                    ))
                }
            </Carousel>

            <div className="container">
                <div className="featured">
                    <div className="section_title">
                        <h2>Sản phẩm nổi bật</h2>
                        { renderFeaturedProducts(featProducts) }
                    </div>
                </div>
            </div>
        </>
    );
};

export default memo(HomePage);
