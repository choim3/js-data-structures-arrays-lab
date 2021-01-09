// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver(){
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(name) {
  const newDriver = [...drivers, name];
  return newDriver;
}

function prependDriver(name) {
  const newDriver = [ name, ...drivers];
  return newDriver;
}

function removeFirstDriver() {
  const newDriver = drivers.slice(1);
  return newDriver;
}

function removeLastDriver() {
  const newDriver = drivers.slice(0,2);
  return newDriver;
}
