function kirimPesan() {

    var message = document.getElementById('message');

    var realMessage = message.value;

    var token = '7302360521:AAF5pl7VdgZpW8ROjmjLRil4ZebOY5VR1Do'; // Ganti dengan token bot yang kamu buat
    var grup = '-4200949239'; // Ganti dengan chat id dari bot yang kamu buat

    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${realMessage}&parse_mode=html`,
        method: `POST`,
    })
}