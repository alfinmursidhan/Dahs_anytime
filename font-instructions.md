# Petunjuk Implementasi Font The Seasons

Saat ini, website menggunakan font Playfair Display sebagai pengganti sementara untuk font The Seasons. Dokumen ini berisi instruksi lengkap tentang cara mengimplementasikan font The Seasons yang sesungguhnya.

## Langkah 1: Dapatkan Font The Seasons

The Seasons adalah font komersial yang harus dibeli dari penjual yang sah. Beberapa tempat yang mungkin menjual font ini:

- [MyFonts](https://www.myfonts.com/)
- [Adobe Fonts](https://fonts.adobe.com/)
- [Fontspring](https://www.fontspring.com/)

Pastikan Anda membeli lisensi yang sesuai untuk penggunaan web.

## Langkah 2: Siapkan File Font

Setelah membeli font, Anda perlu mempersiapkan file untuk penggunaan web:

1. Konversi font ke format web (`.woff2` dan `.woff`) menggunakan tools seperti [Font Squirrel Generator](https://www.fontsquirrel.com/tools/webfont-generator) jika belum dalam format tersebut

2. Buat folder untuk menyimpan font:
   ```bash
   mkdir -p public/fonts/theseasons
   ```

3. Salin file font ke folder tersebut dengan nama:
   - `TheSeasons-Regular.woff2`
   - `TheSeasons-Bold.woff2`
   - `TheSeasons-Regular.woff` (opsional, sebagai fallback)
   - `TheSeasons-Bold.woff` (opsional, sebagai fallback)

## Langkah 3: Update Layout.tsx

Edit file `app/layout.tsx` untuk menggunakan font The Seasons:

```tsx
import './globals.css';
import { Montserrat } from 'next/font/google';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

// Font configuration
const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  preload: true,
  weight: ['300', '400', '500', '600', '700'],
});

// Use The Seasons font for headings
const theSeasons = localFont({
  src: [
    {
      path: '../public/fonts/theseasons/TheSeasons-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/theseasons/TheSeasons-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-the-seasons',
  preload: true,
});

export const metadata: Metadata = {
  title: 'dahs - Premium Hair Products',
  description: 'Premium hair products made with natural ingredients for healthy hair.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${theSeasons.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`font-sans bg-secondary overflow-x-hidden min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
```

## Langkah 4: Update globals.css (Opsional)

Jika Anda ingin lebih banyak kontrol, Anda bisa menambahkan definisi `@font-face` di `app/globals.css`:

```css
@font-face {
  font-family: 'The Seasons';
  src: url('/fonts/theseasons/TheSeasons-Regular.woff2') format('woff2'),
       url('/fonts/theseasons/TheSeasons-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'The Seasons';
  src: url('/fonts/theseasons/TheSeasons-Bold.woff2') format('woff2'),
       url('/fonts/theseasons/TheSeasons-Bold.woff') format('woff');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
```

## Langkah 5: Testing

Setelah mengimplementasikan perubahan, pastikan untuk menguji website di berbagai browser dan perangkat untuk memastikan font ditampilkan dengan benar.

---

## Catatan Penting

- Saat ini website menggunakan Playfair Display sebagai font pengganti sementara
- Font The Seasons adalah font komersial dan perlu dibeli dengan lisensi yang sesuai
- Implementasi di atas hanya contoh; Anda mungkin perlu menyesuaikan berdasarkan variasi font yang Anda beli 