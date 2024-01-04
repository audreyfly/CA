var grpc = require("@grpc/grpc-js")
var protoLoader = require("@grpc/proto-loader")
var PROTO_PATH = __dirname + "/protos/sheepService.proto"
var packageDefinition = protoLoader.loadSync(
  PROTO_PATH
)
var proto = grpc.loadPackageDefinition(packageDefinition).sheepService

var sheepService={
}

var clients={

}

var highestsheepService=0
var message=null
function makeSheepService(call){

  call.on('data',function(sheep){
    if(!(sheepService.name in clients)){
      clients[sheep.name]={
        name:sheep.name,
        call:call
      }
    }

if(!(name in sheepService)){
  sheepService[sheepservice.name]=0
}
sheepservice[sheepservice].name+=1
if(sheepservice.sheepservice  > highestsheepservice ||!message){
sheepservice=sheepservice.sheepService
response ="current highest sheepService is" +sheepservice.name +"with sheepservice of" +highestsheepserviceService
}

for(var client in clients){
  client[client].call.write(
    {
      userName:"",
      password:"",
      tagNumber:"",
      location,
      type:"",
  }
)
}

})

call.on (end,function(){
  call.end()
})

call.on("error",function(e){
  console.log(e)
})

}
var server=newgprc.Server()
server.addService(soilservice_proto.soilservice.service,{makesoilservice:soilService})
server.bindAsync("0.0.0.0:40000",gprcServerCredentials.createInsecure(),function(){
  server.start()
})









var server = new grpc.Server()
server.bindAsync("0.0.0.0:40000", grpc.ServerCredentials.createInsecure(), function() {
  server.start()
})
