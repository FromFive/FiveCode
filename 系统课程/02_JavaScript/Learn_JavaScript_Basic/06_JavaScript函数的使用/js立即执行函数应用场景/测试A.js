var comModule = (function() {
  var module = {}
  var message = "hello"
  console.log(message)
  module.message = message
  return module
})()
console.log(comModule)