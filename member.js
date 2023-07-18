function skillsMember(){
    return {
        restrict: 'E',
        templateUrl: 'modules/skills/views/member.html',
        controler: 'SkillsMemberController',
        controleraAs: 'vm',
        bindToController: true,
        scope:{
            member: 'm'
        }
    };
}