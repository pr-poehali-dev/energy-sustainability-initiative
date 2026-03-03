import { useState } from "react"
import Icon from "@/components/ui/icon"

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

const GallerySection = () => {
  const [lightbox, setLightbox] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState("Все")

  const filteredItems = activeCategory === "Все"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory)

  return (
    <>
      <section id="о-нас" className="relative z-10 py-24 px-6 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-foreground">О нас</h2>
          </div>

          <div className="mb-16">
            <p className="text-muted-foreground text-lg leading-relaxed mb-12 max-w-3xl">
              Мастерская занимается изготовлением церковной утвари и предметов храмового убранства более 20 лет.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div className="rounded-2xl ring-1 ring-border p-8 flex gap-6 items-start bg-card">
                <div className="inline-flex shrink-0 items-center justify-center w-14 h-14 rounded-full bg-accent ring-1 ring-border text-2xl">
                  🪵
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Андрей</h3>
                  <p className="text-muted-foreground leading-relaxed">Специализируется на изготовлении деревянных киотов и иконостасов.</p>
                </div>
              </div>
              <div className="rounded-2xl ring-1 ring-border p-8 flex gap-6 items-start bg-card">
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
            <div className="rounded-2xl ring-1 ring-border p-8 text-center bg-card">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent ring-1 ring-border mb-6 text-foreground">
                <Icon name="Frame" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Киоты и иконостасы</h3>
              <p className="text-muted-foreground leading-relaxed">Деревянные киоты и иконостасы ручной работы по индивидуальным проектам.</p>
            </div>

            <div className="rounded-2xl ring-1 ring-border p-8 text-center bg-card">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent ring-1 ring-border mb-6 text-foreground">
                <Icon name="Palette" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Мозаика и иконы</h3>
              <p className="text-muted-foreground leading-relaxed">Храмовая мозаика и мозаичные иконы с соблюдением канонов.</p>
            </div>

            <div className="rounded-2xl ring-1 ring-border p-8 text-center bg-card">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent ring-1 ring-border mb-6 text-foreground">
                <Icon name="Gem" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Отделка и облицовка</h3>
              <p className="text-muted-foreground leading-relaxed">Внутренняя отделка храмов плиткой и натуральным гранитом.</p>
            </div>

            <div className="rounded-2xl ring-1 ring-border p-8 text-center bg-card">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent ring-1 ring-border mb-6 text-foreground">
                <Icon name="Crown" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Церковная утварь</h3>
              <p className="text-muted-foreground leading-relaxed">Изготовление предметов церковного обихода из дерева и других материалов.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="наши-работы" className="relative z-10 py-24 px-6 bg-background">
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
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-muted-foreground hover:bg-secondary hover:text-foreground ring-1 ring-border"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur rounded-full text-white text-xs font-medium mb-2">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-1 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.location}</p>
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
    </>
  )
}

export default GallerySection