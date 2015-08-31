/* 
    -------------------------
    -------- Home JS --------
    -------------------------
*/
//_self = function( that ) {
//    return that; 
//}; 


if ( Meteor.isClient ) {
    // counter starts at 0
    Session.setDefault( 'counter', 0 );
    checked = false; 
    Template.home.rendered = function() {

    }

    function init_quotes() {
        rand = Math.floor( Math.random() * quotes.length + 1 );
    }

    Template.home.created = function() {
        var rand = "", 
            self = this;
        Session.set( 'quote', quotes[ 0 ] ); 
    }

    // working
    //    Meteor.setInterval( function() {
    //        var rand = Math.floor( Math.random() * quotes.length + 1 ), 
    //            quote = quotes[ rand ]; 
    //        Session.set( 'quote', quote ); 
    //    }, 10000 )


    Template.home.helpers({
        counter: function () {
            return Session.get('counter');
        }, 
        quote: function() {
            return Session.get( 'quote' ); 
        }
    });

    Template.home.events({
        'click button': function () {
            // increment the counter when button is clicked
            Session.set('counter', Session.get('counter') + 1);
        }
    });
}

if ( Meteor.isServer ) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}


self = function( template ) {
    this.template = template; 
}

get_self = function() {
    return self(); 
}