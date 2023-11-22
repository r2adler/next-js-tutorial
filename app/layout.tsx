import '@/app/ui/global.css';
import '@/app/ui/home.module.scss'
import {inter} from '@/app/ui/fonts';

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className={`${inter.className} smoothed`}>{children}</body>
        </html>
    );
}
