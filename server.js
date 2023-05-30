const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

var myid = [];
var idList = [];
var ceviridList=[];
var cevirmyid=[];
  app.post('/idList', (req, res) => {
    console.log("buraya girdi");
  
    if(idList.length == 0) {
      idList = req.body.idList;
      console.log("buraya girdi2");
    }
    else {
      myid = req.body.idList;
      console.log("buraya girdi3");
    }
    myid = myid.map(element => element - 101);
    io.emit('myid', myid);
    io.emit('idList', idList);
    console.log(idList);
    console.log(myid);
    ceviridList=idList;
    cevirmyid=myid;
    ceviridList= ceviridList.map(element=>element-101);
    cevirmyid= cevirmyid.map(element=>element+101);
    console.log("bu cevirilmiş myid "+ceviridList);
    console.log("bu cevirilmiş idlist "+cevirmyid);
    res.send('Data received');
  });

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});
app.get('/osavas', (req, res) => {
  res.sendFile(__dirname + '/public/online.html');
});
app.use('/public', express.static(__dirname + '/public'));

var kisi1;
var kisi2;
let userCount = 0;
let users = {};
var tıklananbos;
var tıklananbos2;
var bulunangemi;
var bulunangemi2;
let sira2=1;
let sira1=1;
io.on('connection', (socket) => {
  sira = Math.floor(Math.random() * 2) + 1;
  userCount++;
  users[socket.id] = { id: userCount };

  if (!kisi1) {
      kisi1 = socket.id;
      socket.emit('user-id', kisi1);
      console.log('1. kullanıcı katıldı: '+ kisi1);
  } else if (!kisi2) {
      kisi2 = socket.id;
      io.emit('start', 'start');
      io.to(kisi1).emit('myid', myid);
      io.to(kisi1).emit('idList', idList);
      io.to(kisi2).emit('cevirilmismyid', cevirmyid);
      io.to(kisi2).emit('cevirilmisidlist', ceviridList);
      console.log('2. kullanıcı katıldı: '+ kisi2);
      io.to(kisi1).emit('sira1',sira1);
  }
  // kullanıcının kimliğini kaydet
  users[socket.id].userId = socket.id === kisi1 ? 1 : 2;
  // tıklama işlemini dinle
  socket.on('pcbos1', (id) => {
    console.log(`${users[socket.id].userId} kullanıcı ${id} id'li boş kutuya tıkladı`);
    tıklananbos=id;
    tıklananbos = parseInt(tıklananbos) + 101;
    io.to(kisi2).emit('pcbosgirdi', tıklananbos);
    console.log("1.kullanıcı boşa tıkladı 2.ye geçti");
    io.to(kisi2).emit('sira2',sira2);
  });
  socket.on('pcsecti1', (id) => {
    console.log(`${users[socket.id].userId} kullanıcı ${id} id de bulunan gemiye tıkladı`);
    bulunangemi=id;
    bulunangemi = parseInt(bulunangemi) + 101;
    io.to(kisi2).emit('bulunangemi',bulunangemi)
    console.log("1.kullanıcı gemiye tıkladı tekrar hak kazandı");
    io.to(kisi1).emit('sira1',sira1);
  });
  socket.on('pcbos2', (id) => {
    console.log(`${users[socket.id].userId} kullanıcı ${id} id'li boş kutuya tıkladı`);
    tıklananbos2=id;
    tıklananbos2 = parseInt(tıklananbos2) + 101;
    io.to(kisi1).emit('pcbosgirdi2', tıklananbos2);
    console.log("2.kullanıcı boşa tıkladı 1.ye geçti");
    io.to(kisi1).emit('sira1',sira1);
  });
  socket.on('pcsecti2', (id) => {
    console.log(`${users[socket.id].userId} kullanıcı ${id} id de bulunan gemiye tıkladı`);
    bulunangemi2=id;
    bulunangemi2 = parseInt(bulunangemi2) + 101;
    io.to(kisi1).emit('bulunangemi2',bulunangemi2);
    console.log("2.kullanıcı gemiye tıkladı tekrar hak kazandı");
    io.to(kisi2).emit('sira2',sira2);
  });
  socket.on('tekrarla1', (id)=>{
    io.to(kisi1).emit('sira1',sira1);
  });
  socket.on('tekrarla2', (id)=>{
    io.to(kisi2).emit('sira2',sira2);
  });
  socket.on('oyuncubitirdi1',(kalangemi1)=>{
    console.log("1.oyuncu bitti");
    io.to(kisi1).emit('oyuncukazandi1',kalangemi1);
    io.to(kisi2).emit('oyuncukaybetti2');
  });
  socket.on('oyuncubitirdi2',(kalangemi2)=>{
    console.log("2.oyuncu bitti");
    io.to(kisi2).emit('oyuncukazandi2',kalangemi2);
    io.to(kisi1).emit('oyuncukaybetti1');
  });
  var knt=0;
  socket.on('oyuncu1kazandi',function(){
    knt=1;
  });
  socket.on('oyuncu2kazandi',function(){
    knt=1;
  });
  socket.on('oyuncu1kaybetti',function(){
    knt=1;
  });
  socket.on('oyuncu2kaybetti',function(){
    knt=1;
  });
  socket.on('disconnect', () => {
      if (socket.id == kisi1) {
        io.emit('oyuncupes1',(knt));
          kisi1 = null;
          console.log('1. kullanıcı ayrıldı: '+ socket.id);
          knt=0;
      } else if (socket.id == kisi2) {
        io.emit('oyuncupes1',(knt));
          kisi2 = null;
          console.log('2. kullanıcı ayrıldı: '+ socket.id);
          knt=0;
      }
      myid=[];
      idList=[];
      ceviridList=[];
      cevirmyid=[];
      // kullanıcıyı listeden sil
      delete users[socket.id];
  });
});
server.listen(process.env.PORT || 3000, () => {
  console.log('listening on *:3000');
});