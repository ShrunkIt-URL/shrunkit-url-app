import { useEffect } from "react";
import './styles.css'
import logo from '../../../assets/Logo.png'

export const HeaderPage = () => {
  useEffect(() => {
    const header = document.querySelector('.header-container');
    if (header) {
      setTimeout(() => {
        header.classList.add('header-animate');
      }, 100);
    }

    const handleScroll = () => {
      if (header) {
        if (window.scrollY > 0) {
          header.classList.add('header-scrolled');
        } else {
          header.classList.remove('header-scrolled');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="header-container">
      <header className="header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="header-title">ShrunkIt URL</h1>
      </header>
    </div>
  );
};