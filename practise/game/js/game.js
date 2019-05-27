$(function () {
    function ship(ctx) {
        console.log(this);
        gameMonitor.im.loadImage(["img/player.png"]);
        this.width = gameMonitor.shipSize;
        this.height = gameMonitor.shipSize;
        this.left = gameMonitor.w / 2 - this.width / 2;
        this.top = gameMonitor.h - 2 * this.height;
        this.player_normal = gameMonitor.im.createImage("img/player.png");
        this.player = this.player_normal;
        this.player_wudi = gameMonitor.im.createImage("img/player_wudi.png");
        this.drugTime = gameMonitor.drugTime * 1000;  //无敌时间
        this.drugNum = 0;

        this.paint = function () {
            gameMonitor.shipX = this.left + this.width / 2;
            gameMonitor.shipY = this.top + this.height / 2;
            ctx.drawImage(this.player, this.left, this.top, this.width, this.height);
        };
        this.setPosition = function (event, dx, dy) {
            if (gameMonitor.isMobile()) {
                var tarL = event.changedTouches[0].clientX - $("canvas").offset().left;
                var tarT = event.changedTouches[0].clientY;
            }
            else {
                var tarL = event.offsetX;
                var tarT = event.offsetY;
            }
            this.left = tarL - dx;
            this.top = tarT - dy - $(".div-top").height();
            if (this.left < 0) {
                this.left = 0;
            }
            if (this.left > 320 - this.width) {
                this.left = 320 - this.width;
            }
            if (this.top < 0) {
                this.top = 0;
            }
            if (this.top > gameMonitor.h - this.height) {
                this.top = gameMonitor.h - this.height;
            }
            this.paint();
        };
        this.controll = function () {
            var _this = this;
            var gamePanel = $("canvas");
            var dx = 0,
                dy = 0,
                move = false;
            gamePanel.on(gameMonitor.eventType.start, function (e) {
                var event = e.originalEvent;
                if (gameMonitor.isMobile()) {
                    //dx,dy:点击的位置相对于player目标的原点距离x,y
                    dx = event.changedTouches[0].clientX - $("canvas").offset().left;
                    dy = event.changedTouches[0].clientY;
                }
                else {
                    dx = event.offsetX;
                    dy = event.offsetY;
                }
                dy -= $(".div-top").height();
                if (dx >= _this.left && dx <= _this.left + _this.width && dy >= _this.top && dy <= _this.top + _this.height) {
                    // _this.setPosition(event);
                    dx -= _this.left;
                    dy -= _this.top;
                    _this.setPosition(event, dx, dy);
                    move = true;
                }
            }).on(gameMonitor.eventType.end, function () {
                move = false;
            }).on(gameMonitor.eventType.move, function (event) {
                event.originalEvent.preventDefault();
                if (move) {
                    _this.setPosition(event.originalEvent, dx, dy);
                }
            });
        };
        this.eat = function (bulletList) {
            for (var i = bulletList.length - 1; i >= 0; i--) {
                var f = bulletList[i];
                if (f) {
                    var l1 = this.top + this.height / 2 - (f.top + f.height / 2);
                    var l2 = this.left + this.width / 2 - (f.left + f.width / 2);
                    var l3 = Math.sqrt(l1 * l1 + l2 * l2);
                    if (l3 <= this.height / 2 + f.height / 2) {
                        bulletList[f.id] = null;
                        if (f.type > 0 && f.type < 4) {
                            if (this.drugNum <= 0) {
                                $('.heart').text(--gameMonitor.heart);
                                $('.img-heart').stop(true).css({"height": "14px", "left": "0"})
                                    .animate({"left": "-2px"}, 100)
                                    .animate({"left": "2px"}, 100)
                                    .animate({"left": "-2px"}, 100)
                                    .animate({"left": "2px"}, 100)
                                    .animate({"left": "0"}, 100);
                                if (gameMonitor.heart < 0) {
                                    gameMonitor.stop();
                                    $('#overPanel').show();
                                }
                            }
                        }
                        else if (f.type == 0) {
                            $('.heart').text(++gameMonitor.heart);
                            $('.img-heart').stop(true).css({
                                "height": "14px",
                                "left": "0"
                            }).animate({"height": "20px"})
                                .animate({"height": "14px"});
                        } else if (f.type == 4) {
                            boom(ctx, f.left + f.width / 2, f.top + f.height / 2, f.width / 2);
                        } else if (f.type == 5) {
                            this.drugNum++;
                            this.player = this.player_wudi;
                            var _this = this;
                            setTimeout(function () {
                                wudi(_this);
                            }, _this.drugTime);
                            function wudi(_this) {
                                if (--_this.drugNum <= 0) _this.player = _this.player_normal;
                            }
                        }
                    }
                }
            }
        }
    }

    //整体概率: 1/20
    //bullet type--0:heart(heart+1)[10%] ; 1:yellow(with dir)[60%] ; 2:blue(change left)[10%] ; 3:red(1to5)[15%]
    //type-4:bomb[2%] ; 5:drug[3%]
    function bullet(type, left, dir, color, id) {
        this.id = id;
        this.type = type;
        this.dir = dir;
        this.width = 10;
        this.height = 10;
        this.left = left;
        this.top = gameMonitor.bulletBaseTop;
        if (this.speed > gameMonitor.baseSpeed * gameMonitor.maxSpeedRate) this.speed = gameMonitor.baseSpeed;
        else this.speed = gameMonitor.baseSpeed * Math.pow(1.2, Math.floor(gameMonitor.time / gameMonitor.speedUpTime));
        this.loop = 0;

        // var p = this.type == 0 ? 'img/heart.png' : 'img/circle_00.png';
        if (this.type == 0) this.pic = gameMonitor.im.createImage("img/heart.png");
        else if (this.type == 4) this.pic = gameMonitor.im.createImage("img/bomb.png");
        else if (this.type == 5) this.pic = gameMonitor.im.createImage("img/drug.png");
        else this.pic = color;
    }

    bullet.prototype.paint = function (ctx) {
        if (this.type == 0 || this.type == 4 || this.type == 5) ctx.drawImage(this.pic, this.left, this.top, this.width, this.height);
        else {
            var rx = this.left + this.width / 2;
            var ry = this.top + this.height / 2;
            var r = this.width / 2;
            ctx.beginPath();
            ctx.fillStyle = this.pic;
            ctx.arc(rx, ry, r, 0, 2 * Math.PI, false);
            if (this.type == 3) {
                for (var i = 1; i < 4; i++) {
                    ctx.arc(rx - i * r * Math.sin(this.dir), ry - i * r * Math.cos(this.dir), r, 0, 2 * Math.PI, false);
                }
            }
            ctx.fill();
        }
    };
    bullet.prototype.move = function (ctx) {
        if (gameMonitor.time % gameMonitor.speedUpTime == 0) {
            if (this.speed >= gameMonitor.baseSpeed * gameMonitor.maxSpeedRate) this.speed = gameMonitor.baseSpeed * gameMonitor.maxSpeedRate;
            else this.speed *= 1.2;
            if (gameMonitor.bulletCreateRate >= gameMonitor.baseBulletCreateRate * gameMonitor.maxBulletUpRate) gameMonitor.bulletCreateRate = gameMonitor.baseBulletCreateRate * gameMonitor.maxBulletUpRate;
            else gameMonitor.bulletCreateRate *= 1.1;
        }
        var speed = this.speed;
        if (this.type == 2) {
            speed *= 0.5;
            if (this.top + this.height / 2 < gameMonitor.shipY) {
                this.dir = Math.atan((gameMonitor.shipX - this.left + this.width / 2) / ( gameMonitor.shipY - this.top + this.height / 2));
            }
            if (this.dir > Math.PI / 4) this.dir = Math.PI / 4;
            else if (this.dir < Math.PI / -4) this.dir = Math.PI / -4;
        }
        if (this.type == 3) speed *= 3;
        this.top += ++this.loop * speed * Math.cos(this.dir);
        this.left += this.loop * speed * Math.sin(this.dir);
        if (this.top > gameMonitor.h || this.left < 0 || this.left > gameMonitor.w) {
            if (this.type == 2 || this.type == 3 && gameMonitor.bulletList[this.id] != null) $(".score").text(++gameMonitor.score * 10);
            gameMonitor.bulletList[this.id] = null;
        }
        else {
            this.paint(ctx);
        }
    };

    function ImageMonitor() {
        console.log("ImageMonitor");
        var imgArray = [];
        return {
            createImage: function (src) {
                console.log("createImage");
                return typeof imgArray[src] != 'undefined' ? imgArray[src] : (imgArray[src] = new Image(), imgArray[src].src = src, imgArray[src])
            },
            loadImage: function (arr, callback) {
                console.log("loadImage");
                for (var i = 0; i < arr.length; i++) {
                    var img = arr[i];
                    imgArray[img] = new Image();
                    imgArray[img].onload = function (i) {
                        if (i == arr.length - 1 && typeof callback == 'function') {
                            callback();
                        }
                    };
                    imgArray[img].src = img;
                }
            }
        }
    }

    function boom(ctx, x, y, r) {
        setTimeout(function () {
            ctx.beginPath();
            ctx.arc(x, y, r, 0, 2 * Math.PI, false);
            ctx.stroke();
            for (var i = gameMonitor.bulletList.length - 1; i >= 0; i--) {
                var f = gameMonitor.bulletList[i];
                if (f) {
                    var l1 = y - (f.top + f.height / 2);
                    var l2 = x - (f.left + f.width / 2);
                    var l3 = Math.sqrt(l1 * l1 + l2 * l2);
                    if (l3 <= r + f.height / 2) {
                        gameMonitor.bulletList[f.id] = null;
                        if (f.type == 2 || f.type == 3) $(".score").text(++gameMonitor.score * 10);
                    }
                }
            }
            if (r < gameMonitor.bombR) {
                boom(ctx, x, y, r + gameMonitor.bombSpeed);
            }
        }, 60);
    }

    var gameMonitor = {
        difficulty: 3,
        w: 320,
        h: $("canvas").height(),
        shipSize: 40,
        // bg: null,
        // bgWidth : 320,
        // bgHeight : 1126,
        // difficulty: 2,
        time: 0,
        timer: null,
        // bgSpeed: 2,
        // bgLoop: 0,
        score: 0,
        baseHeart: 5,
        heart: 5,
        baseSpeed: 0.02,
        speedUpTime: 600,
        maxSpeedRate: 2,
        maxBulletUpRate: 10,
        shipX: 0,
        shipY: 0,
        im: new ImageMonitor(),
        bulletList: [],
        baseBulletCreateRate: 2,  //生成频率
        bulletCreateRate: 2,  //生成频率
        bulletWidth: 20,
        bulletHeight: 20,
        bulletBaseTop: -50,
        bombR: 600,//炸弹爆炸半径
        bombSpeed: 5,//爆炸扩散的速度
        drugTime: 5,//无敌时间
        bullet0: 10,
        bullet2: 15,
        bullet3: 15,
        bullet4: 10,
        bullet5: 3,
        // bgDistance: 0,
        eventType: {
            start: 'touchstart',
            move: 'touchmove',
            end: 'touchend'
        },
        init: function () {
            var self = this;
            this.heart = this.baseHeart;
            this.bulletCreateRate = this.baseBulletCreateRate;
            // var ctx = $("canvas")[0].getContext("2d");
            //绘制背景
            // var bg=new Image();
            // self.bg=bg;
            // bg.onload=function(){
            //     ctx.drawImage(bg,0,0,self.bgWidth,self.bgHeight);
            // };
            // bg.src="img/bg.jpg";
            self.initListener();
        },
        initListener: function () {
            var _this = this;
            var body = $(document.body);
            $(document).on(gameMonitor.eventType.move, function (event) {
                event.originalEvent.preventDefault();
            });
            body.on(gameMonitor.eventType.start, '#beginPanel, #replay', function () {
                $('#beginPanel').hide();
                $('#overPanel').hide();
                var canvas = $("canvas")[0];
                var ctx = canvas.getContext('2d');
                _this.ship = new ship(ctx);
                _this.ship.controll();
                // _this.reset();
                // _this.run(ctx);
            });
        },
        // rollbg: function (ctx) {
        // if(this.bgDistance>=this.bgHeight){
        //     this.bgLoop=0;
        // }
        // this.bgDistance=++this.bgLoop*this.bgSpeed;
        // ctx.drawImage(this.bg,0,this.bgDistance-this.bgHeight,this.bgWidth,this.bgHeight);
        // ctx.drawImage(this.bg,0,this.bgDistance,this.bgWidth,this.bgHeight);
        // },
        run: function (ctx) {
            var _this = gameMonitor;
            ctx.clearRect(0, 0, _this.w, _this.h);
            // _this.rollbg(ctx);
            //绘制飞船
            _this.ship.paint();
            _this.ship.eat(_this.bulletList);

            _this.genorateBullet();
            for (i = _this.bulletList.length - 1; i >= 0; i--) {
                var f = _this.bulletList[i];
                if (f) {
                    // f.paint(ctx);
                    f.move(ctx);
                }
            }
            _this.timmer = setTimeout(function () {
                gameMonitor.run(ctx);
            }, Math.round(1000 / 60));

            _this.time++;
        },
        stop: function () {
            var _this = this;
            $("canvas").off(this.eventType.start + " " + this.eventType.move);
            setTimeout(function () {
                clearTimeout(_this.timmer);
            }, 0);
        },
        genorateBullet: function () {
            //整体概率: 1/20
            //bullet type--0:heart(heart+1)[10%] ; 1:yellow(with dir)[60%] ; 2:blue(change left)[10%] ; 3:red(1to5)[15%]
            //type-4:bomb[2%] ; 5:drug[3%]
            var random = Math.random();
            if (random * 60 / this.bulletCreateRate > 60 / this.bulletCreateRate - 1) {
                random = Math.random();
                // var type = Math.floor(left) % 2 == 0 ? 0 : 1;
                var type = 1;
                var left = random * (this.w - 10);
                var dir = (random / 2 - 0.25) * Math.PI;
                var color = "#ffef6e";
                var id = this.bulletList.length;
                random = Math.random() * 100;
                if (random < gameMonitor.bullet0) {
                    type = 0;
                } else if (random < gameMonitor.bullet0 + gameMonitor.bullet2) {
                    type = 2;
                    color = "#46ccff";
                    dir = Math.atan((left + this.bulletWidth / 2 - this.shipX) / (gameMonitor.bulletBaseTop + this.bulletHeight / 2 - this.shipY));
                } else if (random < gameMonitor.bullet0 + gameMonitor.bullet2 + gameMonitor.bullet3) {
                    type = 3;
                    color = "#ff0000";
                    dir = Math.atan((left + this.bulletWidth / 2 - this.shipX) / (gameMonitor.bulletBaseTop + this.bulletHeight / 2 - this.shipY));
                } else if (random < gameMonitor.bullet0 + gameMonitor.bullet2 + gameMonitor.bullet3 + gameMonitor.bullet4) {
                    type = 4;
                } else if (random < gameMonitor.bullet0 + gameMonitor.bullet2 + gameMonitor.bullet3 + gameMonitor.bullet4 + gameMonitor.bullet5) {
                    type = 5;
                }
                var f = new bullet(type, left, dir, color, id);
                this.bulletList.push(f);
            }
        },
        reset: function () {
            this.bulletList = [];
            this.bgLoop = 0;
            this.score = 0;
            this.heart = this.baseHeart;
            this.timer = null;
            this.time = 0;
            $(".heart").text(this.heart);
            $('.score').text(this.score);
            setDifficulty();
        },
        isMobile: function () {
            var sUserAgent = navigator.userAgent.toLowerCase(),
                bIsIpad = sUserAgent.match(/ipad/i) == "ipad",
                bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os",
                bIsMidp = sUserAgent.match(/midp/i) == "midp",
                bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4",
                bIsUc = sUserAgent.match(/ucweb/i) == "ucweb",
                bIsAndroid = sUserAgent.match(/android/i) == "android",
                bIsCE = sUserAgent.match(/windows ce/i) == "windows ce",
                bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile",
                bIsWebview = sUserAgent.match(/webview/i) == "webview";
            return (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM);
        }
    };

    if (!gameMonitor.isMobile()) {
        gameMonitor.eventType.start = 'mousedown';
        gameMonitor.eventType.move = 'mousemove';
        gameMonitor.eventType.end = 'mouseup';
    }

    var frmIndex;
    //弹窗:游戏说明
    $("#btn_introduce").on(gameMonitor.eventType.start, function (e) {
        e.stopPropagation();
        frmIndex=layer.open({
            type: 1,
            content: '<div id="frm_introduce">' +
            '<h2>游戏说明</h2>' +
            '<div><img src="img/player.png"><span>player:拖动并躲避子弹</span></div>' +
            '<div><img src="img/player_wudi.png"><span>player:吃到药丸后进入无敌状态,持续3~5秒</span></div> ' +
            '<div><img src="img/heart.png"><span>生命值:碰到子弹减一点,吃到<img src="img/heart.png">增加一点,低于0游戏结束</span></div> ' +
            '<div><img src="img/bomb.png"><span>炸弹:清除附近所有掉落物</span></div> ' +
            '<div> <img src="img/drug.png"><span>药丸:无敌一段时间</span></div>' +
            '<div><span style="background-color: #ffef6e;"></span><span>黄色子弹:随机朝一个方向移动</span></div>' +
            '<div><span style="background-color: #46ccff;"></span><span>蓝色子弹:跟踪玩家位置,被消灭或离开屏幕后+10分</span></div>' +
            '<div><span style="background-color: #ff0000;"></span><span>红色子弹:朝玩家所在位置直线移动,被消灭或离开屏幕后+10分</span></div>' +
            '</div>'
        });
    });

    $("#btn_config").on(gameMonitor.eventType.start, function (e) {
        e.stopPropagation();
        frmIndex=layer.open({
            type: 1,
            content: '<div id="frm_config">' +
            '<h2>游戏设置</h2>' +
            '<div>' +
            '<a href="javascript:void(0);" id="cfg_eazy">简单</a>' +
            '<a href="javascript:void(0);" id="cfg_normal">普通</a>' +
            '<a href="javascript:void(0);" id="cfg_hard">困难</a>' +
            '<a href="javascript:void(0);" id="cfg_difficult">非常困难</a>' +
            '</div>' +
            '</div>',
            success: function () {
                $("#frm_config a").eq(gameMonitor.difficulty - 1).addClass("active");
            }
        });
    });

    $("body").on(gameMonitor.eventType.start, "#frm_config a", function (e) {
        e.stopPropagation();
        $(this).addClass("active").siblings().removeClass("active");
        gameMonitor.difficulty = $(this).index() + 1;
        setDifficulty();
    });

    $("body").on(gameMonitor.eventType.start, "#frm_config, #frm_introduce", function () {
        layer.close(frmIndex);
    });

    $("#btn_backBegin").on(gameMonitor.eventType.start, function () {
        $("#beginPanel").show();
        $("#overPanel").hide();
        gameMonitor.reset();
    });

    function setDifficulty() {
        var self = gameMonitor;
        self.baseHeart = parseInt(10 / self.difficulty);//初始血量
        self.heart = self.baseHeart;//实际血量
        self.baseSpeed = 0.01 * self.difficulty;//基础速度=0.01*难度值
        self.speedUpTime = 1200 / self.difficulty;//加速时间
        self.bulletCreateRate = self.difficulty;//子弹创建概率
        switch (self.difficulty) {
            case 1:
                self.bombR = 300;
                self.bombSpeed = 5;
                self.bullet0 = 10;
                self.bullet2 = 10;
                self.bullet3 = 10;
                self.bullet4 = 10;
                self.bullet5 = 5;
                break;
            case 2:
                self.bombR = 300;
                self.bombSpeed = 8;
                self.bullet0 = 10;
                self.bullet2 = 15;
                self.bullet3 = 15;
                self.bullet4 = 10;
                self.bullet5 = 3;
                break;
            case 3:
                self.bombR = 200;
                self.bombSpeed = 14;
                self.bullet0 = 10;
                self.bullet2 = 15;
                self.bullet3 = 15;
                self.bullet4 = 5;
                self.bullet5 = 3;
                self.drugTime = 3;
                break;
            case 4:
                self.bombR = 200;
                self.bombSpeed = 20;
                self.bullet0 = 5;
                self.bullet2 = 15;
                self.bullet3 = 20;
                self.bullet4 = 5;
                self.bullet5 = 2;
                self.drugTime = 3;
                self.shipSize = 30;
                break;
        }
    }

    setDifficulty();
    gameMonitor.init();
});