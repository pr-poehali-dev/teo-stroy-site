import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const NAV = [
  { id: 'about', label: 'О компании' },
  { id: 'services', label: 'Услуги' },
  { id: 'portfolio', label: 'Портфолио' },
  { id: 'calculator', label: 'Калькулятор' },
  { id: 'team', label: 'Команда' },
  { id: 'reviews', label: 'Отзывы' },
  { id: 'contacts', label: 'Контакты' },
];

const SERVICES = [
  { icon: 'Home', title: 'Строительство домов', desc: 'Коттеджи и загородные дома под ключ из газобетона, кирпича и дерева.', price: 'от 28 000 ₽/м²' },
  { icon: 'Paintbrush', title: 'Ремонт квартир', desc: 'Капитальный и косметический ремонт с дизайн-проектом.', price: 'от 6 500 ₽/м²' },
  { icon: 'Layers', title: 'Отделочные работы', desc: 'Стяжка, штукатурка, плитка, потолки и финишная отделка.', price: 'от 3 200 ₽/м²' },
  { icon: 'HardHat', title: 'Фасадные работы', desc: 'Утепление, вентфасады, штукатурные системы и облицовка.', price: 'от 2 100 ₽/м²' },
  { icon: 'Wrench', title: 'Инженерные сети', desc: 'Электрика, водоснабжение, отопление и вентиляция.', price: 'от 1 800 ₽/м²' },
  { icon: 'Hammer', title: 'Демонтаж', desc: 'Безопасный демонтаж конструкций и вывоз мусора.', price: 'от 900 ₽/м²' },
];

const PORTFOLIO = [
  { img: 'https://cdn.poehali.dev/projects/38020c7c-aebd-43d2-86be-d035ce339c72/files/435e18c9-c4ce-435d-9d9a-c3e2a36214ed.jpg', title: 'Коттедж «Сосновый бор»', tag: 'Строительство · 240 м²' },
  { img: 'https://cdn.poehali.dev/projects/38020c7c-aebd-43d2-86be-d035ce339c72/files/ef5d58c3-a239-40f9-a4d3-1dc1b9fe6c30.jpg', title: 'Лофт в центре', tag: 'Ремонт · 86 м²' },
  { img: 'https://cdn.poehali.dev/projects/38020c7c-aebd-43d2-86be-d035ce339c72/files/40804c58-367f-46ee-a1f6-47a193dceb34.jpg', title: 'ЖК «Панорама»', tag: 'Фасад · 5 400 м²' },
];

const TEAM = [
  { name: 'Андрей Теплов', role: 'Генеральный директор', exp: '18 лет в строительстве' },
  { name: 'Марина Орлова', role: 'Главный инженер', exp: 'Проектирование и контроль' },
  { name: 'Сергей Гущин', role: 'Прораб', exp: '120+ сданных объектов' },
  { name: 'Елена Краско', role: 'Дизайнер интерьеров', exp: 'Авторские проекты' },
];

const REVIEWS = [
  { name: 'Дмитрий К.', text: 'Построили дом точно в срок и без сюрпризов по смете. Прораб всегда был на связи. Рекомендую.', rating: 5 },
  { name: 'Ольга В.', text: 'Сделали ремонт в квартире за 2 месяца. Аккуратно, чисто, с продуманным дизайном. Спасибо команде!', rating: 5 },
  { name: 'Игорь М.', text: 'Заказывал фасадные работы на здании. Качество отличное, по гарантии всё прозрачно.', rating: 5 },
];

const CALC_TYPES = [
  { id: 'house', label: 'Дом под ключ', base: 28000 },
  { id: 'repair', label: 'Ремонт квартиры', base: 6500 },
  { id: 'finish', label: 'Отделка', base: 3200 },
  { id: 'facade', label: 'Фасад', base: 2100 },
];

const CALC_LEVELS = [
  { id: 'eco', label: 'Эконом', k: 1 },
  { id: 'comfort', label: 'Комфорт', k: 1.4 },
  { id: 'premium', label: 'Премиум', k: 1.9 },
];

const Index = () => {
  const [type, setType] = useState(CALC_TYPES[0]);
  const [level, setLevel] = useState(CALC_LEVELS[1]);
  const [area, setArea] = useState(100);
  const [materials, setMaterials] = useState(true);

  const work = type.base * area * level.k;
  const matCost = materials ? work * 0.45 : 0;
  const total = Math.round(work + matCost);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container flex items-center justify-between h-16">
          <button onClick={() => scrollTo('hero')} className="flex items-center">
            <img src="https://cdn.poehali.dev/projects/38020c7c-aebd-43d2-86be-d035ce339c72/bucket/ea2a6d9d-ca6e-49de-8172-b3cd58551695.png" alt="ТЕО-строй" className="h-10 w-auto" />
          </button>
          <nav className="hidden lg:flex items-center gap-7">
            {NAV.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                {n.label}
              </button>
            ))}
          </nav>
          <Button onClick={() => scrollTo('contacts')} className="font-display tracking-wide">
            <Icon name="Phone" size={16} className="mr-2" /> Связаться
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section id="hero" className="relative min-h-screen flex items-end overflow-hidden">
        <img src="https://cdn.poehali.dev/projects/38020c7c-aebd-43d2-86be-d035ce339c72/files/40804c58-367f-46ee-a1f6-47a193dceb34.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/40" />
        <div className="container relative pb-20 pt-32 text-primary-foreground">
          <div className="flex items-center gap-2 mb-6 animate-fade-up">
            <span className="h-px w-10 bg-accent" />
            <span className="text-accent font-display tracking-[0.2em] text-sm uppercase">Строим с 2008 года</span>
          </div>
          <h1 className="font-display font-bold uppercase leading-[0.95] text-5xl md:text-7xl lg:text-8xl max-w-4xl animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Строим то,<br />что <span className="text-accent">останется</span><br />надолго
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/80 max-w-xl animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Полный цикл строительства и ремонта под ключ. Фиксированная смета, договор и гарантия до 5 лет.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Button size="lg" onClick={() => scrollTo('calculator')} className="font-display tracking-wide text-base h-12 px-8">
              Рассчитать стоимость <Icon name="ArrowRight" size={18} className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollTo('portfolio')} className="font-display tracking-wide text-base h-12 px-8">
              Наши работы
            </Button>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl animate-fade-up" style={{ animationDelay: '0.4s' }}>
            {[['16', 'лет на рынке'], ['340+', 'объектов сдано'], ['98%', 'в срок'], ['5 лет', 'гарантия']].map(([n, l]) => (
              <div key={l}>
                <div className="font-display font-bold text-4xl text-accent">{n}</div>
                <div className="text-sm text-primary-foreground/70 mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-28 border-b border-border">
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel n="01" text="О компании" />
            <h2 className="font-display font-bold uppercase text-4xl md:text-5xl mt-5 leading-tight">
              Команда, которой<br />доверяют объекты<br /><span className="text-primary">любой сложности</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              ТЕО-строй — строительная компания полного цикла в Красноярске. Мы берём на себя всё: от проектирования и сметы до финишной отделки и сдачи объекта.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Работаем по договору с прозрачной фиксированной сметой. Каждый этап фиксируется в актах, а собственный отдел снабжения держит цены ниже рынка.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-5">
              {[
                ['ShieldCheck', 'Договор и гарантия', 'Юридическая защита на каждом этапе'],
                ['Wallet', 'Фиксированная смета', 'Цена не меняется в процессе работ'],
                ['Clock', 'Сроки в договоре', 'Штрафуем себя за просрочку'],
                ['Users', 'Свои бригады', 'Без субподряда и текучки'],
              ].map(([ic, t, d]) => (
                <div key={t} className="flex gap-3">
                  <div className="shrink-0 w-10 h-10 grid place-items-center bg-secondary text-primary"><Icon name={ic} size={20} /></div>
                  <div>
                    <div className="font-display font-semibold">{t}</div>
                    <div className="text-sm text-muted-foreground">{d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src="https://cdn.poehali.dev/projects/38020c7c-aebd-43d2-86be-d035ce339c72/files/435e18c9-c4ce-435d-9d9a-c3e2a36214ed.jpg" alt="" className="w-full aspect-[4/5] object-cover" />
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 max-w-[220px]">
              <div className="font-display font-bold text-5xl">340+</div>
              <div className="text-sm font-medium mt-1">завершённых проектов за 16 лет работы</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-28 border-b border-border grid-texture">
        <div className="container">
          <SectionLabel n="02" text="Услуги" />
          <h2 className="font-display font-bold uppercase text-4xl md:text-5xl mt-5">Что мы делаем</h2>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {SERVICES.map((s) => (
              <div key={s.title} className="bg-card p-8 hover-lift hover:border-accent border border-transparent group">
                <div className="w-12 h-12 grid place-items-center bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon name={s.icon} size={24} />
                </div>
                <h3 className="font-display font-semibold text-xl mt-5">{s.title}</h3>
                <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{s.desc}</p>
                <div className="mt-5 font-display font-bold text-accent text-lg">{s.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-28 border-b border-border">
        <div className="container">
          <SectionLabel n="03" text="Портфолио" />
          <div className="flex flex-wrap items-end justify-between gap-4 mt-5">
            <h2 className="font-display font-bold uppercase text-4xl md:text-5xl">Реализованные<br />объекты</h2>
            <p className="text-muted-foreground max-w-sm">Каждый проект — это договор, контроль и гарантия. Показываем то, чем гордимся.</p>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-px bg-border">
            {PORTFOLIO.map((p) => (
              <div key={p.title} className="relative group overflow-hidden bg-card">
                <img src={p.img} alt={p.title} className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-6 text-primary-foreground">
                  <div className="text-accent font-display tracking-wide text-sm uppercase">{p.tag}</div>
                  <div className="font-display font-semibold text-2xl mt-1">{p.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section id="calculator" className="py-28 border-b border-border bg-secondary/40">
        <div className="container">
          <SectionLabel n="04" text="Калькулятор" />
          <h2 className="font-display font-bold uppercase text-4xl md:text-5xl mt-5">Рассчитайте стоимость<br />за минуту</h2>
          <p className="text-muted-foreground mt-4 max-w-lg">Предварительный расчёт работ и материалов. Точную смету подготовит инженер после осмотра.</p>

          <div className="mt-12 grid lg:grid-cols-[1.4fr_1fr] gap-px bg-border border border-border">
            {/* Controls */}
            <div className="bg-card p-8 md:p-10 space-y-8">
              <div>
                <label className="font-display font-semibold uppercase tracking-wide text-sm text-muted-foreground">Тип работ</label>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {CALC_TYPES.map((t) => (
                    <button key={t.id} onClick={() => setType(t)} className={`p-4 text-left border transition-colors ${type.id === t.id ? 'border-accent bg-accent/10 text-foreground' : 'border-border text-muted-foreground hover:border-accent/50'}`}>
                      <div className="font-display font-semibold">{t.label}</div>
                      <div className="text-xs mt-1 opacity-70">от {t.base.toLocaleString('ru')} ₽/м²</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="font-display font-semibold uppercase tracking-wide text-sm text-muted-foreground">Уровень отделки</label>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {CALC_LEVELS.map((l) => (
                    <button key={l.id} onClick={() => setLevel(l)} className={`py-3 font-display font-semibold border transition-colors ${level.id === l.id ? 'border-accent bg-accent text-accent-foreground' : 'border-border text-muted-foreground hover:border-accent/50'}`}>
                      {l.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-end justify-between">
                  <label className="font-display font-semibold uppercase tracking-wide text-sm text-muted-foreground">Площадь</label>
                  <span className="font-display font-bold text-2xl text-accent">{area} м²</span>
                </div>
                <input type="range" min={20} max={500} step={5} value={area} onChange={(e) => setArea(+e.target.value)} className="w-full mt-4 accent-accent h-2" />
                <div className="flex justify-between text-xs text-muted-foreground mt-1"><span>20 м²</span><span>500 м²</span></div>
              </div>

              <button onClick={() => setMaterials(!materials)} className="flex items-center gap-3">
                <span className={`w-12 h-6 rounded-full relative transition-colors ${materials ? 'bg-accent' : 'bg-border'}`}>
                  <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-background transition-all ${materials ? 'left-6' : 'left-0.5'}`} />
                </span>
                <span className="font-display font-medium">Учитывать стоимость материалов</span>
              </button>
            </div>

            {/* Result */}
            <div className="bg-primary text-primary-foreground p-8 md:p-10 flex flex-col">
              <div className="font-display uppercase tracking-wide text-sm opacity-80">Предварительная стоимость</div>
              <div className="font-display font-bold text-5xl md:text-6xl mt-2 leading-none text-accent">{total.toLocaleString('ru')} ₽</div>
              <div className="mt-8 space-y-3 text-sm border-t border-primary-foreground/20 pt-6">
                <Row label="Работы" value={`${Math.round(work).toLocaleString('ru')} ₽`} />
                {materials && <Row label="Материалы" value={`${Math.round(matCost).toLocaleString('ru')} ₽`} />}
                <Row label="Площадь" value={`${area} м²`} />
                <Row label="Класс" value={level.label} />
              </div>
              <Button onClick={() => scrollTo('contacts')} className="mt-auto font-display tracking-wide h-12 text-base bg-accent text-accent-foreground hover:bg-accent/90">
                Получить точную смету <Icon name="ArrowRight" size={18} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-28 border-b border-border">
        <div className="container">
          <SectionLabel n="05" text="Команда" />
          <h2 className="font-display font-bold uppercase text-4xl md:text-5xl mt-5">Кто строит ваш объект</h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {TEAM.map((m, i) => (
              <div key={m.name} className="bg-card p-8 hover-lift hover:border-accent border border-transparent">
                <div className="w-16 h-16 grid place-items-center bg-secondary text-primary font-display font-bold text-2xl">
                  {m.name.split(' ').map((w) => w[0]).join('')}
                </div>
                <div className="font-display font-bold text-5xl text-stroke mt-6">0{i + 1}</div>
                <h3 className="font-display font-semibold text-xl mt-2">{m.name}</h3>
                <div className="text-accent font-medium text-sm mt-1">{m.role}</div>
                <div className="text-muted-foreground text-sm mt-1">{m.exp}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-28 border-b border-border grid-texture">
        <div className="container">
          <SectionLabel n="06" text="Отзывы" />
          <h2 className="font-display font-bold uppercase text-4xl md:text-5xl mt-5">Что говорят клиенты</h2>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {REVIEWS.map((r) => (
              <div key={r.name} className="bg-card border border-border p-8 hover-lift hover:border-accent">
                <div className="flex gap-1 text-accent">
                  {Array.from({ length: r.rating }).map((_, i) => <Icon key={i} name="Star" size={18} className="fill-accent" />)}
                </div>
                <p className="mt-5 text-muted-foreground leading-relaxed">«{r.text}»</p>
                <div className="mt-6 font-display font-semibold">{r.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-28">
        <div className="container grid lg:grid-cols-2 gap-16">
          <div>
            <SectionLabel n="07" text="Контакты" />
            <h2 className="font-display font-bold uppercase text-4xl md:text-5xl mt-5">Обсудим<br />ваш проект?</h2>
            <p className="text-muted-foreground mt-4 max-w-md">Оставьте заявку — инженер свяжется с вами, рассчитает смету и предложит решение под ваш бюджет.</p>
            <div className="mt-10 space-y-5">
              {[
                ['Phone', '+7 (391) 000-00-00', 'Ежедневно 9:00–20:00'],
                ['Mail', 'info@teo-stroy1.ru', 'Ответим в течение часа'],
                ['MapPin', 'г. Красноярск, ул. Строителей, 1', 'Офис и шоурум'],
              ].map(([ic, t, d]) => (
                <div key={t} className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 grid place-items-center bg-primary text-primary-foreground"><Icon name={ic} size={22} /></div>
                  <div>
                    <div className="font-display font-semibold text-lg">{t}</div>
                    <div className="text-sm text-muted-foreground">{d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="bg-card border border-border p-8 md:p-10 space-y-5">
            <h3 className="font-display font-semibold text-2xl">Оставить заявку</h3>
            <div>
              <label className="text-sm text-muted-foreground">Имя</label>
              <input className="mt-2 w-full bg-secondary border border-border px-4 py-3 outline-none focus:border-accent transition-colors" placeholder="Как к вам обращаться" />
            </div>
            <div>
              <label className="text-sm text-muted-foreground">Телефон</label>
              <input className="mt-2 w-full bg-secondary border border-border px-4 py-3 outline-none focus:border-accent transition-colors" placeholder="+7 (___) ___-__-__" />
            </div>
            <div>
              <label className="text-sm text-muted-foreground">Что планируете?</label>
              <textarea rows={3} className="mt-2 w-full bg-secondary border border-border px-4 py-3 outline-none focus:border-accent transition-colors resize-none" placeholder="Кратко опишите задачу" />
            </div>
            <Button className="w-full h-12 font-display tracking-wide text-base bg-accent text-accent-foreground hover:bg-accent/90">Отправить заявку</Button>
            <p className="text-xs text-muted-foreground text-center">Нажимая кнопку, вы соглашаетесь с обработкой персональных данных</p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-10">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <img src="https://cdn.poehali.dev/projects/38020c7c-aebd-43d2-86be-d035ce339c72/bucket/ea2a6d9d-ca6e-49de-8172-b3cd58551695.png" alt="ТЕО-строй" className="h-9 w-auto bg-white rounded px-3 py-1.5" />
          <div className="text-sm text-primary-foreground/70">© 2008–2026 ТЕО-строй. Строительство под ключ в Красноярске.</div>
        </div>
      </footer>
    </div>
  );
};

const SectionLabel = ({ n, text }: { n: string; text: string }) => (
  <div className="flex items-center gap-3">
    <span className="font-display font-bold text-accent text-lg">{n}</span>
    <span className="h-px w-8 bg-accent" />
    <span className="font-display tracking-[0.2em] text-sm uppercase text-muted-foreground">{text}</span>
  </div>
);

const Row = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between">
    <span className="opacity-80">{label}</span>
    <span className="font-semibold">{value}</span>
  </div>
);

export default Index;