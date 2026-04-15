// lab/ec2_info.js
var AWS = require('aws-sdk');

// Inicjalizacja konfiguracji z pliku zewnętrznego
AWS.config.loadFromPath('./config.json');

// Utworzenie obiektu usługi EC2
var ec2 = new AWS.EC2();

var task = function(request, callback) {
    // Parametry zapytania - pusty obiekt {} oznacza "pobierz wszystko"
    var params = {};

    // Wykorzystanie funkcji describeInstances zgodnie z dokumentacją AWS
    ec2.describeInstances(params, function(err, data) {
        if (err) {
            // Jeśli wystąpi błąd, przekazujemy go do callbacka
            callback(err);
        } else {
            // Jeśli sukces, zwracamy dane o instancjach
            // Możemy zwrócić cały obiekt data lub tylko konkretne informacje
            callback(null, data);
        }
    });
};

// Eksportujemy funkcję pod nazwą 'lab', aby app.js mógł ją zaimportować
exports.lab = task;