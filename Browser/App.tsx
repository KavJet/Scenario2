import { useState } from "react";
import MacBrowser from "./Browser";
import LoginPage from "./login";
import SafeDownloadPage from "./safesoftware";
import MalwareDownloadPage from "./malware";
import CreditCardPage from "./payments";
import "./App.css";

function App() {
  const [showBrowser, setShowBrowser] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");
  const [currentUrl, setCurrentUrl] = useState("https://dgh&co-login.com");

  const openBrowser = (page: string) => {
    let url = "https://dgh&co-login.com";
    
    if (page === "safe") {
      url = "https://antivirus-download.com";
    } else if (page === "malware") {
      url = "https://antivrius-downlaod.com";
    } else if (page === "creditcard") {
      url = "https://safe-pay-antivirus.com";
    }
    
    setCurrentPage(page);
    setCurrentUrl(url);
    setShowBrowser(true);
  };

  const closeBrowser = () => {
    setShowBrowser(false);
  };

  const navigateTo = (page: string) => {
    openBrowser(page);
  };

  return (
    <div className="app">
      {!showBrowser && (
        <div className="welcome-screen">
          <h1>Main Page</h1>
          <p>Click the button below to open the browser</p>
          <button onClick={() => openBrowser("login")}>Launch Browser</button>
        </div>
      )}

      {showBrowser && (
        <MacBrowser initialUrl={currentUrl} onClose={closeBrowser}>
          {currentPage === "login" && <LoginPage onNavigate={navigateTo} />}
          {currentPage === "safe" && <SafeDownloadPage onNavigate={navigateTo} />}
          {currentPage === "malware" && <MalwareDownloadPage onNavigate={navigateTo} />}
          {currentPage === "creditcard" && <CreditCardPage onNavigate={navigateTo} />}
        </MacBrowser>
      )}
    </div>
  );
}

export default App;