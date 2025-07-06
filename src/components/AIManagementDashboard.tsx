import React, { useState, useEffect } from 'react';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, Users, MessageSquare, Bot, Zap, Eye, Target } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Dados simulados para os gráficos
const conversationData = [
  { time: '00:00', mensagens: 45, resolvidas: 42, pendentes: 3 },
  { time: '04:00', mensagens: 32, resolvidas: 30, pendentes: 2 },
  { time: '08:00', mensagens: 78, resolvidas: 71, pendentes: 7 },
  { time: '12:00', mensagens: 95, resolvidas: 87, pendentes: 8 },
  { time: '16:00', mensagens: 112, resolvidas: 105, pendentes: 7 },
  { time: '20:00', mensagens: 67, resolvidas: 63, pendentes: 4 },
];

const clientData = [
  { mes: 'Jan', novos: 120, ativos: 450, inativos: 80 },
  { mes: 'Fev', novos: 145, ativos: 520, inativos: 75 },
  { mes: 'Mar', novos: 189, ativos: 680, inativos: 65 },
  { mes: 'Abr', novos: 234, ativos: 780, inativos: 58 },
  { mes: 'Mai', novos: 278, ativos: 890, inativos: 52 },
];

const aiPerformanceData = [
  { name: 'Atendimento', valor: 95, cor: '#10B981' },
  { name: 'Vendas', valor: 87, cor: '#3B82F6' },
  { name: 'Marketing', valor: 92, cor: '#8B5CF6' },
  { name: 'Análise', valor: 89, cor: '#F59E0B' },
];

const chartConfig = {
  mensagens: { label: 'Mensagens', color: '#3B82F6' },
  resolvidas: { label: 'Resolvidas', color: '#10B981' },
  pendentes: { label: 'Pendentes', color: '#F59E0B' },
  novos: { label: 'Novos', color: '#8B5CF6' },
  ativos: { label: 'Ativos', color: '#10B981' },
  inativos: { label: 'Inativos', color: '#EF4444' },
};

const AIManagementDashboard = () => {
  const [animatedValues, setAnimatedValues] = useState({
    totalClientes: 0,
    novasMensagens: 0,
    taxaResolucao: 0,
    iaAtivas: 0,
  });

  // Animação dos números
  useEffect(() => {
    const targets = {
      totalClientes: 1247,
      novasMensagens: 324,
      taxaResolucao: 94,
      iaAtivas: 8,
    };

    const duration = 2000;
    const steps = 60;
    const increment = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setAnimatedValues({
        totalClientes: Math.floor(targets.totalClientes * progress),
        novasMensagens: Math.floor(targets.novasMensagens * progress),
        taxaResolucao: Math.floor(targets.taxaResolucao * progress),
        iaAtivas: Math.floor(targets.iaAtivas * progress),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setAnimatedValues(targets);
      }
    }, increment);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-6 bg-gray-50 p-6 rounded-lg">
      {/* Métricas Principais */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {/* Total de Clientes */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Total Clientes</p>
              <p className="text-gray-900 text-2xl font-bold">{animatedValues.totalClientes.toLocaleString()}</p>
            </div>
            <Users className="h-8 w-8 text-blue-500" />
          </div>
          <div className="flex items-center mt-2 text-green-600 text-sm">
            <TrendingUp className="h-4 w-4 mr-1" />
            +12.5% vs mês anterior
          </div>
        </div>

        {/* Novas Mensagens */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Mensagens Hoje</p>
              <p className="text-gray-900 text-2xl font-bold">{animatedValues.novasMensagens}</p>
            </div>
            <MessageSquare className="h-8 w-8 text-green-500" />
          </div>
          <div className="flex items-center mt-2 text-green-600 text-sm">
            <TrendingUp className="h-4 w-4 mr-1" />
            +8.3% vs ontem
          </div>
        </div>

        {/* Taxa de Resolução */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Taxa Resolução</p>
              <p className="text-gray-900 text-2xl font-bold">{animatedValues.taxaResolucao}%</p>
            </div>
            <Target className="h-8 w-8 text-purple-500" />
          </div>
          <div className="flex items-center mt-2 text-purple-600 text-sm">
            <TrendingUp className="h-4 w-4 mr-1" />
            +2.1% vs semana
          </div>
        </div>

        {/* IAs Ativas */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">IAs Ativas</p>
              <p className="text-gray-900 text-2xl font-bold">{animatedValues.iaAtivas}</p>
            </div>
            <Bot className="h-8 w-8 text-orange-500" />
          </div>
          <div className="flex items-center mt-2 text-orange-600 text-sm">
            <Zap className="h-4 w-4 mr-1" />
            Todas operacionais
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <Tabs defaultValue="dashboard" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-white border border-gray-200">
          <TabsTrigger value="dashboard" className="text-gray-700 data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700">Dashboard Principal</TabsTrigger>
          <TabsTrigger value="relatorios" className="text-gray-700 data-[state=active]:bg-green-50 data-[state=active]:text-green-700">Relatórios IA</TabsTrigger>
          <TabsTrigger value="clientes" className="text-gray-700 data-[state=active]:bg-purple-50 data-[state=active]:text-purple-700">Clientes CRM</TabsTrigger>
          <TabsTrigger value="automacoes" className="text-gray-700 data-[state=active]:bg-orange-50 data-[state=active]:text-orange-700">Automações</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard" className="space-y-6 mt-6">
          <div className="max-h-[500px] overflow-y-auto space-y-6 pr-2">
            {/* Gráficos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Gráfico de Conversas em Tempo Real */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-gray-900 font-semibold mb-4 flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-blue-500" />
                  Conversas em Tempo Real
                </h3>
                <ChartContainer config={chartConfig} className="h-[200px]">
                  <LineChart data={conversationData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis dataKey="time" stroke="#6B7280" />
                    <YAxis stroke="#6B7280" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line 
                      type="monotone" 
                      dataKey="mensagens" 
                      stroke="#3B82F6" 
                      strokeWidth={2}
                      dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
                      activeDot={{ r: 6, stroke: '#3B82F6', strokeWidth: 2, fill: '#1E40AF' }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="resolvidas" 
                      stroke="#10B981" 
                      strokeWidth={2}
                      dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
                    />
                  </LineChart>
                </ChartContainer>
              </div>

              {/* Gráfico de Performance das IAs com números visíveis */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-gray-900 font-semibold mb-4 flex items-center gap-2">
                  <Bot className="h-5 w-5 text-purple-500" />
                  Performance das IAs
                </h3>
                <div className="flex items-center justify-between">
                  <ChartContainer config={chartConfig} className="h-[200px] w-[200px]">
                    <PieChart>
                      <Pie
                        data={aiPerformanceData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="valor"
                      >
                        {aiPerformanceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.cor} />
                        ))}
                      </Pie>
                      <ChartTooltip content={<ChartTooltipContent />} />
                    </PieChart>
                  </ChartContainer>
                  
                  <div className="space-y-3 flex-1 ml-6">
                    {aiPerformanceData.map((ia, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                        <div className="flex items-center gap-3">
                          <div 
                            className="h-4 w-4 rounded-full" 
                            style={{ backgroundColor: ia.cor }}
                          ></div>
                          <span className="text-gray-700 font-medium">{ia.name}</span>
                        </div>
                        <span className="text-gray-900 text-lg font-bold">{ia.valor}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Gráfico de Crescimento de Clientes */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-gray-900 font-semibold mb-4 flex items-center gap-2">
                  <Users className="h-5 w-5 text-green-500" />
                  Crescimento de Clientes
                </h3>
                <ChartContainer config={chartConfig} className="h-[200px]">
                  <AreaChart data={clientData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis dataKey="mes" stroke="#6B7280" />
                    <YAxis stroke="#6B7280" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area 
                      type="monotone" 
                      dataKey="novos" 
                      stackId="1"
                      stroke="#8B5CF6" 
                      fill="#8B5CF6"
                      fillOpacity={0.6}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="ativos" 
                      stackId="1"
                      stroke="#10B981" 
                      fill="#10B981"
                      fillOpacity={0.6}
                    />
                  </AreaChart>
                </ChartContainer>
              </div>

              {/* Status das IAs em Tempo Real */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-gray-900 font-semibold mb-4 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-orange-500" />
                  Status das IAs
                </h3>
                <div className="space-y-3">
                  {aiPerformanceData.map((ia, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                      <div className="flex items-center gap-3">
                        <div 
                          className="h-3 w-3 rounded-full animate-pulse" 
                          style={{ backgroundColor: ia.cor }}
                        ></div>
                        <span className="text-gray-700 font-medium">{ia.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="bg-gray-200 rounded-full h-2 w-16 overflow-hidden">
                          <div 
                            className="h-full transition-all duration-1000 ease-out"
                            style={{ 
                              width: `${ia.valor}%`, 
                              backgroundColor: ia.cor 
                            }}
                          ></div>
                        </div>
                        <span className="text-gray-900 text-sm font-medium">{ia.valor}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="relatorios" className="space-y-6 mt-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-gray-900 font-semibold mb-4">Relatórios de IA</h3>
            <p className="text-gray-600">Aqui você encontrará relatórios detalhados sobre o desempenho das suas IAs.</p>
          </div>
        </TabsContent>

        <TabsContent value="clientes" className="space-y-6 mt-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-gray-900 font-semibold mb-4">Gestão de Clientes CRM</h3>
            <p className="text-gray-600">Gerencie seus clientes e acompanhe o relacionamento com cada um deles.</p>
          </div>
        </TabsContent>

        <TabsContent value="automacoes" className="space-y-6 mt-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-gray-900 font-semibold mb-4">Automações Ativas</h3>
            <p className="text-gray-600">Configure e monitore suas automações de IA e workflows.</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AIManagementDashboard;
