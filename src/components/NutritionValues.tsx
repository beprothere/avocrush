import Image from "next/image";
import avacado from "@/../public/img/avc.svg";
import vec1 from "@/../public/img/Vector1.svg";
import vec2 from "@/../public/img/Vector2.svg";
import vec3 from "@/../public/img/Vector3.svg";
import vec4 from "@/../public/img/Vector4.svg";
import vec5 from "@/../public/img/Vector5.svg";
import vec6 from "@/../public/img/Vector6.svg";
import { LuDot } from "react-icons/lu";

const NutritionValues = () => {
  return (
    <div className="Nutrition-Values">
      <div className="Nutrition-Values-inner-Box">
        <div className="nutriton-heading-subheading-paragraph-box">
          <span className="nutriton-heading-subheading">
            <h4>Nutritional Values</h4>
            <p>per 100g</p>
          </span>
          <p className="nutriton-heading-paragraph">
            A vibrant, natural avocado spread made from perfectly ripe avocados — pure taste, nothing added.
          </p>
        </div>

        <div className="graph-section-nutrition-box">
          <Image src={avacado} alt="avocado-outline-nutrants-pic" className="avocado-outline-nutrants-pic" />

          <div className="graph-data-value graph-data-value1">
            <span>
              <strong>Energy: </strong>
              <p>172kcal</p>
            </span>
          </div>
          <div className="graph-data-value graph-data-value2">
            <span>
              <strong>Fat:</strong>
              <p>16 g</p>
            </span>
            <span>
              <LuDot />
              <p>Saturated fat: 2 g</p>
            </span>
          </div>
          <div className="graph-data-value graph-data-value3">
            <span>
              <strong>Carbohydrates:</strong>
              <p>8 g</p>
            </span>
            <span>
              <LuDot />
              <p>Sugars: 0 g</p>
            </span>
          </div>
          <div className="graph-data-value graph-data-value4">
            <span>
              <strong>Protein:</strong>
              <p>2 g</p>
            </span>
          </div>
          <div className="graph-data-value graph-data-value5">
            <span>
              <strong>Fiber:</strong>
              <p>6 g</p>
            </span>
          </div>
          <div className="graph-data-value graph-data-value6">
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
              {/* <p className="extra-list-p">
                {"("}boosted from lime{")"}
              </p> */}
            </div>
          </div>

          <Image src={vec1} alt="vactor-1" className="vac-pic vac-pic1" />
          <Image src={vec2} alt="vactor-2" className="vac-pic vac-pic2" />
          <Image src={vec3} alt="vactor-3" className="vac-pic vac-pic3" />
          <Image src={vec4} alt="vactor-4" className="vac-pic vac-pic4" />
          <Image src={vec5} alt="vactor-5" className="vac-pic vac-pic5" />
          <Image src={vec6} alt="vactor-6" className="vac-pic vac-pic6" />

          <p className="vector-mark vector-mark1">01</p>
          <p className="vector-mark vector-mark2">02</p>
          <p className="vector-mark vector-mark3">03</p>
          <p className="vector-mark vector-mark4">04</p>
          <p className="vector-mark vector-mark5">05</p>
          <p className="vector-mark vector-mark6">06</p>
        </div>
      </div>
    </div>
  );
};

export default NutritionValues;
