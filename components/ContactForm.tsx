"use client";

import { useState, type FormEvent } from "react";
import { waLink } from "@/lib/site";

type Errors = Partial<Record<"nombre" | "telefono" | "mensaje", string>>;

export default function ContactForm() {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [comuna, setComuna] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function validate(): Errors {
    const next: Errors = {};
    if (nombre.trim().length < 2) next.nombre = "Ingresa tu nombre.";
    if (!/^[+\d][\d\s-]{6,}$/.test(telefono.trim()))
      next.telefono = "Ingresa un teléfono válido.";
    if (mensaje.trim().length < 5) next.mensaje = "Cuéntanos brevemente qué necesitas.";
    return next;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const texto = [
      "Hola, quiero hacer una consulta a Cerrajería ServiPuerta.",
      `Nombre: ${nombre}`,
      `Teléfono: ${telefono}`,
      comuna ? `Comuna: ${comuna}` : null,
      `Mensaje: ${mensaje}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(waLink(texto), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-lg border border-accent/40 bg-accent/10 p-8 text-center">
        <p className="font-display text-lg font-extrabold uppercase tracking-tight text-accent">
          ¡Listo!
        </p>
        <p className="mt-2 text-sm text-paper/70">
          Abrimos WhatsApp con tu mensaje. Si no se abrió automáticamente,
          escríbenos directo a nuestro WhatsApp.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="nombre" className="text-sm font-semibold text-paper/80">
          Nombre
        </label>
        <input
          id="nombre"
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="mt-1.5 w-full rounded-md border border-line bg-ink-900 px-4 py-3 text-paper outline-none focus:border-accent"
          aria-invalid={Boolean(errors.nombre)}
          aria-describedby={errors.nombre ? "nombre-error" : undefined}
        />
        {errors.nombre && (
          <p id="nombre-error" className="mt-1 text-xs text-accent">
            {errors.nombre}
          </p>
        )}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="telefono" className="text-sm font-semibold text-paper/80">
            Teléfono
          </label>
          <input
            id="telefono"
            type="tel"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            placeholder="+56 9 XXXX XXXX"
            className="mt-1.5 w-full rounded-md border border-line bg-ink-900 px-4 py-3 text-paper outline-none focus:border-accent"
            aria-invalid={Boolean(errors.telefono)}
            aria-describedby={errors.telefono ? "telefono-error" : undefined}
          />
          {errors.telefono && (
            <p id="telefono-error" className="mt-1 text-xs text-accent">
              {errors.telefono}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="comuna" className="text-sm font-semibold text-paper/80">
            Comuna (opcional)
          </label>
          <input
            id="comuna"
            type="text"
            value={comuna}
            onChange={(e) => setComuna(e.target.value)}
            className="mt-1.5 w-full rounded-md border border-line bg-ink-900 px-4 py-3 text-paper outline-none focus:border-accent"
          />
        </div>
      </div>

      <div>
        <label htmlFor="mensaje" className="text-sm font-semibold text-paper/80">
          ¿En qué te ayudamos?
        </label>
        <textarea
          id="mensaje"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          rows={4}
          className="mt-1.5 w-full rounded-md border border-line bg-ink-900 px-4 py-3 text-paper outline-none focus:border-accent"
          aria-invalid={Boolean(errors.mensaje)}
          aria-describedby={errors.mensaje ? "mensaje-error" : undefined}
        />
        {errors.mensaje && (
          <p id="mensaje-error" className="mt-1 text-xs text-accent">
            {errors.mensaje}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-accent px-6 py-4 font-display font-extrabold uppercase tracking-tight text-accent-ink transition-transform hover:scale-[1.01] hover:bg-accent-dark sm:w-auto"
      >
        Enviar por WhatsApp
      </button>
      <p className="text-xs text-paper/45">
        Si tu urgencia no puede esperar, mejor llámanos directamente: es más
        rápido que un formulario.
      </p>
    </form>
  );
}
