import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const WORKS = [
  {
    category: 'Подготовительные работы',
    items: [
      { name: 'Демонтаж старой отделки', unit: 'м²', price: 'от 300 ₽' },
      { name: 'Выравнивание стен (штукатурка)', unit: 'м²', price: 'от 550 ₽' },
      { name: 'Стяжка пола (полусухая)', unit: 'м²', price: 'от 650 ₽' },
      { name: 'Шпаклёвка стен (финишная)', unit: 'м²', price: 'от 350 ₽' },
      { name: 'Грунтовка поверхностей', unit: 'м²', price: 'от 80 ₽' },
    ]
  },
  {
    category: 'Напольные покрытия',
    items: [
      { name: 'Укладка керамогранита', unit: 'м²', price: 'от 1 200 ₽' },
      { name: 'Укладка плитки (ванная)', unit: 'м²', price: 'от 1 400 ₽' },
      { name: 'Укладка ламината / паркетной доски', unit: 'м²', price: 'от 600 ₽' },
      { name: 'Наливной пол (эпоксидный)', unit: 'м²', price: 'от 1 800 ₽' },
      { name: 'Тёплый пол (укладка)', unit: 'м²', price: 'от 900 ₽' },
    ]
  },
  {
    category: 'Стены и потолки',
    items: [
      { name: 'Покраска стен', unit: 'м²', price: 'от 280 ₽' },
      { name: 'Поклейка обоев', unit: 'м²', price: 'от 350 ₽' },
      { name: 'Декоративная штукатурка', unit: 'м²', price: 'от 900 ₽' },
      { name: 'Натяжной потолок (матовый)', unit: 'м²', price: 'от 700 ₽' },
      { name: 'Подвесной потолок (гипсокартон)', unit: 'м²', price: 'от 1 100 ₽' },
      { name: 'Облицовка плиткой (стены)', unit: 'м²', price: 'от 1 200 ₽' },
    ]
  },
  {
    category: 'Перегородки и дверные проёмы',
    items: [
      { name: 'Перегородка из гипсокартона', unit: 'м²', price: 'от 1 500 ₽' },
      { name: 'Установка межкомнатной двери', unit: 'шт.', price: 'от 4 500 ₽' },
      { name: 'Расширение/заделка проёма', unit: 'шт.', price: 'от 8 000 ₽' },
      { name: 'Откосы оконные (штукатурные)', unit: 'шт.', price: 'от 2 500 ₽' },
    ]
  },
  {
    category: 'Сантехнические работы',
    items: [
      { name: 'Установка унитаза', unit: 'шт.', price: 'от 3 500 ₽' },
      { name: 'Установка душевой кабины', unit: 'шт.', price: 'от 8 000 ₽' },
      { name: 'Монтаж полотенцесушителя', unit: 'шт.', price: 'от 2 500 ₽' },
      { name: 'Разводка водоснабжения', unit: 'точка', price: 'от 3 000 ₽' },
    ]
  },
  {
    category: 'Электромонтажные работы',
    items: [
      { name: 'Разводка электрики (под ключ)', unit: 'точка', price: 'от 1 800 ₽' },
      { name: 'Установка розетки / выключателя', unit: 'шт.', price: 'от 600 ₽' },
      { name: 'Монтаж светильника', unit: 'шт.', price: 'от 800 ₽' },
      { name: 'Монтаж электрощита', unit: 'шт.', price: 'от 12 000 ₽' },
    ]
  },
];

const PACKAGES = [
  {
    name: 'Косметический',
    price: 'от 3 200 ₽/м²',
    color: 'border-border',
    items: ['Выравнивание стен шпаклёвкой', 'Покраска или обои', 'Покраска потолка', 'Укладка напольного покрытия', 'Плинтуса и наличники'],
  },
  {
    name: 'Комплексный',
    price: 'от 6 500 ₽/м²',
    color: 'border-primary',
    badge: 'Популярный',
    items: ['Всё из косметического', 'Штукатурка и стяжка', 'Плитка в санузлах', 'Натяжные потолки', 'Монтаж электрики и сантехники', 'Установка дверей'],
  },
  {
    name: 'Премиум',
    price: 'от 12 000 ₽/м²',
    color: 'border-accent',
    items: ['Всё из комплексного', 'Дизайн-проект', 'Декоративные покрытия', 'Умный дом', 'Авторский надзор', 'Гарантия 3 года'],
  },
];

const PHOTOS = [
  { img: 'https://cdn.poehali.dev/projects/38020c7c-aebd-43d2-86be-d035ce339c72/files/ef5d58c3-a239-40f9-a4d3-1dc1b9fe6c30.jpg', title: 'Лофт в центре', tag: 'Комплексный ремонт · 86 м²' },
  { img: 'https://cdn.poehali.dev/projects/38020c7c-aebd-43d2-86be-d035ce339c72/files/ddaff6be-20bd-4fd5-a265-67f6bc87a58b.jpg', title: 'Отделка санузла', tag: 'Плитка и сантехника' },
  { img: 'https://cdn.poehali.dev/projects/38020c7c-aebd-43d2-86be-d035ce339c72/files/435e18c9-c4ce-435d-9d9a-c3e2a36214ed.jpg', title: 'Частный дом', tag: 'Отделка под ключ · 240 м²' },
];

const Finishing = () => {
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
        <img src="https://cdn.poehali.dev/projects/38020c7c-aebd-43d2-86be-d035ce339c72/files/ddaff6be-20bd-4fd5-a265-67f6bc87a58b.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/50" />
        <div className="container relative py-24 text-primary-foreground">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-display font-bold text-accent text-lg">—</span>
            <span className="font-display tracking-[0.2em] text-sm uppercase opacity-80">Услуги</span>
          </div>
          <h1 className="font-display font-bold uppercase text-5xl md:text-6xl lg:text-7xl leading-tight max-w-3xl">
            Отделочные<br /><span className="text-accent">работы</span>
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/80 max-w-2xl">
            Полный цикл отделки квартир, домов и коммерческих помещений. Работаем по смете — цена не изменится в процессе.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })} className="bg-accent text-accent-foreground hover:bg-accent/90 font-display tracking-wide h-12 px-8">
              Обсудить проект <Icon name="ArrowRight" size={18} className="ml-2" />
            </Button>
            <Button onClick={() => document.getElementById('prices')?.scrollIntoView({ behavior: 'smooth' })} className="bg-white/10 border border-white/30 text-white hover:bg-white/20 font-display tracking-wide h-12 px-8">
              Прайс-лист
            </Button>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 border-b border-border">
        <div className="container">
          <div className="flex items-center gap-3 mb-5">
            <span className="font-display font-bold text-accent">01</span>
            <span className="h-px w-8 bg-accent" />
            <span className="font-display tracking-[0.2em] text-sm uppercase text-muted-foreground">Пакеты</span>
          </div>
          <h2 className="font-display font-bold uppercase text-4xl md:text-5xl">Варианты отделки</h2>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {PACKAGES.map((p) => (
              <div key={p.name} className={`relative bg-card border-2 ${p.color} p-8 hover-lift`}>
                {p.badge && (
                  <span className="absolute -top-3 left-8 bg-primary text-primary-foreground text-xs font-display px-3 py-1">{p.badge}</span>
                )}
                <h3 className="font-display font-bold text-2xl">{p.name}</h3>
                <div className="font-display font-bold text-accent text-xl mt-2">{p.price}</div>
                <ul className="mt-6 space-y-3">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <Icon name="Check" size={16} className="text-accent mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })} className="mt-8 w-full font-display bg-accent text-accent-foreground hover:bg-accent/90">
                  Выбрать пакет
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photos */}
      <section className="py-20 border-b border-border bg-secondary/40">
        <div className="container">
          <div className="flex items-center gap-3 mb-5">
            <span className="font-display font-bold text-accent">02</span>
            <span className="h-px w-8 bg-accent" />
            <span className="font-display tracking-[0.2em] text-sm uppercase text-muted-foreground">Примеры работ</span>
          </div>
          <h2 className="font-display font-bold uppercase text-4xl md:text-5xl">Наши объекты</h2>
          <div className="mt-12 grid md:grid-cols-3 gap-px bg-border">
            {PHOTOS.map((p) => (
              <div key={p.title} className="relative group overflow-hidden bg-card">
                <img src={p.img} alt={p.title} className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-6 text-primary-foreground">
                  <div className="text-accent font-display tracking-wide text-sm uppercase">{p.tag}</div>
                  <div className="font-display font-semibold text-xl mt-1">{p.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price list */}
      <section id="prices" className="py-20 border-b border-border">
        <div className="container">
          <div className="flex items-center gap-3 mb-5">
            <span className="font-display font-bold text-accent">03</span>
            <span className="h-px w-8 bg-accent" />
            <span className="font-display tracking-[0.2em] text-sm uppercase text-muted-foreground">Прайс-лист</span>
          </div>
          <h2 className="font-display font-bold uppercase text-4xl md:text-5xl">Стоимость работ</h2>
          <p className="mt-4 text-muted-foreground max-w-xl">Стоимость материалов рассчитывается отдельно. Итоговая смета фиксируется в договоре.</p>

          <div className="mt-10 space-y-8">
            {WORKS.map((section) => (
              <div key={section.category}>
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="font-display font-semibold text-lg">{section.category}</h3>
                  <span className="flex-1 h-px bg-border" />
                </div>
                <div className="border border-border">
                  <div className="grid grid-cols-3 bg-secondary px-5 py-2 font-display text-xs uppercase tracking-wide text-muted-foreground">
                    <span>Работа</span><span className="text-center">Единица</span><span className="text-right">Цена (работа)</span>
                  </div>
                  {section.items.map((item, i) => (
                    <div key={item.name} className={`grid grid-cols-3 px-5 py-3 border-t border-border text-sm ${i % 2 === 1 ? 'bg-secondary/30' : ''}`}>
                      <span>{item.name}</span>
                      <span className="text-center text-muted-foreground">{item.unit}</span>
                      <span className="text-right font-display font-bold text-accent">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-4">* Стоимость указана без материалов. Точные цифры — после выезда замерщика.</p>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20">
        <div className="container max-w-2xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="font-display font-bold text-accent">04</span>
            <span className="h-px w-8 bg-accent" />
            <span className="font-display tracking-[0.2em] text-sm uppercase text-muted-foreground">Заявка</span>
          </div>
          <h2 className="font-display font-bold uppercase text-4xl md:text-5xl">Обсудим проект</h2>
          <p className="mt-4 text-muted-foreground">Оставьте заявку — замерщик приедет бесплатно и подготовит смету за 2 дня.</p>
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
              <label className="text-sm text-muted-foreground">Тип объекта и площадь</label>
              <input className="mt-2 w-full bg-secondary border border-border px-4 py-3 outline-none focus:border-accent transition-colors" placeholder="Квартира 65 м², дом 120 м², офис..." />
            </div>
            <div>
              <label className="text-sm text-muted-foreground">Пожелания</label>
              <textarea rows={3} className="mt-2 w-full bg-secondary border border-border px-4 py-3 outline-none focus:border-accent transition-colors resize-none" placeholder="Что планируете сделать, сроки, бюджет..." />
            </div>
            <Button className="w-full h-12 font-display tracking-wide text-base bg-accent text-accent-foreground hover:bg-accent/90">
              Оставить заявку
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              Нажимая кнопку, вы соглашаетесь с <button onClick={() => navigate('/privacy')} className="underline hover:text-foreground transition-colors">политикой обработки данных</button>
            </p>
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

export default Finishing;
