import { useState } from "react";
import "./styles.css";

interface SafeDownloadPageProps {
  onNavigate: (page: string) => void;
}

function SafeDownloadPage({ }: SafeDownloadPageProps) {
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleDownload = () => {
    setIsDownloaded(true);

  };

  return (
    <div className="download-page">
      <header className="header">
        <h1>DGH & Co - Official Software</h1>
      </header>
      <div className="download-card">
        <div className="logo-placeholder">DGH & Co</div>
        <h2>Download Our Verified Software</h2>
        <div className="file-info">
          <p>File Name: DGH_Secure_Software_v2.4.zip</p>
          <p>File Size: 24.3 MB</p>
          <p>Verification: ✓ Digitally Signed</p>
          <button onClick={handleDownload} className="download-button">
            Download Now
          </button>
        </div>
        {isDownloaded && (
          <div className="download-message">
            <p>Download started successfully!</p>
            <p>Your software will be ready to install shortly.</p>
          </div>
        )}
      </div>
      <footer className="footer">
        <p>© 2025 DGH & Co. All rights reserved. | <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
      </footer>
    </div>
  );
}

export default SafeDownloadPage;