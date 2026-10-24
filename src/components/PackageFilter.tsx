"use client";

import { Children, isValidElement, useState } from "react";
import type { Region } from "@/lib/site";

type Labels = { all: string; international: string; domestic: string };

// Children must carry a `data-region` prop; filtering happens client-side so all cards stay in the static HTML.
export default function PackageFilter({ labels, children }: { labels: Labels; children: React.ReactNode }) {
  const [region, setRegion] = useState<Region | "all">("all");
  const tabs = ["all", "international", "domestic"] as const;
  return (
    <>
      <div className="tabs" role="group">
        {tabs.map((k) => (
          <button key={k} type="button" className={region === k ? "active" : ""} aria-pressed={region === k} onClick={() => setRegion(k)}>
            {labels[k]}
          </button>
        ))}
      </div>
      <div className="pkg-grid">
        {Children.map(children, (child) => {
          if (!isValidElement<{ "data-region": Region }>(child)) return child;
          return region === "all" || child.props["data-region"] === region ? child : null;
        })}
      </div>
    </>
  );
}
