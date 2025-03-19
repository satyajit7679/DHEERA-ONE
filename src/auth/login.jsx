import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Card, Button,Checkbox } from "@material-tailwind/react";

function Login() {
  console.log("data");
  const authorizedPerson = {
    email: "atanu@gmail.com",
    password: "1234"
  };
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("data", data);

    if (
      data?.email === authorizedPerson?.email &&
      data?.password === authorizedPerson?.password
    ) {
      navigate("/Home");
    } else {
      alert("Unauthorized Person");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <Card className="w-full max-w-md sm:max-w-lg bg-transparent p-6">
        <h4 className="text-xl font-medium text-slate-800 text-center">
          Login
        </h4>
        <p className="text-slate-500 font-light text-center">
          Nice to meet you! Enter your details to Login.
        </p>
        <form className="mt-6 space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col">
            <label className="mb-1 text-sm text-slate-600">Email</label>
            <input
              type="text"
              className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 focus:outline-none focus:border-slate-400 shadow-sm"
              placeholder="Your Email"
              {...register("email")}
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm text-slate-600">Password</label>
            <input
              type="password"
              className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 focus:outline-none focus:border-slate-400 shadow-sm"
              placeholder="Your Password"
              {...register("password", { required: true })}
            />
          </div>
          <div className="flex items-center gap-2">
           <Checkbox id="remember-me" />
            <label
              className="text-sm text-slate-600 cursor-pointer"
              htmlFor="remember"
            >
              Remember Me
            </label>
          </div>
          <Button type="submit" className="w-full hover:bg-gray-800">
            Login
          </Button>
          <p className="text-center mt-4 text-sm text-slate-600">
            Don&apos;t have an account?{" "}
            <a
              href="register"
              className="font-semibold text-slate-700 underline"
            >
              Sign up
            </a>
          </p>
        </form>
      </Card>
    </div>
  );
}

export default Login;
