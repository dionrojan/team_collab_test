/* ==========================================================================
   JOEL BINOY - INTERACTIVE PORTFOLIO LOGIC
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initCanvas();
    initTypingEffect();
    initNavbarScroll();
    initMobileNav();
    initCertificates();
});

/* ==========================================================================
   1. CANVAS MATRIX & PARTICLE NETWORK ANIMATION
   ========================================================================== */
function initCanvas() {
    const canvas = document.getElementById('cyber-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const mouse = { x: null, y: null, radius: 150 };
    window.addEventListener('mousemove', (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
    });

    const particles = [];
    const particleCount = Math.min(width < 768 ? 40 : 80, 100);

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.8;
            this.vy = (Math.random() - 0.5) * 0.8;
            this.radius = Math.random() * 2 + 1;
            this.color = Math.random() > 0.5 ? '#00f3ff' : '#00ff9d';
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.shadowBlur = 8;
            ctx.shadowColor = this.color;
            ctx.fill();
            ctx.shadowBlur = 0;
        }
    }

    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();

            // Connect particles
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 120) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(0, 243, 255, ${1 - dist / 120 * 0.8})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }

            // Mouse connection
            if (mouse.x && mouse.y) {
                const dx = particles[i].x - mouse.x;
                const dy = particles[i].y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < mouse.radius) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.strokeStyle = `rgba(255, 42, 95, ${1 - dist / mouse.radius})`;
                    ctx.lineWidth = 0.8;
                    ctx.stroke();
                }
            }
        }

        requestAnimationFrame(animate);
    }

    animate();
}

/* ==========================================================================
   2. HERO TYPING EFFECT
   ========================================================================== */
function initTypingEffect() {
    const targetEl = document.getElementById('typing-text');
    if (!targetEl) return;

    const phrases = [
        "B.Tech CSE Student @ Amal Jyothi College of Engineering",
        "Keen interest in Cybersecurity & System Development",
        "Proficient in Python, SQL, C, and Java",
        "Creator of SkillSprint & Technical Projects"
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 70;

    function type() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            targetEl.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 35;
        } else {
            targetEl.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 70;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typeSpeed = 2200;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeSpeed = 400;
        }

        setTimeout(type, typeSpeed);
    }

    type();
}

/* ==========================================================================
   3. NAVBAR SCROLL & MOBILE MENU
   ========================================================================== */
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

function initMobileNav() {
    const toggleBtn = document.getElementById('mobile-toggle');
    const navLinks = document.getElementById('nav-links');

    if (toggleBtn && navLinks) {
        toggleBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }
}

/* ==========================================================================
   4. DYNAMIC CERTIFICATE MANAGER (JOEL BINOY'S REAL CERTIFICATES)
   ========================================================================== */
const defaultCertificates = [
    {
        id: 'cert-i2u',
        title: 'Innovation Ideas Unleashed (I²U) 2025 - Selected for Funding',
        organization: 'Amal Jyothi College of Engineering, Kanjirappally',
        iconClass: 'fa-award',
        glowClass: 'cyan-glow',
        imgUrl: 'assets/cert_i2u.jpg',
        description: 'Certificate of Appreciation for Phase-II evaluation of Innovation Ideas Unleashed (I²U) 2025 Project Contest. Project: "Real Time Public Transport Tracking for Small Cities" (ASCII Code: CSE-2025-108), selected for funding.'
    },
    {
        id: 'cert-sih',
        title: 'Smart India Hackathon 2025 (SIH 2025)',
        organization: 'MakerHub IEDC AJCE & Ministry of Education / IIC',
        iconClass: 'fa-lightbulb',
        glowClass: 'green-glow',
        imgUrl: 'assets/cert_sih.jpg',
        description: 'Certificate of Appreciation in recognition of outstanding participation in Smart India Hackathon 2025, Institute Level Competition held at Amal Jyothi College of Engineering (Autonomous) on 15th & 16th September 2025.'
    },
    {
        id: 'cert-figma',
        title: 'Figma Bootcamp Certification',
        organization: 'LetsUpgrade (In Collaboration with NSDC & GDG MAD)',
        iconClass: 'fa-figma',
        glowClass: 'crimson-glow',
        imgUrl: 'assets/cert_figma.jpg',
        description: 'Successfully completed 3-Day Figma Bootcamp (29 Sept 2025 to 1 Oct 2025). Certificate No: LUEFGSEPT125450.'
    }
];

function getCertificates() {
    const stored = localStorage.getItem('joel_certificates_v2');
    if (stored) {
        try {
            return JSON.parse(stored);
        } catch(e) {
            return defaultCertificates;
        }
    }
    return defaultCertificates;
}

function saveCertificates(certs) {
    localStorage.setItem('joel_certificates_v2', JSON.stringify(certs));
    renderCertificates();
}

function initCertificates() {
    renderCertificates();
}

function renderCertificates() {
    const container = document.getElementById('certs-grid-container');
    if (!container) return;

    const certs = getCertificates();

    container.innerHTML = certs.map(c => `
        <div class="cert-card glass-card" onclick="viewCertDetail('${c.id}')">
            <div class="cert-card-img-wrap">
                <img src="${c.imgUrl || 'assets/cert_i2u.jpg'}" alt="${escapeHTML(c.title)}" class="cert-thumbnail">
                <div class="cert-img-overlay"><i class="fa-solid fa-expand"></i> View Full Image</div>
            </div>
            <div class="cert-content">
                <span class="cert-org">${escapeHTML(c.organization || 'Certification')}</span>
                <h3 class="cert-name">${escapeHTML(c.title)}</h3>
                <p class="cert-desc">${escapeHTML(c.description)}</p>
                <span class="view-cert-link"><i class="fa-solid fa-arrow-up-right-from-square"></i> Open Certificate Details</span>
            </div>
        </div>
    `).join('');
}

function viewCertDetail(certId) {
    const certs = getCertificates();
    const cert = certs.find(c => c.id === certId);

    if (!cert) return;

    const content = `
        <span class="modal-badge"><i class="fa-solid fa-award"></i> Certificate Credentials</span>
        <h3>${escapeHTML(cert.title)}</h3>
        <p><strong>Issuing Organization:</strong> ${escapeHTML(cert.organization || 'N/A')}</p>
        <br>
        ${cert.imgUrl ? `<div class="modal-cert-image-box"><img src="${cert.imgUrl}" alt="${escapeHTML(cert.title)}" style="width:100%; border-radius:12px; border:1px solid var(--glass-border); margin-bottom:1rem;"></div>` : ''}
        <div class="modal-details">
            <p>${escapeHTML(cert.description)}</p>
        </div>
        <div style="display:flex; gap:10px; margin-top:1.5rem;">
            <button class="btn btn-primary btn-sm" onclick="closeModal()">Close Window</button>
        </div>
    `;

    showCustomModal(content);
}

function openAddCertModal() {
    const content = `
        <span class="modal-badge"><i class="fa-solid fa-plus"></i> Add New Certificate</span>
        <h3>Add Certificate to Portfolio</h3>
        <form onsubmit="handleAddCertSubmit(event)" style="display:flex; flex-direction:column; gap:1rem; margin-top:1rem;">
            <div class="form-group">
                <label>Certificate Title *</label>
                <input type="text" id="cert-title-input" required placeholder="e.g. Python for Security, Web Development">
            </div>
            <div class="form-group">
                <label>Issuing Organization / Platform</label>
                <input type="text" id="cert-org-input" placeholder="e.g. Coursera, NPTEL, Cisco, HackerRank">
            </div>
            <div class="form-group">
                <label>Description / Details</label>
                <textarea id="cert-desc-input" rows="3" placeholder="Brief overview of what was certified..."></textarea>
            </div>
            <button type="submit" class="btn btn-primary glow-btn" style="align-self:flex-start;">
                <i class="fa-solid fa-check"></i> Add Certificate
            </button>
        </form>
    `;
    showCustomModal(content);
}

function handleAddCertSubmit(e) {
    e.preventDefault();
    const title = document.getElementById('cert-title-input')?.value;
    const org = document.getElementById('cert-org-input')?.value;
    const desc = document.getElementById('cert-desc-input')?.value;

    if (!title) return;

    const certs = getCertificates();
    const newCert = {
        id: 'cert-' + Date.now(),
        title: title,
        organization: org || 'Personal Certificate',
        iconClass: 'fa-award',
        glowClass: 'cyan-glow',
        description: desc || 'Certified achievement added to portfolio.'
    };

    certs.push(newCert);
    saveCertificates(certs);
    closeModal();
    showToast(`Certificate "${title}" added successfully!`);
}

/* ==========================================================================
   5. MODAL SYSTEM FOR PROJECTS & CERTIFICATES
   ========================================================================== */
const projectModalData = {
    'skillsprint': {
        title: 'SkillSprint',
        category: 'Web & Micro-Learning Platform',
        badge: 'Featured Project',
        description: `
            <p><strong>SkillSprint</strong> is an innovative web-based platform engineered to streamline skill acquisition, sprint tracking, and project-based learning.</p>
            <br>
            <h4>Key Features:</h4>
            <ul>
                <li><strong>Sprint Milestone Tracking:</strong> Breaks down complex goals into milestone-based learning sprints.</li>
                <li><strong>Skill Progress Management:</strong> Provides clarity on progress across tech stacks.</li>
                <li><strong>Project Integration:</strong> Guides developers through structured practical tasks.</li>
            </ul>
            <br>
            <p><strong>Technologies:</strong> Python, Web Fundamentals (HTML5/CSS3/JavaScript), SQL Database Integration.</p>
        `
    },
    'sql-db': {
        title: 'SQL Database Management System',
        category: 'Database Architecture',
        badge: 'Academic & Applied Project',
        description: `
            <p>A relational database management system designed to handle structured schemas for managing student records, course enrolments, and automated calculations.</p>
            <br>
            <h4>Key Highlights:</h4>
            <ul>
                <li>Designed normalized relational schemas to ensure data integrity.</li>
                <li>Written structured SQL queries, JOINs, views, and index optimizations.</li>
            </ul>
        `
    }
};

function openProjectModal(key) {
    const data = projectModalData[key];
    if (!data) return;

    const content = `
        <span class="modal-badge">${data.badge}</span>
        <h3>${data.title}</h3>
        <div class="modal-details">${data.description}</div>
        <button class="btn btn-primary btn-sm" onclick="closeModal()">Close Window</button>
    `;
    showCustomModal(content);
}

function showCustomModal(htmlContent) {
    const modal = document.getElementById('info-modal');
    const content = document.getElementById('modal-content');
    if (!modal || !content) return;

    content.innerHTML = htmlContent;
    modal.classList.remove('hidden');
}

function closeModal() {
    const modal = document.getElementById('info-modal');
    if (modal) modal.classList.add('hidden');
}

function closeModalOnBackdrop(e) {
    if (e.target.classList.contains('modal-backdrop')) {
        closeModal();
    }
}

/* ==========================================================================
   6. INTERACTIVE TERMINAL LOGIC
   ========================================================================== */
function handleTerminalCommand(e) {
    e.preventDefault();
    const input = document.getElementById('terminal-input');
    const output = document.getElementById('terminal-output');
    if (!input || !output) return;

    const cmd = input.value.trim().toLowerCase();
    input.value = '';

    if (!cmd) return;

    const userLine = document.createElement('div');
    userLine.className = 'terminal-line';
    userLine.innerHTML = `<span class="prompt-text">joel@amal-jyothi:~$</span> ${escapeHTML(cmd)}`;
    output.appendChild(userLine);

    const resLine = document.createElement('div');
    resLine.className = 'terminal-line';

    switch (cmd) {
        case 'help':
            resLine.innerHTML = `
                Available Commands:<br>
                &nbsp;&nbsp;<span class="cmd-highlight">about</span>     - Who is Joel Binoy?<br>
                &nbsp;&nbsp;<span class="cmd-highlight">skills</span>    - Technical skills (Python, SQL, C, Java)<br>
                &nbsp;&nbsp;<span class="cmd-highlight">projects</span>  - SkillSprint project overview<br>
                &nbsp;&nbsp;<span class="cmd-highlight">certs</span>     - View certifications<br>
                &nbsp;&nbsp;<span class="cmd-highlight">contact</span>   - Email, LinkedIn & GitHub<br>
                &nbsp;&nbsp;<span class="cmd-highlight">whoami</span>    - Current visitor identity<br>
                &nbsp;&nbsp;<span class="cmd-highlight">clear</span>     - Clear console screen
            `;
            break;

        case 'about':
            resLine.innerHTML = `Joel Binoy | B.Tech CSE Student @ Amal Jyothi College of Engineering, Kanjirappally.<br>Interested in Cybersecurity, Software Engineering, and Database Systems.`;
            break;

        case 'skills':
            resLine.innerHTML = `Programming Languages & Stack:<br>• Python (Scripting & Automation)<br>• SQL (Relational Database Querying & Design)<br>• C Language (System Programming & Pointer Logic)<br>• Java (Object-Oriented Programming)`;
            break;

        case 'projects':
            resLine.innerHTML = `Featured Project: <strong style="color:var(--accent-cyan)">SkillSprint</strong> (Interactive Skill & Sprint Acquisition Platform)<br>Database System: SQL Relational Database Management System`;
            break;

        case 'certs':
            resLine.innerHTML = `Certificates:<br>1. Innovation Ideas Unleashed (I²U) 2025<br>2. Smart India Hackathon 2025 (SIH)<br>3. Figma Bootcamp Certification`;
            break;

        case 'contact':
            resLine.innerHTML = `Email: <a href="mailto:joelbinoy2021@gmail.com" style="color:var(--accent-cyan)">joelbinoy2021@gmail.com</a><br>LinkedIn: <a href="https://www.linkedin.com/in/joel-binoy-144141279" target="_blank" style="color:var(--accent-cyan)">joel-binoy-144141279</a><br>GitHub: <a href="https://github.com/joelbinoy2021-sketch" target="_blank" style="color:var(--accent-cyan)">joelbinoy2021-sketch</a>`;
            break;

        case 'whoami':
            resLine.innerHTML = `guest@cyber-visitor [Access Granted]`;
            break;

        case 'clear':
            output.innerHTML = '';
            return;

        default:
            resLine.innerHTML = `Command not recognized: '<span style="color:var(--accent-crimson)">${escapeHTML(cmd)}</span>'. Type '<span class="cmd-highlight">help</span>' for available options.`;
            break;
    }

    output.appendChild(resLine);

    const terminalBody = document.getElementById('terminal-body');
    if (terminalBody) terminalBody.scrollTop = terminalBody.scrollHeight;
}

function escapeHTML(str) {
    if (!str) return '';
    return str.replace(/[&<>'"]/g, 
        tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
    );
}

/* ==========================================================================
   7. CONTACT FORM SUBMISSION VIA FORMSPREE → GMAIL INBOX DELIVERY
   ========================================================================== */
async function handleContactSubmit(e) {
    e.preventDefault();

    const form = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const name = document.getElementById('sender-name')?.value;

    // Show loading state on button
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';

    const formData = new FormData(form);

    try {
        const response = await fetch('https://formspree.io/f/mykrakjk', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            // Success — message delivered to joelbinoy2021@gmail.com
            showToast(`✅ Message delivered to joelbinoy2021@gmail.com! Thank you, ${name || 'Visitor'}!`);
            form.reset();
        } else {
            const data = await response.json();
            const errMsg = data?.errors?.map(err => err.message).join(', ') || 'Something went wrong.';
            showToast(`❌ Failed to send: ${errMsg}`, true);
        }
    } catch (error) {
        showToast('❌ Network error. Please try again or email joelbinoy2021@gmail.com directly.', true);
    } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Transmit Message to Gmail';
    }
}

function showToast(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color:var(--accent-green)"></i> ${message}`;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}
