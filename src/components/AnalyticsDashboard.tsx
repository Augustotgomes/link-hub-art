
import React, { useState, useEffect } from 'react';
import { getClickAnalytics, clearClickAnalytics, AnalyticsEvent } from '@/hooks/use-click-analytics';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const AnalyticsDashboard: React.FC = () => {
  const [analyticsEvents, setAnalyticsEvents] = useState<AnalyticsEvent[]>([]);
  const [filter, setFilter] = useState<string>('all');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const navigate = useNavigate();

  useEffect(() => {
    const loadAnalytics = () => {
      const data = getClickAnalytics();
      setAnalyticsEvents(data);
    };
    
    loadAnalytics();
    
    // Set up interval to refresh data every 5 seconds
    const intervalId = setInterval(loadAnalytics, 5000);
    
    return () => clearInterval(intervalId);
  }, []);

  const handleClearData = () => {
    clearClickAnalytics();
    setAnalyticsEvents([]);
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  // Filter by section and type
  const filteredEvents = analyticsEvents
    .filter(event => filter === 'all' || event.section === filter)
    .filter(event => typeFilter === 'all' || event.type === typeFilter);

  const sections = Array.from(new Set(analyticsEvents.map(event => event.section)));
  const eventTypes = Array.from(new Set(analyticsEvents.map(event => event.type)));

  const getEventCounts = () => {
    const counts: Record<string, number> = {};
    analyticsEvents.forEach(event => {
      counts[event.type] = (counts[event.type] || 0) + 1;
    });
    return counts;
  };

  const getSectionCounts = () => {
    const counts: Record<string, number> = {};
    analyticsEvents.forEach(event => {
      counts[event.section] = (counts[event.section] || 0) + 1;
    });
    return counts;
  };

  const eventCounts = getEventCounts();
  const sectionCounts = getSectionCounts();
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="flex items-center mb-8">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={handleBackToHome} 
          className="mr-4 border-white/20"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar
        </Button>
        <div>
          <h2 className="text-3xl font-bold font-display">Dashboard de Análise</h2>
          <p className="text-white/70">
            Visualize cliques, navegações e acessos a links na sua aplicação
          </p>
        </div>
      </div>

      {analyticsEvents.length === 0 ? (
        <Card className="glass-card border-0">
          <CardContent className="p-6">
            <p className="text-center text-white/60">
              Nenhum dado de analytics registrado ainda. Interaja com o site para começar a coletar dados.
            </p>
          </CardContent>
        </Card>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="glass-card border-0">
              <CardHeader>
                <CardTitle>Total de Eventos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold">{analyticsEvents.length}</p>
                <div className="mt-4 space-y-1">
                  {Object.entries(eventCounts).map(([type, count]) => (
                    <div key={type} className="flex justify-between text-sm">
                      <span className="text-white/70 capitalize">{type.replace('_', ' ')}</span>
                      <span>{count}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-0">
              <CardHeader>
                <CardTitle>Seções mais Acessadas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {Object.entries(sectionCounts)
                    .sort(([, a], [, b]) => b - a)
                    .slice(0, 5)
                    .map(([section, count]) => (
                      <div key={section} className="flex justify-between items-center">
                        <span className="text-white/70">{section}</span>
                        <span className="font-bold">{count}</span>
                      </div>
                    ))
                  }
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-0">
              <CardHeader>
                <CardTitle>Último Evento</CardTitle>
              </CardHeader>
              <CardContent>
                {analyticsEvents.length > 0 && (
                  <div>
                    <p className="font-medium capitalize">{analyticsEvents[analyticsEvents.length - 1].type.replace('_', ' ')}</p>
                    <p className="text-white/70">{analyticsEvents[analyticsEvents.length - 1].elementText || analyticsEvents[analyticsEvents.length - 1].path || '-'}</p>
                    <p className="text-white/50 text-sm">{new Date(analyticsEvents[analyticsEvents.length - 1].timestamp).toLocaleTimeString()}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
          
          <Card className="glass-card border-0 mb-8">
            <CardHeader>
              <CardTitle>Histórico de Eventos</CardTitle>
              
              <Tabs defaultValue="all" className="w-full mt-4">
                <TabsList className="grid grid-cols-3 mb-4">
                  <TabsTrigger value="all" onClick={() => setTypeFilter('all')}>Todos</TabsTrigger>
                  <TabsTrigger value="click" onClick={() => setTypeFilter('click')}>Cliques</TabsTrigger>
                  <TabsTrigger value="navigation" onClick={() => setTypeFilter('navigation')}>Navegações</TabsTrigger>
                </TabsList>
              </Tabs>
              
              <div className="flex flex-wrap gap-2 mt-2">
                <Button 
                  variant={filter === 'all' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setFilter('all')}
                  className={filter === 'all' ? "bg-gradient-to-r from-purple-600 to-pink-600" : "border-white/20"}
                >
                  Todas seções
                </Button>
                {sections.map(section => (
                  <Button
                    key={section}
                    variant={filter === section ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setFilter(section)}
                    className={filter === section ? "bg-gradient-to-r from-purple-600 to-pink-600" : "border-white/20"}
                  >
                    {section}
                  </Button>
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left p-2">Hora</th>
                      <th className="text-left p-2">Tipo</th>
                      <th className="text-left p-2">Elemento</th>
                      <th className="text-left p-2">Texto/URL</th>
                      <th className="text-left p-2">Seção</th>
                      <th className="text-left p-2">Página</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredEvents.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="p-4 text-center text-white/60">
                          Nenhum dado correspondente ao filtro
                        </td>
                      </tr>
                    ) : (
                      filteredEvents.slice().reverse().map((event, index) => (
                        <tr key={index} className="border-b border-white/5 hover:bg-white/5">
                          <td className="p-2">{new Date(event.timestamp).toLocaleTimeString()}</td>
                          <td className="p-2 capitalize">{event.type.replace('_', ' ')}</td>
                          <td className="p-2">{event.elementType || '-'}</td>
                          <td className="p-2">{event.elementText || (event.type === 'link_access' ? event.url : '-')}</td>
                          <td className="p-2">{event.section}</td>
                          <td className="p-2">{event.path || '-'}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button variant="outline" onClick={handleClearData} className="border-white/20">
                Limpar dados
              </Button>
            </CardFooter>
          </Card>
        </>
      )}
    </div>
  );
};

export default AnalyticsDashboard;
