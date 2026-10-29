# Orange Island redesign — implementation notes

The site now mirrors the "Orange Island Website Redesign" design (boards: Home, Utilities & Infrastructure, Building on the Island, Who We Are).

## What changed

- **New look everywhere**: Cormorant Garamond headings, Karla body text, navy `#0E2838` / terracotta `#A9481A` / cream `#FBF8F3` palette (`app/layout.tsx`, `app/globals.css`).
- **Shared header & footer**: `components/site/SiteHeader.tsx` (utility bar + main nav with active state) and `components/site/SiteFooter.tsx` (full footer on Home, compact footer on inner pages). They replace the old `GlobalHeader`, `Header`, `HeroNav` and `Footer` components. Below 900px wide the main navigation collapses into a **Menu** button that opens a full-width panel (closes on link tap, on Escape, or when the page changes).
- **Pages built from the design**: `app/page.tsx` (Home), `app/utilities/page.tsx` (new), `app/building/page.tsx` (new), `app/about/page.tsx`. The design's markup and inline styles are carried over 1:1; `.tpl` in `globals.css` restores normal browser defaults inside these pages so Tailwind's reset doesn't change the design.
- **Other existing pages** (contact, blog, blog post, team, approval process, physical planning document, properties & investment, DEL, Inter Contra, Venco, water, electricity, sewage, waste) keep their content but now use the design's navy title band (`components/site/PageTitle.tsx`) and the new palette.
- **Working forms**:
  - Home search box (`HomeSearch.tsx`) sends people to the right page by keyword.
  - Newsletter sign-up (`NewsletterForm.tsx`) and the Utilities facilities request form (`FacilitiesForm.tsx`) save to `/api/contact`, so they appear in Admin with the other contact messages.
  - `/api/contact` now accepts email **or** phone (the facilities form has no email field).
- **Photos** from `public/images` fill the design's photo placeholders (home hero, power, connectivity, masterplan) and the home news cards now show the latest 3 posts.

## Still to fill in (placeholders from the design)

- Footer: `Facilities team: [FACILITIES PHONE / EMAIL]`
- Utilities → Electricity: `[Add IPP details to confirm: plant capacity, hours of supply, tariff/metering arrangement, go-live date.]`
- Utilities → Connectivity: `[fibre / high-speed internet — confirm service]` and the three bullet placeholders (how to request, packages, support contact). Same wording on the Home "Connected to MTN" card.
- Utilities → Contact the facilities team: `[Facilities direct line]`
- Who we are → Key milestones: two `[Year]` entries.
- Links still pointing to `#`: Home "Take a tour (video)", "Download brochure", "Download the ORIIS app", footer Terms & Conditions / Privacy Policy.
- Connectivity photos (Home and Utilities) use `public/images/MTN.jpg` (695×441). A larger version (1200px+ wide) would look sharper on high-resolution screens.
- Board of directors cards have empty photo boxes, as in the design.
