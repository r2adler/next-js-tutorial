'use client'
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import s from 'app/ui/dashboard/nav-links/nav-links.module.scss'
import {usePathname} from 'next/navigation';
import clsx from 'clsx';


const links = [
  {name: 'Home', href: '/dashboard', icon: HomeIcon},
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  {name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon},
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(s.link, pathname === link.href
              && 'bg-sky-100 text-blue-600')}
          >
            <LinkIcon className="w-6"/>
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
