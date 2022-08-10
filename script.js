api = 'https://api.openweathermap.org/data/2.5/';
key = '53eb29fa394dc55372807df0f7af70ef';
city = 'Yogyakarta';
      
$(document).ready(function () {
    $.ajax({
        url: api + 'weather?q=' + city + '&appid=' + key + '&units=metric',
          success: function (res) {
            $('#kota').html(res.name);
            $('#temp').html(res.main.temp+'&deg;C');
            $('#min').html(res.main.temp_min+'&deg;C');
            $('#max').html(res.main.temp_max+'&deg;C');

            var icon = res.weather[0].icon;
            $('img').attr('src','http://openweathermap.org/img/wn/'+icon+'@2x.png');
            $('h3').text(res.weather[0].main+' - '+res.weather[0].description);
        }
    });
});