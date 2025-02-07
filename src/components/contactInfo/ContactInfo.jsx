import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <div className="max-w-lg mx-auto p-spacing-2 bg-light rounded-lg shadow-lg mt-8">
      <h2 className="section-subtitle text-primary">Información de Contacto</h2>
      <ul className="space-y-3">
        <li className="flex items-center">
          <FaMapMarkerAlt className="section-subtitle-legal  mr-5" />
          <span className='li-template-contact'>Av. El Inca y de los Madroños, conjunto El Inca no. xx</span>
        </li>
        <li className="flex items-center">
          <FaPhoneAlt className="section-subtitle-contact mr-5" />
          <span className='li-template-contact'>(593) 994399693</span>
        </li>
        <li className="flex items-center">
          <FaEnvelope className="section-subtitle-contact mr-5" />
          <span className='li-template-contact'>info@biensegurospro.com  /  bienseguros2014@gmail.com</span>
        </li>
        <li className="flex items-center">
          <FaClock className="section-subtitle-contact mr-5" />
          <span className='li-template-contact'>Lunes - Viernes: 9 AM - 5 PM</span>
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;
