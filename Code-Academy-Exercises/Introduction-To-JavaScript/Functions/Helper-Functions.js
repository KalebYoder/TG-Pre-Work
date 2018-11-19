function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns){
  return monitorCount(rows, columns)*200;
}

const totalCost = costOfMonitors(5, 4);

console.log(totalCost);

//This shows how we can use functions within functions so each function does one specific thing, but we still get exactly what we need with one call.
