import SideNav from '@/app/ui/dashboard/sidenav';
import s from 'app/dashboard/dashboard.module.scss'

export default function Layout({children}: { children: React.ReactNode }) {
  return (
    <div className={s.dashboard}>
      <div className={s.wrapper}>
        <SideNav/>
      </div>
      <div className={s.children}>{children}</div>
    </div>
  );
}