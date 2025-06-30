import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: "https://github.com/rridwan27",
      icon: FaGithub,
      label: "GitHub",
      hoverColor: "hover:text-purple-400",
    },
    {
      href: "https://linkedin.com/in/yourusername",
      icon: FaLinkedin,
      label: "LinkedIn",
      hoverColor: "hover:text-blue-400",
    },
    {
      href: "https://x.com/arnob000007",
      icon: FaTwitter,
      label: "Twitter",
      hoverColor: "hover:text-sky-400",
    },
    {
      href: "mailto:ridwanur13@gmail.com",
      icon: FaEnvelope,
      label: "Email",
      hoverColor: "hover:text-green-400",
    },
  ];

  return (
    <footer className=" text-neutral-400 py-12 px-4 border-t border-neutral-800/50 backdrop-blur-sm">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-blue-500/5 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Main content */}
        <div className="flex flex-col items-center space-y-8">
          {/* Brand/Name */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-white mb-2 tracking-wide">
              Mohammad Ridwanur Rahman
            </h3>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {socialLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={
                    link.href.startsWith("mailto:") ? undefined : "_blank"
                  }
                  rel={
                    link.href.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className={`group relative p-3 rounded-full bg-neutral-800/50 backdrop-blur-sm border border-neutral-700/50 transition-all duration-300 hover:scale-110 hover:bg-neutral-700/50 hover:border-neutral-600/50 hover:shadow-lg ${link.hoverColor}`}
                  aria-label={link.label}
                >
                  <IconComponent
                    size={20}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />

                  {/* Tooltip */}
                  <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-neutral-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                    {link.label}
                  </span>
                </a>
              );
            })}
          </div>

          {/* Divider */}
          <div className="w-full max-w-md mx-auto">
            <div className="h-px bg-gradient-to-r from-transparent via-neutral-600 to-transparent" />
          </div>

          {/* Footer bottom */}
          <div className="text-center space-y-2">
            <p className="text-xs text-neutral-500 flex items-center justify-center gap-1">
              © {currentYear} Mohammad Ridwanur Rahman. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
