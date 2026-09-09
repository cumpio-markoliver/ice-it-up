import {Sidebar} from './sidebar';
export function AppShell({children}:{children:React.ReactNode}){return <div className="min-h-screen"><Sidebar/><main className="md:ml-64 min-h-screen p-4 pt-20 md:p-8 md:pt-8">{children}</main></div>}
