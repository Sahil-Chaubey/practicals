import React from "react";

export default function page() {
    var num_periods;
    return (
    <>
      <div>Prac 2</div>
      <div>
        <p>import numpy as np</p>
        <p>import matplotlib.pyplot as plt</p>
        <p>
          def create_triangle_signal(period_length, num_periods, sampling_rate):
        </p>
        <p>
          &nbsp; t = np.linspace(0, period_length * num_periods,
          int(period_length * num_periods * sampling_rate))
        </p>
        <p>
          &nbsp; triangle_wave = np.abs((2 * t / period_length) % 2 - 1) - 0.5
        </p>
        <p>&nbsp; return t, triangle_wave</p>
        <p>def plot_segment(t, signal, period_length, num_periods):</p>
        <p>&nbsp; plt.plot(t, signal)</p>
        <p>&nbsp; plt.title(f"Triangle Signal - {num_periods} Periods")</p>
        <p>&nbsp; plt.xlabel("Time")</p>
        <p>&nbsp; plt.ylabel("Amplitude")</p>
        <p>&nbsp; plt.xlim(0, period_length * num_periods)</p>
        <p>&nbsp; plt.grid(True)</p>
        <p>&nbsp; plt.show()</p>
        <p>def compute_correlation(signal1, signal2):</p>
        <p>&nbsp; correlation = np.correlate(signal1, signal2, mode='same')</p>
        <p>&nbsp; return correlation</p>
        <p># Parameters</p>
        <p>period_length = 1.0 # Length of one period (seconds)</p>
        <p>num_periods = 3 # Number of periods to plot</p>
        <p>sampling_rate = 1000 # Sampling rate (Hz)</p>
        <p># Create triangle signal</p>
        <p>
          t, triangle_signal = create_triangle_signal(period_length,
          num_periods, sampling_rate)
        </p>
        <p># Plot 3-period segment</p>
        <p>plot_segment(t, triangle_signal, period_length, num_periods)</p>
        <p># Compute correlation</p>
        <p>
          correlation = compute_correlation(triangle_signal, triangle_signal)
        </p>
        <p>print("Correlation between the signal and itself:", correlation)</p>
      </div>
    </>
  );
}
