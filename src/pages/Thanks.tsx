import { useEffect } from 'react';

export default function Thanks() {
  useEffect(() => {
    // ✅ Meta Lead — только тут
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead');
    }
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'grid',
      placeItems: 'center',
      textAlign: 'center',
      padding: 24
    }}>
      <div>
        <h1>Mulțumim! ❤️</h1>
        <p>Cererea ta a fost trimisă cu succes.</p>
        <p>Te vom contacta în curând.</p>
      </div>
    </div>
  );
}