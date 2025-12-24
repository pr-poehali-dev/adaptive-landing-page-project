import { useState, useEffect } from 'react';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const sections = [
    { id: 'hero', label: 'Главная' },
    { id: 'about', label: 'О нас' },
    { id: 'services', label: 'Услуги' },
    { id: 'portfolio', label: 'Портфолио' },
    { id: 'team', label: 'Команда' },
    { id: 'contact', label: 'Контакты' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center items-center h-20 gap-12">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`text-sm font-medium transition-all duration-300 relative ${
                  activeSection === section.id
                    ? 'text-[hsl(var(--yellow))]'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {section.label}
                {activeSection === section.id && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[hsl(var(--yellow))]" />
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <section id="hero" className="h-screen relative flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30" />
        <h1 className="relative z-10 text-[hsl(var(--yellow))] text-8xl md:text-9xl font-bold tracking-wider">
          PODVAL
        </h1>
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center bg-white px-6">
        <div className="max-w-4xl text-center">
          <h2 className="text-6xl font-bold mb-8 text-black">О нас</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Мы создаём пространства, где минимализм встречается с функциональностью. 
            Каждая деталь продумана до совершенства, каждая линия имеет значение.
          </p>
        </div>
      </section>

      <section id="services" className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
        <div className="max-w-6xl w-full">
          <h2 className="text-6xl font-bold mb-16 text-center text-black">Услуги</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {['Дизайн', 'Разработка', 'Консалтинг'].map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-12 hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="w-16 h-16 bg-[hsl(var(--yellow))] mb-8 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-semibold mb-4 text-black">{service}</h3>
                <p className="text-gray-600">
                  Профессиональный подход к каждому проекту с вниманием к деталям
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="min-h-screen flex items-center justify-center bg-white px-6">
        <div className="max-w-6xl w-full">
          <h2 className="text-6xl font-bold mb-16 text-center text-black">Портфолио</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div 
                key={item} 
                className="aspect-[4/3] bg-gray-200 hover:scale-[1.02] transition-transform duration-500"
              >
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  Проект {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
        <div className="max-w-6xl w-full">
          <h2 className="text-6xl font-bold mb-16 text-center text-black">Команда</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {['Анна', 'Дмитрий', 'Елена', 'Максим'].map((name, index) => (
              <div key={index} className="text-center">
                <div className="w-48 h-48 bg-gray-300 rounded-full mx-auto mb-6 hover:scale-105 transition-transform duration-300" />
                <h3 className="text-xl font-semibold text-black">{name}</h3>
                <p className="text-gray-600 mt-2">Специалист</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center bg-black px-6">
        <div className="max-w-4xl text-center">
          <h2 className="text-6xl font-bold mb-8 text-white">Контакты</h2>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            Готовы начать новый проект? Свяжитесь с нами
          </p>
          <div className="flex flex-col gap-4 text-[hsl(var(--yellow))] text-2xl">
            <a href="mailto:info@podval.com" className="hover:opacity-70 transition-opacity">
              info@podval.com
            </a>
            <a href="tel:+79999999999" className="hover:opacity-70 transition-opacity">
              +7 999 999 99 99
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
