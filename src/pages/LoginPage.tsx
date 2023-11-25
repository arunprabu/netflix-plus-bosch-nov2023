import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserRole, useAuth } from "../contexts/AuthContext";

interface LoginForm {
  email: string;
  password: string;
}

const LoginPage = () => {
  const { register, handleSubmit, formState } = useForm<LoginForm>();
  const navigate = useNavigate();

  const { onLogin } = useAuth();

  const handleLogin: SubmitHandler<LoginForm> = async (data: LoginForm) => {
    console.log("will implement login in a while");
    console.log(data); // submittable form data

    try {
      const response = await axios.post("https://reqres.in/api/login", data);
      // assuming the login is successful
      console.log(response.data);
      // the token should be saved in local storage
      onLogin(response.data.token, UserRole.User);
      // redirect to the contact-us page -- static implementation
      navigate("/contact-us");
    } catch (err) {
      console.log("Login Failed", err);
    }
  };

  return (
    <div className="col-md-4 offset-md-4">
      <h2>Login</h2>
      <form onSubmit={handleSubmit(handleLogin)}>
        <div>
          <label>Email:</label>
          <input
            type="text"
            className="form-control"
            {...register("email")}
            disabled={formState.isSubmitting}
            defaultValue="eve.holt@reqres.in"
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            className="form-control"
            {...register("password")}
            disabled={formState.isSubmitting}
            defaultValue="cityslicka"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary mt-3"
          disabled={formState.isSubmitting}
        >
          {formState.isSubmitting ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
