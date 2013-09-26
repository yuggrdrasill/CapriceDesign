require.config({
  shim:{
    'jquery':{
      exports: '$'
    },
    'easing':{
      deps:['jquery']
    },
    'scrolltopcontrol':{
      deps:['jquery']
    },
    'glide':{
      deps:['jquery']
    },
    'autoKana':{
      deps:['jquery']
    },
    'validate':{
      deps:['jquery']
    },
    'validateLocalizeMessage':{
      deps:['jquery','validate']
    },
    'additionals':{
      deps:['jquery','validate']
    }
  } ,
    paths: {
        jquery: '../bower_components/jquery/jquery',
        easing: '../vendor/jquery.easing.1.3',
        fakeConsole: '../vendor/fakeConsole',
        autoKana: '../vendor/jquery.autoKana',
        validate: '../vendor/jquery.validate',
        validateLocalizeMessage: '../vendor/localization/messages_ja',
        additionals: '../vendor/additional-methods',
        scrolltopcontrol: '../vendor/scrolltopcontrol',
        glide: '../vendor/jquery.glide.min',
    }
})

require(['jquery'
  , 'fakeConsole'
  , 'nav'
  , 'easing'
  , 'glide'
  , 'autoKana'
  , 'validate'
  , 'validateLocalizeMessage'
  , 'additionals'
  , 'scrolltopcontrol'], function ($,nav) {
    'use strict';
    $(function(){
      // images slider
      $('.slider').glide({
        autoplay:5000,
        arrows: 'none',
        nav:''
      });
      
      $.fn.autoKana('#fullname', '#furigana');
      $('#contact-form').validate({
        rules: {
          contactCategory: "required",
          contactBody: {
            required: true,
            maxlength: 1000,
          },
          fullname: {
            required: true,
            maxlength: 100
          },
          furigana: {
            required: true,
            maxlength: 200
          },
          email: {
            required: true,
            email: true
          },
        },
        messages:{
          furigana:"すべてひらがなで入力してください"
        },
      });
    });
  });
