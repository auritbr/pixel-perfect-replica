import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, MessageCircle } from "lucide-react";

import { Breadcrumbs, type Crumb } from "@/components/site/PageHero";

export type HeroAction =
  | { label: string; href: string; external?: boolean; icon?: "down" | "message" | "arrow" }
  | { label: string; to: "/projetos" | "/contato"; icon?: "down" | "message" | "arrow" };

function ActionContent({ action }: { action: HeroAction }) {
  const Icon = action.icon === "down" ? ArrowDown : action.icon === "message" ? MessageCircle : ArrowRight;
  return (
    <>
      {action.label}
      <Icon className="size-4" aria-hidden="true" />
    </>
  );
}

export function FeatureHero({
  image,
  imageAlt,
  eyebrow,
  title,
  description,
  crumbs,
  primaryAction,
  secondaryAction,
}: {
  image: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  description: string;
  crumbs: Crumb[];
  primaryAction?: HeroAction;
  secondaryAction?: HeroAction;
}) {
  const renderAction = (action: HeroAction, primary: boolean) => {
    const classe = `btn-base ${primary ? "glass-btn-light" : "glass-btn-ghost"}`;
    return "to" in action ? (
      <Link key={action.label} to={action.to} className={classe}>
        <ActionContent action={action} />
      </Link>
    ) : (
      <a
        key={action.label}
        href={action.href}
        className={classe}
        {...(action.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        <ActionContent action={action} />
      </a>
    );
  };

  return (
    <section className="relative isolate min-h-[340px] overflow-hidden bg-inst-deep sm:min-h-[430px] lg:min-h-[520px]">
      <img
        src={image}
        alt={imageAlt}
        width={1536}
        height={864}
        className="absolute inset-0 size-full object-cover"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-inst-deep/88 via-inst-deep/55 to-inst-deep/20"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-14 top-16 hidden size-36 rounded-full border-[10px] border-coral/40 sm:block"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-5 top-20 hidden h-28 w-12 -rotate-12 rounded-full bg-inst/45 sm:block"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-14 top-12 hidden size-3 rounded-full bg-mata/80 lg:block"
      />

      <div className="container-site relative flex min-h-[340px] flex-col pb-16 pt-6 sm:min-h-[430px] sm:pb-20 lg:min-h-[520px]">
        <div className="text-primary-foreground [&_a]:text-primary-foreground/85">
          <Breadcrumbs items={crumbs} tone="dark" />
        </div>
        <div className="my-auto max-w-[720px] pb-6 text-primary-foreground">
          <span className="inline-flex items-center gap-2 rounded-[18px] border border-[rgb(255_255_255_/_0.22)] bg-[rgb(255_255_255_/_0.1)] px-[13px] py-[7px] font-display text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-primary-foreground backdrop-blur-[8px]">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-coral" />
            {eyebrow}
          </span>
          <h1 className="mt-5 max-w-[700px] text-[2rem] font-semibold leading-[1.12] text-primary-foreground sm:text-[2.5rem] lg:text-[3.35rem]">
            {title}
          </h1>
          <p className="mt-4 max-w-[640px] text-[1.02rem] leading-relaxed text-[rgb(255_255_255_/_0.84)] sm:text-[1.12rem] lg:text-[1.2rem]">
            {description}
          </p>
          {primaryAction || secondaryAction ? (
            <div className="mt-7 flex flex-wrap gap-3">
              {primaryAction ? renderAction(primaryAction, true) : null}
              {secondaryAction ? renderAction(secondaryAction, false) : null}
            </div>
          ) : null}
        </div>
      </div>

      <svg
        aria-hidden="true"
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className="pointer-events-none absolute bottom-0 left-0 h-[42px] w-full sm:h-[58px]"
      >
        <path
          d="M0,70 C260,26 460,84 760,58 C1030,34 1210,78 1440,46 L1440,90 L0,90 Z"
          fill="var(--background)"
        />
      </svg>
    </section>
  );
}
