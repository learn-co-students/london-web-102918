const whatToRender = React.createElement('h1', {}, 'Hello')

// const createEl = (type, props={}, children) => {
//   props.children = children
//   return {
//     $$typeof: Symbol('react.element'),
//     key: null,
//     props: props,
//     type: type
//   }
// }

// const whatToRender = createEl('h1', {}, 'Hello')

const Article = (title, content) => {
  return React.createElement('div', { id: title, className: 'article'},
    [
      React.createElement('h1', {}, title),
      React.createElement('p', {}, content)
    ]
  )
}
// ReactDOM.render(
//   [NavBar('ZooKeepr', 'Keep track of your animals', 'blue'),
//    Article('First', 'Lorem Ipsum'),
//    Article('Second', 'Lorem Ipsum'),
//    Article('Third', 'Lorem Ipsum')],
//   document.querySelector('#main')
// )

ReactDOM.render(<h1>Title</h1>,
  document.querySelector('#main')
)
