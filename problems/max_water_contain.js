let waterLevels = [1, 8, 6, 2, 5, 4, 8, 3, 7]

// Complexity O(n^2)
function maxWaterOne(levels) {
  let maxValue = 0

  for (let i = 0; i < levels.length; i++) {
    for (let j = i + 1; j < levels.length; j++) {
      let height = Math.min(levels[i], levels[j])
      let width = j - i
      let water = height * width
      maxValue = Math.max(water, maxValue)
    }
  }
  return maxValue
}

// Complexity O(n^2)
function maxWaterTwo(levels) {
  let maxwater = 0

  // Start && End Pointer
  let start = 0
  let end = levels.length - 1

  while (start < end) {
    let width = end - start
    let length = Math.min(levels[start], levels[end])
    let currentWater = width * length
    maxwater = Math.max(currentWater, maxwater)

    levels[start] < levels[end] ? start++ : end--
  }

  return maxwater
}

console.log(maxWaterTwo(waterLevels))
