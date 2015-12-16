
//我不去想是否能够成功，既然选择了远方，便只顾风雨兼程
/*
最最重要的是，如果运气并不是所有因素，那么我为所有因素而奋斗就是有意义的，因为运气既不是不存在，也不是我能够控制的东西。所以我只能为运气之外的东西而努力，如果你付出了这一切，那么我认为你就会更有可能成功，如果再有点儿运气，那就更好了。在我看来，运气只是让你的努力翻倍的一个倍数，但绝不是决定或者导致你失败的最主要原因。

过，我后来发现了独立游戏研发社区，当时有很多人做的不错，尤其是图片中的几位，他们在各自的领域都有突出的地方，然后我就在想，我拿什么可以比他们还与众不同呢？他们各有所长，他们去各种节日和会展，获得了不错的推广。这时候我就在想，为什么不去展会呢？我该如何做好呢？

在 2008 年的 Epic Games 举办了因此竞赛活动，四年前这个活动就已经开始了，所以我晚去了四年。但我的确用虚幻引擎，也会用它来做游戏，所以我决定做一款让人们想不到的游戏，给所有人带来惊喜，2009 年我做了一个《Hazard：The Journey of Life》的游戏，里面融入了我此前很多游戏的元素，我认为要想做到与众不同，视觉方面是人们看到的第一印象，不过我依旧用之前的引擎，因为当时也不会太复杂的东西

对于技术来说，如果我什么都不做，那什么也不会发生，因为我甚至都没有尝试过。但如果你做了某件事，事情才可能好转，可能是好的，也可能是坏的，但我没法预测，所有就需要努力抓住每一个机会。其中的一个机会就是和 Epic 公司的 Mike Capps 聊天，当时展示完了的时候，我把名片递给他，做了自我介绍和项目介绍，我当时问，“对于独立开发者们，你有什么解决方案吗？”他把同时 Mark Rein 介绍给我认识，他自己或许也曾经有过我这样的经历，当时和他的对话就是这个项目的开始。

然而不幸的是，我的游戏获得了非常好的评价，但是并没有被 2009 年的 IGF 提名。我在想，什么才能让我与众不同？我到底还缺什么，为什么不能被选上？我回顾了《Sense Of Wonder Night》的选拔赛，当时有 66 个项目入围，但只有 11 个被选择，基本上是十分一致的概率，但 Epic 似乎并不希望这么一款不符合惯例的游戏出现，IGF 是用来展示特殊游戏的，我的感受是，在一个由不同的游戏组成的海洋里，做出不同其实在这么多的游戏中也没有太大的区别，我后来学到了更有用的词汇，那就是引人注目（Remarkable），也就是说，要么你的传统做法很优秀，要么你的不同之处在研发过程中被执行的非常好。
*/
var fs = require('fs')
var files = ['a.txt', 'b.txt', 'c.txt'];

var Promise = require("bluebird");

/*
files.forEach(function(filename) {
	console.log('XXX out filename=' + filename);
	fs.readFile(filename, 'utf-8', function(err, contents) {
	  console.log('XXX inter filename=' + filename);
	  console.log(filename + ':' + contents);
	})
})
*/

/*
setTimeout(function () {
	for (var i = 0; i < 10000000000; i++) {
		//CPU密集
	}
}, 220);
setTimeout(function () {
	console.log('210 ms...');
}, 210);
*/


//var fs = Promise.promisifyAll(require('fs'))

/*
Promise.all(
  files.map(function(fname) {
    return fs.statAsync(fname);
  })
)
.then(function(results) {
    // handle results
	console.log('all right, all done.');
  })
  .catch(function(err) {
    console.error(err.stack)
  })
*/  
  
/*  
  You can actually just return user.saveAsync(). Then your error propagates to the lower catch function. Like that:

 User.findOneAsync({email: req.body.text})
  .then(function(user) {
    return user.saveAsync()
      .spread(function(savedUser){
        res.json(savedUser);
      });
  })
  .catch(function(err) {
     res.json({
       status: 500,
       message: 'foo'
     });
  });
This works because your spread returns a Promise. That promise is then passed along the outer chain, including a possible error. In the outer chain you can then catch that with your catch function which will now catch errors from the inner and outer chain since they are connected.

You could also shorten this code by much and not have two promise chains by doing something along the lines of this:

 User.findOneAsync({email: req.body.text})
 .call("saveAsync")
 .spread(function (savedUser) {
     res.json(savedUser);
 })
 .catch(function(err) {
    res.json({
      status: 500,
      message: 'foo'
    });
 });
This is generally considered good practice when working with promises.
 */ 

////////////////////////////////////////////new bluebird 3.0 reflect to replace to the settle mathod.
 
var p1 = new Promise(function(f,r){
    setTimeout(function(){
        console.log("p1");
        f("yay");
    }, 100);

});

var p2 = new Promise(function(f,r){
    setTimeout(function(){
        console.log("p2");
        //r(new Error("boo"));
    }, 200);

})

var p3 = new Promise(function(f,r){
    setTimeout(function(){
        console.log("p3");
        //r(new Error("yay"));
    }, 300);

});

var p4 = new Promise(function(f,r){
    setTimeout(function(){
        console.log("p4");
        //f("yay");
    }, 400);

});
  
  
//You'd use .settle:

/*
Promise.settle([p1,p2,p3,p4]).then(function(results){
  results.forEach(function(result){
     if(result.isFulfilled()){
         // access result.value()
     } else {
         // access result.reason()
     }
  });
});
*/

/*
In newer bluebird settle is generalized by .reflect which separates aggregation from the notion of a promise inspection and lets you do what .settle does but to other actions like .any or .some as well:
*/

// same as above, using reflect
Promise.map([p1,p2,p3,p4], function(el){ 
    return Promise.resolve(el).reflect();
}).then(function(results){
  results.forEach(function(result){
     if(result.isFulfilled()){
         // access result.value()
		 console.log('all done');
     } else {
         // access result.reason()
		 console.log('error final');
     }
  });
});