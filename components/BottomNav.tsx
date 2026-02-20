"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, FileText, MessageSquare, Map, Users } from 'lucide-react'

export default function BottomNav() {
  const pathname = usePathname()

  const navItems = [
    { href: '/dashboard', icon: Home, label: 'Home' },
    { href: '/visit', icon: FileText, label: 'Visit' },
    { href: '/chat', icon: MessageSquare, label: 'Chat' },
    { href: '/network', icon: Map, label: 'Map' },
    { href: '/family', icon: Users, label: 'Family' },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-6 flex justify-between items-center z-50 md:hidden">
      {navItems.map(({ href, icon: Icon, label }) => {
        const isActive = pathname === href
        return (
          <Link key={href} href={href} className={`flex flex-col items-center gap-1 ${isActive ? 'text-[var(--primary)]' : 'text-gray-400'}`}>
            <Icon size={24} />
            <span className="text-[10px] font-medium">{label}</span>
          </Link>
        )
      })}
    </div>
  )
}
