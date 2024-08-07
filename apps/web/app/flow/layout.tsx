import { Separator } from "@semicolon/ui/separator";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center gap-4 px-2 py-12 sm:container sm:gap-6 lg:flex-row xl:gap-11">
      <div className="flex flex-row gap-4 lg:hidden">
        <h1 className="text-3xl font-bold xl:text-8xl">semicolon</h1>
        <h1 className="text-3xl font-extrabold text-sky-300 xl:text-8xl">;</h1>
      </div>
      <Separator className="block w-1/2 sm:hidden" />
      <div className="flex w-full items-center justify-center sm:w-3/4 lg:w-full lg:justify-end lg:self-stretch xl:w-1/2 xl:pl-8">
        <div className="flex h-full max-h-[720px] min-h-[660px] w-full min-w-[280px] flex-row items-center justify-center rounded-lg px-5 sm:border sm:px-10 lg:px-14">
          <div className="flex h-full w-full flex-col justify-center lg:min-w-[400px]">
            {children}
          </div>
        </div>
      </div>
      <div className="hidden select-none flex-row items-center justify-center gap-14 lg:flex xl:justify-start">
        <div className="flex flex-col items-center justify-center gap-9">
          <div className="flex flex-row gap-6">
            <h1 className="text-7xl font-bold xl:text-8xl">semicolon</h1>
            <h1 className="text-7xl font-extrabold text-sky-300 xl:text-8xl">
              ;
            </h1>
          </div>
          <h3 className="text-muted-foreground text-2xl">
            Where conversation happens.
          </h3>
        </div>
      </div>
    </section>
  );
}
