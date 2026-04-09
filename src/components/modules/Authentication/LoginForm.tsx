import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button"; 
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export function LoginForm() {
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    setError(null);

    try {
      console.log("Login data:", { email: data.email, password: data.password });
      // TODO: API call korbe
      localStorage.setItem("token", "dummy-token");
      setError(null);
      navigate("/");
    } catch (err) {
      console.log('error', err)
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900">
      <Navbar />

      {/* Hero Banner */}
      <div
        className="relative h-[250px] w-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-3">Login</h1>
          <p className="text-lg">
            <span className="text-[#ff970d]">Home</span> &gt; Login
          </p>
        </div>
      </div>

      {/* Main Box - p-6 = 25px padding */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6">
          <div className="flex flex-col lg:flex-row gap-6">

            {/* Left Side - Image (all side rounded) */}
            <div className="lg:w-1/3">
              <img
                src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format"
                alt="London Eye"
                className="w-full h-full min-h-[550px] object-cover rounded-xl"
              />
            </div>

            {/* Right Side - Form (2/3 width) */}
            <div className="lg:w-2/3">

              {/* Big Heading */}
              <div className="mb-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
                  Welcome back to your account
                </h2>
              </div>

              {/* Welcome Text */}
              <div className="mb-8">
                <p className="text-gray-500 dark:text-gray-400">
                  Please enter your details to sign in
                </p>
              </div>

              {error && (
                <div className="mb-6 p-3 bg-red-100 text-red-700 rounded-xl text-sm">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Email Field */}
                <div>
                  <Label htmlFor="email" className="text-gray-700 dark:text-gray-300 font-semibold">
                    Email Address <span className="text-red-500">*</span>
                  </Label>
                  <div className="relative mt-2">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="pl-10 py-6 rounded-xl"
                      {...register("email")}
                    />
                  </div>
                  {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>}
                </div>

                {/* Password Field - Full Width */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <Label htmlFor="password" className="text-gray-700 dark:text-gray-300 font-semibold">
                      Password <span className="text-red-500">*</span>
                    </Label>
                    <button type="button" className="text-sm text-[#4da528] hover:underline">
                      Forgot Password?
                    </button>
                  </div>
                  <div className="relative mt-2">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="pl-10 pr-10 py-6 rounded-xl"
                      {...register("password")}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4 text-gray-400" /> : <Eye className="h-4 w-4 text-gray-400" />}
                    </button>
                  </div>
                  {errors.password && <p className="text-red-500 text-sm mt-2">{errors.password.message}</p>}
                </div>

                {/* OR Divider - Small Line, Left Side */}
                <div className="relative my-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-16 border-t border-gray-300"></div>
                  </div>
                  <div className="relative">
                    <span className="pr-4 text-sm text-gray-500 bg-white dark:bg-gray-800 font-bold">or______</span>
                  </div>
                </div>

                {/* Social Buttons - 50% width each, Same Line, Left Side */}
                <div className="flex gap-4">
                  <button
                    type="button"
                    className="w-50 flex items-center justify-center gap-2 py-3 px-4 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                    </svg>
                    <span className="text-sm font-medium">Google</span>
                  </button>

                  <button
                    type="button"
                    className="w-50 flex items-center justify-center gap-2 py-3 px-4 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <svg className="w-5 h-5 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.96h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07z" />
                    </svg>
                    <span className="text-sm font-medium">Facebook</span>
                  </button>
                </div>

                {/* Sign In Button - Full Width Green */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#4da528] hover:bg-[#ff970d] text-white font-semibold py-6 rounded-xl transition-all duration-300 mt-2"
                >
                  {isSubmitting ? "Logging in..." : "Sign In"}
                </Button>

                {/* Register Link */}
                <p className="text-center text-sm text-gray-600 dark:text-gray-400 pt-2">
                  Don't have an account?{" "}
                  <button
                    type="button"
                    onClick={() => navigate("/register")}
                    className="text-[#4da528] font-semibold hover:underline"
                  >
                    Register now
                  </button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}