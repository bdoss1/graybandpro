import Image from 'next/image';
import { useState } from 'react';
import { logo } from '../lib/images';  // Import the logo

export default function Home() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission, e.g., send the email to your backend or a mailing list service
    alert(`Thank you for signing up, ${email}!`);
  };

  return (
    <div className="container">
      <main className="main">
        <div className="logo-container">
          <Image
            src={logo}  // Use the imported logo
            alt="Grayband Pro Logo"
            width={500}
            height={500}
          />
        </div>
        <p className="tagline">A Simple Way To Keep You Safe</p>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Learn More</button>
        </form>
      </main>
      <footer className="footer">
        &copy; {new Date().getFullYear()} Grayband Pro. All rights reserved.
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: #000;
          color: #fff;
        }
        .main {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          flex: 1;
        }
        .logo-container {
          margin-bottom: 20px;
        }
        .tagline {
          font-size: 1.2rem;
          margin-bottom: 20px;
        }
        .newsletter-form {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .newsletter-form input {
          padding: 10px;
          margin-bottom: 10px;
          border-radius: 5px;
          border: none;
          width: 250px;
        }
        .newsletter-form button {
          padding: 10px 20px;
          border-radius: 5px;
          border: none;
          background-color: #fff;
          color: #000;
          cursor: pointer;
        }
        .footer {
          padding: 20px;
          text-align: center;
          background-color: #111;
          width: 100%;
        }
      `}</style>
    </div>
  );
}
