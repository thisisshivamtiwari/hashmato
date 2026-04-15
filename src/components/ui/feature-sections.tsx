import {
  HASHMATO_SCREENSHOTS,
  HASHMATO_SITE,
} from '@/data/hashmato'

export default function Example() {
  return (
    <section className="w-full py-16">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>

      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-3xl font-semibold">Running restaurants is hard.</h1>
        <p className="text-sm text-slate-500 mt-2">
          Team fatigue, slow support, and scattered tools hurt growth. Hashmato
          unifies your full stack and brings decision clarity.
        </p>
      </div>

      <div className="flex flex-wrap items-start justify-center gap-10">
        <div className="max-w-80 hover:-translate-y-0.5 transition duration-300">
          <img
            className="rounded-xl"
            src={HASHMATO_SCREENSHOTS.problem}
            alt="Operational problem breakdown"
          />
          <h3 className="text-base font-semibold text-slate-700 mt-4">
            Unclear operations map
          </h3>
          <p className="text-sm text-slate-600 mt-1">
            Identify pressure points across kitchen, counters, and reporting.
          </p>
        </div>

        <div className="max-w-80 hover:-translate-y-0.5 transition duration-300">
          <img
            className="rounded-xl"
            src={HASHMATO_SCREENSHOTS.platformArchitecture}
            alt="Hashmato complete platform architecture"
          />
          <h3 className="text-base font-semibold text-slate-700 mt-4">
            Complete architecture
          </h3>
          <p className="text-sm text-slate-600 mt-1">
            Connect ordering, POS, inventory, and analytics in one platform.
          </p>
        </div>

        <div className="max-w-80 hover:-translate-y-0.5 transition duration-300">
          <img
            className="rounded-xl"
            src={HASHMATO_SCREENSHOTS.transformation}
            alt="Business transformation comparison"
          />
          <h3 className="text-base font-semibold text-slate-700 mt-4">
            Before vs after Hashmato
          </h3>
          <p className="text-sm text-slate-600 mt-1">
            Replace manual firefighting with reliable process automation.
          </p>
        </div>
      </div>
      <div className="mt-10 text-center">
        <a
          href={HASHMATO_SITE}
          target="_blank"
          rel="noreferrer"
          className="inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white"
        >
          Explore Hashmato stack
        </a>
      </div>
    </section>
  )
}
