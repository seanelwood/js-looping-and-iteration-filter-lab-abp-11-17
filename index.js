// Code your solution in this file
function findMatching (drivers, name) {
  return drivers.filter (function(driver) {
    if(name.toLowerCase() === driver.toLowerCase()) {
      return true;
    } else {
      return false;
      }
  })

}

function fuzzyMatch(drivers, name) {
  return drivers.filter (function(driver) {
    if (name.substr(1,2) === driver.substr(1,2)) {
      return true;
    } else {
      return false;
      }
  })
}

// function matchName(drivers, name) {
//   return drivers.filter (function(driver) {
//   if(name === driver) {
//     return true;
//   } else {
//     return false;
//     }
//   })
// }
