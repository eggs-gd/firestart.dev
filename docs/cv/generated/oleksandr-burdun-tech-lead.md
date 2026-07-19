# Oleksandr Burdun - Tech Lead Resume

## Summary

Hands-on technical lead who steps into unclear or stalled systems and gets them moving: consolidates ownership, sets pragmatic architecture, and ships. Examples include launching a full reskin of a legacy 2012-era title with a 12-person cross-functional team in five months, and turning a hardcoded monetization stack into a safe, backend-driven system that enabled rapid live-economy iteration.

Operates across client, backend, tooling, and delivery. Mentors 10+ engineers across multiple feature teams, raises code quality standards, and aligns Unity clients with Java microservices and CI/CD for predictable launches.

Bias for maintainability, performance, and de-risked execution: favors configuration over hardcoding, automation over manual steps, and incremental modernization over rewrites when possible.

Continuously builds tools and infrastructure (Go/TypeScript/Python, Docker, GitHub Actions, data/AI pipelines) to validate ideas and inform production decisions.

## Experience

### Independent Software Architect / Product Builder

2019 - Present · Personal R&D alongside full-time leadership roles

Builds software, infrastructure, and internal tooling to evaluate and operationalize new technologies that later inform production decisions.

- Built Book Pipeline: an AI-assisted publishing workflow using embeddings, vector search, RAG, and multi-agent review pipelines to convert large Telegram knowledge bases into structured book drafts.
- Created a reusable Markdown-to-Telegram publishing platform with a REST API for rich-text/media publishing; reused as shared infrastructure.
- Designed and operated self-hosted dev infrastructure: containerized services, CI/CD, monitoring, backups, and deployment automation.
- Prototyped AI-native engineering workflows with LLMs, agent orchestration, MCP-compatible services, retrieval pipelines, and developer automation.
- Shipped JiveMax: modernization of piCorePlayer's embedded UI (C/C++/Lua), with Dockerized cross-platform builds and GitHub Actions.
- Skills: Go; TypeScript; Python; Docker; PostgreSQL/pgvector; Qdrant; Redis; Kafka; GitHub Actions; OpenAI API; Claude/Cursor/Codex; MCP; Multi-Agent Systems/RAG; C/C++/Lua

### Playtika - Kyiv, Kyiv City, Ukraine (Hybrid)

> Full-time · 2 yrs 5 mos

#### Group Manager

Mar 2025 - Jan 2026 · 11 mos

Stepped into a project with fragmented, unowned POCs and mismatched expectations about readiness. Established single-point ownership, audited actual state, re-scoped to a feasible path, and delivered a feature-cut reskin of a legacy title to global launch in five months with a 12-person cross-functional team.

- Shipped a complete reskin and gameplay adaptation while maintaining compatibility with legacy systems.
- Redesigned collaboration/validation flows with outsourced art, reducing review cycles and rework.
- Implemented a new tutorial framework from scratch, improving onboarding flexibility and metrics.
- Automated synchronization between the project and parent codebase; parts later adopted into the broader pipeline.
- Contributed (not owner) to a cross-team AI-driven automation initiative for dynamic content generation, aligning game-side workflows.
- Coordinated with art, QA, analytics, and LiveOps to preserve velocity/quality under tight deadlines.
- Skills: TypeScript; Java; TeamCity; Team Leadership; AI-Assisted Development; Delivery Ownership/Turnaround

#### Technical Lead

Sep 2023 - Mar 2025 · 1 yr 7 mos

Led technical direction and architecture on a large Match-3 title; mentored/consulted 10+ engineers across multiple feature teams as a local architect focused on system design, code quality, and long-term maintainability.

- Refactored monetization from hardcoded client JSON to a backend-driven, versioned, rollback-capable system with a custom back-office - moving from rare client-bound changes to enabling dozens of safe live-economy iterations per day and eliminating version/date-collision risks.
- Drove complex feature launches end-to-end, coordinating Unity client changes with backend microservices.
- Acted as one of several internal advocates for AI-assisted tooling and workflow adoption.
- Improved TeamCity pipelines for faster build validation and deployments.
- Skills: Unity; Java; Jenkins; TeamCity; AI-Assisted Development

### Project Ukraine - Kyiv, Kyiv City, Ukraine (Remote)

#### Senior Software Engineer

Apr 2022 - Jul 2023 · 1 yr 4 mos

Owned the architecture and technical foundation of an iOS-only 3D platformer/metroidvania from the ground up.

- Built character control with MVC-style separation and an extensible state machine for cleanly adding new logical/animated states.
- Designed and shipped an infinite, explorable knowledge-graph visualization in VFX Graph.
- Delivered gameplay tooling across physics, effects, and particles; implemented several Burst-based performance features.
- Set up CI/CD with Unity Cloud, Bash, and GitHub Actions.
- Skills: Unity; iOS Development; Software Architecture; MVC/State Machine Design; Visual Effects; Particle Effects; CI/CD

### Funzy Games - Kyiv, Kyiv City, Ukraine

#### Senior Software Engineer

Aug 2021 - Apr 2022 · 9 mos

Worked on a bubble shooter, implementing new bubble types and contributing to targeted architectural fixes.

- Implemented unique bubble behaviors; refactored complex existing types.
- Participated in a focused refactor to resolve race conditions and performance issues - moving to a CancellationToken-driven, more SOLID, component-based flow.
- Contributed to system-wide improvements as part of a broader team effort.
- Skills: Unity; iOS Development; Android Development; Software Architecture; Concurrency/Race-Condition Debugging; CI/CD

### Playtika - Kyiv

#### Development Team Lead

Feb 2017 - Aug 2019 · 2 yrs 7 mos

Built the Kyiv front-end department from a single developer into ~50 people across multiple cross-functional, self-managed agile teams.

- Designed an onboarding/knowledge-distribution model that cut ramp-up from weeks to 2 - 3 days and scaled without proportional management overhead.
- Skills: Xamarin; .NET; C#; Java; CI/CD; Native Android Development; Native iOS Development; Org Design/Knowledge-Sharing Systems

#### Project Team Lead

May 2015 - Feb 2017 · 1 yr 10 mos

Led Dice Legends from greenfield to Android launch with a 5-person team in 8 months; reached Top-5 in its Android category.

- Proved a microservices approach with Docker on this project; outcomes later influenced broader scaling and became part of company-standard architecture.
- Skills: Unity 3D; .NET; C#; Java; CI/CD; Native Android Development; Native iOS Development; Microservices/Docker

#### Senior Software Engineer

Jul 2013 - May 2015 · 1 yr 11 mos

Contributed to the Video Poker plugin for Caesars Casino; served as a rapid-prototyping "CTO assistant" producing 3 - 5 day-scale prototypes across logic and rendering.

- Demonstrated GPU-accelerated coin animations supporting hundreds of on-screen elements, informing a shift toward faster pipelines.
- Built and launched Farkle Pro on Facebook and three Russian social networks as an independent full-stack effort.
- Skills: AS3; PHP/HTML/JS/CSS; Java; CI/CD (Ant, Maven, TeamCity); Rapid Prototyping/Technical De-Risking; Rendering Optimization

## Early Career

- Go Games Ltd - Senior Software Engineer (May 2012 - Jun 2013, Kyiv): Core features for Go Fishing; acted as tech lead on a ~3-person hidden-object game (shipped); contributed to a ~10-person project before pivot. Skills: AS3; C#/ASP.NET; MSSQL; MongoDB; Photoshop; Flash Editor Scripting; Tech Leadership (small team)
- Addicted - Software Engineer (Aug 2011 - May 2012, Ryazan): Built two city-builder social games across FB/VK/OK; 4-person team from scratch to launch on one title. Skills: AS3; Python; SQL; MongoDB; Redis; Debian/Ubuntu admin
- Freelance - Technical Project Coordinator/Developer (Nov 2008 - 2012, Kyiv): Sourced projects, assembled teams, and bridged customer/dev communication; hands-on AS3 and PHP/HTML/JS/CSS.
- New Project - Project Manager (Nov 2007 - Nov 2008, Kyiv): Led ERP implementation; modeled processes with IDEF0/IDEF3; built custom 1C UTP configuration.
- ExpertSoft - Consultant → Project Manager → Sales Manager (Aug 2006 - Nov 2007, Kyiv): Delivery and sales across auto-parts/service systems on 1C UTP for the Mazda dealer and others.

## Skills

- Architecture & Leadership
  - System design; code quality; delivery ownership; technical direction across multiple teams; mentoring (10+ engineers); cross-team coordination (art/QA/analytics/LiveOps)
- Game/Client Engineering
  - Unity; MVC/state machines; VFX Graph; Burst; Rendering optimization
- Backend, Data & Messaging
  - Java; .NET/C#; Microservices/Docker; PostgreSQL/pgvector; Qdrant; Redis; Kafka
- Web, Mobile & Cross-Platform
  - TypeScript; PHP/HTML/JS/CSS; Native iOS/Android; Xamarin; Unity 3D
- DevOps & CI/CD
  - TeamCity; Jenkins; GitHub Actions; Docker; Unity Cloud; Automation for builds/deployments
- AI/LLM & Automation
  - AI-assisted development; OpenAI API; Claude/Cursor/Codex; MCP; RAG; Multi-agent systems
- Languages & Low-level
  - Go; Python; C/C++/Lua (embedded, multi-architecture)

