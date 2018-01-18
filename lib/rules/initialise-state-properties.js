/**
 * @fileoverview All properties edited in a component's state must be initialised
 * @author Crispin Merriman
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Any property added or edited to React state should be in the constructor",
            category: "",
            recommended: false
        },
        fixable: null, // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function (context) {

        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------
        const errorMessage = "Property set in state has not been initialised in constructor";
        let stateProperties = new Map();
        return {
            MethodDefinition: function (element) {
                if (element.kind === "constructor") {
                    const stateInitialiser = element.value.body.body.find(constructorContent => {
                        return (
                            constructorContent.type === "ExpressionStatement" &&
                            constructorContent.expression.type === "AssignmentExpression" &&
                            constructorContent.expression.left.object.type === "ThisExpression" &&
                            constructorContent.expression.left.property.name === "state"
                        );
                    });
                    if (!stateInitialiser) {
                        return;
                    }
                    stateInitialiser.expression.right.properties.forEach(property => {
                        stateProperties.set(property.key.name);
                    });
                }
            },
            Identifier: function (element) {
                if (element.name !== "setState") {
                    return;
                }

                const callee = context.getAncestors().find(ancestor => {
                    return ancestor.type === "CallExpression";
                });
                const stateObject = callee.arguments.find(argument => {
                    return argument.type === "ObjectExpression";
                });

                if (!stateObject) {
                    return;
                }

                stateObject.properties.some(property => {
                    if (!stateProperties.has(property.key.name)) {
                        context.report({
                            node: property,
                            message: errorMessage
                        });
                        return true;
                    }
                    return false;
                });
            }
        };
    }
};