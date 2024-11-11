<script>
    import { LayerCake, Svg } from 'layercake';
    import Line from './charts/Line.svelte'
    import AxisX from './charts/AxisX.svelte';
    import AxisY from './charts/AxisY.svelte';
   
    const data = [
      { myX: 1979, myY: 7.19 },
      { myX: 1980, myY: 7.83 },
      { myX: 1981, myY: 7.24 },
      { myX: 2016, myY: 4.72 }
    ];
  
    const xKey = 'myX';
    const yKey = 'myY';
  
    data.forEach(d => {
      d[yKey] = +d[yKey];
    });
  </script>
  
  <div class="min-h-screen bg-black p-5 font-mono text-green-400">
    <div class="boot-sequence fixed inset-0 bg-black p-5 z-50">
      <div class="boot-line opacity-0">
        Initializing market terminal...
      </div>
      <div class="boot-line opacity-0">
        Loading comprehensive data...
      </div>
      <div class="boot-line opacity-0">
        Processing market analysis...
      </div>
      <div class="boot-line opacity-0">
        READY
      </div>
    </div>
  
    <div class="max-w-7xl mx-auto">
      <div class="border-b border-green-400 pb-3 mb-5">
        <div class="text-2xl mb-1">
          AAPL - Apple Inc.
        </div>
  
        <div class="flex flex-wrap gap-5 text-lg mt-2.5">
          <div class="stat-item">
            $198.76
          </div>
  
          <div class="stat-item text-green-400">
            +2.45 (+1.25%)
          </div>
  
          <div class="stat-item">
            Vol: 45.2M
          </div>
        </div>
      </div>
  
      <div class="h-96 w-full my-8 relative border-l border-b border-green-400">
        <LayerCake
          padding={{ top: 8, right: 10, bottom: 20, left: 25 }}
          x={xKey}
          y={yKey}
          yDomain={[0, null]}
          {data}
        >
          <Svg>
            <AxisX />
            <AxisY ticks={4} />
            <Line />
          </Svg>
        </LayerCake>
      </div>
  
      <div class="space-y-8">
        <!-- Performance Overview Section -->
        <section class="border-l border-green-400 p-4">
          <h2 class="text-lg mb-4 pl-5 relative before:content-['>'] before:absolute before:left-0">
            Performance Overview
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div class="space-y-2">
              <div class="flex justify-between py-2 border-b border-green-400">
                YTD Return <span class="text-green-400">▲ +15.8%</span>
              </div>
              <div class="flex justify-between py-2 border-b border-green-400">
                1-Year Return <span class="text-green-400">▲ +22.4%</span>
              </div>
              <div class="flex justify-between py-2 border-b border-green-400">
                5-Year Return <span class="text-green-400">▲ +270.5%</span>
              </div>
              <div class="flex justify-between py-2 border-b border-green-400">
                vs S&P 500 (1Y) <span class="text-green-400">▲ +8.2%</span>
              </div>
            </div>
            <div class="space-y-2">
              <div class="flex justify-between py-2 border-b border-green-400">
                52-Week Range <span>$167.32 - $204.56</span>
              </div>
              <div class="flex justify-between py-2 border-b border-green-400">
                Market Cap <span>$3.12T</span>
              </div>
              <div class="flex justify-between py-2 border-b border-green-400">
                Beta <span>1.28</span>
              </div>
              <div class="flex justify-between py-2 border-b border-green-400">
                Avg. Volume <span>52.8M</span>
              </div>
            </div>
          </div>
        </section>
  
        <!-- Financial Health Section -->
        <section class="border-l border-green-400 p-4">
          <h2 class="text-lg mb-4 pl-5 relative before:content-['>'] before:absolute before:left-0">
            Financial Health
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div class="space-y-2">
              <div class="flex justify-between py-2 border-b border-green-400">
                P/E Ratio <span>32.45</span>
              </div>
              <div class="flex justify-between py-2 border-b border-green-400">
                Revenue Growth (YoY) <span class="text-green-400">▲ +8.1%</span>
              </div>
              <div class="flex justify-between py-2 border-b border-green-400">
                Profit Margin <span>25.3%</span>
              </div>
              <div class="flex justify-between py-2 border-b border-green-400">
                Dividend Yield <span>0.92%</span>
              </div>
            </div>
            <div class="space-y-2">
              <div class="flex justify-between py-2 border-b border-green-400">
                Revenue (TTM) <span>$394.3B</span>
              </div>
              <div class="flex justify-between py-2 border-b border-green-400">
                Net Income (TTM) <span>$96.9B</span>
              </div>
              <div class="flex justify-between py-2 border-b border-green-400">
                Cash on Hand <span>$62.5B</span>
              </div>
              <div class="flex justify-between py-2 border-b border-green-400">
                Debt-to-Equity <span>1.76</span>
              </div>
            </div>
          </div>
        </section>
  
        <!-- Business Overview Section -->
        <section class="border-l border-green-400 p-4">
          <h2 class="text-lg mb-4 pl-5 relative before:content-['>'] before:absolute before:left-0">
            Business Overview
          </h2>
          <div class="leading-relaxed my-4 p-2.5 border border-green-400">
            Apple Inc. designs, manufactures, and markets smartphones, personal
            computers, tablets, wearables, and accessories worldwide. The company's
            main revenue streams include iPhone (54%), Services (21%), Mac (11%),
            iPad (8%), and Wearables (6%).
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div class="space-y-2">
              <div class="flex justify-between py-2 border-b border-green-400">
                Main Products <span>iPhone, Mac, iPad</span>
              </div>
              <div class="flex justify-between py-2 border-b border-green-400">
                Key Services <span>App Store, iCloud</span>
              </div>
              <div class="flex justify-between py-2 border-b border-green-400">
                Competitors <span>MSFT, GOOGL, AMZN</span>
              </div>
            </div>
            <div class="space-y-2">
              <div class="flex justify-between py-2 border-b border-green-400">
                Employees <span>164,000</span>
              </div>
              <div class="flex justify-between py-2 border-b border-green-400">
                Founded <span>1976</span>
              </div>
              <div class="flex justify-between py-2 border-b border-green-400">
                Headquarters <span>Cupertino, CA</span>
              </div>
            </div>
          </div>
        </section>
  
        <!-- Risk Assessment Section -->
        <section class="border-l border-green-400 p-4">
          <h2 class="text-lg mb-4 pl-5 relative before:content-['>'] before:absolute before:left-0">
            Risk Assessment
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div class="space-y-2">
              <div class="flex justify-between py-2 border-b border-green-400">
                Market Risk <span class="before:content-['[■__]'] before:mr-2">LOW</span>
              </div>
              <div class="flex justify-between py-2 border-b border-green-400">
                Industry Risk <span class="before:content-['[■■_]'] before:mr-2">MODERATE</span>
              </div>
            </div>
            <div class="space-y-2">
              <div class="flex justify-between py-2 border-b border-green-400">
                Financial Risk <span class="before:content-['[■__]'] before:mr-2">LOW</span>
              </div>
              <div class="flex justify-between py-2 border-b border-green-400">
                Competition Risk <span class="before:content-['[■■■]'] before:mr-2">HIGH</span>
              </div>
            </div>
          </div>
        </section>
  
        <!-- Recent News Section -->
        <section class="border-l border-green-400 p-4">
          <h2 class="text-lg mb-4 pl-5 relative before:content-['>'] before:absolute before:left-0">
            Recent News
          </h2>
          <div class="space-y-2">
            <div class="py-2.5 cursor-pointer transition-all duration-200 hover:pl-2.5 hover:border-l-4 border-l-0 border-green-400">
              <span class="mr-4">[2024-07-10]</span> Apple Announces New Product Line for Creative Professionals
            </div>
            <div class="py-2.5 cursor-pointer transition-all duration-200 hover:pl-2.5 hover:border-l-4 border-l-0 border-green-400">
              <span class="mr-4">[2024-07-09]</span> Q2 Earnings Exceed Analyst Expectations; Services Revenue Hits Record
            </div>
            <div class="py-2.5 cursor-pointer transition-all duration-200 hover:pl-2.5 hover:border-l-4 border-l-0 border-green-400">
              <span class="mr-4">[2024-07-08]</span> Apple Expands AI Integration Across Product Ecosystem
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
  
  <style>
    /* Boot sequence animations, havent decided if I want to remove them or not*/
    .boot-sequence {
      animation: bootFade 2s forwards;
    }
  
    .boot-line {
      height: 1.5em;
      position: relative;
    }
  
    .boot-line:before {
      content: "> ";
    }
  
    .boot-line:nth-child(1) { animation: typeLine 0.3s 0.1s forwards; }
    .boot-line:nth-child(2) { animation: typeLine 0.3s 0.5s forwards; }
    .boot-line:nth-child(3) { animation: typeLine 0.3s 0.9s forwards; }
    .boot-line:nth-child(4) { animation: typeLine 0.2s 1.3s forwards; }
  
    @keyframes typeLine {
      0% { opacity: 0; width: 0; }
      1% { opacity: 1; width: 0; }
      100% { opacity: 1; width: 100%; }
    }
  
    @keyframes bootFade {
      0%, 90% { opacity: 1; }
      100% { opacity: 0; pointer-events: none; }
    }
  
   
  .font-mono {
    font-family: 'VT323', monospace;
    font-size: 1.25rem;
  }

  </style>