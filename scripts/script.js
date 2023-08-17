$(document).ready(function () {


  var decorative_overlay_clicked = 0;
  var cover_layer_clicked = 0;
  var inner_cushion_layer_clicked = 0;
  var electrode_circuit_clicked = 0;
  var skin_contact_layer_clicked = 0;
  var delivery_liner_clicked = 0;



  $(".main-categories").click(function () {
    $(".main-categories").css('color', '#0c203e');
    $(this).css('color', '#e1523d');
    $(".child-layer").hide()
    $("#deco_arrow_pressed").hide()
    $("#deco_arrow_normal").show()
    $("#cover_arrow_pressed").hide()
    $("#cover_arrow_normal").show()
    $("#inner_cushion_arrow_pressed").hide()
    $("#inner_cushion_arrow_normal").show()
    $("#electrode_circuit_arrow_pressed").hide()
    $("#electrode_circuit_arrow_normal").show()
    $("#skin_contact_arrow_pressed").hide()
    $("#skin_contact_arrow_normal").show()
    $("#delivery_liner_arrow_pressed").hide()
    $("#delivery_liner_arrow_normal").show()
  });

  $(".child-element").click(function () {
    $(".child-element").css('color', '#0c203e');
    $(this).css('color', '#e1523d');
  });

  $("#decorative_overlay").click(function () {
    cover_layer_clicked = 0;
    inner_cushion_layer_clicked = 0;
    electrode_circuit_clicked = 0;
    skin_contact_layer_clicked = 0;
    delivery_liner_clicked = 0;
    decorative_overlay_clicked++;
    // $("#child_decorative_overlay").show()
    // $(".value-statement").hide()
    // $("#value_statements_block").show()

    if (decorative_overlay_clicked % 2 == 0) {
      $("#child_decorative_overlay").hide()
      $("#deco_arrow_pressed").hide()
      $("#deco_arrow_normal").show()


    }
    else {
      $("#child_decorative_overlay").show()
      $("#deco_arrow_pressed").show()
      $("#deco_arrow_normal").hide()
    }
  });

  $("#decorative_overlay_options").click(function () {
    cover_layer_clicked = 0;
    inner_cushion_layer_clicked = 0;
    electrode_circuit_clicked = 0;
    skin_contact_layer_clicked = 0;
    delivery_liner_clicked = 0;
    decorative_overlay_clicked++;

    // $("#child_decorative_overlay").show()
    // $(".value-statement").hide()
    // $("#value_statements_block").show()
    if (decorative_overlay_clicked % 2 == 0) {
      $("#child_decorative_overlay").hide()
      $("#deco_arrow_pressed").hide()
      $("#deco_arrow_normal").show()


    }
    else {
      $("#child_decorative_overlay").show()
      $("#deco_arrow_pressed").show()
      $("#deco_arrow_normal").hide()
    }
  });


  $("#cover_layer").click(function () {
    decorative_overlay_clicked = 0;
    inner_cushion_layer_clicked = 0;
    electrode_circuit_clicked = 0;
    skin_contact_layer_clicked = 0;
    delivery_liner_clicked = 0;
    cover_layer_clicked++;
    // $("#child_cover_layer").show()
    // $(".value-statement").hide()
    // $("#value_statements_block").show()


    if (cover_layer_clicked % 2 == 0) {
      $("#child_cover_layer").hide()
      $("#cover_arrow_pressed").hide()
      $("#cover_arrow_normal").show()


    }
    else {
      $("#child_cover_layer").show()
      $("#cover_arrow_pressed").show()
      $("#cover_arrow_normal").hide()
    }

  });
  $("#cover_layer_options").click(function () {
    cover_layer_clicked++;
    decorative_overlay_clicked = 0;
    inner_cushion_layer_clicked = 0;
    electrode_circuit_clicked = 0;
    skin_contact_layer_clicked = 0;
    delivery_liner_clicked = 0;

    if (cover_layer_clicked % 2 == 0) {
      $("#child_cover_layer").hide()
      $("#cover_arrow_pressed").hide()
      $("#cover_arrow_normal").show()
    }
    else {
      $("#child_cover_layer").show()
      $("#cover_arrow_pressed").show()
      $("#cover_arrow_normal").hide()
    }
  });

  $("#inner_cushion_layer").click(function () {
    decorative_overlay_clicked = 0;
    cover_layer_clicked = 0;
    electrode_circuit_clicked = 0;
    skin_contact_layer_clicked = 0;
    delivery_liner_clicked = 0;
    inner_cushion_layer_clicked++;
    if (inner_cushion_layer_clicked % 2 == 0) {
      $("#child_inner_cushion_layer").hide()
      $("#inner_cushion_arrow_pressed").hide()
      $("#inner_cushion_arrow_normal").show()
    }
    else {
      $("#child_inner_cushion_layer").show()
      $("#inner_cushion_arrow_pressed").show()
      $("#inner_cushion_arrow_normal").hide()
    }


  });
  $("#inner_cushion_layer_options").click(function () {
    decorative_overlay_clicked = 0;
    cover_layer_clicked = 0;
    electrode_circuit_clicked = 0;
    skin_contact_layer_clicked = 0;
    delivery_liner_clicked = 0;
    inner_cushion_layer_clicked++;
    if (inner_cushion_layer_clicked % 2 == 0) {
      $("#child_inner_cushion_layer").hide()
      $("#inner_cushion_arrow_pressed").hide()
      $("#inner_cushion_arrow_normal").show()
    }
    else {
      $("#child_inner_cushion_layer").show()
      $("#inner_cushion_arrow_pressed").show()
      $("#inner_cushion_arrow_normal").hide()
    }
  });


  $("#electrode_circuit").click(function () {
    decorative_overlay_clicked = 0;
    cover_layer_clicked = 0;
    inner_cushion_layer_clicked = 0;
    skin_contact_layer_clicked = 0;
    delivery_liner_clicked = 0;
    electrode_circuit_clicked++;
    if (electrode_circuit_clicked % 2 == 0) {
      $("#child-electrode-circuit").hide()
      $("#electrode_circuit_arrow_pressed").hide()
      $("#electrode_circuit_arrow_normal").show()
    }
    else {
      $("#child-electrode-circuit").show()
      $("#electrode_circuit_arrow_pressed").show()
      $("#electrode_circuit_arrow_normal").hide()
    }
  });

  $("#electrode_circuit_options").click(function () {
    electrode_circuit_clicked++;
    decorative_overlay_clicked = 0;
    cover_layer_clicked = 0;
    inner_cushion_layer_clicked = 0;
    skin_contact_layer_clicked = 0;
    delivery_liner_clicked = 0;
    if (electrode_circuit_clicked % 2 == 0) {
      $("#child-electrode-circuit").hide()
      $("#electrode_circuit_arrow_pressed").hide()
      $("#electrode_circuit_arrow_normal").show()
    }
    else {
      $("#child-electrode-circuit").show()
      $("#electrode_circuit_arrow_pressed").show()
      $("#electrode_circuit_arrow_normal").hide()
    }
  });


  $("#skin_contact_layer").click(function () {
    decorative_overlay_clicked = 0;
    cover_layer_clicked = 0;
    inner_cushion_layer_clicked = 0;
    electrode_circuit_clicked = 0;
    delivery_liner_clicked = 0;
    skin_contact_layer_clicked++;
    if (skin_contact_layer_clicked % 2 == 0) {
      $("#child_skin_contact_layer").hide()
      $("#skin_contact_arrow_pressed").hide()
      $("#skin_contact_arrow_normal").show()
    }
    else {
      $("#child_skin_contact_layer").show()
      $("#skin_contact_arrow_pressed").show()
      $("#skin_contact_arrow_normal").hide()
    }
  });
  $("#skin_contact_layer_options").click(function () {
    skin_contact_layer_clicked++;
    decorative_overlay_clicked = 0;
    cover_layer_clicked = 0;
    inner_cushion_layer_clicked = 0;
    electrode_circuit_clicked = 0;
    delivery_liner_clicked = 0;
    if (skin_contact_layer_clicked % 2 == 0) {
      $("#child_skin_contact_layer").hide()
      $("#skin_contact_arrow_pressed").hide()
      $("#skin_contact_arrow_normal").show()
    }
    else {
      $("#child_skin_contact_layer").show()
      $("#skin_contact_arrow_pressed").show()
      $("#skin_contact_arrow_normal").hide()
    }
  });

  $("#delivery_liner_layer").click(function () {
    delivery_liner_clicked++;
    decorative_overlay_clicked = 0;
    cover_layer_clicked = 0;
    inner_cushion_layer_clicked = 0;
    electrode_circuit_clicked = 0;
    skin_contact_layer_clicked = 0;
    if (delivery_liner_clicked % 2 == 0) {
      $("#child_delivery_liner").hide()
      $("#delivery_liner_arrow_pressed").hide()
      $("#delivery_liner_arrow_normal").show()
    }
    else {
      $("#child_delivery_liner").show()
      $("#delivery_liner_arrow_pressed").show()
      $("#delivery_liner_arrow_normal").hide()
    }
  });
  $("#delivery_liner_options").click(function () {
    delivery_liner_clicked++;
    decorative_overlay_clicked = 0;
    cover_layer_clicked = 0;
    inner_cushion_layer_clicked = 0;
    electrode_circuit_clicked = 0;
    skin_contact_layer_clicked = 0;
    if (delivery_liner_clicked % 2 == 0) {
      $("#child_delivery_liner").hide()
      $("#delivery_liner_arrow_pressed").hide()
      $("#delivery_liner_arrow_normal").show()
    }
    else {
      $("#child_delivery_liner").show()
      $("#delivery_liner_arrow_pressed").show()
      $("#delivery_liner_arrow_normal").hide()
    }
  });

  $("#close_button").click(function () {
    $("#modal").hide()
  });

  $("#close_button_mobile").click(function () {
    $("#modal_mobile").hide()
  });

  $("#close_icon").click(function () {
    $("#modal").hide()
  });

  $("#close_icon_mobile").click(function () {
    $("#modal_mobile").hide()
  });

  // $("#cover_layer").css("pointer-events", "none");


  // $("#instructions").click(function () {
  //   $("#modal").show()
  // });

});


