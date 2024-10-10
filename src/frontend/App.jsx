import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './styles/App.css';
import Header from './components/Header';
import Login from './Login'
import Signup from './Signup';
import AdminDashboard from './admin/AdminDashboard';

const HomePage = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [activeButton, setActiveButton] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // SERVICES
  const services = [
      {
        id: 0,
        title: 'Consultation',
        description: 'A thorough dental examination and consultation to assess your oral health.',
        image: '/src/assets/serviceimage/consultation-button.png',
        buttonImage: '/src/assets/button/consultation-button.png',
        price: '₱500.00',
      },
      {
        id: 1,
        title: 'Oral Prophylaxis',
        description: 'A cleaning procedure that removes plaque and tartar to prevent cavities and gum disease.',
        image: '/src/assets/serviceimage/oral-prophylaxis-button.png',
        buttonImage: '/src/assets/button/oral-prophylaxis-button.png',
        price: '₱1,000.00 (minimum)',
      },
      {
        id: 2,
        title: 'Tooth Extraction',
        description: 'Removal of a damaged or decayed tooth to prevent further complications.',
        image: '/src/assets/serviceimage/tooth-extraction-button.png',
        buttonImage: '/src/assets/button/tooth-extraction-button.png',
        price: '₱1,000.00 (minimum)',
      },
      {
        id: 3,
        title: 'Tooth Restoration',
        description: 'Repair or replacement of damaged teeth using fillings, crowns, or other restorative techniques.',
        image: '/src/assets/serviceimage/tooth-restoration-button.png',
        buttonImage: '/src/assets/button/tooth-restoration-button.png',
        price: '₱1,000.00 (minimum)',
      },
      {
        id: 4,
        title: 'Periapical Radiograph',
        description: 'An X-ray examination to diagnose issues below the gumline.',
        image: '/src/assets/serviceimage/periapical-radiograph-button.png',
        buttonImage: '/src/assets/button/periapical-radiograph-button.png',
        price: '₱500.00',
      },
      {
        id: 5,
        title: 'Root Canal Treatment',
        description: 'A procedure to remove infected pulp from a tooth and protect it from future infections.',
        image: '/src/assets/serviceimage/root-canal-treatment-button.png',
        buttonImage: '/src/assets/button/root-canal-treatment-button.png',
        price: '₱7,000.00 per canal',
      },
      {
        id: 6,
        title: 'Dentures',
        description: 'Removable appliances used to replace missing teeth and restore functionality.',
        image: '/src/assets/serviceimage/dentures-button.png',
        buttonImage: '/src/assets/button/dentures-button.png',
        price: '₱4,000.00 - ₱18,000.00',
      },
      {
        id: 7,
        title: 'Orthodontic Treatment',
        description: 'Correct the alignment of your teeth and jaws using braces or aligners.',
        image: '/src/assets/serviceimage/orthodontic-treatment-button.png',
        buttonImage: '/src/assets/button/orthodontic-treatment-button.png',
        price: '₱60,000.00',
      },
      {
        id: 8,
        title: 'Odontectomy',
        description: 'Surgical removal of an impacted or damaged tooth.',
        image: '/src/assets/serviceimage/odontectomy-button.png',
        buttonImage: '/src/assets/button/odontectomy-button.png',
        price: '₱8,000.00 - ₱10,000.00',
      },
      {
        id: 9,
        title: 'Teeth Whitening',
        description: 'Brighten your smile with professional teeth whitening treatments.',
        image: '/src/assets/serviceimage/teeth-whitening-button.png',
        buttonImage: '/src/assets/button/teeth-whitening-button.png',
        price: '₱12,000.00',
      },
      {
        id: 10,
        title: 'Frenectomy',
        description: 'A minor surgical procedure to remove a frenum in the mouth.',
        image: '/src/assets/serviceimage/frenectomy-button.png',
        buttonImage: '/src/assets/button/frenectomy-button.png',
        price: '₱6,000.00',
      },
      {
        id: 11,
        title: 'Typical Fluoride Application',
        description: 'Fluoride treatment to strengthen teeth and prevent cavities.',
        image: '/src/assets/serviceimage/typical-flouride-application-button.png',
        buttonImage: '/src/assets/button/typical-flouride-application-button.png',
        price: '₱500.00',
      },
      {
        id: 12,
        title: 'Veneers',
        description: 'Thin shells of porcelain or composite resin that cover the front surface of your teeth.',
        image: '/src/assets/serviceimage/veneers-button.png',
        buttonImage: '/src/assets/button/veneers-button.png',
        price: '₱3,000.00 - ₱18,000.00',
      },
      {
        id: 13,
        title: 'TMJ Occlusal',
        description: 'Treatment for temporomandibular joint disorder to alleviate pain and improve functionality.',
        image: '/src/assets/serviceimage/tmj-occlusal-button.png',
        buttonImage: '/src/assets/button/tmj-occlusal-button.png',
        price: '₱20,000.00',
      },
      {
        id: 14,
        title: 'Jacket Crown',
        description: 'A protective cover placed over a tooth to restore its shape and strength.',
        image: '/src/assets/serviceimage/jacket-crown-button.png',
        buttonImage: '/src/assets/button/jacket-crown-button.png',
        price: '₱10,000.00 - ₱20,000.00',
      },
      {
        id: 15,
        title: 'Mouthguard',
        description: 'A custom-made appliance to protect your teeth from damage during sports or nighttime grinding.',
        image: '/src/assets/serviceimage/mouthguard-button.png',
        buttonImage: '/src/assets/button/mouthguard-button.png',
        price: '₱5,000.00',
      },
      {
        id: 16,
        title: 'Retainers',
        description: 'A dental appliance used to maintain teeth alignment after orthodontic treatment.',
        image: '/src/assets/serviceimage/retainers-button.png',
        buttonImage: '/src/assets/button/retainers-button.png',
        price: '₱5,000.00',
      },
    ];
    

  const filteredServices = services.filter(service =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
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
                <div className="service-detail-content">
                  <img src={selectedService.image} alt={selectedService.title} className="service-image" />
                  <div className="service-description">
                    <h3><strong>{selectedService.title}</strong></h3>
                  <div className="service-price">
                      <span className="price-label">Base Price</span>
                      <span className="price-value"><strong>{selectedService.price}</strong></span> {/* Displaying Price */}
                  </div>
                  <p><strong>{selectedService.description}</strong></p>
                </div>
                </div>
              ) : (
                <p>Select a service to see the details</p>
              )}
            </div>

          </div>
        </section>
        {/* @@@@@@@@@@@@@@@@@@@@@@@@  WHY DDC   @@@@@@@@@@@@@@@@@@@@@@@@ */}

        <section id="why-ddc" className="why-ddc">
          <div className="why-ddc-content">
            <div className="image-gallery">
              <img src="/src/assets/abstract1.jpg" alt="Abstract Image 1" className="abstract-image" />
              <img src="/src/assets/abstract2.jpg" alt="Abstract Image 2" className="abstract-image" />
              <img src="/src/assets/abstract3.jpg" alt="Abstract Image 3" className="abstract-image" />
            </div>
            <div className="why-ddc-info">
              <h2>Why DDC?</h2>
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
            <h1>Meet Our <span className="emphasize"><strong>Dentists</strong></span></h1>
            <div className="dentist-panels">
              <div className="panel">
                <img src="/src/assets/dentist1.jpg" alt="Dentist 1" /> {/* Self-closing img tag */}
                <h3>Dr. Carites M. Dominguez</h3>
                <p>Doctor of Dental Medicine 1991</p>
                <p>University of the East</p>
              </div>
              <div className="panel">
                <img src="/src/assets/dentist2.jpg" alt="Dentist 2" /> {/* Self-closing img tag */}
                <h3>Dr. Dana M. Dominguez</h3>
                <p>Doctor of Dental Medicine 2017</p>
                <p>University of the East</p>
              </div>
            </div>
          </div>
        </section>

        {/* @@@@@@@@@@@@@@@@@@@@@@@@  CONTACT US   @@@@@@@@@@@@@@@@@@@@@@@@ */}

        <section id="contact-us" className="contact-us">
          <h1>Contact <span className="emphasize"><strong>Us</strong></span></h1>
          <div className="contact-container">

            {/* Contact Form */}
            <div className="contact-form">
              <h2>Get in Touch</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" placeholder="Your Name" required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="Your Email" required />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="4" placeholder="Your Message" required></textarea>
                </div>

                <button type="submit" className="contact-submit-btn">Send Message</button>
              </form>
            </div>

            {/* Map Image */}
            <div className="contact-map">
              <h2>Visit Us</h2>
              
              {/* Make the map image and address clickable */}
              <a href="https://www.google.com/maps/place/Dominguez+Dental+Clinic,+Dr.+Carites+M.Dominguez+%2F+Dr.+Danessa+M.+Dominguez/@14.4166013,120.9350521,16z/data=!4m6!3m5!1s0x3397d2fc54fb3607:0xba8a1ff58295d714!8m2!3d14.416551!4d120.935166!16s%2Fg%2F1pzsxsrhl?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
                <img src="/src/assets/map.png" alt="Clinic Location" className="map-image" />
                <p>509, Bayan Luma 3, Imus, Cavite, Philippines</p>
              </a>
            </div>

            {/* Clinic Schedule */}
            <div className="clinic-schedule">
              <h2>Clinic Schedule</h2>
              <ul>
                <li><strong>Monday:</strong> 8:00 AM - 5:00 PM</li>
                <li><strong>Tuesday:</strong> 8:00 AM - 5:00 PM</li>
                <li><strong>Wednesday:</strong> 8:00 AM - 5:00 PM</li>
                <li><strong>Thursday:</strong> 8:00 AM - 5:00 PM</li>
                <li><strong>Friday:</strong> 8:00 AM - 5:00 PM</li>
                <li><strong>Saturday:</strong> 9:00 AM - 3:00 PM</li>
                <li><strong>Sunday:</strong> Closed</li>
              </ul>
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
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p1>&copy; 2024 Book with DDC. All Rights Reserved.</p1>
          </div>
        </footer>
      </div>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;


