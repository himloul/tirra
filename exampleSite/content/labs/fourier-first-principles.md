---
title: "Fourier, from First Principles"
date: 2026-01-15
image: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Fourier_series_illustration.svg"
description: "What a sine-wave decomposition really is, built up from dot products instead of imported as a black box."
tags: ["demo"]
---

Every periodic signal is a sum of sines, the hard part is believing it, then finding the coefficients. This note builds the Fourier transform up from a single idea: sines of different frequencies are orthogonal, so you can pick each one out by taking a dot product.
