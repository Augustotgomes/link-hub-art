
import React, { useState, useEffect } from 'react';
import { getClickAnalytics, clearClickAnalytics, ClickEvent } from '@/hooks/use-click-analytics';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const AnalyticsDashboard: React.FC = () => {
  const [clickEvents, setClickEvents] = useState<ClickEvent[]>([]);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    const loadAnalytics = () => {
      const data = getClickAnalytics();
      setClickEvents(data);
    };
    
    loadAnalytics();
    
    // Set up interval to refresh data every 5 seconds
    const intervalId = setInterval(loadAnalytics, 5000);
    
    return () => clearInterval(intervalId);
  }, []);

  const handleClearData = () => {
    clearClickAnalytics();
    setClickEvents([]);
  };

  const filteredEvents = filter === 'all' 
    ? clickEvents 
    : clickEvents.filter(event => event.section === filter);

  const sections = Array.from(new Set(clickEvents.map(event => event.section)));

  const getSectionCounts = () => {
    const counts: Record<string, number> = {};
    clickEvents.forEach(event => {
      counts[event.section] = (counts[event.section] || 0) + 1;
    });
    return counts;
  };

  const sectionCounts = getSectionCounts();
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4 font-display">Dashboard de Análise de Cliques</h2>
        <p className="text-white/70">
          Visualize os cliques registrados na sua aplicação
        </p>
      </div>

      {clickEvents.length === 0 ? (
        <Card className="glass-card border-0">
          <CardContent className="p-6">
            <p className="text-center text-white/60">
              Nenhum dado de clique registrado ainda. Interaja com o site para começar a coletar dados.
            </p>
          </CardContent>
        </Card>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="glass-card border-0">
              <CardHeader>
                <CardTitle>Total de Cliques</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold">{clickEvents.length}</p>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-0">
              <CardHeader>
                <CardTitle>Seções mais Clicadas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {Object.entries(sectionCounts)
                    .sort(([, a], [, b]) => b - a)
                    .slice(0, 3)
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
                <CardTitle>Último Clique</CardTitle>
              </CardHeader>
              <CardContent>
                {clickEvents.length > 0 && (
                  <div>
                    <p className="font-medium">{clickEvents[clickEvents.length - 1].elementText || clickEvents[clickEvents.length - 1].elementType}</p>
                    <p className="text-white/70">{new Date(clickEvents[clickEvents.length - 1].timestamp).toLocaleTimeString()}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
          
          <Card className="glass-card border-0 mb-8">
            <CardHeader>
              <CardTitle>Histórico de Cliques</CardTitle>
              <div className="flex flex-wrap gap-2 mt-4">
                <Button 
                  variant={filter === 'all' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setFilter('all')}
                  className={filter === 'all' ? "bg-gradient-to-r from-purple-600 to-pink-600" : "border-white/20"}
                >
                  Todos
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
                      <th className="text-left p-2">Texto</th>
                      <th className="text-left p-2">Seção</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredEvents.length === 0 ? (
                      <tr>
                        <td colSpan={4} className="p-4 text-center text-white/60">
                          Nenhum dado correspondente ao filtro
                        </td>
                      </tr>
                    ) : (
                      filteredEvents.slice().reverse().map((event, index) => (
                        <tr key={index} className="border-b border-white/5 hover:bg-white/5">
                          <td className="p-2">{new Date(event.timestamp).toLocaleTimeString()}</td>
                          <td className="p-2">{event.elementType}</td>
                          <td className="p-2">{event.elementText || '-'}</td>
                          <td className="p-2">{event.section}</td>
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
