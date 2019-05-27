(function() {
    console.log(123);
        /* 定义要在动画中使用的叶子数量 */
        var NUMBER_OF_LEAVES = 80;

        /*
         当“落叶”页面完全加载时调用。
         */
        function init() {
            /* 获取将包含树叶的元素的引用 */
            var container = document.getElementById('petalbox');

            /* 用新叶子填充空容器 */
            try {
                for (var i = 0;i < NUMBER_OF_LEAVES;i++) {
                    container.appendChild(createALeaf());
                }
            }
            catch(e) {
            }
        }

        /*
         接收范围的最低值和最高值
         返回一个落在该范围内的随机整数。
         */
        function randomInteger(low, high) {
            return low + Math.floor(Math.random() * (high - low));
        }

        /*
         接收范围的最低值和最高值
         返回一个落在该范围内的随机浮动。
         */
        function randomFloat(low, high) {
            return low + Math.random() * (high - low);
        }

        /*
         接收一个数字并返回其CSS像素值。
         */
        function pixelValue(value) {
            return value + 'px';
        }

        /*
        为下降的动画返回一个持续时间值。
         */
        function durationValue(value) {
            return value + 's';
        }

        /*
         使用img元素来创建每个叶子。 “Leaves.css”实现了两个旋转
         叶子的动画：顺时针旋转和逆时针旋转和旋转。这个
         函数确定应将哪些旋转动画应用于每个叶。

         */
        function createALeaf() {
            /* 首先创建一个包装div和一个空的img元素 */
            var leafDiv = document.createElement('div');
            var image = document.createElement('img');

            /* 随机选择一个叶子图像并将其分配给新创建的元素 */
            image.src ='images/hb/petal'+ randomInteger(1, 10) + '.png';

            /* Position the leaf at a random location along the screen */
            leafDiv.style.top = pixelValue(randomInteger(-200, -100));
            leafDiv.style.left = pixelValue(randomInteger(0, 1920));

            /* Randomly choose a spin animation */
            var spinAnimationName = (Math.random() < 0.5) ? 'clockwiseSpin':'counterclockwiseSpinAndFlip';        /* Set the -webkit-animation-name property with these values */
            leafDiv.style.webkitAnimationName ='fade, drop';
            leafDiv.style.animationName ='fade, drop';
            image.style.webkitAnimationName = spinAnimationName;
            image.style.animationName = spinAnimationName;

            /* 随机下落时间 */
            var fadeAndDropDuration = durationValue(randomFloat(1.2, 8.2));

            /* 随机旋转时间 */
            var spinDuration = durationValue(randomFloat(3, 4));

            leafDiv.style.webkitAnimationDuration = fadeAndDropDuration + ', ' + fadeAndDropDuration;
            leafDiv.style.animationDuration = fadeAndDropDuration + ', ' + fadeAndDropDuration;

            // 随机delay时间
            var leafDelay = durationValue(randomFloat(0, 2));

            leafDiv.style.webkitAnimationDelay = leafDelay + ', ' + leafDelay;
            leafDiv.style.animationDelay = leafDelay + ', ' + leafDelay;
            image.style.webkitAnimationDuration = spinDuration;
            image.style.animationDuration = spinDuration;
            leafDiv.appendChild(image);
            return leafDiv;
        }
        init();
    }
)();