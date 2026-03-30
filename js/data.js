// ============================================================
// ARTICLES DATABASE (js/data.js) - HEADLESS CONTENT HUB
// ============================================================

const articleDatabase = {
  
  // ------------------------------------------------------------
  // THE HERO ARTICLE
  // ------------------------------------------------------------
  "article-hero": {
    tag: "Masterclass • 12 Min Read",
    title: "The AI-Bidding Architecture: How We Scaled a Shopify Brand by 380% in 90 Days",
    content: `
      <p style="font-size: 1.25rem; color: #f0ece4; margin-bottom: 40px; line-height: 1.6;">Manual bidding is dead. Here is a complete breakdown of how to structure Google Performance Max and Meta Advantage+ campaigns using custom data feeds, bypassing the algorithmic learning phase to unlock hyper-profitable e-commerce scaling.</p>
      
      <h3 style="font-family: 'Syne', sans-serif; font-size: 1.4rem; color: #ffffff; margin-top: 40px; margin-bottom: 16px;">The Old Way vs. The New Way</h3>
      <p style="color: #999; line-height: 1.8; margin-bottom: 24px;">Previously, media buyers spent hours manually segmenting audiences and adjusting bids. Today, success relies on <strong>Algorithmic Liquidity</strong>. By consolidating account structures, we feed the machine learning models maximum conversion data, allowing Google and Meta's AI to map the optimal path to purchase far better than a human ever could.</p>
      
      <h3 style="font-family: 'Syne', sans-serif; font-size: 1.4rem; color: #ffffff; margin-top: 40px; margin-bottom: 16px;">First-Party Data Injection</h3>
      <p style="color: #999; line-height: 1.8; margin-bottom: 24px;">Relying purely on pixel data is no longer viable post-iOS14. To achieve our 380% scale, we integrated a server-side tracking architecture (CAPI) and fed High-LTV (Lifetime Value) customer lists back into the ad networks. We weren't just telling the AI who bought; we were telling it who became a repeat purchaser.</p>

      <h3 style="font-family: 'Syne', sans-serif; font-size: 1.4rem; color: #ffffff; margin-top: 40px; margin-bottom: 40px;">Consolidated Campaign Architecture</h3>
      <p style="color: #999; line-height: 1.8; margin-bottom: 24px;">We slashed their 40+ ad sets down to just 3 core pillars: Broad Acquisition, Dynamic Retargeting, and Retention. This forced all budget through focused funnels, exiting the learning phase in 48 hours and stabilizing Cost Per Acquisition (CPA) instantly.</p>

      <div style="margin-top: 64px; padding: 40px; background: rgba(201,168,76,0.05); border: 1px solid rgba(201,168,76,0.2); border-radius: 12px; text-align: center;">
        <h4 style="font-family: 'Playfair Display', serif; font-size: 1.5rem; color: #c9a84c; margin-bottom: 12px;">Ready to restructure your ad account?</h4>
        <p style="color: #999; margin-bottom: 24px;">Stop bleeding budget on outdated campaign architectures. Let's map your scaling strategy.</p>
        <a href="index.html#apply" style="display: inline-block; background: #c9a84c; color: #000; padding: 12px 24px; font-family: 'Syne', sans-serif; text-transform: uppercase; font-size: 0.8rem; font-weight: bold; letter-spacing: 0.08em; text-decoration: none; border-radius: 4px; transition: transform 0.3s;">Book Strategy Call</a>
      </div>
    `
  },

  // ------------------------------------------------------------
  // GRID ARTICLE 1 (Google Ads)
  // ------------------------------------------------------------
  "article-1": {
    tag: "Google Ads • 6 Min Read",
    title: "The 3 Bottlenecks Killing Your Search Campaign Yield",
    content: `
      <p style="font-size: 1.25rem; color: #f0ece4; margin-bottom: 40px; line-height: 1.6;">Your campaigns are likely bleeding cash on low-intent inventory. Here is the exact framework we use to force Google's algorithm to prioritize high-ROAS products and queries.</p>
      
      <h3 style="font-family: 'Syne', sans-serif; font-size: 1.4rem; color: #ffffff; margin-top: 40px; margin-bottom: 16px;">1. Keyword Bloat & Match Type Leaks</h3>
      <p style="color: #999; line-height: 1.8; margin-bottom: 24px;">Running Broad Match without a rigorous, weekly-updated negative keyword list is financial suicide. If your Search Terms report is filled with informational queries rather than transactional intent, you are subsidizing Google's bottom line.</p>
      
      <h3 style="font-family: 'Syne', sans-serif; font-size: 1.4rem; color: #ffffff; margin-top: 40px; margin-bottom: 16px;">2. Poor ROAS Target Calibration</h3>
      <p style="color: #999; line-height: 1.8; margin-bottom: 24px;">Setting a tROAS (Target ROAS) too high chokes the algorithm, preventing it from entering profitable auctions. Setting it too low results in volume with zero margin. We use a stepped-scale approach, adjusting targets by 10% increments every 7 days based on conversion lag data.</p>
      
      <div style="margin-top: 64px; padding: 40px; background: rgba(201,168,76,0.05); border: 1px solid rgba(201,168,76,0.2); border-radius: 12px; text-align: center;">
        <h4 style="font-family: 'Playfair Display', serif; font-size: 1.5rem; color: #c9a84c; margin-bottom: 12px;">Need a Google Ads Audit?</h4>
        <p style="color: #999; margin-bottom: 24px;">We find 20-30% of wasted ad spend in the first 48 hours for new clients.</p>
        <a href="index.html#apply" style="display: inline-block; background: #c9a84c; color: #000; padding: 12px 24px; font-family: 'Syne', sans-serif; text-transform: uppercase; font-size: 0.8rem; font-weight: bold; letter-spacing: 0.08em; text-decoration: none; border-radius: 4px;">Book Strategy Call</a>
      </div>
    `
  },

  // ------------------------------------------------------------
  // GRID ARTICLE 2 (B2B Meta Ads)
  // ------------------------------------------------------------
  "article-2": {
    tag: "B2B Strategy • 8 Min Read",
    title: "Engineering a B2B Paid Social Funnel That Converts",
    content: `
      <p style="font-size: 1.25rem; color: #f0ece4; margin-bottom: 40px; line-height: 1.6;">Stop running direct-response lead forms to cold B2B audiences. Here is the 3-step retargeting architecture we use to drop Cost Per Acquisition (CPA) by 40%.</p>
      
      <h3 style="font-family: 'Syne', sans-serif; font-size: 1.4rem; color: #ffffff; margin-top: 40px; margin-bottom: 16px;">1. The Education Layer (Cold Traffic)</h3>
      <p style="color: #999; line-height: 1.8; margin-bottom: 24px;">B2B buyers require trust. We initiate campaigns optimized purely for Video Views and Engagement. The goal isn't an immediate lead; it is capturing attention using highly tactical, problem-solving content to build a custom audience of engaged viewers.</p>

      <h3 style="font-family: 'Syne', sans-serif; font-size: 1.4rem; color: #ffffff; margin-top: 40px; margin-bottom: 16px;">2. The Authority Layer (Warm Traffic)</h3>
      <p style="color: #999; line-height: 1.8; margin-bottom: 24px;">We retarget users who watched 50%+ of the initial video with high-value case studies, whitepapers, and verifiable ROI metrics. This positions your firm as the undisputed expert before the sales call ever happens.</p>
      
      <div style="margin-top: 64px; padding: 40px; background: rgba(201,168,76,0.05); border: 1px solid rgba(201,168,76,0.2); border-radius: 12px; text-align: center;">
        <h4 style="font-family: 'Playfair Display', serif; font-size: 1.5rem; color: #c9a84c; margin-bottom: 12px;">Want better B2B leads?</h4>
        <p style="color: #999; margin-bottom: 24px;">Stop fighting for unqualified clicks. Let's build a proper B2B acquisition pipeline.</p>
        <a href="index.html#apply" style="display: inline-block; background: #c9a84c; color: #000; padding: 12px 24px; font-family: 'Syne', sans-serif; text-transform: uppercase; font-size: 0.8rem; font-weight: bold; letter-spacing: 0.08em; text-decoration: none; border-radius: 4px;">Book Strategy Call</a>
      </div>
    `
  },

  // ------------------------------------------------------------
  // GRID ARTICLE 3 (CRO)
  // ------------------------------------------------------------
  "article-3": {
    tag: "CRO • 5 Min Read",
    title: "Beyond the Click: Post-Click E-Commerce Architecture",
    content: `
      <p style="font-size: 1.25rem; color: #f0ece4; margin-bottom: 40px; line-height: 1.6;">Traffic is useless if your landing page leaks money. A breakdown of the highest-friction elements you must remove from your Shopify store today to double your conversion rate.</p>
      
      <h3 style="font-family: 'Syne', sans-serif; font-size: 1.4rem; color: #ffffff; margin-top: 40px; margin-bottom: 16px;">1. The "Add to Cart" Above the Fold Rule</h3>
      <p style="color: #999; line-height: 1.8; margin-bottom: 24px;">If a user has to scroll on mobile to see your primary Call to Action, you are losing 15% of your conversions instantly. The product image, price, and ATC button must be immediately visible without interaction.</p>

      <h3 style="font-family: 'Syne', sans-serif; font-size: 1.4rem; color: #ffffff; margin-top: 40px; margin-bottom: 16px;">2. Trust Injection & Friction Removal</h3>
      <p style="color: #999; line-height: 1.8; margin-bottom: 24px;">Vague shipping policies kill intent. Replace standard copy with definitive statements: "Order within 2 hours for dispatch today. Delivery by Friday." Pair this with accelerated checkout options (Apple Pay, Shop Pay) to bypass form fatigue.</p>
    `
  },

  // ------------------------------------------------------------
  // GRID ARTICLE 4 (First-Party Data)
  // ------------------------------------------------------------
  "article-4": {
    tag: "Data & Analytics • 7 Min Read",
    title: "Why First-Party Data is the New Gold Standard",
    content: `
      <p style="font-size: 1.25rem; color: #f0ece4; margin-bottom: 40px; line-height: 1.6;">How to build a bulletproof tracking infrastructure that survives iOS updates, ad blockers, and cookie deprecation.</p>
      
      <h3 style="font-family: 'Syne', sans-serif; font-size: 1.4rem; color: #ffffff; margin-top: 40px; margin-bottom: 16px;">The Death of the Pixel</h3>
      <p style="color: #999; line-height: 1.8; margin-bottom: 24px;">Relying purely on browser-based tracking means you are missing up to 30% of your attribution data. If the algorithm cannot see the conversions, it cannot optimize for them. You must transition to Server-Side tracking to pass high-fidelity data directly from your server to Meta and Google.</p>

      <h3 style="font-family: 'Syne', sans-serif; font-size: 1.4rem; color: #ffffff; margin-top: 40px; margin-bottom: 16px;">Zero-Party Data Collection</h3>
      <p style="color: #999; line-height: 1.8; margin-bottom: 24px;">The smartest brands are now acquiring data explicitly given by the user via interactive quizzes and onboarding flows. This allows for hyper-personalized email and SMS retention strategies that ad platforms cannot touch.</p>
    `
  },

  // ------------------------------------------------------------
  // GRID ARTICLE 5 (LTV vs CAC)
  // ------------------------------------------------------------
  "article-5": {
    tag: "Scaling Theory • 9 Min Read",
    title: "LTV vs CAC: The Only Math That Matters for Growth",
    content: `
      <p style="font-size: 1.25rem; color: #f0ece4; margin-bottom: 40px; line-height: 1.6;">If you don't know your 60-day Lifetime Value, you are flying blind. How to calculate and leverage LTV to ruthlessly outbid your competitors.</p>
      
      <h3 style="font-family: 'Syne', sans-serif; font-size: 1.4rem; color: #ffffff; margin-top: 40px; margin-bottom: 16px;">The Front-End Illusion</h3>
      <p style="color: #999; line-height: 1.8; margin-bottom: 24px;">Most brands obsess over day-one ROAS. But the brand that can afford to pay the most to acquire a customer always wins. If your product has high retention, you should be willing to break even (or lose money) on the first sale to secure the backend margin.</p>
      
      <h3 style="font-family: 'Syne', sans-serif; font-size: 1.4rem; color: #ffffff; margin-top: 40px; margin-bottom: 16px;">Calculating Your Maximum CAC</h3>
      <p style="color: #999; line-height: 1.8; margin-bottom: 24px;">Target CPA should not be a guess. It is derived mathematically: (Gross Margin $) * (Average Order Value) * (Purchase Frequency). Once you know this number, you set the ad account to acquire volume ruthlessly up to that exact threshold.</p>
    `
  },

  // ------------------------------------------------------------
  // GRID ARTICLE 6 (Creative Strategy)
  // ------------------------------------------------------------
  "article-6": {
    tag: "Creative Strategy • 4 Min Read",
    title: "UGC is Dead. Enter 'Direct-Response Storytelling'",
    content: `
      <p style="font-size: 1.25rem; color: #f0ece4; margin-bottom: 40px; line-height: 1.6;">Why amateur iPhone "UGC" videos are losing effectiveness, and the new script framework dominating Meta ad auctions.</p>
      
      <h3 style="font-family: 'Syne', sans-serif; font-size: 1.4rem; color: #ffffff; margin-top: 40px; margin-bottom: 16px;">The Authenticity Fatigue</h3>
      <p style="color: #999; line-height: 1.8; margin-bottom: 24px;">Consumers are now blind to fake influencer testimonials. The new era of creative requires "Founder-Led" storytelling or highly produced direct-response assets that focus heavily on mechanism over generic benefits.</p>

      <h3 style="font-family: 'Syne', sans-serif; font-size: 1.4rem; color: #ffffff; margin-top: 40px; margin-bottom: 16px;">The 3-Second Hook Architecture</h3>
      <p style="color: #999; line-height: 1.8; margin-bottom: 24px;">The hook must call out the core pain point visually while resolving the objection audibly. If your video does not validate the user's problem before the 3-second mark, the algorithm will penalize your CPMs due to low retention.</p>
    `
  },

  // ------------------------------------------------------------
  // GRID ARTICLE 7 (Offer Design)
  // ------------------------------------------------------------
  "article-7": {
    tag: "Offer Design • 6 Min Read",
    title: "How to Craft an 'Irresistible Offer' for Cold Traffic",
    content: `
      <p style="font-size: 1.25rem; color: #f0ece4; margin-bottom: 40px; line-height: 1.6;">The exact psychological triggers we use to turn skeptical browsers into high-intent buyers on day one.</p>
      
      <h3 style="font-family: 'Syne', sans-serif; font-size: 1.4rem; color: #ffffff; margin-top: 40px; margin-bottom: 16px;">Price vs. Value Disconnect</h3>
      <p style="color: #999; line-height: 1.8; margin-bottom: 24px;">Discounting 10% is lazy marketing. An irresistible offer stacks value, introduces scarcity, and reverses risk. Instead of "$10 off," offer a premium related digital asset or exclusive bundle that costs you nothing to reproduce but adds massive perceived value.</p>
      
      <h3 style="font-family: 'Syne', sans-serif; font-size: 1.4rem; color: #ffffff; margin-top: 40px; margin-bottom: 16px;">The Risk Reversal Guarantee</h3>
      <p style="color: #999; line-height: 1.8; margin-bottom: 24px;">Standard 30-day return policies do not convert. Bold guarantees ("Results in 14 days or we refund you and buy a competitor's product for you") spike conversion rates so high that the inevitable slight increase in refunds is completely eclipsed by the revenue surge.</p>
    `
  },

  // ------------------------------------------------------------
  // GRID ARTICLE 8 (Retention)
  // ------------------------------------------------------------
  "article-8": {
    tag: "Retention • 5 Min Read",
    title: "The 3 Backend Emails That Double Shopify Profits",
    content: `
      <p style="font-size: 1.25rem; color: #f0ece4; margin-bottom: 40px; line-height: 1.6;">Stop relying entirely on front-end ads. Install this automated email sequence to turn one-time buyers into loyal brand advocates.</p>
      
      <h3 style="font-family: 'Syne', sans-serif; font-size: 1.4rem; color: #ffffff; margin-top: 40px; margin-bottom: 16px;">1. The Post-Purchase Shock & Awe</h3>
      <p style="color: #999; line-height: 1.8; margin-bottom: 24px;">The moment after purchase is peak buyer anxiety. Instantly send a text-only, founder-style email validating their choice, providing exclusive usage instructions, and offering a surprise secondary product to capture an immediate upsell.</p>

      <h3 style="font-family: 'Syne', sans-serif; font-size: 1.4rem; color: #ffffff; margin-top: 40px; margin-bottom: 16px;">2. The Replenishment Trigger</h3>
      <p style="color: #999; line-height: 1.8; margin-bottom: 24px;">If your product lasts 30 days, your automated flow must trigger on day 24. It shouldn't be a generic "buy again" prompt, but rather an educational reminder of the compounding benefits of continuing the routine.</p>
    `
  },

  // ------------------------------------------------------------
  // GRID ARTICLE 9 (Case Study)
  // ------------------------------------------------------------
  "article-9": {
    tag: "Case Study • 10 Min Read",
    title: "Audit: Unpacking a $1.2M Ad Account Restructure",
    content: `
      <p style="font-size: 1.25rem; color: #f0ece4; margin-bottom: 40px; line-height: 1.6;">A step-by-step look at how we inherited a bloated, failing enterprise ad account and turned it profitable within 14 days.</p>
      
      <h3 style="font-family: 'Syne', sans-serif; font-size: 1.4rem; color: #ffffff; margin-top: 40px; margin-bottom: 16px;">The Diagnosis</h3>
      <p style="color: #999; line-height: 1.8; margin-bottom: 24px;">We audited an account spending $100k/mo with a deteriorating 1.1 ROAS. The previous agency had fragmented the budget across 80 active campaigns, choking algorithmic liquidity and causing internal audience overlap (they were bidding against themselves).</p>

      <h3 style="font-family: 'Syne', sans-serif; font-size: 1.4rem; color: #ffffff; margin-top: 40px; margin-bottom: 16px;">The Turnaround Protocol</h3>
      <p style="color: #999; line-height: 1.8; margin-bottom: 24px;">We paused 90% of active ad sets within 24 hours. We shifted the budget into 2 Advantage+ Shopping Campaigns (ASC) and implemented strict cost-caps. Within 14 days, the AI recalibrated, stabilizing the account at a 2.8 blended ROAS and restoring cash flow liquidity.</p>

      <div style="margin-top: 64px; padding: 40px; background: rgba(201,168,76,0.05); border: 1px solid rgba(201,168,76,0.2); border-radius: 12px; text-align: center;">
        <h4 style="font-family: 'Playfair Display', serif; font-size: 1.5rem; color: #c9a84c; margin-bottom: 12px;">Is your agency wasting your money?</h4>
        <p style="color: #999; margin-bottom: 24px;">Get a comprehensive audit of your ad account architecture.</p>
        <a href="index.html#apply" style="display: inline-block; background: #c9a84c; color: #000; padding: 12px 24px; font-family: 'Syne', sans-serif; text-transform: uppercase; font-size: 0.8rem; font-weight: bold; letter-spacing: 0.08em; text-decoration: none; border-radius: 4px;">Book Strategy Call</a>
      </div>
    `
  }

};