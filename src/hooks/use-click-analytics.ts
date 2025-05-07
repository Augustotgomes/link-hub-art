
import { useCallback } from 'react';

export type ClickEvent = {
  elementType: string;
  elementId?: string;
  elementText?: string;
  section: string;
  timestamp: string;
};

export const useClickAnalytics = () => {
  const trackClick = useCallback((event: React.MouseEvent<HTMLElement>, options: {
    elementType: string;
    elementId?: string;
    elementText?: string;
    section: string;
  }) => {
    const clickEvent: ClickEvent = {
      ...options,
      timestamp: new Date().toISOString(),
    };
    
    console.log('Click tracked:', clickEvent);
    
    // Store in localStorage for demonstration purposes
    const previousClicks = JSON.parse(localStorage.getItem('clickAnalytics') || '[]');
    localStorage.setItem('clickAnalytics', JSON.stringify([...previousClicks, clickEvent]));
    
    // Here you would typically send this data to an analytics service
    // For example:
    // sendToAnalyticsService(clickEvent);
  }, []);

  return { trackClick };
};

// For demonstration, add a function to view analytics data
export const getClickAnalytics = (): ClickEvent[] => {
  return JSON.parse(localStorage.getItem('clickAnalytics') || '[]');
};

export const clearClickAnalytics = (): void => {
  localStorage.removeItem('clickAnalytics');
};
