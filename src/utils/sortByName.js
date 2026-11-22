const sortByName = ({ name: A }, { name: B }) => A === B ? 0 : A > B ? 1 : -1

module.exports = sortByName
