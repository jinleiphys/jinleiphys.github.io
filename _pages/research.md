---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
---

{% include base_path %}

<div class="research-intro">
Our group studies the quantum few-body problem in nuclear reactions: how weakly bound and halo nuclei break up, fuse, and transfer nucleons when they collide. The physics questions drive a parallel effort in methods, from coupled-channel and Faddeev techniques to emulators, differentiable solvers, and Bayesian inference. More details at <a href="http://www.fewbody.com/research">QFBD Research Group</a>.
</div>

<div class="research-grid">

  <div class="research-card">
    <span class="research-card__icon">&#9883;</span>
    <h3 class="research-card__title">Inclusive Breakup &amp; the IAV Mechanism</h3>
    <div class="research-card__tags">
      <span class="research-card__tag">Three-Body</span>
      <span class="research-card__tag">Incomplete Fusion</span>
      <span class="research-card__tag">Trojan Horse</span>
    </div>
    <div class="research-card__desc">
      The longest-running line of our research: a quantum three-body description of inclusive breakup based on the Ichimura-Austern-Vincent (IAV) formalism. Our 2015 demonstration of post-prior equivalence closed a 30-year controversy in the theory of inclusive breakup. We then showed that the suppression of complete fusion in weakly bound nuclei can be understood as a Trojan Horse effect, and the first IAV-CDCC calculation revealed incomplete fusion as a one-step direct capture process. Current work extends the formalism to halo and Borromean projectiles and connects it to the Trojan Horse method of nuclear astrophysics.
    </div>
    <details class="research-card__papers">
      <summary>Key Publications</summary>
      <ul>
        <li><a href="/publications/PhysRevC.92.061602.pdf">Numerical assessment of post-prior equivalence for inclusive breakup reactions</a> PRC 92, 061602(R) (2015), Editors' Suggestion</li>
        <li><a href="/publications/PhysRevLett.122.042503.pdf">Puzzle of Complete Fusion Suppression in Weakly Bound Nuclei: A Trojan Horse Effect?</a> PRL 122, 042503 (2019)</li>
        <li><a href="/publications/PhysRevLett.123.232501.pdf">Unraveling the Reaction Mechanisms Leading to Partial Fusion of Weakly Bound Nuclei</a> PRL 123, 232501 (2019)</li>
        <li><a href="/publications/l53j-32cp.pdf">Numerical assessment of convergence in the post-form IAV model</a> PRC 112, 014609 (2025), Editors' Suggestion</li>
      </ul>
    </details>
  </div>

  <div class="research-card">
    <span class="research-card__icon">&#127919;</span>
    <h3 class="research-card__title">Emulators &amp; Bound-State Techniques for Scattering</h3>
    <div class="research-card__tags">
      <span class="research-card__tag">CDCC</span>
      <span class="research-card__tag">Reduced Basis</span>
      <span class="research-card__tag">Lagrange Mesh</span>
    </div>
    <div class="research-card__desc">
      We develop techniques that recast scattering problems in bound-state-like form, making them fast enough for large-scale parameter studies. The direct boundary matching method (released as <strong>SLAM.jl</strong>) solves scattering with Lagrange-Legendre functions without Bloch operators. Built on it, our reduced-basis emulator reproduces full CDCC elastic scattering with sub-0.1% accuracy at roughly 220 times the speed, and a complex-scaling emulator spans channels and parameters with a single square-integrable basis.
    </div>
    <details class="research-card__papers">
      <summary>Key Publications</summary>
      <ul>
        <li><a href="/publications/PhysRevC.113.024614.pdf">Direct boundary matching: A bound-state technique for nuclear scattering with Lagrange-Legendre functions</a> PRC 113, 024614 (2026)</li>
        <li><a href="/publications/n24x-d9gm.pdf">Reduced basis emulator for elastic scattering in continuum-discretized coupled-channels calculations</a> PRC 113, 044610 (2026)</li>
        <li><a href="/publications/Phys.Lett.B858.139070.pdf">A complex scaling method for efficient and accurate scattering emulation in nuclear reactions</a> PLB 858, 139070 (2024)</li>
      </ul>
    </details>
  </div>

  <div class="research-card">
    <span class="research-card__icon">&#128202;</span>
    <h3 class="research-card__title">Bayesian Inference &amp; Uncertainty Quantification</h3>
    <div class="research-card__tags">
      <span class="research-card__tag">Bayesian</span>
      <span class="research-card__tag">Fisher Information</span>
      <span class="research-card__tag">Differentiable</span>
    </div>
    <div class="research-card__desc">
      How much do scattering data actually constrain reaction models? Bootstrap uncertainty quantification showed that the reported "breakup threshold anomaly" can be a precision artifact. With DREAM, we rebuilt a legacy CDCC solver as a differentiable emulator in JAX, so exact likelihood gradients enable full Bayesian posteriors (NUTS) for 18-parameter optical potentials in minutes on a single GPU. Fisher information geometry explains why: elastic scattering constrains only about 1.5 to 1.7 effective parameter combinations, a geometric reading of the long-known Igo ambiguity.
    </div>
    <details class="research-card__papers">
      <summary>Key Publications</summary>
      <ul>
        <li><a href="/publications/j.physletb.2019.06.005.pdf">Is the unusual near-threshold potential behavior in elastic scattering of weakly-bound nuclei a precision error?</a> PLB 795, 200 (2019)</li>
        <li><a href="https://arxiv.org/abs/2605.30980">High-Dimensional Bayesian Calibration of Expensive Nuclear Models with Differentiable Emulation</a> arXiv:2605.30980</li>
      </ul>
    </details>
  </div>

  <div class="research-card">
    <span class="research-card__icon">&#9889;</span>
    <h3 class="research-card__title">Absorption Dynamics in Coupled Channels</h3>
    <div class="research-card__tags">
      <span class="research-card__tag">Optical Theorem</span>
      <span class="research-card__tag">Fusion</span>
      <span class="research-card__tag">Flux Conservation</span>
    </div>
    <div class="research-card__desc">
      Where does the absorbed flux actually go in a coupled-channel calculation? A generalized optical theorem decomposes the absorption cross section channel by channel, exposing the dual role of off-diagonal couplings; the common practice of switching off breakup-channel absorption biases direct and breakup cross sections by up to 57%. Combining incoming-wave boundary conditions with a complex potential gives an exact split of absorption into fusion and peripheral loss, revealing for <sup>6</sup>Li+<sup>209</sup>Bi a crossover at the Coulomb barrier where couplings redirect peripheral loss into fusion.
    </div>
    <details class="research-card__papers">
      <summary>Key Publications</summary>
      <ul>
        <li><a href="/publications/bgwc-x5wj.pdf">Coherent absorption dynamics: The dual role of off-diagonal couplings in weakly bound nuclei</a> PRC 113, 054601 (2026)</li>
        <li><a href="/publications/j.physletb.2026.140479.pdf">Channel couplings redirect absorbed flux from peripheral loss to fusion in weakly bound nuclear reactions</a> PLB 877, 140479 (2026)</li>
      </ul>
    </details>
  </div>

  <div class="research-card">
    <span class="research-card__icon">&#129504;</span>
    <h3 class="research-card__title">Machine Learning for Nuclear Physics</h3>
    <div class="research-card__tags">
      <span class="research-card__tag">PINN</span>
      <span class="research-card__tag">KAN</span>
      <span class="research-card__tag">Neural Quantum States</span>
    </div>
    <div class="research-card__desc">
      We bring modern machine learning to nuclear problems where it genuinely changes what is computable. Exterior complex scaling makes physics-informed neural networks viable for quantum scattering: the damped exterior wave keeps the optical potential on the real axis (<strong>PINN-ECS</strong>). Kolmogorov-Arnold networks predict binding energies with an RMSE of 0.26 MeV on AME2020, and symbolic regression recovers mass-formula terms from the trained network. Ongoing work explores variational neural-network wave functions for nuclear cluster structure.
    </div>
    <details class="research-card__papers">
      <summary>Key Publications</summary>
      <ul>
        <li><a href="/publications/PhysRevC.111.024316.pdf">Kolmogorov-Arnold networks in nuclear binding energy prediction</a> PRC 111, 024316 (2025)</li>
        <li><a href="https://doi.org/10.1103/sjz4-pq6p">Physics-informed neural networks for nuclear scattering with exterior complex scaling</a> PRC, in press (2026)</li>
      </ul>
    </details>
  </div>

  <div class="research-card">
    <span class="research-card__icon">&#9881;</span>
    <h3 class="research-card__title">Few-Body Universality &amp; Faddeev Methods</h3>
    <div class="research-card__tags">
      <span class="research-card__tag">Faddeev-AGS</span>
      <span class="research-card__tag">Universality</span>
      <span class="research-card__tag">Halo</span>
    </div>
    <div class="research-card__desc">
      Momentum-space Faddeev-AGS calculations of the deuteron-alpha system showed that <sup>6</sup>Li behaves as an effective deuteron halo, an example of few-body universality in nuclear systems. This line continues at Tongji with <strong>swift.jl</strong>, a Julia three-body Faddeev solver handling realistic forces (AV18, Nijmegen, plus three-body forces), the triton bound state, and nucleon-deuteron scattering with Coulomb via complex scaling.
    </div>
    <details class="research-card__papers">
      <summary>Key Publications</summary>
      <ul>
        <li><a href="/publications/PhysRevC.98.051001.pdf">Few-body universality in the deuteron-alpha system</a> PRC 98, 051001(R) (2018)</li>
      </ul>
    </details>
  </div>

  <div class="research-card research-card--full">
    <span class="research-card__icon">&#128187;</span>
    <h3 class="research-card__title">Open-Source Codes</h3>
    <div class="research-card__desc">
      <div class="research-tools">
        <div class="research-tool"><strong>SMOOTHIE</strong>&nbsp;IAV nonelastic breakup, DWBA &amp; CDCC <a href="https://github.com/jinleiphys/smoothie">[GitHub]</a></div>
        <div class="research-tool"><strong>SLAM.jl</strong>&nbsp;general scattering with direct boundary matching <a href="https://github.com/jinleiphys/SLAM.jl">[GitHub]</a></div>
        <div class="research-tool"><strong>swift.jl</strong>&nbsp;three-body Faddeev solver in Julia <a href="https://github.com/jinleiphys/swift.jl">[GitHub]</a></div>
        <div class="research-tool"><strong>HPRMAT</strong>&nbsp;GPU-accelerated R-matrix solver <a href="https://github.com/jinleiphys/HPRMAT">[GitHub]</a></div>
        <div class="research-tool"><strong>PINN-ECS</strong>&nbsp;neural-network scattering solver in JAX <a href="https://github.com/jinleiphys/PINN-ECS">[GitHub]</a></div>
        <div class="research-tool"><strong>COLOSS</strong>&nbsp;complex-scaled scattering solver <a href="/publications/cpc_311_109568.pdf">[CPC 311, 109568 (2025)]</a></div>
        <div class="research-tool"><strong>inhomoR</strong>&nbsp;Lagrange-mesh R-matrix for inhomogeneous equations <a href="https://github.com/jinleiphys/inhomoR">[GitHub]</a></div>
        <div class="research-tool"><strong>STARS</strong>&nbsp;CDCC with GPU acceleration &amp; built-in emulator (in-house)</div>
      </div>
      <p style="margin-top: 1rem; font-size: 0.9em;">For more details, visit <a href="http://www.fewbody.com/codes">QFBD Codes</a>.</p>
    </div>
  </div>

</div>
