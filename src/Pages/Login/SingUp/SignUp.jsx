import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import SocialLogin from "../../../Components/SocialLogin/SocialLogin";

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { updateUserProfile, registerUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    //Sign Up using firebase auth.
    registerUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          //Create user entry in the database
          const userInfo = {
            name: data.name,
            email: data.email,
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log("user added to the database");
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User Created Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            }
          });
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Register</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center w-1/2 lg:text-left">
            <h1 className="text-7xl font-bold text-center">SignUp now!</h1>
            <p className="py-6 text-center">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card w-1/2 max-w-sm shadow-2xl bg-base-100">
            {/*  "handleSubmit" will validate your inputs before invoking "onSubmit" */}
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  //{/* include validation with required or other standard HTML validation rules */}
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
                {/* errors will return when field validation fails  */}
                {errors.name && (
                  <span className="text-red-600 px-4">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  {...register("photoURL", { required: true })}
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
                {errors.photoURL && (
                  <span className="text-red-600 px-4">
                    Photo URL is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  {...register("email", { required: true })}
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600 px-4">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    //Regex Validation in React Hook.
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600 px-4">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600 px-4">
                    Password must be 6 characters.
                  </p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600 px-4">
                    Password must be less than 20 characters.
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600 px-4">
                    Password must be have one UpperCase, one LowerCase, one
                    Number & one SpecialCharacter.
                  </p>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-outline border-0 border-b-4 font-bold bg-slate-200 text-orange-600 border-orange-400"
                  type="submit"
                  value="Register"
                />
              </div>
            </form>
            <p className="text-orange-500 text-center mb-4 text-xl">
              <small>
                Already had an Account?{" "}
                <Link to="/login" className="font-bold">
                  Please Login.
                </Link>
              </small>
            </p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
