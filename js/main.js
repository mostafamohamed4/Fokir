let About = $('#About').offset().top
let Services = $('#Services').offset().top
let Portfolio = $('#Portfolio').offset().top
let Testimonial = $('#Testimonial').offset().top
let Blog = $('#Blog').offset().top
let Contact = $('#Contact').offset().top
console.log(About);
$(window).scroll(() => {
    let scroll = $(window).scrollTop()
    if (scroll >= About - 50) {
        $('.navbar').css('background-color', 'black')
        document.querySelector('.active').classList.remove('active')
        $('#myAbout').addClass('active')
    } else {
        $('.navbar').css('background-color', 'transparent')
        document.querySelector('.active').classList.remove('active')
        $('#myHome').addClass('active')
    }
    if (scroll >= Services) {
        document.querySelector('.active').classList.remove('active')
        $('#myServices').addClass('active')
    }
    if (scroll >= Portfolio) {
        document.querySelector('.active').classList.remove('active')
        $('#myPortfolio').addClass('active')
    }
    if (scroll >= Testimonial) {
        document.querySelector('.active').classList.remove('active')
        $('#myTestimonial').addClass('active')
    }
    if (scroll >= Blog) {
        document.querySelector('.active').classList.remove('active')
        $('#myBlog').addClass('active')
    }
    if (scroll >= Contact) {
        document.querySelector('.active').classList.remove('active')
        $('#myContact').addClass('active')
    }
})
$('.number').counterUp({
    delay: 15,
    time: 2000
});