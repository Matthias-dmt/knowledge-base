# Knowledge Base

Personal knowledge base covering system design, Node.js/TypeScript patterns, and architecture decisions — built from production experience and interview prep.

## Consumers

| Consumer | What it uses |
|---|---|
| **Obsidian** | Wikilinks, tags, frontmatter, graph view |
| **Docusaurus** | Mermaid diagrams, internal links, static site build |
| **AI / RAG** | Self-contained files, TL;DR sections optimised for retrieval |

## Folder structure

```
system-design/       fundamentals, CAP theorem, scalability
databases/           indexing, replication, sharding, transactions
caching/             strategies, invalidation, Redis, CDN
async-and-queues/    BullMQ, events, saga, outbox, backpressure
architecture/        monolith→micro, DDD, strangler fig, deployments
api-design/          REST, GraphQL, gRPC, pagination, versioning
observability/       logging, metrics, tracing, SLOs
typescript/          type patterns, generics, DI, error handling
_meta/               index, reading list, interview prep
_templates/          concept.md, pattern.md, adr.md
```

## Writing a new doc

Every file follows the template in [_templates/](_templates/). The short version:

1. Frontmatter with `title`, `tags`, `related`, `created`, `status`
2. Required sections: **TL;DR** → **Context / problem** → **Solution** → **Concrete example** → **Tradeoffs** → **Related concepts**
3. Mermaid diagram for any flow with 3+ steps
4. Wikilinks for all cross-references — `[[filename-without-extension]]`
5. One concept per file, kebab-case filename, max ~300 lines

See [AGENTS.md](AGENTS.md) for the full authoring spec.
