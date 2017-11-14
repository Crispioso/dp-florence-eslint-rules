/**
 * @fileoverview All uses on &lt;button&gt; must have the class &#34;btn&#34;
 * @author Crispin Merriman
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/button-requires-class"),

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
var errorMessage = "Button elements must have the 'btn' class for default styling"
ruleTester.run("button-requires-class", rule, {

    valid: [
        {
            code: '<button className="btn"></button>'
        },
        {
            code: '<button className="btn" id="an-id"></button>'
        },
        {
            code: '<button className="btn "></button>'
        },
        {
            code: '<button className=" btn "></button>'
        },
        {
            code: '<button className=" btn"></button>'
        }
    ],

    invalid: [
        {
            code: "<button></button>",
            errors: [{
                message: errorMessage,
                type: "JSXOpeningElement"
            }]
        },
        {
            code: "<button id='btn'></button>",
            errors: [{
                message: errorMessage,
                type: "JSXOpeningElement"
            }]
        },
        {
            code: '<button className="btn--primary"></button>',
            errors: [{
                message: errorMessage,
                type: "Literal"
            }]
        },
        {
            code: '<button className="btn1"></button>',
            errors: [{
                message: errorMessage,
                type: "Literal"
            }]
        },
        {
            code: '<button className="random-class"></button>',
            errors: [{
                message: errorMessage,
                type: "Literal"
            }]
        }
    ]
});
