import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const REQUISITES = [
  { label: 'Полное наименование', value: 'Общество с ограниченной ответственностью «ТЕО-строй»' },
  { label: 'Краткое наименование', value: 'ООО «ТЕО-строй»' },
  { label: 'ИНН', value: '6686128436' },
  { label: 'КПП', value: '665801001' },
  { label: 'ОГРН', value: '1206600055848' },
  { label: 'Дата регистрации', value: '6 октября 2020 года' },
  { label: 'Юридический адрес', value: 'г. Екатеринбург, ул. 8 Марта, 120Б, 4 этаж' },
  { label: 'Фактический адрес', value: 'г. Екатеринбург, ул. 8 Марта, 120Б, 4 этаж' },
  { label: 'Генеральный директор', value: 'Теодоракис Христо (действует на основании Устава)' },
  { label: 'Телефон', value: '+7 343 266 32 99' },
  { label: 'E-mail', value: 'teo.stroy@bk.ru' },
];

const BANK = [
  { label: 'Наименование банка', value: '— укажите наименование банка —' },
  { label: 'БИК', value: '— укажите БИК —' },
  { label: 'Расчётный счёт', value: '— укажите р/с —' },
  { label: 'Корреспондентский счёт', value: '— укажите к/с —' },
];

const Requisites = () => {
  const navigate = useNavigate();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleCopy = (value: string) => {
    navigator.clipboard.writeText(value).catch(() => {});
  };

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

      <main className="container py-16 max-w-3xl">
        <div className="flex items-center gap-3 mb-8">
          <span className="font-display font-bold text-accent text-lg">—</span>
          <span className="font-display tracking-[0.2em] text-sm uppercase text-muted-foreground">Документ</span>
        </div>

        <div className="flex items-center gap-4 mb-10">
          <div className="w-14 h-14 grid place-items-center bg-accent text-accent-foreground shrink-0">
            <Icon name="CreditCard" size={28} />
          </div>
          <div>
            <h1 className="font-display font-bold uppercase text-4xl md:text-5xl leading-tight">Карточка предприятия</h1>
            <p className="text-muted-foreground mt-1">Реквизиты ООО «ТЕО-строй»</p>
          </div>
        </div>

        {/* Основные реквизиты */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="font-display font-semibold text-xl">Основные реквизиты</h2>
            <span className="flex-1 h-px bg-border" />
          </div>
          <div className="border border-border">
            {REQUISITES.map((r, i) => (
              <div key={r.label} className={`flex gap-4 px-5 py-4 border-t border-border ${i === 0 ? 'border-t-0' : ''} ${i % 2 === 1 ? 'bg-secondary/30' : ''} group`}>
                <div className="w-48 shrink-0 text-sm text-muted-foreground font-medium">{r.label}</div>
                <div className="flex-1 text-sm font-medium">{r.value}</div>
                <button onClick={() => handleCopy(r.value)} className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-accent">
                  <Icon name="Copy" size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Банковские реквизиты */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="font-display font-semibold text-xl">Банковские реквизиты</h2>
            <span className="flex-1 h-px bg-border" />
          </div>
          <div className="border border-border">
            {BANK.map((r, i) => (
              <div key={r.label} className={`flex gap-4 px-5 py-4 border-t border-border ${i === 0 ? 'border-t-0' : ''} ${i % 2 === 1 ? 'bg-secondary/30' : ''} group`}>
                <div className="w-48 shrink-0 text-sm text-muted-foreground font-medium">{r.label}</div>
                <div className="flex-1 text-sm font-medium">{r.value}</div>
                <button onClick={() => handleCopy(r.value)} className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-accent">
                  <Icon name="Copy" size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Подпись */}
        <div className="mt-12 flex items-start gap-6 p-6 border border-border bg-secondary/30">
          <div className="shrink-0">
            <img src="https://cdn.poehali.dev/projects/38020c7c-aebd-43d2-86be-d035ce339c72/bucket/de2a8129-8655-4487-8318-cfa62b1373d2.jpg" alt="Христо Теодоракис" className="w-16 h-16 object-cover object-top" />
          </div>
          <div>
            <div className="font-display font-bold text-lg">Христо Теодоракис</div>
            <div className="text-accent text-sm font-medium">Генеральный директор ООО «ТЕО-строй»</div>
            <div className="text-muted-foreground text-sm mt-2">Действует на основании Устава. Данная карточка является официальным документом компании.</div>
          </div>
        </div>

        <div className="mt-8 flex gap-4">
          <Button onClick={() => window.print()} variant="outline" className="font-display tracking-wide gap-2">
            <Icon name="Printer" size={16} /> Распечатать
          </Button>
          <Button onClick={() => navigate('/')} className="font-display tracking-wide bg-accent text-accent-foreground hover:bg-accent/90">
            На главную
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 mt-12">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <img src="https://cdn.poehali.dev/projects/38020c7c-aebd-43d2-86be-d035ce339c72/bucket/ea2a6d9d-ca6e-49de-8172-b3cd58551695.png" alt="ТЕО-строй" className="h-9 w-auto bg-white rounded px-3 py-1.5" />
          <div className="text-sm text-primary-foreground/70">© 2008–2026 ТЕО-строй. Строительство под ключ в Екатеринбурге.</div>
        </div>
      </footer>
    </div>
  );
};

export default Requisites;