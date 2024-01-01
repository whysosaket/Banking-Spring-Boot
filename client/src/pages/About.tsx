import { Link } from "react-router-dom"
import {motion} from "framer-motion"

const About = () => {
  return (
    <motion.div
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.2, type: "spring", stiffness: 30 }}
    className="">
        <section className="bg-gray-200">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-4xl font-extrabold md:text-5xl flex flex-col">
        Discover Your
        <strong className="font-extrabold text-red-700 my-2 md:text-5xl sm:block text-3xl"> Financial Haven with Us </strong>
      </h1>

      <p className="mt-4 sm:text-xl/relaxed px-4">
        Unlock a World of Financial Stability and Personalized Solutions for Your Everlasting Home.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 max-w-64"
          to="/register"
        >
          Get Started
        </Link>
      </div>
    </div>
  </div>
</section>
    </motion.div>
  )
}

export default About