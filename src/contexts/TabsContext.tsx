import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Tab {
  id: string; // Unique identifier for each tab, e.g., 'sales', 'purchases'
  content: any; // This can be component state, form values, etc.
}

interface TabsContextType {
  tabs: Tab[];
  openTab: (id: string, defaultContent?: any) => void;
  closeTab: (id: string) => void;
  getTabContent: (id: string) => any;
  setTabContent: (id: string, content: any) => void;
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

export const TabsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tabs, setTabs] = useState<Tab[]>([]);

  const openTab = (id: string, defaultContent: any = null) => {
    setTabs(prev => [...prev.filter(tab => tab.id !== id), { id, content: defaultContent }]);
  };

  const closeTab = (id: string) => {
    setTabs(prev => prev.filter(tab => tab.id !== id));
  };

  const getTabContent = (id: string) => {
    const tab = tabs.find(tab => tab.id === id);
    return tab?.content;
  };

  const setTabContent = (id: string, content: any) => {
    setTabs(prev => prev.map(tab => tab.id === id ? { ...tab, content } : tab));
  };

  return (
    <TabsContext.Provider value={{ tabs, openTab, closeTab, getTabContent, setTabContent }}>
      {children}
    </TabsContext.Provider>
  );
};

export const useTabs = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('useTabs must be used within a TabsProvider');
  }
  return context;
};
