angular.module('MyApp', ['ui.bootstrap']);
function CarouselDemoCtrl($scope){
  $scope.myInterval = 2000;
  $scope.slides = [
    {
      image: 'https://bsmedia.business-standard.com/_media/bs/img/article/2020-06/30/full/1593465605-2431.jpg'
    },
    {
      image: 'https://www.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/04/27/Pictures/_7d9df20a-885a-11ea-8e78-f1b6d2f5bc87.jpg'
    },
    {
      image: 'https://magarticles.magzter.com/articles/19475/436574/5e8d203774f10/Covid-19.jpg'
    },
    {
      image: 'https://cdn.telanganatoday.com/wp-content/uploads/2020/04/sanitising-staff.jpg'
    },
    {
      image: 'https://hindi.cdn.zeenews.com/hindi/sites/default/files/2020/06/11/574256-corona-warriors.jpg'
    },
  ];
}