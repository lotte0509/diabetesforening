// Random træningsforlag
document.getElementById('randomTip').addEventListener('click', function() {
    let randomTip = ['Kend dine kulhydrater', 'Lad kulhydraterne komme fra mad med meget fuldkorn og mange kostfibre', 'Spis mange grøntsager – især de grove som kål, broccoli og blomkål', 'Vælg magert kød', 'Vælg magre mejeriprodukter', 'Vælg uforarbejdet mad frem for forarbejdet mad', 'Spis mindre portioner, hvis du vil tabe dig', 'Drik vand'];
    const randomItem = randomTip[Math.floor(Math.random() * randomTip.length)];
    document.getElementById('lblRandomTip').innerHTML = randomItem;
});