function link(link) {
    window.open(link, "_blank");
}

function scrollToElement(element) {
    // Get the element to scroll to
    var element = document.getElementById(element);

    // Calculate the offset from the top of the page to the element
    var offset = element.getBoundingClientRect().top + window.pageYOffset;

    // Scroll to the calculated offset with smooth behavior
    window.scrollTo({ top: offset, behavior: 'smooth' });
}