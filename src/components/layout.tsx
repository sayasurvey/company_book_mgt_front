import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen w-screen justify-center">
      {children}
    </div>
  );
}
