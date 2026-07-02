// ========================================== //
// 🍔 MOBILE MENU TOGGLE                     //
// ========================================== //

function toggleMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('open');
}

// Close menu when clicking a link
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav').classList.remove('open');
    });
});

// ========================================== //
// 📌 HEADER SCROLL EFFECT                   //
// ========================================== //

window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ========================================== //
// 📧 CONTACT FORM                           //
// ========================================== //

document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();

    const recipientEmail = "enzyvia2025@gmail.com";
    
    const inputs = this.querySelectorAll('input');
    const name = inputs[0].value;
    const email = inputs[1].value;
    const subject = inputs[2]?.value || "Demande Enzyvia";
    const message = this.querySelector('textarea').value;

    const fullMessage = `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const encodedMessage = encodeURIComponent(fullMessage);

    window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodedMessage}`;

    alert("✅ Merci ! Votre message a été envoyé. Nous vous répondrons dans les plus brefs délais. 🧬");
    this.reset();
});

// ========================================== //
// 🎯 ACTIVE NAV LINK                        //
// ========================================== //

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

console.log("🧬 Enzyvia Pharma website loaded successfully!");