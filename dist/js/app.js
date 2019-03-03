$(function () {
    
    console.log("Hi ChatApp Ready.");
    checkLogin();
});

/*
    Reusable Functions
*/
var login = () => {
    
    clearLoginErrors();

    let username = $('#username').val();
    let password = $('#password').val();
    console.log(username+" "+password);
    let validate = validateLogin(username,password);

    if(validate.get('status') == true){
        console.log('Status : True '+validate.get('msg'));
        if(username != 'admin'){
            let field  = 'username';
            let msg  = 'Incorrect username';
            showErrorMsg(field,msg);
    
        }else if(password != 'admin'){
            let field  = 'password';
            let msg  = 'Incorrect password';
            showErrorMsg(field,msg);
        }else{
            localStorage.setItem('chatAppUsername','admin');
            console.log("Login successfully.");
            checkLogin();

        }

    }else{
        console.log('Status : False '+validate.get('msg'));
        let field  = validate.get('field');
        let msg  = validate.get('msg');
        showErrorMsg(field,msg);
    }

    
   }
var checkLogin = () => {
    //let chatAppData = new Map();
    let chatAppUsername =  localStorage.getItem('chatAppUsername');
    if(chatAppUsername != null){
            console.log("Login successfully.");
            console.log(window.location.href);
            if( window.location.href.indexOf("login.html") > -1){
                window.location.href = "conversation.html";
            }
            let chatInput = localStorage.getItem('chatInput');

            if(chatInput !=null && chatInput != ''){
                $('.txt-msg').val(chatInput);
            }

       }else{
        if( window.location.href.indexOf("conversation.html") > -1){
            window.location.href = "login.html";
        }
    }
 
    }
var showErrorMsg = (field,msg) => {
    console.log('Show Error Msg');
    $(stringToId(field)).parent().addClass('has-error');
    $(stringToId(field)).parent().children('.help-block').removeClass('hidden');
    $(stringToId(field)).parent().children('.help-block').html(msg);
    }
var stringToId = (str) => {
    return '#'+str;
    }
var doLogin = (username, password) => {
    console.log("Hello World..!");
   }

var validateLogin = (username, password) => {
    let resp = new Map();
    if(username == ""){
        console.log('username cannot be empty.');
        resp.set('msg', 'username cannot be empty.');
        resp.set('field', 'username');
        resp.set('status', false);
    }else if(password == ""){
        console.log("password cannot be empty.");
        resp.set('field', 'password');
        resp.set('msg', 'password cannot be empty.');
        resp.set('status', false);
    }else{
        console.log("validate success");
        resp.set('msg', 'validate success');
        resp.set('status', true);
    }

    return resp;

   }

var clearLoginErrors = () => {
    console.log('Clear Errors');
    $('#login-form .form-group').removeClass('has-error');
    $('#login-form .help-block').html('');
    $('#login-form .help-block').addClass('hidden');
   }

var logout = () => {
    console.log('Logout clearing');
    localStorage.clear();
    window.location.href = "login.html";
}

var sendMsg = () => {
    
    
    let textMsg = $('.txt-msg').val();
    if(textMsg != ""){
        localStorage.setItem('chatInput','');
        console.log(textMsg);
        senderBlock('Admin',textMsg);
        $('.txt-msg').val('');    
    }

    
   }

var receiveBlock = (username, msg) => {
    html = '';
    html += '<div class="direct-chat-msg">';
    html += '<div class="direct-chat-info clearfix">';
    html +=  '<span class="direct-chat-name pull-left">'+username+'</span>';
    html +=  '<span class="direct-chat-timestamp pull-right">23 Jan 2:00 pm</span>';
    html +=  '</div>';
    html +=  '<img class="direct-chat-img" src="dist/img/user1-128x128.jpg" alt="Message User Image">';
    html +=  '<div class="direct-chat-text">'+msg;
    html +=  '</div></div>'
    $('.direct-chat-messages').append(html);
    newMsgScroll();
    }

var senderBlock = (username, msg) => {
    html = '';
    html += '<div class="direct-chat-msg right">';
    html += '<div class="direct-chat-info clearfix">';
    html +=  '<span class="direct-chat-name pull-right">'+username+'</span>';
    html +=  '<span class="direct-chat-timestamp pull-left">23 Jan 2:00 pm</span>';
    html +=  '</div>';
    html +=  '<img class="direct-chat-img" src="dist/img/user8-128x128.jpg" alt="Message User Image">';
    html +=  '<div class="direct-chat-text">'+msg;
    html +=  '</div></div>'
    $('.direct-chat-messages').append(html);
    newMsgScroll();
    }
var newMsgScroll = () => {
    $(".direct-chat-messages").animate({
        scrollTop: $(".direct-chat-messages-scroll-to").position().top*10
    }, 1000);

    }
/*
    Actions
*/

$('#btn-login').on('click',login);

$('#btn-logout').on('click',logout);

$('.btn-send').on('click',sendMsg); 

$('.txt-msg').keypress(function (e) {
    let textMsg = $('.txt-msg').val();
    localStorage.setItem('chatInput', textMsg);
    var key = e.which;
    console.log(key);
    if(key == 13)  // the enter key code
     {
        sendMsg();
        return false;  
     }
   }); 


