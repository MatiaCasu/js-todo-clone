$(function(){
  // stampa a schermo la lista
  var list = ["comprare la pasta", "pulire la stanza", "dare l'acqua alle piante", "fare la lavatrice"];
  var bodyList = $("ul.list");

  for (var i = 0; i < list.length; i++) {
    var bodyLi = $(".template > li").clone();
    bodyLi.prepend(list[i]);
    bodyList.append(bodyLi);
  }
  // stampa a schermo la lista


});
