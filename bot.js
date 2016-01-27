var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/cool guy/;  botRegexDL = /^\/DLD/i;botRegexSalt = /^\/salt/;botRegexRules = /^\/rules/
      botRegexAd=/^\/vance/;botRegexGTA = /^\/gta/; botRegexSC = /^\/SCH/i; botODB = /(.*\s+)(.*odb)(\s+.*)/i; botDuck = /^\/duck/;
      botRegexP = /^\/ROS/i;  botRegexTw = /^\/twitch/i; botRegexSb = /^\/sub/; botRegexSh = /^\/shrug/; botRegexWk = /^\/users/; botRegexCC = /^\/cc/;
      botRegexSD=/^\/schedule/; botRegexmaj=/^\/maj/; botRegexWP=/^\/welcome pack/; botRegexYT=/^\/yt/; botRegexHL=/^\/highlight rules/; botRegexDD=/^\/DL/;
      botRegexFYD1=/^\/fyd/; botRegexFYD=/^\/FYD/; botRegexCOD=/^\/cody/;  botRegexKEV=/^\/kevin/; botRegex4TH=/^\/4th down rules/;
      botRegexSiege = /^\/siege/;
      siege1 = 'https://i.groupme.com/350x419.png.adc8c73a6c1547e0a9e04320296329f8'; siege2 = 'https://i.groupme.com/1279x752.jpeg.aa5d0401e0df495bba4b4e09dc5a6bd7'
      siege3 = 'https://i.groupme.com/960x960.png.006e180e05d841c6a2962e844bf1e6fd';
  var teamAb = ["NE","NO","ARI","PHI","CLE","TEN","OAK","DAL","IND","SEA","CIN","PIT","JAC"
                ,"BAL","SD","DEN","MIN","ATL","KC","NYG","GB","DET","HOU","STL","CHI","CAR",
                "MIA","BUF","SF","WAS","NYJ","TB"]
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(cool());
    this.res.end();
  } 
  else if(request.text && botRegexDL.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/pm/team/"+request.text.substring(5,8)+"/depthchart");
    this.res.end();
  } 
  else if(request.text && botRegexSalt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgur.com/B5BSVqH.png");
    this.res.end();
  } 
  else if(request.text && botRegexAd.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.hackcollege.com/wp-content/uploads/2013/02/kno_advance.jpg");
    this.res.end();
  }
  else if(request.text && botRegexRules.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.reddit.com/r/PureMadden/comments/2zflir/rules/");
    this.res.end();
  } 
  else if(request.text && botRegexGTA.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/220x147.jpeg.a2dd2add32b14fff9e329535186d793c.large");
    this.res.end();
  } 
  else if(request.text && botRegexSC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/pm/team/"+request.text.substring(5,8)+"/schedule");
    this.res.end();
  }
  else if(request.text && botRegexP.test(request.text)) {
    this.res.writeHead(200);
    var req = request.text.substring(5,request.text.length);
    var rep = req.replace(/ /,"+");
    postMessage("http://daddyleagues.com/pm/players?name="+rep+"&position=all&team=all");
    this.res.end();
  }  

  else if(request.text && botRegexTw.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.twitch.tv/"+request.text.substring(8,request.text.length));
    this.res.end();
  } 
  else if(request.text && botRegexSb.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.reddit.com/r/puremadden");
    this.res.end();
  } 
  else if(request.text && botRegexSh.test(request.text)) {
    this.res.writeHead(200);
    postMessage("¯\\_(ツ)_/¯");
    this.res.end();
  } 
  else if(request.text && botRegexWk.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/spreadsheets/d/1kJqQWCq3RKiTrd4f71FFNKr-Y0ppJzjk0fSF0rP6Bto/edit?usp=sharing");
    this.res.end();
  } 
  else if(request.text && botODB.test(request.text)) {
    this.res.writeHead(200);
    postMessage("OBJ*");
    this.res.end();
  } 
  else if(request.text && botDuck.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://media3.giphy.com/media/YCseTHF2I6CCA/giphy.gif");
    this.res.end();
  }
  else if(request.text && botRegexCC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/851x1184.jpeg.330228901f684b0cb46cd1cef6953923");
    this.res.end();
  }
  else if(request.text && botRegexSD.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.daddyleagues.com/pm/schedules");
    this.res.end();
  }
    else if(request.text && botRegexmaj.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/481x360.gif.631cf814f7324b59a74f695b9f4f23dd");
    this.res.end();
  }
    else if(request.text && botRegexWP.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://imgur.com/a/jLCrY");
    this.res.end();
  }
    else if(request.text && botRegexYT.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/channel/UCvEO2R1EF6onhEHCA5fxDTA");
    this.res.end();
  }
    else if(request.text && botRegexHL.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.reddit.com/r/PureMadden/comments/40qg1d/how_to_send_in_highlights_updated_11216/");
    this.res.end();
  }
      else if(request.text && botRegexDD.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.daddyleagues.com/pm");
    this.res.end();
  }
    else if(request.text && botRegexFYD1.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/312x263.gif.8d2f0ad0fcfa48df957311f1b47b7c26");
    this.res.end();
  }
      else if(request.text && botRegexFYD1.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/312x263.gif.8d2f0ad0fcfa48df957311f1b47b7c26");
    this.res.end();
  }
     else if(request.text && botRegexCOD.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/158x218.png.d6ad70dc7324492fadf5eadc1a91740b");
    this.res.end();
  }
       else if(request.text && botRegexKEV.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/200x153.gif.fc847e3fcfc845e5a83996a608930fe0");
    this.res.end();
  }
       else if(request.text && botRegex4TH.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/790x88.png.f8e3790fa6c84096801fac3d57e76782");
    this.res.end();
  }
  else if(request.text && botRegexSiege.test(request.text)) {
    this.res.writeHead(200);
    if(0.6 >= Math.random() > 0.3)
      postMessage(siege1);
    else if(Math.random() >0.6)
      postMessage(siege3)
    else
      postMessage(siege2);
    this.res.end();
  }
  
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage(response) {
  var botResponse,options, body, botReq;

  botResponse = response

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


exports.respond = respond;
