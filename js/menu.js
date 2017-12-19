(function () {
    $(document).ready(function(){

        // click from index
        $('.salad').click(function(){
            localStorage.setItem('menuTab' , 'page1.html');
        });
        $('.soup').click(function(){
            localStorage.setItem('menuTab' , 'page2.html');
        });
        $('.hot').click(function(){
            localStorage.setItem('menuTab' , 'page3.html');
        });
        $('.pizza').click(function(){
            localStorage.setItem('menuTab' , 'page4.html');
        });
        $('.sushi').click(function(){
            localStorage.setItem('menuTab' , 'page5.html');
        });
        $('.drinks').click(function(){
            localStorage.setItem('menuTab' , 'page6.html');
        });

        // Start page
        (function () {
            if (localStorage.getItem('menuTab')){
                $.ajax({
                    url: localStorage.getItem('menuTab'),
                    cache: false,
                    success: function(html){
                        $("#content").html(html);
                    }
                });
            }else {
                $.ajax({
                    url: "page1.html",
                    cache: false,
                    success: function(html){
                        $("#content").html(html);
                    }
                });
            }

        })()

        //click in menu

        $('.salad').click(function(){
            $.ajax({
                url: "page1.html",
                cache: false,
                success: function(html){
                    $("#content").html(html);
                }
            });
        });

        $('.soup').click(function(){
            $.ajax({
                url: "page2.html",
                cache: false,
                success: function(html){
                    $("#content").html(html);
                }
            });
        });

        $('.hot').click(function(){
            $.ajax({
                url: "page3.html",
                cache: false,
                success: function(html){
                    $("#content").html(html);
                }
            });
        });

        $('.pizza').click(function(){
            $.ajax({
                url: "page4.html",
                cache: false,
                success: function(html){
                    $("#content").html(html);
                }
            });
        });

        $('.sushi').click(function(){
            $.ajax({
                url: "page5.html",
                cache: false,
                success: function(html){
                    $("#content").html(html);
                }
            });
        });

        $('.drinks').click(function(){
            $.ajax({
                url: "page6.html",
                cache: false,
                success: function(html){
                    $("#content").html(html);
                }
            });
        });

    });
})()