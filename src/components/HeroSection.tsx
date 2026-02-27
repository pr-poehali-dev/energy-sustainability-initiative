import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const HeroSection = () => {
  return (
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
  )
}

export default HeroSection
