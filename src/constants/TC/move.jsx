export const MOVE_TYPE_INFANTRY = "infantry"
export const MOVE_TYPE_FLY = "fly"

export const moveTypeCollection = {
  en: {
    [MOVE_TYPE_FLY]: "Flying",
    [MOVE_TYPE_INFANTRY]: "Infantry",
  },
  ru: {
    [MOVE_TYPE_FLY]: "Полёт",
    [MOVE_TYPE_INFANTRY]: "Пешком",
  },
}

export default {
  MOVE_TYPE_INFANTRY,
  MOVE_TYPE_FLY,
  moveTypeCollection,
}
