$(function(){

  console.log('todos.js');

  var $todoStringField = $('#todoString');
  var $todoTemplateHtml = $('#todoTemplate').html();
  var $listDom = $('#todoList');

  console.log($todoStringField);


  $todoStringField.on('keyup', addTodo);
  $listDom.on('click', checkDelete);
  $listDom.html(loadData());

  
  function addTodo(event) {

    console.log('todoStringField keyup!');

    if (event.keyCode !== 13 || $todoStringField.val === "") {
      event.stopPropagation(); 
      return;
    }

    var newTodo = $todoStringField.val();
    $todoStringField.val("");

    console.log('새로운 todo:', newTodo);

    $listDom.append(tmpl($todoTemplateHtml, {todo: newTodo}));

    saveData();
  }

  function checkDelete(event) {

      if(event.target.className !== 'delete') {
        return;
      }
      var $deleteBtn = $(event.target);

      $deleteBtn.parent().remove();

      saveData();
  }

  function loadData() {
    console.log('loadData()');
    return localStorage.getItem('todoHtml');
  }

  function saveData() {
    console.log('saveData()');
    localStorage.setItem('todoHtml', $listDom.html());
  }

});