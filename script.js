lucide.createIcons();

// Preserve Page Navigation Logic
const navBtns = document.querySelectorAll('.nav-toggle');
const pages = document.querySelectorAll('.page-view');

navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        navBtns.forEach(b => b.classList.remove('active'));
        pages.forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(`${btn.dataset.page}-page`).classList.add('active');
        window.scrollTo(0, 0);
    });
});

// Preserve Adventure Tabs Logic
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(btn.dataset.tab).classList.add('active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-tab');

            // 1. Remove active class from all buttons
            tabBtns.forEach(b => b.classList.remove('active'));
            // 2. Add active class to clicked button
            btn.classList.add('active');

            // 3. Hide all tab content
            tabContents.forEach(content => {
                content.classList.remove('active');
            });

            // 4. Show the specific content that matches the data-tab
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Navigation Toggles (/notes vs /projects)
    const navBtns = document.querySelectorAll('.nav-toggle');
    const pages = document.querySelectorAll('.page-view');

    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetPage = btn.getAttribute('data-page');

            // Toggle active pill
            navBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Show target page
            pages.forEach(p => p.classList.remove('active'));
            document.getElementById(`${targetPage}-page`).classList.add('active');
            
            // Optional: Update URL hash
            window.location.hash = targetPage;
        });
    });
});