/*
 * NIGHTLUME — Signup Page Script
 */

/* ─── MODAL HELPERS ───────────────────────────────────────────────────────── */

const showModal = (modal) => {
    modal.style.transition = '';
    modal.style.opacity = '1';
    modal.style.display = 'flex';
    document.body.classList.add('no-scroll');
};

const hideModal = (modal) => {
    modal.style.transition = 'opacity 0.2s';
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.display = 'none';
        modal.style.opacity = '1';
        document.body.classList.remove('no-scroll');
    }, 200);
};

/* ─── AUTH PROTECTION ─────────────────────────────────────────────────────── */

const checkAuth = () => {
    const session = getSession();
    const lock = document.getElementById('auth-lock');
    const selectors = document.querySelectorAll('.plan-grid, .card-selector, .submit-btn');

    if (lock && !session) {
        lock.style.display = 'block';
        selectors.forEach(el => {
            el.style.opacity = '0.1';
            el.style.pointerEvents = 'none';
        });
    }
};

/* ─── NEON ANIMATION ──────────────────────────────────────────────────────── */

const setupNeon = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const text = el.innerText;
    el.innerHTML = '';
    text.split('').forEach((char, i) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.animationDelay = `${i * 0.1}s`;
        el.appendChild(span);
    });
};

/* ─── INTRO ANIMATION ─────────────────────────────────────────────────────── */

const setupIntro = (id) => {
    const intro = document.getElementById(id);
    if (!intro) return;
    const text = intro.innerText;
    intro.innerHTML = '';
    text.split('').forEach((char, i) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.className = 'char';
        intro.appendChild(span);
        setTimeout(() => span.classList.add('visible'), i * 70);
    });
};

/* ─── TERMINAL ────────────────────────────────────────────────────────────── */

const startTerminal = () => {
    const consoleBox = document.getElementById('console');
    if (!consoleBox || typeof consoleLines === 'undefined') return;

    let idx = 0;
    const type = () => {
        if (idx >= consoleLines.length) return;
        const line = document.createElement('div');
        line.innerHTML = consoleLines[idx];
        consoleBox.appendChild(line);
        consoleBox.scrollTop = consoleBox.scrollHeight;
        idx++;
        setTimeout(type, idx === 1 ? 100 : 400);
    };
    setTimeout(type, 2200);
};

/* ─── INTERSECTION OBSERVER ───────────────────────────────────────────────── */

const initObserver = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
};

/* ─── SLIDER ──────────────────────────────────────────────────────────────── */

const initSlider = () => {
    const container = document.querySelector('.design-slider');
    const navDots = document.querySelectorAll('.nav-rect');
    if (!container || navDots.length === 0) return;

    let currentIndex = 0;
    let scrollInterval;

    const scrollToSlide = (index) => {
        const target = document.getElementById(`ds-${index + 1}`);
        if (!target) return;
        container.scrollTo({ left: target.offsetLeft - container.offsetLeft, behavior: 'smooth' });
        navDots.forEach(dot => dot.style.background = '#222');
        navDots[index].style.background = '#fff';
    };

    const startAuto = () => {
        scrollInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % navDots.length;
            scrollToSlide(currentIndex);
        }, 6000);
    };

    navDots.forEach((dot, index) => {
        dot.addEventListener('click', (e) => {
            e.preventDefault();
            clearInterval(scrollInterval);
            currentIndex = index;
            scrollToSlide(currentIndex);
        });
    });

    container.addEventListener('mouseenter', () => clearInterval(scrollInterval));
    container.addEventListener('mouseleave', startAuto);
    startAuto();
};

/* ─── INIT ────────────────────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
    checkAuth();
    setupNeon('logo-neon');
    setupNeon('title');
    setupIntro('intro');
    startTerminal();
    initObserver();
    initSlider();
    injectAuth();

    setTimeout(() => {
        const t = document.getElementById('title');
        if (t) t.classList.add('visible');
    }, 1000);
});
/* ─── NAVBAR AUTH INJECT ──────────────────────────────────────────────────── */
const injectAuth = () => {
    const navAuth = document.getElementById('nav-auth');
    if (!navAuth) return;

    const session = getSession();

    if (session) {
        navAuth.innerHTML = `
            <div style="display:flex;align-items:center;gap:15px;">
                <a href="profile.html" id="nav-profile-btn" class="btn-reg" style="
                    background: transparent;
                    border: 1px solid #333;
                    color: #fff;
                    gap: 8px;
                    transition: 0.3s;
                ">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    ${session.username}
                </a>
                <a href="#" id="nav-logout-btn" style="
                    color: #ff4444;
                    font-size: 10px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    border: 1px solid rgba(255,68,68,0.3);
                    padding: 8px 16px;
                    text-decoration: none;
                    transition: 0.3s;
                ">LOGOUT</a>
            </div>`;

        const profileBtn = document.getElementById('nav-profile-btn');
        profileBtn.addEventListener('mouseenter', () => {
            profileBtn.style.borderColor = '#fff';
            profileBtn.style.background = '#fff';
            profileBtn.style.color = '#000';
            profileBtn.querySelector('svg').style.stroke = '#000';
        });
        profileBtn.addEventListener('mouseleave', () => {
            profileBtn.style.borderColor = '#333';
            profileBtn.style.background = 'transparent';
            profileBtn.style.color = '#fff';
            profileBtn.querySelector('svg').style.stroke = 'currentColor';
        });
        const logoutBtn = document.getElementById('nav-logout-btn');
        logoutBtn.addEventListener('mouseenter', () => {
            logoutBtn.style.background = '#ff4444';
            logoutBtn.style.color = '#fff';
            logoutBtn.style.borderColor = '#ff4444';
        });
        logoutBtn.addEventListener('mouseleave', () => {
            logoutBtn.style.background = 'transparent';
            logoutBtn.style.color = '#ff4444';
            logoutBtn.style.borderColor = 'rgba(255,68,68,0.3)';
        });
        const modal = document.getElementById('custom-confirm');
        if (modal) {
            logoutBtn.addEventListener('click', (e) => {
                e.preventDefault();
                showModal(modal);


                document.getElementById('confirm-yes')?.addEventListener('click', () => {
                    hideModal(modal);
                    setTimeout(() => {
                        localStorage.clear();
                        redirectTo('signup.html');
                    }, 200);
                }, { once: true });

                document.getElementById('confirm-no')?.addEventListener('click', () => {
                    hideModal(modal);
                }, { once: true });
            });
        } else {
            logoutBtn.addEventListener('click', (e) => {
                e.preventDefault();
                localStorage.clear();
                redirectTo('signup.html');
            });
        }

    } else {
        navAuth.innerHTML = `
            <a href="signup.html" style="text-decoration:none;">
                <button class="btn-reg">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    Sign Up
                </button>
            </a>`;
    }
};

const getSession = () => {
    try {
        return JSON.parse(localStorage.getItem('user_session'));
    } catch {
        return null;
    }
};

const redirectTo = (page) => { window.location.href = page; };
