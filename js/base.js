$(document).ready(function(){
    // open rur form
    $('#cardBtn').on('click', function() {
        $('#formOverlay').fadeIn();
        $('#paymentFormRUR').fadeIn();
    })

    // open ntz form
    $('#ntzdBtn').on('click', function() {
        $('#formOverlay').fadeIn();
        $('#paymentFormNTZ').fadeIn();
    })

    // close rur form
    $('#closeRurForm').on('click', function() {
        $('#formOverlay').fadeOut();
        $('#paymentFormRUR').fadeOut();
    })

    // close ntz form
    $('#closeNTZForm').on('click', function() {
        $('#formOverlay').fadeOut();
        $('#paymentFormNTZ').fadeOut();
    })
    
    // scroll to payment
    $('#headerToPaymentBtn').on('click', function() {
        $('html, body').animate({
            scrollTop: $("#paymentBlock").offset().top
        }, 1500);
    })
    $('#middleToPaymentBtn').on('click', function() {
        $('html, body').animate({
            scrollTop: $("#paymentBlock").offset().top
        }, 1500);
	})
	
    // open rur form
    $('#cardBtn2').on('click', function() {
        $('#formOverlay2').fadeIn();
        $('#payment2FormRUR').fadeIn();
    })

    // open ntz form
    $('#ntzdBtn2').on('click', function() {
        $('#formOverlay2').fadeIn();
        $('#payment2FormNTZ').fadeIn();
	})

	// close ntz form
	$('#close2NTZForm').on('click', function() {
		$('#formOverlay2').fadeOut();
		$('#payment2FormNTZ').fadeOut();
	})
	
	// close rur form
	$('#close2RurForm').on('click', function() {
		$('#formOverlay2').fadeOut();
		$('#payment2FormRUR').fadeOut();
    })
    
    // speakers hover
    if ($(window).width() < 768) {
		$('.speakers__item').on('click', function () {
			$('.speakers__hover').removeClass('active');
			$(this).find('.speakers__hover').addClass('active');
		});
	}
	else {
		$('.speakers__item').hover(function () {
			$(this).find('.speakers__hover').addClass('active');
		}, function () {
			$(this).find('.speakers__hover').removeClass('active');
		});
	}
})