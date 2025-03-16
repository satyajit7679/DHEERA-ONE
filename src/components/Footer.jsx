function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-6 w-full text-center mt-auto">
        <p className="text-sm sm:text-base">
          © {new Date().getFullYear()} Stock Calculator. All rights reserved.
        </p>
      </footer>
    );
  }
  
  export default Footer;
  