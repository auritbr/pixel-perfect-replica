import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, MessageCircle } from "lucide-react";

import { Breadcrumbs, type Crumb } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";

type HeroAction =
  | { label: string; href: string; external?: boolean; icon?: "down" | "message" }
  | { label: string; to: "/projetos"; icon?: "arrow" };

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
  primaryAction: HeroAction;
  secondaryAction: HeroAction;
}) {
  const actionClass =
    "h-[46px] rounded-[20px] px-6 font-sans text-sm font-semibold transition-all duration-200 hover:-translate-y-px focus-visible:ring-2 focus-visible:ring-primary-foreground";

  const renderAction = (action: HeroAction, primary: boolean) => (
    <Button
      asChild
      variant="ghost"
      className={`${actionClass} ${
        primary
          ? "glass-btn-light text-inst-deep hover:text-inst-deep"
          : "glass-btn-ghost text-primary-foreground hover:text-primary-foreground"
      }`}
    >
      {"to" in action ? (
        <Link to={action.to}>
          <ActionContent action={action} />
        </Link>
      ) : (
        <a
          href={action.href}
          {...(action.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          <ActionContent action={action} />
        </a>
      )}
    </Button>
  );

  return (
    <section className="relative isolate min-h-[360px] overflow-hidden bg-inst-deep sm:min-h-[430px] lg:min-h-[500px]">
      <img
        src={image}
        alt={imageAlt}
        width={1536}
        height={864}
        className="absolute inset-0 size-full object-cover"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-inst-deep/90 via-inst-deep/55 to-inst-deep/15"
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

      <div className="container-site relative flex min-h-[360px] flex-col pb-16 pt-6 sm:min-h-[430px] sm:pb-20 lg:min-h-[500px]">
        <div className="text-primary-foreground [&_a]:text-primary-foreground/85">
          <Breadcrumbs items={crumbs} tone="dark" />
        </div>
        <div className="my-auto max-w-[740px] pb-4 text-primary-foreground">
          <span className="glass-btn-ghost inline-flex items-center gap-2 rounded-[18px] px-3.5 py-2 font-display text-[0.72rem] font-semibold uppercase tracking-[0.14em]">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-coral" />
            {eyebrow}
          </span>
          <h1 className="mt-5 max-w-[720px] text-[2rem] font-semibold leading-[1.12] text-primary-foreground sm:text-[2.55rem] lg:text-[3.35rem]">
            {title}
          </h1>
          <p className="mt-4 max-w-[650px] text-[1rem] leading-relaxed text-primary-foreground/85 sm:text-[1.12rem] lg:text-[1.2rem]">
            {description}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            {renderAction(primaryAction, true)}
            {renderAction(secondaryAction, false)}
          </div>
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