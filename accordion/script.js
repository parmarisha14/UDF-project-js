 function toggleBox(header) {
      const box = header.nextElementSibling;
      const icon = header.querySelector('i');

      box.classList.toggle('active');

      if (box.classList.contains('active')) {
        icon.classList.remove('bi-chevron-down');
        icon.classList.add('bi-chevron-up');
      } else {
        icon.classList.remove('bi-chevron-up');
        icon.classList.add('bi-chevron-down');
      }
    }