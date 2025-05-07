

// import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
// import './globals.css'
// // import { Header } from '../components/layout/header'


// const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: '21st.dev - Discover the best UI components',
//   description: 'Built by design engineers, loved by vibe coders.',
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
      
//       <body className={inter.className}> 
//         {/* <Header/> */}
//         <main>

//         {children}
        
//         </main>
//         {/* <Footer/> */}
//       </body>
//     </html>
//   )
// }




import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '21st.dev - Discover, share & remix the best UI components',
  description: 'A platform for discovering, sharing and remixing the best UI components built by design engineers.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}