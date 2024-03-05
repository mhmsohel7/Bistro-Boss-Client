import { Link } from "react-router-dom";

const SignUp = () => {
  const handleSignUp = (e) => {
    e.preventDefault();
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center w-1/2 lg:text-left">
          <h1 className="text-7xl font-bold text-center">SignUp now!</h1>
          <p className="py-6 text-center">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card w-1/2 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-outline border-0 border-b-4 font-bold bg-slate-200 text-orange-600 border-orange-400"
                type="submit"
                value="Login"
              />
            </div>
          </form>
          <p className="text-orange-500 text-center mb-4 text-xl">
            <small>
              New Here? <Link to="/signUp">Create an account.</Link>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
