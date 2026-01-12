import "./login.css";
import { useState, useEffect } from "react";

const Login = () => {

    const [user, setUser] = useState({
        email: "",
        password: ""
    });
    
    const handleInput = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Login Form");
        console.log(user);
    }

  useEffect(() => {
    const light = document.querySelector(".cursor-light");

    window.addEventListener("mousemove", (e) => {
      light.style.left = e.clientX + "px";
      light.style.top = e.clientY + "px";
    });
  }, []);

  return (
    <section className="login-section">
      
      {/* CURSOR LIGHT */}
      <div className="cursor-light"></div>

      <div className="login-container">

        {/* LEFT IMAGE */}
        <div className="login-image">
          <img src="/images/registration-image.jpg" alt="a girl filling login form" />
        </div>


        {/* RIGHT FORM */}
        <div className="login-form">
          <h1>Login Form</h1>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input 
                type="text"
                id="email"
                name="email"
                placeholder="Enter email"
                autoComplete="off"
                value={user.email}
                onChange={handleInput}
                required
            />
            </div>

            <div className="input-group">
              <label htmlFor="password" >Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter password"
                autoComplete="off"
                value={user.password}
                onChange={handleInput}
                required
              />
            </div>

            <button className="login-btn">Login Now</button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Login;
