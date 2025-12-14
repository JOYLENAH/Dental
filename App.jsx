import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "16px", display: "flex", justifyContent: "space-between" }}>
      <h2>DentCare</h2>
      <div>
        <Link to="/" style={{ marginRight: "12px" }}>Home</Link>
        <Link to="/login" style={{ marginRight: "12px" }}>Login</Link>
        <Link to="/register">Get Started</Link>
      </div>
    </nav>
  );
}

function Home() {
  const reviews = [
    { name: "Sarah K.", comment: "Booking was fast and easy!", rating: 5 },
    { name: "James M.", comment: "Very professional dentists.", rating: 4 },
    { name: "Grace L.", comment: "My records are safely stored.", rating: 5 }
  ];

  return (
    <div className="container">
      <h1>Book Dental Appointments Easily</h1>
      <p>Choose services, doctors, and time slots in minutes.</p>

      <h2>Patient Reviews</h2>
      {reviews.map((r, i) => (
        <div key={i} className="review">
          <strong>{r.name}</strong> – {"★".repeat(r.rating)}
          <p>{r.comment}</p>
        </div>
      ))}
    </div>
  );
}

function Login() {
  return <div className="container"><h2>Login Page</h2></div>;
}

function Register() {
  return <div className="container"><h2>Register Page</h2></div>;
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
