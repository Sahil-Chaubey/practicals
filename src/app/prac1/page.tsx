import React from "react";

export default function page() {
  return (
    <>
      <div>first pracs</div>
      <p>import numpy as np</p>
      <p>from scipy.io.wavfile import write</p>
      <p>fs = 44100</p>
      <p>duration = 3.0</p>
      <p>t = np.linspace(0, duration, int(fs * duration), endpoint=False)</p>
      <p>frequency = 440 # Hz (frequency of A4)</p>
      <p>scaled_signal = np.int16(synthetic_signal * 32767)</p>
      <p>write('synthetic_speech.wav', fs, scaled_signal)</p>
      <br></br>

      <div>
  <p>import numpy as np</p>
  <p>import matplotlib.pyplot as plt</p>
  <p>from scipy.io import wavfile</p>
  <p>def upsample(signal, factor):</p>
  <p>&nbsp;return np.repeat(signal, factor)</p>
  <p>def downsample(signal, factor):</p>
  <p>&nbsp;return signal[::factor]</p>
  <p>def compute_dft(signal):</p>
  <p>&nbsp;return np.fft.fft(signal)</p>
  <p>def plot_signal(signal, title):</p>
  <p>&nbsp;plt.plot(signal)</p>
  <p>&nbsp;plt.title(title)</p>
  <p>&nbsp;plt.xlabel('Sample')</p>
  <p>&nbsp;plt.ylabel('Amplitude')</p>
  <p>&nbsp;plt.grid(True)</p>
  <p>&nbsp;plt.show()</p>
  <p>def plot_spectrum(fft_result, title):</p>
  <p>&nbsp;plt.plot(np.abs(fft_result))</p>
  <p>&nbsp;plt.title(title)</p>
  <p>&nbsp;plt.xlabel('Frequency (Hz)')</p>
  <p>&nbsp;plt.ylabel('Magnitude')</p>
  <p>&nbsp;plt.grid(True)</p>
  <p>&nbsp;plt.show()</p>
  <p># Load an example speech signal</p>
  <p>fs, speech_signal = wavfile.read('synthetic_speech.wav')</p>
  <p># Plot original speech signal</p>
  <p>plot_signal(speech_signal, 'Original Speech Signal')</p>
  <p># Upsample the speech signal by a factor of 2</p>
  <p>upsampled_signal = upsample(speech_signal, 2)</p>
  <p>plot_signal(upsampled_signal, 'Upsampled Speech Signal')</p>
  <p># Downsample the speech signal by a factor of 2</p>
  <p>downsampled_signal = downsample(speech_signal, 2)</p>
  <p>plot_signal(downsampled_signal, 'Downsampled Speech Signal')</p>
  <p># Compute the Discrete Fourier Transform (DFT) of the original speech signal</p>
  <p>dft_result = compute_dft(speech_signal)</p>
  <p>plot_spectrum(dft_result, 'DFT of Original Speech Signal')</p>
</div>
    </>
  );
}
