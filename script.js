document.addEventListener("DOMContentLoaded", function () {
    // -------- NAVIGATION DROPDOWN TOGGLE -------- //
    const navDropdowns = document.querySelectorAll(".nav .dropdown");
    const navLinks = document.querySelector(".nav-list");
    const toggleBtn = document.querySelector(".menu-toggle");
    const sidebar = document.querySelector(".sidebar");
    const sidebarToggleBtn = document.querySelector(".menu-toggle");
    const sidebarCloseBtn = document.querySelector(".sidebar-close");
    const overlay = document.createElement("div");
    overlay.classList.add("sidebar-overlay");
    document.body.appendChild(overlay);

    // ✅ Toggle navigation menu (hamburger menu)
    if (toggleBtn) {
        toggleBtn.addEventListener("click", function () {
            sidebar.classList.toggle("active");
            overlay.classList.toggle("active");
        });
    }

    // ✅ Sidebar Toggle
    if (sidebar && sidebarToggleBtn) {
        sidebarToggleBtn.addEventListener("click", () => {
            sidebar.classList.add("active");
            overlay.classList.add("active");
        });

        // ✅ Close sidebar using close (×) button
        sidebarCloseBtn?.addEventListener("click", () => {
            sidebar.classList.remove("active");
            overlay.classList.remove("active");
        });

        // ✅ Close sidebar when clicking outside (on overlay)
        overlay.addEventListener("click", () => {
            sidebar.classList.remove("active");
            overlay.classList.remove("active");
        });

        // ✅ Close sidebar when pressing Escape key
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                sidebar.classList.remove("active");
                overlay.classList.remove("active");
            }
        });
    }

    // ✅ Dropdown Toggle
    navDropdowns.forEach(drop => {
        const link = drop.querySelector("a");
        const menu = drop.querySelector(".dropdown-menu");

        link.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelectorAll(".nav .dropdown-menu").forEach(m => {
                if (m !== menu) m.classList.remove("active");
            });
            menu.classList.toggle("active");
        });
    });

    // ✅ Close dropdowns when clicking outside
    document.addEventListener("click", (e) => {
        if (!e.target.closest(".nav .dropdown")) {
            document.querySelectorAll(".nav .dropdown-menu").forEach(menu => menu.classList.remove("active"));
        }
    });

    // ✅ Close dropdowns on pressing Escape key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            document.querySelectorAll(".nav .dropdown-menu").forEach(menu => menu.classList.remove("active"));
        }
    });

    // ✅ Smooth Scroll to Top
    document.querySelectorAll(".scroll-to-top, .tour-card").forEach(btn => {
        btn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    });

    // ✅ Close dropdowns on scroll
    window.addEventListener("scroll", () => {
        document.querySelectorAll(".nav .dropdown-menu").forEach(menu => menu.classList.remove("active"));
    });
});
