import logoImage from "@/assets/logo-icon.png";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <img
              src={logoImage}
              alt="FiveLevers Logo"
              className="h-16 w-16 mb-4 drop-shadow-lg"
              style={{ filter: "brightness(1.1)" }}
            />
            <p className="text-neutral-400 text-sm">
              Пять рычагов измеримого роста
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Продукты</h3>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><a href="/scaling" className="hover:text-white transition-colors">Масштабирование продуктов</a></li>
              <li><a href="/validate-idea" className="hover:text-white transition-colors">Проверка гипотез с ИИ</a></li>
              <li><a href="/product-factory" className="hover:text-white transition-colors">Продуктовая фабрика</a></li>
              <li><a href="/assessment" className="hover:text-white transition-colors">Ассесмент продактов</a></li>
              <li><a href="/portfolio-processes" className="hover:text-white transition-colors">Продуктовые портфели</a></li>
              <li><a href="/training" className="hover:text-white transition-colors">Обучение команд</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Компания</h3>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><a href="/cases" className="hover:text-white transition-colors">Кейсы и результаты</a></li>
              <li><a href="/privacy" className="hover:text-white transition-colors">Политика конфиденциальности</a></li>
              <li><a href="/terms" className="hover:text-white transition-colors">Условия использования</a></li>
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
              <li>Россия, СНГ, MENA</li>
              <li className="pt-2">
                <a href="https://t.me/askolesnikov" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Telegram</a>
                {" · "}
                <a href="https://www.linkedin.com/in/askolesnikov" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 text-center text-sm text-neutral-500">
          <p>© 2026 FiveLevers. Превращаем продуктовый подход в контур управления ростом.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
