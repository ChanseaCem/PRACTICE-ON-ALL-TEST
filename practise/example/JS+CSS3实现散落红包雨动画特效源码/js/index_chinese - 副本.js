（function（）{
        / *定义要在动画中使用的叶子数量* /
        var NUMBER_OF_LEAVES = 8;

        / *
         当“落叶”页面完全加载时调用。
         * /
        函数init（）{
            / *获取将包含树叶的元素的引用* /
            var container = document.getElementById（'petalbox'）;

            / *用新叶子填充空容器* /
            尝试{
                for（var i = 0;
                     我<NUMBER_OF_LEAVES;

                     i ++）{
                    container.appendChild（createALeaf（））;
                }
            }
            catch（e）{
            }
        }

        / *
         接收范围的最低值和最高值
         返回一个落在该范围内的随机整数。
         * /
        函数randomInteger（低，高）{
            返回低+ Math.floor（Math.random（）*（高 - 低））;
        }

        / *
         接收范围的最低值和最高值
         返回一个落在该范围内的随机浮动。
         * /
        函数randomFloat（低，高）{
            返回低+ Math.random（）*（高 - 低）;
        }

        / *
         接收一个数字并返回其CSS像素值。
         * /
        函数pixelValue（value）{
            返回值+'px';
        }

        / *
         为下降的动画返回一个持续时间值。
         * /
        函数durationValue（value）{
            返回值+'s';
        }

        / *
         使用img元素来创建每个叶子。 “Leaves.css”实现了两个旋转
         叶子的动画：顺时针旋转和逆时针旋转和旋转。这个
         函数确定应将哪些旋转动画应用于每个叶。

         * /
        函数createALeaf（）{
            / *首先创建一个包装div和一个空的img元素* /
            var leafDiv = document.createElement（'div'）;
            var image = document.createElement（'img'）;

            / *随机选择一个叶子图像并将其分配给新创建的元素* /
            image.src ='images / hb / petal'+ randomInteger（1，10）+'.png';

            / *将叶子放置在屏幕上的随机位置* /
            leafDiv.style.top = pixelValue（randomInteger（-200，-100））;
            leafDiv.style.left = pixelValue（randomInteger（0，1920））;

            / *随机选择一个自旋动画* /
            var spinAnimationName =（Math.random（）<0.5）？ 'clockwiseSpin'： 'counterclockwiseSpinAndFlip'; / *使用这些值设置-webkit-animation-name属性* /
            leafDiv.style.webkitAnimationName ='淡入淡出';
            leafDiv.style.animationName ='淡入淡出';
            image.style.webkitAnimationName = spinAnimationName;
            image.style.animationName = spinAnimationName;

            / *随机下落时间* /
            var fadeAndDropDuration = durationValue（randomFloat（1.2，8.2））;

            / *随机旋转时间* /
            var spinDuration = durationValue（randomFloat（3，4））;

            leafDiv.style.webkitAnimationDuration = fadeAndDropDuration +'，'+ fadeAndDropDuration;
            leafDiv.style.animationDuration = fadeAndDropDuration +'，'+ fadeAndDropDuration;

            //随机延迟时间
            var leafDelay = durationValue（randomFloat（0，2））;

            leafDiv.style.webkitAnimationDelay = leafDelay +'，'+ leafDelay;
            leafDiv.style.animationDelay = leafDelay +'，'+ leafDelay;
            image.style.webkitAnimationDuration = spinDuration;
            image.style.animationDuration = spinDuration;
            leafDiv.appendChild（图像）;
            返回leafDiv;
        }
        在里面（）;
    }
）（）;