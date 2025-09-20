document.addEventListener('DOMContentLoaded', function() {
    const byDateBtn = document.getElementById('by-date-btn');
    const byTagBtn = document.getElementById('by-tag-btn');
    const archiveByDate = document.getElementById('archive-by-date');
    const archiveByTag = document.getElementById('archive-by-tag');

    function setupInitialState() {
        if (archiveByDate) archiveByDate.style.display = 'block';
        if (archiveByTag) archiveByTag.style.display = 'none';
        if (byDateBtn) byDateBtn.classList.add('active');
        if (byTagBtn) byTagBtn.classList.remove('active');

        document.querySelectorAll('.year-content, .month-content, .tag-section').forEach(function(content) {
            content.style.display = 'none';
        });
        document.querySelectorAll('.toggle-icon').forEach(function(icon) {
            icon.style.transform = 'rotate(-90deg)';
        });
    }

    function toggleContent(content, icon) {
        const isHidden = content.style.display === 'none';
        content.style.display = isHidden ? 'block' : 'none';
        if (icon) {
            icon.style.transform = isHidden ? 'rotate(0deg)' : 'rotate(-90deg)';
        }
    }

    if (byDateBtn && byTagBtn && archiveByDate && archiveByTag) {
        byDateBtn.addEventListener('click', function() {
            archiveByDate.style.display = 'block';
            archiveByTag.style.display = 'none';
            byDateBtn.classList.add('active');
            byTagBtn.classList.remove('active');
        });

        byTagBtn.addEventListener('click', function() {
            archiveByDate.style.display = 'none';
            archiveByTag.style.display = 'block';
            byDateBtn.classList.remove('active');
            byTagBtn.classList.add('active');
        });
    }

    document.querySelectorAll('.year-heading').forEach(function(heading) {
        heading.addEventListener('click', function() {
            const year = heading.getAttribute('data-toggle-year');
            const content = document.getElementById(`year-${year}`);
            const icon = heading.querySelector('.toggle-icon');
            if (content) toggleContent(content, icon);
        });
    });

    document.querySelectorAll('.month-heading').forEach(function(heading) {
        heading.addEventListener('click', function() {
            const monthId = heading.getAttribute('data-toggle-month');
            const content = document.getElementById(`month-${monthId}`);
            const icon = heading.querySelector('.toggle-icon');
            if (content) toggleContent(content, icon);
        });
    });

    const tagLinks = document.querySelectorAll('.tag-link');
    tagLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            document.querySelectorAll('.tag-section').forEach(s => s.style.display = 'none');
            tagLinks.forEach(l => l.classList.remove('active'));

            if (targetSection) {
                targetSection.style.display = 'block';
                this.classList.add('active');
            }
        });
    });

    setupInitialState();
});
