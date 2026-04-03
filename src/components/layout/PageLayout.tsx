import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { ScrollToTopButton } from '@/components/common/ScrollToTopButton'

interface PageLayoutProps {
  children: React.ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <ScrollToTopButton />
      <Footer />
    </div>
  )
}
