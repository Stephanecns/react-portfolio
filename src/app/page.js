import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import Image from "next/image";
import profile from "../../public/DALLart.png";
import code from "../../public/code.png";
import consulting from "../../public/consulting.png" ;
import design from "../../public/design.png";

export default function Home() {
  return (
    <main className="bg-white px-10">
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
                href="#"
              >
                CV
              </a>
            </li>
          </ul>
        </nav>
        <div className="text-center p-10">
          <h2 className="text-5xl py-2 text-teal-600 font-medium">
            Stéphane CINEAS
          </h2>
          <h3 className="text-2xl py-2"> Développeur Front-End</h3>
          <p className="text-sm py-5 leading-8 text-gray-800">
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
              href="https://github.com/votreNomUtilisateur"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub className="cursor-pointer" />
            </a>
            <a
              href="https://linkedin.com/in/votreNomUtilisateur"
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

        <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
          <Image  src={profile} alt="Photo de profil" layout="fill" objectFit="cover" />
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
          <Image src={design} alt="Photo design" width={100} height={100} className="align-middle"/>
            <h3 className="text-lg font-medium pt-8 pb-2">Conception et développement d'interfaces</h3>
            <p className="py-2">Création d'applications web responsive, offrant une expérience utilisateur optimale sur tous types d'appareils.
            </p>
            <h4 className="py-4 text-teal-600">Quelques outils utilisés</h4>
            <p className="text-gray-800 py-1">JavaScript</p>
            <p className="text-gray-800 py-1">React/Redux</p>
            <p className="text-gray-800 py-1">SASS</p>
          </div>
        


          <div className="flex flex-col justify-center items-center text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
          <Image src={code} alt="Photo d'un logo dièse" width={100} height={100} />
            <h3 className="text-lg font-medium pt-8 pb-2">Gestion et amélioration de projets web</h3>
            <p className="py-2">Conception d'interfaces interactives, se connectant aisément avec le back-end, pour des applications web dynamiques et des systèmes d'identification fiables.</p>
            <h4 className="py-4 text-teal-600">Quelques outils utilisés</h4>
            <p className="text-gray-800 py-1">Git/GitHub </p>
            <p className="text-gray-800 py-1">JIRA/Trello</p>
            <p className="text-gray-800 py-1">Chrome DevTools </p>
          </div>


        <div className="flex flex-col justify-center items-center text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
          <Image src={consulting} alt="Photo d'un pouce en l'air" width={100} height={100}/>
            <h3 className="text-lg font-medium pt-8 pb-2">Dynamisation et optimisation</h3>
            <p className="py-2">Maintenance des sites existants, assurant leur performance et leur visibilité dans les moteurs de recherche</p>
            <h4 className="py-4 text-teal-600">Quelques outils utilisés</h4>
            <p className="text-gray-800 py-1">Lighthouse</p>
            <p className="text-gray-800 py-1">Babel</p>
            <p className="text-gray-800 py-1">Webpack </p>
        </div>
      </div>
      </section>
    </main>
  );
}
