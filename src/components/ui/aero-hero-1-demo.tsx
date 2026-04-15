import { ArrowUpRight } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/ui/marquee";
import { HASHMATO_SCREENSHOTS, HASHMATO_SITE } from "@/data/hashmato";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden pt-0 text-black dark:bg-white">
      <div className="relative z-10 mx-auto h-full w-full max-w-full">
        <div className="grid grid-cols-1 md:h-screen md:grid-cols-12">
          <div className="h-64 w-full md:col-span-6 md:h-full">
            <img
              alt="RBS intro visual"
              className="h-full w-full overflow-hidden object-cover object-center"
              height={1080}
              src={HASHMATO_SCREENSHOTS.introRbs}
              width={1920}
            />
          </div>

          <div className="flex w-full items-center justify-between px-6 pb-10 pt-8 text-left md:col-span-6 md:pb-0 md:pl-10 md:pr-6 md:pt-20">
            <div className="w-full max-w-3xl space-y-6">
              <h1 className="font-normal text-4xl tracking-tighter md:text-6xl lg:text-7xl">
                Introducing RBS powered by Hashmato
              </h1>

              <p className="max-w-2xl text-base font-light md:text-lg lg:text-xl">
                We build complete technology workflows for modern restaurants:
                sales, service, reporting, and growth in one connected ecosystem.
              </p>
              <div className="mt-auto space-y-7">
                <div className="mt-8 flex flex-wrap items-center gap-3 lg:mt-auto">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <Avatar
                        className="size-12 border-2 border-white transition-all duration-300 hover:grayscale-0"
                        key={i}
                      >
                        <AvatarImage
                          src={`https://images.cnippet.dev/image/upload/v1770400411/a${i}.jpg`}
                        />
                        <AvatarFallback>U{i}</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                  <div className="flex flex-col text-sm font-normal">
                    <span className="text-base sm:text-lg">15,000+</span>
                    <span>Restaurants streamlined</span>
                  </div>
                </div>
                <div className="flex w-fit gap-6">
                  <Button className="group mx-auto flex cursor-pointer items-center justify-center gap-0 rounded-full border-none bg-transparent px-0 py-5 font-normal shadow-none hover:bg-transparent" asChild>
                    <a href={HASHMATO_SITE} target="_blank" rel="noreferrer">
                    <span className="rounded-full bg-[#e1fcad] px-6 py-3 text-black duration-500 ease-in-out group-hover:bg-[#122023] group-hover:text-[#e1fcad] group-hover:transition-colors">
                      Book a demo
                    </span>
                    <div className="relative flex h-fit cursor-pointer items-center overflow-hidden rounded-full bg-[#e1fcad] p-5 text-black duration-500 ease-in-out group-hover:bg-[#122023] group-hover:text-[#e1fcad] group-hover:transition-colors">
                      <ArrowUpRight className="absolute h-5 w-5 -translate-x-1/2 transition-all duration-500 ease-in-out group-hover:translate-x-10" />
                      <ArrowUpRight className="absolute h-5 w-5 -translate-x-10 transition-all duration-500 ease-in-out group-hover:-translate-x-1/2" />
                    </div>
                    </a>
                  </Button>
                </div>
              </div>
              <div className="relative -mx-4 mt-8 sm:-mx-6 lg:-mx-8">
                <div className="absolute left-0 z-40 h-full w-20 bg-linear-to-r from-white" />
                <div className="absolute right-0 z-40 h-full w-20 bg-linear-to-l from-white" />

                <Marquee className="[--duration:25s]" pauseOnHover repeat={2}>
                  {[
                    HASHMATO_SCREENSHOTS.dashboardBeverage,
                    HASHMATO_SCREENSHOTS.dashboardOrders,
                    HASHMATO_SCREENSHOTS.dashboardTables,
                    HASHMATO_SCREENSHOTS.dashboardReports,
                    HASHMATO_SCREENSHOTS.platformArchitecture,
                  ].map((logo, index) => (
                    <div
                      className="flex items-center justify-center px-3 md:px-5"
                      key={`cmp_sno_${index}`}
                    >
                      <img
                        alt="Hashmato visual"
                        className="h-8 w-14 rounded object-cover md:h-10 md:w-20"
                        src={logo}
                      />
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
