var readlineSync = require('readline-sync')
var grpc = require("@grpc/grpc-js")
var protoLoader = require("@grpc/proto-loader")
var PROTO_PATH = __dirname + "/protos/sheepService.proto"

var packageDefinition = protoLoader.loadSync(PROTO_PATH)
var proto = grpc.loadPackageDefinition(packageDefinition).sheepService
var client = new soilservice_proto.SoilService("0.0.0.0:40000", grpc.credentials.createInsecure());

var call=client.sheepservice()
call.on('data',function(resp){
  console.log(resp.name) ( [data][username,password,locatiion,tagNumber,type] )
  })

call.on("end",function(){
  })

  call.on("error",function(e){
    console.log("an error occurred")
  })

  varuser=readlineSync.question("what is the name?")

  console.log("what is the location?(q to quit)")
  var rl=readLine.creatInterface
  rl = readline.createInterface(process.stdin, process.stdout);

    rl.on('line',function (line){
       switch(line.trim()) {
      case 'hello':
        console.log('world!');
        break;
      default:
        console.log('What is your userName `' + line.trim() + '`');
        break;
    }
    rl.setPrompt(prefix, prefix.length);
    rl.prompt();
  }).on('close', function() {
    console.log('Please enter your password ');
    process.exit(0);
  });
  console.log(prefix + 'What service do you require .');
  rl.setPrompt(prefix, prefix.length);
  rl.prompt();

    
