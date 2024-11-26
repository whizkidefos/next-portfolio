"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WordSliderButtons = ({ containerStyles, buttonStyles, iconsStyles }) => {
    const swiper = useSwiper();

    return (
        <aside className={containerStyles}>
            <button
                className={buttonStyles}
                onClick={() => swiper.slidePrev()}
            >
                <PiCaretLeftBold className={iconsStyles} />
            </button>
            <button
                className={buttonStyles}
                onClick={() => swiper.slideNext()}
            >
                <PiCaretRightBold className={iconsStyles} />
            </button>
        </aside>
    )
}

export default WordSliderButtons;