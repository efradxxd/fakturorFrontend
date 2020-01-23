$("button.search").click(function() {
   /* $(document).ready(function(){ */
    /*setTimeout(() => { */
      
      $("div.content").addClass("searching");
      $("div.img").addClass("searching");
      $("div.button-search").addClass("searching");
      $("img.logo").addClass("searching");
      $("div.input").addClass("searching");
      $("input.search ").addClass("searching");
      $("div.details").removeClass("show");
    /* }, 3000); */
  });


  $("img.logo").click(function() {
          $("div.content").removeClass("searching");
          $("div.img").removeClass("searching");
          $("div.button-search").removeClass("searching");
          $("img.logo").removeClass("searching");
          $("div.input").removeClass("searching");
          $("input.search ").removeClass("searching");
      });
    
      $(".res-img").click(function() {
        $("div.details").addClass("show");
      });
      $("info h3.name").click(function() {
        $("div.details").addClass("show");
      });
      $("button.close").click(function() {
        $("div.details").removeClass("show");
      });
      