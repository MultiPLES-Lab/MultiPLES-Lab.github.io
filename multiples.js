var options = {
    valueNames: [ 'title', 'press', 'author', 'keyword']
  };
  var userList1 = new List('filtered-list1', options);
  var userList2 = new List('filtered-list2', options);
  var userList3 = new List('filtered-list3', options);
  var userList4 = new List('filtered-list4', options);
  var userList5 = new List('filtered-list5', options);
  var userList6 = new List('filtered-list6', options);
  
  $('#search-field').on('keyup', function() {
    var searchString = $(this).val();
    userList1.search(searchString);
    userList2.search(searchString);
    userList3.search(searchString);
    userList4.search(searchString);
    userList5.search(searchString);
    userList6.search(searchString);
  });