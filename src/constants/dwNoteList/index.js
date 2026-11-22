import inventorNote from './list/inventor'

const dwNoteList = [
  inventorNote,
]

export default dwNoteList
export const dwNoteCollection = dwNoteList.reduce(
  (collection, item) => ({
    ...collection,
    [item.id]: item,
  }),
  {}
)
