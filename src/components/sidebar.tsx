'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { LayoutDashboard, ShoppingCart, Package, Boxes, Users, BarChart3, Settings, Menu, X, ChevronLeft, ChevronRight, LogOut, PlusCircle, ReceiptText, Wallet, Snowflake, ShieldCheck } from 'lucide-react'

const items = [
  ['Dashboard','/dashboard',LayoutDashboard], ['Orders','/orders',ShoppingCart], ['Products','/products',Package],
  ['Add-Ons','/addons',PlusCircle], ['Inventory','/inventory',Boxes], ['Customers','/customers',Users],
  ['Purchases & Expenses','/expenses',Wallet], ['Daily Records','/records',ReceiptText], ['Reports','/reports',BarChart3], ['Settings','/settings',Settings]
] as const

export function Sidebar(){
  const path=usePathname(), router=useRouter()
  const [collapsed,setCollapsed]=useState(false),[open,setOpen]=useState(false)
  useEffect(()=>{ const v=localStorage.getItem('ice-sidebar-collapsed'); if(v==='1') setCollapsed(true) },[])
  function toggle(){const next=!collapsed;setCollapsed(next);localStorage.setItem('ice-sidebar-collapsed',next?'1':'0')}
  async function logout(){await fetch('/api/auth/logout',{method:'POST'});router.replace('/login');router.refresh()}
  const Nav=()=> <nav className="space-y-1.5">{items.map(([name,href,Icon])=><Link onClick={()=>setOpen(false)} key={href} href={href} title={collapsed?name:undefined} className={`nav-item ${path===href||path.startsWith(href+'/')?'nav-item-active':''}`}><Icon size={19} strokeWidth={2}/>{!collapsed&&<span className="truncate">{name}</span>}</Link>)}</nav>
  return <>
    <button aria-label="Open navigation" className="mobile-menu glass" onClick={()=>setOpen(true)}><Menu size={21}/></button>
    <div className={`mobile-scrim ${open?'mobile-scrim-open':''}`} onClick={()=>setOpen(false)}/>
    <aside className={`sidebar ${collapsed?'sidebar-collapsed':''} ${open?'sidebar-open':''}`}>
      <div className="sidebar-brand">
        <div className="brand-mark"><Snowflake size={21}/></div>
        {!collapsed&&<div className="min-w-0"><div className="brand-title">ICE IT UP</div><div className="brand-subtitle">Business workspace</div></div>}
        <button aria-label="Close navigation" className="mobile-close" onClick={()=>setOpen(false)}><X size={20}/></button>
      </div>
      <div className="sidebar-scroll"><Nav/></div>
      <div className="sidebar-bottom">
        <button aria-label={collapsed?'Expand navigation':'Collapse navigation'} title={collapsed?'Expand navigation':'Collapse navigation'} onClick={toggle} className="collapse-button">
          {collapsed?<ChevronRight size={18}/>:<><ChevronLeft size={18}/><span>Collapse</span></>}
        </button>
        <button onClick={logout} title={collapsed?'Log out':undefined} className="nav-item logout-item"><LogOut size={19}/>{!collapsed&&<span>Log out</span>}</button>
      </div>
    </aside>
  </>
}
