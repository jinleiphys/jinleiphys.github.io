---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
---

{% include base_path %}

<div class="research-intro">
Our research group focuses on using quantum few-body models to study the structure and reactions of atomic nuclei, with particular emphasis on weakly bound nuclei. We also actively develop machine learning approaches to accelerate and enhance nuclear physics calculations. More details at <a href="http://www.fewbody.com/research">QFBD Research Group</a>.
</div>

<div class="research-grid">

  <div class="research-card">
    <span class="research-card__icon">&#9883;</span>
    <h3 class="research-card__title">Inclusive Breakup &amp; the IAV Model</h3>
    <div class="research-card__tags">
      <span class="research-card__tag">Three-Body</span>
      <span class="research-card__tag">Fusion</span>
      <span class="research-card__tag">Weakly Bound</span>
    </div>
    <div class="research-card__desc">
      We study nuclear reaction processes using a quantum three-body model, treating the projectile as a weakly bound two-body system. Using the Ichimura-Austern-Vincent (IAV) model for inclusive breakup reactions, we have studied fusion and incomplete fusion in reactions induced by deuterons and <sup>6</sup>Li.
    </div>
    <details class="research-card__papers">
      <summary>Key Publications</summary>
      <ul>
        <li><a href="/publications/PhysRevLett.122.042503.pdf">Puzzle of Complete Fusion Suppression in Weakly Bound Nuclei: A Trojan Horse Effect?</a> PRL 122, 042503 (2019)</li>
        <li><a href="/publications/PhysRevLett.123.232501.pdf">Unraveling the Reaction Mechanisms Leading to Partial Fusion of Weakly Bound Nuclei</a> PRL 123, 232501 (2019)</li>
      </ul>
    </details>
  </div>

  <div class="research-card">
    <span class="research-card__icon">&#127919;</span>
    <h3 class="research-card__title">CDCC &amp; Scattering Methods</h3>
    <div class="research-card__tags">
      <span class="research-card__tag">CDCC</span>
      <span class="research-card__tag">Emulator</span>
      <span class="research-card__tag">Bayesian</span>
    </div>
    <div class="research-card__desc">
      We develop and apply the CDCC method for scattering observables of weakly-bound projectiles. Our code <strong>STARS</strong> implements the Lagrange-mesh R-matrix method with GPU acceleration. Our <strong>reduced-basis emulator</strong> achieves 260x speedup, enabling full Bayesian inference of 18-parameter optical potentials.
    </div>
    <details class="research-card__papers">
      <summary>Key Publications</summary>
      <ul>
        <li><a href="/publications/Phys.Lett.B858.139070.pdf">A complex scaling method for efficient and accurate scattering emulation in nuclear reactions</a> PLB 858, 139070 (2024)</li>
        <li><a href="/publications/PhysRevC.113.024614.pdf">Direct boundary matching: A bound-state technique for nuclear scattering with Lagrange-Legendre functions</a> PRC 113, 024614 (2026)</li>
      </ul>
    </details>
  </div>

  <div class="research-card">
    <span class="research-card__icon">&#129504;</span>
    <h3 class="research-card__title">Machine Learning for Nuclear Physics</h3>
    <div class="research-card__tags">
      <span class="research-card__tag">PINNs</span>
      <span class="research-card__tag">BiCfC</span>
      <span class="research-card__tag">Inverse Scattering</span>
    </div>
    <div class="research-card__desc">
      We pioneer modern ML techniques for nuclear scattering: <strong>PINNs with exterior complex scaling</strong> for quantum scattering, and <strong>bidirectional liquid neural networks (BiCfC)</strong> as fast, differentiable surrogates for the radial Schr&ouml;dinger equation. The BiCfC network enables Fisher information analysis, sensitivity mapping, and gradient-based inverse scattering.
    </div>
    <details class="research-card__papers">
      <summary>Key Results</summary>
      <ul>
        <li>Fisher analysis reveals elastic scattering constrains only ~1.7 effective parameters out of 9, explaining the Igo ambiguity</li>
        <li>Size sensitivity mapping identifies optimal experimental conditions for constraining nuclear radii</li>
        <li>Gradient-based inverse scattering with 4x speedup over evolutionary algorithms</li>
      </ul>
    </details>
  </div>

  <div class="research-card">
    <span class="research-card__icon">&#129516;</span>
    <h3 class="research-card__title">Neural Cluster Model</h3>
    <div class="research-card__tags">
      <span class="research-card__tag">Variational</span>
      <span class="research-card__tag">Neural Network</span>
      <span class="research-card__tag">Cluster</span>
    </div>
    <div class="research-card__desc">
      We are developing the <strong>Neural Cluster Model (NCM)</strong>, a variational wave function framework bridging neural network quantum states and nuclear cluster models. The NCM introduces learnable cluster latent variables, allowing cluster structure to <em>emerge from the variational principle</em>. Benchmarks on <sup>4</sup>He and <sup>8</sup>Be show excellent agreement with experiment.
    </div>
    <details class="research-card__papers">
      <summary>Architecture</summary>
      <ul>
        <li>Permutation-equivariant encoder discovers cluster configurations</li>
        <li>Cluster-aware Gaussian orbitals enforce antisymmetry</li>
        <li>Neural Jastrow correlator captures short-range correlations</li>
      </ul>
    </details>
  </div>

  <div class="research-card">
    <span class="research-card__icon">&#9881;</span>
    <h3 class="research-card__title">Few-Body Dynamics</h3>
    <div class="research-card__tags">
      <span class="research-card__tag">Four-Body</span>
      <span class="research-card__tag">Faddeev</span>
      <span class="research-card__tag">DWBA</span>
    </div>
    <div class="research-card__desc">
      We investigate four-body breakup processes. Given the challenges in handling three charged particles within the Faddeev framework, we perform four-body breakup calculations for systems with four charged particles using a DWBA framework, treating the projectile as having a three-body structure.
    </div>
  </div>

  <div class="research-card">
    <span class="research-card__icon">&#9762;</span>
    <h3 class="research-card__title">Decay &amp; Surrogate Reactions</h3>
    <div class="research-card__tags">
      <span class="research-card__tag">Alpha Decay</span>
      <span class="research-card__tag">2p Decay</span>
      <span class="research-card__tag">Surrogate</span>
    </div>
    <div class="research-card__desc">
      From two-body alpha decay to three-body two-proton decay and five-body models, we study resonance decay processes. Our inclusive breakup work with the IAV model provides a promising pathway to fully describe surrogate reactions for nuclear astrophysics and stockpile stewardship.
    </div>
  </div>

  <div class="research-card research-card--full">
    <span class="research-card__icon">&#128187;</span>
    <h3 class="research-card__title">Computational Tools</h3>
    <div class="research-card__desc">
      <div class="research-tools">
        <div class="research-tool"><strong>STARS</strong>&mdash; CDCC solver with Lagrange-mesh R-matrix, GPU acceleration &amp; reduced-basis emulation</div>
        <div class="research-tool"><strong>SMOOTHIE</strong>&mdash; Nonelastic breakup via IAV formalism</div>
        <div class="research-tool"><strong>COLOSS</strong>&mdash; Complex-scaled scattering solver <a href="/publications/cpc_311_109568.pdf">[CPC 311, 109568 (2025)]</a></div>
      </div>
      <p style="margin-top: 1rem; font-size: 0.9em;">For more details, visit <a href="http://www.fewbody.com/codes">QFBD Codes</a>.</p>
    </div>
  </div>

</div>
