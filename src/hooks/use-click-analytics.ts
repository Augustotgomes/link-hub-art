
import { useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export type AnalyticsEvent = {
  type: 'click' | 'navigation' | 'link_access';
  elementType?: string;
  elementId?: string;
  elementText?: string;
  section: string;
  path?: string;
  timestamp: string;
};

export const useClickAnalytics = () => {
  const location = useLocation();

  // Track page navigation
  useEffect(() => {
    const navigationEvent: AnalyticsEvent = {
      type: 'navigation',
      section: 'page',
      path: location.pathname,
      timestamp: new Date().toISOString(),
    };
    
    console.log('Navigation tracked:', navigationEvent);
    
    // Store in localStorage
    const previousEvents = JSON.parse(localStorage.getItem('clickAnalytics') || '[]');
    localStorage.setItem('clickAnalytics', JSON.stringify([...previousEvents, navigationEvent]));
    
    // Here you would typically send this data to an analytics service
  }, [location.pathname]);

  // Track clicks
  const trackClick = useCallback((event: React.MouseEvent<HTMLElement>, options: {
    elementType: string;
    elementId?: string;
    elementText?: string;
    section: string;
  }) => {
    const clickEvent: AnalyticsEvent = {
      type: 'click',
      ...options,
      path: location.pathname,
      timestamp: new Date().toISOString(),
    };
    
    console.log('Click tracked:', clickEvent);
    
    // Store in localStorage for demonstration purposes
    const previousEvents = JSON.parse(localStorage.getItem('clickAnalytics') || '[]');
    localStorage.setItem('clickAnalytics', JSON.stringify([...previousEvents, clickEvent]));
    
    // Here you would typically send this data to an analytics service
  }, [location.pathname]);

  // Track link access
  const trackLinkAccess = useCallback((options: {
    elementId?: string;
    elementText?: string;
    url: string;
    section: string;
  }) => {
    const linkEvent: AnalyticsEvent = {
      type: 'link_access',
      elementType: 'link',
      ...options,
      path: location.pathname,
      timestamp: new Date().toISOString(),
    };
    
    console.log('Link access tracked:', linkEvent);
    
    // Store in localStorage for demonstration purposes
    const previousEvents = JSON.parse(localStorage.getItem('clickAnalytics') || '[]');
    localStorage.setItem('clickAnalytics', JSON.stringify([...previousEvents, linkEvent]));
    
    // Here you would typically send this data to an analytics service
  }, [location.pathname]);

  return { trackClick, trackLinkAccess };
};

// For demonstration, add a function to view analytics data
export const getClickAnalytics = (): AnalyticsEvent[] => {
  return JSON.parse(localStorage.getItem('clickAnalytics') || '[]');
};

export const clearClickAnalytics = (): void => {
  localStorage.removeItem('clickAnalytics');
};
