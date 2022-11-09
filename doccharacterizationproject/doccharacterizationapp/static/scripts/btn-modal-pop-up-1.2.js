//Banner pop-up
var modal = document.getElementById("myModalPopUp");
window.onload = function(){
    modal.style.display = "block";
}
var span = document.getElementsByClassName("close-popup")[0];
span.onclick = function(){
    modal.style.display = "none";
}

// Video Modal Pop-up
$(document).ready(function () {
    $('#myModalVideo').modal({
        modal: 'show',
        backdrop: 'static',
        keyboard: false
    });                

    var counter = 10;
    var interval = setInterval(function () {
        counter--;
        $('#countdown').html("Opsaun Taka (x) Sei Disponível Iha " + counter + " Segundu.");                    

        $('#countdown').click(function (e) {
            e.preventDefault();
            e.stopPropagation();
        });

        if (counter == 0) {
            $('#countdown').hide();
            clearInterval(interval);
        }
    }, 1000);
    $('body').bind('mousedown keydown', function (event) {
        counter = 10;
    });

    setTimeout(function () {
        $('#modalButton').show();
    }, 10000);
});