// app/page.tsx
import React from 'react';

export default function HomePage() {
  return (
    <main style={{ fontFamily: 'Arial, sans-serif', padding: '2rem', maxWidth: '1200px', margin: 'auto' }}>
      
      {/* بخش Hero */}
      <section style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          عنوان اصلی سایت برزویه تجهیز
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#555' }}>
          اینجا متن معرفی کوتاه و جذاب برای سایتت قرار می‌گیرد.
        </p>
        {/* جای تصویر Hero */}
        <div style={{ marginTop: '2rem' }}>
          <div style={{
            width: '100%', 
            height: '300px', 
            backgroundColor: '#eee', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            color: '#999',
            fontSize: '1.5rem',
            borderRadius: '8px'
          }}>
            جای تصویر Hero
          </div>
        </div>
      </section>
      
      {/* بخش خدمات کارت‌محور */}
      <section>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
          خدمات ما
        </h2>
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          
          {/* کارت نمونه */}
          {[1, 2, 3, 4].map((item) => (
            <div key={item} style={{
              flex: '1 1 250px',
              backgroundColor: '#f9f9f9',
              padding: '1.5rem',
              borderRadius: '10px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
              textAlign: 'center',
              cursor: 'default'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                margin: '0 auto 1rem',
                backgroundColor: '#ddd',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#aaa',
                fontSize: '2rem'
              }}>
                آیکون
              </div>
              <h3>عنوان خدمت {item}</h3>
              <p style={{ color: '#666', fontSize: '1rem' }}>
                توضیح کوتاه درباره خدمت {item} که بعداً جایگزین می‌شود.
              </p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
