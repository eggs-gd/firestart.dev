# Oleksandr Burdun - System Architect Resume

## Summary

Architect who steps in when products, teams, or architectures have outgrown their current stage and need clear technical direction to move. Comfortable aligning system design with real delivery constraints and organizational realities, then driving the minimum viable architectural change to regain velocity.

Strong multi-team and organizational reach: organized Playtika's Kyiv frontend function from 1 person to ~50 across multiple cross-functional teams; introduced a microservices-based approach (proven on a shipped title) that later became part of the company's standard architecture; stabilized and launched a legacy title reskin across several departments under tight timelines.

Hands-on architecture: refactoring paths, integration patterns, and maintainability-first design. Known for converting static/hardcoded systems into configurable, backend-driven ones with safe iteration loops; unblocking CI/CD bottlenecks when they constrain architecture; and making pragmatic, well-scoped design decisions that ship.

Mentors engineers and tech leads on architectural thinking; coordinates across client, backend, tooling, and operations to remove systemic friction. Keeps skills current through continuous personal R&D, turning emerging ideas into working prototypes before adopting them in production contexts.

## Experience

### Independent Software Architect / Product Builder

> 2019 - Present · Personal R&D alongside full-time leadership roles

#### Independent

2019 - Present

- Built Book Pipeline (AI-assisted publishing from large Telegram knowledge bases) using embeddings, vector search, multi-agent review pipelines, and RAG.
- Built a reusable Markdown-to-Telegram publishing platform with a REST API; now shared infrastructure across multiple applications.
- Designed and operated self-hosted dev infrastructure: containerized services, CI/CD, monitoring, backups, and deployment automation.
- Prototyped AI-native engineering workflows with LLMs, MCP-compatible services, retrieval pipelines, and developer automation to validate emerging tech.
- Built JiveMax, a modernization of the piCorePlayer UI (Logitech JiveLite-inspired): responsive multi-device UI, automated cross-platform builds (Docker, GitHub Actions), and low-level embedded work in C/C++/Lua.

- Skills: Go; TypeScript; Python; Docker; PostgreSQL/pgvector; Qdrant; Redis; Kafka; GitHub Actions; OpenAI API; Claude/Cursor/Codex; MCP; Multi-Agent Systems/RAG; C/C++/Lua

### Playtika - Kyiv, Kyiv City, Ukraine (Hybrid)

> Full-time · 2 yrs 5 mos

#### Group Manager

Mar 2025 - Jan 2026
Stepped into a multi-department effort stuck in unowned POCs with misread delivery status. Established ownership, audited actual readiness, re-scoped to a feasible path, and led a feature-cut reskin of a 2012-era title to global launch in 5 months.

- Delivered a complete reskin and gameplay adaptation while maintaining compatibility with legacy systems.
- Redesigned the engineering ↔ outsourced art validation workflow to cut review cycles and rework.
- Implemented a new tutorial framework from scratch for better onboarding flexibility.
- Automated synchronization between the project and parent codebase; parts were later folded into the broader pipeline.
- Participated in a cross-team AI-driven dynamic content initiative (contributor from the game team).
- Coordinated with art, QA, analytics, and LiveOps to maintain delivery velocity and quality; handed off to standard structures post-stabilization.
- Skills: TypeScript; Java; TeamCity; Team Leadership; AI-Assisted Development; Delivery Ownership / Turnaround

#### Technical Lead

Sep 2023 - Mar 2025
Functioned as a local architect for a large-scale Match-3 title, mentoring and consulting 10+ engineers across multiple feature teams.

- Refactored the monetization system from hardcoded, client-side JSON to a backend-driven configuration with version control, controlled rollouts, rollback, and dynamic economy updates through a custom back-office-replacing slow, client-bound changes with dozens of safe iterations per day.
- Aligned client-side Unity code with backend microservices across several complex feature launches.
- Acted as one of several internal advocates for AI-assisted tooling adoption in development workflows.
- Improved CI/CD in TeamCity for faster validation and deployments.
- Skills: Unity; Java; Jenkins; TeamCity; AI-Assisted Development

### Project Ukraine - Kyiv, Kyiv City, Ukraine (Remote)

#### Senior Software Engineer

Apr 2022 - Jul 2023 · 1 yr 4 mos
Owned architecture and technical foundation for an iOS-only 3D metroidvania from the ground up.

- Designed MVC-style character architecture decoupling movement logic from visuals; built a clean, extensible state machine for new abilities without cross-cutting changes.
- Built an original visualization system: an infinite, explorable knowledge graph fully in VFX Graph.
- Delivered gameplay tooling for physics/effects used by the wider design team; implemented several Burst-optimized features.
- Set up CI/CD using Unity Cloud, Bash, and GitHub Actions.
- Skills: Unity; iOS Development; Software Architecture; MVC / State Machine Design; Visual Effects; Particle Effects; CI/CD

### Funzy Games - Kyiv, Kyiv City, Ukraine

#### Senior Software Engineer

Aug 2021 - Apr 2022 · 9 mos

- Implemented new gameplay behaviors for a bubble shooter; refactored complex bubble types.
- Participated in a targeted refactor to resolve race conditions and performance issues using CancellationTokens and a more SOLID, component-based design (point fix, not a full rewrite).
- Contributed to broader architecture improvements as part of the team effort.
- Skills: Unity; iOS Development; Android Development; Software Architecture; Concurrency / Race-Condition Debugging; CI/CD

### Playtika - Kyiv

> 6 years 2 months

#### Development Team Lead

Feb 2017 - Aug 2019 · 2 yrs 7 mos
Organized the Kyiv frontend department from scratch-grew from a single developer to ~50 people across multiple self-managed, cross-functional teams.

- Designed an onboarding and knowledge distribution model that cut ramp-up to 2-3 days (vs. 3-8 weeks elsewhere), enabling continued growth without proportional management overhead.
- Operated at the intersection of architecture, process, and execution to keep teams moving.
- Skills: Xamarin; .NET; C#; Java; CI/CD; Native Android Development; Native iOS Development; Org Design / Knowledge-Sharing Systems

#### Project Team Lead

May 2015 - Feb 2017 · 1 yr 10 mos
Led Dice Legends from greenfield to Android launch with a 5-person team in 8 months; reached Top-5 in its category.

- Tested and proved a microservices approach using Docker on this project; the results kicked off a broader scaling effort that later became part of Playtika's standard architecture.
- Skills: Unity 3D; .NET; C#; Java; CI/CD; Native Android Development; Native iOS Development; Microservices / Docker

#### Senior Software Engineer

Jul 2013 - May 2015 · 1 yr 11 mos

- Contributed to launching a Video Poker plugin inside Caesars Casino.
- Served intermittently as a client-side CTO assistant for rapid prototyping (3-5 prototypes), including CPU→GPU rendering shifts and other de-risking efforts for pitches and greenlights.
- Built and launched Farkle Pro on Facebook and adapted it for three Russian social networks.
- Skills: AS3; PHP/HTML/JS/CSS; Java; CI/CD (Ant, Maven, TeamCity, etc.); Rapid Prototyping / Technical De-Risking; Rendering Optimization

### Early Career - Multiple companies

- Go Games Ltd (May 2012 - Jun 2013, Kyiv): Senior Software Engineer on Go Fishing; tech lead on Find Object (~3 ppl); contributor on a ~10-person project; backend/tools in C#/ASP.NET; MSSQL/MongoDB; AS3; Photoshop; Flash scripting; small-team tech leadership.
- Addicted (Aug 2011 - May 2012, Ryazan): Software Engineer on two city-builder social games; AS3, Python, SQL, MongoDB, Redis; Debian administration.
- Freelance (Nov 2008 - 2012, Kyiv): Technical Project Coordinator/Developer; AS3; PHP/HTML/JS/CSS; coordinated larger freelance projects and developer teams.
- New Project (Nov 2007 - Nov 2008, Kyiv): Project Manager; ERP implementation; IDEF0/IDEF3 process modeling; custom 1C UTP configuration and training.
- ExpertSoft (Aug 2006 - Nov 2007, Kyiv): Consultant/Project Manager; auto parts/service domain; 1C UTP; delivery of dealership service/station systems.

## Skills

- Architecture & Design
  - Software Architecture; System Design; Microservices/Docker; MVC / State Machine Design; Org Design / Knowledge-Sharing Systems; Business Process Modeling (IDEF0, IDEF3)
- Languages & Platforms
  - Go; TypeScript; Python; C#/.NET; Java; Unity; AS3; C/C++/Lua; Xamarin; iOS; Android
- Data & Storage
  - PostgreSQL/pgvector; Qdrant; Redis; Kafka; MSSQL; MongoDB; SQL
- DevOps & CI/CD
  - Docker; TeamCity; Jenkins; GitHub Actions; Unity Cloud; CI/CD; Bash
- AI & Automation
  - AI-Assisted Development; OpenAI API; Claude/Cursor/Codex; MCP; Multi-Agent Systems; RAG
- Tools & Domain
  - VFX Graph; Particle/Visual Effects; 1C:Enterprise (UTP); Photoshop; Flash Editor Scripting; Debian/Ubuntu Administration
- Leadership & Delivery
  - Team Leadership; Delivery Ownership/Turnaround; Tech Leadership (small team); Project Management; ERP Implementation

