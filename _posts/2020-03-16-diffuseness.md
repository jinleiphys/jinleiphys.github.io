---
title: '晕核散射的弥散度'
date: 2020-03-09
permalink: /posts/2020/03/diffuseness/
tags:
  - 物理笔记
  - 半经典方法
---
前段时间，老板一直跟我吹嘘说她的半经典模型有多么的好用，在二十年前她用半经典模型预言了晕核散射的弥散度(diffuseness)(<a href="https://jinleiphys.github.io/files/Optical_potentials_of_halo_and_weakly_bound_nuclei.pdf">Nuclear Physics A 706 (2002) 322–334</a>)，这个结果在10年前的实验中得到了证明(<a href="https://jinleiphys.github.io/files/PhysRevLett105.022701.pdf">Phys. Rev. Lett. 105, 022701</a>)。

今天花了点时间看了一下，她的这篇文章。 这篇文章主要的内容是她把她和她博士导师发展那套半经典散射模型应用到了晕核参与的核反应中。在半经典模型，即eikonal模型中，散射的相移因子和光学势的虚部直接相关。 通过研究相移因子在核反应中的变化从而研究散射过程中截面和光学势虚部的依赖关系。

在这篇文章中， 她假设晕核核反应的光学势虚部由两部分组成，即体项（Volume）和表面项（surface）。这个附加的表面项体现了晕核束缚态波函数在坐标空间下长程的性质。通过她的模型分析，最终得到的结论是表面项的弥散度与晕核的束缚能直接相关,即

<a href="https://www.codecogs.com/eqnedit.php?latex=a_s=\frac{\hbar}{2\sqrt{-2\mu&space;\varepsilon&space;_i}}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?a_s=\frac{\hbar}{2\sqrt{-2\mu&space;\varepsilon&space;_i}}" title="a_s=\frac{\hbar}{2\sqrt{-2\mu \varepsilon _i}}" /></a>


把上述公式代入晕核11Be参与的核反应中，我们得到

<a href="https://www.codecogs.com/eqnedit.php?latex=a_s=\frac{197.3269718}{2\sqrt{2.*0.5*10*931.4932/11.}}\approx&space;3.39~\textrm{fm}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?a_s=\frac{197.3269718}{2\sqrt{2.*0.5*10*931.4932/11.}}\approx&space;3.39~\textrm{fm}" title="a_s=\frac{197.3269718}{2\sqrt{2.*0.5*10*931.4932/11.}}\approx 3.39~\textrm{fm}" /></a>

这个数值在误差范围内完全与后面PRL文章中的结果一致。
