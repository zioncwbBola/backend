// src/components/navbar.tsx
"use client";

import { Bell, Search, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export function Navbar() {
  return (
    <header className="w-full bg-white shadow-sm flex items-center justify-between px-6 py-4">
      {/* Barra de pesquisa */}
      <div className="flex items-center gap-2 w-1/3">
        <Search className="text-gray-500" size={20} />
        <Input type="text" placeholder="Buscar..." className="w-full border-gray-300" />
      </div>

      {/* Ícones à direita */}
      <div className="flex items-center gap-6">
        {/* Notificações */}
        <Button variant="ghost">
          <Bell size={20} />
        </Button>

        {/* Perfil do usuário */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">
              <User size={20} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Meu Perfil</DropdownMenuItem>
            <DropdownMenuItem>Configurações</DropdownMenuItem>
            <DropdownMenuItem>Sair</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
