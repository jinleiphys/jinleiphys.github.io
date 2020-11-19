---
title: 'nonlocal potential的解法'
date: 2020-06-13
permalink: /posts/2020/06/nonlocalpot/
tags:
  - 物理笔记
---
最近做的项目中需要解一个包含nonlocal potential的薛定谔方程。 但是在通过使用R-matrix方法求解方程的时候发现得到的结果与把该nonlocal potential傅里叶变换到动量空间下求解的结果不一致。这个问题困扰了长达一个月的时间，通过查找文献我发现了一个比较有趣的现象，不同的文章对包含nonlocal potential的薛定谔方程定义都不一样。 比如， 在文章ANNALS OF PHYSICS 59, 219-247 (1970)中，方程被定义为

<a href="https://www.codecogs.com/eqnedit.php?latex=\left[\frac{d^{2}}{d&space;r^{2}}&plus;k^{2}-\frac{l(l&plus;1)}{r^{2}}\right]&space;\psi_{l}(k,&space;r)=\int_{0}^{\infty}&space;V\left(r,&space;r^{\prime}\right)&space;\psi_{2}\left(k,&space;r^{\prime}\right)&space;d&space;r^{\prime}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?\left[\frac{d^{2}}{d&space;r^{2}}&plus;k^{2}-\frac{l(l&plus;1)}{r^{2}}\right]&space;\psi_{l}(k,&space;r)=\int_{0}^{\infty}&space;V\left(r,&space;r^{\prime}\right)&space;\psi_{2}\left(k,&space;r^{\prime}\right)&space;d&space;r^{\prime}" title="\left[\frac{d^{2}}{d r^{2}}+k^{2}-\frac{l(l+1)}{r^{2}}\right] \psi_{l}(k, r)=\int_{0}^{\infty} V\left(r, r^{\prime}\right) \psi_{2}\left(k, r^{\prime}\right) d r^{\prime}" /></a>

在文章 PHYSICAL REVIEW C 98, 044621 (2018)中，方程被定义为

<a href="https://www.codecogs.com/eqnedit.php?latex=\left(T_{l_{p}}-E\right)&space;\chi_{p}^{l_{p}}(r)=\int_{0}^{\infty}&space;\chi_{p}^{l_{p}}\left(r^{\prime}\right)&space;U_{\mathrm{Ap}}\left(r,&space;r^{\prime}\right)&space;r^{\prime&space;2}&space;d&space;r^{\prime}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?\left(T_{l_{p}}-E\right)&space;\chi_{p}^{l_{p}}(r)=\int_{0}^{\infty}&space;\chi_{p}^{l_{p}}\left(r^{\prime}\right)&space;U_{\mathrm{Ap}}\left(r,&space;r^{\prime}\right)&space;r^{\prime&space;2}&space;d&space;r^{\prime}" title="\left(T_{l_{p}}-E\right) \chi_{p}^{l_{p}}(r)=\int_{0}^{\infty} \chi_{p}^{l_{p}}\left(r^{\prime}\right) U_{\mathrm{Ap}}\left(r, r^{\prime}\right) r^{\prime 2} d r^{\prime}" /></a>

然而在文章Computer Physics Communications 254, 107340(2020)中，方程被定义为

<a href="https://www.codecogs.com/eqnedit.php?latex=-\frac{\hbar^{2}}{2&space;\mu}\left[\frac{d^{2}}{d&space;r^{2}}-\frac{l(l&plus;1)}{r^{2}}\right]&space;f_{l&space;j}(k,&space;r)&plus;V_{C}(r)&space;f_{l&space;j}(k,&space;r)&plus;r&space;\int_{0}^{\infty}&space;\nu_{l&space;j}\left(r,&space;r^{\prime}&space;;&space;E\right)&space;f_{l&space;j}\left(k,&space;r^{\prime}\right)&space;r^{\prime}&space;\mathrm{d}&space;r^{\prime}=E&space;f_{l&space;j}(k,&space;r)" target="_blank"><img src="https://latex.codecogs.com/gif.latex?-\frac{\hbar^{2}}{2&space;\mu}\left[\frac{d^{2}}{d&space;r^{2}}-\frac{l(l&plus;1)}{r^{2}}\right]&space;f_{l&space;j}(k,&space;r)&plus;V_{C}(r)&space;f_{l&space;j}(k,&space;r)&plus;r&space;\int_{0}^{\infty}&space;\nu_{l&space;j}\left(r,&space;r^{\prime}&space;;&space;E\right)&space;f_{l&space;j}\left(k,&space;r^{\prime}\right)&space;r^{\prime}&space;\mathrm{d}&space;r^{\prime}=E&space;f_{l&space;j}(k,&space;r)" title="-\frac{\hbar^{2}}{2 \mu}\left[\frac{d^{2}}{d r^{2}}-\frac{l(l+1)}{r^{2}}\right] f_{l j}(k, r)+V_{C}(r) f_{l j}(k, r)+r \int_{0}^{\infty} \nu_{l j}\left(r, r^{\prime} ; E\right) f_{l j}\left(k, r^{\prime}\right) r^{\prime} \mathrm{d} r^{\prime}=E f_{l j}(k, r)" /></a>

可以看到上述几个文献中，给出的nonlocal方程在积分项上有分歧。

为了检验上述的几个方程，我们首先来看一下nonlocal potential的单位为何。原则上nonlocal potential应该与local potential的单位一致，对于local potential

<a href="https://www.codecogs.com/eqnedit.php?latex=V(r,r')=V(r)&space;\frac{\delta(r-r'))}{rr'}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?V(r,r')=V(r)&space;\frac{\delta(r-r'))}{rr'}" title="V(r,r')=V(r) \frac{\delta(r-r'))}{rr'}" /></a>

它的单位为 MeV fm^{-3}， 也就是说通过积分运算之后nonlocal potential的单位应该与动能的单位一致，即MeV， 也就是说积分项本身要因为的单位为fm^3。 按照这个定义，我们可以排除第一个方程。 对于第二个和第三个方程哪个是正确的，我们先不讨论。 我们先回到R-matrix方法中。对于Lagrange函数的定义

<a href="https://www.codecogs.com/eqnedit.php?latex=\varphi_{i}(r)=(-1)^{N&plus;i}&space;\frac{r}{a&space;x_{i}}&space;\sqrt{a&space;x_{i}\left(1-x_{i}\right)&space;\frac{P_{N}(2&space;r&space;/&space;a-1)}{r-a&space;x_{i}}}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?\varphi_{i}(r)=(-1)^{N&plus;i}&space;\frac{r}{a&space;x_{i}}&space;\sqrt{a&space;x_{i}\left(1-x_{i}\right)&space;\frac{P_{N}(2&space;r&space;/&space;a-1)}{r-a&space;x_{i}}}" title="\varphi_{i}(r)=(-1)^{N+i} \frac{r}{a x_{i}} \sqrt{a x_{i}\left(1-x_{i}\right) \frac{P_{N}(2 r / a-1)}{r-a x_{i}}}" /></a>

以及

<a href="https://www.codecogs.com/eqnedit.php?latex=\left\langle\varphi_{i}&space;|&space;\varphi_{j}\right\rangle=\int_{0}^{a}&space;\varphi_{i}(r)&space;\varphi_{j}(r)&space;\mathrm{d}&space;r&space;\approx&space;\delta_{i&space;j}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?\left\langle\varphi_{i}&space;|&space;\varphi_{j}\right\rangle=\int_{0}^{a}&space;\varphi_{i}(r)&space;\varphi_{j}(r)&space;\mathrm{d}&space;r&space;\approx&space;\delta_{i&space;j}" title="\left\langle\varphi_{i} | \varphi_{j}\right\rangle=\int_{0}^{a} \varphi_{i}(r) \varphi_{j}(r) \mathrm{d} r \approx \delta_{i j}" /></a>

在Pierre最初的文章中，nonlocal potential被定义为

<a href="https://www.codecogs.com/eqnedit.php?latex=\begin{aligned}&space;\left\langle\varphi_{i}\left|U_{\ell}\right|&space;\varphi_{j}\right\rangle&space;&=\int_{0}^{a}&space;\varphi_{i}(r)&space;U_{\ell}\left(r,&space;r^{\prime}\right)&space;\varphi_{j}\left(r^{\prime}\right)&space;d&space;r&space;d&space;r^{\prime}&space;\\&space;&&space;\approx&space;a&space;\sqrt{\lambda_{i}&space;\lambda_{j}}&space;U_{\ell}\left(a&space;x_{i},&space;a&space;x_{j}\right)&space;\end{aligned}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?\begin{aligned}&space;\left\langle\varphi_{i}\left|U_{\ell}\right|&space;\varphi_{j}\right\rangle&space;&=\int_{0}^{a}&space;\varphi_{i}(r)&space;U_{\ell}\left(r,&space;r^{\prime}\right)&space;\varphi_{j}\left(r^{\prime}\right)&space;d&space;r&space;d&space;r^{\prime}&space;\\&space;&&space;\approx&space;a&space;\sqrt{\lambda_{i}&space;\lambda_{j}}&space;U_{\ell}\left(a&space;x_{i},&space;a&space;x_{j}\right)&space;\end{aligned}" title="\begin{aligned} \left\langle\varphi_{i}\left|U_{\ell}\right| \varphi_{j}\right\rangle &=\int_{0}^{a} \varphi_{i}(r) U_{\ell}\left(r, r^{\prime}\right) \varphi_{j}\left(r^{\prime}\right) d r d r^{\prime} \\ & \approx a \sqrt{\lambda_{i} \lambda_{j}} U_{\ell}\left(a x_{i}, a x_{j}\right) \end{aligned}" /></a>

**但是**，对于Lagrange函数的正交性我们看到这里定义的是一个一维的情况，而并非三维的情况。为了保证三维情况下，径向波函数的正交归一性， Lagrange函数可以被重新定义为

<a href="https://www.codecogs.com/eqnedit.php?latex=\varphi_{i}(r)=\frac{1}{r}(-1)^{N&plus;i}&space;\frac{r}{a&space;x_{i}}&space;\sqrt{a&space;x_{i}\left(1-x_{i}\right)}&space;\frac{P_{N}(2&space;r&space;/&space;a-1)}{r-a&space;x_{i}}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?\varphi_{i}(r)=\frac{1}{r}(-1)^{N&plus;i}&space;\frac{r}{a&space;x_{i}}&space;\sqrt{a&space;x_{i}\left(1-x_{i}\right)}&space;\frac{P_{N}(2&space;r&space;/&space;a-1)}{r-a&space;x_{i}}" title="\varphi_{i}(r)=\frac{1}{r}(-1)^{N+i} \frac{r}{a x_{i}} \sqrt{a x_{i}\left(1-x_{i}\right)} \frac{P_{N}(2 r / a-1)}{r-a x_{i}}" /></a>

因为对于nonlocal potential项来说

<a href="https://www.codecogs.com/eqnedit.php?latex=\begin{aligned}&space;\left\langle\varphi_{i}\left|U_{\ell}\right|&space;\varphi_{j}\right\rangle&space;&=\int_{0}^{a}&space;r^2&space;r'^2&space;\varphi_{i}(r)&space;U_{\ell}\left(r,&space;r^{\prime}\right)&space;\varphi_{j}\left(r^{\prime}\right)&space;d&space;r&space;d&space;r^{\prime}&space;\\&space;&&space;\approx&space;a^3x_ix_j&space;\sqrt{\lambda_{i}&space;\lambda_{j}}&space;U_{\ell}\left(a&space;x_{i},&space;a&space;x_{j}\right)&space;\end{aligned}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?\begin{aligned}&space;\left\langle\varphi_{i}\left|U_{\ell}\right|&space;\varphi_{j}\right\rangle&space;&=\int_{0}^{a}&space;r^2&space;r'^2&space;\varphi_{i}(r)&space;U_{\ell}\left(r,&space;r^{\prime}\right)&space;\varphi_{j}\left(r^{\prime}\right)&space;d&space;r&space;d&space;r^{\prime}&space;\\&space;&&space;\approx&space;a^3x_ix_j&space;\sqrt{\lambda_{i}&space;\lambda_{j}}&space;U_{\ell}\left(a&space;x_{i},&space;a&space;x_{j}\right)&space;\end{aligned}" title="\begin{aligned} \left\langle\varphi_{i}\left|U_{\ell}\right| \varphi_{j}\right\rangle &=\int_{0}^{a} r^2 r'^2 \varphi_{i}(r) U_{\ell}\left(r, r^{\prime}\right) \varphi_{j}\left(r^{\prime}\right) d r d r^{\prime} \\ & \approx a^3x_ix_j \sqrt{\lambda_{i} \lambda_{j}} U_{\ell}\left(a x_{i}, a x_{j}\right) \end{aligned}" /></a>

为了验证这个nonlocal项的正确性，我们先把nonlocal potential傅里叶变换到动量空间下求解，对于动量空间下potential是nonlocal，不管坐标空间的potential是local还是nonlocal。因此方便验证坐标空间下的求解是不是正确的，

![](https://jinleiphys.github.io/files/nonlocal_wf.jpg)

如上图所示，黑色的线是动量空间下求解的波函数，红色的线是用pierre文章中给出的公式，蓝色的虚线是改正后的nonlocal项。可以看见改正后的项与动量空间下的求解完全一致。


那么现在我们看一下F. PEREY and B. BUCK文章(Nuclear Physics 32 (1962) 353--380)中对nonlocal项的定于与求解为何呢？在其文章中

<a href="https://www.codecogs.com/eqnedit.php?latex=g_{l}\left(r,&space;r^{\prime}\right)=2&space;\pi&space;r&space;r^{\prime}&space;U\left[\frac{1}{2}\left(r&plus;r^{\prime}\right)\right]&space;\int_{-1}^{&plus;1}&space;\frac{\exp&space;\left[-\left(\frac{\mathbf{r}-\mathbf{r}^{\prime}}{\beta}\right)^{2}\right]}{\pi^{\frac{3}{2}}&space;\beta^{3}}&space;P_{l}(\cos&space;\chi)&space;\mathrm{d}(\cos&space;\chi)" target="_blank"><img src="https://latex.codecogs.com/gif.latex?g_{l}\left(r,&space;r^{\prime}\right)=2&space;\pi&space;r&space;r^{\prime}&space;U\left[\frac{1}{2}\left(r&plus;r^{\prime}\right)\right]&space;\int_{-1}^{&plus;1}&space;\frac{\exp&space;\left[-\left(\frac{\mathbf{r}-\mathbf{r}^{\prime}}{\beta}\right)^{2}\right]}{\pi^{\frac{3}{2}}&space;\beta^{3}}&space;P_{l}(\cos&space;\chi)&space;\mathrm{d}(\cos&space;\chi)" title="g_{l}\left(r, r^{\prime}\right)=2 \pi r r^{\prime} U\left[\frac{1}{2}\left(r+r^{\prime}\right)\right] \int_{-1}^{+1} \frac{\exp \left[-\left(\frac{\mathbf{r}-\mathbf{r}^{\prime}}{\beta}\right)^{2}\right]}{\pi^{\frac{3}{2}} \beta^{3}} P_{l}(\cos \chi) \mathrm{d}(\cos \chi)" /></a>

与Computer Physics Communications 254, 107340(2020)中的定义是一致的，也与改正后的Lagrange-Rmatrix一致
