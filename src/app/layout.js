import '@/styles/main.scss';
import './globals.scss';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="theme-dark">
        {children}
      </body>
    </html>
  );
}
