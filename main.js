$(function() {
  const user = firestore.collection("user");
  getData();
  $("#submit").on("click", function() {
    firestore.collection('user').doc($("#name").val()).set({
      name: $("#name").val(),
      from: $("#from").val(),
      age: $("#age").val(),
    }).then(() => {
      getData();
    });
  });
  function getData() {
    user.get().then((docs) => {
      docs.forEach((doc) => {
        $("#datas").append("<li>" + doc.data().name + "</li>");
      });
    });
  }
});