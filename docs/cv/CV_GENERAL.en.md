# Oleksandr Burdun
> Engineering Leader / System Architect / Fractional CTO

## About
I have spent most of my career operating beyond narrowly defined individual contributor roles.

From an early age, my work was usually either around building my own initiatives or stepping into roles that combined engineering with coordination, decision-making, and responsibility for how systems and teams actually move. In IT, even when I entered formally as a developer, I tended to move quickly toward technical leadership, architecture, and broader execution ownership.

My background combines hands-on engineering, system architecture, delivery, and organizational scaling. I have built systems from scratch, helped launch products into production, stabilized overloaded projects, and grown engineering structures from very small starting points into larger, functioning organizations.

The largest department I built grew from just myself into roughly 50 people over two years. At that stage it operated through multiple small agile cross-functional teams spanning frontend, backend, QA, and TechArt. Across different environments, I have worked between code, architecture, teams, process, and execution, usually where systems became unclear, overloaded, or hard to move.

Across most of the companies where I worked, I was not always the formal final decision-maker, but I was consistently a meaningful voice in architectural decisions and, in some situations, in business decisions as well. That pattern shaped how I work: I usually operate in the space between technology, structure, and execution, helping systems move when the org chart alone is not enough.

I am comfortable stepping in as a technical leader, architect, organizer, or stabilizer depending on what the system actually needs. Sometimes that means building from zero. Sometimes it means reducing structural friction. Sometimes it means restoring momentum when execution has slowed down even though capable people are already in place.

## Additional Context
My background includes formal Scrum training and certification earlier in my career, as well as coursework in financial modeling. I am also comfortable describing systems and processes in structured ways, including IDEF0 and IDEF3 when appropriate, although in practice I often prefer simpler custom UML-like representations when they communicate the idea more directly.

Outside formal commercial roles, I often explore technology independently: contributing to open source from time to time, running a home server, extending tools I use myself, or digging into new technologies simply to understand them properly.

Some parts of my technical background are not fully visible from job titles alone. I write Go reasonably well and also have practical AI expertise, including work with multi-agent systems, RAG, MCP, ACP, and related integration patterns.

## Certifications

- Multi-Agent Systems *(issuer/date: to confirm)*
- Financial Modeling coursework/certification *(issuer/date: to confirm)*
- Scrum training and certification (earlier in career; issuer/date: to confirm)

## Voice / Personal Notes (for CV-generation agents)

Raw material — not meant to be quoted verbatim in a corporate CV or LinkedIn text, but useful when generating something more personality-forward (an Upwork proposal, a personal pitch, a cover letter, a landing page). Pull from here when the target format rewards voice over neutrality.

- I love technology more than people — because it's logical. I love people more than technology — because they're not.
- Leave small fights for small fighters.
- Perfect systems are boring. The interesting work starts when something important stops moving.
- Systems either move or decay.
- Healthy systems grow. Broken systems stall.
- Focus on constraints, not noise. Execution matters more than plans.
- I tend to validate ideas by building them rather than debating them. My default way of evaluating a technology is to build something real with it.
- Engineer — making everything from everything, minimizing entropy.

## Recurring Pattern (for CV-generation agents)

Across roles, the recurring shape of my work is not a technology or an industry — it's a type of situation: a product, a team, or an architecture has outgrown its current stage, and no one has taken clear ownership of the move to the next one. Examples of the pattern showing up across this document:

- Greenfield → production (Dice Legends; the Project Ukraine metroidvania; Farkle Pro)
- Startup/small team → scalable engineering organization (Playtika frontend department, 1 → ~50 people)
- Hardcoded/static → configurable, backend-driven (Playtika monetization system refactor)
- Unowned/stalled → shipped with clear ownership (Playtika Group Manager reskin project)
- Manual → automated (Group Manager codebase-sync automation; Technical Lead CI/CD improvements)
- Idea → validated prototype, fast (Playtika 2013–2015 "CTO assistant" rapid prototyping; ongoing personal R&D projects)
- Legacy → modernized without a full rewrite (Group Manager 2012-era title reskin)

When generating a role-specific CV, it's usually stronger to frame achievements through this ownership/transition lens (what state was it in, what did I change structurally, what state is it in now) rather than as a flat list of responsibilities or a technology list. Choose 2–4 pattern instances that best match the target role/contract, and lead with those.

Note on ownership language: be precise about scope. Some items above are things I owned and drove end-to-end (Dice Legends, the Playtika frontend department, the Group Manager reskin project, the monetization refactor). Others I contributed to without owning (see the AI content-generation initiative under Group Manager, and the bubble-system refactor under Funzy Games, both marked explicitly below). Don't upgrade "contributed to" into "owned" when generating targeted CVs — it's a real distinction and may come up in interviews.


## Experience

### Independent Software Architect / Product Builder
> 2019 – Present · Personal R&D alongside full-time leadership roles

Alongside every leadership role I've held, I've continuously built software, infrastructure and internal tooling — simply because I enjoy exploring new technologies in practice rather than only reading about them. Most of these projects started as experiments, some evolved into products, and many became reusable tools that now support my day-to-day engineering work. I tend to validate ideas by building them rather than debating them — the same instinct behind the rapid-prototyping work at Playtika in 2013–2015 (see below) now shows up in AI tooling, personal infrastructure and platform experiments. This keeps architectural decisions grounded in current implementation reality, not just management experience.

Selected work:

- Built **Book Pipeline**, an AI-assisted publishing workflow that transforms large Telegram knowledge bases into structured book drafts using embeddings, vector search, RAG and multi-agent review pipelines.
- Built a reusable **Markdown-to-Telegram publishing platform** exposing a REST API for rich-text and media publishing, now used as shared infrastructure across multiple applications.
- Designed and operated self-hosted development infrastructure — containerized services, CI/CD, monitoring, backups and deployment automation — for personal products and experiments.
- Continuously prototype AI-native engineering workflows using LLMs, agent orchestration, MCP-compatible services, retrieval pipelines and developer automation, to evaluate emerging technologies before adopting them professionally.
- Built **JiveMax**, a complete modernization of the piCorePlayer UI (inspired by Logitech JiveLite) for the LMS/piCorePlayer ecosystem — redesigned the legacy embedded UI with responsive layouts across multiple hardware targets, and modernized the build system with Docker and GitHub Actions for automated cross-platform builds. Low-level, multi-architecture embedded work in C/C++/Lua. ([github.com/dukobpa3/jivemax](https://github.com/dukobpa3/jivemax))

Selected public projects are available at **eggs.gd** (only work that has matured beyond an internal prototype gets published there).

**Skills:**
- Go
- TypeScript
- Python
- Docker
- PostgreSQL / pgvector
- Qdrant
- Redis
- Kafka
- GitHub Actions
- OpenAI API
- Claude / Cursor / Codex
- MCP
- Multi-Agent Systems / RAG
- C / C++ / Lua (embedded, multi-architecture)


### Playtika
> Full-time · 2 yrs 5 mos
> Hybrid

**Group Manager**
> Mar 2025 - Jan 2026 · 11 mos
> Kyiv, Kyiv City, Ukraine

Stepped into a project that several departments had separately been prototyping as unowned POCs, with no single accountable owner — management believed the project was significantly further along than it actually was. Established clear ownership, audited the actual state of delivery, found much of the reported progress was not production-ready, re-scoped the effort, and drove a feature-cut reskin of a large legacy 2012-era title to global launch in 5 months (April–September). Led a 12-person cross-functional team through the process, overseeing all development stages, from technical setup and design adaptation to live-ops readiness.

Key achievements:

- Delivered a complete reskin and gameplay adaptation of an existing title, integrating new UX/UI while maintaining technical compatibility with legacy systems.
- Redesigned the collaboration and validation workflow between engineering and outsourced art teams, cutting review cycles and rework.
- Implemented a new tutorial framework from the ground up, improving onboarding metrics and content flexibility.
- Automated synchronization between the project and the parent codebase; parts of the solution were later folded into the broader engineering pipeline.
- Participated actively in a cross-team initiative on AI-driven automation for dynamic content generation; **not the project owner, but contributed** from the game team side to align production workflows with generative tooling.
- Coordinated with multiple external departments (art, QA, analytics, LiveOps), maintaining velocity and quality under tight deadlines.

Once live and stabilized, handed the project off to a standard corporate management structure for ongoing operation.

**Skills:**
- TypeScript
- Java
- TeamCity
- Team Leadership
- AI-Assisted Development
- Delivery Ownership / Turnaround

**Technical Lead**
> Sep 2023 - Mar 2025 · 1 yr 7 mos
> Kyiv, Ukraine

Led the technical direction and architecture of a large-scale Match-3 title for over a year, mentoring and consulting a group of 10+ engineers across multiple feature teams. Functioned as a “local architect,” responsible for system design, code quality, and long-term maintainability.

Key achievements:

- Refactored the entire monetization system — transitioned from hardcoded, client-side JSON configurations (any economy change required a full client re-release) to a fully configurable, backend-driven solution with version control, controlled rollouts, rollback support, and dynamic economy updates through a custom back-office. This turned live-economy experiments into a real capability — from roughly one client-bound change a month at best to enabling dozens of safe iterations per day — and removed a recurring source of instability caused by version/date collisions across hardcoded client builds.
- Drove multiple complex feature launches while aligning client-side Unity code and backend microservices.
- Contributed as one of several internal advocates for AI adoption—among the more active—helping introduce AI-assisted tooling into development and team workflows.
- Improved CI/CD pipelines in TeamCity, enabling faster build validation and deployment cycles.

**Skills:**
- Unity
- Java
- Jenkins
- TeamCity
- AI-Assisted Development


### Project Ukraine
> Full-time

**Senior Software Engineer**
> Apr 2022 - Jul 2023 · 1 yr 4 mos
> Kyiv, Kyiv City, Ukraine · Remote

Worked on an iOS-only mobile game — a platformer/metroidvania in a 3D world. Owned the project architecture and technical foundation from the ground up.

Main areas of work:

- Designed and built the character control system from scratch — introduced an MVC-style separation for the character (model/view/controller) so movement math is fully decoupled from visuals, instead of Unity's default approach of driving logic off the Animator Controller with blended states.
- Built a clean, extensible character state machine on top of that separation, so new animated/logical states (jumps, rolls, climbing, and more) can be added without touching unrelated code.
- Designed and shipped an original visualization system: an infinite, explorable knowledge graph, with the entire rendering and interaction layer built in VFX Graph.
- World development: gameplay-facing tasks and tooling for physics, effects, and particles, used by the wider design team.
- Several Burst-based performance-critical features.
- CI/CD setup using Unity Cloud, Bash, and GitHub Actions.

**Skills:**
- Unity
- iOS Development
- Software Architecture
- MVC / State Machine Design
- Visual Effects
- Particle Effects
- Continuous Integration and Continuous Delivery (CI/CD)


### Funzy Games
> Full-time

**Senior Software Engineer**
> Aug 2021 - Apr 2022 · 9 mos
> Kyiv, Kyiv City, Ukraine

Worked on a bubble shooter project where the top field of colored bubbles descended on each tick and the player had to clear it by shooting matching bubbles.

Most of the work focused on implementing new unique bubble types with their own gameplay behavior. **Participated in** (did not own) a targeted refactor of the bubble system to resolve race conditions and performance issues, moving to a cleaner flow built around CancellationTokens and a more SOLID, component-based architecture. This was a point fix, not a global architectural rewrite.

During my time on the project, I refactored several existing complex bubble types, added a few new ones, and contributed to broader architecture improvements across the system as part of a wider team effort.

**Skills:**
- Unity
- iOS Development
- Android Development
- Software Architecture
- Concurrency / Race-Condition Debugging
- Continuous Integration and Continuous Delivery (CI/CD)

### Playtika
> 6 years 2 months

**Development Team Lead**
> Feb 2017 - Aug 2019 · 2 yrs 7 mos
> Kyiv

Organized the front-end development department in the Kyiv office from scratch.
At the beginning, I was the only developer in that function.
After two years, it had grown to roughly 50 people across multiple cross-functional, self-managed agile teams.

The onboarding model was deliberately designed around distributing knowledge through the organization instead of centralizing it around managers — a self-sustaining process that cut new-hire ramp-up time to 2-3 days instead of the 3-8 weeks typical in comparable departments elsewhere in the company, and let the team structure keep growing without proportional management overhead.

**Skills:**
- Xamarin
- .NET
- C#
- Java
- CI/CD
- Native Android Development
- Native iOS Development
- Org Design / Knowledge-Sharing Systems

**Project Team Lead**
> May 2015 - Feb 2017 · 1 yr 10 mos
> Kyiv

Led the Dice Legends project from scratch. Built and launched it to the Android market with a team of 5 people — delivered the greenfield mobile game to market in 8 months, reaching Top-5 in its Android category shortly after launch.

Tested and proved a microservices approach using Docker containers on this project first — the results kicked off a broader scaling effort across the company that, years later (at ~4,000 employees), became part of Playtika's standard architecture.

**Skills:**
- Unity 3D
- .NET
- C#
- Java
- CI/CD
- Native Android Development
- Native iOS Development
- Microservices / Docker

**Senior Software Engineer**
> Jul 2013 - May 2015 · 1 yr 11 mos
> Kyiv

Started as a regular AS3 developer in one of the company teams. Contributed to the launch of a Video Poker plugin inside Caesars Casino.

At several points, worked as a client-side CTO assistant — a rapid-prototyping role where the CTO would bring a raw idea, and the job was to turn it into a working prototype within a day so it could be pitched to management for greenlighting.

Standout example: slot games leaned heavily on animated gold-coin effects, but the existing CPU-based rendering hard-capped how many coins could animate on screen at once. Built a prototype that animated hundreds of coins simultaneously with no performance hit. It didn't ship in that exact form, but it showed management and the engineering org that the entire animation pipeline could be meaningfully accelerated — and that became the direction the team pursued next. Delivered 3–5 such prototypes in total over this period, spanning logic modules/frameworks and rendering optimizations (including CPU-to-GPU rendering shifts).

Also worked independently as a full-stack developer on `Farkle Pro`, which was launched on Facebook and adapted for three Russian social networks.

**Skills:**
- AS3
- PHP/HTML/JS/CSS
- Java
- CI/CD (Ant, Maven, TeamCity, etc.)
- Rapid Prototyping / Technical De-Risking
- Rendering Optimization

### Go Games Ltd
**Senior Software Engineer**
> May 2012 - Jun 2013 · 1 yr 2 mos
> Kyiv

It was a one-product company focused on Go Fishing. I joined as a senior developer on that live product and built several core features, including the fishing-rod implementation.

As the company looked to diversify beyond fishing, I worked on two follow-up projects:

- **Find Object** — stepped up as tech lead on a small team (~3 people). Shipped and published, but the game didn't hit the results needed to continue.
- A second, larger project (~10-person team) — worked as both contributor and developer for roughly six months before the team and owner decided not to continue it.

When the owner chose to pivot the company toward slots, read the market signal and moved into the space directly — joining Playtika, the #1 slots company at the time, rather than staying with a declining direction.

**Skills:**
- AS3
- C#/ASP.NET (backend, web and offline tools)
- MSSQL
- MongoDB
- Photoshop
- Flash Editor Scripting
- Tech Leadership (small team)

### Addicted
**Software Engineer**
> Aug 2011 - May 2012 · 10 mos
> Ryazan, Russia

Started by contributing as a freelancer and later joined the team full-time.

Worked on two city-builder social games for Facebook, VKontakte, and Odnoklassniki.

As part of a four-person team, helped build one of the games from scratch and launch it on social platforms.

The team was later disbanded.

**Skills:**
- AS3
- Python
- SQL
- MongoDB
- Redis
- Debian (Ubuntu) Administration

### Freelance
**Technical Project Coordinator / Developer**
> Nov 2008 - 2012 · 4 yrs
> Kyiv

This is where my career as a developer started.

Besides development, I often took on coordination responsibilities: finding larger projects on freelance exchanges, assembling developers for them, and acting as the communication bridge between customers and the team.

**Skills:**
- AS3
- PHP/HTML/JS/CSS

### New Project
> Full-time · 1 yr 1 mo
> Kyiv, Ukraine

**Project Manager**
> Nov 2007 - Nov 2008 · 1 yr 1 mo
> Kyiv, Ukraine

New Project was a company focused on large-scale commercial and refrigeration equipment.

Led ERP implementation and formalized business processes using IDEF0 and IDEF3 modeling. Built a custom 1C UTP configuration for the business — covering business-process mapping, configuration development, and end-user training.

**Skills:**
- Project Management
- ERP Implementation
- Business Process Modeling (IDEF0, IDEF3)
- 1C:Enterprise (UTP configuration)

### ExpertSoft
> Full-time · 1 yr 4 mos
> Kyiv, Ukraine

**Project Manager**
> Feb 2007 - Nov 2007 · 10 mos
> Kyiv, Ukraine

Led implementation of a service station management system for the official Mazda dealer in Kyiv, along with several smaller projects. All engagements were oriented around auto parts sales and vehicle service operations, built on 1C UTP configurations — at the time, the largest 1C configuration available.

**Skills:**
- Project Management
- ERP / Business Systems
- Automotive Retail & Service
- 1C:Enterprise (UTP configuration)

**Consultant**
> Nov 2006 - Feb 2007 · 4 mos
> Kyiv, Ukraine

Same domain — auto parts and service — in a consulting capacity, supporting delivery of related systems.

**Skills:**
- Business Systems Consulting
- ERP / Business Systems
- Automotive Retail & Service

**Sales Manager**
> Aug 2006 - Nov 2006 · 4 mos
> Kyiv, Ukraine

Sold software solutions for auto parts inventory and vehicle service management.

**Skills:**
- Sales
- ERP / Business Systems
- Automotive Retail & Service
