/*
 * NIGHTLUME ALL-IN-ONE ENGINE v2.0.2 - CINEMATIC CLI EDITION
 * Fixed missing printAsciiLogo invocation inside the boot flow.
 */

const legalContent = {
    agreement: {
        title: "User Agreement",
        html: "<p>Standard protocol for user interaction within the Nightlume environment. By accessing the core, you agree to follow the established encryption standards.</p><ul><li data-num='01'>Data integrity is priority.</li><li data-num='02'>Unauthorized access is logged.</li></ul>"
    },
    privacy: {
        title: "Privacy Policy",
        html: "<p>Your neural signatures and session logs are encrypted. We do not share data with external node clusters.</p>"
    },
    refund: {
        title: "Refund Policy",
        html: "<p>Transactions within the blockchain are final once verified by 3 independent nodes.</p>"
    }
};

/* ─── HELPERS ─────────────────────────────────────────────────────────────── */

const getSession = () => {
    try {
        return JSON.parse(localStorage.getItem('user_session'));
    } catch {
        return null;
    }
};

const redirectTo = (page) => { window.location.href = page; };

/* ─── CORE ANIMATIONS ─────────────────────────────────────────────────────── */

const setupNeon = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const text = el.innerText;
    el.innerHTML = '';
    text.split('').forEach((char, i) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.animationDelay = `${i * 0.05}s`;
        el.appendChild(span);
    });
};

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
        setTimeout(() => span.classList.add('visible'), i * 40);
    });
};

/* ─── TERMINAL SYSTEM ────────────────────────────────────────────────────── */

const startTerminal = () => {
    const consoleBox = document.getElementById('console');
    if (!consoleBox) return;

    // Configuration Attributes
    const HOSTNAME_VAL = "nightlume";
    const USER_VAL = "vdubdevil";
    const VERSION_VAL = "Nightlume Core OS v1.2-stable (Build 2026.07)";
    
    // Modify target release parameters here
    const TARGET_RELEASE = new Date("2026-07-19T23:59:59");

    const asciiLogo = `   .-----------------.
 .#####################.
#######---         ----
####  ..###############..  	 _   _  _      _     _   _                        
#### #################### 	| \\ | |(_)    | |   | | | |                       
#### #################### 	|  \\| |_  __ \`| |__ | |_| |_   _ _ __ ___   ___ 
#### ####################    	| . \` | |/ _\` | '_ \\| __| | | | | '_ \` _ \\ / _ \\
#### ####################    	| |\\  | | (_| | | | | |_| | |_| | | | | | |  __/
####  ''##############''     	|_| \\_|_|\\__, |_| |_|\\__|_|\\__,_|_| |_| |_|\\___|
 #######---         ----                 __/ |                                
  '####################'                 |___/                                 
    '-----------------'   `;

    const randomDelay = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    const getCountdownString = () => {
        const now = new Date();
        if (now > TARGET_RELEASE) {
            return `<span style="color:#00ffaa; font-weight:bold;">LIVE NOW</span>`;
        }

        const diff = TARGET_RELEASE - now;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        return `<span style="color:#00ffaa; font-weight:bold;">${days}d ${hours}h ${minutes}m ${seconds}s</span>`;
    };

    const typeText = (element, htmlText, speed = 6, callback) => {
        let i = 0;
        element.innerHTML = "";
        
        const div = document.createElement('div');
        div.innerHTML = htmlText;
        const plainText = div.innerText || div.textContent || "";
        const completeHTML = htmlText;

        const interval = setInterval(() => {
            if (i <= plainText.length) {
                element.innerText = plainText.substring(0, i);
                consoleBox.scrollTop = consoleBox.scrollHeight;
                i++;
            } else {
                clearInterval(interval);
                element.innerHTML = completeHTML;
                if (callback) callback();
            }
        }, speed);
    };

    const appendRow = (htmlContent, isBreak = false, height = "auto") => {
        const row = document.createElement('div');
        row.className = 'terminal-row';
        row.style.margin = '0';
        row.style.padding = '0';
        if (isBreak) {
            row.style.height = height;
        } else {
            row.innerHTML = htmlContent;
        }
        consoleBox.appendChild(row);
        consoleBox.scrollTop = consoleBox.scrollHeight;
        return row;
    };

    const printAsciiLogo = () => {
        appendRow(`<pre class="ascii-logo" style="line-height: 1.2; margin: 0; color: #00ffaa;">${asciiLogo}</pre>`);
        appendRow(`<span class="white-text"> » NEXT STABLE RELEASE: </span>${getCountdownString()}`);
        appendRow('', true, '1.5em');
    };

    /* ─── CINEMATIC BOOT LOGIC ───────────────────────────────────────────── */
    const runCinematicBoot = async () => {
        // 1. Prints your exact Ascii Logo & Stable Release Countdown Header first
        printAsciiLogo();
        await new Promise(r => setTimeout(r, 600));

        // 2. Begins System Boot Log Streams
        appendRow('<span class="welcome-green">Nightlume bootstrap initialized.</span>');
        await new Promise(r => setTimeout(r, randomDelay(150, 300)));
        
        appendRow('<span class="white-text">Establishing secure sandbox connection...</span>');
        await new Promise(r => setTimeout(r, randomDelay(400, 700)));
        
        const checks = [
            "Loading graphics subsystem...",
            "Mounting virtual filesystem...",
            "Starting authentication daemon...",
            "Loading NightCore modules...",
            "Verifying render engine...",
            "Connecting to secure node..."
        ];
        
        for (const check of checks) {
            appendRow(`[ <span style="color:#00ffaa; font-weight:bold;">  OK   </span> ] ${check}`);
            await new Promise(r => setTimeout(r, randomDelay(80, 450)));
        }

        appendRow('', true, '0.5em');
        appendRow(`<span class="cmd" style="color: #00ff88;">${USER_VAL}@${HOSTNAME_VAL}:~$ </span><span class="white-text" id="simulated-typing"></span>`);
        const typingSpan = document.getElementById('simulated-typing');
        const targetCmdStr = "sudo apt install nightlume-core";
        
        for (let i = 0; i <= targetCmdStr.length; i++) {
            if (typingSpan) typingSpan.textContent = targetCmdStr.substring(0, i);
            await new Promise(r => setTimeout(r, 400 / targetCmdStr.length));
        }
        await new Promise(r => setTimeout(r, 400));
        
        appendRow('<span class="white-text">Reading package lists... Done</span>');
        await new Promise(r => setTimeout(r, 250));
        appendRow('<span class="white-text">Building dependency tree... Done</span>');
        await new Promise(r => setTimeout(r, 350));
        
        appendRow('<span class="white-text">Downloading nightlume-core... </span>');
        const progressRow = appendRow('<span id="pbar" style="color:#00ffaa; font-family:monospace;"></span>');
        const pbarSpan = document.getElementById('pbar');
        const barWidth = 24;

        let percent = 0;
        while (percent <= 100) {
            const progress = Math.floor((barWidth * percent) / 100);
            const barStr = `\r[${"█".repeat(progress)}${".".repeat(barWidth - progress)}] ${String(percent).padStart(3, ' ')}% Complete`;
            if (pbarSpan) pbarSpan.textContent = barStr;
            
            if (percent === 100) break;

            let pause = randomDelay(20, 70);
            if (percent >= 75 && percent <= 80) pause = randomDelay(200, 400);
            if (percent >= 93 && percent <= 96) pause = randomDelay(150, 350);
            await new Promise(r => setTimeout(r, pause));

            percent += Math.floor(Math.random() * 3) + 1;
            if (percent > 100) percent = 100;
        }

        appendRow('', true, '0.5em');
        appendRow('<span class="welcome-green">Unpacking nightlume-core (v1.2-stable)... Done</span>');
        await new Promise(r => setTimeout(r, 450));
        appendRow('', true, '0.5em');

        appendRow(`<span class="white-text">Target Launch Countdown: </span>${getCountdownString()}`);
        appendRow('', true, '0.5em');
        await new Promise(r => setTimeout(r, 500));

        appendRow('<span style="color: gray;">Launching interactive shell interface orchestration layers...</span>');
        appendRow('', true, '0.5em');
        await new Promise(r => setTimeout(r, 800));

        spawnInteractiveInput();
    };

    runCinematicBoot();

    const spawnInteractiveInput = () => {
        const existingInput = document.getElementById('terminal-stdin');
        if (existingInput) {
            existingInput.removeAttribute('id');
            existingInput.disabled = true;
        }

        const inputRow = document.createElement('div');
        inputRow.className = 'terminal-interactive-row';
        inputRow.style.display = 'flex';
        inputRow.style.alignItems = 'center';
        inputRow.style.margin = '0';
        inputRow.style.padding = '0';
        
        const currentPrompt = `${USER_VAL}@${HOSTNAME_VAL}:~$ `;

        inputRow.innerHTML = `
            <span class="cmd" style="white-space: pre; flex-shrink: 0; color: #00ff88;">${currentPrompt}</span>
            <div class="terminal-input-wrapper" style="flex-grow: 1; display: flex; position: relative;">
                <input type="text" id="terminal-stdin" autofocus autocomplete="off" spellcheck="false" 
                       style="background: transparent; border: none; color: #fff; outline: none; font-family: inherit; 
                       font-size: inherit; width: 100%; padding: 0; margin: 0;">
            </div>
        `;
        consoleBox.appendChild(inputRow);
        consoleBox.scrollTop = consoleBox.scrollHeight;

        const stdin = document.getElementById('terminal-stdin');
        if (!stdin) return;
        stdin.focus();
        
        const focusHandler = () => stdin.focus();
        consoleBox.addEventListener('click', focusHandler);

        stdin.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const rawCmd = stdin.value;
                const normalizedCmd = rawCmd.trim();

                consoleBox.removeEventListener('click', focusHandler);
                stdin.disabled = true;
                inputRow.innerHTML = `<span class="cmd" style="color: #00ff88;">${currentPrompt}</span><span class="white-text">${rawCmd}</span>`;

                processUserCommand(normalizedCmd);
            }
        });
    };

    const triggerClearScreen = () => {
        consoleBox.innerHTML = '';
        spawnInteractiveInput();
    };

    const invokePreLaunchTeaser = async (outputDiv) => {
        outputDiv.innerHTML = `<span class="white-text">Checking repository...</span>`;
        await new Promise(r => setTimeout(r, 400));
        outputDiv.innerHTML += `\n<span class="white-text">Latest origin commit: </span><span class="welcome-green">7baf2cd</span>`;
        await new Promise(r => setTimeout(r, 300));
        outputDiv.innerHTML += `\n<span class="white-text">Comparing localized pre-build payload... </span><span class="welcome-green">MATCHED</span>`;
        await new Promise(r => setTimeout(r, 500));
        
        outputDiv.innerHTML += `\n\n<span class="welcome-green">[SYSTEM NOTICE] NIGHTLUME CORE ENGINE ENCRYPTION ACTIVE.</span>`;
        outputDiv.innerHTML += `\n<span class="white-text">The rendering pipeline modules are safely staging behind the firewall.</span>`;
        outputDiv.innerHTML += `\n<span class="white-text">Time remaining until master deployment signature drops: </span>${getCountdownString()}\n\n`;
        
        spawnInteractiveInput();
    };

    const processUserCommand = (cmdStr) => {
        const parts = cmdStr.trim().split(/\s+/);
        const command = parts[0].toLowerCase();

        if (command === 'clear') {
            triggerClearScreen();
            return;
        }
        if (command === '') {
            spawnInteractiveInput();
            return;
        }

        const outputDiv = document.createElement('div');
        outputDiv.className = 'terminal-row';
        outputDiv.style.margin = '0';
        outputDiv.style.padding = '0';
        outputDiv.style.whiteSpace = 'pre-wrap';
        consoleBox.appendChild(outputDiv);

        let finalHTML = "";
        switch (command) {
            case 'help':
                finalHTML = `Available Launcher Utility Blocks:

help        Show this local environment diagnostics helper
status      Display dynamic environment framework status logs
countdown   Check updated real-time engine release clock
clear       Flush current terminal terminal sequence matrix
date        Print machine tracking runtime clock configuration
version     Print core metadata distribution identity properties
launch      Invoke localized target application virtual runtimes
exit        Terminate local session bindings safely`;
                break;

            case 'status':
                finalHTML = `System Core Launcher Matrix: <span class="welcome-green">ONLINE // PRE-LAUNCH SANDBOX</span>\nTarget Pipeline Status:      <span style="color:#ff4444;">LOCKED</span> (Staging Deployment)`;
                break;

            case 'countdown':
                finalHTML = `<span class="white-text">Time Remaining Until Deployment: </span>${getCountdownString()}`;
                break;

            case 'date':
                finalHTML = new Date().toISOString();
                break;

            case 'version':
                finalHTML = VERSION_VAL;
                break;

            case 'launch':
                invokePreLaunchTeaser(outputDiv);
                return;

            case 'exit':
                finalHTML = `<span style="color:gray;">Session bindings dropped. Goodbye.</span>`;
                typeText(outputDiv, finalHTML, 3, () => {
                    setTimeout(() => { window.close(); }, 1000);
                });
                return;

            default:
                finalHTML = `<span style="color:#ff4444;">bash: ${command}: command not found. Type 'help' for tracking diagnostics.</span>`;
                break;
        }

        typeText(outputDiv, finalHTML, 3, () => {
            spawnInteractiveInput();
        });
    };
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

/* ─── LEGAL TABS ──────────────────────────────────────────────────────────── */

window.showLegal = function (type, btn) {
    const body = document.getElementById('legal-body');
    const tabs = document.querySelectorAll('.tab-btn');
    if (!body || !legalContent[type]) return;

    body.style.opacity = '0';
    body.style.transform = 'translateY(10px)';
    setTimeout(() => {
        tabs.forEach(t => t.classList.remove('active'));
        btn.classList.add('active');
        body.innerHTML = `
            <h1 id="legal-title">${legalContent[type].title}</h1>
            <span class="last-updated">PROTOCOL v4.0.1 // COMPLIANCE VERIFIED</span>
            ${legalContent[type].html}
        `;
        body.style.opacity = '1';
        body.style.transform = 'translateY(0)';
        setupNeon('legal-title');
    }, 200);

    window.scrollTo({ top: 0, behavior: 'smooth' });
};

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

/* ─── PROFILE PAGE ────────────────────────────────────────────────────────── */

const initProfile = async (userNameDisplay, logoutBtn) => {
    const sessionData = getSession();
    const loginTime = localStorage.getItem('login_timestamp');
    const modal = document.getElementById('custom-confirm');
    const yesBtn = document.getElementById('confirm-yes');
    const noBtn = document.getElementById('confirm-no');
    if (!sessionData) {
        redirectTo("signup.html");
        return;
    }

    if (userNameDisplay) userNameDisplay.innerText = sessionData.username;

    const statusLine = document.getElementById('u-status-line');
    if (statusLine) statusLine.innerText = `${sessionData.status} // UID #${sessionData.uid}`;

    const emailEl = document.getElementById('u-email');
    const joinedEl = document.getElementById('u-joined');
    if (emailEl) emailEl.innerText = sessionData.email;
    if (joinedEl) joinedEl.innerText = sessionData.reg_date;

    const stEl = document.getElementById('u-session-time');
    if (stEl) stEl.innerText = loginTime || new Date().toLocaleTimeString();

    const regionEl = document.getElementById('u-region');
    if (regionEl) {
        regionEl.innerText = "LOCATING NODE...";
        try {
            const response = await fetch('https://ipapi.co/json/');
            if (!response.ok) throw new Error('API down');
            
            const data = await response.json();
            const city = data.city || "UNKNOWN";
            const country = data.country_name || "REMOTE NODE";
            
            regionEl.innerText = `${city.toUpperCase()}, ${country.toUpperCase()}`;
        } catch (error) {
            console.error('[SESSION] Failed to resolve region:', error);
            regionEl.innerText = "UNKNOWN REGION";
        }
    }

    if (logoutBtn && modal) {
        logoutBtn.innerHTML = `
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2.5">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg> Logout`;
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showModal(modal);
        });
        yesBtn.addEventListener('click', () => {
            hideModal(modal);
            setTimeout(() => {
                localStorage.clear();
                redirectTo("signup.html");
            }, 200);
        });
        noBtn.addEventListener('click', () => hideModal(modal));
    }
};

/* ─── AUTH FORM ───────────────────────────────────────────────────────────── */

const initAuthForm = (authForm, submitBtn, emailGroup) => {
    const resetButton = () => {
        if (!submitBtn) return;
        submitBtn.innerHTML = 'Authorize';
        submitBtn.disabled = false;
        submitBtn.removeAttribute('style');
    };

    authForm.addEventListener('submit', function (e) {
        e.preventDefault();
        submitBtn.innerHTML = 'SYNCHRONIZING...';
        submitBtn.disabled = true;

        const formData = new FormData(authForm);
        if (emailGroup && window.getComputedStyle(emailGroup).display === 'none') {
            formData.delete('email');
        }

        fetch('auth.php', { method: 'POST', body: formData })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'success') {
                    submitBtn.innerHTML = 'ACCESS GRANTED';
                    submitBtn.style.background = 'rgba(0, 255, 0, 0.2)';
                    submitBtn.style.borderColor = '#00ff00';
                    submitBtn.style.color = '#00ff00';

                    localStorage.setItem('user_session', JSON.stringify(data.user_data));
                    localStorage.setItem('login_timestamp', new Date().toLocaleTimeString());

                    setTimeout(() => redirectTo("profile.html"), 1000);
                } else {
                    const modal = document.getElementById('error-modal');
                    const text = document.getElementById('error-modal-text');
                    if (modal && text) {
                        text.innerText = 'REJECTED: ' + data.message;
                        modal.style.display = 'flex';
                        document.getElementById('error-modal-close').onclick = () => {
                            modal.style.display = 'none';
                        };
                    }
                    resetButton();
                }
            })
            .catch(err => {
                console.error(err);
                alert("CONN_ERROR: Check server connection");
                resetButton();
            });
    });
};

/* ─── PASSWORD FORM ───────────────────────────────────────────────────────── */

const initPassForm = (passForm, passMsg) => {
    passForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const currentSession = getSession();

        if (!currentSession) {
            redirectTo("signup.html");
            return;
        }

        const formData = new FormData(passForm);
        formData.append('username', currentSession.username);

        fetch('change_password.php', { method: 'POST', body: formData })
            .then(res => res.json())
            .then(data => {
                if (passMsg) {
                    passMsg.innerText = data.message;
                    passMsg.style.color = data.status === 'success' ? '#00ff00' : '#ff4444';
                }
                if (data.status === 'success') passForm.reset();
            })
            .catch(err => {
                console.error(err);
                if (passMsg) passMsg.innerText = "Server connection error";
            });
    });
};

/* ─── INIT ────────────────────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
    setupNeon('logo-neon');
    setupNeon('title');
    setupIntro('intro');
    startTerminal();
    initSlider();
    checkAuth();

    setTimeout(() => {
        const t = document.getElementById('title');
        if (t) t.classList.add('visible');
    }, 1000);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    const firstTab = document.querySelector('.tab-btn');
    if (document.getElementById('legal-body') && firstTab) {
        window.showLegal('agreement', firstTab);
    }

    const authForm = document.getElementById('auth-form');
    const submitBtn = document.getElementById('auth-submit');
    const emailGroup = document.getElementById('email-group');
    if (authForm && submitBtn) initAuthForm(authForm, submitBtn, emailGroup);

    const userNameDisplay = document.getElementById('user-name');
    const logoutBtn = document.getElementById('logout-btn');
    if (window.location.pathname.includes('profile.html')) {
        initProfile(userNameDisplay, logoutBtn);
    }

    const passForm = document.getElementById('change-pass-form');
    const passMsg = document.getElementById('pass-msg');
    if (passForm) initPassForm(passForm, passMsg);
});

/* ─── TOGGLE AUTH MODE ────────────────────────────────────────────────────── */

window.toggleMode = function () {
    const card = document.getElementById('auth-card');
    const title = document.getElementById('auth-title');
    const footerB = document.querySelector('.auth-footer span b');
    if (!card) return;

    card.classList.toggle('mode-register');
    const isRegister = card.classList.contains('mode-register');
    if (title) title.innerText = isRegister ? "Registration" : "Login";
    if (footerB) footerB.innerText = isRegister ? "LOGIN" : "REGISTER";
};

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
        if (profileBtn) {
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
        }
        const logoutBtn = document.getElementById('nav-logout-btn');
        if (logoutBtn) {
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
        }
        const modal = document.getElementById('custom-confirm');
        if (modal && logoutBtn) {
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
        } else if (logoutBtn) {
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

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectAuth);
} else {
    injectAuth();
}