<div align="center">

# Mohammed Qizar Bilal — SDE Portfolio

### An engineering record, presented like a product.

[**Enter the live portfolio →**](https://qizar-bilal.vercel.app)

![Next.js](https://img.shields.io/badge/Next.js-14-0B0D10?style=flat-square&logo=nextdotjs)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-0B0D10?style=flat-square&logo=tailwindcss&logoColor=38BDF8)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-0B0D10?style=flat-square&logo=vercel)

</div>

![Current deployed portfolio experience](images/live-portfolio.png)

> This is a working record of how I think about software: establish the problem, make the engineering decision visible, and connect the work to an outcome.

---

## The 30-second tour

The site turns a conventional résumé into an explorable engineering dossier. A persistent navigation rail keeps the experience grounded while the main canvas moves through professional work, shipped projects, technical strengths, education, and contact paths.

| When a visitor wants to… | The portfolio answers with… |
|---|---|
| understand my focus | a terminal-inspired introduction and a direct engineering statement |
| judge real experience | problem → action → impact narratives with measurable outcomes |
| inspect my work | project case studies, stacks, links, and delivery context |
| scan technical range | grouped frontend, backend, AI, data, and platform capabilities |
| continue the conversation | résumé access and direct professional contact routes |

## Why it looks this way

The visual system borrows the discipline of developer tools rather than their decoration.

- **Near-black surfaces** keep attention on evidence and language.
- **Glass panels** create hierarchy without filling the page with borders.
- **A single green signal color** marks actions, state, and emphasis.
- **Terminal moments** introduce personality without becoming a gimmick.
- **Measured motion** supports navigation instead of competing with content.

## Experience map

~~~mermaid
flowchart LR
    A[First impression] --> B[Engineering identity]
    B --> C[Professional impact]
    C --> D[Project evidence]
    D --> E[Technical range]
    E --> F[Resume and contact]

    B -. establishes focus .-> D
    C -. adds credibility .-> E
    D -. invites deeper review .-> F
~~~

## Built around evidence

Experience entries follow a deliberate narrative:

~~~text
Context → Constraint → Engineering action → Measurable impact
~~~

Projects are presented as engineering decisions rather than thumbnail galleries. Each case study can communicate the underlying problem, the system approach, implementation choices, technologies, outcomes, and inspectable source or product links.

Skills are grouped by the kind of problem they solve. This avoids the familiar wall of logos and makes the breadth of the profile easier to interpret.

## System shape

~~~text
SDE-Portfolio-MQB/
├── app/                    Next.js App Router and global styles
├── components/             Navigation, sections, and reusable UI
├── lib/                    Shared helpers and content utilities
├── public/                 Resume, portraits, icons, and static media
├── images/                 Documentation and genuine product captures
├── config.js               Portfolio content and configuration
├── tailwind.config.js      Design tokens and utility extensions
└── next.config.mjs         Next.js runtime configuration
~~~

## Request lifecycle

~~~mermaid
sequenceDiagram
    participant V as Visitor
    participant N as Next.js App
    participant C as Portfolio content
    participant M as Motion and UI

    V->>N: Open portfolio
    N->>C: Resolve structured profile content
    C-->>N: Experience, projects, skills, links
    N->>M: Render responsive sections
    M-->>V: Interactive engineering dossier
    V->>M: Navigate or open a case study
    M-->>V: Focused detail without losing context
~~~

## Run it locally

**Requirements:** Node.js 18+ and npm.

~~~bash
git clone https://github.com/QizarBilal/SDE-Portfolio-MQB.git
cd SDE-Portfolio-MQB
npm install
npm run dev
~~~

Open [http://localhost:3000](http://localhost:3000). For a production check:

~~~bash
npm run build
npm start
~~~

Before adapting the project, replace personal media in the public directory, review the content configuration, verify every external link, and test the résumé download on desktop and mobile.

## Content principles

1. **Say what changed.** Make the mechanism and result visible.
2. **Prefer shipped work to adjectives.** Screens, code, metrics, and decisions carry more weight.
3. **Keep claims inspectable.** Concrete context lets visitors follow the evidence.
4. **Write for two reading speeds.** Headings support scanning; case studies reward depth.
5. **Update the story when the work changes.** A portfolio is a living product.

## Delivery

The production experience is hosted on Vercel.

~~~text
push to main → Vercel build → production checks → live portfolio
~~~

## Author

Built and maintained by **Mohammed Qizar Bilal**.

[Portfolio](https://qizar-bilal.vercel.app) · [GitHub](https://github.com/QizarBilal) · [LinkedIn](https://www.linkedin.com/in/mohammed-qizar-bilal/)

---

<sub>MIT licensed. Personal résumé, portrait, and biographical content remain personal to the author.</sub>
