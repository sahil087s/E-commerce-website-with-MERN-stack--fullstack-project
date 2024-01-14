import React, { useRef, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import { Button } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const HomeSectionCarosel = ({data,sectionName}) => {
    const caroselRef = useRef(null);
    const [activeIndex,setActiveIndex] = useState(0);

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 }
    };

    const handleOnSlideChanged = (e) => {
        setActiveIndex(e.item);
    }

    const slidePrev=()=> {
        if (caroselRef.current) {
            caroselRef.current.slidePrev();
        }
    };

    const slideNext=()=> {
        if (caroselRef.current) {
            caroselRef.current.slideNext();
        }
    };


    const items = data.slice(0,10).map((item, index) => <HomeSectionCard key={index} product={item} />)
    return (
        <div className='border'>
            <h2 className='text-2xl font-extrabold text-grey-800 py-5'>{sectionName}</h2>
            <div className="relative p-5" >
                <AliceCarousel
                    ref={caroselRef}
                    items={items}
                    disableButtonsControls
                    responsive={responsive}
                    disableDotsControls
                    onSlideChanged={handleOnSlideChanged}
                />
                { activeIndex !== items.length-5 && <Button
                    onClick={slideNext}
                    variant='contained'
                    className="z-50 bg-white"
                    sx={{
                        position: 'absolute',
                        top: "8rem",
                        right: "0rem",
                        transform: "translateX(50%) rotate(90deg)",
                        bgcolor: "white"
                    }}
                    aria-label='next'>
                    <KeyboardArrowLeftIcon
                        sx={{ transform: "rotate(90deg)", color: "black" }} />
                </Button>}

              { activeIndex !==0 && <Button
                    onClick={slidePrev}
                    variant='contained'
                    className="z-50 bg-white"
                    sx={{
                        position: 'absolute',
                        top: "8rem",
                        left: "0rem",
                        transform: "translateX(-50%) rotate(-90deg)",
                        bgcolor: "white"
                    }}
                    aria-label='prev'
                    >
                    <KeyboardArrowLeftIcon
                        sx={{ transform: "rotate(90deg)", color: "black" }} />
                </Button>}

            </div>
        </div>
    );
};

export default HomeSectionCarosel