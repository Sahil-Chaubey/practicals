import React from 'react'

export default function page() {
  return (
   <>
    <div>prac 3</div>
    <div>
  <p>import numpy as np</p>
  <p>import scipy.signal</p>
  <p>import matplotlib.pyplot as plt</p>
  <p># Generate a simple sound signal</p>
  <p>fs = 1000 # Sampling frequency</p>
  <p>t = np.linspace(0, 1, fs) # 1 second signal</p>
  <p>freq = 5 # Frequency of the signal</p>
  <p>sound_signal = np.sin(2 * np.pi * freq * t)</p>
  <p># Create a simple filter/kernel for convolution</p>
  <p>kernel = np.array([1, -1])</p>
  <p># Perform convolution</p>
  <p>conv_result = np.convolve(sound_signal, kernel, mode='same')</p>
  <p># Plot original sound signal</p>
  <p>plt.figure(figsize=(10, 6))</p>
  <p>plt.subplot(3, 1, 1)</p>
  <p>plt.plot(t, sound_signal)</p>
  <p>plt.title('Original Sound Signal')</p>
  <p>plt.xlabel('Time')</p>
  <p>plt.ylabel('Amplitude')</p>
  <p># Plot the kernel</p>
  <p>plt.subplot(3, 1, 2)</p>
  <p>plt.stem(kernel)</p>
  <p>plt.title('Kernel')</p>
  <p>plt.xlabel('Sample')</p>
  <p>plt.ylabel('Value')</p>
  <p># Plot result of convolution</p>
  <p>plt.subplot(3, 1, 3)</p>
  <p>plt.plot(t, conv_result)</p>
  <p>plt.title('Result of Convolution')</p>
  <p>plt.xlabel('Time')</p>
  <p>plt.ylabel('Amplitude')</p>
  <p>plt.tight_layout()</p>
  <p>plt.show()</p>
  <p># Template Matching</p>
  <p># Generate a noisy sound signal</p>
  <p>noise = np.random.normal(0, 0.1, len(sound_signal))</p>
  <p>noisy_signal = sound_signal + noise</p>
  <p># Generate a template (pattern to search for)</p>
  <p>template = np.sin(2 * np.pi * freq * t)</p>
  <p># Perform template matching</p>
  <p>corr_result = scipy.signal.correlate(noisy_signal, template, mode='same')</p>
  <p># Plot the noisy signal</p>
  <p>plt.figure(figsize=(10, 6))</p>
  <p>plt.subplot(3, 1, 1)</p>
  <p>plt.plot(t, noisy_signal)</p>
  <p>plt.title('Noisy Sound Signal')</p>
  <p>plt.xlabel('Time')</p>
  <p>plt.ylabel('Amplitude')</p>
  <p># Plot the template</p>
  <p>plt.subplot(3, 1, 2)</p>
  <p>plt.plot(t, template)</p>
  <p>plt.title('Template')</p>
  <p>plt.xlabel('Time')</p>
  <p>plt.ylabel('Amplitude')</p>
  <p># Plot the result of template matching</p>
  <p>plt.subplot(3, 1, 3)</p>
  <p>plt.plot(t, corr_result)</p>
  <p>plt.title('Result of Template Matching')</p>
  <p>plt.xlabel('Time')</p>
  <p>plt.ylabel('Correlation')</p>
  <p>plt.tight_layout()</p>
  <p>plt.show()</p>
</div>

   </>
  )
}
