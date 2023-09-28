// Chocolate Distribution Problem
// Given an array of N integers where each value represents the number of chocolates in a packet. Each packet can have a variable number of chocolates. There are m students, the task is to distribute chocolate packets such that:

// Each student gets one packet.
// The difference between the number of chocolates in the packet with maximum chocolates and the packet with minimum chocolates given to the students is minimum.

function findMinDiff(arr, n, x) {
  if (x == 0 || n == 0) return 0;

  arr = arr.sort((a, b) => a - b);

  let diff = Infinity;
  for (let i = 0; i< n-m-1; i++) {
    let curr = arr[i + m - 1] - arr[i];

    if (curr < diff) diff = curr;
  }
  return diff;
}
