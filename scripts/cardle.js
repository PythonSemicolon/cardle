let finalList = [];
let dailyCar;

let cars = ['Insight', 'Mirage', 'Integra', '570GT', 'GL-Class', 'Caliber', 'D350', 'Monte Carlo', 'Volt', 'Nubira', 'Flying Spur', 'Yukon', 'Rally', 'TL', 'Astra', 'Portofino', 'Canyon', 'Eclipse Cross', 'Avalon', '88', '80', 'Protege5', 'MX-6', 'Quattroporte', 'Caprice', 'G8', 'Sienna', 'Hardtop', 'LEAF', 'H3T', 'H2', 'H1', 'Intrigue', 'Ascender', 'M4', 'Sorento', 'Hummer', 'Beetle', '98', 'CTS', 'Town & Country', 'S8', 'Routan', '900', 'ILX', '62', '720S', 'Forenza', 'Bentayga', 'MAZDA3', 'Coupe', 'Titan', 'G80', '612', 'Ion', 'SLR McLaren', 'del Sol', 'iQ', 'Envoy', '164', '500e', 'ZX2', 'Odyssey', 'F12berlinetta', 'Ciera', 'Xterra', '675LT', 'DeVille', 'fortwo', 'DB11', '1500', 'Sonoma', 'Levante', 'Xtra', 'Blazer', 'Passport', '718', '8 Series', 'GranTurismo', 'XT5', 'Grand Marquis', 'Escape', 'Convertible', 'S-Series', 'XT4', 'S6', 'Tempo', 'Stelvio', 'Freestyle', 'Journey', 'APV', 'Silverado', 'F250', 'New', 'S70', 'CX-7', 'Lumina', 'SRX', 'Malibu', '240SX', 'Versa', 'Highlander', 'M3', 'Savana', 'LSS', '2500', 'Tiguan', 'G-Class', 'Land Cruiser', 'Focus', 'Prius', 'Encore', 'Maxima', 'RS 3', 'Mercedes-AMG', 'Aspire', '500X', 'Lucerne', 'Freestar', 'Corolla', 'D150', 'Ghibli', '430', 'Festiva', 'Fifth Ave', 'S80', '850', 'GLI', 'Sunbird', 'Galant', 'F450', 'LeSabre', 'Stanza', 'Storm', 'Venture', '600', 'Rodeo', 'LaCrosse', 'A8', '86', 'Aztek', 'Crossfire', 'Expo', 'Expedition', 'Tribeca', 'Talon', 'Avalanche', 'X-90', 'Cayenne', 'iA', 'iM', 'Paceman', 'Cougar', 'Villager', 'X-Type', 'Montero', 'Dynasty', 'XC60', 'GLS', 'Traverse', 'Scoupe', 'Sierra', 'Edge', 'Soul', 'Sebring', 'GLB', 'A4', 'Commander', 'Esteem', 'Riviera', 'Nitro', 'CR-Z', 'Stratus', 'VehiCROSS', 'i-280', 'Outback', 'Solstice', 'Stealth', 'G3', 'K900', 'tC', 'Gladiator', 'Defender', 'Probe', 'Blackwood', 'Frontier', '200SX', 'Esperante', 'Vandura', 'C30', 'Evora', 'Express', 'Colt', 'SLX', 'Toronado', 'MDX', '488', 'Metro', 'Palisade', 'GranSport', 'Bronco', 'RS 6', 'G90', 'Venza', 'I-PACE', 'Concorde', 'Mercedes-Maybach', 'Corsica', 'XE', 'Paseo', 'Grand Voyager', 'Ranger', 'Legacy', 'RL', 'LR4', 'B-Class', 'XC40', 'Rabbit', 'F350', 'E-PACE', 'R1T', 'QX50', 'CLA-Class', 'Bonneville', 'Wraith', 'Diamante', 'Captiva', 'NSX', 'Alpina', 'Mighty Max', 'Bolt', 'ELR', 'E150', 'allroad', 'Transit', 'Z3', '57', 'Tucson', 'CT6', 'V70', 'Loyale', 'ES', 'Club', '929', 'Acadia', 'Eurovan', '9-7X', 'GLK-Class', 'FJ Cruiser', 'C/V', 'Charger', 'GLC', 'Roadmaster', 'Millenia', 'CX-5', 'Mystique', 'XT6', 'Cayman', 'Allante', 'GX', 'Liberty', 'Accent', 'Optima', 'F430', 'RS 4', 'Cutlass', 'H3', 'A5', '911', '9-2X', '400', 'Five Hundred', 'Countryman', 'Metris', 'G', 'Murcielago', 'CLS', '124', 'Cooper', 'Catera', 'DBS', 'Torrent', 'Firebird', 'SKY', 'Astro', 'X2', 'CLS-Class', 'CX-30', 'MAZDA2', 'Civic', 'e-Golf', 'Tercel', 'XTS', 'DTS', 'Neon', 'Brooklands', 'XLR', 'S7', '5-Sep', 'Prelude', 'LX', 'Custom Cruiser', 'Virage', '650S', 'CX-9', 'Forester', 'Ghost', 'King', 'S60', 'Sundance', 'QX', 'Mulsanne', 'CT5', 'Equus', 'G-Series', 'MX-5 Miata', 'Fusion', 'F-TYPE', 'CL', 'xB', 'Yaris', 'Arnage', 'A3', 'Thunderbird', 'Discovery', 'Venue', 'XC70', 'Contour', 'Viper', 'Summit', 'B-Series', 'Mountaineer', 'Santa Fe', 'XJ', 'Q', '500c', 'R1S', 'Excursion', 'Vigor', 'Fox', '500L', '940', 'LR3', 'Phaeton', 'Trans Sport', 'V90', 'Sportvan', 'Element', 'Trooper', 'TLX', 'ATS', 'V50', 'Outlander', 'LC', 'XL-7', 'Hombre', 'Nautilus', 'Model X', 'Justy', 'Dawn', 'Freelander', 'Macan', 'Fit', 'Intrepid', 'MR2', 'E250', 'Laser', 'Sable', 'Oasis', '4C', 'Jimmy', 'Grand Vitara', '4Runner', 'Sequoia', '928', 'Tacoma', 'Caravan', 'JX', 'F150', 'Mariner', 'Seville', 'Tahoe', 'STS', 'GT-R', 'Verona', 'Q40', 'Impala', 'Magnum', 'City Express', 'Mark', '370Z', 'Entourage', 'Pilot', 'Rocky', 'I', 'CR-V', 'G70', 'M6', 'MAZDA5', 'Cabrio', '9000', 'Sidekick', 'Navajo', 'Precis', 'RS 5', 'G6', 'Kona', 'SLS-Class', 'C-MAX', 'R32', 'Escort', 'HHR', 'Tracker', 'Carrera', 'Azure', 'Equinox', 'B9', 'Cobalt', 'Quest', 'Relay', 'Imperial', 'i-370', '240', 'Taycan', 'EcoSport', 'Regency', 'Terrain', '6 Series', 'SQ5', 'Silhouette', 'Enclave', 'Voyager', 'SL-Class', 'C70', 'D250', 'Axiom', 'Aura', 'xA', 'RC', 'Montego', 'Camaro', 'GLA-Class', 'S-Class', 'Verano', 'Taurus', 'Quattro', 'CX-3', 'Telluride', 'GLA', 'Q8', 'Park Avenue', 'G5', 'Tracer', 'RS 7', 'Navigator', 'Monaco', 'Armada', 'NEXO', '1008', 'Solara', 'Huracan', 'Trax', 'Daytona', '3000GT', 'XC90', '2 Series', 'A-Class', 'Suburban', 'Azera', '570S', 'XV', 'Forte5', 'TSX', 'Boxster', 'GV80', 'Aspen', 'Charade', 'S-Type', 'M-Class', 'Panamera', '9-4X', 'Econoline', 'R-Class', 'GLE', 'Kizashi', 'Vitara', 'Patriot', 'Clubman', 'Sentra', 'SL', 'E350', 'Vanquish', 'F-PACE', 'C-HR', '4 Series', 'Continental', 'Veloster', 'Flex', 'Grand Wagoneer', 'Altima', 'Karma', 'LeMans', 'X3', 'Passat', 'Cavalier', 'V40', 'SS', 'MAZDA6', 'CL-Class', 'GTO', 'xD', 'Outlook', '300ZX', 'Ascent', '599', '3-Sep', 'SSR', 'Premier', 'Vantage', 'Jetta', 'Mirai', 'Brougham', 'Endeavor', 'L-Series', 'Fleetwood', 'New Yorker', 'Clarity', 'MKZ', 'Phantom', 'Spectra', 'DB9', 'X5', 'Corvette', 'NV1500', 'Kicks', 'E-Class', 'Legend', 'Alero', 'i3', 'Q3', 'VUE', 'FR-S', 'Arteon', 'Capri', 'GTI', 'QX60', 'Safari', 'Marauder', 'ProMaster', 'cube', 'M2', 'Renegade', 'Gallardo', 'Murano', 'C-Class', 'Vibe', 'Eclipse', 'Sunfire', 'Envision', 'Aurora', 'TrailBlazer', 'M', 'TITAN', 'Touareg', 'Golf', 'Eldorado', 'X4', 'LFA', 'Classic', 'i8', 'S5', 'Aveo', 'Raider', '2', 'Spider', 'Sonata', 'Rainier', 'Previa', 'XG350', '3 Series', 'Challenger', 'SLC', 'NV3500', 'NV200', 'Roadster', 'Uplander', 'Sedona', 'RX-8', 'Milan', 'Aventador', 'Q7', 'HS', 'MKS', 'NX', 'Vision', '350Z', 'JUKE', 'XG300', '190', 'Bravada', 'NV2500', 'S3', 'Acclaim', 'Rogue', 'e-tron', 'Cruze', 'Escalade', 'RSX', 'Lancer', 'Accord', 'Atlas', 'Shadow', 'Skylark', 'Q70', 'Echo', 'Grand Cherokee', 'Sixty Special', 'Breeze', 'Fiesta', 'S2000', 'Monterey', 'RLX', 'Colorado', 'Protege', 'QX30', 'Stylus', 'GS', 'LS', 'Achieva', 'i-290', 'Zephyr', 'PT Cruiser', 'Century', '1000', 'S90', 'Impreza', 'Corrado', 'Cabriolet', 'i-MiEV', 'Aviator', 'Tundra', 'Q50', 'SX4', 'Sportage', 'SLK-Class', 'Crosstour', 'Eos', 'Borrego', 'CT4', 'MKX', 'SC', 'Prizm', 'Veracruz', 'GR', 'V60', 'GTC4Lusso', '740', 'Tiburon', 'Cherokee', 'CLA', 'ZDX', 'Beretta', 'S40', 'MP4-12C', 'CLK-Class', 'SLK', 'Topaz', 'XK', 'S10', '626', '3500', 'RAV4', 'MX-3', 'Supra', 'SVX', 'BRZ', 'Rendezvous', 'Stinger', 'Sephia', 'Camry', 'Pathfinder', 'Genesis', 'MPV', 'X6', 'Ridgeline', 'Q60', 'IS', 'J', 'Equator', 'Giulia', 'Swift', 'Wrangler', 'WRX', 'Samurai', 'Amanti', 'Lanos', 'T100', 'Crown Victoria', 'Niro', 'FF', 'EX', 'Baja', 'Aerio', 'Celica', 'Excel', 'California', 'HR-V', 'MKT', 'Mustang', 'Pacifica', 'Forte', 'Cascada', 'Crosstrek', 'X1', 'Q5', 'M5', 'Cadenza', 'Cressida', 'Matrix', 'FX', 'Comanche', 'Rapide', 'Reno', 'CC', 'Rio', 'RX', 'Corsair', 'Z8', 'Rondo', 'Terraza', 'Amigo', 'XF', 'Windstar', 'Elise', 'Regal', 'UX', '323', 'Seltos', 'K5', 'Z4', 'Tribute', 'X7', 'CT', 'LeBaron', '812', 'Compass', 'Exige', 'Grand Prix', 'i-350', 'MKC', 'LR2', 'RX-7', 'Dart', 'Montana', '458', 'S4', 'Durango', '90', 'Spirit', 'Ioniq', 'Explorer', 'RDX', 'A7', 'GT', 'Aerostar', 'Regular', 'TT', 'Model S', '200', 'R8', '500', 'Grand Am', 'Trailblazer', '100', 'Sprinter', 'Elantra', 'A6', 'Spark', 'Impulse', 'Dakota', 'QX80', 'QX70', 'Spacecab', 'Grand Caravan', 'Model 3', 'Avenger', 'Range Rover', 'Sonic', '5 Series', 'Ramcharger', '7 Series', 'Ram', '1 Series', 'Prowler', 'Leganza', '300', 'LHS', 'Cirrus', 'Town Car'];
let countries = {'ACURA':'Japan','DAIHATSU':'Japan','HONDA':'Japan','INFINITI':'Japan','ISUZU':'Japan','LEXUS':'Japan','MAZDA':'Japan','MITSUBISHI':'Japan','NISSAN':'Japan','SCION':'Japan','SUBARU':'Japan','SUZUKI':'Japan','TOYOTA':'Japan','DAEWOO':'South Korea','GENESIS':'South Korea','HYUNDAI':'South Korea','KIA':'South Korea','AUDI':'Germany','BMW':'Germany','MAYBACH':'Germany','MERCEDES-BENZ':'Germany','PORSCHE':'Germany','SMART':'Germany','VOLKSWAGEN':'Germany','ALFA ROMEO':'Italy','FERRARI':'Italy','FIAT':'Italy','LAMBORGHINI':'Italy','MASERATI':'Italy','POLESTAR':'Sweden','SAAB':'Sweden','VOLVO':'Sweden','ASTON MARTIN':'UK','BENTLEY':'UK','JAGUAR':'UK','LAND ROVER':'UK','LOTUS':'UK','MCLAREN':'UK','MINI':'UK','ROLLS-ROYCE':'UK','BUICK':'USA','CADILLAC':'USA','CHEVROLET':'USA','CHRYSLER':'USA','DODGE':'USA','EAGLE':'USA','FISKER':'USA','FORD':'USA','GMC':'USA','GEO':'USA','HUMMER':'USA','JEEP':'USA','LINCOLN':'USA','MERCURY':'USA','OLDSMOBILE':'USA','PANOZ':'USA','PLYMOUTH':'USA','PONTIAC':'USA','RAM':'USA','RIVIAN':'USA','SATURN':'USA','TESLA':'USA'}

let category_images = {
    'Convertible_Icon_Gray':'https://i.lensdump.com/i/reboOC.png','Convertible_Icon_Green':'https://i1.lensdump.com/i/rebuU5.png','Convertible_Icon_Yellow':'https://i2.lensdump.com/i/rebNZz.png','Coupe_Icon_Gray':'https://i3.lensdump.com/i/rebPsT.png','Coupe_Icon_Green':'https://i.lensdump.com/i/rebfub.png','Coupe_Icon_Yellow':'https://i1.lensdump.com/i/rebUA7.png','Hatchback_Icon_Gray':'https://i1.lensdump.com/i/rewEWm.png','Hatchback_Icon_Green':'https://i2.lensdump.com/i/rewk9i.png','Hatchback_Icon_Yellow':'https://i3.lensdump.com/i/rew6vo.png','Van/Minivan_Icon_Gray':'https://i.lensdump.com/i/rexZhr.png','Van/Minivan_Icon_Green':'https://i1.lensdump.com/i/rexr6F.png','Van/Minivan_Icon_Yellow':'https://i2.lensdump.com/i/rextz3.png','Multiple_Icon_Gray':'https://i1.lensdump.com/i/rexEKq.png','Multiple_Icon_Green':'https://i2.lensdump.com/i/rexkfA.png','Multiple_Icon_Yellow':'https://i3.lensdump.com/i/rexCjM.png','Pickup_Icon_Gray':'https://i2.lensdump.com/i/rexs11.png','Pickup_Icon_Green':'https://i3.lensdump.com/i/rex3Kc.png','Pickup_Icon_Yellow':'https://i.lensdump.com/i/rex4fK.png','Sedan_Icon_Gray':'https://i2.lensdump.com/i/rexP27.png','Sedan_Icon_Green':'https://i3.lensdump.com/i/rexfJr.png','Sedan_Icon_Yellow':'https://i.lensdump.com/i/rexFSF.png','SUV_Icon_Gray':'https://i1.lensdump.com/i/rexyIA.png','SUV_Icon_Green':'https://i2.lensdump.com/i/rex5BM.png','SUV_Icon_Yellow':'https://i3.lensdump.com/i/rexGoQ.png','Wagon_Icon_Gray':'https://i2.lensdump.com/i/rebEy0.png','Wagon_Icon_Green':'https://i3.lensdump.com/i/reb6RD.png','Wagon_Icon_Yellow':'https://i.lensdump.com/i/rebC7q.png'
}

let country_images = {
    'Asia_Icon_Gray':'https://i1.lensdump.com/i/rebB8e.png','Asia_Icon_Yellow':'https://i2.lensdump.com/i/rebmQk.png','Europe_Icon_Gray':'https://i3.lensdump.com/i/reb5cq.png','Europe_Icon_Yellow':'https://i.lensdump.com/i/rebagA.png','Germany_Icon_Green':'https://i3.lensdump.com/i/rew13Z.png','Italy_Icon_Green':'https://i1.lensdump.com/i/rewKLr.png','Japan_Icon_Green':'https://i.lensdump.com/i/rewHl0.png','South Korea_Icon_Green':'https://i3.lensdump.com/i/rexbpD.png','Sweden_Icon_Green':'https://i2.lensdump.com/i/rey8ek.png','UK_Icon_Green':'https://i3.lensdump.com/i/reyZIK.png','USA_Icon_Gray':'https://i.lensdump.com/i/reygmZ.png','USA_Icon_Green':'https://i1.lensdump.com/i/reyroP.png'
}

let make_images = {
    'Acura_Icon':'https://i2.lensdump.com/i/rebVIM.png','Alfa_Romeo_Icon':'https://i.lensdump.com/i/rebdoa.png','Aston_Martin_Icon':'https://i3.lensdump.com/i/rebsex.png','Audi_Icon':'https://i1.lensdump.com/i/rebKT1.png','Bentley_Icon':'https://i3.lensdump.com/i/reb7UK.png','BMW_Icon':'https://i1.lensdump.com/i/reblmP.png','Buick_Icon':'https://i3.lensdump.com/i/rebeAi.png','Cadillac_Icon':'https://i1.lensdump.com/i/rebvn9.png','Chevrolet_Icon':'https://i2.lensdump.com/i/rebL52.png','Chrysler_Icon':'https://i3.lensdump.com/i/rebYTv.png','Daewoo_Icon':'https://i2.lensdump.com/i/rebcVr.png','Daihatsu_Icon':'https://i3.lensdump.com/i/rebXnF.png','Dodge_Icon':'https://i1.lensdump.com/i/rebxE0.png','Eagle_Icon':'https://i2.lensdump.com/i/rebyOD.png','Ferrari_Icon':'https://i2.lensdump.com/i/rew2DQ.png','FIAT_Icon':'https://i3.lensdump.com/i/rewAAa.png','Fisker_Icon':'https://i1.lensdump.com/i/rewivk.png','Ford_Icon':'https://i3.lensdump.com/i/rewIEH.png','Genesis_Icon':'https://i.lensdump.com/i/rewZH1.png','Geo_Icon':'https://i2.lensdump.com/i/rewtgK.png','GMC_Icon':'https://i.lensdump.com/i/rewRDP.png','Honda_Icon':'https://i.lensdump.com/i/rewCG9.png','HUMMER_Icon':'https://i2.lensdump.com/i/rewVHv.png','Hyundai_Icon':'https://i.lensdump.com/i/rewqg5.png','INFINITI_Icon':'https://i2.lensdump.com/i/rewmNT.png','Isuzu_Icon':'https://i.lensdump.com/i/rew497.png','Jaguar_Icon':'https://i3.lensdump.com/i/rewOk3.png','Jeep_Icon':'https://i2.lensdump.com/i/rewSrq.png','Kia_Icon':'https://i.lensdump.com/i/rewnNM.png','Lamborghini_Icon':'https://i2.lensdump.com/i/rewM9a.png','Land_Rover_Icon':'https://i.lensdump.com/i/rewoak.png','Lexus_Icon':'https://i2.lensdump.com/i/rewNlH.png','Lincoln_Icon':'https://i.lensdump.com/i/rewFrc.png','Lotus_Icon':'https://i2.lensdump.com/i/rewcPZ.png','Maserati_Icon':'https://i.lensdump.com/i/rewwdm.png','Maybach_Icon':'https://i2.lensdump.com/i/rewyao.png','MAZDA_Icon':'https://i.lensdump.com/i/rewaz2.png','McLaren_Icon':'https://i2.lensdump.com/i/rex8tC.png','Mercedes-Benz_Icon':'https://i.lensdump.com/i/rexWPz.png','Mercury_Icon':'https://i1.lensdump.com/i/rexjjT.png','MINI_Icon':'https://i3.lensdump.com/i/rexIM7.png','Mitsubishi_Icon': 'https://i.lensdump.com/i/rexTtD.png','Nissan_Icon':'https://i1.lensdump.com/i/rexQMa.png','Oldsmobile_Icon':'https://i3.lensdump.com/i/rexdCk.png','Panoz_Icon':'https://i1.lensdump.com/i/rexBwH.png','Plymouth_Icon':'https://i2.lensdump.com/i/rex7qP.png','Polestar_Icon':'https://i3.lensdump.com/i/rexOYm.png','Pontiac_Icon':'https://i.lensdump.com/i/rexl2i.png','Porsche_Icon':'https://i1.lensdump.com/i/rexzCo.png','Ram_Icon':'https://i3.lensdump.com/i/rexex2.png','Rivian_Icon':'https://i.lensdump.com/i/rexv1v.png','Rolls-Royce_Icon':'https://i2.lensdump.com/i/rexMf5.png','Saab_Icon':'https://i3.lensdump.com/i/rexo0z.png','Saturn_Icon':'https://i1.lensdump.com/i/rexDYb.png', 'Scion_Icon':'https://i3.lensdump.com/i/rnr3G0.png','smart_Icon':'https://i2.lensdump.com/i/rexXR0.png','Subaru_Icon':'https://i.lensdump.com/i/rexwFq.png','Suzuki_Icon':'https://i1.lensdump.com/i/rey2Je.png','Tesla_Icon':'https://i.lensdump.com/i/reyiRH.png','Toyota_Icon':'https://i2.lensdump.com/i/rey0Fc.png','Volkswagen_Icon':'https://i3.lensdump.com/i/reb18r.png','Volvo_Icon':'https://i1.lensdump.com/i/rebTe3.png'
}

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

    return data.results;
};

function processData(carResults) {
    let singleCarResults = carResults.slice();
    // console.log(carResults);
    let printedCars = ["Town & Country"];
    let finalList = [];
    let twoWordModels = ["RS 3", "RS 4", "RS 5", "RS 6", "RS 7", "1 Series", "2 Series", "3 Series", "4 Series", "5 Series", "6 Series", "7 Series", "8 Series", "Flying Spur", "Park Avenue", "Sixty Special", "City Express", "Monte Carlo", "Fifth Ave", "Grand Voyager", "New Yorker", "PT Cruiser", "Grand Caravan", "124", "Crown Victoria", "Five Hundred", "del Sol", "Santa Fe", "Grand Cherokee", "Grand Wagoneer", "Range Rover", "Town Car", "MX-5 Miata", "SLR McLaren", "Grand Marquis", "Eclipse Cross", "Mighty Max", "Custom Cruiser", "Grand Am", "Grand Prix", "Trans Sport", "Grand Vitara", "Model 3", "Model S", "Model X", "FJ Cruiser", "Land Cruiser"];
    let excludedModels = ["ATS-V", "CTS-V", "CT6-V", "300M", "XL7"];
    let categories = [];
    let makes = [];
    // let extraWords = ["Electric", "Fuel Cell", "Hybrid", "Plug-in", "HD", "Extended", "Cab", "(2005.5)", "Sportback", "TourX", "Regular", "Crew", "Cargo", "Passenger"];

    for(let result of carResults) {
        let model = result.Model;
        if (model.indexOf(' ') !== -1) {
            if (model.split(' ', 3).join(' ').length !== -1) {
                model = model.substr(0, model.split(' ', 3).join(' ').length);
            }
            if (result.Model === "Town & Country") {
                if (finalList.length === 0)
                    finalList.push(result);
                singleCarResults.splice(singleCarResults.indexOf(result), 1);
            }
        }
    }

    // console.log(singleCarResults);

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
                    // for testing
                    // for (cat of result.Category.split(", "))
                        if (categories.indexOf(result.Category) === -1) {
                            categories.push(result.Category);
                        }
                    if (makes.indexOf(result.Make.toUpperCase()) === -1) {
                        makes.push(result.Make.toUpperCase());
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
            printedCars.push(model);
            result.Model = model;
            finalList.push(result);
            // for testing
            // for (cat of result.Category.split(", "))
                if (categories.indexOf(result.Category) === -1) {
                    categories.push(result.Category);
                }
            if (makes.indexOf(result.Make.toUpperCase()) === -1) {
                makes.push(result.Make.toUpperCase());
            }
            // console.log(`${result.Category} #${counter}: ${result.Model}`);
            // document.getElementById("carDiv").innerHTML += `<div class="carResult">Car #${counter}: ${result.Make} ${model} (${result.Category})</div>`;
        }
    }

    // printedCars = shuffle(printedCars)
    // console.log(categories.sort());
    for (let z in makes.sort())
        if (makes.sort()[z] !== Object.keys(countries).sort()[z])
            console.error(makes.sort()[z] + ' does not match ' + Object.keys(countries).sort()[z]);
    // console.log(makes.sort());
    // console.log(Object.keys(countries).sort());
    // console.log(finalList);
    return finalList;
}

function printInfo(finalList) {
    let counter = 0;
    for (let car of finalList){
        counter++;
        document.getElementById("carDiv").innerHTML = '<h3>Results:</h3>';
        document.getElementById("carDiv").innerHTML += `<div class="carResult">Car #${counter}: ${car.Make} <span class="model">${car.Model}</span> (${car.Category}, ${car.Year})</div>`;
    }
}

function shuffle(cars) {
    console.log('Shuffling car list: ');
    cars.sort(() => (Math.random() > .5) ? 1 : -1);
    console.log(cars);
}

function getGuessedCar() {
    // let qString = location.search;
    // qString = qString.substring(1);
    // while (qString.indexOf('+') !== -1) qString = qString.replace('+', ' ');
    // let qArray = qString.split('&');
    // let pos = qArray[0].search('=');
    // let keyVal = qArray[0].substring(0, pos);
    // let dataVal = qArray[0].substring(pos+1);
    // return decodeURIComponent(dataVal);
    return document.getElementById('carGuess').value.trim();
}

function arraysMatch(a1, a2){
    if (a1.length === a2.length) {
        return a1.every((el, index) => {
            return (el.toUpperCase() === a2[index].toUpperCase());
        });
    }
    return false;
}

function arraysPartiallyMatch(a1, a2){
    for (let z in a1)
        for (let y in a2)
            if (a1[z].toUpperCase() === a2[y].toUpperCase())
                return true;
    return false;
}

function getContinent(country) {
    if (country === 'USA')
        return 'North America';
    else if (country === 'Japan' || country === 'South Korea')
        return 'Asia';
    return 'Europe';
}

function setCookie(name, val){
    let midnight = new Date();
    midnight.setHours(23,59,59,0);
    let expires = 'expires='+ midnight.toUTCString();
    document.cookie = name + '=' + val + ';' + expires + ';path=/';
}

function setPermCookie(name, val){
    let expireDate = new Date();
    expireDate.setFullYear(expireDate.getFullYear() + 1);
    let expires = 'expires='+ expireDate.toUTCString();
    document.cookie = name + '=' + val + ';' + expires + ';path=/';
}

function getCookie(name){
    let cookies = decodeURIComponent(document.cookie).split(';');
    for (let cookie of cookies){
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name + '=') === 0) {
            return cookie.substring(name.length+1, cookie.length);
        }
    }
    return '';
}

function checkYear(guessed, daily){
    let result = 'gray';
    if (Math.abs(guessed - daily) <= 1)
        result = 'green';
    else if (Math.abs(guessed - daily) <= 5)
        result = 'yellow';
    return result;
}

function checkCategories(guessed, daily){
    let result = 'gray';
    let gCats = guessed.split(', ').sort();
    console.log(gCats);
    let dCats = daily.split(', ').sort();
    console.log(dCats);
    if (arraysMatch(gCats, dCats))
        result = 'green';
    else if (arraysPartiallyMatch(gCats, dCats))
        result = 'yellow';
    return result;
}

function checkCountry(guessed, daily){
    let result = 'gray';
    if (guessed === daily)
        result = 'green';
    else if (getContinent(guessed) === getContinent(daily))
        result = 'yellow';
    return result;
}

function checkName(guessed, daily){
    let result = 'gray';
    if (guessed === daily)
        result = 'green';
    else if (guessed.substr(0,1) === daily.substr(0,1))
        result = 'yellow';
    return result;
}

function fadeIn(div) {
    let opacity = 0.01;
    div.style.display = 'grid';
    let timer = setInterval(function () {
        if (opacity >= 1){
            clearInterval(timer);
        }
        div.style.opacity = opacity;
        div.style.filter = 'alpha(opacity=' + opacity * 100 + ")";
        opacity += opacity * 0.1;
    }, 10);
}

function getDailyCar() {
    let startDate = new Date('02/22/2022');
    let today = new Date();
    let currIndex = Math.floor((today - startDate) / (1000 * 3600 * 24));
    // console.log(startDate);
    // console.log(today);
    console.log('today\'s puzzle: #' + (currIndex + 1));
    let dc = undefined;
    for (let car of finalList) {
        if (car.Model === cars[currIndex])
            dc = car;
    }
    if (dc === undefined)
        throw new Error('Error reading car: program will exit.');
    return dc;
}

function getDetailedStats(){ // returns an array with number of wins per guess and losses
    let statStr = getCookie('stats');
    // let statStr = '032135108709540635408790x084068x09848608x0876409x8065409870x9546087x987098409807';
    let stats = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let statSum = 0;
    let avgCount = 0;
    for (let z=0; z<statStr.length; z++){
        if (statStr.charAt(z) === 'x')
            stats[10]++;
        else {
            let currStat = parseInt(statStr.charAt(z));
            stats[currStat]++;
            if (currStat === 0) currStat = 10;
            statSum += currStat;
            avgCount++;
        }
    }
    if (statStr.length !== 0)
        stats[11] = Math.round(statSum / avgCount * 100) / 100;
    return stats;
}

function getStreak(){
    let statStr = getCookie('stats');
    // let statStr = '032135108709540635408790x084068x09848608x0876409x8065409870x9546087x987098409807';
    let losses = 0;
    let maxStreakStart = 0;
    let maxStreakLength = 0;
    for (let z=0; z<statStr.length; z++){
        if (statStr.charAt(z) === 'x') {
            losses++;
            maxStreakLength = Math.max(maxStreakLength, z - maxStreakStart);
            maxStreakStart = z;
        }
    }
    let winPct;
    if (statStr.length === 0)
        winPct = 0;
    else
        winPct = Math.round((statStr.length - losses) / statStr.length * 100.0);
    let streakStats = [statStr.length, winPct, 0, 0];
    if (losses === 0) { // undefeated chad
        streakStats[2] = statStr.length;
        streakStats[3] = statStr.length;
    }
    else{
        streakStats[2] = statStr.substr(statStr.lastIndexOf('x')+1).length;
        streakStats[3] = maxStreakLength;
    }
    return streakStats;
}

function displayStats(){
    let stats = getDetailedStats();
    let max = 0;
    for (let z=0; z<10; z++) {
        document.getElementById('statBar' + z).innerHTML = stats[z] + '';
        max = Math.max(max, stats[z]);
    }
    for (let z=0; z<10; z++) {
        let barWidth = 12;
        if (stats[z] !== 0)
            barWidth = stats[z]/max * 400;
        document.getElementById('statBar' + z).style.width = barWidth + 'px';
        if (getCookie('guessCounter') !== '')
            if (z === parseInt(getCookie('guessCounter')))
                document.getElementById('statBar' + z).style.backgroundColor = '#4a7f45';
    }
    let streakStats = getStreak();
    document.getElementById('gamesPlayed').innerHTML = streakStats[0] + '';
    document.getElementById('winPct').innerHTML = streakStats[1] + '%';
    document.getElementById('currStreak').innerHTML = streakStats[2] + '';
    document.getElementById('maxStreak').innerHTML = streakStats[3] + '';
    document.getElementById('avgGuesses').innerHTML = stats[11] + '';
    toggleModal(document.getElementById('statsModal'), true)
}

async function main() {
    let carResults = await fetchCarData();
    finalList = processData(carResults);

    dailyCar = getDailyCar();

    let guessCounter = 0;
    if (getCookie('guessCounter') !== '')
        guessCounter = parseInt(getCookie('guessCounter'));

    for (let z=0; z<guessCounter; z++){
        let iStr, ii, res;

        // Year
        res = checkYear(getCookie('year' + (z+1)), dailyCar.Year);
        switch(res){
            case 'green':
                ii = `correct year (+/- 1 year)`;
                break;
            case 'yellow':
                ii = `close year (+/- 5 years)`;
                break;
            default:
                ii = `incorrect year (>5 years away)`;
        }
        document.getElementById('yearResult' + (z+1)).classList.add(res);
        document.getElementById('yearResult' + (z+1)).innerHTML = `<p>${getCookie('year' + (z+1))}</p>`;
        document.getElementById('yearResult' + (z+1)).title = ii;

        // Category
        res = checkCategories(getCookie('category' + (z+1)), dailyCar.Category);
        document.getElementById('categoryResult' + (z+1)).classList.add(res);
        if (getCookie('category' + (z+1)).indexOf(',') !== -1)
            iStr = 'Multiple';
        else
            iStr = getCookie('category' + (z+1));
        switch(res){
            case 'green':
                ii = 'correct category';
                break;
            case 'yellow':
                ii = 'partially correct category';
                break;
            default:
                ii = 'incorrect category';
        }
        document.getElementById('categoryResult' + (z+1)).innerHTML = `<img src="${category_images[iStr + '_Icon_' + res.charAt(0).toUpperCase() + res.substring(1)]}" alt="${ii} (${getCookie('category' + (z+1))})" width=100px>`;
        document.getElementById('categoryResult' + (z+1)).title = `${ii} (${getCookie('category' + (z+1))})`;

        // Country
        let country = getCookie('country' + (z+1));
        let continent = getContinent(country);
        res = checkCountry(country, countries[dailyCar.Make.toUpperCase()]);
        document.getElementById('countryResult' + (z+1)).classList.add(res);
        switch(res){
            case 'green':
                iStr = country;
                ii = `correct country (${country})`;
                break;
            case 'yellow':
                iStr = continent;
                ii = `correct continent (${continent})`;
                break;
            default:
                if (country !== 'USA')
                    iStr = continent;
                else
                    iStr = country;
                ii = `incorrect continent (${continent})`;
        }
        document.getElementById('countryResult' + (z+1)).innerHTML = `<img src="${country_images[iStr + '_Icon_' + res.charAt(0).toUpperCase() + res.substring(1)]}" alt="${ii}" width=100px>`;
        document.getElementById('countryResult' + (z+1)).title = ii;

        // Make
        res = checkName(getCookie('make' + (z+1)).toUpperCase(), dailyCar.Make.toUpperCase());
        switch(res){
            case 'green':
                ii = `correct make (${getCookie('make' + (z+1))})`;
                break;
            case 'yellow':
                ii = `make has same first letter (${getCookie('make' + (z+1))})`;
                break;
            default:
                ii = `incorrect make (${getCookie('make' + (z+1))})`;
        }
        if (res === 'gray') res = 'lightgray';
        document.getElementById('makeResult' + (z+1)).classList.add(res);
        document.getElementById('makeResult' + (z+1)).innerHTML = `<img src="${make_images[getCookie('make' + (z+1)).replace(' ', '_') + '_Icon']}" alt="${getCookie('make' + (z+1))} (${res})" width=80px>`;
        document.getElementById('makeResult' + (z+1)).title = ii;

        // Model
        res = checkName(getCookie('model' + (z+1)).toUpperCase(), dailyCar.Model.toUpperCase());
        switch(res){
            case 'green':
                ii = `correct model (${getCookie('model' + (z+1))})`;
                break;
            case 'yellow':
                ii = `model has same first letter (${getCookie('model' + (z+1))})`;
                break;
            default:
                ii = `incorrect model (${getCookie('model' + (z+1))})`;
        }
        document.getElementById('modelResult' + (z+1)).classList.add(res);
        document.getElementById('modelResult' + (z+1)).innerHTML = `<p>${getCookie('model' + (z+1))}</p>`;
        document.getElementById('modelResult' + (z+1)).title = ii;
    }
}

function guess(){
    let guessedModel = getGuessedCar();
    let guessedCar;
    let gcValid = false;
    let simplifiedGC = guessedModel.toUpperCase().replaceAll(/[\s-]/g,'');
    // console.log(simplifiedGC);
    for (let car of finalList) {
        let simplifiedModel = car.Model.toUpperCase().replaceAll(/[\s-]/g,'');
        if (simplifiedModel === simplifiedGC) {
            gcValid = true;
            guessedCar = car;
        }
    }

    let guessCounter = 0;
    if (getCookie('guessCounter') !== '')
        guessCounter = parseInt(getCookie('guessCounter'));

    if (getCookie('complete') !== '') // out of guesses
        return;

    if (!gcValid) {
        if (guessCounter > 0)
            document.getElementById('errMsg').innerHTML = 'Model not recognized';
    }
    else {
        let duplicateGuess = false;
        for (let z=0; z<10; z++)
            if (guessedCar.Model === getCookie('model' + (z+1)))
                duplicateGuess = true;
        if (duplicateGuess) {
            document.getElementById('errMsg').innerHTML = guessedCar.Model + ' already guessed';
            return;
        }

        document.getElementById('errMsg').innerHTML = '';
        guessCounter++;
        setCookie('guessCounter', guessCounter);
        let imageStr, imageInfo;

        // Year
        let result = checkYear(guessedCar.Year, dailyCar.Year);
        setCookie('year' + guessCounter, guessedCar.Year);
        switch (result) {
            case 'green':
                imageInfo = `correct year (+/- 1 year)`;
                break;
            case 'yellow':
                imageInfo = `close year (+/- 5 years)`;
                break;
            default:
                imageInfo = `incorrect year (>5 years away)`;
        }
        document.getElementById('yearResult' + guessCounter).style.opacity = '0';
        document.getElementById('yearResult' + guessCounter).classList.add(result);
        document.getElementById('yearResult' + guessCounter).innerHTML = `<p>${guessedCar.Year}</p>`;
        document.getElementById('yearResult' + guessCounter).title = imageInfo;
        fadeIn(document.getElementById('yearResult' + guessCounter));

        // Category
        result = checkCategories(guessedCar.Category, dailyCar.Category);
        document.getElementById('categoryResult' + guessCounter).classList.add(result);
        setCookie('category' + guessCounter, guessedCar.Category);
        if (guessedCar.Category.indexOf(',') !== -1)
            imageStr = 'Multiple';
        else
            imageStr = guessedCar.Category;
        switch (result) {
            case 'green':
                imageInfo = 'correct category';
                break;
            case 'yellow':
                imageInfo = 'partially correct category';
                break;
            default:
                imageInfo = 'incorrect category';
        }
        document.getElementById('categoryResult' + guessCounter).style.opacity = '0';
        document.getElementById('categoryResult' + guessCounter).innerHTML = `<img src="${category_images[imageStr + '_Icon_' + result.charAt(0).toUpperCase() + result.substring(1)]}" alt="${imageInfo} (${guessedCar.Category})" width=100px>`;
        document.getElementById('categoryResult' + guessCounter).title = `${imageInfo} (${guessedCar.Category})`;
        setTimeout(() => {
            fadeIn(document.getElementById('categoryResult' + guessCounter))
        }, 500);

        // Country
        let country = countries[guessedCar.Make.toUpperCase()];
        let continent = getContinent(country);
        result = checkCountry(country, countries[dailyCar.Make.toUpperCase()]);
        document.getElementById('countryResult' + guessCounter).classList.add(result);
        setCookie('country' + guessCounter, country);
        switch (result) {
            case 'green':
                imageStr = country;
                imageInfo = `correct country (${country})`;
                break;
            case 'yellow':
                imageStr = continent;
                imageInfo = `correct continent (${continent})`;
                break;
            default:
                if (country !== 'USA')
                    imageStr = continent;
                else
                    imageStr = country;
                imageInfo = `incorrect continent (${continent})`;
        }
        document.getElementById('countryResult' + guessCounter).style.opacity = '0';
        document.getElementById('countryResult' + guessCounter).innerHTML = `<img src="${country_images[imageStr + '_Icon_' + result.charAt(0).toUpperCase() + result.substring(1)]}" alt="${imageInfo}" width=100px>`;
        document.getElementById('countryResult' + guessCounter).title = imageInfo;
        setTimeout(() => {
            fadeIn(document.getElementById('countryResult' + guessCounter))
        }, 1000);

        // Make
        result = checkName(guessedCar.Make.toUpperCase(), dailyCar.Make.toUpperCase());
        setCookie('make' + guessCounter, guessedCar.Make);
        switch (result) {
            case 'green':
                imageInfo = `correct make (${guessedCar.Make})`;
                break;
            case 'yellow':
                imageInfo = `make has same first letter (${guessedCar.Make})`;
                break;
            default:
                imageInfo = `incorrect make (${guessedCar.Make})`;
        }
        if (result === 'gray') result = 'lightgray';
        document.getElementById('makeResult' + guessCounter).style.opacity = '0';
        document.getElementById('makeResult' + guessCounter).classList.add(result);
        document.getElementById('makeResult' + guessCounter).innerHTML = `<img src="${make_images[guessedCar.Make.replace(' ', '_') + '_Icon']}" alt="${guessedCar.Make} (${result})" width=80px>`;
        document.getElementById('makeResult' + guessCounter).title = imageInfo;
        setTimeout(() => {
            fadeIn(document.getElementById('makeResult' + guessCounter))
        }, 1500);

        // Model
        result = checkName(guessedCar.Model.toUpperCase(), dailyCar.Model.toUpperCase());
        switch (result) {
            case 'green':
                imageInfo = `correct model (${guessedCar.Model})`;
                break;
            case 'yellow':
                imageInfo = `model has same first letter (${guessedCar.Model})`;
                break;
            default:
                imageInfo = `incorrect model (${guessedCar.Model})`;
        }
        setCookie('model' + guessCounter, guessedCar.Model);
        document.getElementById('modelResult' + guessCounter).style.opacity = '0';
        document.getElementById('modelResult' + guessCounter).classList.add(result);
        document.getElementById('modelResult' + guessCounter).innerHTML = `<p>${guessedCar.Model}</p>`;
        document.getElementById('modelResult' + guessCounter).title = imageInfo;
        setTimeout(() => {
            fadeIn(document.getElementById('modelResult' + guessCounter))
        }, 2000);

        if (result === 'green'){
            setCookie('complete', 1);
            setPermCookie('stats', getCookie('stats') + (guessCounter % 10));
            document.getElementById('resultMessage').innerHTML = `Guessed the car in ${guessCounter} ${(guessCounter === 1) ? 'try' : 'tries'}!`;
            setTimeout(() => {
                document.getElementById('resultModal').style.display = 'block';
            }, 3000);
            setTimeout(() => {
                document.getElementById('resultModal').style.display = 'none';
            }, 6000);
        }
        else if (guessCounter === 10){
            setCookie('complete', 0);
            setPermCookie('stats', getCookie('stats') + 'x');
            document.getElementById('resultMessage').innerHTML = dailyCar.Model;
            setTimeout(() => {
                document.getElementById('resultModal').style.display = 'block';
            }, 3000);
            setTimeout(() => {
                document.getElementById('resultModal').style.display = 'none';
            }, 6000);
        }
    }
    // console.log(dailyCar);
    // console.log('Guessed:');
    // console.log(guessedCar);
    // console.log('Answer:');
    // console.log(dailyCar);
}

onload = async () => {
    await main();
}

document.getElementById('guessButton').addEventListener('click', async () => {
    await guess();
});


function toggleModal(modal, on) {
    modal.style.display = on ? 'block' : 'none';
}

document.getElementById('helpIcon').addEventListener('click', () => {
    toggleModal(document.getElementById('helpModal'), true)
});

document.getElementById('closeHelp').addEventListener('click', () => {
    toggleModal(document.getElementById('helpModal'), false)
});

document.getElementById('infoIcon').addEventListener('click', () => {
    toggleModal(document.getElementById('infoModal'), true)
});

document.getElementById('closeInfo').addEventListener('click', () => {
    toggleModal(document.getElementById('infoModal'), false)
});

document.getElementById('statsIcon').addEventListener('click', () => {
    displayStats();
});

document.getElementById('closeStats').addEventListener('click', () => {
    toggleModal(document.getElementById('statsModal'), false)
});

