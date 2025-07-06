import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import AIManagementDashboard from './AIManagementDashboard';
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
      
      {/* AI Management Dashboard com efeito glassmórfico */}
      <div className={`w-full max-w-7xl mt-12 z-10 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <div className="relative rounded-xl overflow-hidden border border-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm bg-gradient-to-br from-slate-900/90 to-blue-900/80 shadow-2xl shadow-blue-500/10">
          {/* Dashboard Header */}
          <div className="bg-gradient-to-r from-slate-800/95 to-blue-800/95 backdrop-blur-md w-full border-b border-blue-400/20">
            <div className="flex items-center justify-between p-4 bg-gray-50">
              <div className="flex items-center gap-4">
                <div className="h-8 w-8 rounded-md flex items-center justify-center bg-gradient-to-r from-orange-600 to-orange-500">
                  <div className="h-3 w-3 rounded-sm bg-white animate-pulse"></div>
                </div>
                <span className="font-semibold text-slate-950">Sistema de Gestão IA - CRM Inteligente</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-r from-green-400 to-blue-500 border-2 border-white flex items-center justify-center text-xs font-medium text-white shadow-lg">AI</div>
                  <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 border-2 border-white flex items-center justify-center text-xs font-medium text-white shadow-lg">ML</div>
                  <div className="h-8 w-8 rounded-full bg-gradient-to-r from-orange-400 to-red-500 border-2 border-white flex items-center justify-center text-xs font-medium text-white shadow-lg">CRM</div>
                  <div className="h-8 w-8 rounded-full bg-gradient-to-r from-indigo-400 to-blue-600 border-2 border-white flex items-center justify-center text-xs text-white font-medium shadow-lg">+12</div>
                </div>
                
                <div className="h-8 px-3 rounded-md text-white flex items-center justify-center text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg hover:shadow-xl transition-all duration-300">
                  Compartilhar Dashboard
                </div>
              </div>
            </div>
            
            {/* Dashboard Content */}
            <div className="flex h-[600px] overflow-hidden">
              {/* Sidebar */}
              <div className="w-64 border-r border-blue-400/20 p-4 space-y-4 hidden md:block bg-gradient-to-b from-slate-800/60 to-blue-900/40 backdrop-blur-sm">
                <div className="space-y-2">
                  <div className="text-xs text-blue-300 uppercase font-medium tracking-wider">Central de IA</div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md bg-gradient-to-r from-blue-600/80 to-purple-600/60 text-white font-medium shadow-lg">
                      <div className="h-3 w-3 rounded-sm bg-gradient-to-r from-green-400 to-blue-500 animate-pulse"></div>
                      <span>Dashboard Principal</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-blue-200 hover:bg-blue-800/40 transition-all duration-200">
                      <div className="h-3 w-3 rounded-sm bg-blue-400"></div>
                      <span>Relatórios IA</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-blue-200 hover:bg-blue-800/40 transition-all duration-200">
                      <div className="h-3 w-3 rounded-sm bg-purple-400"></div>
                      <span>Clientes CRM</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-blue-200 hover:bg-blue-800/40 transition-all duration-200">
                      <div className="h-3 w-3 rounded-sm bg-green-400"></div>
                      <span>Automações</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2 pt-4">
                  <div className="text-xs text-blue-300 uppercase font-medium tracking-wider">IA's Ativas</div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-blue-200 hover:bg-blue-800/40 transition-all duration-200">
                      <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse"></div>
                      <span>Atendimento</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-blue-200 hover:bg-blue-800/40 transition-all duration-200">
                      <div className="h-3 w-3 rounded-full bg-blue-400 animate-pulse"></div>
                      <span>Vendas</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-blue-200 hover:bg-blue-800/40 transition-all duration-200">
                      <div className="h-3 w-3 rounded-full bg-purple-400 animate-pulse"></div>
                      <span>Marketing</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-blue-200 hover:bg-blue-800/40 transition-all duration-200">
                      <div className="h-3 w-3 rounded-full bg-orange-400 animate-pulse"></div>
                      <span>Análise</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Main Dashboard Content */}
              <div className="bg-gray-50">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6 min-w-0">
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <h3 className="font-semibold text-lg text-slate-950">Gestão de IA & CRM</h3>
                    <span className="text-xs bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1 rounded-full font-medium shadow-lg animate-pulse">Online</span>
                  </div>
                  
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <div className="h-8 w-8 rounded-md bg-gradient-to-r from-blue-600/80 to-purple-600/60 flex items-center justify-center text-white hover:shadow-lg transition-all duration-300 cursor-pointer">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 12H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M12 9L12 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div className="h-8 w-8 rounded-md bg-gradient-to-r from-purple-600/80 to-pink-600/60 flex items-center justify-center text-white hover:shadow-lg transition-all duration-300 cursor-pointer">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 9L17 17H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17 17L7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="h-8 px-3 rounded-md text-white flex items-center justify-center text-sm font-medium whitespace-nowrap transition-all duration-300 cursor-pointer bg-gradient-to-r from-orange-500 to-yellow-500 shadow-lg hover:shadow-xl">Nova Automação</div>
                  </div>
                </div>
                
                {/* AI Management Dashboard */}
                <div className="overflow-hidden">
                  <AIManagementDashboard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;