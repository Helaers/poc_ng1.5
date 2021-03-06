//directive
export const drawingDirective = function ($log, $window) {
    return {
        restrict: 'A',
        scope: {
            resetCanvasObj: '=',
        },
        link: function (scope, element) {
            const ctx = element[0].getContext('2d');


            // http://www.codeproject.com/Tips/863825/Angular-Calling-Directive-Method-from-Controller
            scope.$watch('resetCanvasObj', (value) => {
                if (value) {
                    value.reset = () => {
                        resetCanvas();
                    };
                }
            });


            // Size the canvas to fullscreen: (or with with 'width="1200"'on element
            element[0].width = $window.innerWidth;
            element[0].height = $window.innerHeight;

            let drawing = false;

            // the last coordinates before the current move
            let lastX;
            let lastY;

            element.on('mousedown', (event) => {
                if (event.offsetX !== undefined) {
                    lastX = event.offsetX;
                    lastY = event.offsetY;
                } else {
                    lastX = event.layerX - event.currentTarget.offsetLeft;
                    lastY = event.layerY - event.currentTarget.offsetTop;
                }

                // begins new line
                ctx.moveTo(lastX, lastY);
                ctx.beginPath();

                drawing = true;
            });
            element.on('mousemove', (event) => {
                if (drawing) {
                    let currentX;
                    let currentY;

                    // get current mouse position
                    if (event.offsetX !== undefined) {
                        currentX = event.offsetX;
                        currentY = event.offsetY;
                    } else {
                        currentX = event.layerX - event.currentTarget.offsetLeft;
                        currentY = event.layerY - event.currentTarget.offsetTop;
                    }

                    // draw(lastX, lastY, currentX, currentY);
                    ctx.strokeStyle = '#000';
                    ctx.lineCap = 'round';
                    ctx.lineJoin = 'round';
                    ctx.shadowColor = 'rgba(0,0,0,.2)';
                    ctx.shadowBlur = 2;
                    ctx.lineWidth = 3;
                    ctx.lineTo(currentX, currentY);
                    ctx.stroke();

                    // set current coordinates to last one
                    lastX = currentX;
                    lastY = currentY;
                }

            });
            element.on('mouseup', () => {
                // stop drawing
                drawing = false;
            });

            // canvas reset
            function resetCanvas() {
                ctx.clearRect(0, 0, element[0].width, element[0].height);
            }
        },
    };
};

drawingDirective.$inject = ['$log', '$window'];
