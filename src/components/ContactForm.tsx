"use client";

import { useState, type FormEvent } from "react";
import type { Locale } from "@/lib/i18n";
import { getContent, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

// No backend needed: the form composes a WhatsApp message the visitor sends directly.
export default function ContactForm({ lang, defaultService = "" }: { lang: Locale; defaultService?: string }) {
  const c = getContent(lang);
  const t = c.ui.form;
  const [service, setService] = useState(defaultService);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const lines = [
      t.msgHello,
      `${t.msgName}: ${f.get("name")}`,
      `${t.msgService}: ${f.get("service") || t.general}`,
      f.get("date") ? `${t.msgDate}: ${f.get("date")}` : "",
      f.get("travellers") ? `${t.msgTravellers}: ${f.get("travellers")}` : "",
      f.get("message") ? `\n${f.get("message")}` : "",
    ].filter(Boolean);
    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener");
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <label>
        {t.name}
        <input name="name" required autoComplete="name" />
      </label>
      <label>
        {t.service}
        <select name="service" value={service} onChange={(e) => setService(e.target.value)}>
          <option value="">{t.general}</option>
          {c.services.map((s) => (
            <option key={s.slug} value={s.title}>{s.title}</option>
          ))}
        </select>
      </label>
      <div className="row">
        <label>
          {t.date}
          <input name="date" type="date" />
        </label>
        <label>
          {t.travellers}
          <input name="travellers" type="number" min={1} inputMode="numeric" />
        </label>
      </div>
      <label>
        {t.message}
        <textarea name="message" rows={4} placeholder={t.placeholder} />
      </label>
      <button type="submit" className="btn btn-primary" style={{ justifySelf: "start" }}>
        <WhatsAppIcon /> {t.submit}
      </button>
      <p className="form-note">{t.note}</p>
    </form>
  );
}
