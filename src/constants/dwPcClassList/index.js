const dwPcClassList = [
  require('./list/alchemist.jsx'),
  require('./list/druid.jsx'),
  require('./list/dwarf.jsx'),
  require('./list/elf.jsx'),
  require('./list/extra.jsx'),
  require('./list/ghost.jsx'),
  require('./list/incinerator.jsx'),
  require('./list/inventor.jsx'),
  require('./list/monk.jsx'),
  require('./list/noble.jsx'),
  require('./list/priest.jsx'),
  require('./list/ranger.jsx'),
  require('./list/revenant.jsx'),
  require('./list/savage.jsx'),
  require('./list/shorty.jsx'),
  require('./list/sorcerer.jsx'),
  require('./list/thief.jsx'),
  require('./list/thrall.jsx'),
  require('./list/warlock.jsx'),
  require('./list/warrior.jsx'),
]

module.exports = dwPcClassList

module.exports.dwPcClassCollection = dwPcClassList.reduce(
  (collection, item) => ({
    ...collection,
    [item.id]: item,
  }),
  {}
)
