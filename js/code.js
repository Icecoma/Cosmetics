var pattern_mail = "^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$";
$("li.ami").hover(function() {
    $(".menu_table").hide();
    curId = this.id;
    $("#" + curId + "_menu").show();
});
$("li.ami").mouseleave(function(e) {
    var div = $(".menu_table");
    if ((div.is(e.target) && (div.has(e.target).length === 0))) {
        $(".menu_table").hide();
    }
});

function inputFocus() {
    var currentInput = $(this);
    currentInput
        .removeClass('error')
        .removeClass('valid');
};
function inputFocusOut() {
    var currentInput = $(this);
    var currentInputType = currentInput[0].type;

    var currentInputId = currentInput[0].id;
    currentInput.removeClass('focus');

    if (currentInput[0].value.length > 0) {
        currentInput.addClass('valid');
    }

    switch (currentInputType) {
        case "text":
            if (currentInputId == "inputEmail") {
                if (currentInput[0].value.match(pattern_mail) == null) {
                    currentInput.addClass("error");
                    $(".inputEmail_errorArea").show();
                }
                else {
                    currentInput.removeClass('error').addClass('valid');
                    $(".inputEmail_errorArea").hide();
                    email = currentInput[0].value;
                }
            } else if (currentInputId == "inputName") {
                if (currentInput[0].value == "") {
                    currentInput.addClass("error");
                    $(".inputName_errorArea").show();
                } else {
                    currentInput.removeClass('error').addClass('valid');
                    $(".inputName_errorArea").hide();
                    firstName = currentInput[0].value;
                }
            } else if (currentInputId == "inputPhone") {
                if (currentInput[0].value == "") {
                    currentInput.addClass("error");
                    $(".inputPhone_errorArea").show();
                } else {
                    currentInput.removeClass('error').addClass('valid');
                    $(".inputPhone_errorArea").hide();
                    numberPhone = currentInput[0].value;
                }
            } else {
                if (currentInput[0].value != "") {
                    currentInputWrapper.addClass('valid');
                }
            }
            break;
    }
};
       
function switchAccessToSendBtn() {
    if (!( ($.trim($("#inputName").val()) == '') ||
        ($.trim($("#inputEmail").val()) == '') ||
           ($.trim($("#inputPhone").val()) == '') ||
        ($("input:checked").length == 0))) {
        $("#sendmsg").removeClass("disabled");
    } else {
        $("#sendmsg").addClass("disabled");
    }
};
$("input, select").on('input keyup change focusout', switchAccessToSendBtn);

$("#inputPhone").bind("change keyup input click", function() {
    if (this.value.match(/[^0-9]/g)) {
    this.value = this.value.replace(/[^0-9]/g, '');
    }
});
$('.checkbox span').click(function() {
    if ($('#inputCheck').is(':checked')){
        $('#inputCheck').attr('checked',false);
    } else {
        $('#inputCheck').attr('checked',true);
    }
});
$("#feedback").click(function() {
    $("#popup").show();
});
var hideDatePopup = function (e) {
    var div = $("#popup");
    if ((div.is(e.target) && (div.has(e.target).length === 0))) {
        $("#popup").hide();
    }
};
$(document).on('keydown', function(e){
    if(e.which === 27){ 
        $("#popup").hide();
    }
});
$(".close").click(function (e) {
    $("#popup").hide();
});
$(document).mouseup(function (e) {
    hideDatePopup(e);
});
$(document).bind('touchstart', function (e) {
    hideDatePopup(e);
});
$(window).on('scroll', function() {
  var scrollCoef = 0.0015;
  var top = $(window).scrollTop()
  $('.main_page').css({
    opacity: 1 - top * scrollCoef
  })
});
if (jQuery(window).width() < '599') {
    $(".hum_menu").click(function() {
        $(".all_menu_items").addClass("open");
        $(".hum_menu").hide();
        $(".escmobmenu").show();
        $("header").addClass("white");
    });
    $(".escmobmenu").click(function() {
        $(".all_menu_items").removeClass("open");
        $(".escmobmenu").hide();
        $(".hum_menu").show();
        $("header").removeClass("white");
    });
};
$("input")
        .focus(inputFocus)
        .focusout(inputFocusOut);
