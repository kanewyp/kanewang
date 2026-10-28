# Project Facts and Copy Boundaries

Use this file as a concise source of truth when writing portfolio summaries. The repository's `pdfs/` folder contains the Loom AI, Fraud Detection MLOps, MorningTide, and CCE interview handbooks. The steel-slag capstone and FME planning brief were supplied as prompt attachments and are not stored in the repository.

## Featured and active work

### MorningTide

- An active personal journaling project focused on reflecting on emotional patterns and preparing discussion topics for therapy sessions.
- The project handbook describes an emotion-classification workflow and a local retrieval-augmented generation (RAG) pipeline that uses journal context and curated psychoeducation material to produce source-linked discussion prompts.
- Use the demo video at `videos/demo_MorningTide.mp4` as the project's only visual media. The former AI-generated illustration is retired from the site, including video posters.
- Keep this framed as a personal reflection and preparation tool, not a therapist, diagnosis, or treatment. Do not claim clinical efficacy, therapist adoption, privacy guarantees, or measured time savings without confirmation.

### Steel-slag SLM capstone

- Columbia University Data Science capstone, started September 2026 and in progress, with Carbon Negative Solutions.
- The goal is a specialized small-language-model assistant grounded in steel-slag literature, helping assess when material-performance predictions may be trustworthy for supplementary cementitious materials.
- The supplied brief reports that literature collection, relevance screening, parsing/extraction, and hybrid semantic/keyword retrieval are complete. A knowledge graph, assistant, and further evaluation are next steps.
- No public GitHub repository is available. Label the project In progress; do not imply the complete assistant or evaluation has shipped.

### LLM-distillation bias benchmark (FME Project Planning)

- An in-progress benchmark study on whether distilling LLM judges transfers or changes position, length, and self-preference biases.
- The planning brief proposes controlled bias injection and comparisons between larger Qwen2.5 teachers and smaller students, with quality-aware controls.
- Describe the work as a research plan/benchmark in progress, not as a completed result or a confirmed novelty claim. No public GitHub link is available.

## Other portfolio projects

### Loom AI

- LangGraph-based calendar-planning workflow: LLM components handle language-oriented decomposition, critique, and rationale; deterministic scheduling and validation enforce constraints.
- Human approval precedes calendar writes, which are designed to be add-only.
- The handbook explicitly distinguishes planned or unverified work and says to measure results before quoting them. Avoid unverified user-study, test-count, latency, or time-saved claims.

### Fraud Detection MLOps

- A real-time fraud-detection MLOps project using synthetic transactions, Kafka, Airflow/MLflow, and Spark Structured Streaming.
- The handbook describes a planned deployment and flags several pipeline components as new work. Present it as a project/prototype, not a production deployment; do not quote throughput, latency, model-quality, or impact numbers without verified measurements.
- Mention the synthetic-data caveat when discussing evaluation.

### CCE internship

- ML Engineering Intern with Cypress Creek Energy's Quantitative Analytics team, June–August 2026, according to the handbook.
- Work covered production solar forecasting, MLOps automation, cold-start forecasting, and performance-ratio drift monitoring across roughly 450 solar sites.
- The handbook names the resume as the source of truth for claims. Confirm exact metrics and ownership against the resume before adding or changing quantitative bullets.

## Publishing rules

- Do not turn plans, interview-prep scripts, or proposed evaluations into completed results.
- Avoid precise metrics unless the project source explicitly supports them and the user confirms they are approved for publication.
- Use clear statuses such as `Active`, `In progress`, `Research`, and `Completed`.
- Do not invent a public repository, demo, resume file, employer impact, or deployment.
