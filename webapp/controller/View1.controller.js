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
                // this.getView().addStyleClass("sapUiSizeCompact");
            },
            onApply: function () {
                var oSF = this.byId("idSF");
                var emptySpanValue = parseInt(this.getView().byId("idEmpty").getValue());
                if (emptySpanValue >= 0) {
                    oSF.setEmptySpanL(emptySpanValue);
                    oSF.setEmptySpanM(emptySpanValue);
                }
            },
            onColumnSpanApply: function () {
                var oSF1 = this.byId("idSF1");
                var columnsValue = parseInt(this.byId("idColumn").getValue());
                if (columnsValue > 1) {
                    oSF1.setColumnsL(columnsValue);
                    oSF1.setColumnsM(columnsValue);
                    oSF1.setEmptySpanL(0);
                    oSF1.setEmptySpanM(0);
                } else {
                    oSF1.setEmptySpanL(7);
                    oSF1.setEmptySpanM(7);
                    oSF1.setColumnsL(columnsValue);
                    oSF1.setColumnsM(columnsValue);                    
                }

            }
        });
    });
