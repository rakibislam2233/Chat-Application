import loginImage from "../assets/images/login image.png";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../fetures/auth/authApi";
const Signup = () => {
  const [gender, setGender] = useState("");
  const [register, { data, error }] = useRegisterMutation();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const newUser = { name, email, password, gender };
    register(newUser);
  };

  useEffect(() => {
    if (error) {
        console.log(error);
    } else if (data?.accessToken && data?.data) {
      navigate("/");
    }
  }, [data, error, navigate]);

  return (
    <div className="w-full min-h-screen flex justify-center items-center p-5">
      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="w-full">
          <img className="w-full h-full" src={loginImage} alt="" />
        </div>
        <div className="w-full border border-gray-700 p-5 rounded">
          <h1 className="text-3xl font-semibold text-center py-2">
            Create Your Account
          </h1>
          <form className="space-y-3" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="w-full px-5 py-2 bg-transparent focus:outline-none border rounded border-gray-700 focus:border-[#1CC0A9]"
                placeholder="Enter your name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full px-5 py-2 bg-transparent focus:outline-none border rounded border-gray-700 focus:border-[#1CC0A9]"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="w-full px-5 py-2 bg-transparent focus:outline-none border rounded border-gray-700 focus:border-[#1CC0A9]"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password">Gender</label>
              <div className="flex gap-2">
                <input
                  onChange={() => setGender("male")}
                  type="checkbox"
                  checked={gender === "male"}
                  name="male"
                  id="male"
                  className="cursor-pointer"
                />
                <label className="cursor-pointer" htmlFor="male">
                  Male
                </label>
                <input
                  onChange={() => setGender("female")}
                  checked={gender === "female"}
                  type="checkbox"
                  name="female"
                  id="female"
                  className="cursor-pointer"
                />

                <label className="cursor-pointer" htmlFor="female">
                  Female
                </label>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button
                className="w-full px-8 py-2  bg-[#1CC0A9] text-white rounded font-semibold"
                type="submit"
              >
                Signup
              </button>
            </div>
            <h1 className="text-center hover:text-blue-500 hover:underline">
              <Link to={"/login"}>Already you have an account?</Link>
            </h1>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
