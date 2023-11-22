import AcmeLogo from '@/app/ui/acme-logo';
import {ArrowRightIcon} from '@heroicons/react/24/outline';
import styles from '@/app/page.module.scss';
import Link from 'next/link';
import {lusitana} from '@/app/ui/fonts';
import clsx from 'clsx';
import Image from 'next/image';

export default function Page() {
    const paragrafCN = clsx(styles.paragraf, lusitana.className)

    return (
        <main className={styles.main}>
            <div className={styles.acmeLogo}>
                <AcmeLogo/>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.innerWrapper}>
                    <div className={styles.shape}></div>
                    <p className={paragrafCN}>

                        <strong>Welcome to Acme.</strong> This is the example for the{' '}
                        <a href="https://nextjs.org/learn/" className="text-blue-500">
                            Next.js Learn Course
                        </a>
                        , brought to you by Vercel.
                    </p>
                    <Link
                        href="/login"
                        className={styles.link}
                    >
                        <span>Log in</span> <ArrowRightIcon className={styles.icon}/>
                    </Link>
                </div>
                <div className={styles.images}>
                    <Image
                        src="/hero-desktop.png"
                        width={1000}
                        height={760}
                        className={styles.image}
                        alt="Screenshots of the dashboard project showing desktop version"
                    />
                    <Image
                        src="/hero-mobile.png"
                        width={560}
                        height={620}
                        className={styles.image2}
                        alt="Screenshots of the dashboard project showing desktop version"
                    />
                </div>
            </div>
        </main>
    );
}
