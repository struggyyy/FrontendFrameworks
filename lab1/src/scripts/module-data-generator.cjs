const fs = require('fs');
const path = require('path');

const count = Number(process.argv[2]) || 9;
let carBrands = [];

const generateLicensePlate = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomLetters = Array.from({ length: 3 }, () => letters.charAt(Math.floor(Math.random() * letters.length))).join('');
    const randomNumbers = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    return `${randomLetters}-${randomNumbers}`;
};

fs.readFile('./src/scripts/car-brands.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    
    carBrands = data.split("\n").map(s => s.trim()).filter(n => n.length !== 0);

    const cars = [];

    for (let i = 0; i < count; i++) {
        const car = {
            id: i + 1,
            brand: carBrands[Math.floor(Math.random() * carBrands.length)],
            productionDate: new Date(
                2010 + Math.floor(Math.random() * 11),
                Math.floor(Math.random() * 12),
                Math.floor(Math.random() * 28) + 1
            ).toISOString().split('T')[0],
            licensePlate: generateLicensePlate()
        };
        cars.push(car);
    }

    const content = `export const data = ${JSON.stringify(cars, null, 2)};`;

    fs.writeFile(path.join(__dirname, '../module-data.js'), content, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log("module-data.js generated successfully");
        }
    });
});
