
const todoUrl = 'http://localhost:3000/todos'

// put events on ul because it will always be there even if there were no li's
// Read 
// See the data before adding CUD
$(document).ready(()=>{
  $.ajax(
    {
      url: todoUrl,
      method: "GET"
    }
  )
  .done((dataObj)=>{
    $('ul').empty()
    dataObj.map((todo)=>{
      let completed = todo.isComplete ? "completed" : ""
      $('ul').append(
        `<li data-id=${todo.id} class=${completed}>${todo.description}<span><i class='far fa-trash-alt'></i></span></li>`
      )
    })
  })
  .fail((error)=>{
    console.error(`Issues getting data from server.`, error)  
  })
})


// CREATE
$("input").keypress(function(event) {
  if (event.which === 13 && $(this).val() !== "") {
    var todoItem = {
      description: $(this).val()
      // have to have key value pair when sending object
      // this is going to "data" in ajax 
      
    }
    $.ajax({
      url: todoUrl,
      method: 'POST',
      data: todoItem 
      // have to call data "data" in ajax and has to be object
    })
    .done((newTodo)=>{
      $('ul').append(
        `<li data-id=${newTodo.id}>${newTodo.description}<span><i class='far fa-trash-alt'></i></span></li>`
      )
      $("input").val("");
    })
    .fail((error)=>{
      console.error(`Failed getting new todo created in server`, error)
    })
  }
});

// UPDATE/POST
$("ul").on("click", "li", function() {
  // $(this).toggleClass("completed");
  event.stopPropagation()
  let self = this;
  let todoId = $(this).data('id')
  $.ajax({
    url: `${todoUrl}/${todoId}`,
    method: 'PUT'
  })
  .done(()=>{
    $(this).toggleClass("completed");
  })
  .fail((err)=>console.log(`Failed to update completed: ${err}`))
})

// DELETE
$("ul").on("click", "span", function(event) {
  event.stopPropagation()
  let self = this
  let todoId = $(this).parent().data('id')
  $.ajax({
    url: `${todoUrl}/${todoId}`,
    method: 'DELETE'
  })
  .done(()=>{
    $(self)
    .parent()
    .remove();
  })
  .fail(()=>{})


 
});