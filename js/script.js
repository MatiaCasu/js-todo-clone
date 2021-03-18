$(function(){
  // Stampa a schermo la lista
  var list = ["comprare la pasta", "pulire la stanza", "dare l'acqua alle piante", "fare la lavatrice"];
  var bodyList = $("ul.list");

  for (var i = 0; i < list.length; i++) {
    var bodyLi = $(".template > li").clone();
    bodyLi.prepend(list[i]);
    bodyList.append(bodyLi);
  }
  // Stampa a schermo la lista

  // Aggiungi valore input alla lista tramite tasto invio
  $(".wrapper input").keydown(
    function(evento){
      if(evento.which == 13){
        var input = $(this).val();
        var bodyLi = $(".template > li").clone();

        bodyLi.prepend(input);
        $("ul.list").append(bodyLi);
        $(this).val("");
      }
    }

  );

  // /Aggiungi valore input alla lista tramite tasto invio


});
