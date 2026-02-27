import { Button } from "@/components/ui/button"
import { useState } from "react"
import Icon from "@/components/ui/icon"

interface FAQ {
  question: string
  answer: string
}

interface GalleryItem {
  src: string
  alt: string
  title: string
  location: string
  category: string
}

const galleryItems: GalleryItem[] = [
  {
    src: "https://cdn.poehali.dev/projects/12f04b4e-e6b1-41eb-ad0d-6b60c09a26ea/bucket/ff708a02-587c-4fa6-afd3-ba3e7a567c54.jpg",
    alt: "Иконостас Нечаянная радость, Зубчаниновка",
    title: "Нечаянная Радость",
    location: "Зубчаниновка, Самарская область",
    category: "Иконостасы",
  },
  {
    src: "https://cdn.poehali.dev/projects/12f04b4e-e6b1-41eb-ad0d-6b60c09a26ea/bucket/1159c379-3f80-4e56-96a2-534f524d72b8.JPG",
    alt: "Иконостас, Кротовка",
    title: "Деревянный иконостас",
    location: "Кротовка",
    category: "Иконостасы",
  },
  {
    src: "https://cdn.poehali.dev/projects/12f04b4e-e6b1-41eb-ad0d-6b60c09a26ea/bucket/2dbcb2b9-f56a-475d-8b38-47e41a6c7a6f.jpg",
    alt: "Царские врата, храм Ильи Пророка",
    title: "Царские врата",
    location: "Храм Ильи Пророка",
    category: "Иконостасы",
  },
  {
    src: "https://cdn.poehali.dev/projects/12f04b4e-e6b1-41eb-ad0d-6b60c09a26ea/bucket/e8efd570-cefa-4920-8357-b84ce87ddb31.jpg",
    alt: "Иконостас, Димитровград",
    title: "Иконостас",
    location: "Димитровград",
    category: "Иконостасы",
  },
  {
    src: "https://cdn.poehali.dev/projects/12f04b4e-e6b1-41eb-ad0d-6b60c09a26ea/bucket/7343510c-8b9e-4638-9821-53e385b33c8b.JPG",
    alt: "Иконостас Серафимовская, братья Корыстелевы",
    title: "Серафимовская церковь",
    location: "Иконостас ручной работы",
    category: "Иконостасы",
  },
  {
    src: "https://cdn.poehali.dev/projects/12f04b4e-e6b1-41eb-ad0d-6b60c09a26ea/bucket/e8c21f08-759a-4557-b2a7-266150a73541.jpg",
    alt: "Иконостас в гостинице Русская охота",
    title: "Иконостас",
    location: "Гостиница «Русская охота»",
    category: "Иконостасы",
  },
  {
    src: "https://cdn.poehali.dev/projects/12f04b4e-e6b1-41eb-ad0d-6b60c09a26ea/bucket/8112ced8-3884-4e9b-85ab-4899bc1030fd.jpg",
    alt: "Иконостас, Винновка",
    title: "Иконостас",
    location: "Винновка",
    category: "Иконостасы",
  },
  {
    src: "https://cdn.poehali.dev/projects/12f04b4e-e6b1-41eb-ad0d-6b60c09a26ea/bucket/b7dd4cfc-d8d4-414d-8d14-70f0a301de3e.JPG",
    alt: "Иконостас, храм Ильи Пророка",
    title: "Иконостас Ильи Пророка",
    location: "Самара, ул. 116-я",
    category: "Иконостасы",
  },
  {
    src: "https://cdn.poehali.dev/projects/12f04b4e-e6b1-41eb-ad0d-6b60c09a26ea/bucket/969b5d41-1ba0-4503-b825-5e0a84e81ebd.jpg",
    alt: "Монтаж иконостаса Нечаянная Радость, Зубчаниновка",
    title: "Нечаянная Радость — монтаж",
    location: "Зубчаниновка, Самарская область",
    category: "Иконостасы",
  },
  {
    src: "https://cdn.poehali.dev/projects/12f04b4e-e6b1-41eb-ad0d-6b60c09a26ea/bucket/86c3165e-1701-42c9-94f6-786b47f552e0.jpg",
    alt: "Иконостас деревянный резной",
    title: "Иконостас",
    location: "Ручная работа",
    category: "Иконостасы",
  },
  {
    src: "https://cdn.poehali.dev/projects/12f04b4e-e6b1-41eb-ad0d-6b60c09a26ea/bucket/7d3197f5-0022-4eb4-a188-7f1cadbd441a.JPG",
    alt: "Иконостас в деревянном храме",
    title: "Иконостас",
    location: "Деревянный храм",
    category: "Иконостасы",
  },
  {
    src: "https://cdn.poehali.dev/projects/12f04b4e-e6b1-41eb-ad0d-6b60c09a26ea/bucket/9a21fb88-4146-4038-9e76-89575030a7a8.jpg",
    alt: "Иконостас, ул. Калинина",
    title: "Иконостас",
    location: "Самара, ул. Калинина",
    category: "Иконостасы",
  },
  {
    src: "https://cdn.poehali.dev/projects/12f04b4e-e6b1-41eb-ad0d-6b60c09a26ea/bucket/5d753485-4d41-46fe-8ee3-a9913b809859.jpg",
    alt: "Иконостас резной с росписью",
    title: "Иконостас",
    location: "Ручная работа",
    category: "Иконостасы",
  },
  {
    src: "https://cdn.poehali.dev/projects/12f04b4e-e6b1-41eb-ad0d-6b60c09a26ea/bucket/72a67cb6-6335-4bce-b083-57c556e07012.jpg",
    alt: "Резной киот с иконой Богородицы",
    title: "Киот резной",
    location: "Ручная резьба по дереву",
    category: "Киоты",
  },
  {
    src: "https://cdn.poehali.dev/projects/12f04b4e-e6b1-41eb-ad0d-6b60c09a26ea/bucket/317dc5f9-14b9-46c1-a0c4-63fa9a3e62f5.jpg",
    alt: "Киот белый с золотом в мастерской",
    title: "Киот белый с золотом",
    location: "Мастерская",
    category: "Киоты",
  },
  {
    src: "https://cdn.poehali.dev/projects/12f04b4e-e6b1-41eb-ad0d-6b60c09a26ea/bucket/22843f6d-0731-4ec2-9baf-48c8182fc20a.JPG",
    alt: "Белый киот с иконами",
    title: "Киот белый",
    location: "Мастерская",
    category: "Киоты",
  },
  {
    src: "https://cdn.poehali.dev/projects/12f04b4e-e6b1-41eb-ad0d-6b60c09a26ea/bucket/ddeff19a-08c7-442f-bfa9-090ab180a31c.jpg",
    alt: "Киот с резным золочёным обрамлением и иконой Богородицы",
    title: "Киот «Виноградная лоза»",
    location: "Ручная резьба, золочение",
    category: "Киоты",
  },
  {
    src: "https://cdn.poehali.dev/projects/12f04b4e-e6b1-41eb-ad0d-6b60c09a26ea/bucket/a34dee0b-425e-452b-8d7b-2722b2e712e3.jpg",
    alt: "Киот белый с золотом в мастерской",
    title: "Киот белый с золотом",
    location: "Мастерская",
    category: "Киоты",
  },
  {
    src: "https://cdn.poehali.dev/projects/12f04b4e-e6b1-41eb-ad0d-6b60c09a26ea/bucket/1b0de553-3d60-4457-9244-83e26b58fe5a.jpg",
    alt: "Киот белый с золотом — производство",
    title: "Киот — производство",
    location: "Мастерская",
    category: "Киоты",
  },
  {
    src: "https://cdn.poehali.dev/projects/12f04b4e-e6b1-41eb-ad0d-6b60c09a26ea/bucket/c3ca9561-aacd-4fe4-8e74-63ba6a93b982.JPG",
    alt: "Резной аналой с куполом",
    title: "Аналой резной",
    location: "Ручная резьба по дереву",
    category: "Утварь",
  },
  {
    src: "https://cdn.poehali.dev/projects/12f04b4e-e6b1-41eb-ad0d-6b60c09a26ea/bucket/7f6a4eea-c8c0-4fb3-b685-092882e0bdb9.JPG",
    alt: "Резное Распятие в мастерской",
    title: "Распятие резное",
    location: "Мастерская",
    category: "Утварь",
  },
  {
    src: "https://cdn.poehali.dev/projects/12f04b4e-e6b1-41eb-ad0d-6b60c09a26ea/bucket/4bed6513-34ec-454b-b3fb-9f7381211999.jpg",
    alt: "Паникадило — люстра храмовая",
    title: "Паникадило",
    location: "Храмовая люстра",
    category: "Утварь",
  },
  {
    src: "https://cdn.poehali.dev/projects/12f04b4e-e6b1-41eb-ad0d-6b60c09a26ea/bucket/a2eec3f7-5efb-4c4b-b73f-7db637d6d544.jpeg",
    alt: "Престол деревянный резной",
    title: "Престол резной",
    location: "Ручная резьба по дереву",
    category: "Утварь",
  },
  {
    src: "https://cdn.poehali.dev/projects/12f04b4e-e6b1-41eb-ad0d-6b60c09a26ea/bucket/2072f6d3-8ccb-4169-a093-bf8683529ad9.jpg",
    alt: "Заготовки киотов в мастерской",
    title: "Производство киотов",
    location: "Мастерская",
    category: "Мастерская",
  },
]

const galleryCategories = ["Все", "Иконостасы", "Киоты", "Утварь", "Мастерская"]

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [lightbox, setLightbox] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState("Все")

  const filteredItems = activeCategory === "Все"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory)

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
    <div className="min-h-screen bg-background text-foreground">
      <div className="relative min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(https://cdn.poehali.dev/files/4e9d395f-bf04-4d97-b220-30fa8cc5af0a.jpg)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" />
        </div>

        <nav className="relative z-10 flex items-center justify-between p-6">
          <div className="flex items-center gap-2 px-4 py-2 bg-white/70 ring-1 ring-stone-300 backdrop-blur rounded-full text-stone-800">
            <Icon name="Church" size={20} />
            <span className="font-medium text-balance">Тростянка</span>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {["О нас", "Наши работы", "Этапы работы", "Отзывы", "Контакты"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                className="px-4 py-2 bg-white/70 ring-1 ring-stone-300 backdrop-blur rounded-full text-stone-800 hover:bg-white/90 transition-colors text-sm font-medium"
              >
                {item}
              </a>
            ))}
          </div>


        </nav>

        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 text-center text-white">
          <div className="mb-6 px-4 py-2 bg-white/20 ring-1 ring-white/40 backdrop-blur rounded-full">
            <span className="text-sm font-medium">Более 20 лет мастерства и традиций</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-light tracking-tight mb-6 text-balance">
            Благоустройство храмов
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mb-12 leading-relaxed text-pretty">
            Изготовление деревянных киотов, иконостасов, церковной утвари, храмовой мозаики и мозаичных икон. Внутренняя отделка плиткой и гранитом. Село Тростянка, Самарская область.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button
              size="lg"
              variant="outline"
              className="bg-white/20 ring-1 ring-white/40 backdrop-blur border-0 text-white hover:bg-white/30 rounded-full px-8 py-4 text-lg"
            >
              Наши работы
            </Button>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 bg-white/20 ring-1 ring-white/40 backdrop-blur rounded-full">
            <Icon name="Award" size={16} />
            <span className="text-sm font-medium">Ручная работа по православным канонам</span>
          </div>
        </div>
      </div>

      <section id="о-нас" className="relative z-10 py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-foreground">О нас</h2>
          </div>

          <div className="mb-16">
            <p className="text-muted-foreground text-lg leading-relaxed mb-12 max-w-3xl">
              Мастерская занимается изготовлением церковной утвари и предметов храмового убранства более 20 лет.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div className="rounded-2xl bg-card ring-1 ring-border p-8 flex gap-6 items-start">
                <div className="inline-flex shrink-0 items-center justify-center w-14 h-14 rounded-full bg-accent ring-1 ring-border text-2xl">
                  🪵
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Андрей</h3>
                  <p className="text-muted-foreground leading-relaxed">Специализируется на изготовлении деревянных киотов и иконостасов.</p>
                </div>
              </div>
              <div className="rounded-2xl bg-card ring-1 ring-border p-8 flex gap-6 items-start">
                <div className="inline-flex shrink-0 items-center justify-center w-14 h-14 rounded-full bg-accent ring-1 ring-border text-2xl">
                  🎨
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Ирина</h3>
                  <p className="text-muted-foreground leading-relaxed">Изготовление мозаичных икон и стенной мозаики.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            <div className="rounded-2xl bg-card ring-1 ring-border p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent ring-1 ring-border mb-6 text-foreground">
                <Icon name="Frame" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Киоты и иконостасы</h3>
              <p className="text-muted-foreground leading-relaxed">Деревянные киоты и иконостасы ручной работы по индивидуальным проектам.</p>
            </div>

            <div className="rounded-2xl bg-card ring-1 ring-border p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent ring-1 ring-border mb-6 text-foreground">
                <Icon name="Palette" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Мозаика и иконы</h3>
              <p className="text-muted-foreground leading-relaxed">Храмовая мозаика и мозаичные иконы с соблюдением канонов.</p>
            </div>

            <div className="rounded-2xl bg-card ring-1 ring-border p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent ring-1 ring-border mb-6 text-foreground">
                <Icon name="Gem" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Отделка и облицовка</h3>
              <p className="text-muted-foreground leading-relaxed">Внутренняя отделка храмов плиткой и натуральным гранитом.</p>
            </div>

            <div className="rounded-2xl bg-card ring-1 ring-border p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent ring-1 ring-border mb-6 text-foreground">
                <Icon name="Crown" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Церковная утварь</h3>
              <p className="text-muted-foreground leading-relaxed">Изготовление предметов церковного обихода из дерева и других материалов.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="наши-работы" className="relative z-10 py-24 px-6 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance text-foreground">Наши работы</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Каждое изделие создаётся вручную с соблюдением православных канонов и традиций иконописи.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {galleryCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-stone-800 text-white"
                    : "bg-white text-stone-600 hover:bg-stone-100 hover:text-stone-800 ring-1 ring-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.src}
                className="rounded-2xl overflow-hidden ring-1 ring-border group cursor-pointer bg-card"
                onClick={() => setLightbox(galleryItems.indexOf(item))}
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white/80 rounded-full p-3">
                      <Icon name="ZoomIn" size={28} className="text-stone-800" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <span className="inline-block text-xs text-white/70 bg-white/20 px-2 py-0.5 rounded-full mb-1">{item.category}</span>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-white/80 text-sm mt-1">{item.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
            onClick={() => setLightbox(null)}
          >
            <Icon name="X" size={24} />
          </button>

          <button
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + galleryItems.length) % galleryItems.length) }}
          >
            <Icon name="ChevronLeft" size={28} />
          </button>

          <div className="max-w-5xl max-h-[85vh] px-20" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryItems[lightbox].src}
              alt={galleryItems[lightbox].alt}
              className="max-h-[75vh] max-w-full object-contain rounded-xl"
            />
            <div className="text-center mt-4">
              <h3 className="text-xl font-semibold">{galleryItems[lightbox].title}</h3>
              <p className="text-white/60 text-sm mt-1">{galleryItems[lightbox].location}</p>
            </div>
          </div>

          <button
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % galleryItems.length) }}
          >
            <Icon name="ChevronRight" size={28} />
          </button>
        </div>
      )}

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
    </div>
  )
}

export default Index