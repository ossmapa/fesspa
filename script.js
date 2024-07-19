function kirimPesan() {

    var to = document.getElementById('to').value;
    var from = document.getElementById('from').value;
    var message = document.getElementById('message').value;
    var gabungan = `To : ${to}\nFrom : ${from}\nMessage : ${message}`

    var token = '7302360521:AAF5pl7VdgZpW8ROjmjLRil4ZebOY5VR1Do';
    var grup = '-4200949239';
    
    fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${encodeURIComponent(gabungan)}&parse_mode=html`, {
        method: 'POST'
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            alert('Haii ditunggu postingannya yaa');
            document.getElementById('to').value = '';
            document.getElementById('from').value = '';
            document.getElementById('message').value = '';
        } else {
            alert('Terjadi kesalahan, pesan tidak dapat dikirim!');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Terjadi kesalahan, pesan tidak dapat dikirim!');
    });
}