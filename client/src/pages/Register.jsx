import "./Register.css";
import { useEffect } from "react";

const Register = () => {

    const [user, setuser] = ({
        username: "",
        email: "",
        phone: "",
        password: ""
    });

    const handleInput = (e) => {
        console.log(e);
        let name = e.target.name;
        let value = e.target.value;

        setuser({ 
            ...user, 
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form submitted");
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
    <section className="register-section">
      
      {/* CURSOR LIGHT */}
      <div className="cursor-light"></div>

      <div className="register-container">

        {/* LEFT IMAGE */}
        {/* <div className="register-image">
          <img src="/images/marvel.jpg" alt="Registration" />
        </div> */}

        <div className="register-image">
          <img src="/images/marvel.jpg" alt="Registration" />
        </div>


        {/* RIGHT FORM */}
        <div className="register-form">
          <h1>Registration Form</h1>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input 
                type="text"
                id="username"
                name="username"
                placeholder="Enter username"
                autoComplete="off"
                value={user.username}
                onChange={handleInput}
                required
              />
            </div>

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
              <label htmlFor="phone">Phone</label>
              <input 
                type="number"
                id="phone"
                name="phone"
                placeholder="Enter phone number"
                autoComplete="off"
                value={user.phone}
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

            <button className="register-btn">Register Now</button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Register;
