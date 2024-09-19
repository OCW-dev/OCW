document.addEventListener('DOMContentLoaded', () => {
    const walletOption = document.getElementById('wallet-option');
    const contestOption = document.getElementById('contest-option');

    walletOption.addEventListener('click', () => {
        walletOption.classList.add('selected');
        contestOption.classList.remove('selected');
    });

    contestOption.addEventListener('click', () => {
        contestOption.classList.add('selected');
        walletOption.classList.remove('selected');
    });

    document.getElementById('btn_receive_page').addEventListener('click', function() {
        window.location.href = 'select_crypto_recieve.html';
    });
    document.getElementById('btn_send_page').addEventListener('click', function() {
        window.location.href = 'select_crypto_send.html';
    });
    document.getElementById('btn_swap_page').addEventListener('click', function() {
        window.location.href = 'index.html';
    });
    


});