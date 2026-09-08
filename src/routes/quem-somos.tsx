import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/quem-somos")({
  component: () => <Outlet />,
});
