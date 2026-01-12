import { useNavigate } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  const handleGoContact = () => {
    navigate("/contact");
  };

  return (
    <div className="not-found-container">
      <div className="stars"></div>
      <div className="stars2"></div>

      <div className="not-found-content">
        <div className="astronaut-section">
          <div className="astronaut">
            <div className="astronaut-head"></div>
            <div className="astronaut-body"></div>
            <div className="astronaut-legs">
              <div className="leg"></div>
              <div className="leg"></div>
            </div>
          </div>
          <div className="floating-animation">
            <div className="asteroid"></div>
          </div>
        </div>

        <div className="error-section">
          <h1 className="error-code">404</h1>
          <h2 className="error-title">Oops! Page Not Found</h2>
          <p className="error-description">
            Looks like you've ventured into uncharted space! The page you're looking for doesn't exist. 
            Don't worry, even astronauts get lost sometimes. Let's get you back on track!
          </p>

          <div className="error-messages">
            <p className="message">🚀 Mission Control, we have a problem!</p>
            <p className="message">⭐ The page you seek has drifted into the void...</p>
            <p className="message">🌌 Initiating return sequence...</p>
          </div>

          <div className="button-group">
            <button className="btn btn-primary" onClick={handleGoHome}>
              <span className="btn-icon">🏠</span>
              Return to Home
            </button>
            <button className="btn btn-secondary" onClick={handleGoContact}>
              <span className="btn-icon">📧</span>
              Report Issue
            </button>
          </div>

          <div className="fun-text">
            <p>Houston, we're connected! 🛸</p>
          </div>
        </div>
      </div>

      <div className="planets">
        <div className="planet planet-1"></div>
        <div className="planet planet-2"></div>
        <div className="planet planet-3"></div>
      </div>
    </div>
  );
};

export default NotFound;
