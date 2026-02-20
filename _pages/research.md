---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
---

{% include base_path %}

Our research group focuses on using quantum few-body models to study the structure and reactions of atomic nuclei, with particular emphasis on weakly bound nuclei. We also actively develop machine learning approaches to accelerate and enhance nuclear physics calculations. More details can be found at our group website: [QFBD Research Group](http://www.fewbody.com/research).

---

## Inclusive Breakup and the IAV Model

Our group has extensively studied nuclear reaction processes using a quantum three-body model, treating the projectile as a weakly bound two-body system. We focus on inclusive breakup reactions --- where only one fragment of the projectile is detected after collision --- using the Ichimura-Austern-Vincent (IAV) model. With this framework, we have successfully studied fusion and incomplete fusion processes in reactions induced by weakly bound nuclei such as deuterons and <sup>6</sup>Li.

**Key publications:**
- *Puzzle of Complete Fusion Suppression in Weakly Bound Nuclei: A Trojan Horse Effect?* [PRL 122, 042503 (2019)](/publications/PhysRevLett.122.042503.pdf)
- *Unraveling the Reaction Mechanisms Leading to Partial Fusion of Weakly Bound Nuclei* [PRL 123, 232501 (2019)](/publications/PhysRevLett.123.232501.pdf)

---

## Continuum-Discretized Coupled Channels (CDCC)

We develop and apply the CDCC method for computing scattering observables of weakly-bound projectiles such as deuterons, <sup>6</sup>Li, and <sup>6</sup>He. Our in-house code **STARS** (Shanghai Tongji Advanced Reaction Solver) implements the Lagrange-mesh R-matrix method with GPU acceleration.

A major recent advance is our **reduced-basis emulator** for CDCC calculations, achieving a 260x speedup while maintaining sub-percent accuracy. This emulator has enabled, for the first time, full Bayesian inference of 18-parameter optical potentials in CDCC --- a task previously computationally prohibitive. Our Bayesian analysis has revealed evidence for missing three-body force effects in standard CDCC through a systematic enhancement of surface absorption.

We are also working toward incorporating ab-initio structure inputs into CDCC, replacing phenomenological Woods-Saxon potentials with microscopic descriptions of projectile internal structure.

**Key publications:**
- *A complex scaling method for efficient and accurate scattering emulation in nuclear reactions* [PLB 858, 139070 (2024)](/publications/Phys.Lett.B858.139070.pdf)
- *Direct boundary matching: A bound-state technique for nuclear scattering with Lagrange-Legendre functions* [PRC 113, 024614 (2026)](/publications/PhysRevC.113.024614.pdf)

---

## Machine Learning for Nuclear Reactions

We are pioneering the application of modern machine learning techniques to nuclear scattering problems:

**Physics-Informed Neural Networks (PINNs) with Exterior Complex Scaling.** By combining PINNs with exterior complex scaling (ECS), we transform the oscillatory scattering boundary conditions into exponentially decaying ones, making quantum scattering problems tractable for neural network solvers. This approach has been successfully applied to both nucleon-nucleus and heavy-ion scattering systems. (arXiv: 2602.04553)

**Bidirectional Liquid Neural Networks for Nuclear Scattering.** We have developed a bidirectional closed-form continuous-time (BiCfC) neural network that serves as a fast, differentiable surrogate for the radial Schrodinger equation. Trained across 12 target nuclei, 2 projectile types, 31 partial waves, and energies from 1 to 200 MeV, the network achieves ~1% mean error on S-matrix elements. Its end-to-end differentiability enables:
- **Fisher information analysis** revealing that elastic scattering data constrains only ~1.7 effective parameter combinations out of 9 optical potential parameters --- providing a fundamental information-theoretic explanation for the long-standing Igo ambiguity.
- **Size sensitivity mapping** that identifies optimal experimental conditions (energy and angle) for constraining nuclear radii, guiding efficient use of beam time at rare isotope facilities.
- **Gradient-based inverse scattering** with 4x speedup over evolutionary algorithms.

---

## Neural Cluster Model

We are developing the **Neural Cluster Model (NCM)**, a novel variational wave function framework that bridges neural network quantum states and traditional nuclear cluster models. The NCM introduces learnable cluster latent variables into a neural network architecture, allowing cluster structure to **emerge from the variational principle** rather than being imposed a priori.

The architecture combines a permutation-equivariant encoder (which discovers cluster configurations), cluster-aware Gaussian orbitals (enforcing antisymmetry), a neural Jastrow correlator (capturing short-range correlations), and an inter-cluster wave function. Benchmarks on <sup>4</sup>He and <sup>8</sup>Be using the Minnesota potential show excellent agreement with experiment, and the encoder spontaneously discovers the expected alpha-cluster configurations.

---

## Dynamics of Four-Body Systems

We are investigating four-body breakup processes. Given the known challenges in handling three charged particles within the Faddeev framework, we aim to perform four-body breakup calculations for systems with four charged particles using a Distorted Wave Born Approximation (DWBA) framework, treating the projectile as having a three-body structure.

---

## Resonance Decay Processes

Starting from two-body decay scenarios such as alpha decay, we model the alpha and daughter nuclei within a two-body framework. Our research extends to more complex systems including three-body decays (such as two-proton decay) and potentially five-body decays (alpha decay in a five-body model).

---

## Surrogate Reactions

Surrogate reactions are indirect methods used to study nuclear reactions that are difficult to measure directly, particularly those involving unstable, radioactive nuclei. Our study of inclusive breakup using the IAV model has proposed a promising pathway to fully describe surrogate reactions. We continue to develop this approach for applications in nuclear astrophysics and stockpile stewardship.

---

## Computational Tools

- **STARS** (Shanghai Tongji Advanced Reaction Solver): CDCC solver with Lagrange-mesh R-matrix method, GPU acceleration, and reduced-basis emulation.
- **SMOOTHIE**: Nonelastic breakup calculations using the Ichimura-Austern-Vincent formalism.
- **COLOSS**: Complex-scaled Optical and Coulomb Scattering Solver. [CPC 311, 109568 (2025)](/publications/cpc_311_109568.pdf)

For more details on our codes, visit our group website: [QFBD Codes](http://www.fewbody.com/codes).
