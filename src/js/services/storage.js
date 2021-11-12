// if ("chrome" in window) {
//   console.log("todo: fetch from storage")
// }

const SAVE_KEY = "items"

export function getItems() {
  try {
    const json = window.localStorage.getItem(SAVE_KEY)
    if (!json) {
      return []
    }
    const items = JSON.parse(json)
    return items
  }
  catch(error) {
    return []
  }
}

export function updateItems(array) {
  window.localStorage.setItem(SAVE_KEY, JSON.stringify(array))
}

export function addItem(item) {
  const items = getItems()
  items.push(item)
  window.localStorage.setItem(SAVE_KEY, JSON.stringify(items))
}

export default {
  getItems,
  updateItems,
  addItem
}