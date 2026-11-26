---
title: "Developer: FUSION, an open research agent platform for nuclear physics"
collection: service
type: "Community software"
permalink: /service/fusion
venue: "Open source (MIT)"
dates: 2026-09-04
location: "Online"
---
FUSION (Framework for Unified Skills, Inference & Open Nuclear-science) is an open-source research agent platform that I develop and maintain for the nuclear physics community. It packages the working knowledge needed to run publicly obtainable nuclear-physics codes into skills that a general language model can follow: 26 skills in total, 20 of which each drive one public code (reactions, structure, nuclear data) by starting from a verified input and passing a stated benchmark to a stated tolerance. The platform also ships a searchable knowledge base built from the arXiv nucl-th literature.

The two controls, a verified starting input and a stated benchmark, certify that a calculation was set up and run correctly. They do not replace physical judgment about whether a model suits the problem, which stays with the user.

- Code: <a href="https://github.com/jinleiphys/FUSION">github.com/jinleiphys/FUSION</a>
- Documentation: <a href="https://vibeinscience.com">vibeinscience.com</a>
- Description: Jin Lei, 'FUSION: a skill-based research agent for publicly obtainable nuclear-physics codes', <a href="https://arxiv.org/abs/2609.04742">arXiv:2609.04742</a> (2026)
