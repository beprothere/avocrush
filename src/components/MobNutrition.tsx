"use client";

import Image from "next/image";
import avacado from "@/../public/img/avc.svg";
import vec1 from "@/../public/img/Vector1.svg";
import vec2 from "@/../public/img/Vector2.svg";
import vec3 from "@/../public/img/Vector3.svg";
import vec4 from "@/../public/img/Vector4.svg";
import vec5 from "@/../public/img/Vector5.svg";
import vec6 from "@/../public/img/Vector6.svg";
import { LuDot } from "react-icons/lu";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { useState, useRef } from "react";

const MobNutrition = () => {
  const NEGATIVE_LIMIT = -290;
  const POSITIVE_LIMIT = 220;

  const [translate, setTranslate] = useState(0);
  const lastTranslate = useRef(0);

  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const isDragging = useRef(false);

  const nextSlide = () => {
    let newTranslate = Math.max(lastTranslate.current - 290, NEGATIVE_LIMIT);
    setTranslate(newTranslate);
    lastTranslate.current = newTranslate;
  };

  const prevSlide = () => {
    let newTranslate = Math.min(lastTranslate.current + 220, POSITIVE_LIMIT);
    setTranslate(newTranslate);
    lastTranslate.current = newTranslate;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    isDragging.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;

    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;

    const diffX = currentX - touchStartX.current;
    const diffY = currentY - touchStartY.current;

    if (!isDragging.current && Math.abs(diffX) > Math.abs(diffY)) {
      isDragging.current = true;
    }

    if (isDragging.current) {
      e.preventDefault();
      let newTranslate = lastTranslate.current + diffX;
      newTranslate = Math.min(
        Math.max(newTranslate, NEGATIVE_LIMIT),
        POSITIVE_LIMIT
      );
      setTranslate(newTranslate);
    }
  };

  const handleTouchEnd = () => {
    if (isDragging.current) {
      lastTranslate.current = translate;
    }
    touchStartX.current = null;
    touchStartY.current = null;
    isDragging.current = false;
  };

  return (
    <div className="mob-Nutrition-Values no-desktop">
      <div className="mob-Nutrition-Values-inner-Box">
        <div className="mob-nutriton-heading-subheading-paragraph-box">
          <span className="mob-nutriton-heading-subheading">
            <h4>Nutritional Values</h4>
            <p>per 100g</p>
          </span>
          <p className="mob-nutriton-heading-paragraph">
            A vibrant, natural avocado spread made from perfectly ripe avocados
            — pure taste, nothing added.
          </p>
        </div>

        <div className="slide-graph-btns">
          <button onClick={prevSlide}>
            <FaArrowLeftLong />
          </button>
          <p>Swipe</p>
          <button onClick={nextSlide}>
            <FaArrowRightLong />
          </button>
        </div>

        <div
          className="mob-graph-section-nutrition-box"
          style={{
            transform: `translateX(${translate}px)`,
            transition: "transform 0.1s ease",
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <Image
            src={avacado}
            alt="avocado-outline-nutrants-pic"
            className="mob-avocado-outline-nutrants-pic"
          />

          <Image
            src={vec1}
            alt="vector-1"
            className="mob-vac-pic mob-vac-pic1"
          />
          <Image
            src={vec2}
            alt="vector-2"
            className="mob-vac-pic mob-vac-pic2"
          />
          <Image
            src={vec3}
            alt="vector-3"
            className="mob-vac-pic mob-vac-pic3"
          />
          <Image
            src={vec4}
            alt="vector-4"
            className="mob-vac-pic mob-vac-pic4"
          />
          <Image
            src={vec5}
            alt="vector-5"
            className="mob-vac-pic mob-vac-pic5"
          />
          <Image
            src={vec6}
            alt="vector-6"
            className="mob-vac-pic mob-vac-pic6"
          />

          <p className="mob-vector-mark mob-vector-mark1">01</p>
          <p className="mob-vector-mark mob-vector-mark2">02</p>
          <p className="mob-vector-mark mob-vector-mark3">03</p>
          <p className="mob-vector-mark mob-vector-mark4">04</p>
          <p className="mob-vector-mark mob-vector-mark5">05</p>
          <p className="mob-vector-mark mob-vector-mark6">06</p>

          <div className="mob-graph-data-value mob-graph-data-value1">
            <span>
              <strong>Energy:</strong>
              <p>172kcal</p>
            </span>
          </div>

          <div className="mob-graph-data-value mob-graph-data-value2">
            <span>
              <strong>Fat:</strong>
              <p>16 g</p>
            </span>
            <span>
              <LuDot />
              <p>Saturated fat: 2 g</p>
            </span>
          </div>

          <div className="mob-graph-data-value mob-graph-data-value3">
            <span>
              <strong>Carbohydrates:</strong>
              <p>8 g</p>
            </span>
            <span>
              <LuDot />
              <p>Sugars: 0 g</p>
            </span>
          </div>

          <div className="mob-graph-data-value mob-graph-data-value4">
            <span>
              <strong>Protein:</strong>
              <p>2 g</p>
            </span>
          </div>

          <div className="mob-graph-data-value mob-graph-data-value5">
            <span>
              <strong>Fiber:</strong>
              <p>6 g</p>
            </span>
          </div>

          <div className="mob-graph-data-value mob-graph-data-value6">
            <span>
              <strong>Vitamins & Minerals:</strong>
            </span>
            <div className="extra-list">
              <span>
                <LuDot />
                <p>Vitamin K</p>
              </span>
              <span>
                <LuDot />
                <p>Folate</p>
              </span>
              <span>
                <LuDot />
                <p>Vitamin E</p>
              </span>
              <span>
                <LuDot />
                <p>Potassium</p>
              </span>
              <span>
                <LuDot />
                <p>Vitamin C</p>
              </span>
            </div>
          </div>
        </div>

        <div className="hidden mob-graph-draws-graphics"></div>
      </div>
    </div>
  );
};

export default MobNutrition;
