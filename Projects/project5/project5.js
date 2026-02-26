const insert = document.getElementById('insert');

window.addEventListener('keydown',(e) =>{
    insert.innerHTML = `
    <table>
  <tr>
    <th>key_pressed</th>
    <th>keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key == " " ? "space": e.key }</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
    
  </tr>
  
</table>
`
})


// edge 
/*{
when we press space the key pressed value in table become empty bcz it treat space as blank so we enter it manually
}*/