import { useEffect } from 'react';

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export default function Thanks() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Lead');
    }
  }, []);

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        textAlign: 'center',
        padding: 24,
      }}
    >
      <div>
        <h1>Mulțumim! ❤️</h1>
        <p>Cererea ta a fost trimisă cu succes.</p>
        <p>Te vom contacta în curând.</p>
      </div>
    </div>
  );
}