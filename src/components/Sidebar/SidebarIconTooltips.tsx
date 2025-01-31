// // src/components/sidebar.tsx
// "use client";

// import { useState } from "react";
// import { cn } from "@/lib/utils";
// import { Home, Settings, BarChart, Menu, LogOut } from "lucide-react";
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// const menuItems = [
//   { name: "Dashboard", icon: <Home size={20} />, href: "/painel" },
//   { name: "Relatórios", icon: <BarChart size={20} />, href: "/painel/relatorios" },
//   { name: "Configurações", icon: <Settings size={20} />, href: "/painel/config" },
// ];

// export function Sidebar({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void }) {
//   return (
//     <TooltipProvider>
//       <aside className={cn("h-screen bg-gray-900 text-white transition-all duration-300 flex flex-col p-4", 
//         isOpen ? "w-60" : "w-16")}>
//         {/* Botão para abrir/fechar */}
//         <button
//           className="mb-6 p-2 rounded-lg bg-gray-800 hover:bg-gray-700"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <Menu />
//         </button>

//         {/* Itens do menu */}
//         <nav className="flex flex-col gap-4 flex-1">
//           {menuItems.map((item) => (
//             <Tooltip key={item.name}>
//               <TooltipTrigger asChild>
//                 <a
//                   href={item.href}
//                   className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-700"
//                 >
//                   {item.icon}
//                   {isOpen && <span>{item.name}</span>}
//                 </a>
//               </TooltipTrigger>
//               {!isOpen && <TooltipContent>{item.name}</TooltipContent>}
//             </Tooltip>
//           ))}
//         </nav>

//         {/* Logout */}
//         <button className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-700">
//           <LogOut size={20} />
//           {isOpen && <span>Sair</span>}
//         </button>
//       </aside>
//     </TooltipProvider>
//   );
// }
"use client";

import Link from "next/link";
import { useState } from "react";
import {  CalendarDays, LayoutDashboard, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className={`fixed top-0 left-0 h-full bg-gray-900 text-white transition-all ${isOpen ? "w-64" : "w-20"}`}>
      <div className="flex items-center justify-between p-4">
        <h2 className={`text-xl font-bold transition-all ${isOpen ? "block" : "hidden"}`}>Painel</h2>
        <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
        </Button>
      </div>

      <nav className="mt-6">
        <ul className="space-y-2">
          <li>
            <Link href="/painel">
              <Button variant="ghost" className="w-full flex items-center gap-4 p-4 text-white">
                <LayoutDashboard size={20} />
                {isOpen && "Dashboard"}
              </Button>
            </Link>
          </li>
          <li>
            <Link href="/painel/events">
              <Button variant="ghost" className="w-full flex items-center gap-4 p-4 text-white">
                <CalendarDays size={20} />
                {isOpen && "Gestão de Eventos e Programação"}
              </Button>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
