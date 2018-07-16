/**
  Copyright (c) 2015, 2018, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
'use strict';
define(
    ['ojs/ojcore', 'knockout', 'jquery', 'ojL10n!./resources/nls/sweet-alert-strings'], function (oj, ko, $) {

    
    function ExampleComponentModel(context) {
        var self = this;
        
        //At the start of your viewModel constructor
        var busyContext = oj.Context.getContext(context.element).getBusyContext();
        var options = {"description": "CCA Startup - Waiting for data"};
        self.busyResolve = busyContext.addBusyState(options);

        self.composite = context.element;

        //Example observable
        self.messageText = ko.observable('Hello from Example Component');

        // Example for parsing context properties
        if (context.properties.onSuccess) {
            setTimeout(() => context.properties.onSuccess('Success'), 1500);
        }

        $(self.composite).on('click keypress',function(event){
            var eventParams = {
                'bubbles' : true,
                'cancelable' : false,
                'detail' : {
                    'alertClicked' : context.properties.message
                }
            };
            //Raise the custom event
           self.composite.dispatchEvent(new CustomEvent('alertClicked',
                                                        eventParams));
       });

        //Once all startup and async activities have finished, relocate if there are any async activities
        self.busyResolve();
    };
    
    //Lifecycle methods - uncomment and implement if necessary 
    //ExampleComponentModel.prototype.activated = function(context){
    //};

    //ExampleComponentModel.prototype.attached = function(context){
    //};

    //ExampleComponentModel.prototype.bindingsApplied = function(context){
    //};

    //ExampleComponentModel.prototype.detached = function(context){
    //};

    //ExampleComponentModel.prototype.propertyChanged = function(context){
    //};

    return ExampleComponentModel;
});