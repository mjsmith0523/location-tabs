$(window).load(function() {
    setTabs();
    manageTabs();
    switch (localStorage.content) {
        case 'location1':
            toggleTabs($('a[href="#tab__location1"]'));
            //$('#tab__tab__location1').addClass('hide');
            //$('#tab__tab__location2').addClass('hide');
            //$('#tab__tab__location3').addClass('hide');
            //$('#tab__tab__location4').addClass('hide');
            //$('#tab__tab__location5').addClass('hide');
            break;
        case 'location2':
            toggleTabs($('a[href="#tab__location2"]'));
            //$('#tab__tab__location1').addClass('hide');
            //$('#tab__tab__location2').addClass('hide');
            //$('#tab__tab__location3').addClass('hide');
            //$('#tab__tab__location4').addClass('hide');
            //$('#tab__tab__location5').addClass('hide');
            break;
        case 'location3':
            toggleTabs($('a[href="#tab__location3"]'));
            //$('#tab__tab__location1').addClass('hide');
            //$('#tab__tab__location2').addClass('hide');
            //$('#tab__tab__location3').addClass('hide');
            //$('#tab__tab__location4').addClass('hide');
            //$('#tab__tab__location5').addClass('hide');
            break;
        case 'location4':
            toggleTabs($('a[href="#tab__location4"]'));
            //$('#tab__tab__location1').addClass('hide');
            //$('#tab__tab__location2').addClass('hide');
            //$('#tab__tab__location3').addClass('hide');
            //$('#tab__tab__location4').addClass('hide');
            //$('#tab__tab__location5').addClass('hide');
            break;
        case 'location5':
            toggleTabs($('a[href="#tab__location5"]'));
            //$('#tab__tab__location1').addClass('hide');
            //$('#tab__tab__location2').addClass('hide');
            //$('#tab__tab__location3').addClass('hide');
            //$('#tab__tab__location4').addClass('hide');
            //$('#tab__tab__location5').addClass('hide');
            break;
        default:
            toggleTabs($('a[href="#tab__location1"]'));
            //$('#tab__tab__location1').addClass('hide');
            //$('#tab__tab__location2').addClass('hide');
            //$('#tab__tab__location3').addClass('hide');
            //$('#tab__tab__location4').addClass('hide');
            //$('#tab__tab__location5').addClass('hide');
    }
});

function setTabs() {
    $('.wrap__cta__tab-location1').find('a').attr('href', '#tab__location1');
    $('.wrap__cta__tab-location2').find('a').attr('href', '#tab__location2');
    $('.wrap__cta__tab-location3').find('a').attr('href', '#tab__location3');
    $('.wrap__cta__tab-location4').find('a').attr('href', '#tab__location4');
    $('.wrap__cta__tab-location5').find('a').attr('href', '#tab__location5');
}

function manageTabs() {
    $('.tabs-nav').find('.tablinks a').each(function() {
        $(this).click(function(event) {
            localStorage.content = $(this).text();
            event.preventDefault();
            var tabsOldHeight = $('.tabs-nav').height();
            toggleTabs($(this));
            var tabsNewHeight = $('.tabs-nav').height();
            var newHeight = $(parent.document.getElementById("myframe").contentWindow.document.body).css('height');
        });
    });
}

function toggleTabs(element) {
    $('.tabs-nav').children('.tablinks').removeClass('active');
    $(element).closest('.tablinks').addClass('active');
    $('.tabs-nav').children('.tab-wrapper').removeClass('hide');
    $('.tabs-nav').children('.tab-wrapper').addClass('hide');
    $('.tabs-nav').children($(element).attr('href')).removeClass('hide');
}
ResponsiveHelper.addRange({
    '1025..': {
        on: function() {
            // set position fixed on scroll
            $('body').fixedScrollBlock({
                fixedActiveClass: 'fixed',
                slideBlock: '.wrap__rotate-container--bottom',
                fixedOnlyIfFits: false
            });
        }
    }
});