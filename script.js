/* ========= Platzhalter‑Daten (kann später durch echte JSON ersetzt werden) ========= */

// Helper function to generate random data
function generateRandomData() {
  const lieferanten = ["Schneider Electric GmbH", "Phoenix Contact GmbH", "Weidmüller GmbH", "Rittal GmbH", "Lapp Group", "Harting GmbH", "Murrelektronik GmbH", "Pilz GmbH", "Balluff GmbH", "Turck GmbH", "Sick AG", "Omron Electronics GmbH", "Pepperl+Fuchs GmbH", "Baumer GmbH", "Ifm Electronic GmbH"];
  const orte = ["Wien", "Graz", "Linz", "Salzburg", "Innsbruck", "Klagenfurt", "Villach", "Wels", "St. Pölten", "Dornbirn", "Wiener Neustadt", "Steyr", "Feldkirch", "Bregenz", "Leonding"];
  const plz = ["1010", "8010", "4020", "5020", "6020", "9020", "9500", "4600", "3100", "6850", "2700", "4400", "6800", "6900", "4060"];
  
  return {
    bestellnummer: "BST-" + Math.floor(Math.random() * 9000 + 1000),
    liefermaterialNummer: "LM-" + Math.floor(Math.random() * 900000 + 100000),
    lieferant: lieferanten[Math.floor(Math.random() * lieferanten.length)],
    preis: "€ " + (Math.random() * 500 + 5).toFixed(2),
    lieferdatum: new Date(2023 + Math.floor(Math.random() * 2), Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toLocaleDateString('de-AT'),
    plz: plz[Math.floor(Math.random() * plz.length)],
    ort: orte[Math.floor(Math.random() * orte.length)]
  };
}

const products = [
  // CIM
  {firma:"CIM", bereich:"ADVANTA", jahr:2023, produkt:"Kabelbinder 100mm schwarz", suchwort:"Kabelbinder", kategorie1:"Werkzeug", kategorie2:"Zubehör", ...generateRandomData()},
  {firma:"CIM", bereich:"ADVANTA", jahr:2024, produkt:"Kabelbinder 200mm weiß", suchwort:"Kabelbinder", kategorie1:"Werkzeug", kategorie2:"Zubehör", ...generateRandomData()},
  {firma:"CIM", bereich:"CD", jahr:2023, produkt:"Akku-Bohrschrauber Bosch", suchwort:"Bohrschrauber", kategorie1:"Werkzeug", kategorie2:"Elektrowerkzeug", ...generateRandomData()},
  {firma:"CIM", bereich:"CD", jahr:2024, produkt:"Bohrmaschine Makita", suchwort:"Bohrmaschine", kategorie1:"Werkzeug", kategorie2:"Elektrowerkzeug", ...generateRandomData()},
  {firma:"CIM", bereich:"CIT", jahr:2025, produkt:"USB-Stick 64GB", suchwort:"USB-Stick", kategorie1:"IT", kategorie2:"Speicher", ...generateRandomData()},
  {firma:"CIM", bereich:"CIT", jahr:2023, produkt:"USB-Stick 128GB", suchwort:"USB-Stick", kategorie1:"IT", kategorie2:"Speicher", ...generateRandomData()},
  {firma:"CIM", bereich:"DI CI", jahr:2024, produkt:"Monitor 24 Zoll", suchwort:"Monitor", kategorie1:"IT", kategorie2:"Hardware", ...generateRandomData()},
  {firma:"CIM", bereich:"DI CS FA", jahr:2025, produkt:"Monitor 27 Zoll", suchwort:"Monitor", kategorie1:"IT", kategorie2:"Hardware", ...generateRandomData()},
  {firma:"CIM", bereich:"DI CS MC", jahr:2023, produkt:"Drucker HP LaserJet", suchwort:"Drucker", kategorie1:"IT", kategorie2:"Hardware", ...generateRandomData()},
  {firma:"CIM", bereich:"DI FA", jahr:2024, produkt:"Tastatur Logitech", suchwort:"Tastatur", kategorie1:"IT", kategorie2:"Zubehör", ...generateRandomData()},
  {firma:"CIM", bereich:"DI MC", jahr:2025, produkt:"Maus Logitech", suchwort:"Maus", kategorie1:"IT", kategorie2:"Zubehör", ...generateRandomData()},
  {firma:"CIM", bereich:"DI PA", jahr:2023, produkt:"Schraubendreher Set", suchwort:"Schraubendreher", kategorie1:"Werkzeug", kategorie2:"Handwerkzeug", ...generateRandomData()},
  {firma:"CIM", bereich:"DI PA SIM", jahr:2024, produkt:"Schraubendreher Kreuz", suchwort:"Schraubendreher", kategorie1:"Werkzeug", kategorie2:"Handwerkzeug", ...generateRandomData()},
  {firma:"CIM", bereich:"GBS", jahr:2025, produkt:"Aktenordner A4", suchwort:"Ordner", kategorie1:"Büro", kategorie2:"Ablage", ...generateRandomData()},
  {firma:"CIM", bereich:"IT", jahr:2023, produkt:"Laptop Dell Latitude", suchwort:"Laptop", kategorie1:"IT", kategorie2:"Hardware", ...generateRandomData()},
  {firma:"CIM", bereich:"MO CI", jahr:2024, produkt:"Smartphone Samsung Galaxy", suchwort:"Handy", kategorie1:"IT", kategorie2:"Mobil", ...generateRandomData()},
  {firma:"CIM", bereich:"MPO CS", jahr:2025, produkt:"Smartphone Apple iPhone", suchwort:"Handy", kategorie1:"IT", kategorie2:"Mobil", ...generateRandomData()},
  {firma:"CIM", bereich:"MO RI", jahr:2023, produkt:"Headset Jabra", suchwort:"Headset", kategorie1:"IT", kategorie2:"Zubehör", ...generateRandomData()},
  {firma:"CIM", bereich:"MO RS", jahr:2024, produkt:"Webcam Logitech", suchwort:"Webcam", kategorie1:"IT", kategorie2:"Zubehör", ...generateRandomData()},
  {firma:"CIM", bereich:"SCM", jahr:2025, produkt:"USB-Hub 4-fach", suchwort:"USB-Hub", kategorie1:"IT", kategorie2:"Zubehör", ...generateRandomData()},
  {firma:"CIM", bereich:"SI B", jahr:2023, produkt:"Kabeltrommel 25m", suchwort:"Kabeltrommel", kategorie1:"Elektrik", kategorie2:"Zubehör", ...generateRandomData()},
  {firma:"CIM", bereich:"SI CI", jahr:2024, produkt:"Verlängerungskabel 10m", suchwort:"Kabel", kategorie1:"Elektrik", kategorie2:"Zubehör", ...generateRandomData()},
  {firma:"CIM", bereich:"SI E", jahr:2025, produkt:"Steckdosenleiste 6-fach", suchwort:"Steckdosenleiste", kategorie1:"Elektrik", kategorie2:"Zubehör", ...generateRandomData()},
  {firma:"CIM", bereich:"SI EA", jahr:2023, produkt:"Klebeband transparent", suchwort:"Klebeband", kategorie1:"Büro", kategorie2:"Verbrauchsmaterial", ...generateRandomData()},
  {firma:"CIM", bereich:"SI EP", jahr:2024, produkt:"Klebeband Gewebe", suchwort:"Klebeband", kategorie1:"Büro", kategorie2:"Verbrauchsmaterial", ...generateRandomData()},
  {firma:"CIM", bereich:"SI GSW", jahr:2025, produkt:"Papier A4 500 Blatt", suchwort:"Papier", kategorie1:"Büro", kategorie2:"Verbrauchsmaterial", ...generateRandomData()},
  {firma:"CIM", bereich:"SRE", jahr:2023, produkt:"Toner HP 85A", suchwort:"Toner", kategorie1:"IT", kategorie2:"Verbrauchsmaterial", ...generateRandomData()},
  {firma:"CIM", bereich:"TRE", jahr:2024, produkt:"Toner Brother TN-2420", suchwort:"Toner", kategorie1:"IT", kategorie2:"Verbrauchsmaterial", ...generateRandomData()},
  // ETM
  {firma:"ETM", bereich:"ADVANTA", jahr:2023, produkt:"Kabelbinder 300mm rot", suchwort:"Kabelbinder", kategorie1:"Werkzeug", kategorie2:"Zubehör", ...generateRandomData()},
  {firma:"ETM", bereich:"CD", jahr:2024, produkt:"Bohrmaschine Bosch", suchwort:"Bohrmaschine", kategorie1:"Werkzeug", kategorie2:"Elektrowerkzeug", ...generateRandomData()},
  {firma:"ETM", bereich:"CIT", jahr:2025, produkt:"USB-Stick 32GB", suchwort:"USB-Stick", kategorie1:"IT", kategorie2:"Speicher", ...generateRandomData()},
  {firma:"ETM", bereich:"DI CI", jahr:2023, produkt:"Monitor 22 Zoll", suchwort:"Monitor", kategorie1:"IT", kategorie2:"Hardware", ...generateRandomData()},
  {firma:"ETM", bereich:"DI CS FA", jahr:2024, produkt:"Monitor 27 Zoll curved", suchwort:"Monitor", kategorie1:"IT", kategorie2:"Hardware", ...generateRandomData()},
  {firma:"ETM", bereich:"DI CS MC", jahr:2025, produkt:"Drucker Canon", suchwort:"Drucker", kategorie1:"IT", kategorie2:"Hardware", ...generateRandomData()},
  {firma:"ETM", bereich:"DI FA", jahr:2023, produkt:"Tastatur Microsoft", suchwort:"Tastatur", kategorie1:"IT", kategorie2:"Zubehör", ...generateRandomData()},
  {firma:"ETM", bereich:"DI MC", jahr:2024, produkt:"Maus Microsoft", suchwort:"Maus", kategorie1:"IT", kategorie2:"Zubehör", ...generateRandomData()},
  {firma:"ETM", bereich:"DI PA", jahr:2025, produkt:"Schraubendreher Set Wiha", suchwort:"Schraubendreher", kategorie1:"Werkzeug", kategorie2:"Handwerkzeug", ...generateRandomData()},
  {firma:"ETM", bereich:"DI PA SIM", jahr:2023, produkt:"Schraubendreher Schlitz", suchwort:"Schraubendreher", kategorie1:"Werkzeug", kategorie2:"Handwerkzeug", ...generateRandomData()},
  {firma:"ETM", bereich:"GBS", jahr:2024, produkt:"Aktenordner A5", suchwort:"Ordner", kategorie1:"Büro", kategorie2:"Ablage", ...generateRandomData()},
  {firma:"ETM", bereich:"IT", jahr:2025, produkt:"Laptop HP ProBook", suchwort:"Laptop", kategorie1:"IT", kategorie2:"Hardware", ...generateRandomData()},
  {firma:"ETM", bereich:"MO CI", jahr:2023, produkt:"Smartphone Xiaomi", suchwort:"Handy", kategorie1:"IT", kategorie2:"Mobil", ...generateRandomData()},
  {firma:"ETM", bereich:"MPO CS", jahr:2024, produkt:"Smartphone Nokia", suchwort:"Handy", kategorie1:"IT", kategorie2:"Mobil", ...generateRandomData()},
  {firma:"ETM", bereich:"MO RI", jahr:2025, produkt:"Headset Logitech", suchwort:"Headset", kategorie1:"IT", kategorie2:"Zubehör", ...generateRandomData()},
  {firma:"ETM", bereich:"MO RS", jahr:2023, produkt:"Webcam Microsoft", suchwort:"Webcam", kategorie1:"IT", kategorie2:"Zubehör", ...generateRandomData()},
  {firma:"ETM", bereich:"SCM", jahr:2024, produkt:"USB-Hub 7-fach", suchwort:"USB-Hub", kategorie1:"IT", kategorie2:"Zubehör", ...generateRandomData()},
  {firma:"ETM", bereich:"SI B", jahr:2025, produkt:"Kabeltrommel 50m", suchwort:"Kabeltrommel", kategorie1:"Elektrik", kategorie2:"Zubehör", ...generateRandomData()},
  {firma:"ETM", bereich:"SI CI", jahr:2023, produkt:"Verlängerungskabel 20m", suchwort:"Kabel", kategorie1:"Elektrik", kategorie2:"Zubehör", ...generateRandomData()},
  {firma:"ETM", bereich:"SI E", jahr:2024, produkt:"Steckdosenleiste 4-fach", suchwort:"Steckdosenleiste", kategorie1:"Elektrik", kategorie2:"Zubehör", ...generateRandomData()},
  {firma:"ETM", bereich:"SI EA", jahr:2025, produkt:"Klebeband braun", suchwort:"Klebeband", kategorie1:"Büro", kategorie2:"Verbrauchsmaterial", ...generateRandomData()},
  {firma:"ETM", bereich:"SI EP", jahr:2023, produkt:"Klebeband doppelseitig", suchwort:"Klebeband", kategorie1:"Büro", kategorie2:"Verbrauchsmaterial", ...generateRandomData()},
  {firma:"ETM", bereich:"SI GSW", jahr:2024, produkt:"Papier A3 500 Blatt", suchwort:"Papier", kategorie1:"Büro", kategorie2:"Verbrauchsmaterial", ...generateRandomData()},
  {firma:"ETM", bereich:"SRE", jahr:2025, produkt:"Toner Canon 737", suchwort:"Toner", kategorie1:"IT", kategorie2:"Verbrauchsmaterial", ...generateRandomData()},
  {firma:"ETM", bereich:"TRE", jahr:2023, produkt:"Toner Brother TN-2410", suchwort:"Toner", kategorie1:"IT", kategorie2:"Verbrauchsmaterial", ...generateRandomData()},
  // SAGOE
  {firma:"SAGOE", bereich:"ADVANTA", jahr:2024, produkt:"Kabelbinder 150mm blau", suchwort:"Kabelbinder", kategorie1:"Werkzeug", kategorie2:"Zubehör", ...generateRandomData()},
  {firma:"SAGOE", bereich:"CD", jahr:2025, produkt:"Bohrmaschine Einhell", suchwort:"Bohrmaschine", kategorie1:"Werkzeug", kategorie2:"Elektrowerkzeug", ...generateRandomData()},
  {firma:"SAGOE", bereich:"CIT", jahr:2023, produkt:"USB-Stick 16GB", suchwort:"USB-Stick", kategorie1:"IT", kategorie2:"Speicher", ...generateRandomData()},
  {firma:"SAGOE", bereich:"DI CI", jahr:2024, produkt:"Monitor 19 Zoll", suchwort:"Monitor", kategorie1:"IT", kategorie2:"Hardware", ...generateRandomData()},
  {firma:"SAGOE", bereich:"DI CS FA", jahr:2025, produkt:"Monitor 32 Zoll", suchwort:"Monitor", kategorie1:"IT", kategorie2:"Hardware", ...generateRandomData()},
  {firma:"SAGOE", bereich:"DI CS MC", jahr:2023, produkt:"Drucker Epson", suchwort:"Drucker", kategorie1:"IT", kategorie2:"Hardware", ...generateRandomData()},
  {firma:"SAGOE", bereich:"DI FA", jahr:2024, produkt:"Tastatur Cherry", suchwort:"Tastatur", kategorie1:"IT", kategorie2:"Zubehör", ...generateRandomData()},
  {firma:"SAGOE", bereich:"DI MC", jahr:2025, produkt:"Maus Cherry", suchwort:"Maus", kategorie1:"IT", kategorie2:"Zubehör", ...generateRandomData()},
  {firma:"SAGOE", bereich:"DI PA", jahr:2023, produkt:"Schraubendreher Set Wera", suchwort:"Schraubendreher", kategorie1:"Werkzeug", kategorie2:"Handwerkzeug", ...generateRandomData()},
  {firma:"SAGOE", bereich:"DI PA SIM", jahr:2024, produkt:"Schraubendreher Pozidriv", suchwort:"Schraubendreher", kategorie1:"Werkzeug", kategorie2:"Handwerkzeug", ...generateRandomData()},
  {firma:"SAGOE", bereich:"GBS", jahr:2025, produkt:"Aktenordner A3", suchwort:"Ordner", kategorie1:"Büro", kategorie2:"Ablage", ...generateRandomData()},
  {firma:"SAGOE", bereich:"IT", jahr:2023, produkt:"Laptop Lenovo ThinkPad", suchwort:"Laptop", kategorie1:"IT", kategorie2:"Hardware", ...generateRandomData()},
  {firma:"SAGOE", bereich:"MO CI", jahr:2024, produkt:"Smartphone Google Pixel", suchwort:"Handy", kategorie1:"IT", kategorie2:"Mobil", ...generateRandomData()},
  {firma:"SAGOE", bereich:"MPO CS", jahr:2025, produkt:"Smartphone Sony Xperia", suchwort:"Handy", kategorie1:"IT", kategorie2:"Mobil", ...generateRandomData()},
  {firma:"SAGOE", bereich:"MO RI", jahr:2023, produkt:"Headset Sennheiser", suchwort:"Headset", kategorie1:"IT", kategorie2:"Zubehör", ...generateRandomData()},
  {firma:"SAGOE", bereich:"MO RS", jahr:2024, produkt:"Webcam Trust", suchwort:"Webcam", kategorie1:"IT", kategorie2:"Zubehör", ...generateRandomData()},
  {firma:"SAGOE", bereich:"SCM", jahr:2025, produkt:"USB-Hub 10-fach", suchwort:"USB-Hub", kategorie1:"IT", kategorie2:"Zubehör", ...generateRandomData()},
  {firma:"SAGOE", bereich:"SI B", jahr:2023, produkt:"Kabeltrommel 40m", suchwort:"Kabeltrommel", kategorie1:"Elektrik", kategorie2:"Zubehör", ...generateRandomData()},
  {firma:"SAGOE", bereich:"SI CI", jahr:2024, produkt:"Verlängerungskabel 5m", suchwort:"Kabel", kategorie1:"Elektrik", kategorie2:"Zubehör", ...generateRandomData()},
  {firma:"SAGOE", bereich:"SI E", jahr:2025, produkt:"Steckdosenleiste 8-fach", suchwort:"Steckdosenleiste", kategorie1:"Elektrik", kategorie2:"Zubehör", ...generateRandomData()},
  {firma:"SAGOE", bereich:"SI EA", jahr:2023, produkt:"Klebeband grün", suchwort:"Klebeband", kategorie1:"Büro", kategorie2:"Verbrauchsmaterial", ...generateRandomData()},
  {firma:"SAGOE", bereich:"SI EP", jahr:2024, produkt:"Klebeband rot", suchwort:"Klebeband", kategorie1:"Büro", kategorie2:"Verbrauchsmaterial", ...generateRandomData()},
  {firma:"SAGOE", bereich:"SI GSW", jahr:2025, produkt:"Papier A5 500 Blatt", suchwort:"Papier", kategorie1:"Büro", kategorie2:"Verbrauchsmaterial", ...generateRandomData()},
  {firma:"SAGOE", bereich:"SRE", jahr:2023, produkt:"Toner Kyocera TK-1120", suchwort:"Toner", kategorie1:"IT", kategorie2:"Verbrauchsmaterial", ...generateRandomData()},
  {firma:"SAGOE", bereich:"TRE", jahr:2024, produkt:"Toner Lexmark 502", suchwort:"Toner", kategorie1:"IT", kategorie2:"Verbrauchsmaterial", ...generateRandomData()},
  // SIE MO AT
  {firma:"SIE MO AT", bereich:"ADVANTA", jahr:2023, produkt:"Kabelbinder 250mm gelb", suchwort:"Kabelbinder", kategorie1:"Werkzeug", kategorie2:"Zubehör", ...generateRandomData()},
  {firma:"SIE MO AT", bereich:"CD", jahr:2024, produkt:"Bohrmaschine Metabo", suchwort:"Bohrmaschine", kategorie1:"Werkzeug", kategorie2:"Elektrowerkzeug", ...generateRandomData()},
  {firma:"SIE MO AT", bereich:"CIT", jahr:2025, produkt:"USB-Stick 256GB", suchwort:"USB-Stick", kategorie1:"IT", kategorie2:"Speicher", ...generateRandomData()},
  {firma:"SIE MO AT", bereich:"DI CI", jahr:2023, produkt:"Monitor 21 Zoll", suchwort:"Monitor", kategorie1:"IT", kategorie2:"Hardware", ...generateRandomData()},
  {firma:"SIE MO AT", bereich:"DI CS FA", jahr:2024, produkt:"Monitor 29 Zoll", suchwort:"Monitor", kategorie1:"IT", kategorie2:"Hardware", ...generateRandomData()},
  {firma:"SIE MO AT", bereich:"DI CS MC", jahr:2025, produkt:"Drucker Brother", suchwort:"Drucker", kategorie1:"IT", kategorie2:"Hardware", ...generateRandomData()},
  {firma:"SIE MO AT", bereich:"DI FA", jahr:2023, produkt:"Tastatur HP", suchwort:"Tastatur", kategorie1:"IT", kategorie2:"Zubehör", ...generateRandomData()},
  {firma:"SIE MO AT", bereich:"DI MC", jahr:2024, produkt:"Maus HP", suchwort:"Maus", kategorie1:"IT", kategorie2:"Zubehör", ...generateRandomData()},
  {firma:"SIE MO AT", bereich:"DI PA", jahr:2025, produkt:"Schraubendreher Set Hazet", suchwort:"Schraubendreher", kategorie1:"Werkzeug", kategorie2:"Handwerkzeug", ...generateRandomData()},
  {firma:"SIE MO AT", bereich:"DI PA SIM", jahr:2023, produkt:"Schraubendreher Torx", suchwort:"Schraubendreher", kategorie1:"Werkzeug", kategorie2:"Handwerkzeug", ...generateRandomData()},
  {firma:"SIE MO AT", bereich:"GBS", jahr:2024, produkt:"Aktenordner schmal", suchwort:"Ordner", kategorie1:"Büro", kategorie2:"Ablage", ...generateRandomData()},
  {firma:"SIE MO AT", bereich:"IT", jahr:2025, produkt:"Laptop Acer Aspire", suchwort:"Laptop", kategorie1:"IT", kategorie2:"Hardware", ...generateRandomData()},
  {firma:"SIE MO AT", bereich:"MO CI", jahr:2023, produkt:"Smartphone OnePlus", suchwort:"Handy", kategorie1:"IT", kategorie2:"Mobil", ...generateRandomData()},
  {firma:"SIE MO AT", bereich:"MPO CS", jahr:2024, produkt:"Smartphone Motorola", suchwort:"Handy", kategorie1:"IT", kategorie2:"Mobil", ...generateRandomData()},
  {firma:"SIE MO AT", bereich:"MO RI", jahr:2025, produkt:"Headset Plantronics", suchwort:"Headset", kategorie1:"IT", kategorie2:"Zubehör", ...generateRandomData()},
  {firma:"SIE MO AT", bereich:"MO RS", jahr:2023, produkt:"Webcam Aukey", suchwort:"Webcam", kategorie1:"IT", kategorie2:"Zubehör", ...generateRandomData()},
  {firma:"SIE MO AT", bereich:"SCM", jahr:2024, produkt:"USB-Hub 3-fach", suchwort:"USB-Hub", kategorie1:"IT", kategorie2:"Zubehör", ...generateRandomData()},
  {firma:"SIE MO AT", bereich:"SI B", jahr:2025, produkt:"Kabeltrommel 60m", suchwort:"Kabeltrommel", kategorie1:"Elektrik", kategorie2:"Zubehör", ...generateRandomData()},
  {firma:"SIE MO AT", bereich:"SI CI", jahr:2023, produkt:"Verlängerungskabel 15m", suchwort:"Kabel", kategorie1:"Elektrik", kategorie2:"Zubehör", ...generateRandomData()},
  {firma:"SIE MO AT", bereich:"SI E", jahr:2024, produkt:"Steckdosenleiste 10-fach", suchwort:"Steckdosenleiste", kategorie1:"Elektrik", kategorie2:"Zubehör", ...generateRandomData()},
  {firma:"SIE MO AT", bereich:"SI EA", jahr:2025, produkt:"Klebeband blau", suchwort:"Klebeband", kategorie1:"Büro", kategorie2:"Verbrauchsmaterial", ...generateRandomData()},
  {firma:"SIE MO AT", bereich:"SI EP", jahr:2023, produkt:"Klebeband gelb", suchwort:"Klebeband", kategorie1:"Büro", kategorie2:"Verbrauchsmaterial", ...generateRandomData()},
  {firma:"SIE MO AT", bereich:"SI GSW", jahr:2024, produkt:"Papier A4 1000 Blatt", suchwort:"Papier", kategorie1:"Büro", kategorie2:"Verbrauchsmaterial", ...generateRandomData()},
  {firma:"SIE MO AT", bereich:"SRE", jahr:2025, produkt:"Toner Samsung MLT-D111S", suchwort:"Toner", kategorie1:"IT", kategorie2:"Verbrauchsmaterial", ...generateRandomData()},
  {firma:"SIE MO AT", bereich:"TRE", jahr:2023, produkt:"Toner Ricoh SP 201", suchwort:"Toner", kategorie1:"IT", kategorie2:"Verbrauchsmaterial", ...generateRandomData()},

    // Additional IT Equipment
  {firma:"CIM", bereich:"IT", jahr:2023, produkt:"Docking Station USB-C", suchwort:"Dockingstation", kategorie1:"IT", kategorie2:"Zubehör", ...generateRandomData()},
  {firma:"ETM", bereich:"IT", jahr:2024, produkt:"Externe SSD 1TB", suchwort:"SSD", kategorie1:"IT", kategorie2:"Speicher", ...generateRandomData()},
  {firma:"SAGOE", bereich:"IT", jahr:2023, produkt:"Grafiktablett Wacom", suchwort:"Grafiktablett", kategorie1:"IT", kategorie2:"Eingabegerät", ...generateRandomData()},
  {firma:"SIE MO AT", bereich:"IT", jahr:2025, produkt:"UHD Monitor 27\" 4K", suchwort:"Monitor", kategorie1:"IT", kategorie2:"Hardware", ...generateRandomData()},
  {firma:"CIM", bereich:"CIT", jahr:2024, produkt:"Netzwerkkabel Cat.7 10m", suchwort:"Netzwerkkabel", kategorie1:"IT", kategorie2:"Netzwerk", ...generateRandomData()},
  {firma:"ETM", bereich:"CIT", jahr:2023, produkt:"WLAN Router 802.11ax", suchwort:"Router", kategorie1:"IT", kategorie2:"Netzwerk", ...generateRandomData()},
  {firma:"SAGOE", bereich:"CIT", jahr:2025, produkt:"LAN Switch 24 Port", suchwort:"Switch", kategorie1:"IT", kategorie2:"Netzwerk", ...generateRandomData()},
  {firma:"SIE MO AT", bereich:"CIT", jahr:2024, produkt:"NAS System 4-Bay", suchwort:"NAS", kategorie1:"IT", kategorie2:"Speicher", ...generateRandomData()},
  
  // Additional Tools & Hardware
  {firma:"CIM", bereich:"CD", jahr:2025, produkt:"Akkuschrauber Dewalt 18V", suchwort:"Akkuschrauber", kategorie1:"Werkzeug", kategorie2:"Elektrowerkzeug", ...generateRandomData()},
  {firma:"ETM", bereich:"CD", jahr:2023, produkt:"Kreissäge Festool", suchwort:"Kreissäge", kategorie1:"Werkzeug", kategorie2:"Elektrowerkzeug", ...generateRandomData()},
  {firma:"SAGOE", bereich:"CD", jahr:2024, produkt:"Schlagbohrmaschine Hilti", suchwort:"Bohrmaschine", kategorie1:"Werkzeug", kategorie2:"Elektrowerkzeug", ...generateRandomData()},
  {firma:"SIE MO AT", bereich:"CD", jahr:2023, produkt:"Stichsäge Milwaukee", suchwort:"Stichsäge", kategorie1:"Werkzeug", kategorie2:"Elektrowerkzeug", ...generateRandomData()},
  {firma:"CIM", bereich:"DI PA", jahr:2024, produkt:"Multimeter Fluke", suchwort:"Multimeter", kategorie1:"Werkzeug", kategorie2:"Messtechnik", ...generateRandomData()},
  {firma:"ETM", bereich:"DI PA", jahr:2025, produkt:"Oszilloskop Rigol", suchwort:"Oszilloskop", kategorie1:"Werkzeug", kategorie2:"Messtechnik", ...generateRandomData()},
  {firma:"SAGOE", bereich:"DI PA", jahr:2023, produkt:"Lasermessgerät Bosch", suchwort:"Lasermessgerät", kategorie1:"Werkzeug", kategorie2:"Messtechnik", ...generateRandomData()},
  {firma:"SIE MO AT", bereich:"DI PA", jahr:2024, produkt:"Wärmebildkamera Flir", suchwort:"Wärmebildkamera", kategorie1:"Werkzeug", kategorie2:"Messtechnik", ...generateRandomData()},
  
  // Additional Office Supplies
  {firma:"CIM", bereich:"GBS", jahr:2023, produkt:"Whiteboard 120x90cm", suchwort:"Whiteboard", kategorie1:"Büro", kategorie2:"Präsentation", ...generateRandomData()},
  {firma:"ETM", bereich:"GBS", jahr:2025, produkt:"Flipchart Standard", suchwort:"Flipchart", kategorie1:"Büro", kategorie2:"Präsentation", ...generateRandomData()},
  {firma:"SAGOE", bereich:"GBS", jahr:2024, produkt:"Druckerpapier A4 recycelt", suchwort:"Papier", kategorie1:"Büro", kategorie2:"Verbrauchsmaterial", ...generateRandomData()},
  {firma:"SIE MO AT", bereich:"GBS", jahr:2023, produkt:"Heftgerät Leitz", suchwort:"Heftgerät", kategorie1:"Büro", kategorie2:"Bürogeräte", ...generateRandomData()},
  {firma:"CIM", bereich:"GBS", jahr:2024, produkt:"Locher Novus", suchwort:"Locher", kategorie1:"Büro", kategorie2:"Bürogeräte", ...generateRandomData()},
  {firma:"ETM", bereich:"GBS", jahr:2023, produkt:"Präsentationsmappe", suchwort:"Mappe", kategorie1:"Büro", kategorie2:"Ablage", ...generateRandomData()},
  {firma:"SAGOE", bereich:"GBS", jahr:2025, produkt:"Rollcontainer mit Schubladen", suchwort:"Rollcontainer", kategorie1:"Büro", kategorie2:"Möbel", ...generateRandomData()},
  {firma:"SIE MO AT", bereich:"GBS", jahr:2024, produkt:"Schreibtisch höhenverstellbar", suchwort:"Schreibtisch", kategorie1:"Büro", kategorie2:"Möbel", ...generateRandomData()},
  
  // Industrial Components
  {firma:"CIM", bereich:"ADVANTA", jahr:2024, produkt:"Frequenzumrichter 7.5kW", suchwort:"Frequenzumrichter", kategorie1:"Automation", kategorie2:"Antriebstechnik", ...generateRandomData()},
  {firma:"ETM", bereich:"ADVANTA", jahr:2023, produkt:"Servomotor 3.5kW", suchwort:"Servomotor", kategorie1:"Automation", kategorie2:"Antriebstechnik", ...generateRandomData()},
  {firma:"SAGOE", bereich:"ADVANTA", jahr:2025, produkt:"SPS Siemens S7-1500", suchwort:"SPS", kategorie1:"Automation", kategorie2:"Steuerungstechnik", ...generateRandomData()},
  {firma:"SIE MO AT", bereich:"ADVANTA", jahr:2024, produkt:"HMI Panel 15 Zoll", suchwort:"HMI", kategorie1:"Automation", kategorie2:"Visualisierung", ...generateRandomData()},
  {firma:"CIM", bereich:"DI CS MC", jahr:2023, produkt:"Drucksensor 0-10bar", suchwort:"Drucksensor", kategorie1:"Automation", kategorie2:"Sensorik", ...generateRandomData()},
  {firma:"ETM", bereich:"DI CS MC", jahr:2025, produkt:"Temperaturfühler PT100", suchwort:"Temperaturfühler", kategorie1:"Automation", kategorie2:"Sensorik", ...generateRandomData()},
  {firma:"SAGOE", bereich:"DI CS MC", jahr:2024, produkt:"Lichtschranke Reflex", suchwort:"Lichtschranke", kategorie1:"Automation", kategorie2:"Sensorik", ...generateRandomData()},
  {firma:"SIE MO AT", bereich:"DI CS MC", jahr:2023, produkt:"Näherungsschalter induktiv", suchwort:"Näherungsschalter", kategorie1:"Automation", kategorie2:"Sensorik", ...generateRandomData()},
  
  // Electrical Items
  {firma:"CIM", bereich:"SI E", jahr:2025, produkt:"Schaltschrank 800x600x200", suchwort:"Schaltschrank", kategorie1:"Elektrik", kategorie2:"Installation", ...generateRandomData()},
  {firma:"ETM", bereich:"SI E", jahr:2024, produkt:"Leitungsschutzschalter B16A", suchwort:"Leitungsschutzschalter", kategorie1:"Elektrik", kategorie2:"Schutzschalter", ...generateRandomData()},
  {firma:"SAGOE", bereich:"SI E", jahr:2023, produkt:"FI-Schutzschalter 40A/30mA", suchwort:"FI-Schalter", kategorie1:"Elektrik", kategorie2:"Schutzschalter", ...generateRandomData()},
  {firma:"SIE MO AT", bereich:"SI E", jahr:2025, produkt:"Motorschutzschalter 10-16A", suchwort:"Motorschutzschalter", kategorie1:"Elektrik", kategorie2:"Schutzschalter", ...generateRandomData()},
  {firma:"CIM", bereich:"SI B", jahr:2024, produkt:"Hutschiene 2m", suchwort:"Hutschiene", kategorie1:"Elektrik", kategorie2:"Installation", ...generateRandomData()},
  {firma:"ETM", bereich:"SI B", jahr:2023, produkt:"Verdrahtungskanal 40x60mm", suchwort:"Verdrahtungskanal", kategorie1:"Elektrik", kategorie2:"Installation", ...generateRandomData()},
  {firma:"SAGOE", bereich:"SI B", jahr:2025, produkt:"Klemmenblock 12-fach", suchwort:"Klemmenblock", kategorie1:"Elektrik", kategorie2:"Installation", ...generateRandomData()},
  {firma:"SIE MO AT", bereich:"SI B", jahr:2024, produkt:"Phasenschiene 3-polig", suchwort:"Phasenschiene", kategorie1:"Elektrik", kategorie2:"Installation", ...generateRandomData()},
  
  // Safety Equipment
  {firma:"CIM", bereich:"SI GSW", jahr:2023, produkt:"Sicherheitshelm weiß", suchwort:"Schutzhelm", kategorie1:"Sicherheit", kategorie2:"PSA", ...generateRandomData()},
  {firma:"ETM", bereich:"SI GSW", jahr:2025, produkt:"Schutzbrille klar", suchwort:"Schutzbrille", kategorie1:"Sicherheit", kategorie2:"PSA", ...generateRandomData()},
  {firma:"SAGOE", bereich:"SI GSW", jahr:2024, produkt:"Gehörschutz 33dB", suchwort:"Gehörschutz", kategorie1:"Sicherheit", kategorie2:"PSA", ...generateRandomData()},
  {firma:"SIE MO AT", bereich:"SI GSW", jahr:2023, produkt:"Sicherheitsschuhe S3", suchwort:"Sicherheitsschuhe", kategorie1:"Sicherheit", kategorie2:"PSA", ...generateRandomData()},
  {firma:"CIM", bereich:"SI GSW", jahr:2025, produkt:"Warnweste orange", suchwort:"Warnweste", kategorie1:"Sicherheit", kategorie2:"PSA", ...generateRandomData()},
  {firma:"ETM", bereich:"SI GSW", jahr:2024, produkt:"Schutzhandschuhe Mechanik", suchwort:"Schutzhandschuhe", kategorie1:"Sicherheit", kategorie2:"PSA", ...generateRandomData()},
  {firma:"SAGOE", bereich:"SI GSW", jahr:2023, produkt:"Erste-Hilfe-Koffer DIN 13157", suchwort:"Erste-Hilfe", kategorie1:"Sicherheit", kategorie2:"Notfall", ...generateRandomData()},
  {firma:"SIE MO AT", bereich:"SI GSW", jahr:2025, produkt:"Feuerlöscher ABC 6kg", suchwort:"Feuerlöscher", kategorie1:"Sicherheit", kategorie2:"Brandschutz", ...generateRandomData()},
  
  // Communication Devices
  {firma:"CIM", bereich:"MO CI", jahr:2024, produkt:"Mobiltelefon robustes Outdoor", suchwort:"Handy", kategorie1:"IT", kategorie2:"Mobil", ...generateRandomData()},
  {firma:"ETM", bereich:"MO CI", jahr:2023, produkt:"Tablet Samsung Galaxy Tab", suchwort:"Tablet", kategorie1:"IT", kategorie2:"Mobil", ...generateRandomData()},
  {firma:"SAGOE", bereich:"MO CI", jahr:2025, produkt:"Tablet Apple iPad Pro", suchwort:"Tablet", kategorie1:"IT", kategorie2:"Mobil", ...generateRandomData()},
  {firma:"SIE MO AT", bereich:"MO CI", jahr:2024, produkt:"Mobiltelefon iPhone Pro", suchwort:"Handy", kategorie1:"IT", kategorie2:"Mobil", ...generateRandomData()},
  {firma:"CIM", bereich:"MO RI", jahr:2023, produkt:"Bluetooth Lautsprecher", suchwort:"Lautsprecher", kategorie1:"IT", kategorie2:"Audio", ...generateRandomData()},
  {firma:"ETM", bereich:"MO RI", jahr:2025, produkt:"Konferenzlautsprecher", suchwort:"Konferenzsystem", kategorie1:"IT", kategorie2:"Audio", ...generateRandomData()},
  {firma:"SAGOE", bereich:"MO RI", jahr:2024, produkt:"Videokonferenzsystem", suchwort:"Konferenzsystem", kategorie1:"IT", kategorie2:"Kommunikation", ...generateRandomData()},
  {firma:"SIE MO AT", bereich:"MO RI", jahr:2023, produkt:"Digitalfunkgerät DMR", suchwort:"Funkgerät", kategorie1:"IT", kategorie2:"Kommunikation", ...generateRandomData()},
  
  // Additional Networking Equipment
  {firma:"CIM", bereich:"DI CI", jahr:2024, produkt:"19\" Netzwerkschrank 42HE", suchwort:"Netzwerkschrank", kategorie1:"IT", kategorie2:"Netzwerk", ...generateRandomData()},
  {firma:"ETM", bereich:"DI CI", jahr:2025, produkt:"Patchpanel 24 Port Cat.6a", suchwort:"Patchpanel", kategorie1:"IT", kategorie2:"Netzwerk", ...generateRandomData()},
  {firma:"SAGOE", bereich:"DI CI", jahr:2023, produkt:"Glasfaser Switch 10GbE", suchwort:"Switch", kategorie1:"IT", kategorie2:"Netzwerk", ...generateRandomData()},
  {firma:"SIE MO AT", bereich:"DI CI", jahr:2024, produkt:"PoE Injektor 802.3at", suchwort:"PoE", kategorie1:"IT", kategorie2:"Netzwerk", ...generateRandomData()},
  {firma:"CIM", bereich:"CIT", jahr:2023, produkt:"Netzwerkkabel Cat.8 5m", suchwort:"Netzwerkkabel", kategorie1:"IT", kategorie2:"Netzwerk", ...generateRandomData()},
  {firma:"ETM", bereich:"CIT", jahr:2025, produkt:"Glasfaserkabel OM4 LC-LC", suchwort:"Glasfaserkabel", kategorie1:"IT", kategorie2:"Netzwerk", ...generateRandomData()},
  
  // Additional IT Accessories
  {firma:"SAGOE", bereich:"MO CI", jahr:2024, produkt:"USB-C Dock mit HDMI/DP", suchwort:"Dock", kategorie1:"IT", kategorie2:"Zubehör", ...generateRandomData()},
  {firma:"SIE MO AT", bereich:"MO CI", jahr:2025, produkt:"Laptop Sleeve 15\"", suchwort:"Laptoptasche", kategorie1:"IT", kategorie2:"Zubehör", ...generateRandomData()},
  {firma:"CIM", bereich:"IT", jahr:2023, produkt:"Notebook Rucksack", suchwort:"Rucksack", kategorie1:"IT", kategorie2:"Zubehör", ...generateRandomData()},
  {firma:"ETM", bereich:"IT", jahr:2024, produkt:"Ergonomische Mausmatte", suchwort:"Mausmatte", kategorie1:"IT", kategorie2:"Zubehör", ...generateRandomData()},
  {firma:"SAGOE", bereich:"IT", jahr:2025, produkt:"Notebook Ständer höhenverstellbar", suchwort:"Laptopständer", kategorie1:"IT", kategorie2:"Zubehör", ...generateRandomData()},
  
  // Specialized IT Equipment
  {firma:"SIE MO AT", bereich:"CIT", jahr:2023, produkt:"Server Rack Mount 2U", suchwort:"Server", kategorie1:"IT", kategorie2:"Hardware", ...generateRandomData()},
  {firma:"CIM", bereich:"CIT", jahr:2024, produkt:"Firewall Appliance", suchwort:"Firewall", kategorie1:"IT", kategorie2:"Netzwerksicherheit", ...generateRandomData()},
  {firma:"ETM", bereich:"CIT", jahr:2025, produkt:"USV 1500VA Rack", suchwort:"USV", kategorie1:"IT", kategorie2:"Stromversorgung", ...generateRandomData()},
  {firma:"SAGOE", bereich:"CIT", jahr:2023, produkt:"KVM Switch 8-Port", suchwort:"KVM", kategorie1:"IT", kategorie2:"Hardware", ...generateRandomData()},
  {firma:"SIE MO AT", bereich:"CIT", jahr:2024, produkt:"WLAN Access Point 802.11ax", suchwort:"Access Point", kategorie1:"IT", kategorie2:"Netzwerk", ...generateRandomData()},
  
  // More Advanced Tools
  {firma:"CIM", bereich:"CD", jahr:2025, produkt:"Laser-Distanzmesser 50m", suchwort:"Laser-Distanzmesser", kategorie1:"Werkzeug", kategorie2:"Messtechnik", ...generateRandomData()},
  {firma:"ETM", bereich:"CD", jahr:2023, produkt:"Digitalspurgerät magnetisch", suchwort:"Spurgerät", kategorie1:"Werkzeug", kategorie2:"Messtechnik", ...generateRandomData()},
  {firma:"SAGOE", bereich:"CD", jahr:2024, produkt:"Winkelschleifer 230mm", suchwort:"Winkelschleifer", kategorie1:"Werkzeug", kategorie2:"Elektrowerkzeug", ...generateRandomData()},
  {firma:"SIE MO AT", bereich:"CD", jahr:2023, produkt:"Schlagschrauber 18V", suchwort:"Schlagschrauber", kategorie1:"Werkzeug", kategorie2:"Elektrowerkzeug", ...generateRandomData()},
  {firma:"CIM", bereich:"DI PA", jahr:2024, produkt:"Präzisions-Schraubendreher Set", suchwort:"Schraubendreher", kategorie1:"Werkzeug", kategorie2:"Handwerkzeug", ...generateRandomData()},
  
  // Hand Tools and Sets
  {firma:"ETM", bereich:"DI PA", jahr:2025, produkt:"Steckschlüsselsatz 1/2\"", suchwort:"Steckschlüssel", kategorie1:"Werkzeug", kategorie2:"Handwerkzeug", ...generateRandomData()},
  {firma:"SAGOE", bereich:"DI PA", jahr:2023, produkt:"Zangensatz VDE 3-teilig", suchwort:"Zangen", kategorie1:"Werkzeug", kategorie2:"Handwerkzeug", ...generateRandomData()},
  {firma:"SIE MO AT", bereich:"DI PA", jahr:2024, produkt:"Wasserpumpenzange 250mm", suchwort:"Zange", kategorie1:"Werkzeug", kategorie2:"Handwerkzeug", ...generateRandomData()},
  {firma:"CIM", bereich:"DI PA", jahr:2025, produkt:"Rollgabelschlüssel 300mm", suchwort:"Rollgabelschlüssel", kategorie1:"Werkzeug", kategorie2:"Handwerkzeug", ...generateRandomData()},
  {firma:"ETM", bereich:"DI PA", jahr:2023, produkt:"Seitenschneider 160mm", suchwort:"Seitenschneider", kategorie1:"Werkzeug", kategorie2:"Handwerkzeug", ...generateRandomData()},
  
  // More Industrial Components
  {firma:"SAGOE", bereich:"ADVANTA", jahr:2024, produkt:"Druckluftkompressor 10bar", suchwort:"Kompressor", kategorie1:"Werkstatt", kategorie2:"Druckluft", ...generateRandomData()},
  {firma:"SIE MO AT", bereich:"ADVANTA", jahr:2025, produkt:"Druckluftzylinder 63mm", suchwort:"Druckluftzylinder", kategorie1:"Pneumatik", kategorie2:"Aktor", ...generateRandomData()},
  {firma:"CIM", bereich:"ADVANTA", jahr:2023, produkt:"Hydraulikzylinder 100mm", suchwort:"Hydraulikzylinder", kategorie1:"Hydraulik", kategorie2:"Aktor", ...generateRandomData()},
  {firma:"ETM", bereich:"ADVANTA", jahr:2024, produkt:"Hydraulikventil 3/2-Wege", suchwort:"Hydraulikventil", kategorie1:"Hydraulik", kategorie2:"Ventil", ...generateRandomData()},
  {firma:"SAGOE", bereich:"ADVANTA", jahr:2025, produkt:"Pneumatikventil 5/3-Wege", suchwort:"Pneumatikventil", kategorie1:"Pneumatik", kategorie2:"Ventil", ...generateRandomData()},
  
  // Maintenance Equipment
  {firma:"SIE MO AT", bereich:"DI MC", jahr:2023, produkt:"Schmieröl-Set", suchwort:"Schmieröl", kategorie1:"Wartung", kategorie2:"Schmiermittel", ...generateRandomData()},
  {firma:"CIM", bereich:"DI MC", jahr:2024, produkt:"Fett für Wälzlager", suchwort:"Fett", kategorie1:"Wartung", kategorie2:"Schmiermittel", ...generateRandomData()},
  {firma:"ETM", bereich:"DI MC", jahr:2025, produkt:"Schmierpresse hydraulisch", suchwort:"Schmierpresse", kategorie1:"Wartung", kategorie2:"Werkzeug", ...generateRandomData()},
  {firma:"SAGOE", bereich:"DI MC", jahr:2023, produkt:"Reinigungsset für Elektronik", suchwort:"Reinigungsset", kategorie1:"Wartung", kategorie2:"Reinigung", ...generateRandomData()},
  {firma:"SIE MO AT", bereich:"DI MC", jahr:2024, produkt:"Druckluft-Reinigungspistole", suchwort:"Reinigungspistole", kategorie1:"Wartung", kategorie2:"Druckluft", ...generateRandomData()},
  
  // Advanced Measurement Devices
  {firma:"CIM", bereich:"DI PA", jahr:2025, produkt:"Netzwerkanalysator", suchwort:"Netzwerkanalysator", kategorie1:"IT", kategorie2:"Messtechnik", ...generateRandomData()},
  {firma:"ETM", bereich:"DI PA", jahr:2023, produkt:"Kabeltester RJ45/Koax", suchwort:"Kabeltester", kategorie1:"IT", kategorie2:"Messtechnik", ...generateRandomData()},
  {firma:"SAGOE", bereich:"DI PA", jahr:2024, produkt:"Thermografie-Kamera", suchwort:"Thermokamera", kategorie1:"Werkzeug", kategorie2:"Messtechnik", ...generateRandomData()},
  {firma:"SIE MO AT", bereich:"DI PA", jahr:2025, produkt:"Ultraschall-Dickenmessgerät", suchwort:"Dickenmessgerät", kategorie1:"Werkzeug", kategorie2:"Messtechnik", ...generateRandomData()},
  {firma:"CIM", bereich:"DI PA", jahr:2023, produkt:"Laser-Nivelliergerät", suchwort:"Nivelliergerät", kategorie1:"Werkzeug", kategorie2:"Messtechnik", ...generateRandomData()},
  
  // Advanced Sensors and Automation
  {firma:"ETM", bereich:"DI CS MC", jahr:2024, produkt:"Ultraschall-Füllstandssensor", suchwort:"Füllstandssensor", kategorie1:"Automation", kategorie2:"Sensorik", ...generateRandomData()},
  {firma:"SAGOE", bereich:"DI CS MC", jahr:2025, produkt:"Durchflussmessgerät magnetisch", suchwort:"Durchflussmesser", kategorie1:"Automation", kategorie2:"Sensorik", ...generateRandomData()},
  {firma:"SIE MO AT", bereich:"DI CS MC", jahr:2023, produkt:"Drehgeber inkrementell", suchwort:"Drehgeber", kategorie1:"Automation", kategorie2:"Sensorik", ...generateRandomData()},
  {firma:"CIM", bereich:"DI CS MC", jahr:2024, produkt:"Servo Controller 3-Achsen", suchwort:"Servo Controller", kategorie1:"Automation", kategorie2:"Steuerung", ...generateRandomData()},
  {firma:"ETM", bereich:"DI CS MC", jahr:2025, produkt:"Optischer Positionssensor", suchwort:"Positionssensor", kategorie1:"Automation", kategorie2:"Sensorik", ...generateRandomData()},
  
  // More Office Equipment
  {firma:"SAGOE", bereich:"GBS", jahr:2023, produkt:"Ergonomischer Bürostuhl", suchwort:"Bürostuhl", kategorie1:"Büro", kategorie2:"Möbel", ...generateRandomData()},
  {firma:"SIE MO AT", bereich:"GBS", jahr:2024, produkt:"LED Schreibtischleuchte", suchwort:"Schreibtischleuchte", kategorie1:"Büro", kategorie2:"Beleuchtung", ...generateRandomData()},
  {firma:"CIM", bereich:"GBS", jahr:2025, produkt:"Dokumentenvernichter Sicherheitsstufe P-4", suchwort:"Dokumentenvernichter", kategorie1:"Büro", kategorie2:"Bürogeräte", ...generateRandomData()},
  {firma:"ETM", bereich:"GBS", jahr:2023, produkt:"Laminiergerät A3", suchwort:"Laminiergerät", kategorie1:"Büro", kategorie2:"Bürogeräte", ...generateRandomData()},
  {firma:"SAGOE", bereich:"GBS", jahr:2024, produkt:"Bindegerät Spiralbindung", suchwort:"Bindegerät", kategorie1:"Büro", kategorie2:"Bürogeräte", ...generateRandomData()},
  
  // Laboratory Equipment
  {firma:"SIE MO AT", bereich:"SI EP", jahr:2025, produkt:"Labornetzteil 0-30V/0-10A", suchwort:"Labornetzteil", kategorie1:"Labor", kategorie2:"Stromversorgung", ...generateRandomData()},
  {firma:"CIM", bereich:"SI EP", jahr:2023, produkt:"Digitales Mikroskop 1000x", suchwort:"Mikroskop", kategorie1:"Labor", kategorie2:"Optik", ...generateRandomData()},
  {firma:"ETM", bereich:"SI EP", jahr:2024, produkt:"Präzisionswaage 0.001g", suchwort:"Waage", kategorie1:"Labor", kategorie2:"Messinstrument", ...generateRandomData()},
  {firma:"SAGOE", bereich:"SI EP", jahr:2025, produkt:"Elektronischer Messschieber", suchwort:"Messschieber", kategorie1:"Labor", kategorie2:"Messinstrument", ...generateRandomData()},
  {firma:"SIE MO AT", bereich:"SI EP", jahr:2023, produkt:"Digitaler Bügelmessschraube", suchwort:"Messschraube", kategorie1:"Labor", kategorie2:"Messinstrument", ...generateRandomData()},
  
  // More Safety Equipment
  {firma:"CIM", bereich:"SI GSW", jahr:2024, produkt:"Absturzsicherungsset", suchwort:"Absturzsicherung", kategorie1:"Sicherheit", kategorie2:"PSA", ...generateRandomData()},
  {firma:"ETM", bereich:"SI GSW", jahr:2025, produkt:"Schweißschutzschirm automatisch", suchwort:"Schweißschutzschirm", kategorie1:"Sicherheit", kategorie2:"PSA", ...generateRandomData()},
  {firma:"SAGOE", bereich:"SI GSW", jahr:2023, produkt:"Atemschutzmaske FFP3", suchwort:"Atemschutzmaske", kategorie1:"Sicherheit", kategorie2:"PSA", ...generateRandomData()},
  {firma:"SIE MO AT", bereich:"SI GSW", jahr:2024, produkt:"Chemikalienschutzhandschuhe", suchwort:"Schutzhandschuhe", kategorie1:"Sicherheit", kategorie2:"PSA", ...generateRandomData()},
  {firma:"CIM", bereich:"SI GSW", jahr:2025, produkt:"Notfall-Augenspülflasche", suchwort:"Augenspülflasche", kategorie1:"Sicherheit", kategorie2:"Notfall", ...generateRandomData()},
  
  // Enhanced Cable Management
  {firma:"ETM", bereich:"SI B", jahr:2023, produkt:"Kabelkanal 40x60mm weiß", suchwort:"Kabelkanal", kategorie1:"Elektrik", kategorie2:"Installation", ...generateRandomData()},
  {firma:"SAGOE", bereich:"SI B", jahr:2024, produkt:"Kabeldurchführung schwarz", suchwort:"Kabeldurchführung", kategorie1:"Elektrik", kategorie2:"Installation", ...generateRandomData()},
  {firma:"SIE MO AT", bereich:"SI B", jahr:2025, produkt:"Kabelschellen 100 Stück", suchwort:"Kabelschellen", kategorie1:"Elektrik", kategorie2:"Installation", ...generateRandomData()},
  {firma:"CIM", bereich:"SI B", jahr:2023, produkt:"Spiralschlauch 10m", suchwort:"Spiralschlauch", kategorie1:"Elektrik", kategorie2:"Kabelschutz", ...generateRandomData()},
  {firma:"ETM", bereich:"SI B", jahr:2024, produkt:"Wellrohr M20 grau", suchwort:"Wellrohr", kategorie1:"Elektrik", kategorie2:"Kabelschutz", ...generateRandomData()},
  
  // Software and Licenses
  {firma:"SAGOE", bereich:"CIT", jahr:2025, produkt:"Windows 11 Pro Lizenz", suchwort:"Windows", kategorie1:"IT", kategorie2:"Software", ...generateRandomData()},
  {firma:"SIE MO AT", bereich:"CIT", jahr:2023, produkt:"Office 365 Business", suchwort:"Office", kategorie1:"IT", kategorie2:"Software", ...generateRandomData()},
  {firma:"CIM", bereich:"CIT", jahr:2024, produkt:"AutoCAD 2023 Lizenz", suchwort:"AutoCAD", kategorie1:"IT", kategorie2:"Software", ...generateRandomData()},
  {firma:"ETM", bereich:"CIT", jahr:2025, produkt:"Adobe Creative Cloud", suchwort:"Adobe", kategorie1:"IT", kategorie2:"Software", ...generateRandomData()},
  {firma:"SAGOE", bereich:"CIT", jahr:2023, produkt:"SIMATIC STEP 7 Professional", suchwort:"STEP 7", kategorie1:"Automation", kategorie2:"Software", ...generateRandomData()},
  
  // More Storage Solutions
  {firma:"SIE MO AT", bereich:"GBS", jahr:2024, produkt:"Aktenschrank 4 Schubladen", suchwort:"Aktenschrank", kategorie1:"Büro", kategorie2:"Möbel", ...generateRandomData()},
  {firma:"CIM", bereich:"GBS", jahr:2025, produkt:"Werkzeugwagen mit 7 Schubladen", suchwort:"Werkzeugwagen", kategorie1:"Werkstatt", kategorie2:"Aufbewahrung", ...generateRandomData()},
  {firma:"ETM", bereich:"GBS", jahr:2023, produkt:"Sortimentskasten Kleinteile", suchwort:"Sortimentskasten", kategorie1:"Werkstatt", kategorie2:"Aufbewahrung", ...generateRandomData()},
  {firma:"SAGOE", bereich:"GBS", jahr:2024, produkt:"Materialcontainer abschließbar", suchwort:"Container", kategorie1:"Werkstatt", kategorie2:"Aufbewahrung", ...generateRandomData()},
  {firma:"SIE MO AT", bereich:"GBS", jahr:2025, produkt:"Schwerlastregale 200kg/Boden", suchwort:"Regale", kategorie1:"Werkstatt", kategorie2:"Aufbewahrung", ...generateRandomData()},
];

// --- Suchwort-Management (nur für die Sitzung) ---
let sessionSearchwords = null;

function getInitialSearchwords() {
  // Nur Suchwörter mit mehr als 2 Vorkommen (wie vorher im Dropdown)
  const searchWordCounts = {};
  products.forEach(p => {
    searchWordCounts[p.suchwort] = (searchWordCounts[p.suchwort] || 0) + 1;
  });
  const allowed = Object.keys(searchWordCounts).filter(word => searchWordCounts[word] > 2);

  const map = {};
  products.forEach(p => {
    if (allowed.includes(p.suchwort) && !map[p.suchwort]) {
      map[p.suchwort] = { suchwort: p.suchwort, kat1: p.simplifiedKat1, kat2: p.simplifiedKat2 };
    }
  });
  return Object.values(map);
}

function resetSessionSearchwords() {
  sessionSearchwords = getInitialSearchwords();
}

function renderSearchwordList() {
  const ul = document.getElementById("searchwordList");
  ul.innerHTML = "";
  sessionSearchwords.forEach((entry, idx) => {
    const li = document.createElement("li");
    li.style.display = "flex";
    li.style.alignItems = "center";
    li.style.justifyContent = "space-between";
    li.style.gap = "0.5rem";
    li.innerHTML = `<span>${entry.suchwort} <small style="color:#888;">(${entry.kat1}/${entry.kat2})</small></span>`;
    // Löschen-Button
    const delBtn = document.createElement("button");
    delBtn.innerHTML = '<i class="fas fa-trash"></i>';
    delBtn.title = "Suchwort löschen";
    delBtn.className = "btn-secondary";
    delBtn.style.padding = "0.2rem 0.7rem";
    delBtn.style.fontSize = "0.9rem";
    delBtn.addEventListener("click", () => {
      sessionSearchwords.splice(idx, 1);
      updateSearchwordSelects();
      renderSearchwordList();
      applyFilters();
    });
    li.appendChild(delBtn);
    ul.appendChild(li);
  });
}

function updateSearchwordSelects() {
  // Nur Suchwörter aus sessionSearchwords anzeigen
  const select = document.getElementById("searchwordSelect");
  const current = select.value;
  const placeholder = select.querySelector('option[value=""]').textContent;
  select.innerHTML = `<option value="">${placeholder}</option>`;
  sessionSearchwords.forEach(entry => {
    const opt = document.createElement("option");
    opt.value = entry.suchwort;
    opt.textContent = entry.suchwort;
    select.appendChild(opt);
  });
  select.value = current;
}

function getCategoryOptions(type) {
  // Hole alle möglichen Kategorien aus den Selects
  const sel = document.getElementById(type === 1 ? "cat1Select" : "cat2Select");
  return Array.from(sel.options)
    .filter(opt => opt.value)
    .map(opt => opt.value);
}

function setupSearchwordManager() {
  // Fülle die Kategorie-Selects für das Hinzufügen-Formular
  const cat1Opts = getCategoryOptions(1);
  const cat2Opts = getCategoryOptions(2);
  const cat1Sel = document.getElementById("newCat1Select");
  const cat2Sel = document.getElementById("newCat2Select");
  cat1Sel.innerHTML = `<option value="">Kategorie 1 wählen...</option>` + cat1Opts.map(c => `<option value="${c}">${c}</option>`).join("");
  cat2Sel.innerHTML = `<option value="">Kategorie 2 wählen...</option>` + cat2Opts.map(c => `<option value="${c}">${c}</option>`).join("");

  // Hinzufügen-Formular
  document.getElementById("addSearchwordForm").addEventListener("submit", e => {
    e.preventDefault();
    const suchwort = document.getElementById("newSearchwordInput").value.trim();
    const kat1 = cat1Sel.value;
    const kat2 = cat2Sel.value;
    if (!suchwort || !kat1 || !kat2) return;
    // Keine Duplikate
    if (sessionSearchwords.some(e => e.suchwort.toLowerCase() === suchwort.toLowerCase())) {
      alert("Suchwort existiert bereits.");
      return;
    }
    sessionSearchwords.push({ suchwort, kat1, kat2 });
    updateSearchwordSelects();
    renderSearchwordList();
    document.getElementById("newSearchwordInput").value = "";
    cat1Sel.value = "";
    cat2Sel.value = "";
  });
}

// Patch: Wenn ein Suchwort gewählt wird, hole die Kategorien aus sessionSearchwords
function handleSearchwordCategorySync() {
  const suchwort = document.getElementById("searchwordSelect").value;
  const cat1Select = document.getElementById("cat1Select");
  const cat2Select = document.getElementById("cat2Select");

  if (suchwort) {
    // Hole aus sessionSearchwords
    const entry = sessionSearchwords.find(e => e.suchwort === suchwort);
    if (entry) {
      cat1Select.value = entry.kat1;
      cat2Select.value = entry.kat2;
    } else {
      // Fallback: Produktdaten
      const prod = products.find(p => p.suchwort === suchwort);
      if (prod) {
        cat1Select.value = prod.simplifiedKat1;
        cat2Select.value = prod.simplifiedKat2;
      }
    }
    cat1Select.disabled = true;
    cat2Select.disabled = true;
    cat1Select.classList.add("select-disabled");
    cat2Select.classList.add("select-disabled");
  } else {
    enableCategorySelects();
  }
}

// Patch: Filterung nach sessionSearchwords
function applyFilters(){
  const firma = document.getElementById("firmaSelect").value;
  const bereich = document.getElementById("bereichSelect").value;
  const jahr = document.getElementById("jahrSelect").value;
  const searchIndex = document.getElementById("searchIndexInput").value.trim().toLowerCase();
  const suchwort = document.getElementById("searchwordSelect").value;
  const cat1 = document.getElementById("cat1Select").value;
  const cat2 = document.getElementById("cat2Select").value;

  let filtered;
  if (suchwort) {
    filtered = products.filter(p =>
      (!firma || p.firma === firma) &&
      (!bereich || p.bereich === bereich) &&
      (!jahr || p.jahr.toString() === jahr) &&
      (!searchIndex || p.produkt.toLowerCase().includes(searchIndex)) &&
      (p.suchwort === suchwort)
    );
  } else {
    filtered = products.filter(p =>
      (!firma || p.firma === firma) &&
      (!bereich || p.bereich === bereich) &&
      (!jahr || p.jahr.toString() === jahr) &&
      (!searchIndex || p.produkt.toLowerCase().includes(searchIndex)) &&
      (!cat1 || p.simplifiedKat1 === cat1) &&
      (!cat2 || p.simplifiedKat2 === cat2)
    );
  }

  renderProducts(filtered);
  renderSuggestions(searchIndex);
}

// Patch: Suggestions nur aus sessionSearchwords
function renderSuggestions(term){
  const sug = document.getElementById("suggestionList");
  sug.innerHTML = "";
  if(!term){
    sug.innerHTML = "<em>Suchindex eingeben, um Vorschläge zu sehen</em>";
    return;
  }
  // Finde Produkte, die zum Suchindex passen
  const matchingProducts = products.filter(p => 
    p.produkt.toLowerCase().includes(term)
  );
  // Nur Suchwörter aus sessionSearchwords
  const validSearchwordsSet = new Set(sessionSearchwords.map(e => e.suchwort));
  const validMatchingProducts = matchingProducts.filter(p => 
    validSearchwordsSet.has(p.suchwort)
  );
  // Kombiniere Suchwort + Kategorien
  const relatedSearchWords = unique(
    validMatchingProducts.map(p => {
      const entry = sessionSearchwords.find(e => e.suchwort === p.suchwort);
      return entry ? `${entry.suchwort} (${entry.kat1}/${entry.kat2})` : null;
    }).filter(Boolean)
  );
  if(relatedSearchWords.length === 0){
    sug.innerHTML = "<em>Keine ähnlichen Suchwörter gefunden</em>";
    return;
  }
  for(let i = 0; i < Math.min(relatedSearchWords.length, 15); i++) {
    const fullText = relatedSearchWords[i];
    const searchWord = fullText.split(" (")[0]; 
    const categoriesText = fullText.split("(")[1]?.replace(")", "");
    const categories = categoriesText ? categoriesText.split("/") : [];
    const kategorie1 = categories[0] || "";
    const kategorie2 = categories[1] || "";

    const div = document.createElement("div");
    div.className = "suggestion";
    div.textContent = fullText;
    div.addEventListener("click", () => {
      document.getElementById("searchwordSelect").value = searchWord;
      handleSearchwordCategorySync();
      applyFilters();
    });
    sug.appendChild(div);
  }
}

// --- Initialisierung für Suchwort-Management ---
document.addEventListener("DOMContentLoaded", () => {
  populateSelects();
  applyFilters();           
  document.getElementById("filterPanel").addEventListener("submit", e => {
    e.preventDefault();
    applyFilters();
  });
  document.getElementById("resetBtn").addEventListener("click", () => {
    document.getElementById("filterPanel").reset();
    enableCategorySelects();
    applyFilters();
  });
  
  // Add event listener for search index input to update suggestions
  document.getElementById("searchIndexInput").addEventListener("input", () => {
    const searchTerm = document.getElementById("searchIndexInput").value.trim().toLowerCase();
    renderSuggestions(searchTerm);
  });
  
  // Add event listeners for all form elements to trigger filtering
  document.getElementById("firmaSelect").addEventListener("change", applyFilters);
  document.getElementById("bereichSelect").addEventListener("change", applyFilters);
  document.getElementById("jahrSelect").addEventListener("change", applyFilters);
  document.getElementById("searchwordSelect").addEventListener("change", function() {
    handleSearchwordCategorySync();
    applyFilters();
  });

  document.getElementById("cat1Select").addEventListener("change", applyFilters);
  document.getElementById("cat2Select").addEventListener("change", applyFilters);
  
  // Add event listeners for display option checkboxes
  document.getElementById("showBestellnummer").addEventListener("change", applyFilters);
  document.getElementById("showLiefermaterialNummer").addEventListener("change", applyFilters);
  document.getElementById("showLieferant").addEventListener("change", applyFilters);
  document.getElementById("showPreis").addEventListener("change", applyFilters);
  document.getElementById("showLieferdatum").addEventListener("change", applyFilters);
  document.getElementById("showOrt").addEventListener("change", applyFilters);
  resetSessionSearchwords();
  renderSearchwordList();
  updateSearchwordSelects();
  setupSearchwordManager();
});

function handleSearchwordCategorySync() {
  const suchwort = document.getElementById("searchwordSelect").value;
  const cat1Select = document.getElementById("cat1Select");
  const cat2Select = document.getElementById("cat2Select");

  if (suchwort) {
    // Hole aus sessionSearchwords
    const entry = sessionSearchwords.find(e => e.suchwort === suchwort);
    if (entry) {
      cat1Select.value = entry.kat1;
      cat2Select.value = entry.kat2;
    } else {
      // Fallback: Produktdaten
      const prod = products.find(p => p.suchwort === suchwort);
      if (prod) {
        cat1Select.value = prod.simplifiedKat1;
        cat2Select.value = prod.simplifiedKat2;
      }
    }
    cat1Select.disabled = true;
    cat2Select.disabled = true;
    cat1Select.classList.add("select-disabled");
    cat2Select.classList.add("select-disabled");
  } else {
    enableCategorySelects();
  }
}

function enableCategorySelects() {
  const cat1Select = document.getElementById("cat1Select");
  const cat2Select = document.getElementById("cat2Select");
  cat1Select.disabled = false;
  cat2Select.disabled = false;
  cat1Select.classList.remove("select-disabled");
  cat2Select.classList.remove("select-disabled");
}

function populateSelects(){
  fillSelect("firmaSelect", unique(products.map(p => p.firma)));
  fillSelect("bereichSelect", unique(products.map(p => p.bereich)));
  fillSelect("jahrSelect", unique(products.map(p => p.jahr)).sort((a,b) => b - a));
  
  // Only include search words that appear more than 2 times
  const searchWordCounts = {};
  products.forEach(p => {
    searchWordCounts[p.suchwort] = (searchWordCounts[p.suchwort] || 0) + 1;
  });
  const validSearchwords = Object.keys(searchWordCounts)
    .filter(word => searchWordCounts[word] > 2)
    .sort();
  fillSelect("searchwordSelect", validSearchwords);
  
  // Define exactly 4 categories for each category type
  const simplifiedCategories = {
    kategorie1: {
      "IT": ["IT", "Automation", "Labor"],
      "Werkzeug": ["Werkzeug", "Wartung", "Werkstatt", "Pneumatik", "Hydraulik"],
      "Büro": ["Büro"],
      "Elektrik": ["Elektrik", "Sicherheit"]
    },
    kategorie2: {
      "Hardware": ["Hardware", "Eingabegerät", "Steuerung", "Steuerungstechnik", "Visualisierung"],
      "Technik": ["Handwerkzeug", "Elektrowerkzeug", "Messtechnik", "Messinstrument", "Optik", "Aktor", "Ventil", "Sensorik", "Antriebstechnik", "Druckluft"],
      "Zubehör": ["Zubehör", "Installation", "PSA", "Möbel", "Kabelschutz", "Ablage", "Speicher", "Aufbewahrung", "Netzwerk", "Kommunikation", "Audio", "Mobil", "Beleuchtung", "Bürogeräte", "Präsentation"],
      "Verbrauchsmaterial": ["Verbrauchsmaterial", "Schmiermittel", "Reinigung", "Notfall", "Brandschutz", "Software", "Netzwerksicherheit", "Stromversorgung", "Schutzschalter"]
    }
  };
  
  // Convert product categories to simplified categories
  products.forEach(p => {
    // Find matching main category for kategorie1
    let matched1 = false;
    for (const [mainCat, subCats] of Object.entries(simplifiedCategories.kategorie1)) {
      if (subCats.includes(p.kategorie1)) {
        p.simplifiedKat1 = mainCat;
        matched1 = true;
        break;
      }
    }
    if (!matched1) p.simplifiedKat1 = "Elektrik"; // Default if no match
    
    // Find matching main category for kategorie2
    let matched2 = false;
    for (const [mainCat, subCats] of Object.entries(simplifiedCategories.kategorie2)) {
      if (subCats.includes(p.kategorie2)) {
        p.simplifiedKat2 = mainCat;
        matched2 = true;
        break;
      }
    }
    if (!matched2) p.simplifiedKat2 = "Zubehör"; // Default if no match
  });
  
  // Fill category selects with exactly 4 categories each
  fillSelect("cat1Select", Object.keys(simplifiedCategories.kategorie1).sort());
  fillSelect("cat2Select", Object.keys(simplifiedCategories.kategorie2).sort());
}

function fillSelect(id, values){
  const select = document.getElementById(id);
  const current = select.value;
  const placeholder = select.querySelector('option[value=""]').textContent;
  select.innerHTML = `<option value="">${placeholder}</option>`;
  for(let i = 0; i < values.length; i++) {
    const v = values[i];
    const opt = document.createElement("option");
    opt.value = v;
    opt.textContent = v;
    select.appendChild(opt);
  }
  select.value = current;  
}

function unique(arr){
  return [...new Set(arr.filter(Boolean))];
}

function applyFilters(){
  const firma = document.getElementById("firmaSelect").value;
  const bereich = document.getElementById("bereichSelect").value;
  const jahr = document.getElementById("jahrSelect").value;
  const searchIndex = document.getElementById("searchIndexInput").value.trim().toLowerCase();
  const suchwort = document.getElementById("searchwordSelect").value;
  const cat1 = document.getElementById("cat1Select").value;
  const cat2 = document.getElementById("cat2Select").value;

  let filtered;
  if (suchwort) {
    // Nur nach Suchwort filtern (Kategorien werden ignoriert, da eindeutig)
    filtered = products.filter(p =>
      (!firma || p.firma === firma) &&
      (!bereich || p.bereich === bereich) &&
      (!jahr || p.jahr.toString() === jahr) &&
      (!searchIndex || p.produkt.toLowerCase().includes(searchIndex)) &&
      (p.suchwort === suchwort)
    );
  } else {
    // Nach Kategorien filtern, wenn kein Suchwort gewählt
    filtered = products.filter(p =>
      (!firma || p.firma === firma) &&
      (!bereich || p.bereich === bereich) &&
      (!jahr || p.jahr.toString() === jahr) &&
      (!searchIndex || p.produkt.toLowerCase().includes(searchIndex)) &&
      (!cat1 || p.simplifiedKat1 === cat1) &&
      (!cat2 || p.simplifiedKat2 === cat2)
    );
  }

  renderProducts(filtered);
  renderSuggestions(searchIndex);
}

function renderProducts(list){
  const container = document.getElementById("productList");
  container.innerHTML = "";
  if(list.length === 0){
    container.textContent = "Keine Produkte gefunden.";
    return;
  }
  
  // Get checkbox states
  const showBestellnummer = document.getElementById("showBestellnummer").checked;
  const showLiefermaterialNummer = document.getElementById("showLiefermaterialNummer").checked;
  const showLieferant = document.getElementById("showLieferant").checked;
  const showPreis = document.getElementById("showPreis").checked;
  const showLieferdatum = document.getElementById("showLieferdatum").checked;
  const showOrt = document.getElementById("showOrt").checked;
  
  for(let i = 0; i < list.length; i++) {
    const p = list[i];
    const card = document.createElement("div");
    card.className = "product-card";
    
    let additionalInfo = "";
    if (showBestellnummer) additionalInfo += `<div><strong>Bestellnummer:</strong> ${p.bestellnummer}</div>`;
    if (showLiefermaterialNummer) additionalInfo += `<div><strong>Liefermaterial-Nr.:</strong> ${p.liefermaterialNummer}</div>`;
    if (showLieferant) additionalInfo += `<div><strong>Lieferant:</strong> ${p.lieferant}</div>`;
    if (showPreis) additionalInfo += `<div><strong>Preis:</strong> ${p.preis}</div>`;
    if (showLieferdatum) additionalInfo += `<div><strong>Lieferdatum:</strong> ${p.lieferdatum}</div>`;
    if (showOrt) additionalInfo += `<div><strong>Ort:</strong> ${p.plz} ${p.ort}</div>`;
    
    card.innerHTML = `
      <div class="card-main">
        <strong>${p.produkt}</strong><br>
        Kategorien: ${p.simplifiedKat1 ?? "-"} / ${p.simplifiedKat2 ?? "-"}
        ${additionalInfo ? `<div class="additional-info">${additionalInfo}</div>` : ""}
      </div>
      <div class="card-meta">
        <div>${p.firma} · ${p.bereich} · ${p.jahr}</div>
        <div>Suchwort: <em>${p.suchwort}</em></div>
      </div>
    `;
    container.appendChild(card);
  }
}

function renderSuggestions(term){
  const sug = document.getElementById("suggestionList");
  sug.innerHTML = "";
  if(!term){
    sug.innerHTML = "<em>Suchindex eingeben, um Vorschläge zu sehen</em>";
    return;
  }
  // Finde Produkte, die zum Suchindex passen
  const matchingProducts = products.filter(p => 
    p.produkt.toLowerCase().includes(term)
  );
  // Nur Suchwörter aus sessionSearchwords
  const validSearchwordsSet = new Set(sessionSearchwords.map(e => e.suchwort));
  const validMatchingProducts = matchingProducts.filter(p => 
    validSearchwordsSet.has(p.suchwort)
  );
  // Kombiniere Suchwort + Kategorien
  const relatedSearchWords = unique(
    validMatchingProducts.map(p => {
      const entry = sessionSearchwords.find(e => e.suchwort === p.suchwort);
      return entry ? `${entry.suchwort} (${entry.kat1}/${entry.kat2})` : null;
    }).filter(Boolean)
  );
  if(relatedSearchWords.length === 0){
    sug.innerHTML = "<em>Keine ähnlichen Suchwörter gefunden</em>";
    return;
  }
  for(let i = 0; i < Math.min(relatedSearchWords.length, 15); i++) {
    const fullText = relatedSearchWords[i];
    const searchWord = fullText.split(" (")[0]; 
    const categoriesText = fullText.split("(")[1]?.replace(")", "");
    const categories = categoriesText ? categoriesText.split("/") : [];
    const kategorie1 = categories[0] || "";
    const kategorie2 = categories[1] || "";

    const div = document.createElement("div");
    div.className = "suggestion";
    div.textContent = fullText;
    div.addEventListener("click", () => {
      document.getElementById("searchwordSelect").value = searchWord;
      handleSearchwordCategorySync();
      applyFilters();
    });
    sug.appendChild(div);
  }
}

// --- Initialisierung für Suchwort-Management ---
document.addEventListener("DOMContentLoaded", () => {
  populateSelects();
  applyFilters();           
  document.getElementById("filterPanel").addEventListener("submit", e => {
    e.preventDefault();
    applyFilters();
  });
  document.getElementById("resetBtn").addEventListener("click", () => {
    document.getElementById("filterPanel").reset();
    enableCategorySelects();
    applyFilters();
  });
  
  // Add event listener for search index input to update suggestions
  document.getElementById("searchIndexInput").addEventListener("input", () => {
    const searchTerm = document.getElementById("searchIndexInput").value.trim().toLowerCase();
    renderSuggestions(searchTerm);
  });
  
  // Add event listeners for all form elements to trigger filtering
  document.getElementById("firmaSelect").addEventListener("change", applyFilters);
  document.getElementById("bereichSelect").addEventListener("change", applyFilters);
  document.getElementById("jahrSelect").addEventListener("change", applyFilters);
  document.getElementById("searchwordSelect").addEventListener("change", function() {
    handleSearchwordCategorySync();
    applyFilters();
  });

  document.getElementById("cat1Select").addEventListener("change", applyFilters);
  document.getElementById("cat2Select").addEventListener("change", applyFilters);
  
  // Add event listeners for display option checkboxes
  document.getElementById("showBestellnummer").addEventListener("change", applyFilters);
  document.getElementById("showLiefermaterialNummer").addEventListener("change", applyFilters);
  document.getElementById("showLieferant").addEventListener("change", applyFilters);
  document.getElementById("showPreis").addEventListener("change", applyFilters);
  document.getElementById("showLieferdatum").addEventListener("change", applyFilters);
  document.getElementById("showOrt").addEventListener("change", applyFilters);
  resetSessionSearchwords();
  renderSearchwordList();
  updateSearchwordSelects();
  setupSearchwordManager();
});
