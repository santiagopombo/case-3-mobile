(function() {
    'use strict';

    var $fileButton = $('.j-file');
    var $inputFile = $('.j-input-file');
    var $form = $('.j-form');
    var $previewImg = $('.j-preview');
    var $provider = $('.j-provider');

    $.get('/provider', function(data) {
        if (data.length) {
            $provider.text(data);
            $provider.parent().removeClass('g-hide');
        }
    });

    $fileButton.on('click', function() {
        $inputFile.trigger('click');
        return false;
    });

    $form.on('submit', function() {
        return false;
    });

    $inputFile.on('change', function(){
        readURL(this);
    });

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $previewImg.attr('src', e.target.result);
            };
            reader.readAsDataURL(input.files[0]);
        }
    }

}());