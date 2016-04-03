angular.module('app').directive('actionItemGroup', function(){
   return {
        replace: true,
        template: '<div class="list-group"><action-item ng-repeat="n in list" message="n"></action-item></div>',
        scope: { list: '=' }
   };
});


angular.module('app').directive('actionItem', function(){
   return {
        replace: true,
        template: [
            '<a class="list-group-item">',
            '<i class="fa fa-{{m.type}} fa-fw"></i> {{m.message}}',
            '<span class="pull-right text-muted small"><em>4 minutes ago</em></span></a>'
        ].join(''),
        scope: { m: '=message' }
   };
});