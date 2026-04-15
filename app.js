// 1. Importy modułów
var lab1_1 = require("./lab/lab1_1").lab;
var example_1 = require("./example_1").lab;
var ec2_info = require("./lab/ec2_info").lab; // Przeniesione tutaj

var PORT = 8080;

// 2. Definicja mapy URL (tutaj musisz dopisać nową ścieżkę!)
var urlMap = [
    {path: "/", action: __dirname + "/static/index.html"},
    {path: "/digest", action: lab1_1},
    {path: "/example_1", action: example_1},
    {path: "/ec2info", action: ec2_info} // Dodane do tablicy
];

// 3. Uruchomienie usługi z kompletną mapą URL
var service = require("./lib/service").http(urlMap);

service(PORT);