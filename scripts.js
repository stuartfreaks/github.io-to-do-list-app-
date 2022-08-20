function newItem() {

  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  //Alert for blank form

  if (inputValue === '') {
      alert("You must write something!");
  } else {
      $('#list').append(li);
  }

  //Cross items off the to do list

  function crossOut() {
      li.toggleClass("strike");
  }
  li.on("dblclick", crossOut);

  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode("X"));
  li.append(crossOutButton);

  function deleteListItem() {
      li.addClass("delete")
  }
  crossOutButton.on("click", deleteListItem);

  $('#list').sortable();

}