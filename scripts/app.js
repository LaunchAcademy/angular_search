function SearchForm(){
  this.id = '#search-form';
  this.shown = false;

  this.$el = function(){
    return $(this.id);
  };

  this.toggle = function(){
    this.shown = !this.shown;
    this.$el().toggle({
      duration: 100
    });
  };
}

function PersonSearch($scope) {
  $scope.searchForm = new SearchForm();

  $scope.toggleForm = function(){
    $scope.searchForm.toggle();
  };
}
