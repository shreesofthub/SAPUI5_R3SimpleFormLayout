sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("r3simpleformlayout.controller.View1", {
            onInit: function () {

            },
            onApply: function () {
                var oSF = this.byId("idSF");
                var emptySpanValue = parseInt(this.getView().byId("idEmpty").getValue());
                oSF.setEmptySpanL(emptySpanValue);
                oSF.setEmptySpanM(emptySpanValue);

            }
        });
    });
