import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { HASHMATO_SCREENSHOTS, HASHMATO_SITE } from '@/data/hashmato'

export const Hero195 = () => {
  return (
    <section className="relative w-full bg-[#f5f5f5] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-5xl font-bold leading-[0.95] tracking-tight text-black sm:text-6xl md:text-7xl">
            Everything in
            <br />
            one platform.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-xl text-neutral-500">
            Your screenshots, now translated into a complete operating cockpit:
            reports, outlet insights, owner controls, and revenue tracking.
          </p>
          <div className="mt-8">
            <Button className="bg-black text-white hover:bg-neutral-800" asChild>
              <a href={HASHMATO_SITE} target="_blank" rel="noreferrer">
                Schedule a walkthrough
              </a>
            </Button>
          </div>
        </div>

        <Tabs defaultValue="insights" className="mx-auto mt-10 max-w-max">
          <TabsList className="h-12 rounded-xl border border-neutral-300 bg-white/70 px-2">
            <TabsTrigger value="insights">Architecture</TabsTrigger>
            <TabsTrigger value="metrics">Owner View</TabsTrigger>
            <TabsTrigger value="trends">Outlets</TabsTrigger>
            <TabsTrigger value="sources">Revenue</TabsTrigger>
            <TabsTrigger value="models">Cost</TabsTrigger>
          </TabsList>
          <div className="hidden">
            <TabsContent value="insights" />
            <TabsContent value="metrics" />
            <TabsContent value="trends" />
            <TabsContent value="sources" />
            <TabsContent value="models" />
          </div>
        </Tabs>

        <div className="mt-8 overflow-hidden rounded-2xl border border-neutral-300 bg-white shadow-sm">
          <div className="grid min-h-[560px] lg:grid-cols-[220px_1fr]">
            <aside className="hidden border-r border-neutral-200 bg-neutral-50 p-4 lg:block">
              <p className="text-xs font-semibold text-neutral-700">
                Hashmato · Control Center
              </p>
              <ul className="mt-4 space-y-2 text-xs text-neutral-500">
                <li className="rounded bg-neutral-200/70 px-2 py-1 text-neutral-700">
                  Platform map
                </li>
                <li className="px-2 py-1">Issue-wise reports</li>
                <li className="px-2 py-1">Outlet comparisons</li>
                <li className="px-2 py-1">Revenue trends</li>
                <li className="px-2 py-1">Cost controls</li>
              </ul>
            </aside>

            <div className="p-4">
              <div className="mb-3 flex items-center justify-between rounded-md border border-neutral-200 bg-neutral-50 px-3 py-2">
                <span className="text-sm font-semibold text-neutral-700">Executive snapshot</span>
                <button className="rounded bg-neutral-900 px-3 py-1 text-xs font-medium text-white">
                  View live demo
                </button>
              </div>

              <div className="grid gap-3 md:grid-cols-4">
                {[
                  ['2.5x', 'Average order throughput'],
                  ['42', 'Outlets tracked'],
                  ['30%', 'Ops cost reduction target'],
                  ['44%', 'Revenue growth benchmark'],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-lg border border-neutral-200 bg-white p-3"
                  >
                    <p className="text-[11px] text-neutral-500">{label}</p>
                    <p className="mt-2 text-xl font-semibold text-neutral-900">{value}</p>
                    <p className="text-[10px] text-emerald-600">From your shared benchmark screens</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 grid gap-4 lg:grid-cols-3">
                <div className="space-y-4 lg:col-span-2">
                  <div className="rounded-lg border border-neutral-200 bg-white p-3">
                    <p className="text-xs font-medium text-neutral-700">
                      Complete platform architecture
                    </p>
                    <img
                      src={HASHMATO_SCREENSHOTS.platformArchitecture}
                      alt="Hashmato platform architecture"
                      className="mt-3 h-44 w-full rounded object-cover"
                    />
                  </div>
                  <div className="rounded-lg border border-neutral-200 bg-white p-3">
                    <p className="text-xs font-medium text-neutral-700">Core execution screens</p>
                    <div className="mt-3 space-y-2 text-xs">
                      {[
                        ['Beverage POS', HASHMATO_SCREENSHOTS.dashboardBeverage],
                        ['Order timeline', HASHMATO_SCREENSHOTS.dashboardOrders],
                        ['Table flow', HASHMATO_SCREENSHOTS.dashboardTables],
                        ['Issue reports', HASHMATO_SCREENSHOTS.dashboardReports],
                      ].map(([title, image]) => (
                        <div
                          key={title}
                          className="flex items-center justify-between rounded border border-neutral-200 px-2 py-1.5 text-neutral-600"
                        >
                          <span>{title}</span>
                          <img src={image as string} alt={title} className="h-8 w-14 rounded object-cover" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-lg border border-neutral-200 bg-white p-3">
                    <p className="text-xs font-medium text-neutral-700">Revenue and cost cards</p>
                    <img
                      src={HASHMATO_SCREENSHOTS.revenueGrowth}
                      alt="Revenue growth card"
                      className="mt-3 h-20 w-full rounded object-cover"
                    />
                    <img
                      src={HASHMATO_SCREENSHOTS.costControl}
                      alt="Cost control card"
                      className="mt-2 h-20 w-full rounded object-cover"
                    />
                  </div>
                  <div className="rounded-lg border border-neutral-200 bg-white p-3">
                    <p className="text-xs font-medium text-neutral-700">Transformation outcomes</p>
                    <ul className="mt-2 space-y-2 text-xs text-neutral-600">
                      <li className="flex items-center justify-between"><span>Total control</span><span>Owner</span></li>
                      <li className="flex items-center justify-between"><span>Multi-outlet scale</span><span>Ops</span></li>
                      <li className="flex items-center justify-between"><span>Higher revenue</span><span>Growth</span></li>
                      <li className="flex items-center justify-between"><span>Controlled costs</span><span>Finance</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
