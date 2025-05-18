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
            Hello! I’m a full-stack engineer with a strong foundation in web and
            mobile development, combined with hands-on experience in AI and
            Machine Learning. With a deep understanding of both frontend and
            backend systems, I specialize in building scalable, intuitive
            applications that solve real-world problems.
          </p>
          <p className="tracking-widest leading-7 my-8">
            Over the years, I’ve developed and deployed production-ready
            applications using technologies like React Native, Next.js, Django,
            and PostgreSQL. My recent focus has been on integrating AI into
            practical solutions—working on predictive models, natural language
            processing pipelines, and computer vision projects that deliver
            measurable impact.
          </p>
          <p className="tracking-widest leading-7">
            I thrive in fast-paced environments where experimentation,
            ownership, and continuous learning are valued. I’m especially drawn
            to early-stage startups where I can contribute not just as a
            developer, but as a problem-solver and product-minded thinker.
          </p>
          <p className="tracking-widest leading-7">
            If you&apos;re building something ambitious and need a full-stack
            engineer who can ship fast, learn quickly, and own outcomes—let’s
            connect. I’m actively looking for remote opportunities where I can
            bring value from day one.
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
