// longest repeating char replacement
// return len of longest substring containing same letter
// after making at most k changes

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
