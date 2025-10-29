import { Card } from "@/components/ui/card";

const results = [
  {
    metric: "Активация",
    description: "регистрация → подача заявки",
    before: "12%",
    after: "28%",
    change: "+133%",
    color: "text-success"
  },
  {
    metric: "CAC",
    description: "",
    before: "$250",
    after: "$177,5",
    change: "−29%",
    color: "text-success"
  },
  {
    metric: "Конверсия",
    description: "Одобрение → Выдача",
    before: "45%",
    after: "67%",
    change: "+22 п.п.",
    color: "text-success"
  },
  {
    metric: "Contribution Margin",
    description: "",
    before: "18%",
    after: "26%",
    change: "+8 п.п.",
    color: "text-success"
  }
];

const additionalMetric = {
  label: "Доп. эффект (операционный)",
  metric: "Median Time-to-Cash",
  before: "3.6 дня",
  after: "1.5 дня",
  change: "−58%",
  color: "text-success"
};

const Results = () => {
  return (
    <section className="py-20 bg-neutral-50" id="results" style={{ scrollMarginTop: '80px' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-4">
            Результаты, которые измеряем
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Реальные метрики из проектов — фокус на измеримом росте P&L
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Card className="p-8 bg-white">
            <div className="mb-8">
              <div className="inline-block px-4 py-2 bg-primary-100 text-primary-800 rounded-lg font-semibold mb-4">
                Кейс: Финтех-сервис МСБ для крупного банка в СНГ
              </div>
              <p className="text-lg text-muted-foreground mb-2">
                <strong className="text-foreground">Контекст.</strong> Онлайн-кредитование малого бизнеса.
              </p>
              <p className="text-lg text-muted-foreground">
                <strong className="text-foreground">Проблемы.</strong> Низкая активация после регистрации, высокий CAC в контексте, длинный time-to-cash и провалы на этапах KYC/доков.
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold text-foreground mb-4">Метрики «до → после»</h3>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6 mb-6">
              {results.map((result, index) => (
                <div key={index} className="text-center">
                  <div className="text-sm font-semibold text-foreground mb-1">{result.metric}</div>
                  {result.description && (
                    <div className="text-xs text-muted-foreground mb-2">{result.description}</div>
                  )}
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-lg text-neutral-600 line-through">{result.before}</span>
                    <span className="text-2xl font-bold text-primary-800">→</span>
                    <span className="text-2xl font-bold text-foreground">{result.after}</span>
                  </div>
                  <div className={`text-xl font-bold ${result.color}`}>
                    {result.change}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mb-8 p-4 bg-neutral-50 rounded-lg border border-neutral-200">
              <div className="text-center">
                <div className="text-xs text-muted-foreground mb-1">{additionalMetric.label}</div>
                <div className="text-sm font-semibold text-foreground mb-2">{additionalMetric.metric}</div>
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className="text-base text-neutral-600 line-through">{additionalMetric.before}</span>
                  <span className="text-xl font-bold text-primary-800">→</span>
                  <span className="text-xl font-bold text-foreground">{additionalMetric.after}</span>
                </div>
                <div className={`text-lg font-bold ${additionalMetric.color}`}>
                  {additionalMetric.change}
                </div>
              </div>
            </div>
            
            <div className="border-t border-neutral-200 pt-6">
              <p className="text-sm font-semibold text-foreground mb-4">Что именно делали (по рычагам)</p>
              
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div className="space-y-3">
                  <div>
                    <p className="font-bold text-foreground mb-3 text-base">● Product</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="mr-2 text-primary-600 font-bold">•</span>
                        <span>Сократили онбординг до 4 шагов с прогресс-баром и динамическим чек-листом доков.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary-600 font-bold">•</span>
                        <span>Ранний soft-скоринг до полной анкеты, чтобы отсеивать «непроход» раньше.</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="font-bold text-foreground mb-3 text-base">● Channels</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="mr-2 text-primary-600 font-bold">•</span>
                        <span>Перенесли бюджет из поиска в таргет + контент-лидмагниты.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary-600 font-bold">•</span>
                        <span>Запустили B2B-партнёрки (бухсервисы, PSP/эквайринг, маркетплейсы поставщиков).</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <p className="font-bold text-foreground mb-3 text-base">● Data</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="mr-2 text-primary-600 font-bold">•</span>
                        <span>Ввели event-схему и воронки в Amplitude: reg → kyc → docs → submit → approve → disburse.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary-600 font-bold">•</span>
                        <span>Атрибуция к выдаче/марже (CPD, unit-экономика по когорте), а не к регистрации.</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="font-bold text-foreground mb-3 text-base">● Economics (без прайс-тестов)</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="mr-2 text-primary-600 font-bold">•</span>
                        <span>CoR↓: новые поведенческие признаки + антифрод; ops-cost↓: авто-решения для «чистых» кейсов.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary-600 font-bold">•</span>
                        <span>Funding mix удешевили часть портфеля; настроили лимит/срок (не цену) под риск-сегменты.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-neutral-50 rounded-lg border border-neutral-200">
              <p className="text-sm text-foreground italic">
                <strong>Отзыв CPO:</strong> «За 12 недель мы сократили путь до денег и научили команду работать с воронкой "до выдачи", скорингом и каналами. Плейбуки по онбордингу, источникам и cut-off тестам используем до сих пор.»
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Results;
