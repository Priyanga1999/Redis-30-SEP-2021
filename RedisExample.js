var redis=require('redis');
var client=redis.createClient();
client.on('connect',function()
{
    console.log("connected");
})

client.set('animal','tiger',function(err,result)
{
    if(err) throw err;
    console.log(result);
})
client.get('animal',function(err,result)
{
    if(err) throw err;
    console.log(result);
})

client.hmset('topic','bird','dove','flower','rose');
client.hgetall('topic',function(err,result)
{
    console.log(result);
})
client.rpush(['List','GREEN','YELLOW','BLACK'],function(err,res)
{
    console.log(res);
});
client.lrange('List',0,-1,function(err,res)
{
    console.log(res);
})
client.lpush(['List','BLUE','ORANGE','RED'],function(err,res)
{
    console.log(res);
});
client.lrange('List',0,-1,function(err,res)
{
    console.log(res);
})
client.sadd(['set','arun','priya','subhash','preethi','arun'],function(err,result)
{
    console.log(result);
});
client.smembers('set',function(rr,result)
{
    console.log(result);
})

client.exists('animal',function(err,result)
{
    if(result==1)
    {
        console.log("Exists");
    }
    else{
        console.log("Doesn't exist")
    }
})
client.set('status','active');
client.expire('status',5);
client.exists('status',function(err,result)
{
    if(result==1)
    {
        console.log("Exists");
    }
    else{
        console.log("Doesn't exist")
    }
})

client.set('workingDay',5,function()
{
    client.incr('workingDay',function(err,result)
    {
    console.log(result);
    })
})