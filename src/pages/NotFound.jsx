import { Link } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta";

const NotFound = () => {
  usePageMeta({ title: "Page not found", path: "/404" });
  return (
    <section className="container-page flex min-h-[70vh] flex-col items-center justify-center pt-28 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 text-3xl font-bold sm:text-4xl">This page doesn&apos;t exist</h1>
      <p className="text-muted mt-3">The link may be old or mistyped.</p>
      <Link to="/" className="btn-primary mt-8">
        Back to the homepage
      </Link>
    </section>
  );
};

export default NotFound;
