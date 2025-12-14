import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import toothImage from'./assets/tooth1.jpeg'


function Navbar() {
  return (
    <nav>
      <h2>DentCare</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        
      </div>
    </nav>
  );
}

function StarRating({ rating }) {
  return <div className="stars">{"★".repeat(rating)}{"☆".repeat(5 - rating)}</div>;
}

function Home() {
  const reviews = [
    { name: "Sarah K.", comment: "Booking was fast and stress-free.", rating: 5 },
    { name: "James M.", comment: "Very professional dentists and clean clinic.", rating: 4 },
    { name: "Grace L.", comment: "I love how my records are safely stored.", rating: 5 },
  ];

  return (
    <div className="page">
      {/* HERO */}
      <section className="hero">
        <h1>Book Dental Appointments With Confidence</h1>
        <p>
          DentCare helps you schedule dental services, choose available doctors,
          track your medical records, and know the cost before you arrive.
        </p>
      </section>

      {/* REVIEWS */}
      <h2 className="section-title">What Our Patients Say</h2>

      <div className="reviews">
        {reviews.map((r, i) => (
          <div key={i} className="review-card">
            <h4>{r.name}</h4>
            <StarRating rating={r.rating} />
            <p>{r.comment}</p>
          </div>
        ))}
      </div>

      {/* CALL TO ACTION */}
      <div className="cta">
        <p>Ready to book your dental appointment?</p>
        <Link to="/register">
          <button>Get Started</button>
        </Link>
      </div>
    </div>
  );
}

function Login() {
  return <div className="page"><h2>Login Page</h2></div>;
}

function Register() {
  return <div className="page"><h2>Register Page</h2></div>;
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}
