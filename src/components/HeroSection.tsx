import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import TaskBoard from './TaskBoard';
import { Loader } from 'lucide-react';
const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);
  return <section className="relative w-full py-12 md:py-20 px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Cosmic particle effect (background dots) */}
      <div className="absolute inset-0 cosmic-grid opacity-30"></div>
      
      {/* Gradient glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full">
        <div className="w-full h-full opacity-10 bg-primary blur-[120px]"></div>
      </div>
      
      <div className={`relative z-10 max-w-4xl text-center space-y-6 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium rounded-full bg-muted text-primary">
            <span className="flex h-2 w-2 rounded-full bg-primary"></span>
            Lançando novos recursos de pagamento
            <Loader className="h-3 w-3 animate-spin text-primary" />
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-balance text-foreground">
          Operações financeiras para empresas em <span className="text-primary">crescimento</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
          Otimize seus fluxos de trabalho financeiros com nossa plataforma fintech abrangente. Construída para empresas modernas que valorizam eficiência, conformidade e crescimento escalável.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 items-center">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/80 hover:text-primary-foreground text-base h-12 px-8 transition-all duration-200 min-h-[48px]">
            Começar gratuitamente
          </Button>
          <Button variant="outline" className="border-border text-foreground hover:bg-accent hover:text-accent-foreground text-base h-12 px-8 transition-all duration-200 min-h-[48px]">
            Agendar demonstração
          </Button>
        </div>
        
        <div className="pt-6 text-sm text-muted-foreground">
          Sem cartão de crédito necessário • Teste gratuito de 14 dias
        </div>
      </div>
      
      {/* CRM Demo UI com efeito glassmórfico */}
      <div className={`w-full max-w-7xl mt-12 z-10 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <div className="relative rounded-xl overflow-hidden border border-blue-200/30 backdrop-blur-sm bg-gradient-to-br from-blue-50/80 to-indigo-50/80 shadow-xl shadow-blue-100/50">
          {/* CRM Header */}
          <div className="bg-white/90 backdrop-blur-md w-full border-b border-blue-100/50">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-4">
                <div className="h-8 w-8 rounded-md bg-blue-500 flex items-center justify-center">
                  <div className="h-3 w-3 rounded-sm bg-white"></div>
                </div>
                <span className="text-slate-800 font-semibold">Pipeline de Vendas - CRM</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="h-8 w-8 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-xs font-medium text-blue-600">JS</div>
                  <div className="h-8 w-8 rounded-full bg-green-100 border-2 border-white flex items-center justify-center text-xs font-medium text-green-600">MF</div>
                  <div className="h-8 w-8 rounded-full bg-purple-100 border-2 border-white flex items-center justify-center text-xs font-medium text-purple-600">AR</div>
                  <div className="h-8 w-8 rounded-full bg-orange-100 border-2 border-white flex items-center justify-center text-xs text-orange-600 font-medium">+5</div>
                </div>
                
                <div className="h-8 px-3 rounded-md bg-blue-500 text-white flex items-center justify-center text-sm font-medium">
                  Compartilhar
                </div>
              </div>
            </div>
            
            {/* CRM Content */}
            <div className="flex h-[600px] overflow-hidden">
              {/* Sidebar */}
              <div className="w-64 border-r border-blue-100/50 p-4 space-y-4 hidden md:block bg-white/50">
                <div className="space-y-2">
                  <div className="text-xs text-slate-500 uppercase font-medium">Navegação</div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md bg-blue-100/70 text-blue-800 font-medium">
                      <div className="h-3 w-3 rounded-sm bg-blue-500"></div>
                      <span>Pipeline</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-600 hover:bg-slate-100/50">
                      <div className="h-3 w-3 rounded-sm bg-slate-400"></div>
                      <span>Relatórios</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-600 hover:bg-slate-100/50">
                      <div className="h-3 w-3 rounded-sm bg-slate-400"></div>
                      <span>Clientes</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-600 hover:bg-slate-100/50">
                      <div className="h-3 w-3 rounded-sm bg-slate-400"></div>
                      <span>Campanhas</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2 pt-4">
                  <div className="text-xs text-slate-500 uppercase font-medium">IA'S EM TRABALHO</div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-600 hover:bg-slate-100/50">
                      <div className="h-3 w-3 rounded-full bg-green-400"></div>
                      <span>Vendas</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-600 hover:bg-slate-100/50">
                      <div className="h-3 w-3 rounded-full bg-blue-400"></div>
                      <span>Marketing</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-600 hover:bg-slate-100/50">
                      <div className="h-3 w-3 rounded-full bg-purple-400"></div>
                      <span>Suporte</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Main Content */}
              <div className="flex-1 p-4 bg-gradient-to-br from-white/80 to-blue-50/30 overflow-hidden">
                {/* Board Header */}
                <div className="flex items-center justify-between mb-6 min-w-0">
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <h3 className="font-semibold text-slate-800">Oportunidades de Vendas</h3>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">23</span>
                  </div>
                  
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <div className="h-8 w-8 rounded-md bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors cursor-pointer">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 12H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M12 9L12 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div className="h-8 w-8 rounded-md bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors cursor-pointer">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 9L17 17H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17 17L7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="h-8 px-3 rounded-md bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center text-sm font-medium whitespace-nowrap transition-colors cursor-pointer">Adicionar novo cliente</div>
                  </div>
                </div>
                
                {/* Kanban Board */}
                <div className="overflow-hidden">
                  <TaskBoard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;