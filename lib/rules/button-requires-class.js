/**
 * @fileoverview All uses on <button> must have the class "btn"
 * @author Crispin Merriman
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "All uses on <button> must have the class \"btn\"",
            category: "Fill me in",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {

        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------
        const errorMessage = "Button elements must have the 'btn' class for default styling";
        return {
            JSXOpeningElement: function (element) {
                if (element.name.name !== "button") {
                    return;
                }
                const classAttrIndex = element.attributes.findIndex(attr => {
                    return attr.name.name === "className";
                });
                if (element.attributes.length === 0 || classAttrIndex === -1) {
                    context.report({
                        node: element,
                        message: errorMessage
                    });
                    return;
                }
                const classes = element.attributes[classAttrIndex].value.value;
                console.log(classes.split(" "));
                if (classes.split(" ").includes("btn")) {
                    return;
                }
                context.report({
                    node: element.attributes[classAttrIndex].value,
                    message: errorMessage
                });
            }
        };
    }
};
