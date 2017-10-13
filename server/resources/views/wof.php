<!DOCTYPE html >
<html ng-app="AngApp">
<head>
    <link rel="stylesheet" href="<?= asset('app/assets/bootstrap/css/bootstrap.min.css') ?> "/>
    <link rel="stylesheet" href="<?= asset ('app/assets/bootstrap/css/bootstrap-theme.min.css') ?>" />
    <link rel="stylesheet" href="<?= asset ('app/styles/index.css') ?>" />
    <!-- Less -->
<!--    <link rel="stylesheet/less" src="--><?//= asset('app/assets/bootstrap-less/bootstrap/bootstrap.less') ?><!--" />-->
<!--    <link rel="stylesheet/less" src="--><?//= asset('app/styles/index.less') ?><!--" />-->
    <!-- favicon.ico -->
    <link rel="icon" type="image/png" href="<?= asset('app/images/favicon.ico') ?>" />
</head>
<body ng-controller="index">

<!-- Modules -->
<script src="<?= asset('app/assets/angular/angular.js') ?>"></script>
<script src="<?= asset('app/assets/angular/angular-route.js') ?>"></script>
<script src="<?= asset('app/assets/angular/angular-resource.js') ?>"></script>
<script src="<?= asset('app/assets/angular/angular-filter.js') ?>"></script>
<script src="<?= asset('app/assets/angular/ui-bootstrap-tpls-2.4.0.min.js') ?>"></script>
<script src="<?= asset('app/assets/angular/angular-touch.min.js') ?>"></script>
<script src="<?= asset('app/assets/ng-file-upload/dist/ng-file-upload-shim.js') ?>"></script>
<script src="<?= asset('app/assets/ng-file-upload/dist/ng-file-upload.js') ?>"></script>
<script src="<?= asset('app/assets/angular-ui-router/release/angular-ui-router.js') ?>"></script>
<script src="<?= asset('app/assets/angular-scroll/angular-scroll.js') ?>"></script>
<!--<script src="--><?//= asset('app/assets/less/dist/less.js') ?><!--"></script>-->
<script src="<?= asset('app/node_modules/ng-lodash/build/ng-lodash.min.js') ?>"></script>

<!-- Controllers -->
<script src="<?= asset('app/app.js')?>"></script>
<script src="<?= asset('app/controllers/main.js') ?>"></script>
<script src="<?= asset('app/controllers/timetable.js') ?>"></script>
<script src="<?= asset('app/controllers/trainers.js') ?>"></script>
<script src="<?= asset('app/controllers/exercises.js') ?>"></script>
<script src="<?= asset('app/controllers/gyms.js') ?>"></script>
<script src="<?= asset('app/controllers/levels.js')?>"></script>
<script src="<?= asset('app/controllers/comments.js')?>"></script>
<script src="<?= asset('app/controllers/banners.js') ?>"></script>
<script src="<?= asset('app/controllers/filter.js') ?>"></script>

<!-- Models -->
<script src="<?= asset('app/models/timetable.js') ?>"></script>
<script src="<?= asset('app/models/trainers.js') ?>"></script>
<script src="<?= asset('app/models/exercises.js') ?>"></script>
<script src="<?= asset('app/models/gyms.js') ?>"></script>
<script src="<?= asset('app/models/levels.js') ?>"></script>
<script src="<?= asset('app/models/comments.js') ?>"></script>
<script src="<?= asset('app/models/banners.js') ?>"></script>
<script src="<?= asset('app/models/filter.js') ?>"></script>
<!-- Routes -->
<script src="<?= asset('app/routes/comments.js') ?>"></script>
<script src="<?= asset('app/routes/exercises.js') ?>"></script>
<script src="<?= asset('app/routes/gyms.js') ?>"></script>
<script src="<?= asset('app/routes/main.js') ?>"></script>
<script src="<?= asset('app/routes/timetable.js') ?>"></script>
<script src="<?= asset('app/routes/trainers.js') ?>"></script>
<script src="<?= asset('app/routes/levels.js') ?>"></script>
<script src="<?= asset('app/routes/banners.js') ?>"></script>
<script src="<?= asset('app/routes/filter.js') ?>"></script>
<!-- Views -->
<header>
    <div ui-view="nav"></div>
</header>
<main>
    <div class="content" ui-view="main" autoscroll="false">
    </div>
</main>
</body>
</html>