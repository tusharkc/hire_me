import Image from "next/image";
import tusharKcImage from "public/assets/homePage/tushar_kc_img.jpeg";
import SectionHeading from "./SectionHeading";

const HomeAboutMe = () => {
  return (
    <div className="container mx-auto">
      <div className="p-6 md:p-0">
        <SectionHeading>So let me tell you a little about me.</SectionHeading>
      </div>

      <div className="grid grid-cols-12 items-start min-h-screen">
        <div className="col-span-12 md:col-span-6 justify-end p-6 md:p-0">
          <p className="tracking-widest leading-7">
            Hello! I&lsquo;m a 21-year-old full-stack developer with expertise
            in React Native and a recent interest in Machine Learning and AI. My
            journey started with a passion for coding and problem-solving, and
            I&lsquo;ve since developed a wide array of skills in both front-end
            and back-end development.
          </p>
          <p className="tracking-widest leading-7 my-8">
            I&lsquo;ve honed my ability to create intuitive applications using
            React Native and recently expanded my skillset to include Machine
            Learning and AI. My recent projects in this domain involve
            developing algorithms for predictive modeling, natural language
            processing, and computer vision.
          </p>
          <p className="tracking-widest leading-7">
            I&lsquo;m always eager to learn and improve, and I&lsquo;m excited
            to bring my skills to real-world challenges. I&lsquo;m particularly
            interested in roles that allow me to apply my skills to create
            innovative solutions.
          </p>
          <p className="tracking-widest leading-7">
            Ready to connect? Let&lsquo;s chat about how I can contribute to
            your team. Feel free to reach out to me via email or LinkedIn.
          </p>
        </div>
        <div className="col-span-12 md:col-span-6 order-1">
          <Image
            className="max-w-[100vw] md:max-w-xl object-cover rounded-xl float-right p-6 md:p-0"
            src={tusharKcImage}
            alt="tusharKcImg"
            width={1500}
            height={1800}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeAboutMe;
