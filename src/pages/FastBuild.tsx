import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const TYPES = [
  { icon: 'Warehouse', title: 'Склады и ангары', desc: 'Промышленные склады, зернохранилища, ангары для техники. Пролёт до 60 м без промежуточных опор.' },
  { icon: 'Factory', title: 'Производственные здания', desc: 'Цеха, заводские корпуса, мастерские. Возможна установка мостовых кранов и технологических площадок.' },
  { icon: 'Store', title: 'Торговые объекты', desc: 'Торговые центры, павильоны, супермаркеты, рынки. Любая планировка и отделка фасада.' },
  { icon: 'Car', title: 'Автосервисы и автосалоны', desc: 'Боксы для техобслуживания, шиномонтаж, автомойки, автосалоны с шоурумом.' },
  { icon: 'Dumbbell', title: 'Спортивные сооружения', desc: 'Крытые арены, спортзалы, манежи, крытые корты. Высокие пролёты, оптимальная акустика.' },
  { icon: 'Building', title: 'Административные здания', desc: 'Офисные здания, бизнес-центры, КПП, модульные офисы на производстве.' },
];

const ADVANTAGES = [
  { icon: 'Zap', title: 'Короткие сроки', desc: 'Строительство в 2–3 раза быстрее, чем из традиционных материалов. Объект 1000 м² — от 60 дней.' },
  { icon: 'Wallet', title: 'Экономия до 40%', desc: 'Заводское изготовление конструкций и минимальный ручной труд на площадке снижают стоимость.' },
  { icon: 'Thermometer', title: 'Тепло и комфорт', desc: 'Сэндвич-панели с утеплителем 150–200 мм обеспечивают теплопотери ниже норм СНиП.' },
  { icon: 'Shield', title: 'Долговечность', desc: 'Металлические конструкции с антикоррозийным покрытием служат 50+ лет без капитального ремонта.' },
  { icon: 'Maximize', title: 'Большие пролёты', desc: 'Свободное пространство без колонн до 60 м — максимальная гибкость планировки.' },
  { icon: 'RefreshCw', title: 'Возможность расширения', desc: 'Модульная система позволяет достраивать здание без остановки производства.' },
];

const STAGES = [
  { n: '01', title: 'Проектирование', desc: 'Разработка проекта с учётом нагрузок, климатической зоны и требований заказчика. Расчёт конструкций.' },
  { n: '02', title: 'Изготовление', desc: 'Производство металлоконструкций и сэндвич-панелей на заводе под конкретный проект.' },
  { n: '03', title: 'Фундамент', desc: 'Устройство фундамента (свайный, ленточный или плитный) в зависимости от грунта и нагрузки.' },
  { n: '04', title: 'Монтаж каркаса', desc: 'Сборка металлического каркаса здания. Высокая точность — все элементы заводского изготовления.' },
  { n: '05', title: 'Ограждающие конструкции', desc: 'Монтаж кровли и стеновых сэндвич-панелей, установка окон, ворот и дверных блоков.' },
  { n: '06', title: 'Сдача объекта', desc: 'Финишные работы, инженерные сети, комплектация документации и передача объекта заказчику.' },
];

const PRICES = [
  { name: 'Каркас здания (монтаж)', unit: 'тонна', price: 'от 18 000 ₽' },
  { name: 'Кровля из сэндвич-панелей', unit: 'м²', price: 'от 1 800 ₽' },
  { name: 'Стены из сэндвич-панелей', unit: 'м²', price: 'от 1 600 ₽' },
  { name: 'Ворота секционные', unit: 'шт.', price: 'от 65 000 ₽' },
  { name: 'Фундамент (свайный)', unit: 'свая', price: 'от 4 500 ₽' },
  { name: 'Здание под ключ (эконом)', unit: 'м²', price: 'от 8 500 ₽' },
  { name: 'Здание под ключ (комфорт)', unit: 'м²', price: 'от 12 000 ₽' },
  { name: 'Здание под ключ (премиум)', unit: 'м²', price: 'от 18 000 ₽' },
];

const FastBuild = () => {
  const navigate = useNavigate();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-background sticky top-0 z-50">
        <div className="container flex items-center h-16 gap-4">
          <button onClick={() => navigate('/')} className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
            <Icon name="ArrowLeft" size={18} />
            <span className="text-sm">На главную</span>
          </button>
          <div className="w-px h-5 bg-border" />
          <img src="https://cdn.poehali.dev/projects/38020c7c-aebd-43d2-86be-d035ce339c72/bucket/ea2a6d9d-ca6e-49de-8172-b3cd58551695.png" alt="ТЕО-строй" className="h-8 w-auto" />
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <img src="https://cdn.poehali.dev/projects/38020c7c-aebd-43d2-86be-d035ce339c72/files/0d398ce9-a6ac-433b-b06f-1223228a648c.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/50" />
        <div className="container relative py-24 text-primary-foreground">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-display font-bold text-accent text-lg">—</span>
            <span className="font-display tracking-[0.2em] text-sm uppercase opacity-80">Услуги</span>
          </div>
          <h1 className="font-display font-bold uppercase text-5xl md:text-6xl lg:text-7xl leading-tight max-w-3xl">
            Быстровозводимые<br /><span className="text-accent">конструкции</span>
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/80 max-w-2xl">
            Строительство промышленных, торговых и административных зданий из металлоконструкций и сэндвич-панелей. Срок монтажа здания 1 000 м² — от 60 дней.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })} className="bg-accent text-accent-foreground hover:bg-accent/90 font-display tracking-wide h-12 px-8">
              Обсудить проект <Icon name="ArrowRight" size={18} className="ml-2" />
            </Button>
            <Button onClick={() => document.getElementById('prices')?.scrollIntoView({ behavior: 'smooth' })} className="bg-white/10 border border-white/30 text-white hover:bg-white/20 font-display tracking-wide h-12 px-8">
              Смотреть цены
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl">
            {[['60+', 'объектов сдано'], ['60 дней', 'минимальный срок'], ['до 60 м', 'пролёт без опор'], ['50 лет', 'срок службы']].map(([n, l]) => (
              <div key={l}>
                <div className="font-display font-bold text-3xl text-accent">{n}</div>
                <div className="text-sm text-primary-foreground/70 mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types */}
      <section className="py-20 border-b border-border">
        <div className="container">
          <div className="flex items-center gap-3 mb-5">
            <span className="font-display font-bold text-accent">01</span>
            <span className="h-px w-8 bg-accent" />
            <span className="font-display tracking-[0.2em] text-sm uppercase text-muted-foreground">Виды объектов</span>
          </div>
          <h2 className="font-display font-bold uppercase text-4xl md:text-5xl">Что мы строим</h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {TYPES.map((t) => (
              <div key={t.title} className="bg-card p-8 hover-lift hover:border-accent border border-transparent group">
                <div className="w-12 h-12 grid place-items-center bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon name={t.icon} size={24} />
                </div>
                <h3 className="font-display font-semibold text-xl mt-5">{t.title}</h3>
                <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About technology */}
      <section className="py-20 border-b border-border bg-secondary/40">
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="font-display font-bold text-accent">02</span>
              <span className="h-px w-8 bg-accent" />
              <span className="font-display tracking-[0.2em] text-sm uppercase text-muted-foreground">Технология</span>
            </div>
            <h2 className="font-display font-bold uppercase text-4xl md:text-5xl leading-tight">
              Металлокаркас +<br /><span className="text-accent">сэндвич-панели</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Быстровозводимые здания (БВЗ) — это системы из лёгких стальных конструкций (ЛСТК) или тяжёлых металлоконструкций в сочетании с ограждающими конструкциями из сэндвич-панелей. Все элементы изготавливаются на заводе с высокой точностью и доставляются на объект готовыми к монтажу.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Сэндвич-панели состоят из двух стальных листов с прослойкой из минеральной ваты или пенополиуретана (ПУ/ПИР). Толщина утеплителя 100–250 мм обеспечивает отличные теплоизоляционные характеристики даже в условиях Урала.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                ['Металлоконструкции', 'Ст3сп, С345 с грунтовкой ГФ-021'],
                ['Кровельные панели', 'Толщина 150–200 мм, PIR/MW'],
                ['Стеновые панели', 'Толщина 100–150 мм, RAL любой цвет'],
                ['Антикор покрытие', 'Горячее цинкование или ЛКМ'],
              ].map(([t, d]) => (
                <div key={t} className="bg-card border border-border p-4">
                  <div className="font-display font-semibold text-sm">{t}</div>
                  <div className="text-muted-foreground text-xs mt-1">{d}</div>
                </div>
              ))}
            </div>
          </div>
          <img src="https://cdn.poehali.dev/projects/38020c7c-aebd-43d2-86be-d035ce339c72/files/f7f9228d-02d3-4843-8981-8af69095a983.jpg" alt="" className="w-full aspect-[4/3] object-cover" />
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 border-b border-border">
        <div className="container">
          <div className="flex items-center gap-3 mb-5">
            <span className="font-display font-bold text-accent">03</span>
            <span className="h-px w-8 bg-accent" />
            <span className="font-display tracking-[0.2em] text-sm uppercase text-muted-foreground">Преимущества</span>
          </div>
          <h2 className="font-display font-bold uppercase text-4xl md:text-5xl">Почему выбирают БВЗ</h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ADVANTAGES.map((a) => (
              <div key={a.title} className="flex gap-4 p-6 bg-card border border-border hover:border-accent transition-colors">
                <div className="shrink-0 w-10 h-10 grid place-items-center bg-primary text-primary-foreground">
                  <Icon name={a.icon} size={20} />
                </div>
                <div>
                  <div className="font-display font-semibold">{a.title}</div>
                  <div className="text-muted-foreground text-sm mt-1 leading-relaxed">{a.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stages */}
      <section className="py-20 border-b border-border bg-secondary/40">
        <div className="container">
          <div className="flex items-center gap-3 mb-5">
            <span className="font-display font-bold text-accent">04</span>
            <span className="h-px w-8 bg-accent" />
            <span className="font-display tracking-[0.2em] text-sm uppercase text-muted-foreground">Этапы работ</span>
          </div>
          <h2 className="font-display font-bold uppercase text-4xl md:text-5xl">Как мы работаем</h2>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {STAGES.map((s) => (
              <div key={s.n} className="bg-card p-8">
                <div className="font-display font-bold text-5xl" style={{ color: 'hsl(var(--border))' }}>{s.n}</div>
                <h3 className="font-display font-semibold text-xl mt-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prices */}
      <section id="prices" className="py-20 border-b border-border">
        <div className="container">
          <div className="flex items-center gap-3 mb-5">
            <span className="font-display font-bold text-accent">05</span>
            <span className="h-px w-8 bg-accent" />
            <span className="font-display tracking-[0.2em] text-sm uppercase text-muted-foreground">Стоимость</span>
          </div>
          <h2 className="font-display font-bold uppercase text-4xl md:text-5xl">Ориентировочные цены</h2>
          <p className="mt-4 text-muted-foreground max-w-xl">Точная стоимость зависит от размеров, конфигурации и комплектации. Запросите расчёт — подготовим КП за 1 день.</p>
          <div className="mt-10 border border-border">
            <div className="grid grid-cols-3 bg-primary text-primary-foreground px-6 py-3 font-display font-semibold text-sm uppercase tracking-wide">
              <span>Вид работ</span>
              <span className="text-center">Единица</span>
              <span className="text-right">Цена</span>
            </div>
            {PRICES.map((p, i) => (
              <div key={p.name} className={`grid grid-cols-3 px-6 py-4 border-t border-border text-sm ${i % 2 === 1 ? 'bg-secondary/40' : ''}`}>
                <span className="font-medium">{p.name}</span>
                <span className="text-center text-muted-foreground">{p.unit}</span>
                <span className="text-right font-display font-bold text-accent">{p.price}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-3">* Цены указаны без учёта стоимости материалов и доставки. НДС включён.</p>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20">
        <div className="container max-w-2xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="font-display font-bold text-accent">06</span>
            <span className="h-px w-8 bg-accent" />
            <span className="font-display tracking-[0.2em] text-sm uppercase text-muted-foreground">Контакт</span>
          </div>
          <h2 className="font-display font-bold uppercase text-4xl md:text-5xl">Обсудим ваш объект</h2>
          <p className="mt-4 text-muted-foreground">Оставьте заявку — инженер свяжется с вами и подготовит коммерческое предложение.</p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-10 bg-card border border-border p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm text-muted-foreground">Имя</label>
                <input className="mt-2 w-full bg-secondary border border-border px-4 py-3 outline-none focus:border-accent transition-colors" placeholder="Ваше имя" />
              </div>
              <div>
                <label className="text-sm text-muted-foreground">Телефон</label>
                <input className="mt-2 w-full bg-secondary border border-border px-4 py-3 outline-none focus:border-accent transition-colors" placeholder="+7 (___) ___-__-__" />
              </div>
            </div>
            <div>
              <label className="text-sm text-muted-foreground">Тип объекта</label>
              <input className="mt-2 w-full bg-secondary border border-border px-4 py-3 outline-none focus:border-accent transition-colors" placeholder="Склад, ангар, цех..." />
            </div>
            <div>
              <label className="text-sm text-muted-foreground">Площадь и параметры</label>
              <textarea rows={3} className="mt-2 w-full bg-secondary border border-border px-4 py-3 outline-none focus:border-accent transition-colors resize-none" placeholder="Примерная площадь, высота, особые требования..." />
            </div>
            <Button className="w-full h-12 font-display tracking-wide text-base bg-accent text-accent-foreground hover:bg-accent/90">
              Отправить заявку
            </Button>
            <p className="text-xs text-muted-foreground text-center">Нажимая кнопку, вы соглашаетесь с <button onClick={() => navigate('/privacy')} className="underline hover:text-foreground transition-colors">политикой обработки данных</button></p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <img src="https://cdn.poehali.dev/projects/38020c7c-aebd-43d2-86be-d035ce339c72/bucket/ea2a6d9d-ca6e-49de-8172-b3cd58551695.png" alt="ТЕО-строй" className="h-9 w-auto bg-white rounded px-3 py-1.5" />
          <div className="text-sm text-primary-foreground/70">© 2008–2026 ТЕО-строй. Строительство под ключ в Екатеринбурге.</div>
        </div>
      </footer>
    </div>
  );
};

export default FastBuild;
