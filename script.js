
// Import dpendencies
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// All our code will be in a async function
const init = async () => {
    // We init our browser
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox']
    });

    // We init our page
    const page = await browser.newPage();

    // We declare a handler to dismiss any popup if one is displayed
    page.on('dialog', async dialog => {
        await dialog.dismiss();
    });

    // We then init a pageResult variable, for now, we just give it a default value
    let pageResult = {
        status: 'unknown',
        datas: []
    };

    // We init a rowNumberToStart variable, for now, we want to get the datas from the beginning
    let rowNumberToStart = 0;

    // We init a datas variable, our datas will be stored in there
    let datas = [];

    // We init a timer
    let startTime = Date.now();

    // Displaying infos in console
    console.log('Collecting datas. Please wait, this may take a while.');

    // We will iterate until we find all the datas
    while (pageResult.status !== 'done') {
        // And open the specified page
        await page.goto('https://web.bankin.com/challenge/index.html?start=' + rowNumberToStart);

        // We will then observe the status of the page
        // The status where datas are correctly displayed on the page is : 'correct'
        // The status where datas are not displayed on the page is : 'wrong'
        // The status where there is not more data to display is : 'done'
        pageResult = await page.evaluate(() => {
            // We init a HTMLTable variable with the HTML table element that should contain datas
            let HTMLTable = document.querySelector('#dvTable > table');
            // We init a HTMLRows variable with all the HTML tr elements that contain datas
            let HTMLRows = document.querySelectorAll('#dvTable > table > tbody > *:not(:nth-child(1))');

            // We convert our NodeList object into a JSON object
            let dataRows = [];
            for (let HTMLRow of HTMLRows) {
                dataRows.push({
                    'account': HTMLRow.querySelector('td:nth-child(1)').textContent,
                    'transactionNumber': parseInt(HTMLRow.querySelector('td:nth-child(2)').textContent.replace(/\D/g, '')),
                    'amount': parseInt(HTMLRow.querySelector('td:nth-child(3)').textContent.replace(/\D/g, '')),
                    'currency': HTMLRow.querySelector('td:nth-child(3)').textContent.replace(/\d/g, '')
                });
            }

            // We finally return the page status with the datas associated if they exists
            if (!HTMLTable) { return { status: 'wrong', datas: [] }; }
            else if (HTMLTable && !HTMLRows.length) { return { status: 'done', datas: [] }; }
            else if (HTMLTable && HTMLRows.length) { return { status: 'correct', datas: dataRows }; }
        });

        // If the page status is correct
        if (pageResult.status === 'correct') {
            // We gather the datas
            datas = datas.concat(pageResult.datas);

            // We increment our rowNumberToStart variable with the length of the datas gathered to prepare the next loop
            rowNumberToStart += pageResult.datas.length;

            // Displaying infos in console
            console.log(pageResult.datas.length + ' item(s) were gathered. Next loop will start at row number ' + rowNumberToStart + '.');
        }
    }

    // We init a timer
    let endTime = Date.now();

    // Displaying infos in console
    console.log('Datas were gathered in ' + (endTime - startTime) + ' milliseconds.');

    // Write datas into a JSON file
    fs.writeFile(path.join(__dirname, 'datas.json'), JSON.stringify(datas), (err) => {
        if (err) {
            var errMsg = 'File writing error.';
            console.error(errMsg);
            return;
        }
    });

    // Displaying infos in console
    console.log('Datas were written in ' + path.join(__dirname, 'datas.json') + '.');

    await browser.close();
};
init();
