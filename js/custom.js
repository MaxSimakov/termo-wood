const $ = jQuery;

function eventHandler() {
		
	//sQusetions js
	let qItem = document.querySelectorAll(".q-item-js");
	if(qItem) {
		qItem.forEach(function (el) {
			el.addEventListener('click', function () {
				let qItem = document.querySelectorAll('.q-item-js');
				let self = this;

				for (let item of qItem) {
					let currContent = item.querySelector('.q-content-js');

					if (item === self) {
						item.classList.toggle('active');
						currContent.classList.toggle('active');
					}
					else {
						item.classList.remove('active');
						currContent.classList.remove('active');
					}
				}
			})
		});
	}

	let mobileToggle = document.querySelector('.mainMenu__mobile');
	if(mobileToggle) {
		mobileToggle.addEventListener('click', function () {
			document.querySelector('.mainMenu__items').classList.toggle('active');
			this.classList.toggle('active');
		});
	};

	$(".owl-pokritye-mobile--js").owlCarousel({
		paginationSpeed : 400, 
		items : 5, 
		navText:['',''],
		nav: false,
		dots:false,
		loop: true,
	});

};

if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
};

