Introduction
============

**Hi ChatApp Front-End** -- is a chat application front-end. It is functional and interface chat application interface and ready to connect with back-end. It is responsive because it is based on **[Bootstrap 3](https://github.com/twbs/bootstrap)** framework. Highly customizable and easy to use. Fits many screen resolutions from small mobile devices to large desktops. Check out the live preview now and see for yourself.

**Time Spent:** 2+4+2 = 8 Hours

**For Production** It will require a integeration with backend.

**If I had more Time** so as a front end point of view, I wanted to develop remember me, registeration, recover account page and more interactive chat page.

## Functionilites
- Login Page ( username/password : admin/admin)
- Interactive Chat Page with logout
- Autoscrolling on sending/recieving messages.
- Message sending
- Recieve Message - method available in source code i.e receiveBlock(username,message)
- hold the typed message till the logout
- well defined methods which may provide help for backend developer to develop fully functional chat application

**Unit Tests** I have developed the console based Unit Tests which I divided in terms of login page and chat page.
- runLoginPageUnitTests()
    - open the login.page and call the above method on the browser console.

- runChatPageUnitTests()
    - After successfull login, open the conversation.page and call the above method on the browser console.

## Login Page Unit Tests
- Empty Username
- Empty Password
- Incorrect Username
- Incorrect Password


## Chat Page Unit Tests
- Send Message
- Receive Message

**Note :** Only minimal theme files are in this theme which is require. However, further theme files may also be include.s

**Requirment [AdminLTE.IO](https://adminlte.io)**
