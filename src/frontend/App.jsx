
import React, { useState } from 'react';
import './styles/App.css'; // Ensure you link the CSS file

const HomePage = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [activeButton, setActiveButton] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Update the services array with the actual details
  const services = [
    {
      id: 0,
      title: 'Consultation',
      description: 'Description for Service #1.',
      image: '/src/assets/consultation.png', // Placeholder image
      buttonImage: '/src/assets/button/consultation-button.png',
    },
    {
      id: 1,
      title: 'Oral Prophylaxis',
      description: 'Tooth extraction is the removal of a damaged or decayed tooth to prevent further issues or to prepare for other dental procedures.',
      image: '/src/assets/oral-prophylaxis.png', // Update with the correct path
      buttonImage: '/src/assets/button/oral-prophylaxis-button.png',
    },
    {
      id: 2,
      title: 'Tooth Extraction',
      description: 'Tooth extraction is the removal of a damaged or decayed tooth to prevent further issues or to prepare for other dental procedures.',
      image: '/src/assets/tooth-extraction.png', // Update with the correct path
      buttonImage: '/src/assets/button/tooth-extraction-button.png',
    },
    {
      id: 3,
      title: 'Tooth Restoration',
      description: 'Tooth restoration involves repairing or replacing damaged or decayed teeth using fillings, crowns, or other restorative techniques.',
      image: '/src/assets/tooth-restoration.png', // Update with the correct path
      buttonImage: '/src/assets/button/tooth-restoration-button.png',
    },
    {
      id: 4,
      title: 'Periapical Radiograph',
      description: 'Description for Service #1.',
      image: '/src/assets/periapical-radiograpah.png', // Placeholder image
      buttonImage: '/src/assets/button/periapical-radiograph-button.png',
    },
    {
      id: 5,
      title: 'Root Canal Treatment',
      description: 'Description for Service #3.',
      image: '/src/assets/root-canal-treatment.png', // Placeholder image
      buttonImage: '/src/assets/button/root-canal-treatment-button.png',
    },
    {
      id: 6,
      title: 'Dentures',
      description: 'Dentures are removable appliances used to replace missing teeth and restore the function and appearance of your smile.',
      image: '/src/assets/dentures.png', // Update with the correct path
      buttonImage: '/src/assets/button/dentures-button.png',
    },
    {
      id: 7,
      title: 'Orthodontic Treatment',
      description: 'Dentures are removable appliances used to replace missing teeth and restore the function and appearance of your smile.',
      image: '/src/assets/orthodontic-treatment.png', // Update with the correct path
      buttonImage: '/src/assets/button/orthodontic-treatment-button.png',
    },
    {
      id: 8,
      title: 'Odontectomy',
      description: 'Tooth restoration involves repairing or replacing damaged or decayed teeth using fillings, crowns, or other restorative techniques.',
      image: '/src/assets/odontectomy.png', // Update with the correct path
      buttonImage: '/src/assets/button/odontectomy-button.png',
    },
    {
      id: 9,
      title: 'Teeth Whitening',
      description: 'Description for Service #4.',
      image: '/src/assets/teeth-withening.png', // Placeholder image
      buttonImage: '/src/assets/button/teeth-whitening-button.png',
    },
    {
      id: 10,
      title: 'Frenectomy',
      description: 'Veneers are thin shells of porcelain or composite resin that cover the front surface of your teeth to improve their appearance.',
      image: '/src/assets/frenectomy.png', // Update with the correct path
      buttonImage: '/src/assets/button/frenectomy-button.png',


      title: 'Root Canal Treatment',
      description: 'Description for Service #3.',
      image: '/src/assets/root-canal-treatment.png', // Placeholder image
      buttonImage: '/src/assets/button/root-canal-treatment-button.png',
    },
    {
      id: 11,
      title: 'Typical Flouride Application',
      description: 'Description for Service #5.',
      image: '/src/assets/service5.png', // Placeholder image
      buttonImage: '/src/assets/button/typical-flouride-application-button.png',

    },
    {
      id: 12,
      title: 'Veneers',
      description: 'Veneers are thin shells of porcelain or composite resin that cover the front surface of your teeth to improve their appearance.',
      image: '/src/assets/veneers.png', // Update with the correct path
      buttonImage: '/src/assets/button/veneers-button.png',
    },
    {
      id: 13,
      title: 'TMJ Occlusal',
      description: 'Description for Service #5.',
      image: '/src/assets/tmj-occlusal.png', // Placeholder image
      buttonImage: '/src/assets/button/tmj-occlusal-button.png',
    },
    {
      id: 14,
      title: 'Jacket Crown',
      description: 'Orthodontic treatment involves using braces or aligners to correct the alignment of your teeth and jaws for better function and aesthetics.',
      image: '/src/assets/jacket-crown.png', // Update with the correct path
      buttonImage: '/src/assets/button/jacket-crown-button.png',

    },
    {
      id: 15,
      title: 'Mouthguard',
      description: 'Retainers are used after orthodontic treatment to maintain the new position of your teeth and prevent them from shifting back.',
      image: '/src/assets/mouthguard.png', // Update with the correct path
      buttonImage: '/src/assets/button/mouthguard-button.png',
    },
    {
      id: 16,
      title: 'Retainers',
      description: 'Description for Service #2.',
      image: '/src/assets/retainers.png', // Placeholder image
      buttonImage: '/src/assets/button/retainers-button.png',

    },
  ];

  const filteredServices = services.filter(service =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    {/* @@@@@@@@@@@@@@@@@@@@@@@@  HEADER   @@@@@@@@@@@@@@@@@@@@@@@@ */}
      <header className="header">
        <img src="/src/assets/logowithtext.png" alt="Dominguez Dental Clinic Logo" className="logo" />
        <nav className="nav">
          <a href="#services">Services</a>
          <a href="#why-ddc">Why DDC</a>
          <a href="#dentistssec">Dentists</a>
          <a href="#contact">Contact Us</a>
        </nav>
        <div className="header-buttons">
          <button className="login-btn">Log In</button>
          <button className="appoint-btn">Appoint Now</button>
        </div>
      </header>
      <div className="container">
        <main className="hero-section">
          <h1>Find Your <span className="emphasize"><strong>Smile</strong></span> at</h1>
          <h2>Dominguez Dental Clinic.</h2>
          <p>Dominguez Dental Clinic is a trusted dental service provider in Imus, Cavite that offers high quality dental care to patients in a comfortable and welcoming environment. Book your appointment with our dentist now.</p>
          <button className="appoint-main-btn">Appoint Now</button>
          <div className="happy-teeth">
            <img src="/src/assets/tooth.png" alt="Happy Tooth 1" className="tooth" />
          </div>
        </main>
          

      {/* @@@@@@@@@@@@@@@@@@@@@@@@  SERVICES   @@@@@@@@@@@@@@@@@@@@@@@@ */}
      <section id="services" className="extra-info-container">
          <h2>Our Services</h2>
          <input
            type="text"
            placeholder="Search For Services"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <div className="button-container">
            <div className="button-list">
              {filteredServices.map((service) => (
                <button
                  key={service.id}
                  className={`button ${activeButton === service.id ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedService(service);
                    setActiveButton(service.id);
                  }}
                >
                  <span className="button-text">{service.title}</span>
                  <img src={service.buttonImage} alt={service.title} className="button-image" />
                </button>
              ))}
            </div>
            <div className="service-detail">
              {selectedService ? (
                <>
                  <img src={selectedService.image} alt={selectedService.title} className="service-image" />
                  <div className="service-description">
                    <h3>{selectedService.title}</h3>
                    <p>{selectedService.description}</p>
                  </div>
                </>
              ) : (
                <p>Select a service to see the details</p>
              )}
            </div>
          </div>
        </section>

      {/* @@@@@@@@@@@@@@@@@@@@@@@@  WHY DDC   @@@@@@@@@@@@@@@@@@@@@@@@ */}

        <section  id="why-ddc" className="why-ddc">
          <div className="why-ddc-content">
            <div className="image-gallery">
              <img src="/src/assets/abstract1.jpg" alt="Abstract Image 1" className="abstract-image" />
              <img src="/src/assets/abstract2.jpg" alt="Abstract Image 2" className="abstract-image" />
              <img src="/src/assets/abstract3.jpg" alt="Abstract Image 3" className="abstract-image" />
            </div>
            <div className="why-ddc-info">
              <h2>Why DDC</h2>
              <div className="why-ddc-item">
                <h3>Patient Centered Care</h3>
                <p>At Dominguez Dental Clinic, we prioritize our patients' needs and comfort. Our approach ensures that each patient receives personalized care tailored to their unique requirements.</p>
              </div>
              <div className="why-ddc-item">
                <h3>Experienced and Qualified Team</h3>
                <p>Our team of dental professionals is highly trained and experienced, bringing years of expertise to provide the best possible care for our patients.</p>
              </div>
              <div className="why-ddc-item">
                <h3>Comprehensive Services</h3>
                <p>We offer a wide range of dental services to address all your oral health needs, from routine check-ups to advanced treatments, ensuring comprehensive care under one roof.</p>
              </div>
            </div>
          </div>
        </section>
 
 
      {/* @@@@@@@@@@@@@@@@@@@@@@@@  DENtiST   @@@@@@@@@@@@@@@@@@@@@@@@ */}

      <section id="dentistssec">
        <div className="dentists">
        <h1>Meet Our <strong>Dentists</strong></h1>
        <div className="dentist-panels">
          <div className="panel">
            <img src="/src/assets/dentist1.jpg" alt="Dentist 1" /> {/* Self-closing img tag */}
            <h3>Dentist 1</h3>
            <p>Short bio or description of Dentist 1.</p>
          </div>
          <div className="panel">
            <img src="/src/assets/dentist2.jpg" alt="Dentist 2" /> {/* Self-closing img tag */}
            <h3>Dentist 2</h3>
            <p>Short bio or description of Dentist 2.</p>
          </div>
        </div>
        </div>
      </section>

      {/* @@@@@@@@@@@@@@@@@@@@@@@@  footer   @@@@@@@@@@@@@@@@@@@@@@@@ */}

      <footer className="footer">
  <div className="footer-content">
    <div className="footer-column">
      <h4>About Us</h4>
      <p>We are committed to providing the best services...</p>

      <div className="footer-contact">
        <h4>Contact</h4>
        <p>Email: <a href="mailto:info@example.com">info@example.com</a></p>
        <p>Phone: <a href="tel:+1234567890">+123 456 7890</a></p>
      </div>
    </div>

    
    <div className="footer-column">
  <h4>Quick Links</h4>
  <div className="footer-links">
          <a href="#services">Services</a>
          <a href="#why-ddc">About us</a>
          <a href="#dentistssec">Dentists</a>
          <a href="#contact">Contact Us</a>
  </div>
</div>


    <div className="footer-column">
      <h4>Follow Us</h4>
      <div className="social-icons">
        <a href="#" aria-label="Facebook">
          <img src="facebook-icon.svg" alt="Facebook" />
        </a>
        <a href="#" aria-label="Instagram">
          <img src="instagram-icon.svg" alt="Instagram" />
        </a>
      </div>
    </div>
  </div>

  <div className="footer-bottom">
    <p1>&copy; 2024 Your Website Name. All Rights Reserved.</p1>
  </div>
</footer>


      </div>
    </>
  );
};

export default HomePage;



