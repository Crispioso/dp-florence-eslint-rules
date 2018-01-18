/**
 * @fileoverview # All uses on state properties must be in initialised
 * @author Crispin Merriman
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/initialise-state-properties"),

    RuleTester = require("eslint").RuleTester;

    RuleTester.setDefaultConfig({
        parserOptions: {
          ecmaVersion: 6,
          ecmaFeatures: {
            jsx: true,
          },
        }
      });


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
var errorMessage = "Property set in state has not been initialised in constructor";
ruleTester.run("initialise-state-properties", rule, {

    valid: [
        {
            code: (`
                class MyClass {
                    constructor() {
                        this.state = {
                            isFetchingData: true,
                            isPostingData: false
                        };
                    }
                    
                    myMethod() {
                        this.setState({
                            isFetchingData: false,
                            isPostingData: true
                        });
                    }
                }
            `)
        },
        {
            code: (`
                class MyClass {
                    constructor() {
                        this.state = {
                            isPostingData: false
                        };
                    }
                    
                    myMethod() {
                        this.setState({isPostingData: true});
                    }
                }
            `)
        }
    ],

    invalid: [
        {
            code: (`
                class MyClass {
                    constructor() {
                        this.state = {};
                    }
                    
                    myMethod() {
                        this.setState({isPostingData: true});
                    }
                }
            `),
            errors: [{
                message: errorMessage,
                type: "Property"
            }]
        },
        {
            code: (`
                class MyClass {
                    constructor() {
                        this.state = {
                            isFetchingData: true
                        };
                    }
                    
                    myMethod() {
                        this.setState({
                            isFetchingData: false,
                            isPostingData: true
                        });
                    }
                }
            `),
            errors: [{
                message: errorMessage,
                type: "Property"
            }]
        }
    ]
});
