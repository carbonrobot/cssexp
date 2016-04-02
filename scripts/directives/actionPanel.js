angular.module('app').directive('actionPanel', function(){
   return {
        replace: true,
        template: [
            '<div class="panel panel-primary">',
            '    <div class="panel-heading">',
            '        <div class="row">',
            '            <div class="col-xs-3">',
            '                <i class="fa fa-{{m.type}} fa-5x"></i>',
            '            </div>',
            '            <div class="col-xs-9 text-right">',
            '                <div class="huge">{{m.count}}</div>',
            '                <div>{{m.message}}</div>',
            '            </div>',
            '        </div>',
            '    </div>',
            '    <a href="#">',
            '        <div class="panel-footer">',
            '            <span class="pull-left">View Details</span>',
            '            <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>',
            '            <div class="clearfix"></div>',
            '        </div>',
            '    </a>',
            '</div>'
        ].join(''),
        scope: { m: '=message' }
   };
});