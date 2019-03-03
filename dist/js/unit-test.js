var runLoginPageUnitTests = () => {

    usernameEmptyLoginTest();

    passwordEmptyLoginTest();

    usernameIncorrectLoginTest();

    passwordIncorrectLoginTest();

    }

var runChatPageUnitTests = () => {

    sendMessageUnitTest();

    receiveMessageUnitTest();

    }
/*
    Reusable Functions
*/


var usernameEmptyLoginTest = () => {
        console.log('===========================================');
        console.log('Unit Test Start');
        console.log('Username Empty Login');
        $('#username').val('');
        $('#btn-login').trigger('click');
        console.log('-------------------------------------------');

        if(
            $('#username').parent().hasClass('has-error') == true 
            && $('#username').parent().children('.help-block').hasClass('hidden') == false
            && $('#username').parent().children('.help-block').html() != ''
            && localStorage.getItem('chatAppUsername') == null
        ){
            console.log('>>> Empty Username login unit test : Pass');
        }else{
            console.log('>>> Empty Username login unit test : Fail');
        }
        console.log('-------------------------------------------');

        console.log('Unit Test End');
    }
    

var passwordEmptyLoginTest = () => {
        console.log('===========================================');
        console.log('Unit Test Start');
        console.log('Password Empty Login');
        $('#username').val('Admin');
        $('#password').val('');        
        $('#btn-login').trigger('click');
        console.log('-------------------------------------------');

        if(
            $('#password').parent().hasClass('has-error') == true 
            && $('#password').parent().children('.help-block').hasClass('hidden') == false
            && $('#password').parent().children('.help-block').html() != ''
            && localStorage.getItem('chatAppUsername') == null
        ){
            console.log('>>> Empty password login unit test : Pass');
        }else{
            console.log('>>> Empty password login unit test : Fail');
        }
        console.log('-------------------------------------------');

        console.log('Unit Test End');
    }


var usernameIncorrectLoginTest = () => {
        console.log('===========================================');
        console.log('Unit Test Start');
        console.log('Username Incorrect Login');
        $('#username').val('xyzuser');
        $('#password').val('dfsfsfd');

        $('#btn-login').trigger('click');
        console.log('-------------------------------------------');

        if(
            $('#username').parent().hasClass('has-error') == true 
            && $('#username').parent().children('.help-block').hasClass('hidden') == false
            && $('#username').parent().children('.help-block').html() != ''
            && localStorage.getItem('chatAppUsername') == null
        ){
            console.log('>>> Incorrect Username login unit test : Pass');
        }else{
            console.log('>>> Incorrect Username login unit test : Fail');
        }
        console.log('-------------------------------------------');

        console.log('Unit Test End');
    }

    
var passwordIncorrectLoginTest = () => {
    console.log('===========================================');
    console.log('Unit Test Start');
    console.log('Password Incorrect Login');
    $('#username').val('admin');
    $('#password').val('xyzzz');

    $('#btn-login').trigger('click');
    console.log('-------------------------------------------');

    if(
        $('#password').parent().hasClass('has-error') == true 
        && $('#password').parent().children('.help-block').hasClass('hidden') == false
        && $('#password').parent().children('.help-block').html() != ''
        && localStorage.getItem('chatAppUsername') == null
    ){
        console.log('>>> Incorrect password login unit test : Pass');
    }else{
        console.log('>>> Incorrect password login unit test : Fail');
    }
    console.log('-------------------------------------------');

    console.log('Unit Test End');
}

   
var sendMessageUnitTest = () => {
    console.log('===========================================');
    console.log('Unit Test Start');
    console.log('Send Message Test');
    prevMsgs = $('.direct-chat-msg').length;

    $('.txt-msg').val('How are you ali?');
    $('.btn-send').trigger('click');
    console.log('-------------------------------------------');

    if(
        prevMsgs < $('.direct-chat-msg').length
        && $('.txt-msg').val() == ''
    ){
        console.log('>>> Send Message unit test : Pass');
    }else{
        console.log('>>> Send Message unit test : Fail');
    }
    console.log('-------------------------------------------');

    console.log('Unit Test End');
}



var receiveMessageUnitTest = () => {
    console.log('===========================================');
    console.log('Unit Test Start');
    console.log('Receive Message Test');
    prevMsgs = $('.direct-chat-msg').length;
    receiveBlock('Ali Ahmed','I am fine.')
    console.log('-------------------------------------------');

    if(
        prevMsgs < $('.direct-chat-msg').length

    ){
        console.log('>>> Receive Message unit test : Pass');
    }else{
        console.log('>>> Receive Message unit test : Fail');
    }
    console.log('-------------------------------------------');

    console.log('Unit Test End');
}


