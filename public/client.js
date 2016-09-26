// $(function() {
//
//   $(".messageForm").submit((event) => {
//     event.preventDefault();
//     let userMsg = $('.messageInput').val()
//
//     socket.emit('send message', {
//       message: userMsg
//     });
//     $('.messageInput').val("")
//   });
//
//   socket.on('send message', (message) => {
//     $('.messages').append(`<li>${message.message}</li>`)
//   });
// });
console.log("WE are in CLIENT")
var socket = io();

var webrtc = new SimpleWebRTC({
    // the id/element dom element that will hold "our" video
    localVideoEl: 'localVideo',
    // the id/element dom element that will hold remote videos
    remoteVideosEl: 'remoteVideos',
    // immediately ask for camera access
    autoRequestMedia: true
});

webrtc.on('connection', function () {
    // you can name it anything
    webrtc.joinRoom('your awesome room name');
});

// we have to wait until it's ready
webrtc.on('readyToCall', function () {
    // you can name it anything
    webrtc.joinRoom('your awesome room name');
});
