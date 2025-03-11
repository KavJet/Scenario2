import { useState } from "react";
import "./downloaded.css";

interface CreditCardPageProps {
  onNavigate: (page: string) => void;
}

function CreditCardPage({ onNavigate }: CreditCardPageProps) {
  const [cardNumber, setCardNumber] = useState("");
  const [expDate, setExpDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      onNavigate("malware");
    }, 2000);
  };

  return (
    <div className="card">
      <h1>PAYMENT REQUIRED TO ACTIVATE YOUR ANTIVIRUS!!!</h1>
      
      <div className="payment-form">
        <h2>ENTER CREDIT CARD DETAILS NOW!!!</h2>
        <div className="form-field">
          <label>CARD NUMBER:</label>
          <input
            type="text"
            placeholder="XXXX-XXXX-XXXX-XXXX"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="credit-card-input"
          />
        </div>
        
        <div className="form-field">
          <label>EXPIRY DATE:</label>
          <input
            type="text"
            placeholder="MM/YY"
            value={expDate}
            onChange={(e) => setExpDate(e.target.value)}
            className="credit-card-input"
          />
        </div>
        
        <div className="form-field">
          <label>CVV:</label>
          <input
            type="text"
            placeholder="123"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            className="credit-card-input"
          />
        </div>
        
        <div className="form-field">
          <label>NAME ON CARD:</label>
          <input
            type="text"
            placeholder="YOUR NAME HERE"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="credit-card-input"
          />
        </div>
        
        <button onClick={handleSubmit} className="submit-button">
          PAY NOW - ONLY $49.99!!!
        </button>
        
        {isSubmitted && (
          <div className="success-message">
            PROCESSING PAYMENT... THANK YOU!!!
          </div>
        )}
      </div>
      
      <div className="security-badges">
        <span className="fake-badge">SECURED! ✓</span>
        <span className="fake-badge">ENCRYPTED! ✓</span>
        <span className="fake-badge">TRUSTED! ✓</span>
      </div>
    </div>
  );
}

export default CreditCardPage;