import { sayHiSectionData } from "@/data/sayHiSectionData";
import Typical from "react-typical";

const SayHi = () => {
  return (
    <div className="min-h-screen container mx-auto flex items-center justify-center p-6 md:p-0">
      <Typical
        className="text-5xl md:text-9xl font-bold"
        steps={sayHiSectionData}
        loop={Infinity}
        wrapper="h1"
      />
    </div>
  );
};

export default SayHi;
