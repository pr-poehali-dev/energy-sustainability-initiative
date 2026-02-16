import { Button } from "@/components/ui/button"
import { useState } from "react"
import Icon from "@/components/ui/icon"

interface FAQ {
  question: string
  answer: string
}

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs: FAQ[] = [
    {
      question: "Какие изделия вы изготавливаете?",
      answer:
        "Мы специализируемся на изготовлении деревянных киотов, иконостасов, церковной утвари, храмовой мозаики и мозаичных икон. Также выполняем внутреннюю отделку храмов плиткой и гранитом. Каждое изделие создаётся вручную с учётом канонов православного зодчества.",
    },
    {
      question: "Каковы сроки выполнения заказа?",
      answer:
        "Сроки зависят от сложности и масштаба проекта. Изготовление киота занимает от 2 до 4 недель, иконостаса — от 2 до 6 месяцев. Мозаичные работы и внутренняя отделка — от 1 до 4 месяцев. Точные сроки определяются после согласования проекта.",
    },
    {
      question: "Работаете ли вы с храмами в других регионах?",
      answer:
        "Да, мы выполняем заказы по всей России. За более чем 20 лет работы наши изделия установлены в храмах Самарской области и далеко за её пределами. Мы организуем доставку и выезд бригады для монтажа в любой регион.",
    },
    {
      question: "Как заказать изготовление иконостаса или киота?",
      answer:
        "Свяжитесь с нами через форму на сайте или по телефону. Мы обсудим ваши пожелания, выполним замеры (при необходимости выезд на объект), подготовим эскизный проект и смету. После согласования приступаем к работе. Предоплата — 50%.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0B0F12] text-white">
      <div className="relative min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(https://cdn.poehali.dev/projects/12f04b4e-e6b1-41eb-ad0d-6b60c09a26ea/files/fc30bf0d-ed52-4943-b318-dddd0225782e.jpg)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />
        </div>

        <nav className="relative z-10 flex items-center justify-between p-6">
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Icon name="Church" size={20} />
            <span className="font-medium text-balance">Тростянка</span>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {["Услуги", "Преимущества", "Этапы работы", "Вопросы", "Контакты"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Button className="bg-white text-black hover:bg-white/90 rounded-full px-6">Оставить заявку</Button>
          </div>
        </nav>

        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 text-center">
          <div className="mb-6 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <span className="text-sm font-medium">Более 20 лет мастерства и традиций</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-light tracking-tight mb-6 text-balance">
            Благоустройство храмов
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mb-12 leading-relaxed text-pretty">
            Изготовление деревянных киотов, иконостасов, церковной утвари, храмовой мозаики и мозаичных икон. Внутренняя отделка плиткой и гранитом. Село Тростянка, Самарская область.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-4 text-lg">
              Обсудить проект
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-black/40 ring-1 ring-white/20 backdrop-blur border-0 text-white hover:bg-black/50 rounded-full px-8 py-4 text-lg"
            >
              Наши работы
            </Button>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Icon name="Award" size={16} />
            <span className="text-sm font-medium">Ручная работа по православным канонам</span>
          </div>
        </div>
      </div>

      <section id="услуги" className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Icon name="Frame" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Киоты и иконостасы</h3>
              <p className="text-white/80 leading-relaxed">Деревянные киоты и иконостасы ручной работы по индивидуальным проектам.</p>
            </div>

            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Icon name="Palette" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Мозаика и иконы</h3>
              <p className="text-white/80 leading-relaxed">Храмовая мозаика и мозаичные иконы с соблюдением канонов.</p>
            </div>

            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Icon name="Gem" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Отделка и облицовка</h3>
              <p className="text-white/80 leading-relaxed">Внутренняя отделка храмов плиткой и натуральным гранитом.</p>
            </div>

            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Icon name="Crown" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Церковная утварь</h3>
              <p className="text-white/80 leading-relaxed">Изготовление предметов церковного обихода из дерева и других материалов.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="этапы-работы" className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Как мы работаем</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
                От первой встречи до установки готового изделия в храме — каждый этап под контролем мастеров.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">01.</div>
                  <h3 className="text-xl font-semibold mb-4">Консультация</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Обсуждаем ваши пожелания, изучаем особенности храма, при необходимости выезжаем на объект для замеров и оценки пространства.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">02.</div>
                  <h3 className="text-xl font-semibold mb-4">Проектирование</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Разрабатываем эскизный проект с учётом архитектуры храма, канонов и ваших пожеланий. Согласовываем материалы, размеры и детали.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">03.</div>
                  <h3 className="text-xl font-semibold mb-4">Изготовление</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Мастера вручную создают изделие в нашей мастерской в селе Тростянка, используя проверенные технологии и натуральные материалы.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">04.</div>
                  <h3 className="text-xl font-semibold mb-4">Доставка и монтаж</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Бережно доставляем готовое изделие и выполняем профессиональный монтаж на месте. Гарантируем качество установки.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 rounded-full px-12 py-4 text-lg font-semibold"
              >
                Обсудить проект
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl overflow-hidden ring-1 ring-white/10">
            <img
              src="https://cdn.poehali.dev/projects/12f04b4e-e6b1-41eb-ad0d-6b60c09a26ea/files/d9259d61-f435-41f5-983e-00aa3b7b7c0b.jpg"
              alt="Мастер за работой — резьба по дереву для иконостаса"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      <section id="вопросы" className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
                  Частые вопросы
                </h2>
                <p className="text-xl text-white/80 leading-relaxed text-pretty">
                  Всё, что нужно знать о заказе церковной утвари, иконостасов и других работ по благоустройству храма.
                </p>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                    >
                      <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                      {openFaq === index ? (
                        <Icon name="Minus" size={20} />
                      ) : (
                        <Icon name="Plus" size={20} />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="контакты" className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-12">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Свяжитесь с нами</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="rounded-2xl bg-white/95 text-black p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Отправить запрос</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Имя
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Сообщение
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Опишите ваш проект — что требуется для храма..."
                    />
                  </div>
                  <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-lg py-3 font-normal text-base">
                    Отправить сообщение
                  </Button>
                </form>
              </div>

              <div className="space-y-8">
                <div>
                  <p className="text-xl text-white/90 leading-relaxed text-pretty">
                    По вопросам изготовления иконостасов, киотов, мозаики и отделочных работ — свяжитесь с нами. Мы ответим в течение одного рабочего дня.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon name="MapPin" size={20} />
                      <span className="font-semibold">Адрес</span>
                    </div>
                    <p className="text-white/80 text-sm">с. Тростянка, Богатовский район, Самарская область</p>
                  </div>

                  <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon name="Clock" size={20} />
                      <span className="font-semibold">Режим работы</span>
                    </div>
                    <p className="text-white/80 text-sm">Пн — Сб: 8:00 — 18:00</p>
                  </div>

                  <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon name="History" size={20} />
                      <span className="font-semibold">Опыт</span>
                    </div>
                    <p className="text-white/80 text-sm">Более 20 лет работы с храмами по всей России</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/[0.03] backdrop-blur-2xl ring-1 ring-white/10 p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2 mb-6">
                  <Icon name="Church" size={24} />
                  <span className="text-xl font-semibold">Тростянка</span>
                </div>
                <p className="text-white/80 leading-relaxed text-pretty">
                  Центр благоустройства Храмов. Более 20 лет мы создаём деревянные киоты, иконостасы, церковную утварь и храмовую мозаику. Село Тростянка, Богатовский район, Самарская область.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">УСЛУГИ</h3>
                <ul className="space-y-3">
                  {["Иконостасы", "Киоты", "Мозаика", "Церковная утварь"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">О ЦЕНТРЕ</h3>
                <ul className="space-y-3">
                  {["Наша история", "Мастера", "Материалы", "Галерея работ"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">ИНФОРМАЦИЯ</h3>
                <ul className="space-y-3">
                  {["Контакты", "Как заказать", "Доставка", "Вопросы и ответы"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-white/10 pt-12 mb-12">
              <div className="max-w-md">
                <h3 className="text-lg font-semibold mb-4">Новости центра</h3>
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Введите ваш email"
                    className="flex-1 px-4 py-3 rounded-lg bg-white/5 ring-1 ring-white/20 backdrop-blur border-0 text-white placeholder:text-white/50 focus:ring-2 focus:ring-white/30 focus:outline-none"
                  />
                  <Button className="bg-white text-black hover:bg-white/90 rounded-lg px-6 h-[50px]">Подписаться</Button>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8">
              <p className="text-white/60 text-sm text-center">© 2026 Центр благоустройства Храмов «Тростянка»</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index