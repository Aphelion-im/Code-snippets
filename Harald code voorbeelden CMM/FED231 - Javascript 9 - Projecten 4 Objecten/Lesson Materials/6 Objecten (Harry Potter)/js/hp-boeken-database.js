var boeken = [];    //indexed array
var boek = {};      //object

boeken.push(boek);  //boek 0, dummy boek, niet gebruiken in het echt

////boek 1
//boek = {
//    engTitle:       '',
//    dutchTitle:     '',
//    synopsis:       '',
//    prijs:          0.0,
//    isbn:           '',
//    keywords:       [],
//    thumb_over:     '',
//    thumb_normal:   '',
//    cover_image:    ''
//};
//boeken.push(boek);  //boek in de array drukken


//boek 1
boek = {
    engTitle:       'Harry Potter and the Sorcerers Stone',
    dutchTitle:     'Harry Potter en de Steen der Wijzen',
    synopsis:       'Harry Potter is een doodgewone, maar ongelukkige jongen die sinds de dood van zijn ouders bij zijn saaie en hardvochtige oom en tante woont, in de bezemkast onder de trap. Op een dag arriveert er een geheimzinnige brief voor hem. En daarna nog een, en nog een. De brieven veranderen Harrys hele leven: hij wordt gered door een woest figuur op een vliegende motorfiets en hij komt erachter wie zijn ouders werkelijk waren. Met een speciale trein die vertrekt van Perron 9¾ belandt hij op Zweinsteins Hogeschool voor Hekserij en Hocus Pocus, waar hij alles leert over bezemstelen, toverdranken en monsters.',
    prijs:          43.123,
    isbn:           '123-456-789-0',
    keywords:       ['harry', 'steen', 'zweinstein'], //geen hoofdletters, case insensitive zoeken
    thumb_over:     'hp1_t_up.jpg',
    thumb_normal:   'hp1_t_off.jpg',
    cover_image:    'hp1.jpg'
};
boeken.push(boek);  //boek in de array drukken

//boek 2
boek = {
    engTitle:       'Harry Potter and the Chamber of Secrets',
    dutchTitle:     'Harry Potter en de Geheime Kamer',
    synopsis:       'Na een verschrikkelijke vakantie bij zijn gemene oom en tante gaat Harry Potter naar de tweede klas van Zweinsteins Hogeschool voor Hekserij en Hocus-Pocus. Maar alleen al om daar te komen blijkt een ware heksentoer te zijn, waarbij een vliegende auto Harry en zijn vriend Ron uitkomst biedt. Na alle avonturen van vorig schooljaar denkt Harry zich rustig aan zijn lessen Toverdranken, Verweer tegen de Zwarte Kunsten en zijn favoriete sport Zwerkbal te kunnen wijden. Maar dan hoort hij een mysterieuze stem, vinden er aanslagen plaats en ontdekt hij een wel heel bijzonder dagboek...',
    prijs:          40.00,
    isbn:           '123-456-789-2',
    keywords:       ['harry', 'steen', 'zweinstein'],
    thumb_over:     '',
    thumb_normal:   '',
    cover_image:    'hp2.jpg'
};
boeken.push(boek);  //boek in de array drukken

//boek 3
boek = {
    engTitle:       'Harry Potter and the Prisoner of Azkaban',
    dutchTitle:     'Harry Potter en de Gevangene van Azkaban',
    synopsis:       'Voor Harry Potter aan zijn derde jaar op Zweinsteins Hogeschool voor Hekserij en Hocus Pocus begint, moet hij de zomervakantie bij zijn gemene oom en tante doorbrengen. Door een magisch ongelukje komt hij ineens \'s avonds laat op straat te staan. Dan blijkt dat Sirius Zwarts, een beruchte volgeling van Jeweetwel, uit de gevangenis van Azkaban is ontsnapt. Hij is op de vlucht en heeft het wellicht op Harry gemunt.Er volgt een enerverend schooljaar met nieuwe vakken als Dreuzelkunde en Zorg voor Fabeldieren, spannende Zwerkbalwedstrijden en griezelige voorspellingen. De school wordt bewaakt door Dementors, de gevreesde bewakers van Azkaban, maar Harry zal zijn lessen Verweer tegen de Zwarte Kunsten hard nodig hebben...',
    prijs:          42.10,
    isbn:           '123-456-789-3',
    keywords:       [],
    thumb_over:     '',
    thumb_normal:   '',
    cover_image:    'hp3.jpg'
};
boeken.push(boek);  //boek in de array drukken

//boek 4
boek = {
    engTitle:       'Harry Potter and the Goblet of Fire',
    dutchTitle:     'Harry Potter en de Vuurbeker',
    synopsis:       'Harry kan dan ook niet wachten tot hij terug mag naar Zweinsteins Hogeschool voor Hekserij en Hocus-Pocus, om aan zijn vierde schooljaar te beginnen. Maar voor het zover is, wordt hij door de familie Wemel op spectaculaire wijze bij de Duffelingen opgehaald, om mee te gaan naar de finale van het WK Zwerkbal! Harry weet dan nog niet dat er dat jaar op Zweinstein een nog groter en spannender evenement zal plaatsvinden, waarbij ook leerlingen van buitenlandse toverscholen vertegenwoordigd zullen zijn. Ondanks alle opwinding en magische gebeurtenissen, probeert hij zich toch op zijn lessen te concentreren. Ondertussen zijn er allerlei tekenen die er op wijzen dat Voldemort, met behulp van Duistere tovenaars, weer aan kracht begint te winnen. De angst dat Hij Die Niet Genoemd Mag Worden opnieuw zal toeslaan, wordt steeds groter...',
    prijs:          31.330,
    isbn:           '123-456-789-4',
    keywords:       [],
    thumb_over:     '',
    thumb_normal:   '',
    cover_image:    'hp4.jpg'
};
boeken.push(boek);  //boek in de array drukken

//boek 5
boek = {
    engTitle:       'Harry Potter and the Order of the Phoenix',
    dutchTitle:     'Harry Potter en de Orde van de Feniks',
    synopsis:       'Harry\'s verplichte zomervakantie bij zijn oom en tante is dit keer nog erger dan alle voorgaande jaren: niet alleen wordt hij door de Duffelingen weer vreselijk behandeld, ook zijn beste vrienden lijken hem deze zomer totaal te negeren. Harry zint op een plan om zo snel mogelijk terug te keren naar Zweinstein. Maar dan krijgt de vakantie een onverwacht einde en wordt het zelfs onzeker of hij nog wel aan zijn vijfde schooljaar op Zweinstein mag beginnen. ',
    prijs:          38.3111,
    isbn:           '123-456-789-5',
    keywords:       [],
    thumb_over:     '',
    thumb_normal:   '',
    cover_image:    'hp5.jpg'
};
boeken.push(boek);  //boek in de array drukken

//boek 6
boek = {
    engTitle:       'Harry Potter and the Half Blood Prince',
    dutchTitle:     'Harry Potter en de Halfbloed Prins',
    synopsis:       'Het land wordt geteisterd door vreemde rampen en aanslagen, en hoewel het hartje zomer is hangt er een hardnekkige, onheilspellende mist. In de Ligusterlaan zit Harry Potter \'s avonds laat ongeduldig op de komst van professor Perkamentus te wachten. Wat kan er er zo belangrijk kan zijn dat Perkamentus hem bij de Duffelingen op komt zoeken en dat niet wachten kan tot Harry\'s terugkeer naar Zweinstein? Zou het iets te maken hebben met de oude profetie die Harry aan het eind van zijn vijfde schooljaar gehoord heeft? Harry\'s zesde jaar op Zweinstein begint ongebruikelijk, als Voldemort opnieuw aan kracht wint en de werelden van Dreuzels en tovenaars zich steeds meer met elkaar vermengen...',
    prijs:          23.570,
    isbn:           '123-456-789-6',
    keywords:       [],
    thumb_over:     '',
    thumb_normal:   '',
    cover_image:    'hp6.jpg'
};
boeken.push(boek);  //boek in de array drukken

//boek 7
boek = {
    engTitle:       'Harry Potter and the Deathly Hallows',
    dutchTitle:     'Harry Potter en de Relieken van de Dood',
    synopsis:       'Harry staat voor een duistere, gevaarlijke en haast onmogelijke taak: hij moet de overgebleven Gruzielementen van Voldemort opsporen en vernietigen. Nooit eerder voelde Harry zich zo eenzaam en onzeker over zijn toekomst. Maar het is aan hem om de kracht te vinden om de zware taak goed te volbrengen. Om zonder angst of aarzeling aan zijn lange, zware reis te beginnen, moet Harry eerst zijn veilige omgeving verlaten...',
    prijs:          43.12,
    isbn:           '123-456-789-7',
    keywords:       [],
    thumb_over:     '',
    thumb_normal:   '',
    cover_image:    'hp7.jpg'
};
boeken.push(boek);  //boek in de array drukken

console.log(boeken)

























