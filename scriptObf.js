function kirimPesan() {
    const botToken = '8414394076:AAFb4wvB6tcxkm3UDnuk5LLs2ODBcHxBSns'; // TokenBot
    const chatId = '-1002483262767'; // id grup
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const msg = document.getElementById('message').value;
    const text = `Haii ditunggu postingannya yaa\nFrom : ${from}\nTo : ${to}\nMessage : ${msg}`;

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(text)}&parse_mode=html`, {
            method: 'POST'
        })
        .then(res => res.json())
        .then(data => {
            if (data.ok) {
                alert("Pesan berhasil dikirim!");
                document.getElementById('from').value = '';
                document.getElementById('to').value = '';
                document.getElementById('message').value = '';
            } else {
                alert("Gagal mengirim pesan.");
            }
        })
        .catch(err => {
            console.error("Error:", err);
            alert("Gagal mengirim pesan.");
        });
}
