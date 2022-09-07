const ts = [7, -10, 13, 8, 4, -7, -12, -3, 3, -9, 6, -1, -6, 7]

function computeClosestToZero(ts) {
  // if (!ts.length) {
  //   return 0
  // }

  // let closest = 0

  // for (let i = 0; i < ts.length; i++) {
  //   if (closest === 0) {
  //     closest = ts[i]
  //   } else if (ts[i] > 0 && ts[i] <= Math.abs(closest)) {
  //     closest = ts[i]
  //   } else if (ts[i] < 0 && -ts[i] < Math.abs(closest)) {
  //     closest = ts[i]
  //   }
  // }

  let closest = ts.reduce(
    (acc, x) =>
      acc === 0
        ? x
        : x > 0 && x <= Math.abs(acc)
        ? x
        : x < 0 && -x < Math.abs(acc)
        ? x
        : acc,
    0
  )

  console.log(closest)
  return closest
}

computeClosestToZero(ts)
