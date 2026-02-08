# ArguUI — UI That Argues Back

ArguUI is an intent-driven React application which questions, explains, rejects, 
or accepts actions based on user intent rather than blindly obeying user actions.
- My project explores generative UI behavior rather than static UI flows.

----

# Problem Statement

Most modern user interfaces:
- They always obey clicks and submissions
- Thet treat all users and actions the same
- They do not question rushed, unsafe, or unclear actions

This often leads to:
- Accidental submissions
- Poor UX in critical workflows
- Lack of accountability in UI decisions

----

# Solution

My prject **ArguUI** introduces a UI that argues back.

Instead of fixed flows:
- Users express intent in natural language
- The system decides how the UI should respond
- Different UI components are rendered dynamically

The UI may:
- Accept the action
- Argue with the user
- Reject the action
- Explain why the action is blocked

----

# How It Works 

User Intent (input)
↓
Intent Routing Layer (AI-ready)
↓
UI Component Selection
↓
Rendered UI Response

The intent routing logic is intentionally isolated so it can be:
- Rule-based today
- AI-powered tomorrow

----

# UI States

| Intent Type      | UI Response |
|------------------|-------------|
| Cooperative      | Accept UI   |
| Questioning      | Explain UI  |
| Forceful         | Argue UI    |
| Unclear / Unsafe | Reject UI   |

----

# Sponsor Tool: Tambo (Generative UI)

This project follows Tambo’s Generative UI philosophy.

Instead of hard-coded UI flows, ArguUI introduces an intent-routing layer
that dynamically decides which UI component should be rendered.

In this project:
- UI components act as generative UI outcomes
- User intent is evaluated before rendering any UI
- The routing layer is explicitly designed to be powered by Tambo

Currently, the routing logic is rule-based to ensure demo stability,
but the architecture is Tambo-ready by design and can directly
replace rule evaluation with Tambo’s generative engine.

The focus of this project is not chat responses, ut AI-driven UI behavior 
and component selection, which is the core value proposition of Tambo.

----

# Tech Stack used

- React (Vite)
- JavaScript
- Intent-based UI routing
- AI-ready architecture (Tambo-compatible)

----

# To run it locally

```bash
npm install
npm run dev
```
Open http://localhost:5173  

----

# Try this inputs

- submit it
- why is this blocked
- force submit
- random text
Just notice how the UI behavior changes, not just the message.

----

# Why this project is different

- Not a chatbot
- Not a form validator
- Not static UI
- ArguUI treats the UI itself as a decision-making system.

----

# Future scope

- Replace rule-based routing with full Tambo generative routing
- Tone control (polite vs strict UI)
- Apply to real-world flows (forms, permissions, payments)

----

# Author

Built by Pritam 
WeMakeDevs Hackathon Project
