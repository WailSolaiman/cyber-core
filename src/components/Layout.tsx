import { Outlet } from 'react-router-dom'
import { ScrollToTopButton } from './ScrollToTopButton'

export function Layout() {
  return (
    <div className="min-h-dvh min-w-0">
      <Outlet />
      <ScrollToTopButton />
    </div>
  )
}
