import { Link } from 'react-router-dom'
import { PageLayout } from '@/components/layout/PageLayout'
import { Button } from '@/components/ui/Button'
import { BlurBlob } from '@/components/common/BlurBlob'
import { ArrowLeft } from 'lucide-react'

export function NotFoundPage() {
  return (
    <PageLayout>
      <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <BlurBlob size="lg" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" opacity={0.1} />
        <div className="relative z-10 text-center px-6">
          <p className="font-mono text-accent text-sm tracking-widest mb-4">404</p>
          <h1 className="font-display font-bold text-6xl text-text-primary mb-4">
            Página não encontrada
          </h1>
          <p className="text-text-secondary text-lg mb-8 max-w-md mx-auto">
            Parece que essa rota não existe. Volte para a página inicial.
          </p>
          <Link to="/">
            <Button size="lg" variant="primary">
              <ArrowLeft size={18} />
              Voltar ao início
            </Button>
          </Link>
        </div>
      </div>
    </PageLayout>
  )
}
