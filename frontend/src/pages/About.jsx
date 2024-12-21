import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-rol md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
            dolorem error, perspiciatis velit rerum distinctio nesciunt
            aspernatur quisquam quos, ducimus unde iusto commodi sit ea, impedit
            porro totam atque alias.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui quidem
            sapiente a enim sunt repudiandae, illum quae commodi ducimus beatae
            accusamus! Corporis delectus consectetur, consequuntur dolore quis
            similique ratione repellat.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
            repellat dicta adipisci sed earum minus unde soluta vel temporibus!
            Repellat quibusdam nostrum nesciunt quia molestias praesentium
            veritatis dolores, accusantium debitis!
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
            sequi animi vitae voluptatem sit. Earum, placeat optio cupiditate
            dolor voluptatibus excepturi deserunt amet, dolore atque iste
            delectus impedit repellendus cum.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            voluptatum eveniet quaerat id voluptatem suscipit illum perferendis
            doloremque, obcaecati commodi voluptates cumque eum facere laborum
            quia aut beatae repellendus maxime?
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            voluptates laborum perferendis, quibusdam facilis et nihil harum,
            rem distinctio, ab repellat! Corporis distinctio commodi accusamus
            provident aliquam? Nisi, impedit excepturi?
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
