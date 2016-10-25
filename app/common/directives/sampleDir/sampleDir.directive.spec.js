describe('sample-dir directive test', function() {

    let $compile;
    let $rootScope;
    let $scope;

    beforeEach(() => {
        angular.mock.module('ngPrep');

        inject((_$compile_, _$rootScope_) => {
            $compile = _$compile_;
            $rootScope = _$rootScope_;
            $scope = $rootScope.$new();
        });

    });

    describe('Render', () => {

        it('should...', () => {
            const element = create(`<sf-hello></sf-hello>`, $scope);
            console.log(element);
            expect(element).to.have.class('sample-dir')
        });
    });


    function create(html, scope) {
        const element = $compile(angular.element(html))(scope);
        scope.$digest();
        return element;
    }
});
