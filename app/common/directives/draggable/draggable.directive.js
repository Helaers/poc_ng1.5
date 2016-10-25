//directive
export const draggableDirective = function ($document) {
    return {
        restrict: 'A',
        link: function (scope, elm) {
            let startX;
            let startY;
            let initialMouseX;
            let initialMouseY;

            elm.css({ position: 'absolute' });

            elm.bind('mousedown', ($event) => {
                startX = elm.prop('offsetLeft');
                startY = elm.prop('offsetTop');
                initialMouseX = $event.clientX;
                initialMouseY = $event.clientY;
                $document.bind('mousemove', mousemove);
                $document.bind('mouseup', mouseup);
                return false;
            });

            function mousemove($event) {
                const dx = $event.clientX - initialMouseX;
                const dy = $event.clientY - initialMouseY;
                elm.css({
                    top: `${startY + dy}px`,
                    left: `${startX + dx}px`,
                    cursor: '-webkit-grabbing',
                });
                return false;
            }

            function mouseup() {
                $document.unbind('mousemove', mousemove);
                $document.unbind('mouseup', mouseup);
                elm.css({ cursor: 'pointer' });
            }
        },
    };
};

draggableDirective.$inject = ['$document'];
