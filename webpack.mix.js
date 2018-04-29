let mix = require('laravel-mix');

mix.js('resources/assets/js/app.js', 'public/js');

mix.styles([
    './node_modules/bootstrap/dist/css/bootstrap.css',
    './node_modules/font-awesome/css/font-awesome.css'
    ] , 'public/css/hito.css');
mix.scripts([
    './node_modules/bootstrap/dist/js/bootstrap.js'
    ] , 'public/js/hito.js')
mix.copy('node_modules/font-awesome/fonts' , 'public/fonts');

mix.browserSync({
    proxy: 'localhost:8000'
});