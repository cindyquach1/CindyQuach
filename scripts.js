
function setup() {
  $(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideToggle("slow");
    });
  });

  
  $(document).ready(function(){
    $("#flip2").click(function(){
      $("#panel2").slideToggle("slow");
    });
  });

  $(document).ready(function(){
    $("#flip3").click(function(){
      $("#panel3").slideToggle("slow");
    });
  });

  $(document).ready(function(){
    $("#flip4").click(function(){
      $("#panel4").slideToggle("slow");
    });
  });
  $(document).ready(function(){
    $("#flip5").click(function(){
      $("#panel5").slideToggle("slow");
    });
  });

  $(document).ready(function(){
    $("#flip").mouseover(function(){
        $("#flip").css('cursor', 'pointer');
        $("#flip").css("background-color", "lightblue");
    });
    $("#flip").mouseout(function(){
        $("#flip").css("background-color", "white");
    });
  });

  $(document).ready(function(){
    $("#flip2").mouseover(function(){
        $("#flip2").css('cursor', 'pointer');
        $("#flip2").css("background-color", "lightblue");
    });
    $("#flip2").mouseout(function(){
      $("#flip2").css("background-color", "white");
    });
  });

  $(document).ready(function(){
    $("#flip3").mouseover(function(){
        $("#flip3").css('cursor', 'pointer');
        $("#flip3").css("background-color", "lightblue");
    });

    $("#flip3").mouseout(function(){
        $("#flip3").css("background-color", "white");
    });
  });

  $(document).ready(function(){
    $("#flip4").mouseover(function(){
        $("#flip4").css('cursor', 'pointer');
        $("#flip4").css("background-color", "lightblue");
    });

    $("#flip4").mouseout(function(){
        $("#flip4").css("background-color", "white");
    });
  });


  $(document).ready(function(){
    $("#flip5").mouseover(function(){
        $("#flip5").css('cursor', 'pointer');
        $("#flip5").css("background-color", "lightblue");
    });

    $("#flip5").mouseout(function(){
        $("#flip5").css("background-color", "white");
    });
  });
}

