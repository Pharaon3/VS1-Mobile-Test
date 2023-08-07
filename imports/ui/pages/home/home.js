import './home.html';


Template.App_home.onCreated(function helloOnCreated() {
    // counter starts at 0
    this.counter = new ReactiveVar(0);
  });
  
  Template.App_home.helpers({

  });
  
  Template.App_home.events({
    'click #invoice'(event, instance) {
      // increment the counter when button is clicked
      Swal.fire({
        title: 'Invoice List',
        text: 'Now you are in Invoice List',
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'OK, I got it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Thank you!',
            'Now you are going back to main page.',
            'success'
          )
        }
      })
    },
    'click #Customer'(event, instance) {
      // increment the counter when button is clicked
      Swal.fire({
        title: 'Customer List',
        text: 'Now you are in Customer List',
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'OK, I got it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Thank you!',
            'Now you are going back to main page.',
            'success'
          )
        }
      })
    },
    'click #Quote'(event, instance) {
      // increment the counter when button is clicked
      Swal.fire({
        title: 'Quote List',
        text: 'Now you are in Quote List',
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'OK, I got it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Thank you!',
            'Now you are going back to main page.',
            'success'
          )
        }
      })
    },
    'click #Receipt'(event, instance) {
      // increment the counter when button is clicked
      Swal.fire({
        title: 'Receipt Claim',
        text: 'Now you are in Receipt Claim',
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'OK, I got it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Thank you!',
            'Now you are going back to main page.',
            'success'
          )
        }
      })
    },
    'click #Calendar'(event, instance) {
      // increment the counter when button is clicked
      Swal.fire({
        title: 'Calendar',
        text: 'Now you are in Calendar',
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'OK, I got it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Thank you!',
            'Now you are going back to main page.',
            'success'
          )
        }
      })
    },
    'click #Clock'(event, instance) {
      // increment the counter when button is clicked
      Swal.fire({
        title: 'Clock On/Off',
        text: 'Now you are in Clock',
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'OK, I got it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Thank you!',
            'Now you are going back to main page.',
            'success'
          )
        }
      })
    },
  });