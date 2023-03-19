// Longest Substring without rep characters

// "abcabcbb" => 3
// "abcdcamb" => 5

// Sliding window O(N) approach
function lengthOfLongestSubstring(s) {
  let start = 0;
  let map = new Map();
  let maxLen = 0;
  for (let end = 0; end < s.length; end++) {
    if (!map.has(s[end])) {
      map.set(s[end], end);
      maxLen = Math.max(maxLen, end - start + 1);
    } else {
      const firstOccurence = map.get(s[end]);
      for (let i = start; i <= firstOccurence; i++) map.delete(s[i]);
      start = firstOccurence + 1;
      map.set(s[end], end);
    }
  }
  return maxLen;
  // Time : O(N)
  // Space : O(N)
}

// Bruteforce O(N^2) approach
function LengthOfLongestSubstring(s) {
  let maxLen = 0;
  for (let i = 0; i < s.length; i++) {
    let map = new Map();
    let size = 0;
    for (let j = i; j < s.length; j++) {
      if (!map.has(s[j])) {
        map.set(s[j], 1);
        size++;
      } else {
        break;
      }
    }
    maxLen = Math.max(maxLen, size);
  }
  return maxLen;
}
lengthOfLongestSubstring('');
