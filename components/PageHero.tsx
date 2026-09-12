import RevealText from "@/components/motion/RevealText";
import CallButton from "@/components/cta/CallButton";
import WhatsAppButton from "@/components/cta/WhatsAppButton";
import { WA_MESSAGES } from "@/lib/site";

export default function PageHero({
  eyebrow,
  lines,
  description,
  waMessage = WA_MESSAGES.contacto,
}: {
  eyebrow: string;
  lines: string[];
  description: string;
  waMessage?: string;
}) {
  return (
    <section className="grain border-b border-line/60 bg-ink-950">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-24">
        <p className="text-sm font-bold uppercase tracking-widest text-accent">
          {eyebrow}
        </p>
        <RevealText
          as="h1"
          lines={lines}
          className="mt-3 font-display text-4xl font-black uppercase leading-[0.95] tracking-tight text-paper sm:text-5xl lg:text-6xl"
          lineClassName="mx-auto"
        />
        <p className="mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-paper/70 sm:text-lg">
          {description}
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <CallButton size="md" pulse />
          <WhatsAppButton size="md" message={waMessage} />
        </div>
      </div>
    </section>
  );
}
