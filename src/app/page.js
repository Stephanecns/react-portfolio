import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import Image from "next/image";
import profile from "../../public/DALLart.png";
import code from "../../public/code.png";
import consulting from "../../public/consulting.png";
import design from "../../public/design.png";
import projects from "../../src/app/projectsData";
export default function Home() {
  return (
    <main className="bg-white px-10 md:px-20 lg:px-20">
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl">Stéphane</h1>
          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
            </li>
            <li>
              <a
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 "
                href="/CV.pdf"
              >
                CV
              </a>
            </li>
          </ul>
        </nav>
        <div className="text-center p-10">
          <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
            Stéphane CINEAS
          </h2>
          <h3 className="text-2xl py-2 md:text-3xl"> Développeur Front-End</h3>
          <p className="text-sm py-5 leading-8 text-gray-800 md:text-xl">
            Passionné par la fusion du design et de la programmation, je
            transforme les visions en réalités web percutantes. Avec une
            expertise en HTML, CSS, JavaScript, React et bien plus encore, je
            m'efforce d'offrir une interface harmonieuse et performante,
            optimisée pour tous les navigateurs et dispositifs. Si vous
            recherchez un professionnel dédié, désireux de dynamiser et
            d'optimiser votre présence en ligne, discutons-en. Ensemble, donnons
            vie à vos idées.
          </p>
        </div>
        <div className="text-5xl flex flex-col items-center py-3 text-gray-600">
          <div className="flex justify-center gap-16 mb-10">
            <a
              href="https://github.com/Stephanecns"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub className="cursor-pointer" />
            </a>
            <a
              href="https://www.linkedin.com/in/stéphane-c"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin className="cursor-pointer" />
            </a>
            <a
              href="https://twitter.com/votreNomUtilisateur"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillTwitterCircle className="cursor-pointer" />
            </a>
          </div>

          <a
            className=" text-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md"
            href="mailto:stephanecineass@gmail.com"
          >
            Contact
          </a>
        </div>

        <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
          <Image src={profile} alt="Photo de profil" layout="responsive" />
        </div>
      </section>
      <section>
        <div className="p-10">
          <h3 className="text-3xl py-1 text-center">Services proposés</h3>
          <p className="text-sm py-2 leading-8 text-gray-800 text-center">
            À l'ère digitale actuelle, l'apparence et la fonctionnalité d'un
            site web sont primordiales. En tant que développeur front-end, je
            crois fermement que chaque détail compte. Mon approche allie
            esthétique et performance, cherchant toujours à offrir une
            expérience utilisateur exceptionnelle. Du design initial à la
            réalisation, j'ai pour mission de transformer chaque vision en une
            réalité web percutante.
          </p>
        </div>
        <div className="lg:flex gap-10">
          <div className="flex flex-col justify-center items-center text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
            <Image
              src={design}
              alt="Photo design"
              width={100}
              height={100}
              className="align-middle"
            />
            <h3 className="text-lg font-medium pt-8 pb-2">
              Conception et développement d'interfaces
            </h3>
            <p className="py-2">
              Création d'applications web responsive, offrant une expérience
              utilisateur optimale sur tous types d'appareils.
            </p>
            <h4 className="py-4 text-teal-600">Quelques outils utilisés</h4>
            <p className="text-gray-800 py-1">JavaScript</p>
            <p className="text-gray-800 py-1">React/Redux</p>
            <p className="text-gray-800 py-1">SASS</p>
          </div>

          <div className="flex flex-col justify-center items-center text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
            <Image
              src={code}
              alt="Photo d'un logo dièse"
              width={100}
              height={100}
            />
            <h3 className="text-lg font-medium pt-8 pb-2">
              Gestion et amélioration de projets web
            </h3>
            <p className="py-2">
              Conception d'interfaces interactives, se connectant aisément avec
              le back-end, pour des applications web dynamiques et des systèmes
              d'identification fiables.
            </p>
            <h4 className="py-4 text-teal-600">Quelques outils utilisés</h4>
            <p className="text-gray-800 py-1">Git/GitHub </p>
            <p className="text-gray-800 py-1">JIRA/Trello</p>
            <p className="text-gray-800 py-1">Chrome DevTools </p>
          </div>

          <div className="flex flex-col justify-center items-center text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
            <Image
              src={consulting}
              alt="Photo d'un pouce en l'air"
              width={100}
              height={100}
            />
            <h3 className="text-lg font-medium pt-8 pb-2">
              Dynamisation et optimisation
            </h3>
            <p className="py-2">
              Maintenance des sites existants, assurant leur performance et leur
              visibilité dans les moteurs de recherche
            </p>
            <h4 className="py-4 text-teal-600">Quelques outils utilisés</h4>
            <p className="text-gray-800 py-1">Lighthouse</p>
            <p className="text-gray-800 py-1">Babel</p>
            <p className="text-gray-800 py-1">Webpack </p>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h3 className="text-3xl py-1 text-center">Portfolio</h3>
          <p className="text-sm py-2 leading-8 text-gray-800 text-center">
            Derrière chaque projet se cache une histoire d'innovation et de défi
            relevé. Mon portfolio est le témoignage de ce voyage en tant que
            développeur. Chaque réalisation est le fruit d'une collaboration
            passionnée et de solutions techniques audacieuses. Ici, vous
            découvrirez non seulement mon travail, mais aussi ma quête
            d'excellence. Plongez dans ces récits et laissez-vous inspirer.
          </p>
        </div>
        <div className="flex flex-wrap gap-10 py-10 justify-center items-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex gap-10 w-full lg:w-1/2 justify-center items-center"
            >
              <div className="flex-1 shadow-lg rounded-lg overflow-hidden">
                <Image
                  src={project.img}
                  alt={project.alt} // Utilisez l'attribut alt de chaque projet
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                />
              </div>
              <div className="flex-1 shadow-lg p-10 rounded-lg dark:bg-white">
                <h3 className="text-lg font-medium pb-2">{project.title}</h3>
                <p>{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
