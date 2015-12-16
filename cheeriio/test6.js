function log(n) { console.log(n); }

setImmediate(function A(){
  setImmediate(function B() {
    log(1);
    setImmediate(function D() { log(2); });
    setImmediate(function E() { log(3); });
  });
  setImmediate(function C() {
    log(4);
    setImmediate(function F() { log(5); });
    setImmediate(function G() { log(6); });
  });
});

setTimeout(function timeout() {
  console.log('TIMEOUT FIRED');
}, 0)

// 'TIMEOUT FIRED' 1 4 2 3 5 6
// OR
// 1 'TIMEOUT FIRED' 4 2 3 5 6
