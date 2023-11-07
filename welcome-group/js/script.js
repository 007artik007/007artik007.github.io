document.addEventListener('DOMContentLoaded', () => {

    const modalButton = document.querySelectorAll('[data-modal]'),
          modalWindow = document.querySelector('.modal'),
          modalClose = document.querySelector('[data-close]'),
          contactsBtn = document.querySelector('[data-contacts]'),
          contactsWindow = document.querySelector('.modal-contacts'),
          contactsBtnClose = document.querySelector('span.close');

    contactsBtn.addEventListener('click', (e) => {
        contactsWindow.classList.add('show');
        contactsWindow.classList.remove('hide');
    });

    contactsBtnClose.addEventListener('click', () => {
        contactsWindow.classList.add('hide');
        contactsWindow.classList.remove('show');
    });

    function openModal(){
        modalWindow.classList.add('show');
        modalWindow.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(timerModal);
    }

    modalButton.forEach( item => {
        item.addEventListener('click', openModal);
    });

    function closeModal(){
        modalWindow.classList.add('hide');
        modalWindow.classList.remove('show');
        document.body.style.overflow = ''; 
    }

    modalClose.addEventListener('click', closeModal);

    modalWindow.addEventListener('click', (e) => {
        if (e.target === modalWindow){
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modalWindow.classList.contains('show')) {
            closeModal();
        }
    });

    const timerModal = setTimeout(openModal, 20000);


    /// Burger-menu
    const menu = document.querySelector('[data-nav]'),
    menuItem = document.querySelectorAll('.list-item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('active');
        contactsWindow.classList.add('hide');
        contactsWindow.classList.remove('show');

    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            if (item.classList.contains('list-item-contacts')) {
            } else {
                hamburger.classList.toggle('hamburger_active');
                menu.classList.toggle('active');
            }
            
        });
    });
});