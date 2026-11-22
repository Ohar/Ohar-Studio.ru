import tagRawList from './tagRawList'

const dwTagList = tagRawList

export default dwTagList
export const dwTagCollection = dwTagList.reduce(
  (collection, item) => ({
    ...collection,
    [item.id]: item,
  }),
  {}
)
