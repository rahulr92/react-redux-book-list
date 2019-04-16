export function selectBook(book) {
  console.log("A book was selected " + book.title);
  // selectBook is an action creation
  // return an action
  return {
    type : 'BOOK_SELECTED',
    payload : book
  }

}
