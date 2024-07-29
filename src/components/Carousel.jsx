import { Tag } from "./Tag";
import left from "../assets/left.svg";
import right from "../assets/rightt.svg";
import { useState } from "react";

const Photo =
  "https://s3-alpha-sig.figma.com/img/eb4f/aad2/4394e91108e011b0d07581596959713b?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EQinF0vtzIkYqdBa13BjaKtGf38pdGxqV2QVZP5M8DkZvYXCC0nsfzxboNgULfcp6P45oLfHtrlbN4zq6~b-FiyjPEyn9u1roQdeaGTEcfJ8Jd1cHVVIYCTdubsa1wmRSjKwMkLOSTviCUhf48XroDoBIeIg3w5aVh2YRSjj0H-Mtg2vZ48te6TYTpF1NElcfFTwhIFvjNw6b9y2-kIcTQFGQem~T2zQ3DZLeheSMPMLPyXO0cKeZfnPKs5BA-Vyg2utjBJ8CATvl-fY6A78p6hP-YUF2lVS0ZkdjD4NA6UtVbJa~ZX~IyfHP5V1dh0azYLz7WG21wD3tZXtdAPKTA__";

const grindPhoto =
  "https://www.investopedia.com/thmb/mKTGEd8koYvMzZ9wHD32sIRlaPg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1459193203-8f82c781a8854072b2a6253a42803372.jpg";

const grindPhotoLast =
  "https://thecryptobasic.com/wp-content/uploads/2024/07/Elon-Musk-and-Bitcoin.png";

export const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [carouselData, setCarouselData] = useState([
    {
      image: Photo,
      title: "Grid system for better Design User Interface",
      tag: "Technology",
      date: "August 20, 2022",
    },
    {
      image: grindPhoto,
      title:
        "Largest non-financial companies listed on the Nasdaq stock exchange.",
      tag: "Stock",
      date: "August 7, 2023",
    },
    {
      image: grindPhotoLast,
      title:
        "Elon Musk Adds Laser Eyes to His X Profile, Crypto Leaders Follow",
      tag: "Blockchain",
      date: "May 20, 2024",
    },
  ]);
  const leftClick = () => {
    if (current == 0) {
      setCurrent(carouselData.length - 1);
      return;
    }
    setCurrent(current - 1);
  };

  const rightClick = () => {
    if (current >= carouselData.length - 1) {
      setCurrent(0);
      return;
    }

    setCurrent(current + 1);
  };

  return (
    <div>
      <div className="w-[1216px] h-[651px] shrink-0 relative flex justify-end flex-col p-[10px] ">
        <img
          className="w-[1216px] h-[600px] rounded-md absolute -z-10 bottom-0 left-0"
          src={carouselData[current].image}
          alt="backgroundPhoto"
        />
        <div className="flex w-[598px] flex-col p-10 items-start gap-6 rounded-xl bg-white shadow-md">
          <div className="flex flex-col items-start gap-4 self-stretch">
            <Tag text={carouselData[current].tag} />
            <h3 className="text-4xl font-semibold text-[#181A2A] leading-10">
              {carouselData[current].title}
            </h3>
          </div>
          <p className="text-base font-normal text-[#97989F]">
            {carouselData[current].date}
          </p>
        </div>
      </div>
      <div className="flex gap-[9px] justify-end mt-[10px]">
        <div className="w-[40px] h-[40px] rounded-md border-[1px] flex justify-center items-center">
          <button onClick={leftClick}>
            <img src={left} />
          </button>
        </div>
        <div className="w-[40px] h-[40px] rounded-md border-[1px] flex justify-center items-center">
          <button onClick={rightClick}>
            <img src={right} />
          </button>
        </div>
      </div>
    </div>
  );
};
