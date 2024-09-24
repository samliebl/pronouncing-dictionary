import { dictionary } from "cmu-pronouncing-dictionary";

/**
 * Analyzes a given text and returns CMU dictionary entries for each word.
 *
 * @param {string} text - Input text to analyze.
 * @returns {Object} - A map of each word and its corresponding CMU entry.
 */
export function pronouncingDictionary(text) {
  // Remove punctuation and convert text to lowercase
  const cleanText = text.replace(/[^\w\s]/gi, "").toLowerCase();

  // Split text into individual words
  const words = cleanText.split(/\s+/);

  // Create an object to store the CMU entries for each word
  const cmuEntries = {};

  // Loop through each word and find its CMU Pronouncing entry
  words.forEach((word) => {
    // Get the CMU dictionary entry for the word
    const cmuEntry = dictionary[word.toLowerCase()];

    // Store the result in the object
    if (cmuEntry) {
      cmuEntries[word] = cmuEntry;
    } else {
      cmuEntries[word] = "No entry found";
    }
  });

  return cmuEntries;
}
