{spawn, exec} = require 'child_process'

task 'doc', 'rebuild the Stringy documentation', ->
  exec([
    'docco src/stringy.js'
    'sed "s/docco.css/docs\\/docco.css/" < docs/stringy.html > index.html'
  ].join(' && '), (err) ->
    throw err if err
  )
