// <div class="ui inverted orange menu">
//     <a class='item'>
//       <h2 class="ui header">
//         <i class="paw icon"></i>
//         <div class="content">
//           ZooKeepr
//         </div>
//         <div class="sub header">
//           Keep track of your animals
//         </div>
//       </h2>
//     </a>
//   </div>

const NavBar = (title, subtitle, color='orange') => {
  return React.createElement('div', {className: `ui inverted ${color} menu`},
    React.createElement('a', {className: 'item'},
      React.createElement('h2', {className: 'ui header'}, [
        React.createElement('i', {className: 'paw icon'}, null),
        React.createElement('div', {className: 'content'}, title),
        React.createElement('div', {className: 'sub header'}, subtitle)
      ])
    )
  )
}
