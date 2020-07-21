console.log('[Birthday] Checking if it\'s August 17th...');
const d = new Date();

// Months are 0-indexed (0 = Jan, 11 = Dec)
if (d.getMonth() === 2 && d.getDate() === 24) {
    console.log('[Birthday] It is August 17th!');
    confetti.start();

    setTimeout(() => {
        console.log('[Birthday] Stopping confetti!');
        confetti.stop();
    }, 9000);
} else {
    console.log('[Birthday] It is not August 17th.');
}

function testConfetti(timeout) {
    const time = timeout ? timeout * 1000 : 3000;

    console.log('[Birthday] User wanted to test confetti');
    confetti.start();
    setTimeout(() => {
        console.log('[Birthday] Stopping confetti');
        confetti.stop();
    }, time);
}