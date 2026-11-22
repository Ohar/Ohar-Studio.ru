const generateDwPcClassPathById = (id, anchor) => `/dw/${id}${anchor ? `#${anchor}` : ''}`

module.exports = generateDwPcClassPathById
