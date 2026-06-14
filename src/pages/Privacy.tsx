import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Privacy = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container flex items-center h-16 gap-4">
          <button onClick={() => navigate('/')} className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
            <Icon name="ArrowLeft" size={18} />
            <span className="text-sm">Назад</span>
          </button>
          <div className="w-px h-5 bg-border" />
          <img src="https://cdn.poehali.dev/projects/38020c7c-aebd-43d2-86be-d035ce339c72/bucket/ea2a6d9d-ca6e-49de-8172-b3cd58551695.png" alt="ТЕО-строй" className="h-8 w-auto" />
        </div>
      </header>

      {/* Content */}
      <main className="container py-16 max-w-3xl">
        <div className="flex items-center gap-3 mb-8">
          <span className="font-display font-bold text-accent text-lg">—</span>
          <span className="font-display tracking-[0.2em] text-sm uppercase text-muted-foreground">Документ</span>
        </div>
        <h1 className="font-display font-bold uppercase text-4xl md:text-5xl leading-tight mb-10">
          Политика обработки<br />персональных данных
        </h1>

        <div className="space-y-8 text-foreground/80 leading-relaxed">
          <Section title="1. Общие положения">
            <p>Настоящая Политика обработки персональных данных (далее — Политика) составлена в соответствии с требованиями Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных» и определяет порядок обработки персональных данных, осуществляемой ООО «ТЕО-строй» (далее — Оператор).</p>
            <p className="mt-3">Оператор обеспечивает защиту обрабатываемых персональных данных от несанкционированного доступа и разглашения, неправомерного использования или утраты.</p>
          </Section>

          <Section title="2. Оператор">
            <p><strong>Наименование:</strong> ООО «ТЕО-строй»</p>
            <p className="mt-2"><strong>Адрес:</strong> г. Екатеринбург, ул. 8 Марта, 120Б, 4 этаж</p>
            <p className="mt-2"><strong>Телефон:</strong> +7 343 266 32 99</p>
            <p className="mt-2"><strong>E-mail:</strong> teo.stroy@bk.ru</p>
          </Section>

          <Section title="3. Цели обработки персональных данных">
            <p>Оператор обрабатывает персональные данные в следующих целях:</p>
            <ul className="mt-3 space-y-2 list-none">
              {[
                'Обработка входящих заявок и обращений пользователей сайта',
                'Подготовка коммерческих предложений, смет и договоров',
                'Связь с клиентом по вопросам оказания строительных услуг',
                'Исполнение договорных обязательств',
                'Направление информационных и рекламных сообщений (с согласия субъекта)',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-accent mt-1 shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="4. Перечень обрабатываемых данных">
            <p>Оператор обрабатывает следующие персональные данные:</p>
            <ul className="mt-3 space-y-2 list-none">
              {['Фамилия, имя, отчество', 'Номер телефона', 'Адрес электронной почты', 'Адрес объекта (при необходимости)'].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-accent mt-1 shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="5. Правовые основания обработки">
            <p>Обработка персональных данных осуществляется на следующих основаниях:</p>
            <ul className="mt-3 space-y-2 list-none">
              {[
                'Согласие субъекта персональных данных (ст. 9 Федерального закона № 152-ФЗ)',
                'Исполнение договора, стороной которого является субъект персональных данных',
                'Выполнение требований законодательства Российской Федерации',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-accent mt-1 shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="6. Порядок и условия обработки">
            <p>Обработка персональных данных осуществляется с соблюдением принципов и правил, предусмотренных Федеральным законом № 152-ФЗ. Оператор не передаёт персональные данные третьим лицам без согласия субъекта, за исключением случаев, предусмотренных действующим законодательством.</p>
            <p className="mt-3">Срок обработки персональных данных определяется сроком действия договора с субъектом, либо до момента отзыва согласия на обработку.</p>
          </Section>

          <Section title="7. Права субъекта персональных данных">
            <p>Субъект персональных данных вправе:</p>
            <ul className="mt-3 space-y-2 list-none">
              {[
                'Получить сведения об обработке своих персональных данных',
                'Потребовать уточнения, блокирования или уничтожения персональных данных',
                'Отозвать согласие на обработку персональных данных',
                'Обжаловать действия Оператора в уполномоченный орган по защите прав субъектов персональных данных (Роскомнадзор)',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-accent mt-1 shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">Для реализации своих прав субъект может обратиться по адресу: <strong>teo.stroy@bk.ru</strong></p>
          </Section>

          <Section title="8. Защита персональных данных">
            <p>Оператор принимает необходимые организационные и технические меры для защиты персональных данных от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования, распространения, а также от иных неправомерных действий.</p>
          </Section>

          <Section title="9. Актуальность политики">
            <p>Настоящая Политика действует бессрочно до замены её новой версией. Оператор оставляет за собой право вносить изменения в Политику. Актуальная версия размещается на сайте компании.</p>
            <p className="mt-3 text-sm text-muted-foreground">Дата последнего обновления: июнь 2026 г.</p>
          </Section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 mt-16">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <img src="https://cdn.poehali.dev/projects/38020c7c-aebd-43d2-86be-d035ce339c72/bucket/ea2a6d9d-ca6e-49de-8172-b3cd58551695.png" alt="ТЕО-строй" className="h-9 w-auto bg-white rounded px-3 py-1.5" />
          <div className="text-sm text-primary-foreground/70">© 2008–2026 ТЕО-строй. Строительство под ключ в Екатеринбурге.</div>
        </div>
      </footer>
    </div>
  );
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="border-t border-border pt-8">
    <h2 className="font-display font-semibold text-xl text-foreground mb-4">{title}</h2>
    {children}
  </div>
);

export default Privacy;
