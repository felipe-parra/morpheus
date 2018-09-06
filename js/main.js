function imgPromo(){
    const $img = document.getElementById("imgPromos");
    $img.setAttribute("src","img/promos/logo.jpg");
}
function imgPromo2(){
    const $img = document.getElementById("imgPromos");
    $img.setAttribute("src","img/promos/logo2.jpg");
}
(function tiempoInter(){
    setInterval("imgPromo()",5000);
    setInterval("imgPromo2()",15000);
})();
function searchData(description){
    let mySearch = new Object();
}
const $form = document.getElementById('inputSearch');

const $table = document.getElementById("resultTable");
function templateResults(articulo,codigoBarras,nombre,precio,fecha){
  return (
    `<tr>
          <th scope="row">${articulo}</th>
          <td>${codigoBarras}</td>
          <td>${nombre}</td>
          <td>$\t${precio}</td>
          <td>${fecha}</td>
    </tr>
    `)
}
const $resultTable = document.getElementById("resultTable");
function busqueda(art){
  const $art = art.toUpperCase()
  for(i in data){
    const Articulo = data[i].Articulo
    const CodigoBarras = data[i].CodigoBarras
    const Nombre = data[i].Nombre
    const PrecioTotal = parseFloat(data[i].PrecioTotal).toFixed(2)
    const fecha = data[i].FechaModificacion
    if(data[i].Nombre.match($art)){
      const htmlString = templateResults(Articulo,CodigoBarras,Nombre,PrecioTotal,fecha)
      $resultTable.innerHTML += htmlString;
    }
  }
}
$form.addEventListener('submit',(event) =>{
  event.preventDefault();
  $resultTable.innerHTML = "";
  const dato = new FormData($form);
  const datoBusqueda = dato.get('name');
  busqueda(datoBusqueda);
})
