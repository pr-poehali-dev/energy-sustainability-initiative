import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const ContactsAndFooter = () => {
  return (
    <>
      <section id="контакты" className="relative z-10 py-24 px-6 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-card ring-1 ring-border p-12">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance text-foreground">Свяжитесь с нами</h2>
            </div>

            <div>
              <div className="space-y-8">
                <div>
                  <p className="text-xl text-foreground leading-relaxed text-pretty">
                    По вопросам изготовления иконостасов, киотов, мозаики и отделочных работ — свяжитесь с нами. Мы ответим в течение одного рабочего дня.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl bg-secondary ring-1 ring-border p-6">
                    <div className="flex items-center gap-3 mb-2 text-foreground">
                      <Icon name="Phone" size={20} />
                      <span className="font-semibold">Телефон</span>
                    </div>
                    <a href="tel:+79608324353" className="text-muted-foreground text-sm hover:text-foreground transition-colors">+7 (960) 832-43-53 — Андрей</a>
                  </div>

                  <div className="rounded-2xl bg-secondary ring-1 ring-border p-6">
                    <div className="flex items-center gap-3 mb-2 text-foreground">
                      <Icon name="Globe" size={20} />
                      <span className="font-semibold">Сайт</span>
                    </div>
                    <a href="https://master-a.pro" target="_blank" rel="noopener noreferrer" className="text-muted-foreground text-sm hover:text-foreground transition-colors">master-a.pro</a>
                  </div>

                  <div className="rounded-2xl bg-secondary ring-1 ring-border p-6">
                    <div className="flex items-center gap-3 mb-2 text-foreground">
                      <Icon name="MapPin" size={20} />
                      <span className="font-semibold">Адрес</span>
                    </div>
                    <p className="text-muted-foreground text-sm">с. Тростянка, Богатовский район, Самарская область</p>
                  </div>

                  <div className="rounded-2xl bg-secondary ring-1 ring-border p-6">
                    <div className="flex items-center gap-3 mb-2 text-foreground">
                      <Icon name="Clock" size={20} />
                      <span className="font-semibold">Режим работы</span>
                    </div>
                    <p className="text-muted-foreground text-sm">Пн — Сб: 8:00 — 18:00</p>
                  </div>

                  <div className="rounded-2xl bg-secondary ring-1 ring-border p-6">
                    <div className="flex items-center gap-3 mb-2 text-foreground">
                      <Icon name="History" size={20} />
                      <span className="font-semibold">Опыт</span>
                    </div>
                    <p className="text-muted-foreground text-sm">Более 20 лет работы с храмами по всей России</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-card ring-1 ring-border p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2 mb-6 text-foreground">
                  <Icon name="Church" size={24} />
                  <span className="text-xl font-semibold">Тростянка</span>
                </div>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  Центр благоустройства Храмов. Более 20 лет мы создаём деревянные киоты, иконостасы, церковную утварь и храмовую мозаику. Село Тростянка, Богатовский район, Самарская область.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-foreground">О НАС</h3>
                <ul className="space-y-3">
                  {["Иконостасы", "Киоты", "Мозаика", "Церковная утварь"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-foreground">О ЦЕНТРЕ</h3>
                <ul className="space-y-3">
                  {["Наша история", "Мастера", "Материалы", "Галерея работ"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-foreground">ИНФОРМАЦИЯ</h3>
                <ul className="space-y-3">
                  {["Контакты", "Как заказать", "Доставка", "Вопросы и ответы"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-border pt-12 mb-12">
              <div className="max-w-md">
                <h3 className="text-lg font-semibold mb-4 text-foreground">Новости центра</h3>
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Введите ваш email"
                    className="flex-1 px-4 py-3 rounded-lg bg-secondary ring-1 ring-border border-0 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:outline-none"
                  />
                  <Button className="bg-stone-800 text-white hover:bg-stone-700 rounded-lg px-6 h-[50px]">Подписаться</Button>
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-8">
              <p className="text-muted-foreground text-sm text-center">© 2026 Центр благоустройства Храмов «Тростянка»</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default ContactsAndFooter
