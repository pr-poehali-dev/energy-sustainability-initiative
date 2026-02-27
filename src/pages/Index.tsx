import HeroSection from "@/components/HeroSection"
import GallerySection from "@/components/GallerySection"
import WorkflowAndReviews from "@/components/WorkflowAndReviews"
import ContactsAndFooter from "@/components/ContactsAndFooter"

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <GallerySection />
      <WorkflowAndReviews />
      <ContactsAndFooter />
    </div>
  )
}

export default Index
