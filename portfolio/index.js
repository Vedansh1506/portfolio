window.onload = () => {
   
    ScrollReveal({
        reset: true,
        distance: '50px',
        duration: 1000,
        delay: 200
    }).reveal('.hire', { origin: 'round' });
    ScrollReveal({duration:1000}).reveal('.container', { origin: 'top' });
    ScrollReveal({distance:'50px',duration:1000}).reveal('.about-col-1',{origin:'bottom'});
    ScrollReveal({distance:'50px',duration:1000}).reveal('.about-col-2',{origin:'top'});
    ScrollReveal({distance:'50px',duration:1000}).reveal('.background-info-1,.contact-left',{origin:'left'});
    ScrollReveal({distance:'50px',duration:1000}).reveal('.background-info-3,.contact-right',{origin:'right'});
    ScrollReveal({distance:'0px',duration:1000}).reveal('.background-info-2',{origin:'top'});
    ScrollReveal({duration:500,distance:'50px'}).reveal('.background-header,.project-header', { origin: 'top' });

    ScrollReveal({distance:'50px',duration:1000}).reveal('.link1',{origin:'right'});
    ScrollReveal({distance:'50px',duration:1500}).reveal('.link2',{origin:'right'});
    ScrollReveal({distance:'50px',duration:2000}).reveal('.link3',{origin:'right'});
    ScrollReveal({distance:'50px',duration:2500}).reveal('.link4',{origin:'right'});
    ScrollReveal({distance:'50px',duration:3000}).reveal('.link5',{origin:'right'});
    ScrollReveal({distance:'50px',duration:3500}).reveal('.link6',{origin:'right'});
};