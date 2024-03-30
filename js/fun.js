// Fungsi untuk scroll ke bagian tertentu dengan offset
function scrollToSectionWithOffset(sectionId, offset) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - offset;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
}

// Tangani klik pada setiap link di navigasi
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-item');
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwa6MZXj_xWYHo0JLBzH3qmRsccih9YSh4Rtpq-qz_62OF5tYdn_nvwqfn8xehuN0U4/exec';
    const form = document.getElementById('contact-form'); // Changed to getElementById and added id attribute to the form
    navLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Menghentikan default behavior dari link
            const targetSectionId = this.getAttribute('href').substring(1);
            scrollToSectionWithOffset(targetSectionId, 100); // Ubah offset sesuai kebutuhan
        });
    });
    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            alert('Sent !');
            form.reset();
            console.log('Success!', response);
        })
        .catch(error => {
            alert('Something Went Wrong !');
            form.reset();
            console.error('Error!', error.message);
        })
    })
});

