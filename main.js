// Your code here.

const makeBoss = function(boss) {
  const enemy = {};
    enemy.name = boss.name
    enemy.attackDamage = boss.attackDamage
    enemy.boss = true
    enemy.level = boss.level
    enemy.alive = true
    enemy.hitPoints = boss.hitPoints
  return enemy  
}

const levelUp = function(upOne) {
  const enemy = {};
    enemy.name = upOne.name
    enemy.attackDamage = upOne.attackDamage
    enemy.boss = false
    enemy.level = upOne.level + 1
    enemy.alive = true
    enemy.hitPoints = upOne.hitPoints
  return enemy
}

const buff = function(enemy1) {
  const newObj = {};
  newObj.name = enemy1.name
  newObj.attackDamage = enemy1.attackDamage + 15
  newObj.boss = false
  newObj.level = enemy1.level
  newObj.alive = true
  newObj.hitPoints = enemy1.hitPoints
  return newObj
}

const makeSuper = function(prepend) {
  const supered = {};
  supered.name = 'Super ' + prepend.name
  supered.attackDamage = prepend.attackDamage 
  supered.boss = false
  supered.level = prepend.level
  supered.alive = true
  supered.hitPoints = prepend.hitPoints
  return supered
}

const hitEnemy = function(enemy) {
  const hit = {};
  hit.name = enemy.name
  hit.attackDamage = enemy.attackDamage 
  hit.boss = false
  hit.level = enemy.level
  hit.alive = true
  hit.hitPoints = enemy.hitPoints - 10 
  
  if (hit.hitPoints - 10 <= 0) {
    hit.alive = false
  }
  return hit
}

const beastMode = function(newObj) {
  const buffed = {};
  buffed.name = 'Super ' + newObj.name
  buffed.attackDamage = newObj.attackDamage + 15
  buffed.boss = true
  buffed.level = newObj.level + 1
  buffed.alive = true
  buffed.hitPoints = newObj.hitPoints 
  
  return buffed
}


// Our code here. Don't touch!
if (typeof makeBoss === 'undefined') {
  makeBoss = undefined
}

if (typeof levelUp === 'undefined') {
  levelUp = undefined
}

if (typeof buff === 'undefined') {
  buff = undefined
}

if (typeof makeSuper === 'undefined') {
  makeSuper = undefined
}

if (typeof hitEnemy === 'undefined') {
  hitEnemy = undefined
}

if (typeof beastMode === 'undefined') {
  beastMode = undefined
}


module.exports = {
  makeBoss,
  levelUp,
  buff,
  makeSuper,
  hitEnemy,
  beastMode,
}
