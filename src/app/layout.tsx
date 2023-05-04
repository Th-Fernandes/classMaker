import { Mulish } from 'next/font/google';

const mulish = Mulish({ subsets: ['latin']});

export const metadata = {
  title: 'ClassMaker',
  description: 'Crie e/ou participe de grupo de estudos.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={mulish.className}>{children}</body>
    </html>
  );
}
