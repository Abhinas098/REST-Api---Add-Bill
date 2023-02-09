function saveToLocalStorage(event) {
    event.preventDefault()
    const Price = event.target.price.value;
    const Dish = event.target.dish.value;
    const Table = event.target.table.value;

    const obj = {
        Price,
        Dish,
        Table,
    }
    //axios POST
    axios.post("https://crudcrud.com/api/bf16bfa670ac4c83bb2e8c4523ada823/appointment", obj)
        .then(res => onscreen(res.data))
        .catch((err) => { document.body.innerHTML = document.body.innerHTML + '<h4>Something Went Wrong</h4>' })
}

window.addEventListener("DOMContentLoaded", () => {
    //axios GET
    axios.get("https://crudcrud.com/api/bf16bfa670ac4c83bb2e8c4523ada823/appointment")
        .then(res => {
            for (var i = 0; i < res.data.length; i++) {
                onscreen(res.data[i])
                console.log(res)
            }
        })
        .catch((err) => { document.body.innerHTML = document.body.innerHTML + '<h4>Something Went Wrong</h4>' })
})


function onscreen(obj) {
    const Table1 = document.getElementById('Table-1');
    const Table2 = document.getElementById('Table-2');
    const Table3 = document.getElementById('Table-3');

    const child1 = document.createElement('li');
    child1.textContent = obj.Price  + '-' + obj.Table + '-' + obj.Dish ;

    const child2 = document.createElement('li');
    child2.textContent = obj.Price  + '-' + obj.Table + '-' + obj.Dish;

    const child3 = document.createElement('li');
    child3.textContent = obj.Price  + '-' + obj.Dish;


    // delete
    const delbtn1 = document.createElement('input')
    delbtn1.type = "button"
    delbtn1.value = 'del'

    var delbtn2 = document.createElement('input')
    delbtn1.type = "button"
    delbtn1.value = 'del'

    var delbtn3 = document.createElement('input')
    delbtn1.type = "button"
    delbtn1.value = 'del'
    delbtn2.type = "button"
    delbtn2.value = 'del'
    delbtn3.type = "button"
    delbtn3.value = 'del'

    // DELETE 
    delbtn1.onclick = () => {
        axios.delete(`https://crudcrud.com/api/bf16bfa670ac4c83bb2e8c4523ada823/appointment/${obj._id}`)
            .then(res => res)
            .catch((err) => { document.body.innerHTML = document.body.innerHTML + '<h4>Something Went Wrong</h4>' })
        Table1.removeChild(child1)   
    }

    delbtn2.onclick = () => {
        axios.delete(`https://crudcrud.com/api/bf16bfa670ac4c83bb2e8c4523ada823/appointment/${obj._id}`)
            .then(res => res)
            .catch((err) => { document.body.innerHTML = document.body.innerHTML + '<h4>Something Went Wrong</h4>' })
        Table2.removeChild(child2)
    }

    delbtn3.onclick = () => {
        axios.delete(`https://crudcrud.com/api/bf16bfa670ac4c83bb2e8c4523ada823/appointment/${obj._id}`)
            .then(res => res)
            .catch((err) => { document.body.innerHTML = document.body.innerHTML + '<h4>Something Went Wrong</h4>' })
        Table3.removeChild(child3)
    }

    child1.appendChild(delbtn1)
    child2.appendChild(delbtn2)
    child3.appendChild(delbtn3)
    // console.log(obj.Table)
    // console.log(Table1 )
    if ( 'Table-1'== obj.Table){
        Table1.appendChild(child1)
    }
    else if('Table-2'== obj.Table){
        Table2.appendChild(child2)
    }
    else if('Table-3'== obj.Table){
        Table3.appendChild(child3)
    }
    else{
        console.log('error')
    }
}