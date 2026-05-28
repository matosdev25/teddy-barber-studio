import React, { Suspense } from "react";
import Barbers from "./components/Barbers.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Memberships from "./components/Memberships.jsx";
import { BOOKING_WHATSAPP_LINK } from "./data/site.js";

const Benefits = React.lazy(() => import("./components/Benefits.jsx"));
const Services = React.lazy(() => import("./components/Services.jsx"));
const Gallery = React.lazy(() => import("./components/Gallery.jsx"));
const Location = React.lazy(() => import("./components/Location.jsx"));
const FinalCta = React.lazy(() => import("./components/FinalCta.jsx"));
const Footer = React.lazy(() => import("./components/Footer.jsx"));

function SectionFallback() {
  return <div className="min-h-24 bg-ink" aria-hidden="true" />;
}

function LazySection({ children }) {
  return <Suspense fallback={<SectionFallback />}>{children}</Suspense>;
}

function App() {
  return (
    <div className="min-h-screen bg-ink text-soft">
      <Header bookingLink={BOOKING_WHATSAPP_LINK} />
      <main>
        <Barbers />
        <Hero bookingLink={BOOKING_WHATSAPP_LINK} />
        <Memberships />
        <LazySection>
          <Benefits />
        </LazySection>
        <LazySection>
          <Services bookingLink={BOOKING_WHATSAPP_LINK} />
        </LazySection>
        <LazySection>
          <Gallery />
        </LazySection>
        <LazySection>
          <Location bookingLink={BOOKING_WHATSAPP_LINK} />
        </LazySection>
        <LazySection>
          <FinalCta bookingLink={BOOKING_WHATSAPP_LINK} />
        </LazySection>
      </main>
      <LazySection>
        <Footer />
      </LazySection>
    </div>
  );
}

export default App;
