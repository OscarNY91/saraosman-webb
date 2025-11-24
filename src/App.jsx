import React from "react";


// Hemsida för "Sara Osman – Bygglovsritningar"
// Byggd som en enda React-komponent för enkel publicering (t.ex. Netlify/Vercel)
// Styling med Tailwind-klasser (ingen extern CSS krävs i ChatGPT‑preview)

export default function App() {
  return (
   <>
       
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Header / Nav */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-2xl bg-black text-white grid place-items-center font-bold tracking-wide group-hover:scale-105 transition">SO</div>
            <div className="leading-tight">
              <p className="font-semibold text-lg">Sara Osman</p>
              <p className="text-sm text-neutral-500">Bygglovsritningar</p>
            </div>
          </a>
          <nav className="hidden md:flex gap-6 text-sm">
            <a className="hover:text-black/80" href="#tjanster">Tjänster</a>
            <a className="hover:text-black/80" href="#process">Process</a>
            <a className="hover:text-black/80" href="#referenser">Referenser</a>
            <a className="hover:text-black/80" href="#priser">Priser</a>
            <a className="hover:text-black/80" href="#kontakt">Kontakt</a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+46722339379" className="text-sm text-neutral-600 hover:text-neutral-800">072-233 93 79</a>
            <a href="#kontakt" className="inline-flex items-center rounded-2xl border px-4 py-2 text-sm font-medium hover:shadow">Boka kostnadsfri rådgivning</a>
          </div>
        </div>
      </header>

      {/* Hero */}
     <section id="top" className="relative overflow-hidden">
  <div className="absolute inset-0 -z-10 bg-gradient-to-b from-neutral-100 to-white" />
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
    <div>
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
        Bygglovsritningar som blir{" "}
        <span className="underline decoration-8 decoration-amber-300">
          godkända
        </span>
      </h1>
      <p className="mt-5 text-lg text-neutral-600 max-w-prose">
        Jag hjälper privatpersoner och företag med kompletta bygglovsritningar
        för nybyggnad, tillbyggnad och ombyggnad – från första skiss till
        färdiga handlingar enligt kommunens krav.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="#kontakt"
          className="rounded-2xl bg-black text-white px-6 py-3 font-medium hover:opacity-90"
        >
          Få offert inom 24h
        </a>
        <a
          href="#tjanster"
          className="rounded-2xl border px-6 py-3 font-medium hover:shadow"
        >
          Se tjänster
        </a>
      </div>
      <div className="mt-6 flex items-center gap-6 text-sm text-neutral-600">
        <div className="flex items-center gap-2">
          <span className="i-lucide-check-circle" />
          Fast pris
        </div>
        <div className="flex items-center gap-2">
          <span className="i-lucide-check-circle" />
          Snabb leverans
        </div>
        <div className="flex items-center gap-2">
          <span className="i-lucide-check-circle" />
          Personlig kontakt
        </div>
      </div>
    </div>

    {/* Högersida med två exempelbilder */}
    <div className="relative">
      <div className="w-full rounded-3xl bg-white shadow-xl ring-1 ring-black/5 p-4 grid place-items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {/* Bild 1 */}
          <figure className="rounded-2xl overflow-hidden border bg-neutral-100">
            <img
              src="/Bilder/Fasadritning.png"   // ändra filnamn om det heter något annat
              alt="Fasadritning"
              className="w-full h-64 sm:h-72 lg:h-80 object-cover"
            />
            <figcaption className="p-3 text-sm text-neutral-700 text-center">
              Fasadritning
            </figcaption>
          </figure>

          {/* Bild 2 */}
          <figure className="rounded-2xl overflow-hidden border bg-neutral-100">
            <img
              src="/Bilder/Attefall.png"      // ändra filnamn om det heter något annat
              alt="Attefall"
              className="w-full h-64 sm:h-72 lg:h-80 object-cover"
            />
            <figcaption className="p-3 text-sm text-neutral-700 text-center">
              Garage – nybyggnad
            </figcaption>
          </figure>
        </div>
      </div>
      <p className="text-xs text-neutral-500 mt-2 text-center">
        Exempel på ritningar/visualiseringar.
      </p>
    </div>
  </div>
</section>


      {/* Tjänster */}
      <section id="tjanster" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold">Tjänster</h2>
          <p className="mt-2 text-neutral-600 max-w-prose">Kompletta handlingar enligt Boverkets och kommunens krav. Leverans som PDF och DWG vid behov.</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Plan-, fasad- och sektionsritningar",
                desc: "För ny-, till- och ombyggnad i rätt skala med måttsättning och höjder.",
              },
              {
                title: "Situationsplan",
                desc: "Underlag baserat på kommunens kartdata eller inmätning från mätkonsult.",
              },
              {
                title: "Kontrollplan & teknisk beskrivning",
                desc: "Förenklad eller detaljrik kontrollplan samt rumsbeskrivningar.",
              },
              {
                title: "3D‑visualisering (tillval)",
                desc: "Bilder och enklare walkthroughs för tydlig dialog med handläggare och grannar.",
              },
              {
                title: "Ändrings- och relationsritningar",
                desc: "Uppdatering av befintliga ritningar efter utförande.",
              },
              {
                title: "Rådgivning före ansökan",
                desc: "Genomgång av detaljplan, byggnadsarea (BYA), bruttoarea (BTA) och höjder.",
              },
            ].map((s) => (
              <div key={s.title} className="rounded-2xl border bg-neutral-50 p-6 hover:shadow-sm">
                <h3 className="font-medium text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold">Så går det till</h2>
          <ol className="mt-8 grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Kostnadsfri rådgivning", desc: "Vi går igenom ditt projekt, detaljplan och kommunens krav." },
              { step: "2", title: "Offert & fast pris", desc: "Du får fast pris och preliminär tidplan för leverans." },
              { step: "3", title: "Ritningsframtagning", desc: "Du får utkast för synpunkter tills allt känns rätt." },
              { step: "4", title: "Leverans & bygglov", desc: "Färdiga handlingar för digital ansökan till kommunen." },
            ].map((p) => (
              <li key={p.step} className="rounded-2xl border bg-white p-6">
                <div className="w-9 h-9 rounded-full bg-black text-white grid place-items-center font-semibold">{p.step}</div>
                <h3 className="mt-4 font-medium">{p.title}</h3>
                <p className="text-sm text-neutral-600 mt-1">{p.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

     {/* Referenser / Galleri */}
<section id="referenser" className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-end justify-between gap-4">
      <h2 className="text-3xl font-semibold">Referenser</h2>
      <a href="#kontakt" className="text-sm underline">Visa fler & begär exempel</a>
    </div>

  <div className="rounded-2xl border bg-neutral-50 p-4 flex flex-col items-center justify-center hover:shadow-md transition">
  <div className="w-full h-72 sm:h-80 lg:h-96 xl:h-[28rem] flex items-center justify-center bg-white rounded-xl">
    <img
      src="/Bilder/Fasadritning.png"
      alt="Fasadritning"
      className="max-h-full max-w-full object-contain"
      loading="lazy"
    />
  </div>
  <figcaption className="mt-4 text-sm text-neutral-700 text-center">Fasadritning</figcaption>
</div>




      <figure className="rounded-2xl overflow-hidden border bg-neutral-100">
        <img
          src="/images/garage-nybyggnad.jpg"
          alt="Garage – nybyggnad"
          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
        />
        <figcaption className="p-4 text-sm text-neutral-700">Garage – nybyggnad</figcaption>
      </figure>

      <figure className="rounded-2xl overflow-hidden border bg-neutral-100">
        <img
          src="/Bilder/Attefall.png"
          alt="Attefall"
          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
        />
        <figcaption className="p-4 text-sm text-neutral-700">Attefall</figcaption>
      </figure>
    </div>
  </div>
</section>


      {/* Priser */}
      <section id="priser" className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold">Priser</h2>
          <p className="mt-2 text-neutral-600 max-w-prose">Fast pris efter genomgång av ditt projekt. Nedan typiska spann inkl. 25% moms.</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { title: "Attefall & fasadändring", price: "4 900 – 8 900 kr", includes: ["Plan, fasad, sektion", "Enkel kontrollplan", "PDF‑leverans"] },
              { title: "Tillbyggnad", price: "8 900 – 16 900 kr", includes: ["Situationsplan", "Plan, fasad, sektion", "Kontrollplan"] },
              { title: "Nybyggnad villa/garage", price: "16 900 – 29 900 kr", includes: ["Nybyggnadskarta (underlag)", "Kompletta ritningar", "Stöd vid ansökan"] },
            ].map((p) => (
              <div key={p.title} className="rounded-2xl border bg-white p-6 flex flex-col">
                <h3 className="font-medium text-lg">{p.title}</h3>
                <p className="text-3xl font-semibold mt-2">{p.price}</p>
                <ul className="mt-4 text-sm text-neutral-600 space-y-1 list-disc list-inside">
                  {p.includes.map((li) => (<li key={li}>{li}</li>))}
                </ul>
                <a href="#kontakt" className="mt-6 inline-flex items-center justify-center rounded-xl bg-black text-white px-5 py-3 font-medium hover:opacity-90">Begär offert</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Om Sara */}
      <section id="om" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-semibold">Om Sara</h2>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              Jag heter <span className="font-medium">Sara Osman</span> och hjälper dig att få bygglovsritningar som uppfyller både Boverkets byggregler och kommunens lokala riktlinjer. Jag arbetar effektivt och kommunikativt – du får snabba svar och tydliga utkast tills allt känns rätt.
            </p>
            <ul className="mt-6 text-sm text-neutral-600 space-y-1 list-disc list-inside">
              <li>AutoCAD / Revit / Archicad</li>
              <li>Leverans i PDF/DWG och anpassning för e‑tjänst</li>
              <li>Samarbeten med mätkonsulter och KA vid behov</li>
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <div className="aspect-[4/3] rounded-3xl bg-neutral-100 border" />
            <p className="text-xs text-neutral-500 mt-2">Ersätt platsbilden med porträtt/foto.</p>
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold">Kontakt</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 rounded-2xl border bg-white p-6">
              <form onSubmit={(e) => e.preventDefault()} className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm">Namn</label>
                  <input className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="Ditt namn" />
                </div>
                <div>
                  <label className="text-sm">E‑post</label>
                  <input type="email" className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="namn@mail.se" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm">Projekt & ort</label>
                  <input className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="T.ex. tillbyggnad av villa i Mora" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm">Meddelande</label>
                  <textarea className="mt-1 w-full rounded-xl border px-3 py-2 min-h-[120px]" placeholder="Beskriv kort vad du vill bygga" />
                </div>
                <div className="sm:col-span-2 flex items-center justify-between">
                  <p className="text-sm text-neutral-600">Svar inom 24 timmar på vardagar.</p>
                  <a href="mailto:kontakt@saraosman.se" className="inline-flex items-center rounded-2xl bg-black text-white px-5 py-3 font-medium hover:opacity-90">Skicka förfrågan</a>
                </div>
              </form>
            </div>
            <aside className="rounded-2xl border bg-white p-6">
              <h3 className="font-medium">Direktkontakt</h3>
              <ul className="mt-3 text-sm text-neutral-700 space-y-1">
                <li>E‑post: <a className="underline" href="mailto:bygglovsritningar.sara@gmail.com">bygglovsritningar.sara@gmail.com</a></li>
                <li>Telefon: <a className="underline" href="tel:+46722339379">072-233 93 79</a></li>
                <li>Ort: Mora (uppdrag i hela Sverige)</li>
              </ul>
              <div className="mt-6 rounded-xl bg-neutral-50 p-4 text-sm text-neutral-600">
                <p className="font-medium text-neutral-800">Behöver du snabb hjälp?</p>
                <p>Skicka ditt underlag (skisser/foton) via e‑post så kan vi ofta ge preliminärt pris samma dag.</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border bg-black text-white p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold">Redo att komma igång?</h3>
              <p className="text-neutral-300 mt-2">Boka ett kort uppstartsmöte så tar vi fram en offert med fast pris.</p>
            </div>
            <div className="flex gap-3">
              <a href="tel:+46722339379" className="rounded-2xl bg-white text-black px-6 py-3 font-medium hover:opacity-90">Ring Sara</a>
              <a href="bygglovsritningar.sara@gmail.com" className="rounded-2xl border border-white px-6 py-3 font-medium hover:bg-white hover:text-black">Maila</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-sm text-neutral-600 grid md:grid-cols-3 gap-6 items-start">
          <div>
            <p className="font-medium text-neutral-900">Sara Osman – Bygglovsritningar</p>
            <p className="mt-2">Professionella ritningar för bygglov och anmälan. Snabbt, tryggt och prisvärt.</p>
          </div>
          <div>
            <p className="font-medium text-neutral-900">Snabblänkar</p>
            <ul className="mt-2 space-y-1">
              <li><a className="hover:underline" href="#tjanster">Tjänster</a></li>
              <li><a className="hover:underline" href="#process">Process</a></li>
              <li><a className="hover:underline" href="#priser">Priser</a></li>
              <li><a className="hover:underline" href="#kontakt">Kontakt</a></li>
            </ul>
          </div>
          <div>
            <p className="font-medium text-neutral-900">Kontakt</p>
            <ul className="mt-2 space-y-1">
              <li>E‑post: <a className="underline" href="mailto:bygglovsritningar.sara@gmail.com">bygglovsritningar.sara@gmail.com </a></li>
              <li>Telefon: <a className="underline" href="tel:+46722339379">072-233 93 79</a></li>
              <li>Org.nr: (lägg till)</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs text-neutral-500 pb-8">© {new Date().getFullYear()} Sara Osman. Alla rättigheter förbehållna.</div>
      </footer>
    </main>
	</>
  );
}

