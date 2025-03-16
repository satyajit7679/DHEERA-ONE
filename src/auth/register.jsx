import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography
} from "@material-tailwind/react";

function Register() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    if (data.name && data.password) {
      navigate("/login");
    } else {
      alert("Please enter valid credentials.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-md p-6 bg-white shadow-md rounded-lg">
        <Typography variant="h4" className="text-center text-gray-800">
          Sign Up
        </Typography>
        <Typography
          variant="paragraph"
          className="text-center text-gray-600 mb-4"
        >
          Nice to meet you! Enter your details to register.
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name Field */}
          <div>
            <Typography variant="small" className="text-gray-700">
              Your Name
            </Typography>
            <Input
              type="text"
              placeholder="Enter your name"
              {...register("name", { required: "Name is required" })}
              className="mt-1"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <Typography variant="small" className="text-gray-700">
              Email
            </Typography>
            <Input
              type="email"
              placeholder="Enter your email"
              {...register("email", { required: "Email is required" })}
              className="mt-1"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <Typography variant="small" className="text-gray-700">
              Password
            </Typography>
            <Input
              type="password"
              placeholder="Enter your password"
              {...register("password", { required: "Password is required" })}
              className="mt-1"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Remember Me Checkbox */}
          <div className="flex items-center gap-2">
            <Checkbox id="remember-me" />
            <label htmlFor="remember-me" className="text-gray-600 text-sm">
              Remember Me
            </label>
          </div>

          {/* Submit Button */}
          <Button type="submit" fullWidth className="mt-2 hover:bg-gray-800">
            Sign Up
          </Button>

          {/* Login Link */}
          {/* <Typography 
            variant="small" 
            className="text-center text-gray-600"
          >
            Already have an account?
            <a href="/login" className="text-zinc-950 underline">
              Login
            </a>
            </Typography> */}
          <p className="text-center mt-4 text-sm text-slate-600">
            Already have an account?{" "}
            <a
              href="login"
              className="font-semibold text-slate-700 underline"
            >
              Login
            </a>
          </p>
        </form>
      </Card>
    </div>
  );
}

export default Register;
