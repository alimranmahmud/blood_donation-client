import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {


  const { handleGoogleSignIn, signInUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then(result => {
        console.log("Login success:", result.user);
        toast.success("successfully log in")
      })
      .catch(error => {
        console.error(error.message);
      });
  };

  const handleGoogle = () => {
    handleGoogleSignIn()
      .then(result => {
        console.log("Google login success:", result.user);
      })
      .catch(error => {
        console.error(error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login Now!</h1>
        </div>

        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                  required
                />

                <label className="label">Password</label>
                <input
                  name="password"
                  className="input"
                  placeholder="Password"
                  autoComplete="current-password"
                  required
                />

                <button className="btn btn-neutral mt-4 w-full">
                  Login
                </button>
              </fieldset>
            </form>

            {/* Google Login button OUTSIDE form */}
            <button
              onClick={handleGoogle}
              className="btn w-full btn-outline mt-4"
              type="button"
            >
              Login With Google
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
