document.addEventListener('DOMContentLoaded', function() {
    var btn = document.querySelector('.btn');
    var listItems = document.querySelectorAll('ul li');

    btn.addEventListener('click', function() {
        if (this.classList.contains('not-active')) {
            this.classList.remove('not-active');
            this.classList.add('active');
            listItems.forEach(function(item, index) {
                setTimeout(function() {
                    item.classList.add('show');
                }, index * 100); // Staggered animation
            });
        } else {
            this.classList.remove('active');
            this.classList.add('not-active');
            listItems.forEach(function(item) {
                item.classList.remove('show');
            });
        }
    });
});
