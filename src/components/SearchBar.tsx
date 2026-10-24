"use client";

import type { FormEvent } from "react";
import type { Locale } from "@/lib/i18n";
import { getContent, whatsappLink } from "@/lib/site";
import { ArrowIcon, CalendarIcon, PinIcon, SearchIcon } from "./icons";

// Composes a WhatsApp quote request from the hero search fields.
export default function SearchBar({ lang }: { lang: Locale }) {
  const t = getContent(lang).ui.search;

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const lines = [
      t.msg,
      f.get("from") ? `${t.from}: ${f.get("from")}` : "",
      f.get("to") ? `${t.to}: ${f.get("to")}` : "",
      f.get("date") ? `${t.date}: ${f.get("date")}` : "",
    ].filter(Boolean);
    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener");
  }

  return (
    <form className="search" onSubmit={onSubmit}>
      <label>
        <SearchIcon />
        <span><b>{t.from}</b><input name="from" placeholder={t.fromPh} autoComplete="address-level2" /></span>
      </label>
      <label>
        <PinIcon />
        <span><b>{t.to}</b><input name="to" placeholder={t.toPh} /></span>
      </label>
      <label>
        <CalendarIcon />
        <span><b>{t.date}</b><input name="date" type="date" /></span>
      </label>
      <button type="submit" className="btn btn-primary">
        {t.submit} <ArrowIcon className="flip-rtl" />
      </button>
    </form>
  );
}
