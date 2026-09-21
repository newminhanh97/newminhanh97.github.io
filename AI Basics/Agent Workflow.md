---
sort: 3
tags: [ai basics]
---

## What is an AI agent workflow?

An AI agent workflow is a sequence of tasks carried out by one or more AI agents that use large language models (LLMs), memory, tools, and decision logic to reach a defined outcome. Unlike a single prompt-and-response interaction, the workflow coordinates multiple steps where each step can involve model calls, tool execution, conditional branching, or human review.

## Workflows vs. AI agents vs. AI workflows

These three terms describe different levels of autonomy, and confusing them can lead to architectural mistakes.

| | Workflow | AI agent | Agent workflow |
| --- | --- | --- | --- |
| **What it is** | A structured sequence of steps with predefined rules and explicit conditions. | A goal-driven system that uses an LLM to decide its own actions, select tools, and iterate until the task is complete | A workflow where AI agents handle one or more steps, choosing their own actions within defined boundaries. |
| **Autonomy level** | None; every branch and condition is hardcoded. | High; the agent determines its next action based on its goal and available information. | Mixed; deterministic scaffolding is combined with agent reasoning at specific steps. |
| **Typical example** | CI/CD pipeline, Zapier automation. | A general-purpose AI assistant that plans and uses tools. | A customer support system that routes deterministically, then uses an agent to draft responses. |
| **Best for** | Predictable, repeatable tasks with stable inputs. | Open-ended tasks that require adaptation and judgment. | Most production systems, where you want structure around the parts you can predict and flexibility where you can't |

## How AI agents work

AI agents generally operate through a cycle of observation, reasoning, and action. While implementations vary, most agent systems include these core components:

- **Perception**: Agents gather data from their environment through APIs, databases, documents, and user inputs to understand the current state.
- **Decision-making**: Using machine learning models, such as natural language processing and classification algorithms, agents evaluate inputs against objectives and determine which actions to take.
- **Knowledge management**: Agents maintain context by accessing knowledge bases and using retrieval-augmented generation to pull relevant information when forming responses.
- **Action execution**: Once a decision is made, agents execute through output interfaces such as sending messages, updating databases, triggering other workflows, or calling external tools.
- **Learning and adaptation**: Advanced agents improve over time by analyzing outcomes, gathering feedback, and refining their decision-making processes.

## AI-adjacent capabilities: a quick reference

AI agent workflows are the most prominent application of LLMs in production today, but they sit within a broader landscape of artificial intelligence techniques. You will encounter these terms in architecture discussions, vendor documentation, and conversations with ML engineers.

| Term | What it is | Relevance to agentic workflows |
| --- | --- | --- |
| **Deep learning** | The neural network architecture underlying modern LLMs. | Helps you distinguish a trained model artifact from the agent system built on top of it. |
| **Machine learning** | The broader category covering deep learning, classical methods, and reinforcement learning. | Relevant when your routing or classification logic uses a trained ML model rather than an LLM. |
| **Natural language processing (NLP)** | Techniques for intent classification, entity extraction, and semantic similarity. | NLP tasks surface naturally as agent tools, especially in routing and input-parsing steps. |
| **Generative AI** | AI systems that produce text, images, or code as output. | The category your LLM falls into; useful shorthand when talking to non-technical stakeholders. |
| **Computer vision** | Models that interpret images and video. | Can be called as a tool within an agentic workflow, for example to describe an image before the agent reasons about it. |
| **Facial recognition** | A computer vision subfield for identifying individuals from images. | Occasionally relevant in identity-verification workflows; subject to strict regulatory constraints. |
| **Autonomous vehicles** | Systems that combine perception, planning, and action in physical environments. | A useful reference point for understanding agentic decision loops at high reliability requirements. |
| **Artificial general intelligence (AGI)** | A theoretical system that generalizes reliably across arbitrary domains without task-specific prompting. | Not achievable with current LLMs; design your workflow around what models can do today, not future AGI capabilities. |