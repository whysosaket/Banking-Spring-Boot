import { Link } from "react-router-dom";
import SignupImage from "../assets/bg.svg";
import { motion } from "framer-motion";
import GlobalContext from "../context/GlobalContext";
import { useContext, useEffect, useRef } from "react";
import AlertContext from "../context/AlertContext";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { login, isAuthenticated } = useContext(GlobalContext);
  const { updateAlert } = useContext(AlertContext);
  const navigate = useNavigate();

  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleLogin = async () => {
    const username: string = usernameRef.current?.value || "";
    const password: string = passwordRef.current?.value || "";

    if (username == "" || password == "") {
      updateAlert("Please enter both username and password!");
      return;
    }
    const res = await login(username, password);
    if (res) {
      navigate("/");
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  return (
    <div>
      <>
        <motion.div
          initial={{ scaleY: 1.4 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.04 }}
          className="bg-gray-900 bg-opacity-0 flex items-center justify-center p-4 md:p-0"
        >
          <div className="bg-gray-100 bg-opacity-40 text-gray-500 shadow-xl w-full overflow-hidden rounded-3xl my-16 md:my-0 md:rounded-none">
            <div className="md:flex w-full">
              <motion.div
                // add  animation that image flip
                initial={{ x: 500, rotateY: 180, opacity: 0 }}
                animate={{ x: 0, rotateY: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="hidden md:block w-1/2 bg-rose-100 bg-opacity-50 py-10 px-10"
              >
                <img src={SignupImage} className="-scale-x-100" />
              </motion.div>
              <motion.div
                initial={{ x: -500, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="w-full md:w-1/2 py-10 px-5 md:px-10"
              >
                <div className="text-center mb-10">
                  <h1 className="font-bold text-3xl text-gray-900">Login</h1>
                  <p>Enter your information to login</p>
                </div>
                <div>
                  <div className="flex -mx-3">
                    <div className="w-full px-3 mb-5">
                      <label htmlFor="" className="text-xs font-semibold px-1">
                        Username
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-email-outline text-gray-400 text-lg" />
                        </div>
                        <input
                          type="text"
                          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-rose-500"
                          placeholder="johnsmith"
                          ref={usernameRef}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex -mx-3">
                    <div className="w-full px-3 mb-12">
                      <label htmlFor="" className="text-xs font-semibold px-1">
                        Password
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-lock-outline text-gray-400 text-lg" />
                        </div>
                        <input
                          type="password"
                          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-rose-500"
                          placeholder="************"
                          ref={passwordRef}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex -mx-3">
                    <div className="w-full px-3 mb-5">
                      <button
                        onClick={handleLogin}
                        className="block w-full max-w-xs mx-auto bg-rose-500 hover:bg-rose-700 focus:bg-rose-700 text-white rounded-lg px-3 py-3 font-semibold"
                      >
                        LOGIN
                      </button>
                    </div>
                  </div>
                  <h1 className="text-center text-sm">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-rose-600">
                      Register
                    </Link>
                  </h1>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </>
    </div>
  );
};

export default Login;
