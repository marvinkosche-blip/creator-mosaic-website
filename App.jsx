import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Instagram, Youtube, Music2, BarChart3, ShieldCheck, Handshake, Sparkles, Mail } from "lucide-react";

function Button({ children, variant = "primary" }) {
  const base = "px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 inline-flex items-center gap-2 whitespace-nowrap";
  const styles = {
    primary: "bg-[#ff6500] text-white hover:opacity-90 shadow-[0_14px_30px_rgba(255,101,0,0.22)]",
    dark: "bg-[#111] text-white hover:bg-[#292929]",
    outline: "border border-[#ded8cf] text-[#111] bg-white/50 hover:bg-white",
  };
  return <button className={`${base} ${styles[variant]}`}>{children}</button>;
}

function Card({ children, className = "" }) {
  return <div className={`rounded-2xl border border-[#e2ddd5] bg-white/75 shadow-[0_18px_55px_rgba(20,20,20,0.06)] ${className}`}>{children}</div>;
}

const services = [
  "Creator Scouting & Auswahl",
  "Kampagnenstrategie",
  "Vertrags- und Honorarverhandlung",
  "Briefing & Creator-Kommunikation",
  "Content-Abnahme & Qualitätskontrolle",
  "Nutzungsrechte / Buyouts / Paid Usage",
  "Reporting & Performance-Auswertung",
  "Event- und Launch-Aktivierungen",
];

const reasons = [
  "Branchenverständnis aus mehreren Jahren Influencer Marketing",
  "Verständnis für Brand-Ziele und Creator-Realität",
  "Professionelle Verhandlung und Abwicklung",
  "Social-first Denken",
  "Klare Kommunikation",
  "Fokus auf Qualität, Markenfit und langfristige Partnerschaften",
];

export default function App() {
  return (
    <main className="min-h-screen bg-[#f7f3ec] text-[#111] font-sans selection:bg-[#ff6500] selection:text-white">
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#f7f3ec]/80 border-b border-[#e6ded2]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <img src="/logo.png" alt="Creator Mosaic Logo" className="h-14 w-auto object-contain" />
          <nav className="hidden lg:flex items-center gap-9 text-xs font-semibold tracking-wide">
            <a href="#brands">BRANDS</a>
            <a href="#creators">CREATOR:INNEN</a>
            <a href="#services">LEISTUNGEN</a>
            <a href="#portfolio">PORTFOLIO</a>
            <a href="#cases">CASES</a>
            <a href="#about">ÜBER MICH</a>
          </nav>
          <Button variant="dark">Kontakt aufnehmen</Button>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 pt-24 pb-24 grid lg:grid-cols-[0.95fr_1.05fr] gap-16 items-center">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="text-xs font-bold tracking-[0.26em] text-[#867d70] mb-7">INFLUENCER & CREATOR MANAGEMENT</p>
          <h1 className="text-5xl md:text-7xl font-black tracking-[-0.055em] leading-[0.94] max-w-2xl">
            Creator Management für Kooperationen mit Substanz.
          </h1>
          <p className="mt-7 max-w-xl text-base md:text-lg leading-8 text-[#4d4943]">
            Ich begleite Marken, Agenturen und Creator:innen bei professionellen Influencer-Kooperationen — strategisch, persönlich und mit klarem Blick für Brand Fit, Qualität und langfristige Partnerschaften.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button>Für Brands</Button>
            <Button variant="outline">Für Creator:innen</Button>
            <Button variant="dark">Kontakt aufnehmen</Button>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="relative h-[610px] hidden md:block">
          <div className="absolute left-[18%] top-[6%] w-[300px] h-[380px] rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=900&auto=format&fit=crop" />
          </div>
          <div className="absolute right-[5%] top-[7%] w-[200px] h-[270px] rounded-3xl overflow-hidden shadow-[0_20px_55px_rgba(0,0,0,0.11)]">
            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=700&auto=format&fit=crop" />
          </div>
          <div className="absolute right-[5%] bottom-[12%] w-[190px] h-[150px] rounded-3xl overflow-hidden shadow-[0_20px_55px_rgba(0,0,0,0.08)]">
            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=700&auto=format&fit=crop" />
          </div>
          <Card className="absolute left-[4%] top-[29%] w-[210px] p-6">
            <p className="text-sm font-bold">Campaign Strategy</p>
            <div className="mt-5 h-14 flex items-end gap-2">
              {[20, 32, 26, 42, 30, 55, 68].map((h, i) => <div key={i} className="w-5 rounded-full bg-[#ff6500]/20" style={{ height: h }} />)}
            </div>
          </Card>
          <Card className="absolute left-[17%] bottom-[13%] w-[300px] p-6">
            <p className="text-sm font-bold">Reach</p>
            <div className="mt-5 flex items-end justify-between">
              <BarChart3 className="w-24 h-16 text-[#827a70]" />
              <span className="text-[#32b48b] text-sm font-black">+28%</span>
            </div>
          </Card>
          <Card className="absolute right-[0%] top-[32%] w-[220px] p-7">
            <p className="text-sm font-bold mb-4">Paid Usage</p>
            <div className="flex items-center gap-5"><div className="w-16 h-16 rounded-full bg-[conic-gradient(#111_0_75%,#eee_75%_100%)]" /><span className="font-black text-xl">75%</span></div>
          </Card>
          <Card className="absolute left-[28%] top-0 px-7 py-4 flex items-center gap-3">
            <ShieldCheck className="w-5 h-5" /><span className="font-bold text-sm">Brand Fit</span>
          </Card>
          <div className="absolute left-[7%] bottom-[28%] grid grid-cols-5 gap-2 opacity-30">
            {Array.from({ length: 60 }).map((_, i) => <span key={i} className="w-1 h-1 rounded-full bg-[#111]" />)}
          </div>
        </motion.div>
      </section>

      <section id="about" className="border-y border-[#e4ddd2] py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[0.8fr_1.2fr] gap-16 items-center">
          <div className="rounded-3xl overflow-hidden h-[360px]"><img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1000&auto=format&fit=crop" /></div>
          <div>
            <p className="text-xs font-bold tracking-[0.24em] text-[#867d70] mb-4">ÜBER MICH</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-[-0.04em] leading-[0.98] max-w-xl">Strategisch denken. Operativ umsetzen. Persönlich begleiten.</h2>
            <p className="mt-6 leading-7 text-[#565049] max-w-2xl">Mit mehrjähriger Erfahrung im Influencer Marketing und in der Creator Economy begleite ich Kampagnen von der ersten Idee bis zur finalen Auswertung. Ich arbeite an der Schnittstelle zwischen Marke, Agentur und Creator:in — mit Verständnis für Brand-Ziele, Content-Qualität, Verhandlung, Briefings, Timings und faire Zusammenarbeit.</p>
            <div className="mt-8 grid md:grid-cols-3 gap-4">
              {["Mehrjährige Erfahrung im Influencer Marketing", "Lifestyle, Beauty, Tech, Health und Event-Brands", "Fokus auf Brand Fit, Qualität und Partnerschaften"].map((x) => <Card key={x} className="p-5 text-sm font-bold">{x}</Card>)}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between gap-8 mb-10">
          <div>
            <p className="text-xs font-bold tracking-[0.24em] text-[#867d70] mb-4">FÜR BRANDS & AGENTUREN</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-[-0.04em] max-w-3xl leading-tight">Für Brands, die Creator-Kampagnen professionell umsetzen möchten.</h2>
          </div>
          <a className="hidden md:flex text-[#ff6500] text-sm font-bold items-center gap-2">Mehr erfahren <ArrowRight className="w-4 h-4" /></a>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s) => <Card key={s} className="p-6 min-h-[108px] flex items-center gap-4"><Sparkles className="w-5 h-5 text-[#ff6500] shrink-0" /><h3 className="font-bold leading-snug">{s}</h3></Card>)}
        </div>
      </section>

      <section id="creators" className="border-y border-[#e4ddd2] py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs font-bold tracking-[0.24em] text-[#867d70] mb-4">FÜR CREATOR:INNEN</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-[-0.04em] leading-tight">Management für Creator:innen, die langfristig wachsen möchten.</h2>
            <p className="mt-6 leading-7 text-[#565049] max-w-xl">Ich unterstütze Creator:innen bei passenden Kooperationen, fairen Deal-Verhandlungen, klarer Positionierung und professioneller Kampagnenabwicklung.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {["Persönliches Management", "Faire Honorare & transparente Kommunikation", "Kooperationsanfragen & Deal-Verhandlung", "Langfristiger Aufbau", "Positionierung & Markenfit", "Unterstützung bei Briefings und Feedback"].map((x) => <div key={x} className="flex gap-3 font-bold"><Check className="w-5 h-5 mt-0.5" />{x}</div>)}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-10 items-start">
          <h2 className="text-4xl font-black tracking-[-0.04em] leading-tight">Warum Zusammenarbeit mit mir funktioniert.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {reasons.map((r) => <div key={r} className="text-sm font-bold leading-snug"><Handshake className="w-6 h-6 text-[#ff6500] mb-4" />{r}</div>)}
          </div>
        </div>
      </section>

      <section id="portfolio" className="bg-[#f0e9de] py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[0.6fr_1.4fr] gap-12">
          <div><p className="text-xs font-bold tracking-[0.24em] text-[#867d70] mb-4">CREATOR PORTFOLIO</p><h2 className="text-4xl font-black tracking-[-0.04em] leading-tight">Eine Auswahl betreuter Creator:innen und Talents.</h2></div>
          <div className="grid md:grid-cols-3 gap-5">
            {[1,2,3].map((n) => <Card key={n} className="p-5"><div className="h-36 rounded-xl overflow-hidden mb-5"><img className="w-full h-full object-cover" src={`https://images.unsplash.com/photo-${n===1?'1524504388940-b1c1722653e1':n===2?'1500648767791-00dcc994a43e':'1534528741775-53994a69daeb'}?q=80&w=600&auto=format&fit=crop`} /></div><h3 className="font-black">Creator Name 0{n}</h3><p className="text-sm text-[#655e55] mt-1">Lifestyle / Beauty / Health</p><div className="flex gap-3 my-4"><Instagram size={18}/><Music2 size={18}/><Youtube size={18}/></div><p className="text-sm leading-6"><b>Reichweite</b><br/>100k+<br/><b>Zielgruppe</b><br/>18–34 Jahre</p><button className="mt-5 w-full bg-[#ff6500] text-white rounded-xl py-3 text-sm font-bold">Media Kit anfragen</button></Card>)}
          </div>
        </div>
      </section>

      <section id="cases" className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-[0.55fr_1.45fr] gap-12">
          <div><p className="text-xs font-bold tracking-[0.24em] text-[#867d70] mb-4">AUSGEWÄHLTE KAMPAGNEN & PROJEKTE</p><h2 className="text-4xl font-black tracking-[-0.04em] leading-tight">Strategie. Umsetzung. Wirkung.</h2></div>
          <div className="grid md:grid-cols-3 gap-5">
            {["Beauty", "Lifestyle", "Tech"].map((b) => <Card key={b} className="p-5"><p className="text-xs font-black tracking-widest">BRANCHE</p><h3 className="font-black mb-4">{b}</h3><p className="text-sm leading-6"><b>Kampagnenziel</b><br/>Markenbekanntheit steigern<br/><br/><b>Creator-Auswahl</b><br/>Passende Creator:innen mit hoher Markenaffinität<br/><br/><b>Umsetzung</b><br/>Content-Serie und Aktivierung<br/><br/><b>Ergebnis / Learnings</b><br/>Auswertung nach Kampagnenabschluss</p></Card>)}
          </div>
        </div>
      </section>

      <section className="bg-[#111] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <div><p className="text-xs font-bold tracking-[0.24em] text-white/50 mb-4">KONTAKT</p><h2 className="text-5xl font-black tracking-[-0.05em] leading-tight">Bereit für die nächste Kooperation?</h2><p className="mt-6 text-white/70 leading-7 max-w-lg">Du möchtest mit passenden Creator:innen arbeiten oder suchst professionelles Management für deine Kooperationen? Dann freue ich mich auf deine Anfrage.</p></div>
          <Card className="p-6 bg-white text-[#111]">
            <div className="grid gap-4">
              <select className="rounded-xl border p-4 bg-[#f7f3ec]"><option>Ich bin Brand</option><option>Ich bin Agentur</option><option>Ich bin Creator:in</option></select>
              <input className="rounded-xl border p-4 bg-[#f7f3ec]" placeholder="Name" />
              <input className="rounded-xl border p-4 bg-[#f7f3ec]" placeholder="E-Mail" />
              <input className="rounded-xl border p-4 bg-[#f7f3ec]" placeholder="Unternehmen / Social Handle" />
              <textarea className="rounded-xl border p-4 bg-[#f7f3ec] min-h-[140px]" placeholder="Nachricht" />
              <button className="bg-[#ff6500] text-white rounded-xl py-4 font-black inline-flex justify-center items-center gap-2">Anfrage senden <Mail size={18}/></button>
            </div>
          </Card>
        </div>
      </section>

      <footer className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row gap-8 justify-between text-sm text-[#615a51]">
        <img src="/logo.png" alt="Creator Mosaic Logo" className="h-14 w-auto object-contain" />
        <p className="max-w-sm">Strategisches Creator Management für Marken, Agenturen und Creator:innen.</p>
        <div className="flex gap-6"><a>Impressum</a><a>Datenschutz</a><a>Instagram</a><a>LinkedIn</a></div>
      </footer>
    </main>
  );
}
