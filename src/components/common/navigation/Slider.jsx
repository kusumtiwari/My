import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";

export function PrevSlider({ slidePrev, prevstyle}) {
    return (
        <button
            onClick={slidePrev}
            className={`absolute border rounded shadow-lg bg-white h-9 w-8 ${prevstyle}`}
        >
            <MdOutlineKeyboardArrowLeft className="w-7 h-7 text-center" />
        </button>
    );
}

export function NextSlider({ slideNext, nextstyle}) {
    return (
        <button
            onClick={slideNext}
            className={`absolute border rounded shadow-lg bg-white h-9 w-8 text-center ${nextstyle}`}
        >
            <MdOutlineKeyboardArrowRight className="w-7 h-7 text-center" />
        </button>
    );
}
