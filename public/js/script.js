function loadData(){
  return new Promise((resolve,reject)=>{
    fetch('https://api-dishes.vercel.app')
    .then( result => result.json( ) )
    .then( result => resolve(result) ) 
    .catch( err  => reject(err) )
  })
}

const loadFields = ()=>{
  const idValue = document.getElementById('id').value
  const nameValue = document.getElementById('name').value
  const caloriesValue = document.getElementById('calories').value
  const vegetarianValue = document.getElementById('isVegetarian').value
  const valueValue = document.getElementById('value').value
  const commentsValue = document.getElementById('comments').value

  const data = {"idDish":idValue,"name":nameValue,"calories":caloriesValue, "isVegetarian":vegetarianValue,"value": valueValue, "comments":commentsValue}
  console.log(data);
  return JSON.stringify(data)
}

const cleanFields = ()=>{
  const idValue = document.getElementById('id').value
  const nameValue = document.getElementById('name').value
  const caloriesValue = document.getElementById('calories').value
  const vegetarianValue = document.getElementById('isVegetarian').value
  const valueValue = document.getElementById('value').value
  const commentsValue = document.getElementById('comments').value

  idValue.value = "";
  nameValue.value = "";
  caloriesValue.value = "";
  vegetarianValue.value = "";
  valueValue.value = "";
  commentsValue.value = "";

}

document.getElementById('btnSend').addEventListener('click',()=>{
  console.log("click");
  const URI = "https://api-dishes.vercel.app"

  fetch(URI,
    {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:loadFields()
    }).then( result => result.json())
      .then( result => {
        if( result.state ){
          alert('plato agregado exitosamente')
          cleanFields();
        }else{
          alert('Ohh! Algo ha salido mal')
        }
      }).catch( err => console.log(err))
})


document.getElementById('btnDelete').addEventListener('click',()=>{
  const idDelete = document.getElementById('idDelete').value
  console.log("click");

  const URI = `https://api-dishes.vercel.app/${idDelete}`

  fetch(URI,
    {
      method:"DELETE",
      headers:{
        "Content-Type":"application/json"
      }
    }).then( result => result.json())
      .then( result => {
        if( result.state ){
          alert('plato eliminado exitosamente')
          cleanFields();
        }else{
          alert('Ohh! Algo ha salido mal')
        }
      }).catch( err => console.log(err))
})