var grpc = require("@grpc/grpc-js")
var protoLoader = require("@grpc/proto-loader")
var PROTO_PATH = __dirname + "/protos/sheep.proto"
var packageDefinition = protoLoader.loadSync(
  PROTO_PATH
)

var movies_proto = grpc.loadPackageDefinition(packageDefinition).sheep

var data = [
  {
    sheepType:"adult",

  },
  {
    SheepNumber:"",

  },
  {
    sheepLocation:"dublin",



function getData(call,callback){
for (var i=0;i<data.length;i++){
call.write({
sheepType:data[i].sheepType,
})
}
call.end()

function getData(call,callback){
for (var i=0;i<data.length;i++){
call.write({
sheepNumber:data[i].SheepNumber,
})
}
call.end()

function getData(call,callback){
for (var i=0;i<data.length;i++){
call.write({
sheepLocation:data[i].SheepLocation,
})
}
call.end()


var server = new grpc.Server()
server.addService(sheep_proto.sheepService.service,{getData;getData})
server.bindAsync("0.0.0.0:40000", grpc.ServerCredentials.createInsecure(), function() {
  server.start()
})
}
