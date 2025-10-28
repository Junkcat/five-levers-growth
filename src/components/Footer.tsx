import logoImage from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <img 
              src={logoImage} 
              alt="FiveLevers Logo" 
              className="h-16 w-auto mb-4"
            />
            <p className="text-neutral-400 text-sm">
              Пять рычагов измеримого роста
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Методология</h3>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><a href="#product" className="hover:text-white transition-colors">Product</a></li>
              <li><a href="#channels" className="hover:text-white transition-colors">Channels</a></li>
              <li><a href="#data" className="hover:text-white transition-colors">Data</a></li>
              <li><a href="#economics" className="hover:text-white transition-colors">Economics</a></li>
              <li><a href="#people" className="hover:text-white transition-colors">People</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Ресурсы</h3>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><a href="#cases" className="hover:text-white transition-colors">Кейсы</a></li>
              <li><a href="#academy" className="hover:text-white transition-colors">Академия</a></li>
              <li><a href="#playbooks" className="hover:text-white transition-colors">Плейбуки</a></li>
              <li><a href="#blog" className="hover:text-white transition-colors">Блог</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <a href="mailto:akolesnikov@5levers.pro" className="hover:text-white transition-colors">
                  akolesnikov@5levers.pro
                </a>
              </li>
              <li>РФ, СНГ, MENA</li>
              <li className="pt-2">
                <a href="https://t.me/askolesnikov" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Telegram</a> • 
                <a href="https://www.linkedin.com/in/askolesnikov" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors ml-2">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500">
          <p>© 2025 FiveLevers. Move what moves the P&L.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#privacy" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#terms" className="hover:text-white transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
