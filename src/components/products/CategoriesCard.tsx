"use client";
import { dataBase } from "app/db/data";
import { useState } from "react";

const CategoriesCard = () => {
  const slides = dataBase.categories;

  const [currentSlideIndex, setCurrentSlideIndex] = useState(1);

  const previous = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex > 1 ? prevIndex - 1 : slides.length
    );
  };

  const next = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex < slides.length ? prevIndex + 1 : 1
    );
  };

  return (
    <div className="relative w-full overflow-hidden">
      <button
        type="button"
        className="absolute left-5 top-1/2 z-20 flex rounded-full -translate-y-1/2 items-center justify-center bg-white/40 p-2 text-neutral-600 transition hover:bg-white/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black active:outline-offset-0 dark:bg-neutral-950/40 dark:text-neutral-300 dark:hover:bg-neutral-950/60 dark:focus-visible:outline-white"
        aria-label="previous slide"
        onClick={previous}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          strokeWidth={3}
          className="size-5 md:size-6 pr-0.5"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      <button
        type="button"
        className="absolute right-5 top-1/2 z-20 flex rounded-full -translate-y-1/2 items-center justify-center bg-white/40 p-2 text-neutral-600 transition hover:bg-white/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black active:outline-offset-0 dark:bg-neutral-950/40 dark:text-neutral-300 dark:hover:bg-neutral-950/60 dark:focus-visible:outline-white"
        aria-label="next slide"
        onClick={next}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          strokeWidth={3}
          className="size-5 md:size-6 pl-0.5"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      <div className="relative h-[550px] w-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlideIndex === index + 1 ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              className="absolute w-full h-full inset-0 object-cover text-neutral-600 dark:text-neutral-300"
              src={slide.image}
              alt={slide.name}
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-25 text-white p-4">
              <h3 className="text-2xl font-semibold">{slide.name}</h3>
              <p className="text-xl">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div
        className="absolute rounded-md bottom-3 md:bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-4 md:gap-3 bg-white/75 px-1.5 py-1 md:px-2 dark:bg-neutral-950/75"
        role="group"
        aria-label="slides"
      >
        {slides.map((_, index) => (
          <button
            key={index}
            className={`size-2 cursor-pointer rounded-full transition ${
              currentSlideIndex === index + 1
                ? "bg-neutral-600 dark:bg-neutral-300"
                : "bg-neutral-600/50 dark:bg-neutral-300/50"
            }`}
            aria-label={`slide ${index + 1}`}
            onClick={() => setCurrentSlideIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
};
export default CategoriesCard;
