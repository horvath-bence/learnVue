const Tweet = Vue.component('tweet', {
    props: ['message'],
    template: '<div class="tweet"><h3>CoderInTraining</h3><p>{{ message }}</p></div>'
   });