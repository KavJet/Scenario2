import { useState, useEffect } from "react";
import "./styles.css";

interface LoginPageProps {
  onNavigate: (page: string) => void;
}

const usernames = [
  'admin1',
  'user1',
  'guest1',
]
const passwords = [
  '12345678', 
  'hello@123', 
  'jwUpt3GH!', 
  'qwerty789'
];

const LoginPage = ({ onNavigate }: LoginPageProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(passwords[0]);
  const [error, setError] = useState("");
  
  const handleLogin = () => {
    if (password === 'jwUpt3GH!') { 
      onNavigate("safe");
    } else {
      setError("Login failed. Try a stronger password.");
      setTimeout(() => {
        onNavigate("malware");
      }, 1000);
    }
  };

  return (
    <div className="container">
      <h2>DGH & Co Login Page</h2>
    <div className="form-group">
        <label>Username</label>
        <select
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        >
          {usernames.map((user: string) => (
            <option key={user} value={user}>
              {user}
            </option>
          ))}
        </select>
    </div>
      <div className="form-group">
        <label>Password</label>
        <select
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        >
          {passwords.map((pwd) => (
            <option key={pwd} value={pwd}>
              {pwd}
            </option>
          ))}
        </select>
      </div>
      {error && <p className="error-message">{error}</p>}
      <button onClick={handleLogin} className="login-button">Login</button>
    </div>
  );
};

export default LoginPage;