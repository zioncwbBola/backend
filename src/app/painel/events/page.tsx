"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Event {
  id?: number;
  title: string;
  date: string;
  location: string;
  description: string;
}

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [newEvent, setNewEvent] = useState<Event>({
    title: "",
    date: "",
    location: "",
    description: "",
  });

  const fetchEvents = async () => {
    try {
      const response = await fetch("/api/events");
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error("Erro ao listar eventos:", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const createEvent = async () => {
    if (!newEvent.title || !newEvent.date || !newEvent.location || !newEvent.description) {
      console.error("Todos os campos são obrigatórios.");
      return;
    }

    const response = await fetch("/api/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEvent),
    });

    if (response.ok) {
      setNewEvent({ title: "", date: "", location: "", description: "" });
      fetchEvents();
    } else {
      const { error } = await response.json();
      console.error(error);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Gerenciamento de Eventos</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Criar Novo Evento</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            placeholder="Título do Evento"
            value={newEvent.title}
            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
          />
          <Input
            type="datetime-local"
            value={newEvent.date}
            onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
          />
          <Input
            placeholder="Localização"
            value={newEvent.location}
            onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
          />
          <Textarea
            placeholder="Descrição"
            value={newEvent.description}
            onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
          />
          <Button onClick={createEvent}>Criar Evento</Button>
        </CardContent>
      </Card>

      <h2 className="text-xl font-semibold mb-4">Lista de Eventos</h2>
      <div className="space-y-4">
        {events.map((event) => (
          <Card key={event.id}>
            <CardHeader>
              <CardTitle>{event.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p><strong>Data:</strong> {new Date(event.date).toLocaleString()}</p>
              <p><strong>Local:</strong> {event.location}</p>
              <p><strong>Descrição:</strong> {event.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
