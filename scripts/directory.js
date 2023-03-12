let cars = ['Insight', 'Mirage', 'Integra', '570GT', 'GL-Class', 'Caliber', 'D350', 'Monte Carlo', 'Volt', 'Nubira', 'Flying Spur', 'Yukon', 'Rally', 'TL', 'Astra', 'Portofino', 'Canyon', 'Eclipse Cross', 'Avalon', '88', '80', 'Protege5', 'MX-6', 'Quattroporte', 'Caprice', 'G8', 'Sienna', 'Hardtop', 'LEAF', 'H3T', 'H2', 'H1', 'Intrigue', 'Ascender', 'M4', 'Sorento', 'Hummer', 'Beetle', '98', 'CTS', 'Town & Country', 'S8', 'Routan', '900', 'ILX', '62', '720S', 'Forenza', 'Bentayga', 'MAZDA3', 'Coupe', 'Titan', 'G80', '612', 'Ion', 'SLR McLaren', 'del Sol', 'iQ', 'Envoy', '164', '500e', 'ZX2', 'Odyssey', 'F12berlinetta', 'Ciera', 'Xterra', '675LT', 'DeVille', 'fortwo', 'DB11', '1500', 'Sonoma', 'Levante', 'Xtra', 'Blazer', 'Passport', '718', '8 Series', 'GranTurismo', 'XT5', 'Grand Marquis', 'Escape', 'Convertible', 'S-Series', 'XT4', 'S6', 'Tempo', 'Stelvio', 'Freestyle', 'Journey', 'APV', 'Silverado', 'F250', 'New', 'S70', 'CX-7', 'Lumina', 'SRX', 'Malibu', '240SX', 'Versa', 'Highlander', 'M3', 'Savana', 'LSS', '2500', 'Tiguan', 'G-Class', 'Land Cruiser', 'Focus', 'Prius', 'Encore', 'Maxima', 'RS 3', 'Mercedes-AMG', 'Aspire', '500X', 'Lucerne', 'Freestar', 'Corolla', 'D150', 'Ghibli', '430', 'Festiva', 'Fifth Ave', 'S80', '850', 'GLI', 'Sunbird', 'Galant', 'F450', 'LeSabre', 'Stanza', 'Storm', 'Venture', '600', 'Rodeo', 'LaCrosse', 'A8', '86', 'Aztek', 'Crossfire', 'Expo', 'Expedition', 'Tribeca', 'Talon', 'Avalanche', 'X-90', 'Cayenne', 'iA', 'iM', 'Paceman', 'Cougar', 'Villager', 'X-Type', 'Montero', 'Dynasty', 'XC60', 'GLS', 'Traverse', 'Scoupe', 'Sierra', 'Edge', 'Soul', 'Sebring', 'GLB', 'A4', 'Commander', 'Esteem', 'Riviera', 'Nitro', 'CR-Z', 'Stratus', 'VehiCROSS', 'i-280', 'Outback', 'Solstice', 'Stealth', 'G3', 'K900', 'tC', 'Gladiator', 'Defender', 'Probe', 'Blackwood', 'Frontier', '200SX', 'Esperante', 'Vandura', 'C30', 'Evora', 'Express', 'Colt', 'SLX', 'Toronado', 'MDX', '488', 'Metro', 'Palisade', 'GranSport', 'Bronco', 'RS 6', 'G90', 'Venza', 'I-PACE', 'Concorde', 'Mercedes-Maybach', 'Corsica', 'XE', 'Paseo', 'Grand Voyager', 'Ranger', 'Legacy', 'RL', 'LR4', 'B-Class', 'XC40', 'Rabbit', 'F350', 'E-PACE', 'R1T', 'QX50', 'CLA-Class', 'Bonneville', 'Wraith', 'Diamante', 'Captiva', 'NSX', 'Alpina', 'Mighty Max', 'Bolt', 'ELR', 'E150', 'allroad', 'Transit', 'Z3', '57', 'Tucson', 'CT6', 'V70', 'Loyale', 'ES', 'Club', '929', 'Acadia', 'Eurovan', '9-7X', 'GLK-Class', 'FJ Cruiser', 'C/V', 'Charger', 'GLC', 'Roadmaster', 'Millenia', 'CX-5', 'Mystique', 'XT6', 'Cayman', 'Allante', 'GX', 'Liberty', 'Accent', 'Optima', 'F430', 'RS 4', 'Cutlass', 'H3', 'A5', '911', '9-2X', '400', 'Five Hundred', 'Countryman', 'Metris', 'G', 'Murcielago', 'CLS', '124', 'Cooper', 'Catera', 'DBS', 'Torrent', 'Firebird', 'SKY', 'Astro', 'X2', 'CLS-Class', 'CX-30', 'MAZDA2', 'Civic', 'e-Golf', 'Tercel', 'XTS', 'DTS', 'Neon', 'Brooklands', 'XLR', 'S7', '5-Sep', 'Prelude', 'LX', 'Custom Cruiser', 'Virage', '650S', 'CX-9', 'Forester', 'Ghost', 'King', 'S60', 'Sundance', 'QX', 'Mulsanne', 'CT5', 'Equus', 'G-Series', 'MX-5 Miata', 'Fusion', 'F-TYPE', 'CL', 'xB', 'Yaris', 'Arnage', 'A3', 'Thunderbird', 'Discovery', 'Venue', 'XC70', 'Contour', 'Viper', 'Summit', 'B-Series', 'Mountaineer', 'Santa Fe', 'XJ', 'Q', '500c', 'R1S', 'Excursion', 'Vigor', 'Fox', '500L', '940', 'LR3', 'Phaeton', 'Trans Sport', 'V90', 'Sportvan', 'Element', 'Trooper', 'TLX', 'ATS', 'V50', 'Outlander', 'LC', 'XL-7', 'Hombre', 'Nautilus', 'Model X', 'Justy', 'Dawn', 'Freelander', 'Macan', 'Fit', 'Intrepid', 'MR2', 'E250', 'Laser', 'Sable', 'Oasis', '4C', 'Jimmy', 'Grand Vitara', '4Runner', 'Sequoia', '928', 'Tacoma', 'Caravan', 'JX', 'F150', 'Mariner', 'Seville', 'Tahoe', 'STS', 'GT-R', 'Verona', 'Q40', 'Impala', 'Magnum', 'City Express', 'Mark', '370Z', 'Entourage', 'Pilot', 'Rocky', 'I', 'CR-V', 'G70', 'M6', 'MAZDA5', 'Cabrio', '9000', 'Sidekick', 'Navajo', 'Precis', 'RS 5', 'G6', 'Kona', 'SLS-Class', 'C-MAX', 'R32', 'Escort', 'HHR', 'Tracker', 'Carrera', 'Azure', 'Equinox', 'B9', 'Cobalt', 'Quest', 'Relay', 'Imperial', 'i-370', '240', 'Taycan', 'EcoSport', 'Regency', 'Terrain', '6 Series', 'SQ5', 'Silhouette', 'Enclave', 'Voyager', 'SL-Class', 'C70', 'D250', 'Axiom', 'Aura', 'xA', 'RC', 'Montego', 'Camaro', 'GLA-Class', 'S-Class', 'Verano', 'Taurus', 'Quattro', 'CX-3', 'Telluride', 'GLA', 'Q8', 'Park Avenue', 'G5', 'Tracer', 'RS 7', 'Navigator', 'Monaco', 'Armada', 'NEXO', '968', 'Solara', 'Huracan', 'Trax', 'Daytona', '3000GT', 'XC90', '2 Series', 'A-Class', 'Suburban', 'Azera', '570S', 'XV', 'Forte5', 'TSX', 'Boxster', 'GV80', 'Aspen', 'Charade', 'S-Type', 'M-Class', 'Panamera', '9-4X', 'Econoline', 'R-Class', 'GLE', 'Kizashi', 'Vitara', 'Patriot', 'Clubman', 'Sentra', 'SL', 'E350', 'Vanquish', 'F-PACE', 'C-HR', '4 Series', 'Continental', 'Veloster', 'Flex', 'Grand Wagoneer', 'Altima', 'Karma', 'LeMans', 'X3', 'Passat', 'Cavalier', 'V40', 'SS', 'MAZDA6', 'CL-Class', 'GTO', 'xD', 'Outlook', '300ZX', 'Ascent', '599', '3-Sep', 'SSR', 'Premier', 'Vantage', 'Jetta', 'Mirai', 'Brougham', 'Endeavor', 'L-Series', 'Fleetwood', 'New Yorker', 'Clarity', 'MKZ', 'Phantom', 'Spectra', 'DB9', 'X5', 'Corvette', 'NV1500', 'Kicks', 'E-Class', 'Legend', 'Alero', 'i3', 'Q3', 'VUE', 'FR-S', 'Arteon', 'Capri', 'GTI', 'QX60', 'Safari', 'Marauder', 'ProMaster', 'cube', 'M2', 'Renegade', 'Gallardo', 'Murano', 'C-Class', 'Vibe', 'Eclipse', 'Sunfire', 'Envision', 'Aurora', 'TrailBlazer', 'M', 'TITAN', 'Touareg', 'Golf', 'Eldorado', 'X4', 'LFA', 'Classic', 'i8', 'S5', 'Aveo', 'Raider', '2', 'Spider', 'Sonata', 'Rainier', 'Previa', 'XG350', '3 Series', 'Challenger', 'SLC', 'NV3500', 'NV200', 'Roadster', 'Uplander', 'Sedona', 'RX-8', 'Milan', 'Aventador', 'Q7', 'HS', 'MKS', 'NX', 'Vision', '350Z', 'JUKE', 'XG300', '190', 'Bravada', 'NV2500', 'S3', 'Acclaim', 'Rogue', 'e-tron', 'Cruze', 'Escalade', 'RSX', 'Lancer', 'Accord', 'Atlas', 'Shadow', 'Skylark', 'Q70', 'Echo', 'Grand Cherokee', 'Sixty Special', 'Breeze', 'Fiesta', 'S2000', 'Monterey', 'RLX', 'Colorado', 'Protege', 'QX30', 'Stylus', 'GS', 'LS', 'Achieva', 'i-290', 'Zephyr', 'PT Cruiser', 'Century', '960', 'S90', 'Impreza', 'Corrado', 'Cabriolet', 'i-MiEV', 'Aviator', 'Tundra', 'Q50', 'SX4', 'Sportage', 'SLK-Class', 'Crosstour', 'Eos', 'Borrego', 'CT4', 'MKX', 'SC', 'Prizm', 'Veracruz', 'GR', 'V60', 'GTC4Lusso', '740', 'Tiburon', 'Cherokee', 'CLA', 'ZDX', 'Beretta', 'S40', 'MP4-12C', 'CLK-Class', 'SLK', 'Topaz', 'XK', 'S10', '626', '3500', 'RAV4', 'MX-3', 'Supra', 'SVX', 'BRZ', 'Rendezvous', 'Stinger', 'Sephia', 'Camry', 'Pathfinder', 'Genesis', 'MPV', 'X6', 'Ridgeline', 'Q60', 'IS', 'J', 'Equator', 'Giulia', 'Swift', 'Wrangler', 'WRX', 'Samurai', 'Amanti', 'Lanos', 'T100', 'Crown Victoria', 'Niro', 'FF', 'Town', 'EX', 'Baja', 'Aerio', 'Celica', 'Excel', 'California', 'HR-V', 'MKT', 'Mustang', 'Pacifica', 'Forte', 'Cascada', 'Crosstrek', 'X1', 'Q5', 'M5', 'Cadenza', 'Cressida', 'Matrix', 'FX', 'Comanche', 'Rapide', 'Reno', 'CC', 'Rio', 'RX', 'Corsair', 'Z8', 'Rondo', 'Terraza', 'Amigo', 'XF', 'Windstar', 'Elise', 'Regal', 'UX', '323', 'Seltos', 'K5', 'Z4', 'Tribute', 'X7', 'CT', 'LeBaron', '812', 'Compass', 'Exige', 'Grand Prix', 'i-350', 'MKC', 'LR2', 'RX-7', 'Dart', 'Montana', '458', 'S4', 'Durango', '90', 'Spirit', 'Ioniq', 'Explorer', 'RDX', 'A7', 'GT', 'Aerostar', 'Regular', 'TT', 'Model S', '200', 'R8', '500', 'Grand Am', 'Trailblazer', '100', 'Sprinter', 'Elantra', 'A6', 'Spark', 'Impulse', 'Dakota', 'QX80', 'QX70', 'Spacecab', 'Grand Caravan', 'Model 3', 'Avenger', 'Range Rover', 'Sonic', '5 Series', 'Ramcharger', '7 Series', 'Ram', '1 Series', 'Prowler', 'Leganza', '300', 'LHS', 'Cirrus', 'Town Car'];
let countries = {'Acura':'Japan','Daihatsu':'Japan','Honda':'Japan','Infinity':'Japan','Isuzu':'Japan','Lexus':'Japan','Mazda':'Japan','Mitsubishi':'Japan','Nissan':'Japan','Subaru':'Japan','Suzuki':'Japan','Toyota':'Japan','Daewoo':'South Korea','Genesis':'South Korea','Hyundai':'South Korea','Kia':'South Korea','Audi':'Germany','BMW':'Germany','Maybach':'Germany','Mercedez-Benz':'Germany','Porsche':'Germany','Smart':'Germany','Volkswagen':'Germany','Alfa-Romeo':'Italy','Ferrari':'Italy','Fiat':'Italy','Lamborghini':'Italy','Maserati':'Italy','Polestar':'Sweden','Saab':'Sweden','Volvo':'Sweden','AstonMartin':'UK','Bentley':'UK','Jaguar':'UK','LandRover':'UK','Lotus':'UK','McLaren':'UK','Mini':'UK','Rolls_Royce':'UK','Buick':'USA','Cadillac':'USA','Chevrolet':'USA','Chrysler':'USA','Dodge':'USA','Eagle':'USA','Fisker':'USA','Ford':'USA','Freighliner':'USA','GMC':'USA','Geo':'USA','Hummer':'USA','Jeep':'USA','Lincoln':'USA','Mercury':'USA','Oldsmobile':'USA','Panoz':'USA','Plymouth':'USA','Pontiac':'USA','Ram':'USA','Rivian':'USA','Saturn':'USA','Tesla':'USA'}

let fetchCarData = async () => {
    const response = await fetch(
        'https://parseapi.back4app.com/classes/Car_Model_List?limit=10000&order=Make,Year,Model',
        {
            headers: {
                'X-Parse-Application-Id': 'hlhoNKjOvEhqzcVAJ1lxjicJLZNVv36GdbboZj3Z', // This is the fake app's application id
                'X-Parse-Master-Key': 'SNMJJF0CZZhTPhLDIqGhTlUNV9r60M2Z5spyWfXW', // This is the fake app's readonly master key
            }
        }
    );
    const data = await response.json(); // Here you have the data that you need
    let carResults = data.results;

    return carResults;
};

function processData(carResults) {
    let singleCarResults = carResults.slice();
    // console.log(carResults);
    let printedCars = ["Town & Country"];
    let finalList = [];
    let twoWordModels = ["RS 3", "RS 4", "RS 5", "RS 6", "RS 7", "1 Series", "2 Series", "3 Series", "4 Series", "5 Series", "6 Series", "7 Series", "8 Series", "Flying Spur", "Park Avenue", "Sixty Special", "City Express", "Monte Carlo", "Fifth Ave", "Grand Voyager", "New Yorker", "PT Cruiser", "Grand Caravan", "124", "Crown Victoria", "Five Hundred", "del Sol", "Santa Fe", "Grand Cherokee", "Grand Wagoneer", "Range Rover", "Town Car", "MX-5 Miata", "SLR McLaren", "Grand Marquis", "Eclipse Cross", "Mighty Max", "Custom Cruiser", "Grand Am", "Grand Prix", "Trans Sport", "Grand Vitara", "Model 3", "Model S", "Model X", "FJ Cruiser", "Land Cruiser"];
    let excludedModels = ["ATS-V", "CTS-V", "CT6-V", "300M", "XL7"];
    let categories = [];
    // let extraWords = ["Electric", "Fuel Cell", "Hybrid", "Plug-in", "HD", "Extended", "Cab", "(2005.5)", "Sportback", "TourX", "Regular", "Crew", "Cargo", "Passenger"];

    for(let result of carResults) {
        let model = result.Model;
        if (result.Model === "Town & Country") {
            if (finalList.length === 0)
                finalList.push(result);
            singleCarResults.splice(singleCarResults.indexOf(result), 1);
        }
    }

    for(let result of carResults) {
        let model = result.Model;
        if (model.indexOf(' ') !== -1) {
            if (model.split(' ', 2).join(' ').length !== -1) {
                model = model.substr(0, model.split(' ', 2).join(' ').length);
            }
            for (let twm of twoWordModels) {
                if (model === twm) {
                    // console.log('Found 2-word car: ' + model);
                    if (printedCars.indexOf(model) === -1) {
                        printedCars.push(model);
                        result.Model = model;
                        finalList.push(result);
                    }
                    for (cat of result.Category.split(", "))
                        if (categories.indexOf(cat) === -1) {
                            categories.push(cat);
                        }
                    singleCarResults.splice(singleCarResults.indexOf(result), 1);
                }
            }
        }
    }

    for(let result of singleCarResults){
        let model = result.Model;
        if (model.indexOf(' ') !== -1)
            model = result.Model.substr(0, result.Model.indexOf(' '));

        let valid = (printedCars.indexOf(model) === -1) && (excludedModels.indexOf(model) === -1);

        if (valid){
            for (cat of result.Category.split(", "))
                if (categories.indexOf(cat) === -1) {
                    categories.push(cat);
                }
            printedCars.push(model);
            result.Model = model;
            finalList.push(result);
            // console.log(`${result.Category} #${counter}: ${result.Model}`);
            // document.getElementById("carDiv").innerHTML += `<div class="carResult">Car #${counter}: ${result.Make} ${model} (${result.Category})</div>`;
        }
    }

    // printedCars = shuffle(printedCars)
    // console.log(finalList);
    return finalList;
}

function printInfo(finalList) {
    let counter = 0;
    for (let car of finalList){
        counter++;
        document.getElementById("carDiv").innerHTML += `<div class="carResult">Car #${counter}: ${car.Make} <span class="model">${car.Model}</span> (${car.Category}, ${car.Year})</div>`;
    }
}

onload = async () => {
    let carResults = await fetchCarData();
    let finalList = processData(carResults);
    printInfo(finalList);
}