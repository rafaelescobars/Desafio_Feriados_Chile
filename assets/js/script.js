$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: "https://www.feriadosapp.com/api/holidays.json",
    data: "data",
    dataType: "json",
    success: function (response) {
      let data=response.data
      cargarData(data);
    }
  });
});

 let cargarData=(data)=>{
   let tbody=document.getElementsByTagName('tbody')[0];
   data.forEach(element => {
     tbody.innerHTML=
     `${tbody.innerHTML}
    <tr>
      <th socpe='row'>${element.id}</th>
      <td>${element.date}</td>
      <td>${element.title}</td>
      <td>${element.extra}</td>
      <td>${element.law}</td>
      <td>${element.law_id}</td>
    </tr>`
   });
 };