
import { Header } from '@/components/layout/header';
import { Hero } from '@/components/hero';
import { OptimizedFor } from '@/components/optimized-for';

export default function Home() {
  return (
    <main
      className="min-h-screen text-white overflow-hidden"
      style={{
        background: 'linear-gradient(90deg, rgba(131,199,247,1) 0%, rgba(255,255,255,1) 50%, rgba(131,199,247,1) 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <Header /> 
        <Hero /> 
        <OptimizedFor /> 
      </div>
    </main>
  );
}
