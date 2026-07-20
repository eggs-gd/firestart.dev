> **Примітка перед використанням:** цей файл — об'єднання нашої робочої версії з паралельною версією з ChatGPT (найдетальніші/найконкретніші формулювання з обох). Пункти позначені *(уточни/скоригуй)* — деталі, які варто перевірити перед публікацією (видавець/дата сертифікату).

# Oleksandr Burdun

**Fractional CTO / System Architect / Technical Advisor** — Ownership for engineering transitions

Ukraine · Remote / open to international engagements

## Contact

- Mobile: +380971370443
- Email: a.burdun@gmail.com
- LinkedIn: www.linkedin.com/in/dukobpa3

## Top Skills

- Fractional CTO / Technical Advisory
- System & Software Architecture
- Engineering Leadership & Team Scaling
- Backend Architecture & LiveOps/Monetization Platforms
- AI-Assisted Engineering & Rapid Prototyping
- CI/CD & Release Engineering
- Cross-Domain Delivery: Gaming, ERP/Business Systems, AI Tooling
- Unity3D / C# / .NET / TypeScript / Go / Python

## Languages

- Ukrainian — Native or Bilingual
- Russian — Native or Bilingual
- English — Professional Working

## Certifications

- Multi-Agent Systems — *(видавець і дата — уточни/скоригуй)*

## Summary

I get called in when a product, a team, or an architecture has outgrown its current stage — and nobody has taken ownership of the move to the next one.

Greenfield → production. Startup → engineering organization. Hardcoded → configurable. Unowned → shipped. Manual → automated. The details change; the shape doesn't. Complexity has outrun the structure meant to hold it, and someone has to take the transition seriously instead of working around it.

My role is simple: find where ownership and decision-making broke down, rebuild the structure — technical and organizational — the transition actually requires, and leave behind a system the team can run without me.

I work as a Fractional CTO, System Architect, or Technical Advisor, in whatever capacity the transition requires — for the specific window when the old way of working has stopped fitting and the new one hasn't been built yet.

Open to fractional, interim, or full-time engagements — remote-first, sized to what the transition needs: from a short advisory audit to a multi-year build.

---

## Experience

### Independent Software Architect / Product Builder
*2019 – Present · Personal R&D alongside full-time leadership roles*

Alongside every leadership role I've held, I've continuously built software, infrastructure and internal tooling — simply because I enjoy exploring new technologies in practice rather than only reading about them. Most of these projects started as experiments, some evolved into products, and many became reusable tools that now support my day-to-day engineering work.

I tend to validate ideas by building them rather than debating them — the same instinct behind the rapid-prototyping work at Playtika in 2013–2015 (see below) now shows up in AI tooling, personal infrastructure and platform experiments. This continuous hands-on work keeps my architectural decisions grounded in current implementation reality, not just management experience.

Selected work:
- Built **Book Pipeline**, an AI-assisted publishing workflow that transforms large Telegram knowledge bases into structured book drafts using embeddings, vector search, RAG and multi-agent review pipelines
- Built a reusable **Markdown-to-Telegram publishing platform** exposing a REST API for rich-text and media publishing, now used as shared infrastructure across multiple applications
- Designed and operated self-hosted development infrastructure — containerized services, CI/CD, monitoring, backups and deployment automation — for personal products and experiments
- Continuously prototype AI-native engineering workflows using LLMs, agent orchestration, MCP-compatible services, retrieval pipelines and developer automation, to evaluate emerging technologies before adopting them professionally

Selected public projects are available at **eggs.gd**.

Technologies: Go, TypeScript, Python, Docker, PostgreSQL

---

### Playtika — Group Manager
*March 2025 – January 2026 · Kyiv, Ukraine*

Stepped into a project that several departments had separately been prototyping as unowned POCs, with no single accountable owner. Management believed the project was significantly further along than it actually was. Established clear ownership, audited the actual state of delivery, and found that much of the reported progress was not production-ready. Re-scoped the effort, rebuilt critical parts, and drove the product — a feature-cut reskin of a large, legacy 2012-era title — to global launch in 5 months (April–September).

Key achievements:
- Redesigned the collaboration and validation workflow between engineering and outsourced art teams, cutting review cycles and rework
- Contributed to a cross-team initiative (started before I joined the project) to build an AI-assisted content-generation pipeline in-house, aligning production workflows on the game team's side with the generative tooling
- Rebuilt the tutorial system from the ground up instead of patching the legacy one, adding content flexibility and supporting a smoother onboarding experience
- Automated synchronization between the project and the parent codebase — a solution later folded into the broader engineering pipeline
- Coordinated across art, QA, analytics, LiveOps and external partners, keeping delivery predictable under tight deadlines

Once live and stabilized, handed the project off to a standard corporate management structure for ongoing operation.

Technologies: TypeScript, Java, TeamCity CI/CD, AI content-generation pipeline

---

### Playtika — Technical Lead
*September 2023 – March 2025 · Kyiv, Ukraine*

Owned technical direction and architecture for a large-scale Match-3 title, mentoring and consulting 10+ engineers across multiple feature teams. Functioned as "local architect" — responsible for system design, code quality and long-term maintainability.

Key achievements:
- Refactored the entire monetization system — moved from hardcoded, client-side economy math (any change required a full client re-release) to a fully configurable, backend-driven solution with version control, controlled rollouts, rollback support and dynamic economy updates through a custom back-office. This turned live-economy experiments into a real capability — from roughly one client-bound change a month at best to enabling dozens of safe iterations per day — and removed a recurring source of instability caused by version/date collisions across hardcoded client builds
- Drove multiple complex feature launches, aligning client-side Unity code with backend microservices
- Improved CI/CD pipelines in TeamCity, enabling faster build validation and deployment cycles

Technologies: Unity, C#, backend microservices, custom back-office/admin tooling, TeamCity CI/CD, live-ops economy design

---

### Project Ukraine — Senior Software Engineer
*April 2022 – July 2023 · Kyiv*

Part of a deliberate two-year stretch (2021–2023) back in a hands-on engineering seat, rebuilding technical depth before returning to technical leadership. Set the project architecture and technical foundation for a mobile platformer/metroidvania with a 3D world from the ground up — the systems and tooling below were built to support that foundation.

Key contributions:
- Designed a decoupled character architecture and extensible state machine for a 3D, side-view metroidvania (jumps, rolls, climbing and more) — movement logic stayed fully independent from animation and presentation, instead of Unity's default Animator-driven approach, so new gameplay states could be added without destabilizing existing behavior
- Designed and shipped an original visualization system: an infinite, explorable knowledge graph, with the entire rendering and interaction layer built in VFX Graph
- Owned the broader project architecture and technical foundation, including world-building tooling (physics, effects, particles) and the CI/CD pipeline (Unity Cloud + Bash + GitHub Actions)
- Built additional performance-critical features using Unity Burst

Technologies: Unity, C#, VFX Graph, Unity Burst, Unity Cloud Build, GitHub Actions, iOS

---

### Funzy Games — Senior Software Engineer
*August 2021 – April 2022 · Kyiv, Ukraine*

Joined as a senior engineer on a live bubble-shooter title, focusing on gameplay architecture, race-condition fixes and maintainability.

Key contributions:
- Participated in a targeted refactor of the bubble system to resolve race conditions and performance issues — moved to a cleaner flow built around CancellationTokens and a more SOLID, component-based architecture
- Added new gameplay features
- Participated in team-wide roadmap planning

Technologies: Unity, C#, mobile (iOS/Android)

---

### Playtika — Development Team Lead
*February 2017 – August 2019 · Kyiv*

Built the front-end development department in the Kyiv office from scratch, growing it from a team of two to approximately 50 people across 6 autonomous, cross-functional agile teams within two years.

Key achievements:
- Designed the onboarding model around distributing knowledge through the organization instead of centralizing it around managers — a self-sustaining process that cut new-hire ramp-up time from 3–8 weeks to 2–3 days
- Built a team structure capable of continued growth without proportional management overhead

Technologies: Xamarin, .NET, C#, Java, CI/CD, native Android and iOS development

---

### Playtika — Project Team Lead
*May 2015 – February 2017 · Kyiv*

Led the Dice Legends project from scratch with a team of 5 — delivered the greenfield mobile game to market in 8 months, reaching Top-5 in its Android category shortly after launch. Tested and proved a microservices approach using Docker containers on this project first — the results kicked off a broader scaling effort across the company that, years later (at ~4,000 employees), became part of Playtika's standard architecture.

Technologies: Unity3D, .NET, C#, Java, CI/CD, native Android and iOS development

---

### Playtika — Senior Software Engineer
*July 2013 – May 2015 · Kyiv*

Started as an ActionScript 3 developer on one of the company's product teams. Shipped a Videopoker plugin inside Caesars Casino. Later worked several rotations as a "Clientside CTO assistant" — a rapid-prototyping role where the CTO would bring a raw idea, and the job was to turn it into a working prototype within a day so it could be pitched to management for greenlighting.

The standout example: slot games leaned heavily on animated gold-coin effects, but the existing CPU-based rendering hard-capped how many coins could animate on screen at once. Built a prototype that animated hundreds of coins simultaneously with no performance hit. It didn't ship in that exact form, but it showed management and the engineering org that the entire animation pipeline could be meaningfully accelerated — and that became the direction the team pursued next. Delivered 3–5 such prototypes in total, spanning logic modules/frameworks and rendering optimizations — an early, informal introduction to de-risking technical bets for a CTO. Also spent time as a solo full-stack developer on an internal project ([farklepro](https://apps.facebook.com/farklepro/)).

Technologies: ActionScript 3, PHP/HTML/JS/CSS, Java, CI/CD (Ant, Maven, TeamCity)

---

### Go Games Ltd — Senior Software Engineer
*May 2012 – June 2013 · Kyiv*

Joined as a senior developer on the company's sole product at the time, [Go Fishing](https://apps.facebook.com/gofishing/). Built several core features for the game, including the game's core fishing-rod implementation.

As the company looked to diversify, took on two follow-up projects:
- **Find Object** — stepped up as tech lead on a small team (~3 people). Shipped and published, but the game didn't hit the results needed to continue.
- A second, larger project (~10-person team) — worked as both contributor and developer for roughly six months before the team and owner decided not to continue it.

When the owner chose to pivot the company toward slots, read the market signal and moved into the space directly — joining Playtika, the #1 slots company at the time. Early experience recognizing when a product direction has run its course and acting on it, rather than riding it down.

Technologies: ActionScript 3, C#/ASP.NET (backend, web and offline tools), MSSQL, MongoDB, Photoshop, Flash editor scripting

---

### Freelance — Technical Project Coordinator / Developer
*November 2008 – July 2012 · Kyiv*

Sourced and scoped larger freelance projects, then assembled and managed developer teams to deliver them — acting as the primary technical point of contact between customers and developers, translating business requirements into scoped technical work. Also worked hands-on as a developer on a subset of these projects. Early, informal exposure to the client-advisor dynamic that fractional/advisory work is built on.

Technologies (as developer): ActionScript 3, PHP/HTML/JS/CSS

---

### Addicted — Software Engineer
*August 2011 – May 2012 · Ryazan Metropolitan Area (concurrent with Freelance work)*

Started on a task basis as a freelancer, then joined the core team. Worked on two "city builder" social games across Facebook, VKontakte and Odnoklassniki. Built one of them from scratch with a team of four and launched it across all three networks. The team was disbanded after launch.

Technologies: ActionScript 3, Python, SQL, MongoDB, Redis, Debian (Ubuntu) administration

---

### Early Career — ERP Development & Implementation (1C)
*August 2006 – November 2008 · Kyiv*

Foundational ERP and business-process experience prior to transitioning fully into software engineering, developing and implementing custom configurations on 1C UTP — the largest 1C configuration at the time.

**ExpertSoft** (Aug 2006 – Nov 2007): Sales Manager → Consultant → Project Manager. Developed and implemented 1C UTP configurations for two verticals — auto service (СТО) and auto-parts sales/distribution. Work covered business-process design, configuration development, and staff training/onboarding at client sites.

**New Project** (Nov 2007 – Nov 2008): Project Manager. Built a custom 1C UTP configuration for a large industrial refrigeration equipment retailer — covering business-process mapping, configuration development, and end-user training.

Technologies: 1C:Enterprise (UTP configuration), business-process design, ERP implementation, staff training

---

## Skills & Technologies

**Commercial background:**
C#, .NET, Unity3D, TeamCity, Jenkins, ActionScript, Java

*(Current, AI-native stack lives under Independent Software Architect / Product Builder above.)*

---

## Education

**National University "Kyiv Aviation Institute"**
Software Development · 2000 – 2004
