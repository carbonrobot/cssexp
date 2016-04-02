angular.module('app').directive('notificationList', function(){
   return {
        replace: true,
        template: '<div class="list-group"><notification ng-repeat="n in list" message="n"></notification></div>',
        scope: { list: '=' }
   };
});


angular.module('app').directive('notification', function(){
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