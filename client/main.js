import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
Template.about.helpers({
  values: [
    { first: "Learning", rest: "what makes your data tick." },
    { first: "Pushing", rest: "the boundaries of what's possible."},
  ],
});

Template.portfolio.helpers({
  projects: [
    { imgsrc: "https://static.pexels.com/photos/2159/flight-sky-earth-space-large.jpg", text: "Google", title: "Google"},
    { imgsrc: "http://placehold.it/400x300", text: "Microsoft", title: "Microsoft"},
    { imgsrc: "http://placehold.it/400x300", text: "Microsoft", title: "Microsoft"},
    { imgsrc: "http://placehold.it/400x300", text: "Microsoft", title: "Microsoft"},
    { imgsrc: "http://placehold.it/400x300", text: "Microsoft", title: "Microsoft"},
    { imgsrc: "http://placehold.it/400x300", text: "Microsoft", title: "Microsoft"},
    { imgsrc: "http://placehold.it/400x300", text: "Microsoft", title: "Microsoft"},

  ]
});

Template.team.helpers({
  members: [
    { prof_img: "http://blueprintdigital.com/wp-content/uploads/2014/11/stock-photo-happy-man-giving-okay-sign-portrait-on-white-background-141327337.jpg", first_name: "Phillip", last_name: "Kuznetsov"},
    { prof_img: "http://blueprintdigital.com/wp-content/uploads/2014/11/stock-photo-happy-man-giving-okay-sign-portrait-on-white-background-141327337.jpg", first_name: "William", last_name: "Guss"},
    { prof_img: "http://blueprintdigital.com/wp-content/uploads/2014/11/stock-photo-happy-man-giving-okay-sign-portrait-on-white-background-141327337.jpg", first_name: "Max", last_name: "Johansen"}
  ]
})
///// TODO Delete these comments when you get more content.
// Template.hello.onCreated(function helloOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });
//
// Template.hello.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });
//
// Template.hello.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });
