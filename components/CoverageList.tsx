import { COMUNAS_RM } from "@/lib/site";
import ScrollFade from "@/components/motion/ScrollFade";

export default function CoverageList() {
  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
      <ScrollFade
        as="ul"
        stagger
        className="grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-3"
      >
        {COMUNAS_RM.map((comuna) => (
          <li
            key={comuna}
            className="flex items-center gap-2 text-sm text-paper/75"
          >
            <span className="h-1 w-1 shrink-0 rounded-full bg-accent" />
            {comuna}
          </li>
        ))}
      </ScrollFade>

      <div className="overflow-hidden rounded-lg border border-line/70">
        <iframe
          title="Cobertura Región Metropolitana - Cerrajería ServiPuerta"
          src="https://www.google.com/maps?q=Regi%C3%B3n%20Metropolitana%2C%20Chile&z=9&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-64 w-full grayscale invert-[0.92] lg:h-full"
        />
      </div>
    </div>
  );
}
