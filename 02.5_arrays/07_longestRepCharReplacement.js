// longest repeating char replacement
// return len of longest substring containing same letter
// after making at most k changes

//Sliding Window Approach
function characterReplacement(s, k) {
  let start = 0;
  let map = {};
  let maxLen = 0;
  for (let end = 0; end < s.length; end++) {
    // adding curr alphabet to map
    if (!map[s[end]]) map[s[end]] = 1;
    else map[s[end]] += 1;

    // finding out which alphabet occurs the most
    let maxFreq = 0;
    for (let key in map) maxFreq = Math.max(maxFreq, map[key]);

    // we can also use if statement instead of while loop here
    // if the currWindow which is (end - start + 1)
    // minus the maxFreq is greater than k
    // this means we cannot replace that much characters
    while (end - start + 1 - maxFreq > k) map[s[start++]] -= 1;

    // otherwise return  maxLen
    maxLen = Math.max(maxLen, end - start + 1);
  }
  return maxLen;
  // Time : O(N)
  // Space : O(26) 26 alphabets max so const space
}

// BruteForce O(N^2)
function CharacterReplacement(s, k) {
  let maxLen = 0;
  for (let i = 0; i < s.length; i++) {
    let map = {};
    for (let j = i; j < s.length; j++) {
      if (!map[s[j]]) map[s[j]] = 1;
      else map[s[j]] += 1;

      let maxF = 0;
      for (let key in map) maxF = Math.max(maxF, map[key]);
      // window size is j - i + 1
      // after subtracting maxf from winSize
      // we will get diff chars
      if (j - i + 1 - maxF <= k) maxLen = Math.max(maxLen, j - i + 1);
    }
  }
  return maxLen;
}
