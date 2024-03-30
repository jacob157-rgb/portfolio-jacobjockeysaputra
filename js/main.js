import Alpine from 'alpinejs';
import Typewriter from '@marcreichel/alpine-typewriter';
import AOS from 'aos';
import Toastify from 'toastify-js'

Alpine.plugin(Typewriter);

Alpine.start();

AOS.init({
    once: true,
});

Toastify.init();