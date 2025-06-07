import { Link } from "react-router-dom";
import { getContactMethods } from "@/lib/utils";

const Footer = () => {
  const { phone, email, businessHours } = getContactMethods();

  const serviceLinks = [
    { name: "Office Plant Design", href: "/office-plant-design" },
    { name: "Plant Care Services", href: "/office-plant-care" },
    { name: "Plant Doctor", href: "/plant-doctor" },
    { name: "Corporate Gifting", href: "/corporate-gifting" },
    { name: "Team Workshops", href: "/workshops" },
    { name: "Smiles for Succulents", href: "/smiles-for-succulents" },
  ];

  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact-us" },
    { name: "FAQ", href: "/faq" },
  ];

  const socialLinks = [
    { name: "Facebook", href: "#", icon: "facebook" },
    { name: "Instagram", href: "#", icon: "instagram" },
    { name: "LinkedIn", href: "#", icon: "linkedin" },
  ];

  return (
    <footer className="bg-forest text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-sage rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">🌱</span>
              </div>
              <span className="text-xl font-bold">Atlanta Houseplants</span>
            </div>
            <p className="text-gray-300 mb-4">
              Bringing wellness, beauty, and productivity benefits of living plants to homes, 
              offices, and hospitality venues across Metro Atlanta.
            </p>
            <div className="space-y-2 text-sm">
              <p className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={`tel:${phone}`} className="hover:text-sage transition-colors">{phone}</a>
              </p>
              <p className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${email}`} className="hover:text-sage transition-colors">{email}</a>
              </p>
              <p className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{businessHours}</span>
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-gray-300 hover:text-sage transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-gray-300 hover:text-sage transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <p className="text-gray-300 text-sm mb-4">
              Follow us for plant care tips and inspiration
            </p>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-8 h-8 bg-sage rounded-full flex items-center justify-center hover:bg-sage-light transition-colors"
                  aria-label={social.name}
                >
                  {/* TODO: Replace with actual social icons */}
                  <span className="text-xs">📱</span>
                </a>
              ))}
            </div>
            <div className="text-sm text-gray-300">
              <p className="mb-1">Service Area:</p>
              <p>Within 25 miles of downtown Atlanta</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-forest-light mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2024 Atlanta Houseplants, LLC. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-sage text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-300 hover:text-sage text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
