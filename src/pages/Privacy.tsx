import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <Link to="/" className="text-blue-600 hover:text-blue-800 text-sm mb-8 inline-block">
          ← Вернуться на главную
        </Link>

        <h1 className="text-3xl font-bold mb-8">Политика конфиденциальности</h1>

        <p className="text-neutral-500 text-sm mb-8">Дата последнего обновления: 1 апреля 2026 г.</p>

        <div className="prose prose-neutral max-w-none space-y-6 text-neutral-700">
          <section>
            <h2 className="text-xl font-semibold mb-3 text-neutral-900">1. Общие положения</h2>
            <p>
              Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных
              пользователей сайта <strong>5levers.pro</strong> (далее — «Сайт»), принадлежащего ИП Колесников Андрей
              (далее — «Оператор»).
            </p>
            <p className="mt-2">
              Используя Сайт, вы соглашаетесь с условиями настоящей Политики. Если вы не согласны с условиями,
              пожалуйста, прекратите использование Сайта.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-neutral-900">2. Какие данные мы собираем</h2>
            <p>При использовании Сайта мы можем собирать следующие данные:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Имя и контактные данные (e-mail, телефон) — при заполнении форм обратной связи;</li>
              <li>Технические данные: IP-адрес, тип браузера, страницы посещений — в целях аналитики;</li>
              <li>Данные, добровольно предоставленные вами в переписке или при регистрации.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-neutral-900">3. Цели обработки данных</h2>
            <p>Персональные данные используются исключительно для:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Ответа на ваши запросы и обращения;</li>
              <li>Предоставления запрошенных услуг;</li>
              <li>Улучшения работы Сайта и качества сервиса;</li>
              <li>Отправки информационных материалов (только при наличии вашего согласия).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-neutral-900">4. Передача данных третьим лицам</h2>
            <p>
              Мы не продаём и не передаём ваши персональные данные третьим лицам без вашего согласия,
              за исключением случаев, предусмотренных законодательством Российской Федерации.
            </p>
            <p className="mt-2">
              Для обеспечения работы Сайта могут использоваться сервисы аналитики (например, Яндекс.Метрика),
              которые обрабатывают данные в соответствии со своими политиками конфиденциальности.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-neutral-900">5. Хранение и защита данных</h2>
            <p>
              Мы принимаем технические и организационные меры для защиты ваших данных от несанкционированного
              доступа, изменения, раскрытия или уничтожения. Данные хранятся не дольше, чем необходимо для
              достижения целей их сбора.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-neutral-900">6. Ваши права</h2>
            <p>Вы имеете право:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Запросить доступ к своим персональным данным;</li>
              <li>Потребовать исправления неточных данных;</li>
              <li>Отозвать согласие на обработку данных;</li>
              <li>Потребовать удаления своих данных.</li>
            </ul>
            <p className="mt-2">
              Для реализации прав обратитесь по адресу:{" "}
              <a href="mailto:akolesnikov@5levers.pro" className="text-blue-600 hover:underline">
                akolesnikov@5levers.pro
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-neutral-900">7. Cookies</h2>
            <p>
              Сайт может использовать файлы cookie для улучшения пользовательского опыта. Вы можете
              отключить cookie в настройках браузера, однако это может повлиять на работу Сайта.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-neutral-900">8. Изменения политики</h2>
            <p>
              Мы оставляем за собой право изменять настоящую Политику. Актуальная версия всегда доступна
              на этой странице. Продолжение использования Сайта после публикации изменений означает ваше
              согласие с обновлённой Политикой.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-neutral-900">9. Контакты</h2>
            <p>
              По вопросам, связанным с обработкой персональных данных, обращайтесь:{" "}
              <a href="mailto:akolesnikov@5levers.pro" className="text-blue-600 hover:underline">
                akolesnikov@5levers.pro
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
