import { Link } from "react-router-dom";
import { Mail, MapPin, Calendar, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Conference Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">S</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold">SNGC 2026</h3>
                <p className="text-primary-foreground/80 text-sm">
                  Cyber-Physical Systems Conference
                </p>
              </div>
            </div>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>September 16-18, 2026</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Cardiff, UK (Hybrid)</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4" />
                <span>www.sngc-conf.co.uk</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link to="/call-for-papers" className="hover:text-white transition-smooth">
                  Call for Papers
                </Link>
              </li>
              <li>
                <Link to="/tracks" className="hover:text-white transition-smooth">
                  Conference Tracks
                </Link>
              </li>
              <li>
                <Link to="/registration" className="hover:text-white transition-smooth">
                  Registration
                </Link>
              </li>
              <li>
                <Link to="/venue" className="hover:text-white transition-smooth">
                  Venue & Travel
                </Link>
              </li>
              <li>
                <Link to="/speakers" className="hover:text-white transition-smooth">
                  Keynote Speakers
                </Link>
              </li>
            </ul>
          </div>

          {/* Important Dates */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Important Dates</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Paper Submission: March 27, 2026</li>
              <li>Notification: June 12, 2026</li>
              <li>Camera-ready: August 15, 2026</li>
              <li>Early Registration: June 30, 2026</li>
              <li>Conference: September 16-18, 2026</li>
            </ul>
          </div>

          {/* Organizers */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Organized by</h3>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <p>IEEE Trustworthy IoT Working Group</p>
              <p>IEEE TAR-AI Special Interest Group</p>
              <p>Cardiff Metropolitan University</p>
              <div className="pt-2">
                <p className="text-xs text-primary-foreground/60">
                  Technically co-sponsored by IEEE Computational Intelligence Society
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/80">
            <p>&copy; 2024 SNGC 2026. All rights reserved.</p>
            <div className="flex items-center space-x-2 mt-4 md:mt-0">
              <Mail className="w-4 h-4" />
              <a 
                href="mailto:info@sngc-conf.co.uk" 
                className="hover:text-white transition-smooth"
              >
                info@sngc-conf.co.uk
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;