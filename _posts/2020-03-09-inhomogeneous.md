---
title: 'Inhomogeneous equation解法'
date: 2020-03-09
permalink: /posts/2020/03/inhomogeneous/
tags:
  - 物理笔记
---
今天在写文章的时候，又对解inhomogeneous方程时，source项需不需要乘r这个系数感到困惑。不得不重新推导一遍方程，现在把过程记录在这里，省得以后每一次遇到时都需要推导。

对于具有下面形式的inhomogeneous方程

<a href="https://www.codecogs.com/eqnedit.php?latex=[T&plus;U-E]&space;\psi=S" target="_blank"><img src="https://latex.codecogs.com/gif.latex?[T&plus;U-E]&space;\psi=S" title="[T+U-E] \psi=S" /></a>

通常情况下有两种解法，一个是微分解法，另外一种是积分解法。对于微分解法来说，我们一般假设

<a href="https://www.codecogs.com/eqnedit.php?latex=\psi=\frac{u}{r}&space;\quad&space;\text&space;{&space;and&space;}&space;\quad&space;S=\frac{\rho}{r}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?\psi=\frac{u}{r}&space;\quad&space;\text&space;{&space;and&space;}&space;\quad&space;S=\frac{\rho}{r}" title="\psi=\frac{u}{r} \quad \text { and } \quad S=\frac{\rho}{r}" /></a>

因此上述方程在分波表述下， 可以写为

<a href="https://www.codecogs.com/eqnedit.php?latex=\left[-\frac{\hbar^{2}&space;}{2&space;\mu}\left(\frac{d^{2}}{d&space;r^{2}}-\frac{l(l&plus;1)}{r^{2}}\right)&plus;U-E\right]&space;u_{\ell}=\rho_{\ell}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?\left[-\frac{\hbar^{2}&space;}{2&space;\mu}\left(\frac{d^{2}}{d&space;r^{2}}-\frac{l(l&plus;1)}{r^{2}}\right)&plus;U-E\right]&space;u_{\ell}=\rho_{\ell}" title="\left[-\frac{\hbar^{2} }{2 \mu}\left(\frac{d^{2}}{d r^{2}}-\frac{l(l+1)}{r^{2}}\right)+U-E\right] u_{\ell}=\rho_{\ell}" /></a>

上面的这个方程可以用Numerov或者R-matrix方法来解。


另外一方面我们还可以通过积分方程来解inhomogeneous equation，

<a href="https://www.codecogs.com/eqnedit.php?latex=\psi(r)=-\int&space;r^{\prime&space;2}G\left(r,&space;r^{\prime})&space;S\left(r^{\prime}\right)&space;d&space;r^{\prime}\right." target="_blank"><img src="https://latex.codecogs.com/gif.latex?\psi(r)=-\int&space;r^{\prime&space;2}G\left(r,&space;r^{\prime})&space;S\left(r^{\prime}\right)&space;d&space;r^{\prime}\right." title="\psi(r)=-\int r^{\prime 2}G\left(r, r^{\prime}) S\left(r^{\prime}\right) d r^{\prime}\right." /></a>

根据定义我们可以得到下列方程

<a href="https://www.codecogs.com/eqnedit.php?latex=\begin{aligned}&space;u_\ell(r)&space;&=r&space;\cdot&space;\int&space;r'^{2}&space;\cdot&space;\frac{2&space;\mu}{\hbar&space;^{2}&space;k}&space;\frac{f_\ell(r)}{r^{\prime}}&space;\frac{h_\ell^&plus;}{r}&space;\frac{\rho_\ell}{r^{\prime}}&space;d&space;r^{\prime}&space;\\&space;&=\frac{2&space;\mu}{\hbar^{2}&space;k}&space;\int&space;f_{\ell}(r<)&space;h_{\ell}^{(&plus;)}(r>)\rho_\ell&space;(r^{\prime})&space;d&space;r^{\prime}&space;\end{aligned}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?\begin{aligned}&space;u_\ell(r)&space;&=r&space;\cdot&space;\int&space;r'^{2}&space;\cdot&space;\frac{2&space;\mu}{\hbar&space;^{2}&space;k}&space;\frac{f_\ell(r)}{r^{\prime}}&space;\frac{h_\ell^&plus;}{r}&space;\frac{\rho_\ell}{r^{\prime}}&space;d&space;r^{\prime}&space;\\&space;&=\frac{2&space;\mu}{\hbar^{2}&space;k}&space;\int&space;f_{\ell}(r<)&space;h_{\ell}^{(&plus;)}(r>)\rho_\ell&space;(r^{\prime})&space;d&space;r^{\prime}&space;\end{aligned}" title="\begin{aligned} u_\ell(r) &=r \cdot \int r'^{2} \cdot \frac{2 \mu}{\hbar ^{2} k} \frac{f_\ell(r)}{r^{\prime}} \frac{h_\ell^+}{r} \frac{\rho_\ell}{r^{\prime}} d r^{\prime} \\ &=\frac{2 \mu}{\hbar^{2} k} \int f_{\ell}(r<) h_{\ell}^{(+)}(r>)\rho_\ell (r^{\prime}) d r^{\prime} \end{aligned}" /></a>

主要注意的是在实际物理应用时，我们通常情况下得到的是完整的source项，即S项，需要通过除以r变成\rho项。
