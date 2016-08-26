var gm = require('../').subClass({imageMagick: true})
  , fs  = require('fs')
  , dir = __dirname + '/imgs'

gm(60,60)
  .out('pattern:gray50')
  .colors(2)
  .toBuffer('PBM', function (err, buf) {
    dir + '/background.pbm', function (err) {
    if (err) return console.dir(arguments)
    console.log(this.outname + " created  ::  " + arguments[3])
    console.log('\n' + buf)
});
