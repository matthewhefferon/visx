import ParentSize from "@visx/responsive/lib/components/ParentSize";
import GradientChart from "./GradientChart";

export default function Crypto() {
  return (
    <>
      {/*  Gradient chart */}
      <div className="relative m-2 flex h-80 min-h-80 overflow-hidden rounded-lg bg-gray-800 shadow-inner w-full">
        <div className="z-10 m-5  flex max-w-[50%] flex-col space-y-1 text-gray-200 self-end">
          <p className="mb-0 font-light opacity-50">Trending Today </p>
          <h1 className="text-2xl font-bold">BNB (BNB)</h1>
          <p className="font-light text-green-300 opacity-60">+12% </p>
        </div>
        <div className="absolute z-0 flex h-full w-full bg-gray-800">
          <div className="via-gray-90 0 pointer-events-none absolute top-0 z-50 min-h-full w-1/2 bg-gradient-to-r from-gray-800 via-gray-800"></div>

          <ParentSize debounceTime={15}>
            {({ width: visWidth, height: visHeight }) => (
              <GradientChart
                width={visWidth}
                height={visHeight}
                id="binancecoin"
              />
            )}
          </ParentSize>
        </div>
      </div>
    </>
  );
}
