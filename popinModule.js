export function openPopin(targetModal) {
    targetModal.style.display = 'block'; 
}


export function closePopin(modal) {
    modal.style.display = 'none'; 
}


export function Popins() {
    const openBtn = document.querySelectorAll('.open-popin');
    const modals = document.querySelectorAll('.modal');
    

    openBtn.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetModal = document.querySelector(this.getAttribute('data-target'));
            openPopin(targetModal); 
        });
    });

    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closePopin(modal); 
            }
        });
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            modals.forEach(modal => {
                closePopin(modal); 
            });
        }
    });

    const closeBtn = document.querySelectorAll('.popin-dismiss');
    closeBtn.forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            closePopin(modal); 
        });
    });
}