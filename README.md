<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

To start project run: php artisan serve.

If you want to develop something, you have to run also npm run watch in another terminal.

This app is deployed on Heroku: <a href="https://heroku-cookie-bakery.herokuapp.com/">Cookie Bakery</a>


### Project description

● If a customer holds their hand in front of the window (hover the window) it should
transform to a cookie. The cookie it transforms to can be taken from
images.google.com.

● If someone knocks on the door (click) an order will be made. Unfortunately there are no
bakers at work so your request must be sent to a SQLite Database via PHP (optionally
use Symfony 4 or 5). Every request just has a timestamp.
If you have no experience with such technologies the client asks you to do some
research or provide an equivalent solution.

● A click on the sun should switch the bakery to night mode. In night mode the whole
scenery will be dark and transforming the window and requesting cookies are not
possible any more.

● If someone tries to use the mailbox (click) it falls to the ground because of the poor
construction quality

### Technologies

* Project is done with Vue and Laravel with Sqlite.


