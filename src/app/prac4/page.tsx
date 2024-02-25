import React from "react";

export default function page() {
  return (
    <>
      <div>prac 4</div>
      <p>import numpy as np</p>
      <p>import cv2</p>
      <p>from matplotlib import pyplot as plt</p>
      <p>def log_transformation(image):</p>
      <p>&nbsp;c = 255 / np.log(1 + np.max(image))</p>
      <p>&nbsp;log_transformed = c * np.log(1 + image)</p>
      <p>&nbsp;log_transformed = np.array(log_transformed, dtype=np.uint8)</p>
      <p>&nbsp;return log_transformed</p>
      <p>def power_law_transformation(image, gamma):</p>
      <p>&nbsp;power_transformed = np.power(image, gamma)</p>
      <p>
        &nbsp;power_transformed = np.array(power_transformed, dtype=np.uint8)
      </p>
      <p>&nbsp;return power_transformed</p>
      <p>def contrast_adjustment(image, alpha, beta):</p>
      <p>&nbsp;adjusted = cv2.convertScaleAbs(image, alpha=alpha, beta=beta)</p>
      <p>&nbsp;return adjusted</p>
      <p>def histogram_equalization(image):</p>
      <p>&nbsp;equalized = cv2.equalizeHist(image)</p>
      <p>&nbsp;return equalized</p>
      <p>def thresholding(image, threshold):</p>
      <p>
        &nbsp;_, thresholded = cv2.threshold(image, threshold, 255,
        cv2.THRESH_BINARY)
      </p>
      <p>&nbsp;return thresholded</p>
      <p>def halftoning(image):</p>
      <p>&nbsp;_, binary = cv2.threshold(image, 128, 255, cv2.THRESH_BINARY)</p>
      <p>&nbsp;return binary</p>
      <p># Read an image</p>
      <p>image = cv2.imread('th.jpg', 0) # Read as grayscale</p>
      <p># Apply transformations</p>
      <p>log_transformed = log_transformation(image)</p>
      <p>
        power_transformed = power_law_transformation(image, gamma=0.5) # Example
        gamma value
      </p>
      <p>
        adjusted_contrast = contrast_adjustment(image, alpha=1.5, beta=0) #
        Example alpha and beta values
      </p>
      <p>equalized = histogram_equalization(image)</p>
      <p>
        thresholded = thresholding(image, threshold=128) # Example threshold
        value
      </p>
      <p>halftoned = halftoning(image)</p>
      <p># Save transformed images to files</p>
      <p>cv2.imwrite('log_transformed.jpg', log_transformed)</p>
      <p>cv2.imwrite('power_transformed.jpg', power_transformed)</p>
      <p>cv2.imwrite('adjusted_contrast.jpg', adjusted_contrast)</p>
      <p>cv2.imwrite('equalized.jpg', equalized)</p>
      <p>cv2.imwrite('thresholded.jpg', thresholded)</p>
      <p>cv2.imwrite('halftoned.jpg', halftoned)</p>
      <p># Display original image and paths to the transformed images</p>
      <p>plt.figure(figsize=(12, 6))</p>
      <p>plt.subplot(2, 3, 1)</p>
      <p>plt.imshow(image, cmap='gray')</p>
      <p>plt.title('Original')</p>
      <p>transformations = {"{"}</p>
      <p>&nbsp;'Log Transformed': 'log_transformed.jpg',</p>
      <p>&nbsp;'Power Law Transformed': 'power_transformed.jpg',</p>
      <p>&nbsp;'Contrast Adjusted': 'adjusted_contrast.jpg',</p>
      <p>&nbsp;'Histogram Equalized': 'equalized.jpg',</p>
      <p>&nbsp;'Thresholded': 'thresholded.jpg',</p>
      <p>&nbsp;'Halftoned': 'halftoned.jpg'</p>
      <p>{"}"}</p>
      <p>
        for i, (transformation, path) in enumerate(transformations.items(),
        start=1):
      </p>
      <p>&nbsp;plt.subplot(2, 3, i+1) # Adjust index to start from 1</p>
      <p>&nbsp;transformed_image = cv2.imread(path, 0)</p>
      <p>&nbsp;plt.imshow(transformed_image, cmap='gray')</p>
      <p>&nbsp;plt.title(transformation)</p>
      <p>plt.tight_layout()</p>
      <p>plt.show()</p>
    </>
  );
}
