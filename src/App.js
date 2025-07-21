import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
const logo = 'https://i.ibb.co/jZ9n6QSQ/Hotel-Akaibara-Logo-with-Wave-Icon.png';

function Navbar() {
  return (
    <nav className="navbar luxury-navbar">
      <img src={logo} alt="Hotel Akaibara Logo" className="navbar-logo" />
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/rooms">Rooms</Link>
        <Link to="/booking" className="hero-btn-navbar">Book Now</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="hero-luxury">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-text-luxury">
          <h1 className="hero-title-luxury">Experience Unrivaled Luxury<br /><span className="hero-highlight">Hotel Akaibara</span></h1>
          <p className="hero-desc-luxury">Where Japanese minimalism meets Indian hospitality. Discover tranquility, sophistication, and genuine warmth in the heart of Gujarat.</p>
          <form className="booking-form-luxury" onSubmit={e => e.preventDefault()}>
            <input type="text" className="booking-input-luxury" placeholder="Check In - Check Out" />
            <input type="text" className="booking-input-luxury" placeholder="Promo Code" />
            <select className="booking-input-luxury">
              <option>1 Guest</option>
              <option>2 Guests</option>
              <option>3 Guests</option>
              <option>4 Guests</option>
            </select>
            <button className="booking-check-btn-luxury">Check Availability</button>
          </form>
        </div>
      </div>
    </section>
  );
}

function SignatureSection() {
  return (
    <section className="signature-section-luxury">
      <h2 className="section-title">Signature Experiences</h2>
      <div className="signature-cards-luxury">
        <div className="signature-card-luxury">
          <div className="signature-icon">🏨</div>
          <div className="signature-title">Luxury Rooms</div>
          <div className="signature-desc">Elegantly designed rooms with modern amenities and Japanese-inspired decor.</div>
        </div>
        <div className="signature-card-luxury">
          <div className="signature-icon">🍽️</div>
          <div className="signature-title">Fine Dining</div>
          <div className="signature-desc">Authentic Japanese and Indian cuisine in our sophisticated restaurant.</div>
        </div>
        <div className="signature-card-luxury">
          <div className="signature-icon">💆‍♂️</div>
          <div className="signature-title">Spa & Wellness</div>
          <div className="signature-desc">Rejuvenating spa treatments and wellness programs for complete relaxation.</div>
        </div>
        <div className="signature-card-luxury">
          <div className="signature-icon">🏋️‍♂️</div>
          <div className="signature-title">Fitness Center</div>
          <div className="signature-desc">State-of-the-art gym equipment for your fitness routine.</div>
        </div>
        <div className="signature-card-luxury">
          <div className="signature-icon">🌿</div>
          <div className="signature-title">Party Lawn</div>
          <div className="signature-desc">Beautiful outdoor space perfect for events and celebrations.</div>
        </div>
        <div className="signature-card-luxury">
          <div className="signature-icon">🍳</div>
          <div className="signature-title">Outdoor Kitchen</div>
          <div className="signature-desc">Experience outdoor cooking and dining in our Japanese-inspired kitchen.</div>
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="trust-section">
      <h2 className="section-title">Why Choose Hotel Akaibara?</h2>
      <div className="trust-cards">
        <div className="trust-card">
          <div className="trust-icon">🏆</div>
          <div className="trust-title">Award-Winning Service</div>
          <div className="trust-desc">Recognized for excellence in hospitality and guest satisfaction.</div>
        </div>
        <div className="trust-card">
          <div className="trust-icon">🔒</div>
          <div className="trust-title">Safety & Privacy</div>
          <div className="trust-desc">Your comfort, safety, and privacy are our top priorities.</div>
        </div>
        <div className="trust-card">
          <div className="trust-icon">🌟</div>
          <div className="trust-title">5-Star Reviews</div>
          <div className="trust-desc">Loved by guests from around the world for our unique blend of luxury and warmth.</div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <h2 className="section-title">What Our Guests Say</h2>
      <div className="testimonials-cards">
        <div className="testimonial-card">
          <div className="testimonial-stars">★★★★★</div>
          <div className="testimonial-text">“A truly luxurious experience! The blend of Japanese and Indian hospitality is unique and unforgettable.”</div>
          <div className="testimonial-author">— Priya S., Mumbai</div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-stars">★★★★★</div>
          <div className="testimonial-text">“Impeccable service, beautiful rooms, and the food was outstanding. Will definitely return!”</div>
          <div className="testimonial-author">— John D., London</div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-stars">★★★★★</div>
          <div className="testimonial-text">“The spa and wellness center was a highlight. I felt completely rejuvenated.”</div>
          <div className="testimonial-author">— Akira T., Tokyo</div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-stars">★★★★★</div>
          <div className="testimonial-text">“Perfect for business and leisure. The staff went above and beyond.”</div>
          <div className="testimonial-author">— Rakesh P., Ahmedabad</div>
        </div>
      </div>
    </section>
  );
}

function AboutSplit() {
  return (
    <div className="about-split">
      <div className="about-split-left">
        <div className="about-hotel-name">HOTEL AKAIBARA, GUJARAT</div>
      </div>
      <div className="about-split-right">
        <div className="about-desc">
          Hotel Akaibara welcomes you into a harmonious blend of Japanese elegance and Indian hospitality. Discover tranquility, sophistication, and genuine warmth in the heart of Gujarat. <span className="about-readmore">Read More...</span>
        </div>
      </div>
    </div>
  );
}

function RoomsSection() {
  const rooms = [
    {
      name: 'Imperial Suite',
      image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=900&q=80',
      desc: 'Our most luxurious suite with a private lounge, king bed, and panoramic city views.',
      amenities: ['King Bed', 'Private Lounge', 'City View', 'Jacuzzi', 'Smart TV', 'Butler Service'],
    },
    {
      name: 'Deluxe Room',
      image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=900&q=80',
      desc: 'Spacious room with elegant decor, work desk, and a relaxing seating area.',
      amenities: ['Queen Bed', 'Work Desk', 'Seating Area', 'Rain Shower', 'Smart TV'],
    },
    {
      name: 'Executive Room',
      image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=900&q=80',
      desc: 'Perfect for business travelers, with high-speed Wi-Fi and complimentary breakfast.',
      amenities: ['Queen Bed', 'High-Speed Wi-Fi', 'Breakfast', 'Coffee Maker', 'Smart TV'],
    },
    {
      name: 'Zen Suite',
      image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80',
      desc: 'Japanese-inspired suite with tatami area, soaking tub, and garden view.',
      amenities: ['Tatami Area', 'Soaking Tub', 'Garden View', 'Tea Set', 'Smart TV'],
    },
  ];
  return (
    <section className="rooms-section-stacked">
      <h2 className="section-title">Our Rooms & Suites</h2>
      <div className="rooms-stacked-list">
        {rooms.map((room, idx) => (
          <div className={`room-stacked${idx % 2 === 1 ? ' reverse' : ''}`} key={idx}>
            <div className="room-stacked-info">
              <div className="room-name">{room.name}</div>
              <div className="room-desc">{room.desc}</div>
              <ul className="room-amenities">
                {room.amenities.map((am, i) => <li key={i}>{am}</li>)}
              </ul>
              <button className="room-book-btn">Book Now</button>
            </div>
            <div className="room-stacked-image-wrap">
              <img src={room.image} alt={room.name} className="room-stacked-image" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="contact-section">
      <h2 className="section-title">Contact Us</h2>
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-card">
            <h3>Get in Touch</h3>
            <form className="contact-form" onSubmit={e => e.preventDefault()}>
              <input type="text" placeholder="Your Name" className="contact-input" />
              <input type="email" placeholder="Your Email" className="contact-input" />
              <input type="tel" placeholder="Your Phone" className="contact-input" />
              <textarea placeholder="Your Message" className="contact-input" rows="4"></textarea>
              <button type="submit" className="contact-submit">Send Message</button>
            </form>
          </div>
          <div className="contact-details">
            <div className="contact-detail-item">
              <h4>Address</h4>
              <p>Hotel Akaibara<br />9369+PF3, Opposite Jetro Park<br />Vitthlapur, Mandal<br />Gujarat 382120<br />India</p>
            </div>
            <div className="contact-detail-item">
              <h4>Contact</h4>
              <p>Reception: +91 2762 222 333<br />Email: info@hotelakaibara.com</p>
            </div>
            <div className="contact-detail-item">
              <h4>Hours</h4>
              <p>Front Desk: 24/7<br />Check-in: After 2:00 PM<br />Check-out: Before 11:00 AM</p>
            </div>
          </div>
        </div>
        <div className="contact-map">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234414.7830251386!2d71.76381111145025!3d23.36175884401745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2385dab09b15%3A0xf39cf197d2d440eb!2sHOTEL%20AKAIBARA!5e0!3m2!1sen!2sin!4v1753088088124!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Hotel Akaibara Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <SignatureSection />
            <TrustSection />
            <TestimonialsSection />
            <AboutSplit />
          </>
        } />
        <Route path="/rooms" element={<RoomsSection />} />
        <Route path="/booking" element={<div>Booking Page (Booking Form, Payment Integration)</div>} />
        <Route path="/gallery" element={<div>Gallery Page (Photos Coming Soon)</div>} />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="/legal" element={<div>Legal Pages (Privacy, Terms, Cancellation Policy)</div>} />
        <Route path="/admin" element={<div>Admin Dashboard (Bookings, Content Management)</div>} />
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
