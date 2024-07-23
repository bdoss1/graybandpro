import Image from 'next/image';
import { useState } from 'react';
import { logo } from '../lib/images';  // Import the logo

export default function Home() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send the email to your backend or mailing list service
    await fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });
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
            className="logo"
          />
        </div>
        <p className="tagline animate-fade-in">A Simple Way To Keep You Safe</p>
        <form className="newsletter-form animate-slide-up" onSubmit={handleSubmit}>
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
      <footer className="footer animate-fade-in">
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
        .logo {
          animation: logo-spin 5s linear infinite;
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
        @keyframes logo-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slide-up {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 2s ease-in;
        }
        .animate-slide-up {
          animation: slide-up 2s ease-out;
        }
      `}</style>
    </div>
  );
}