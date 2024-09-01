import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandCss3 } from "react-icons/tb";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { SiAppwrite } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { RiJavaLine } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { FaNode } from "react-icons/fa";

const Skills = () => {
    return (
      <div id="techstack" className="h-fit w-full">
        <section className="bg-zinc-900 py-5  flex flex-col justify-center items-center w-full text-gray-100 h-fit">
          <div className="container p-4 space-y-2 text-center">
            <h2 className="text-5xl font-bold">Tech Stack</h2>
            <p className="text-gray-400">To make me a superhero</p>
          </div>
          <div className="container mx-auto grid justify-center gap-7 sm:grid-cols-4">
            <TechStackItem
              icon={<AiOutlineHtml5 className="w-12 h-12 text-white" />}
              title="HTML"
              description="The standard markup language for creating web pages."
            />
            <TechStackItem
              icon={<TbBrandCss3 className="w-12 h-12 text-white" />}
              title="CSS"
              description="The language used for describing the presentation of web pages."
            />
            <TechStackItem
              icon={<TbBrandJavascript className="w-12 h-12 text-white" />}
              title="JavaScript"
              description="A programming language that enables interactive web pages."
            />
            <TechStackItem
              icon={<SiTypescript className="w-12 h-12 text-white" />}
              title="TypeScript"
              description="A superset of JavaScript that adds static typing."
            />
            <TechStackItem
              icon={<FaReact className="w-12 h-12 text-white" />}
              title="React.js"
              description="A JavaScript library for building user interfaces."
            />
            <TechStackItem
              icon={<SiTailwindcss className="w-12 h-12 text-white" />}
              title="Tailwind CSS"
              description="A utility-first CSS framework for building custom designs."
            />
            <TechStackItem
              icon={<SiNextdotjs className="w-12 h-12 text-white" />}
              title="Next.js"
              description="A React framework for building production-ready applications."
            />
            <TechStackItem
              icon={<IoLogoFirebase className="w-12 h-12  text-white" />}
              title="Firebase"
              description="A platform for building web and mobile applications without managing infrastructure."
              link="#"
            />
            <TechStackItem
              icon={<SiAppwrite className="w-12 h-12  text-white" />}
              title="Appwrite"
              description="An open-source alternative to Firebase."
              link="#"
            />
            <TechStackItem
              icon={<RiJavaLine className="w-12 h-12  text-white" />}
              title="Java"
              description="A programming language used for web development,and more."
            />
            <TechStackItem
              icon={<TbBrandCpp className="w-12 h-12 text-white" />}
              title=""
              description="A programming language used for data structure & Algorithm, and more."
            />
            <TechStackItem
              icon={<TbSql className="w-12 h-12 text-white" />}
              title=""
              description="Programing language for storing and processing information in RDBMS "
            />
            <TechStackItem
              icon={<FaNode className="w-12 h-12 text-white" />}
              title=""
              description="Node.js is an open-source and cross-platform JavaScript runtime environment."
            />
          </div>
        </section>
      </div>
    );
}

const TechStackItem = ({ icon, title, description, skillLevel }) => {
    return (
        <div className="flex flex-col items-center p-4">
            {icon}
            <h3 className="my-3 text-3xl font-semibold">{title}</h3>
            <p className="text-gray-400 mb-2 text-center">{description}</p>
            {/* <p className="text-gray-400 mb-2">Skill Level: {skillLevel}</p> */}
        </div>
    );
}

export default Skills