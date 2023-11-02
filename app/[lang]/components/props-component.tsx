'use client';

import { ThemeProvider } from 'next-themes';
import Landing from '@/app/[lang]/pages/landing';

interface PropsComponentProps {
    lang: string;
    page: any;
}

const PropsComponent: React.FC<PropsComponentProps> = ({ lang, page }) => {
    return (
        <ThemeProvider attribute="class">
            <Landing lang={lang} page={page} />
        </ThemeProvider>
    );
};

export default PropsComponent;
