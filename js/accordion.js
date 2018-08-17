$('#accordion h3').click(function(e) {

    e.preventDefault();
    var $this = $(this);
    var $thisdiv = $this.next();
    var $currenth3 = $("#accordion h3.active");
    var $currentdiv = $("#accordion div.active");

    
    if ($thisdiv.hasClass('active')) {
        $thisdiv.slideUp(400, function() {
            $this.removeClass('active');
            $thisdiv.removeClass('active');
        });
    } else if ($currenth3.length !== 0) {
        $currentdiv.slideUp(400, function() {
            $currenth3.removeClass('active');
            $currentdiv.removeClass('active');
            $thisdiv.slideDown(400, function() {
                $this.addClass('active');
                $thisdiv.addClass('active');
            });
        });
    } else {
        $thisdiv.slideDown(400, function() {
            $this.addClass('active');
            $thisdiv.addClass('active');
        });
    }
});
$('#accordion div').on('click', function(e) {
    e.preventDefault();
    $(this).slideUp(400, function() {
        $(this).removeClass('active');
        $('#accordion h3.active').removeClass('active');
    });
});