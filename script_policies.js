/*
 * NIGHTLUME — Policies Page Script
 */

/* ─── LEGAL CONTENT ───────────────────────────────────────────────────────── */

const content = {
    agreement: {
        title: "User Agreement",
        html: `
            <h2>1.0 Legal Framework & Definitions</h2>
            <p>This End User License Agreement ("Agreement") constitutes a binding legal contract between the individual user (hereinafter "User" or "Licensee") and the Nightlume Development Collective, represented by the independent lead developer (hereinafter "Provider"). This document governs the access, installation, and utilization of the Nightlume software environment.</p>
            <p>By interacting with the software, downloading binaries, or accessing the server-side API, the User acknowledges a comprehensive understanding of all clauses herein. The term "Software" encompasses all proprietary binaries, graphical assets, encrypted communication protocols, and interface designs. Failure to comply with these terms will result in immediate termination of the license without prior notice.</p>

            <h2>2.0 License Grant & Intellectual Property</h2>
            <p>Subject to the User's continuous and verifiable compliance with the terms established in this Agreement, the Provider grants a restricted, non-exclusive, non-sublicensable, and non-transferable license to utilize the Software strictly for <span class="highlight">private research, educational purposes, and aesthetic environment simulation</span>.</p>
            <p>All intellectual property rights, including but not limited to unique visual algorithms, optimized rendering pipelines, and the "Nightlume" trademark, remain the exclusive and sole property of the Provider. This license does not grant the User any ownership rights or claims to the underlying source code. Any attempt to replicate, simulate, or adapt the proprietary technology of Nightlume for commercial or public use will be met with a permanent revocation of access and potential legal action under digital property protection laws.</p>

            <h2>3.0 Operational Restrictions & Integrity</h2>
            <p>To ensure the security of the Provider's infrastructure and the integrity of the user base, the following activities are classified as a <span class="highlight">Critical Breach</span> of contract:</p>
            <ul>
                <li data-num="3.1">Static or dynamic analysis of the binary executable, including the use of debuggers, disassemblers, kernel-level monitors, or network packet sniffers.</li>
                <li data-num="3.2">Unauthorized distribution, sub-licensing, or "leaking" of Software assets to third-party entities, whether for financial gain or non-profit dissemination.</li>
                <li data-num="3.3">Utilization of the Software in a manner that intentionally disrupts the equilibrium of third-party network services or violates the Terms of Service (ToS) of external software publishers.</li>
                <li data-num="3.4">Account sharing or HWID (Hardware ID) spoofing intended to bypass the Provider's security protocols or license binding systems.</li>
            </ul>

            <h2>4.0 Liability Limitation & Risk Disclosure</h2>
            <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE JURISDICTION, THE PROVIDER DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED. The Software is provided "as-is" for the purpose of visual enhancement and interface customization. The User acknowledges that modifying software environments involves inherent risks, including potential conflicts with third-party anti-tamper systems (e.g., EAC, BattlEye, VAC).</p>
            <p>The Provider shall <span class="highlight">not be held liable</span> for any direct, indirect, or incidental consequences resulting from the use of the Software. This includes, but is not limited to: account terminations on third-party platforms, hardware identification flags, loss of digital data, or system instability. The responsibility for maintaining compliance with third-party rules lies solely with the User.</p>

            <h2>5.0 Technical Architecture & Compliance</h2>
            <p>The Software is optimized for modern high-refresh-rate environments and requires a stable connection to the Provider's authentication nodes. Any local modifications to the system environment that interfere with these nodes may be interpreted as a security threat.</p>
            <div class="req-grid">
                <div class="req-card">
                    <h3>Base Protocol</h3>
                    <p>CPU: x86-64 Architecture (AVX support recommended)<br>
                       RAM: 4096 MB Physical Memory Available<br>
                       GPU: Shader Model 5.0 / OpenGL 4.5+ Support<br>
                       OS: Windows 10 LTSC / Windows 11 / Linux (Kernel 5.4+)</p>
                </div>
                <div class="req-card">
                    <h3>High-Performance</h3>
                    <p>CPU: 8-Core 4.0GHz+ (e.g., Ryzen 7 / Core i7)<br>
                       RAM: 8192 MB Low Latency DDR4/DDR5<br>
                       Display: 144Hz - 360Hz Refresh Rate<br>
                       Network: Fiber-Optic Connectivity (<15ms to EU-West)</p>
                </div>
            </div>`
    },
    privacy: {
        title: "Privacy Policy",
        html: `
            <h2>1.0 Telemetry & Data Collection Protocols</h2>
            <p>Nightlume operates under a <span class="highlight">Privacy-by-Design</span> framework, ensuring that only the minimum necessary data is processed to maintain the security of the license and the stability of the Software. In accordance with international data protection standards (including GDPR principles), the following telemetry points are processed:</p>
            <ul>
                <li data-num="1.1">Cryptographically hashed identifiers derived from the User's provided email for account verification.</li>
                <li data-num="1.2">Hardware Identification (HWID) strings, including Disk Serial, Motherboard UUID, and MAC addresses, used solely for license binding.</li>
                <li data-num="1.3">Operating System version, architecture, and a list of active system processes relevant to the Software's security environment.</li>
            </ul>

            <h2>2.0 Data Processing & Security Standards</h2>
            <p>All data is processed through end-to-end encrypted channels (TLS 1.3) and stored on decentralized nodes using AES-256 encryption standards. The Provider does not maintain logs of the User's IP history, geographical movements, or specific in-game activities. Our philosophy is rooted in <span class="highlight">Zero-Knowledge</span>: we only know that you are a valid licensee, not what you do with the Software.</p>

            <h2>3.0 Retention & User Rights</h2>
            <p>Data is retained only as long as the User remains an active licensee. Accounts inactive for more than 180 days are subject to automatic telemetry purging. Users maintain the right to request a full dump of their stored data or the immediate deletion of their profile by contacting the secure support node: <span class="highlight">nightlume-project@gmail.com</span>.</p>`
    },
    refund: {
        title: "Refund Policy",
        html: `
            <h2>1.0 Digital Content Finality & Waiver</h2>
            <p>In accordance with the <span class="highlight">European Union Directive 2011/83/EU</span> regarding consumer rights, the supply of digital content which is not supplied on a tangible medium is exempt from the standard 14-day right of withdrawal once the performance has begun. By clicking "Launch", "Activate", or "Execute", the User provides express prior consent to begin the service and acknowledges the waiver of their right to withdrawal.</p>

            <h2>2.0 Technical Failure & Reimbursement</h2>
            <p>Nightlume is committed to quality. A refund may be considered <span class="highlight">only</span> if the Software is fundamentally non-functional due to a verified internal server-side error or a critical bug in the Provider's code that prevents initialization on a system meeting all requirements.</p>
            <p>The User must submit a detailed technical report within 48 hours of purchase. Refunds will not be issued if the User refuses to follow the troubleshooting instructions provided by the lead developer or if the system does not meet the specified minimum requirements.</p>

            <h2>3.0 Fraud Protection & Blacklist Notice</h2>
            <p>Any attempt to initiate a fraudulent chargeback through banking institutions or payment processors without prior communication with the Provider will be classified as <span class="highlight">Payment Fraud</span>. Such actions result in an immediate and permanent blacklist of the User's HWID, email, and IP range from all current and future Nightlume services. The Provider reserves the right to present all telemetry and license logs to the bank to contest the claim.</p>`
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

/* ─── LEGAL TABS ──────────────────────────────────────────────────────────── */

window.showLegal = (type, btn) => {
    const body = document.getElementById('legal-body');
    const tabs = document.querySelectorAll('.tab-btn');
    if (!body || !content[type]) return;

    body.style.opacity = '0';
    body.style.transform = 'translateY(10px)';

    setTimeout(() => {
        tabs.forEach(t => t.classList.remove('active'));
        btn.classList.add('active');

        body.innerHTML = `
            <h1 id="legal-title">${content[type].title}</h1>
            <span class="last-updated">PROTOCOL v4.0.1 // COMPLIANCE VERIFIED // SECURE CORE</span>
            ${content[type].html}
        `;

        body.style.opacity = '1';
        body.style.transform = 'translateY(0)';

        setupNeon('legal-title');
    }, 200);

    window.scrollTo({ top: 0, behavior: 'smooth' });
};

/* ─── INIT ────────────────────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
    setupNeon('logo-neon');
    setupIntro('intro');
    injectAuth();

    const firstTab = document.querySelector('.tab-btn');
    if (firstTab) {
        window.showLegal('agreement', firstTab);
    }
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