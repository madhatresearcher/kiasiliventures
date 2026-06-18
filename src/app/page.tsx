import Image from "next/image";

const logoSrc = encodeURI("/images/Kiasili Ventures Logo.png");

const navigation = [
  { label: "Home", href: "#home" },
  { label: "Our Ventures", href: "#ventures" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const ventures = [
  {
    name: "Mubende Country Resort",
    category: "Hospitality",
    description:
      "A premium resort offering comfortable accommodation, memorable experiences, and exceptional service.",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1600&q=80",
  },
  {
    name: "Firestone Smokehouse",
    category: "Restaurant & Dining",
    description:
      "Bold flavours, expertly prepared meals, and a welcoming atmosphere for every occasion.",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=80",
  },
  {
    name: "Kira Bakery",
    category: "Bakery & Confectionery",
    description:
      "Fresh cakes, pastries, and baked goods crafted with care and quality ingredients.",
    image:
      "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=1600&q=80",
  },
];

const values = [
  {
    title: "Quality",
    description: "We keep standards high in every experience, service, and product we operate.",
    icon: QualityIcon,
  },
  {
    title: "Community",
    description: "We build businesses that create value for guests, teams, and the people around us.",
    icon: CommunityIcon,
  },
  {
    title: "Innovation",
    description: "We refine what we do with care, discipline, and a practical eye for improvement.",
    icon: InnovationIcon,
  },
  {
    title: "Growth",
    description: "We develop sustainable ventures designed to endure and expand with purpose.",
    icon: GrowthIcon,
  },
];

const contactDetails = [
  { label: "Phone", value: "+256 700 000 000", href: "tel:+256700000000" },
  { label: "Email", value: "hello@kiasiliventures.com", href: "mailto:hello@kiasiliventures.com" },
  { label: "Location", value: "Uganda", href: "https://www.google.com/maps/search/Uganda" },
];

const heroImage =
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=2200&q=80";
const aboutImage =
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1800&q=80";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Kiasili Ventures",
  description:
    "Kiasili Ventures develops and operates businesses across hospitality, dining, and food production.",
  logo: logoSrc,
  image: logoSrc,
};

function QualityIcon() {
  return <LineIcon path="M12 3.5l8 4.5v8l-8 4.5-8-4.5v-8l8-4.5Zm-3 7.5 2 2 4-4" />;
}

function CommunityIcon() {
  return <LineIcon path="M7.5 11.5a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Zm9 0a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5ZM4.5 19c.5-2.3 2.2-3.5 4.5-3.5m0 0c0-1.9 1.5-3.5 3-3.5s3 1.6 3 3.5m0 0c2.3 0 4 1.2 4.5 3.5" />;
}

function InnovationIcon() {
  return <LineIcon path="M12 4.5v2.25m0 10.5v2.25M4.5 12h2.25m10.5 0h2.25M6.5 6.5l1.6 1.6m7.8 7.8 1.6 1.6m0-11L16 7.9M8.1 16.1l-1.6 1.6M12 8.5A3.5 3.5 0 1 1 8.5 12 3.5 3.5 0 0 1 12 8.5Z" />;
}

function GrowthIcon() {
  return <LineIcon path="M5 18.5h14M6.5 14.5 10 11l3 2.5 4.5-6m0 0h-3m3 0v3" />;
}

function LineIcon({ path }: { path: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5 text-[#B58B47]"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={path} />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="bg-[#F8F6F2] text-[#1A1A1A]">
      <header className="absolute inset-x-0 top-0 z-30">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <a href="#home" className="flex items-center gap-3" aria-label="Kiasili Ventures home">
            <span className="relative h-14 w-14 overflow-hidden border border-white/10 bg-[#211B14] shadow-[0_10px_24px_rgba(0,0,0,0.18)] sm:h-16 sm:w-16">
              <Image
                src={logoSrc}
                alt="Kiasili Ventures logo"
                fill
                sizes="64px"
                className="object-cover"
                priority
              />
            </span>
            <span className="hidden text-[11px] font-semibold tracking-[0.34em] text-white/[0.95] sm:block">
              KIASILI VENTURES
            </span>
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[11px] font-medium uppercase tracking-[0.24em] text-white/[0.85] transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="rounded-full border border-white/[0.2] bg-white/[0.1] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-white backdrop-blur-sm transition hover:bg-white hover:text-[#111111]"
          >
            Get In Touch
          </a>
        </div>
      </header>

      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <section id="home" className="relative isolate min-h-[100svh] overflow-hidden">
          <Image
            src={heroImage}
            alt="Luxury resort architecture at warm evening light"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,17,0.25)_0%,rgba(17,17,17,0.46)_46%,rgba(17,17,17,0.72)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(181,139,71,0.18),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.28),transparent_35%)]" />

          <div className="relative mx-auto flex min-h-[100svh] max-w-7xl items-end px-5 pb-16 pt-32 sm:px-8 lg:px-12 lg:pb-20">
            <div className="max-w-4xl">
              <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-white/[0.75]">
                Hospitality, dining, and food production
              </p>
              <h1 className="mt-5 max-w-3xl font-serif text-5xl leading-[0.98] text-white sm:text-6xl lg:text-7xl">
                Building and Operating Businesses That Serve Our Communities
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/[0.82] sm:text-lg">
                Kiasili Ventures develops and operates businesses across hospitality, dining, and food production.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#ventures"
                  className="inline-flex items-center justify-center rounded-full bg-[#B58B47] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#a67b3d]"
                >
                  Our Ventures
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center justify-center rounded-full border border-white/[0.22] bg-white/[0.08] px-6 py-3 text-sm font-medium text-white/[0.92] backdrop-blur-sm transition hover:bg-white hover:text-[#111111]"
                >
                  About Us
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="ventures" className="bg-[#F8F6F2] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#B58B47]">Our Ventures</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-[#111111] sm:text-5xl">
                Distinct businesses, one standard of care
              </h2>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {ventures.map((venture) => (
                <article
                  key={venture.name}
                  className="group overflow-hidden bg-white shadow-[0_18px_50px_rgba(17,17,17,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(17,17,17,0.1)]"
                >
                  <div className="relative h-[320px] overflow-hidden">
                    <Image
                      src={venture.image}
                      alt={venture.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/[0.26] via-black/[0.06] to-transparent" />
                  </div>
                  <div className="space-y-4 p-7">
                    <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#B58B47]">
                      {venture.category}
                    </p>
                    <h3 className="font-serif text-3xl leading-tight text-[#111111]">{venture.name}</h3>
                    <p className="text-sm leading-7 text-[#666666]">{venture.description}</p>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-sm font-medium text-[#111111] transition hover:text-[#B58B47]"
                    >
                      Learn More
                      <span aria-hidden="true">-&gt;</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="max-w-2xl">
              <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#B58B47]">About Us</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-[#111111] sm:text-5xl">
                About Kiasili Ventures
              </h2>
              <p className="mt-6 text-base leading-8 text-[#666666] sm:text-lg">
                Kiasili Ventures develops and operates businesses across hospitality, dining, and food production.
                Our focus is creating sustainable businesses that deliver quality experiences and long-term value.
              </p>
            </div>

            <div className="relative min-h-[420px] overflow-hidden bg-[#EDE7DF] shadow-[0_18px_50px_rgba(17,17,17,0.08)]">
              <Image
                src={aboutImage}
                alt="Professional hospitality and business team"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/[0.12] via-transparent to-transparent" />
            </div>
          </div>
        </section>

        <section className="bg-[#F8F6F2] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#B58B47]">Values</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-[#111111] sm:text-5xl">
                Simple principles that shape every venture
              </h2>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {values.map((value) => {
                const Icon = value.icon;

                return (
                  <article key={value.title} className="border border-[#E7E0D6] bg-white p-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F8F2E7]">
                      <Icon />
                    </div>
                    <h3 className="mt-6 text-lg font-semibold text-[#111111]">{value.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#666666]">{value.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-7xl rounded-[1.75rem] border border-[#E7E0D6] bg-[#F8F6F2] p-8 sm:p-10 lg:p-12">
            <div className="max-w-2xl">
              <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#B58B47]">Contact</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-[#111111] sm:text-5xl">
                Get In Touch
              </h2>
              <p className="mt-5 text-base leading-8 text-[#666666]">
                We would be glad to hear from you about hospitality, dining, or bakery opportunities.
              </p>
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-[1fr_1fr_1fr_auto]">
              {contactDetails.map((detail) => (
                <a
                  key={detail.label}
                  href={detail.href}
                  className="border border-[#E7E0D6] bg-white p-5 transition hover:border-[#B58B47] hover:shadow-[0_10px_30px_rgba(17,17,17,0.06)]"
                >
                  <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-[#B58B47]">
                    {detail.label}
                  </p>
                  <p className="mt-3 text-base font-medium text-[#111111]">{detail.value}</p>
                </a>
              ))}

              <a
                href="mailto:hello@kiasiliventures.com"
                className="inline-flex items-center justify-center rounded-full bg-[#111111] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#1f1f1f]"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#111111] px-5 py-12 text-white/[0.88] sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <div className="flex items-center gap-4">
              <span className="relative h-16 w-16 overflow-hidden border border-white/10 bg-[#211B14]">
                <Image
                  src={logoSrc}
                  alt="Kiasili Ventures logo"
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </span>
              <p className="text-sm font-semibold tracking-[0.3em] text-white">KIASILI VENTURES</p>
            </div>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/[0.68]">
              A Ugandan business group operating in hospitality, dining, and bakery services.
            </p>
          </div>

          <nav aria-label="Footer" className="grid gap-3 text-sm">
            {navigation.map((item) => (
              <a key={item.label} href={item.href} className="text-white/[0.72] transition hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="grid gap-2 text-sm text-white/[0.72]">
            <a href="tel:+256700000000" className="transition hover:text-white">
              +256 700 000 000
            </a>
            <a href="mailto:hello@kiasiliventures.com" className="transition hover:text-white">
              hello@kiasiliventures.com
            </a>
            <p>Uganda</p>
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-7xl items-center justify-between border-t border-white/[0.1] pt-6 text-xs text-white/[0.48]">
          <p>Copyright (c) {new Date().getFullYear()} Kiasili Ventures. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
