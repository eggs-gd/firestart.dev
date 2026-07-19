# Oleksandr Burdun - System Architect Resume

## Summary

Architect who steps in when systems outgrow their stage: turning unowned prototypes into shippable product, hardcoded logic into configurable backends, greenfield into production, and small teams into scalable engineering structures.

Operates across client, backend, tooling, and delivery to define architecture, set standards, and unblock execution. Hands-on in reviews, refactors, and design decisions; pragmatic about CI/CD and back-office improvements when they serve architectural goals.

Organization-level impact includes: seeding a microservices/Docker approach that later became standard architecture across Playtika, and building a frontend department from 1 to ~50 engineers across multiple cross-functional teams. Multi-team reach as a local architect and mentor for 10+ engineers, and delivery leadership of a 12-person cross-functional team on a legacy title turnaround.

Comfortable codifying systems (IDEF0/IDEF3 or lightweight UML-style), aligning architecture with product, and making maintainability and iteration speed first-class goals.

## Experience

### Independent Software Architect / Product Builder

2019 - Present · Personal R&D alongside full-time leadership roles

- Built Book Pipeline: an AI-assisted publishing workflow using embeddings, vector search, RAG, and multi-agent review to convert large Telegram knowledge bases into structured book drafts.
- Created a reusable Markdown-to-Telegram publishing platform with a REST API for rich-text and media; adopted as shared infrastructure across apps.
- Designed and operated self-hosted development infrastructure: containerized services, CI/CD, monitoring, backups, and automated deployments.
- Prototyped AI-native engineering workflows with LLMs, agent orchestration (MCP-compatible services), retrieval pipelines, and developer automation.
- Built JiveMax: a modernization of the piCorePlayer UI (JiveLite-inspired) with responsive layouts and a Docker/GitHub Actions build system for cross-platform automated builds; low-level embedded work in C/C++/Lua.
- Skills: Go; TypeScript; Python; Docker; PostgreSQL/pgvector; Qdrant; Redis; Kafka; GitHub Actions; OpenAI API; Claude/Cursor/Codex; MCP; Multi-Agent Systems/RAG; C/C++/Lua (embedded, multi-architecture)

### Playtika - Kyiv, Kyiv City, Ukraine (Hybrid)

> Full-time · 2 yrs 5 mos

#### Group Manager

Mar 2025 - Jan 2026 · 11 mos  
Stepped into an unowned, multi-department POC with misread delivery status. Established clear ownership, audited actual readiness, re-scoped to a focused reskin, and drove a legacy 2012-era title to global launch in 5 months with a 12-person cross-functional team.

- Delivered a full reskin and gameplay adaptation while keeping compatibility with legacy systems.
- Redesigned engineering - outsourced art collaboration/validation, reducing review cycles and rework.
- Implemented a new tutorial framework from scratch, improving onboarding flexibility and metrics.
- Automated synchronization between project and parent codebase; parts later incorporated into the broader engineering pipeline.
- Contributed (from the game team side) to a cross-team AI-driven dynamic content initiative; aligned production workflows with generative tooling.
- Coordinated across external art, QA, analytics, and LiveOps under tight deadlines; handed off post-stabilization to standard corporate ops.
- Skills: TypeScript; Java; TeamCity; Team Leadership; AI-Assisted Development; Delivery Ownership/Turnaround

#### Technical Lead

Sep 2023 - Mar 2025 · 1 yr 7 mos  
Served as local architect for a large Match-3 title, mentoring/consulting 10+ engineers across feature teams; owned system design, code quality, and long-term maintainability.

- Refactored the monetization system from hardcoded client JSON to a backend-driven, versioned, rollback-capable solution with a custom back-office - enabling dozens of safe economy iterations per day instead of monthly client-bound changes and eliminating frequent version/date collisions.
- Drove complex feature launches spanning Unity client and backend microservices.
- Acted as one of several internal advocates for AI-assisted tooling; helped introduce AI into development workflows.
- Improved TeamCity pipelines for faster validation and deployment.
- Skills: Unity; Java; Jenkins; TeamCity; AI-Assisted Development

### Project Ukraine - Kyiv, Kyiv City, Ukraine (Remote)

#### Senior Software Engineer

Apr 2022 - Jul 2023 · 1 yr 4 mos

- Owned architecture and technical foundation for an iOS-only 3D platformer/metroidvania.
- Built the character control system from scratch with MVC-style separation; decoupled movement math from visuals and Animator state.
- Implemented a clean, extensible character state machine for adding behaviors without touching unrelated code.
- Designed and shipped an infinite, explorable knowledge-graph visualization fully in VFX Graph.
- Delivered gameplay tooling for physics/effects/particles used by the wider design team; shipped several Burst-based performance-critical features.
- Set up CI/CD with Unity Cloud, Bash, and GitHub Actions.
- Skills: Unity; iOS Development; Software Architecture; MVC/State Machine Design; Visual Effects; Particle Effects; CI/CD

### Funzy Games - Kyiv, Kyiv City, Ukraine

#### Senior Software Engineer

Aug 2021 - Apr 2022 · 9 mos

- Implemented new bubble types and refactored complex existing ones for a bubble shooter.
- Participated in (not owner) a targeted bubble-system refactor to resolve race conditions and performance issues - introducing CancellationTokens and a more SOLID, component-based flow.
- Contributed to broader architecture improvements as part of a wider team effort.
- Skills: Unity; iOS Development; Android Development; Software Architecture; Concurrency/Race-Condition Debugging; CI/CD

### Playtika - Kyiv, Ukraine

> 6 years 2 months

#### Development Team Lead

Feb 2017 - Aug 2019 · 2 yrs 7 mos

- Built the Kyiv frontend department from 1 engineer to ~50 across multiple self-managed, cross-functional agile teams.
- Designed a knowledge-distribution onboarding model that cut new-hire ramp-up to 2 - 3 days (vs. 3 - 8 weeks) and enabled growth without proportional management overhead.
- Skills: Xamarin; .NET; C#; Java; CI/CD; Native Android Development; Native iOS Development; Org Design/Knowledge-Sharing Systems

#### Project Team Lead

May 2015 - Feb 2017 · 1 yr 10 mos

- Led Dice Legends from zero to Android launch in 8 months with a 5-person team; reached Top-5 in its category shortly after launch.
- Tested and proved a microservices approach using Docker; results kicked off a broader company scaling effort that later became Playtika's standard architecture at ~4,000 employees.
- Skills: Unity 3D; .NET; C#; Java; CI/CD; Native Android Development; Native iOS Development; Microservices/Docker

#### Senior Software Engineer

Jul 2013 - May 2015 · 1 yr 11 mos

- Contributed to the launch of a Video Poker plugin inside Caesars Casino.
- Served at times as a client-side CTO assistant for rapid prototyping (3 - 5 prototypes): e.g., demonstrated a GPU-accelerated animation approach enabling hundreds of simultaneous coin effects, informing subsequent rendering direction.
- Independently built Farkle Pro for Facebook and three Russian social networks.
- Skills: AS3; PHP/HTML/JS/CSS; Java; CI/CD (Ant, Maven, TeamCity, etc.); Rapid Prototyping/Technical De-Risking; Rendering Optimization

## Early Career

- Go Games Ltd - Senior Software Engineer (May 2012 - Jun 2013, Kyiv): Delivered core features on a live title; acted as tech lead on a ~3-person hidden-object game; contributed to a ~10-person project; moved to Playtika as company pivoted. Skills: AS3; C#/ASP.NET; MSSQL; MongoDB; Photoshop; Flash Editor Scripting; Tech Leadership (small team)
- Addicted - Software Engineer (Aug 2011 - May 2012, Ryazan): Built two city-builder social games; helped take one from scratch to launch in a 4-person team. Skills: AS3; Python; SQL; MongoDB; Redis; Debian/Ubuntu Administration
- Freelance - Technical Project Coordinator/Developer (Nov 2008 - 2012, Kyiv): Coordinated and developed larger freelance projects; assembled teams and interfaced with customers. Skills: AS3; PHP/HTML/JS/CSS
- New Project - Project Manager (Nov 2007 - Nov 2008, Kyiv): Led ERP implementation; modeled processes with IDEF0/IDEF3; built custom 1C UTP configuration and trained users. Skills: Project Management; ERP Implementation; Business Process Modeling (IDEF0, IDEF3); 1C:Enterprise (UTP)
- ExpertSoft - Consultant, then Project Manager, then Sales Manager (Aug 2006 - Nov 2007, Kyiv): Delivery and sales for auto-parts/service systems on 1C UTP; led a Mazda dealer service-station system and smaller projects. Skills: Business Systems Consulting; ERP/Business Systems; Automotive Retail & Service; 1C:Enterprise (UTP)

## Skills

- Architecture and Design
  - System design; microservices/Docker; backend-driven configuration; MVC/state machines; rendering optimization; knowledge-graph visualization
- Languages
  - Go; TypeScript; Python; C#/.NET; Java; AS3; C/C++/Lua
- Platforms and Tools
  - Unity; iOS/Android; TeamCity; Jenkins; GitHub Actions; Docker
- Data and Infra
  - PostgreSQL/pgvector; Qdrant; Redis; Kafka; self-hosted CI/CD/monitoring/backups
- AI and Automation
  - AI-assisted development; OpenAI API; Claude/Cursor/Codex; Multi-Agent Systems; RAG; MCP-compatible services
- Delivery and Process
  - CI/CD; Org design/knowledge sharing; IDEF0/IDEF3 process modeling; back-office tooling for live-ops/economy
- Business/Domain
  - ERP/1C:Enterprise (UTP); automotive retail/service systems

