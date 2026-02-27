import Icon from "@/components/ui/icon"

const WorkflowAndReviews = () => {
  return (
    <>
      <section id="этапы-работы" className="relative z-10 py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="bg-card ring-1 ring-border p-12 py-[30px] rounded-3xl">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance text-foreground">Как мы работаем</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                От первой встречи до установки готового изделия в храме — каждый этап под контролем мастеров.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="bg-secondary ring-1 ring-border p-8 h-80 flex flex-col my-0 py-8 rounded-xl">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-muted-foreground mb-4">01.</div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Консультация</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Обсуждаем ваши пожелания, изучаем особенности храма, при необходимости выезжаем на объект для замеров и оценки пространства.
                  </p>
                </div>
              </div>

              <div className="bg-secondary ring-1 ring-border p-8 h-80 flex flex-col rounded-2xl">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-muted-foreground mb-4">02.</div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Проектирование</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Разрабатываем эскизный проект с учётом архитектуры храма, канонов и ваших пожеланий. Согласовываем материалы, размеры и детали.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-secondary ring-1 ring-border p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-muted-foreground mb-4">03.</div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Изготовление</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Мастера вручную создают изделие в нашей мастерской в селе Тростянка, используя проверенные технологии и натуральные материалы.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-secondary ring-1 ring-border p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-muted-foreground mb-4">04.</div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Доставка и монтаж</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Бережно доставляем готовое изделие и выполняем профессиональный монтаж на месте. Гарантируем качество установки.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl overflow-hidden ring-1 ring-border">
            <img
              src="https://cdn.poehali.dev/projects/12f04b4e-e6b1-41eb-ad0d-6b60c09a26ea/files/d9259d61-f435-41f5-983e-00aa3b7b7c0b.jpg"
              alt="Мастер за работой — резьба по дереву для иконостаса"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      <section id="отзывы" className="relative z-10 py-24 px-6 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-card ring-1 ring-border p-12">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance text-foreground">Отзывы</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Что говорят наши клиенты о работах центра «Тростянка»</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: "Мария М.", text: "Аналой ажурный, воздушный, легкий, т.к. резные боковины - из толстой фанеры, а верхняя наклонная часть - из дерева, отполированная. В жизни смотрится лучше, чем на картинке. Всем понравился. Спасибо производителю. Но, считаю, что дороговато для фанерного, хоть и красивого аналоя. Отдельное спасибо за качественную упаковку (пришел в собранном виде)." },
                { name: "Наталья П.", text: "Товар добрался в Карельскую глубинку, спасибо за доставку, понравился всем, стоит устойчиво, лёгкий, рисунок на берёзовой фанере, спасибо производителю." },
                { name: "Шевцова Олеся", text: "Спаси Господь за труды. Все хорошо. Аналои понравились. Благодарим." },
                { name: "Лилия Г.", text: "Для нашего храма очень подходит (Аналой)." },
              ].map((review) => (
                <div key={review.name} className="rounded-2xl bg-secondary ring-1 ring-border p-8 flex flex-col gap-4">
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map((s) => (
                      <Icon key={s} name="Star" size={16} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed flex-1">«{review.text}»</p>
                  <p className="font-semibold text-foreground">{review.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default WorkflowAndReviews
