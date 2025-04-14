import { APP_NAME } from "@/constants";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full wrapper border-t-2">
      <div className="wrapper flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p>
            &copy; {year} {APP_NAME}. All rights reserved.
          </p>
        </div>

        <div className="text-center md:text-right mt-4 md:mt-0">
          <a
            href="/privacy-policy"
            className="text-sm hover:text-gray-400 mr-6"
          >
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="text-sm hover:text-gray-400">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
