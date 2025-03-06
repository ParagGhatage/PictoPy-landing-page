import  { FC, useState } from "react";
import { Apple, Monitor, Laptop } from "lucide-react"; // Corrected icon imports
import { Button } from "@/components/ui/button";
import PictopyLogo from "@/assets/PictoPy_Logo.png"; // Adjust this import path as needed

const PictopyLanding: FC = () => {
  // State for showing the notification
  const [downloadStarted, setDownloadStarted] = useState<string | null>(null);

  // Function to handle button click and show the notification
  const handleDownloadClick = (platform: string) => {
    setDownloadStarted(`Download for ${platform} started!`);
    // Hide the notification after 3 seconds
    setTimeout(() => {
      setDownloadStarted(null);
    }, 3000);
  };

  return (
    <section className="w-full py-12 md:py-24 bg-white dark:bg-black transition-colors duration-300 relative overflow-hidden">
      {/* Morphing Background Gradient */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg
          className="w-full h-full opacity-20 dark:opacity-10 transition-all duration-500"
          viewBox="0 0 1440 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="blueToRoseGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                stopColor="var(--gradient-start)"
                className="transition-colors duration-500"
              />
              <stop
                offset="100%"
                stopColor="var(--gradient-end)"
                className="transition-colors duration-500"
              />
            </linearGradient>
          </defs>
          <path
            fill="url(#blueToRoseGradient)"
            d="M0,0V800H1440V0C1200,200,800,400,400,600C200,700,100,750,0,800Z"
          >
            <animate
              attributeName="d"
              dur="20s"
              repeatCount="indefinite"
              values="M0,0V800H1440V0C1200,200,800,400,400,600C200,700,100,750,0,800Z;
                      M0,0V800H1440V0C1200,400,800,600,400,400C200,300,100,250,0,200Z;
                      M0,0V800H1440V0C1200,200,800,400,400,600C200,700,100,750,0,800Z"
              keyTimes="0; 0.5; 1"
              keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
              calcMode="spline"
            />
          </path>
        </svg>

        {/* Floating Circles Animation */}
        <svg
          className="absolute inset-0 w-full h-full opacity-30 dark:opacity-20 pointer-events-none"
          viewBox="0 0 1440 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          {[1, 2, 3, 4, 5].map((circle) => (
            <circle
              key={circle}
              cx={`${Math.random() * 1440}`}
              cy={`${Math.random() * 800}`}
              r={`${20 + Math.random() * 50}`}
              fill="rgba(96, 165, 250, 0.1)"
              className="dark:fill-blue-900/10"
            >
              <animate
                attributeName="cx"
                values={`${Math.random() * 1440};${Math.random() * 1440};${Math.random() * 1440}`}
                dur={`${30 + Math.random() * 40}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="cy"
                values={`${Math.random() * 800};${Math.random() * 800};${Math.random() * 800}`}
                dur={`${30 + Math.random() * 40}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}
        </svg>
      </div>

      {/* Content */}
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Heading with Gradient Text and Logo */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <img
              src={PictopyLogo}
              alt="Pictopy Logo"
              className="h-16 w-16 object-contain"
            />
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-green-500 transition-all duration-300">
              PictoPy
            </h1>
          </div>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-green-700 dark:text-yellow-300 max-w-3xl mb-8 transition-colors duration-300">
            Organize your photos effortlessly. Available for Mac, Windows, and Linux.
          </p>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 h-12 px-8 transition-all duration-300 
                         border-2 border-transparent hover:border-black dark:hover:border-white 
                         transform hover:-translate-y-1 hover:shadow-lg"
              size="lg"
              onClick={() => handleDownloadClick("Mac")}
            >
              <Apple className="h-5 w-5 mr-2" />
              Download for Mac
            </Button>
            <Button
              className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 h-12 px-8 transition-all duration-300 
                         border-2 border-transparent hover:border-black dark:hover:border-white 
                         transform hover:-translate-y-1 hover:shadow-lg"
              size="lg"
              variant="outline"
              onClick={() => handleDownloadClick("Windows")}
            >
              <Monitor className="h-5 w-5 mr-2" />
              Download for Windows
            </Button>
            <Button
              className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 h-12 px-8 transition-all duration-300 
                         border-2 border-transparent hover:border-black dark:hover:border-white 
                         transform hover:-translate-y-1 hover:shadow-lg"
              size="lg"
              variant="outline"
              onClick={() => handleDownloadClick("Linux")}
            >
              <Laptop className="h-5 w-5 mr-2" />
              Download for Linux
            </Button>
          </div>

          {/* Download Notification (Popup) */}
          {downloadStarted && (
            <div
              className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-3 px-6 rounded-lg shadow-lg text-lg opacity-0 animate-fadeInUp"
              style={{ animationDuration: "1s" }}
            >
              {downloadStarted}
            </div>
          )}
        </div>
      </div>

      {/* CSS Variables for Adaptive Gradient */}
      <style>
        {`
          :root {
            --gradient-start: rgb(246, 255, 0); /* Light mode blue */
            --gradient-end: rgb(38, 255, 0); /* Light mode pink */
            color-scheme: light dark; /* Explicitly support both color schemes */
          }
          .dark {
            --gradient-start: rgb(0, 255, 17); /* Dark mode deep blue */
            --gradient-end: rgb(227, 255, 14); /* Dark mode deep pink */
          }

          /* Animation for the popup */
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeInUp {
            animation: fadeInUp 1s ease-out forwards;
          }
        `}
      </style>
    </section>
  );
};

export default PictopyLanding;