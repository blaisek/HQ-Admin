(function(){
    "use strict";
    $('[data-toggle="sidebar"]').click(function(e){
        e.preventDefault();
        $('.app').toggleClass('sidebar-toggled');
    })
})();