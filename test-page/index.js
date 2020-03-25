fetch('https://raw.githubusercontent.com/RhoInc/data-library/master/data/clinical-trials/renderer-specific/adbds.csv')
    .then(resp => resp.text())
    .then(text => d3.csv.parse(text))
    .then(data => {
        data.forEach(d => {
            d.ABLFL = d.VISIT === 'Screening' ? 'Y' : '';
            if (Math.random() < .05)
                d.STRESN = (+d.STRESN*Math.random()*5).toString();
            d.AGEGRP = d.AGE < 25
                ? '18-24'
                : d.AGE < 35
                ? '25-34'
                : d.AGE <= 45
                ? '35-44'
                : '>45';
        });
        const settings = {
        };
        const instance = nepExplorer('#container', settings);
        instance.init(data, '02-008');
    });
