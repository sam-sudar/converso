
import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import Cta from "@/components/CTA";

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl underline">Popular Companions</h1>
      <section className="home-section">
          <CompanionCard
            id="123"
            name="Neura the Brainy Explorer"
            topic="Something Something about Brain"
            subject="science"
            duration={45}
            color="#ffda6e"
          />
          <CompanionCard
              id="234"
              name="Countsy the Number Wizard"
              topic="Something Something about Numbers"
              subject="Maths"
              duration={30}
              color="#e5d0ff"
          />
          <CompanionCard
              id="789"
              name="Verbasorous"
              topic="Language"
              subject="English"
              duration={30}
              color="#BDE7FF"
          />
      </section>

        <section>
            <CompanionsList />
            <Cta />
        </section>
    </main>
  )
}

export default Page