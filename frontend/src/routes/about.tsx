// 
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Award, Target, Eye, ChefHat } from "lucide-react";
import { IMG, AWARDS } from "@/lib/mock-data";
import { SectionHeading } from "@/components/site/Section";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Us — Taj Royale" },
      {
        name: "description",
        content:
          "Experience the rich heritage of Indian hospitality and authentic royal cuisine at Taj Royale.",
      },
    ],
  }),
});

function AboutPage() {
  return (
    <div className="pt-32 pb-20 px-6 lg:px-10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-[10px] tracking-[0.5em] uppercase text-[var(--gold)]">
          Our Story
        </div>

        <h1 className="mt-4 text-5xl md:text-6xl font-display leading-tight">
          A Legacy of{" "}
          <span className="gold-text italic">Royal Indian Cuisine</span>
        </h1>

        <p className="mt-5 text-muted-foreground">
          Established in 1998, Taj Royale has become one of India's most
          admired fine dining destinations, blending authentic Indian flavors
          with modern luxury and unforgettable hospitality.
        </p>
      </div>

      <div className="mt-16 max-w-6xl mx-auto grid gap-10 lg:grid-cols-2 items-center">
        <img
          src={IMG.gallery1}
          alt="Taj Royale Restaurant"
          className="rounded-3xl object-cover w-full h-full max-h-[560px]"
          loading="lazy"
        />

        <div>
          <h2 className="font-display text-3xl">
            The Journey of Taj Royale
          </h2>

          <p className="mt-4 text-muted-foreground leading-relaxed">
            What started as a family-owned restaurant dedicated to preserving
            India's rich culinary traditions has grown into one of the country's
            premier fine dining experiences. Our chefs bring together recipes
            passed down through generations with contemporary presentation.
          </p>

          <p className="mt-3 text-muted-foreground leading-relaxed">
            Every dish is crafted using premium ingredients, aromatic spices,
            and authentic cooking techniques. From royal Mughlai delicacies to
            regional Indian specialties, Taj Royale celebrates the diversity of
            India's food culture while providing exceptional service to every
            guest.
          </p>
        </div>
      </div>

      <div className="mt-24 max-w-6xl mx-auto grid gap-6 md:grid-cols-3">
        {[
          {
            icon: Target,
            title: "Mission",
            text: "To deliver an unforgettable dining experience by combining authentic Indian cuisine with world-class hospitality.",
          },
          {
            icon: Eye,
            title: "Vision",
            text: "To become India's most trusted luxury dining destination while preserving traditional Indian culinary heritage.",
          },
          {
            icon: ChefHat,
            title: "Values",
            text: "Authenticity, Quality, Hospitality, Tradition, Innovation and Customer Satisfaction.",
          },
        ].map((v) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8"
          >
            <v.icon className="w-8 h-8 text-[var(--gold)]" />

            <h3 className="mt-4 font-display text-xl">{v.title}</h3>

            <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-24 max-w-4xl mx-auto">
        <SectionHeading
          eyebrow="Our Journey"
          title={
            <>
              Milestones of{" "}
              <span className="gold-text italic">Excellence</span>
            </>
          }
        />

        <div className="mt-14 relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[var(--gold)]/25 md:-translate-x-1/2" />

          {[
            {
              y: 1998,
              t: "Taj Royale was established with a vision of serving authentic Indian cuisine.",
            },
            {
              y: 2005,
              t: "Recognized as one of the city's finest family dining restaurants.",
            },
            {
              y: 2012,
              t: "Expanded with luxurious private dining halls and banquet facilities.",
            },
            {
              y: 2018,
              t: "Awarded 'Best Fine Dining Restaurant' for exceptional hospitality.",
            },
            {
              y: 2022,
              t: "Introduced online reservations and digital ordering services.",
            },
            {
              y: 2026,
              t: "Launching an AI-powered Smart Restaurant Reservation System.",
            },
          ].map((m, i) => (
            <motion.div
              key={m.y}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className={`relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-10 mb-10 ${
                i % 2
                  ? "md:text-left md:[&>div:first-child]:order-2"
                  : "md:text-right"
              }`}
            >
              <div className="absolute md:relative md:left-auto left-2 top-1 w-4 h-4 rounded-full btn-gold md:mx-auto md:col-start-1 md:col-end-2" />

              <div className="glass rounded-2xl p-5">
                <div className="font-display text-2xl gold-text">{m.y}</div>

                <div className="mt-1 text-sm text-muted-foreground">
                  {m.t}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-24 max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Achievements"
          title={
            <>
              <span className="gold-text italic">Awards</span> & Recognition
            </>
          }
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {AWARDS.map((a) => (
            <div
              key={a.title}
              className="glass rounded-2xl p-6 text-center"
            >
              <Award className="w-8 h-8 text-[var(--gold)] mx-auto" />

              <div className="mt-3 font-display text-2xl gold-text">
                {a.year}
              </div>

              <div className="mt-1 text-sm">{a.title}</div>

              <div className="mt-1 text-xs text-muted-foreground">
                {a.org}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}