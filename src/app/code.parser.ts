import * as moment from 'moment';
import { Injectable } from '@angular/core';

@Injectable() 
export class CodeParser{

    private gs1separator = String.fromCharCode(29);

    constructor(){

    }

    parse(code:String){
        return this.barcodeToAiList(code);
    }

    findAiInList(barcode, curpos) {
        // Find AI
        var aicount = this.gs1definitions.length;
        var aidefinition = null;
        for (var i = 0; i < aicount; i++) {
            var aidefinitiontemp = this.gs1definitions[i];
            var aistring = barcode.substring(curpos, (curpos + aidefinitiontemp.code.length));
            if (aistring == aidefinitiontemp.code) {
                aidefinition = aidefinitiontemp;
                break;
            }
        }
    
        return aidefinition;
    }
    
    barcodeToAiList(barcode){

        // Var preparation
        var result = [];
        var curpos = 0;
        var barcodelength;
    
        // PERFORMANCE
        barcodelength = barcode.length;
    
        // loop until barcode length equal or smaller "curpos"
        while (barcodelength > curpos) {
    
            // Remove FNC1 value - scrap from prior barcode element
            if (barcode.substring(curpos, (curpos + 1)) == this.gs1separator) {
                curpos = curpos + 1;
            }
    
            // Find AI definition
            var aidefinition = this.findAiInList(barcode, curpos);
    
            // Extract value along AI definition when found
            if (aidefinition != null) {
                // Jump over identifier
                curpos = curpos + aidefinition.code.length;
                // Split data
                var aidatablockcount = aidefinition.datablocks.length
                var listOfValues = [];
                for (var x = 0; x < aidatablockcount; x++) {
                    var aidatablock = aidefinition.datablocks[x];
                    var returnValue = this.barcodeExtractor(barcode, curpos, aidatablock);
                    listOfValues[x] = returnValue[0];
                    curpos = returnValue[1];
                }
    
                this.valueFormatting(aidefinition, listOfValues);
    
                // Write values to key list
                if (listOfValues.length > 0) {
                    result[aidefinition.code] = listOfValues;
                }
            } else {
                var outputString = "Argument must be a valid GS1-Datamatrix barcode, failed at position " + curpos;
                result = null;
                throw new Error(outputString);
            }
        }
        return result;
    }

    valueFormatting(aidefinition, listOfValues) {
        // format values
        switch (aidefinition.format) {
            case "none":
                // no formatting requiered
                break;
            case "currency":
            case "comma":
                var commaKey = null;
                for (var key in listOfValues) {
                    if (commaKey == null) {
                        commaKey = key;
                    } else {
                        listOfValues[key] = Number(listOfValues[key]) / Math.pow(10, Number(listOfValues[commaKey])); // move value to correct decimal point
                    }
                }
                // remove helper position
                listOfValues.splice(0, 1);
                break;
            case "date": //YYMMDD
                for (var key in listOfValues) {
                    var year = "20" + listOfValues[key].substring(0, 2);
                    var month = listOfValues[key].substring(2, 4);
                    var day = listOfValues[key].substring(4, 6);
                    listOfValues[key] = moment(day+"/"+month+"/"+year, "DD/MM/YYYY"); // move value to correct decimal point
                }
                break;
            case "datetime":
                for (var key in listOfValues) {
                    var year = "20" + listOfValues[key].substring(0, 2);
                    var month = listOfValues[key].substring(2, 4);
                    var day = listOfValues[key].substring(4, 6);
                    listOfValues[key] = new Date(year + "/" + month + "/" + day); // move value to correct decimal point
                }
                break;
            case "isocurrency":
                var commaKey = null;
                var isoKey = null;
                for (var key in listOfValues) {
                    if (commaKey == null) {
                        commaKey = key;
                    } else if (isoKey == null) {
                        isoKey = key;
                    } else {
                        listOfValues[key] = Number(listOfValues[key]) / Math.pow(10, Number(listOfValues[commaKey])); // move value to correct decimal point
                    }
                }
                // remove helper position
                listOfValues.splice(0, 1);
                break;
            default:
                console.log("Wrong format? " + aidefinition.format);
                break;
        }
    }
    
    barcodeExtractor(barcode, curpos, aidatablock) {
        // Prepare const
        var dynamicmarker = '...';
    
        // Prepare values
        var barcodelength = barcode.length;
        var result = null;
        var aidatalength = 0;
    
        // Check if dynamic range or static
        // --> YES == dynamic
        if (aidatablock.indexOf(dynamicmarker) != -1) {
            // extract max length
            var aidatablockvalue = Number(aidatablock.substring(dynamicmarker.length));
            var aidatalengthtemp = 0;
    
            // rest of string length
            // If yes more data is coming: prevent error in case of dynamic not finished ai at the end
            if ((barcodelength - curpos - aidatablockvalue) > 0) {
                aidatalengthtemp = aidatablockvalue;
            } else {
                // just take all available data
                aidatalengthtemp = barcode.substring(curpos).length;
            }
    
            // Check for seperator
            var aidgs1seperatorpos = barcode.substring(curpos, (curpos + aidatalengthtemp)).indexOf(this.gs1separator, 0);
    
            // Check if 'gsiseperator' is set in range of definition, otherwise take static length
            if (aidgs1seperatorpos != -1) {
                aidatalength = aidgs1seperatorpos;
            } else {
                aidatalength = aidatalengthtemp
            }
    
        } else {
            // get fixed value
            aidatalength = Number(aidatablock);
        }
    
        // Extract value and save to result
        result = barcode.substring(curpos, (curpos + aidatalength));
        // Set next position
        curpos = curpos + aidatalength;
    
        return [result, curpos];
    }
    private gs1definitions = [{
        "code": "00",
        "description": "Serial Shipping Container Code (SSCC)",
        "datablocks": ["18"],
        "format": "none"
    }, {
        "code": "01",
        "description:": "Global Trade Item Number (GTIN)",
        "datablocks": ["14"],
        "format": "none"
    }, {
        "code": "02",
        "description:": "GTIN of Contained Trade Items",
        "datablocks": ["14"],
        "format": "none"
    }, {
        "code": "10",
        "description:": "Batch/Lot Number",
        "datablocks": ["...20"],
        "format": "none"
    }, {
        "code": "11",
        "description:": "Production Date",
        "datablocks": ["6"],
        "format": "none"
    }, {
        "code": "12",
        "description:": "Due Date",
        "datablocks": ["6"],
        "format": "none"
    }, {
        "code": "13",
        "description:": "Packaging Date",
        "datablocks": ["6"],
        "format": "none"
    }, {
        "code": "15",
        "description:": "Best Before Date (YYMMDD)",
        "datablocks": ["6"],
        "format": "none"
    }, {
        "code": "17",
        "description:": "Expiration Date",
        "datablocks": ["6"],
        "format": "date"
    }, {
        "code": "20",
        "description:": "Product Variant",
        "datablocks": ["2"],
        "format": "none"
    }, {
        "code": "21",
        "description:": "Serial Number",
        "datablocks": ["...20"],
        "format": "none"
    }, {
        "code": "22",
        "description:": "Secondary Data Fields",
        "datablocks": ["...29"],
        "format": "none"
    }, {
        "code": "23n",
        "description:": "Lot number n",
        "datablocks": ["...19"],
        "format": "none"
    }, {
        "code": "240",
        "description:": "Additional Product Identification",
        "datablocks": ["...30"],
        "format": "none"
    }, {
        "code": "241",
        "description:": "Customer Part Number",
        "datablocks": ["...30"],
        "format": "none"
    }, {
        "code": "242",
        "description:": "Made-to-Order Variation Number",
        "datablocks": ["...6"],
        "format": "none"
    }, {
        "code": "250",
        "description:": "Secondary Serial Number",
        "datablocks": ["...30"],
        "format": "none"
    }, {
        "code": "251",
        "description:": "Reference to Source Entity",
        "datablocks": ["...30"],
        "format": "none"
    }, {
        "code": "253",
        "description:": "Global Document Type Identifier",
        "datablocks": ["13", "...17"],
        "format": "none"
    }, {
        "code": "254",
        "description:": "GLN Extension Component",
        "datablocks": ["...20"],
        "format": "none"
    }, {
        "code": "255",
        "description:": "Global Coupon Number (GCN)",
        "datablocks": ["13", "...25"],
        "format": "none"
    }, {
        "code": "30",
        "description:": "Count of items",
        "datablocks": ["...8"],
        "format": "none"
    }, {
        "code": "310",
        "description:": "Product Net Weight in kg",
        "datablocks": ["1", "6"],
        "format": "comma"
    }, {
        "code": "311",
        "description:": "Product Length/1st Dimension, in meters",
        "datablocks": ["1", "6"],
        "format": "comma"
    }, {
        "code": "312",
        "description:": "Product Width/Diameter/2nd Dimension, in meters",
        "datablocks": ["1", "6"],
        "format": "comma"
    }, {
        "code": "313",
        "description:": "Product Depth/Thickness/Height/3rd Dimension, in meters",
        "datablocks": ["1", "6"],
        "format": "comma"
    }, {
        "code": "314",
        "description:": "Product Area, in square meters",
        "datablocks": ["1", "6"],
        "format": "comma"
    }, {
        "code": "315",
        "description:": "Product Net Volume, in liters",
        "datablocks": ["1", "6"],
        "format": "comma"
    }, {
        "code": "316",
        "description:": "Product Net Volume, in cubic meters",
        "datablocks": ["1", "6"],
        "format": "comma"
    }, {
        "code": "320",
        "description:": "Product Net Weight, in pounds",
        "datablocks": ["1", "6"],
        "format": "comma"
    }, {
        "code": "321",
        "description:": "Product Length/1st Dimension, in inches",
        "datablocks": ["1", "6"],
        "format": "comma"
    }, {
        "code": "322",
        "description:": "Product Length/1st Dimension, in feet",
        "datablocks": ["1", "6"],
        "format": "comma"
    }, {
        "code": "323",
        "description:": "Product Length/1st Dimension, in yards",
        "datablocks": ["1", "6"],
        "format": "comma"
    }, {
        "code": "324",
        "description:": "Product Width/Diameter/2nd Dimension, in inches",
        "datablocks": ["1", "6"],
        "format": "comma"
    }, {
        "code": "325",
        "description:": "Product Width/Diameter/2nd Dimension, in feet",
        "datablocks": ["1", "6"],
        "format": "comma"
    }, {
        "code": "326",
        "description:": "Product Width/Diameter/2nd Dimension, in yards",
        "datablocks": ["1", "6"],
        "format": "comma"
    }, {
        "code": "327",
        "description:": "Product Depth/Thickness/Height/3rd Dimension, in inches",
        "datablocks": ["1", "6"],
        "format": "comma"
    }, {
        "code": "328",
        "description:": "Product Depth/Thickness/Height/3rd Dimension, in feet",
        "datablocks": ["1", "6"],
        "format": "comma"
    }, {
        "code": "329",
        "description:": "Product Depth/Thickness/3rd Dimension, in yards",
        "datablocks": ["1", "6"],
        "format": "comma"
    }, {
        "code": "330",
        "description:": "Container Gross Weight (kg)",
        "datablocks": ["1", "6"],
        "format": "comma"
    }, {
        "code": "331",
        "description:": "Container Length/1st Dimension (Meters)",
        "datablocks": ["1", "6"],
        "format": "comma"
    }, {
        "code": "332",
        "description:": "Container Width/Diameter/2nd Dimension (Meters)",
        "datablocks": ["1", "6"],
        "format": "comma"
    }, {
        "code": "333",
        "description:": "Container Depth/Thickness/3rd Dimension (Meters)",
        "datablocks": ["1", "6"],
        "format": "comma"
    }, {
        "code": "334",
        "description:": "Container Area (Square Meters)",
        "datablocks": ["1", "6"],
        "format": "comma"
    }, {
        "code": "335",
        "description:": "Container Gross Volume (Liters)",
        "datablocks": ["1", "6"],
        "format": "comma"
    }, {
        "code": "336",
        "description:": "Container Gross Volume (Cubic Meters)",
        "datablocks": ["1", "6"],
        "format": "comma"
    }, {
        "code": "340",
        "description:": "Container Gross Weight (Pounds)",
        "datablocks": ["1", "6"],
        "format": "comma"
    }, {
        "code": "341",
        "description:": "Container Length/1st Dimension, in inches",
        "datablocks": ["1", "6"],
        "format": "comma"
    }, {
        "code": "342",
        "description:": "Container Length/1st Dimension, in feet",
        "datablocks": ["1", "6"],
        "format": "comma"
    }, {
        "code": "343",
        "description:": "Container Length/1st Dimension in, in yards",
        "datablocks": ["1", "6"],
        "format": "comma"
    }, {
        "code": "344",
        "description:": "Container Width/Diameter/2nd Dimension, in inches",
        "datablocks": ["1", "6"],
        "format": "comma"
    }, {
        "code": "345",
        "description:": "Container Width/Diameter/2nd Dimension, in feet",
        "datablocks": ["1", "6"],
        "format": "comma"
    }, {
        "code": "346",
        "description:": "Container Width/Diameter/2nd Dimension, in yards",
        "datablocks": ["1", "6"],
        "format": "comma"
    }, {
        "code": "347",
        "description:": "Container Depth/Thickness/Height/3rd Dimension, in inches",
        "datablocks": ["1", "6"],
        "format": "comma"
    }, {
        "code": "348",
        "description:": "Container Depth/Thickness/Height/3rd Dimension, in feet",
        "datablocks": ["1", "6"],
        "format": "comma"
    }, {
        "code": "349",
        "description:": "Container Depth/Thickness/Height/3rd Dimension, in yards",
        "datablocks": ["1", "6"],
        "format": "comma"
    }, {
        "code": "350",
        "description:": "Product Area (Square Inches)",
        "datablocks": ["1", "6"],
        "format": "comma"
    }, {
        "code": "351",
        "description:": "Product Area (Square Feet)",
        "datablocks": ["1", "6"],
        "format": "comma"
    }, {
        "code": "352",
        "description:": "Product Area (Square Yards)",
        "datablocks": ["1", "6"],
        "format": "comma"
    }, {
        "code": "353",
        "description:": "Container Area (Square Inches)",
        "datablocks": ["1", "6"],
        "format": "comma"
    }, {
        "code": "354",
        "description:": "Container Area (Square Feet)",
        "datablocks": ["1", "6"],
        "format": "comma"
    }, {
        "code": "355",
        "description:": "Container Area (Square Yards)",
        "datablocks": ["1", "6"],
        "format": "comma"
    }, {
        "code": "356",
        "description:": "Net Weight (Troy Ounces)",
        "datablocks": ["1", "6"],
        "format": "comma"
    }, {
        "code": "357",
        "description:": "Net Weight/Volume (Ounces)",
        "datablocks": ["1", "6"],
        "format": "comma"
    }, {
        "code": "360",
        "description:": "Product Volume (Quarts)",
        "datablocks": ["1", "6"],
        "format": "comma"
    }, {
        "code": "361",
        "description:": "Product Volume (Gallons)",
        "datablocks": ["1", "6"],
        "format": "comma"
    }, {
        "code": "362",
        "description:": "Container Gross Volume (Quarts)",
        "datablocks": ["1", "6"],
        "format": "comma"
    }, {
        "code": "363",
        "description:": "Container Gross Volume (U.S. Gallons)",
        "datablocks": ["1", "6"],
        "format": "comma"
    }, {
        "code": "364",
        "description:": "Product Volume (Cubic Inches)",
        "datablocks": ["1", "6"],
        "format": "comma"
    }, {
        "code": "365",
        "description:": "Product Volume (Cubic Feet)",
        "datablocks": ["1", "6"],
        "format": "comma"
    }, {
        "code": "366",
        "description:": "Product Volume (Cubic Yards)",
        "datablocks": ["1", "6"],
        "format": "comma"
    }, {
        "code": "367",
        "description:": "Container Gross Volume (Cubic Inches)",
        "datablocks": ["1", "6"],
        "format": "comma"
    }, {
        "code": "368",
        "description:": "Container Gross Volume (Cubic Feet)",
        "datablocks": ["1", "6"],
        "format": "comma"
    }, {
        "code": "369",
        "description:": "Container Gross Volume (Cubic Yards)",
        "datablocks": ["1", "6"],
        "format": "comma"
    }, {
        "code": "37",
        "description:": "Number of Units Contained",
        "datablocks": ["...8"],
        "format": "none"
    }, {
        "code": "390",
        "description:": "Amount payable (local currency)",
        "datablocks": ["1", "...15"],
        "format": "currency"
    }, {
        "code": "391",
        "description:": "Amount payable (with ISO currency code)",
        "datablocks": ["1", "3", "...18"],
        "format": "isocurrency"
    }, {
        "code": "392",
        "description:": "Amount payable per single item (local currency)",
        "datablocks": ["1", "...15"],
        "format": "currency"
    }, {
        "code": "393",
        "description:": "Amount payable per single item (with ISO currency code)",
        "datablocks": ["1", "3", "...18"],
        "format": "isocurrency"
    }, {
        "code": "400",
        "description:": "Customer Purchase Order Number",
        "datablocks": ["...30"],
        "format": "none"
    }, {
        "code": "401",
        "description:": "Consignment Number",
        "datablocks": ["...30"],
        "format": "none"
    }, {
        "code": "402",
        "description:": "Bill of Lading number",
        "datablocks": ["17"],
        "format": "none"
    }, {
        "code": "403",
        "description:": "Routing code",
        "datablocks": ["...30"],
        "format": "none"
    }, {
        "code": "410",
        "description:": "Ship To/Deliver To Location Code (Global Location Number)",
        "datablocks": ["13"],
        "format": "none"
    }, {
        "code": "411",
        "description:": "Bill To/Invoice Location Code (Global Location Number)",
        "datablocks": ["13"],
        "format": "none"
    }, {
        "code": "412",
        "description:": "Purchase From Location Code (Global Location Number)",
        "datablocks": ["13"],
        "format": "none"
    }, {
        "code": "413",
        "description:": "Ship for, Deliver for, or Forward to Location Code (Global Location Number)",
        "datablocks": ["13"],
        "format": "none"
    }, {
        "code": "414",
        "description:": "Identification of a physical location (Global Location Number)",
        "datablocks": ["13"],
        "format": "none"
    }, {
        "code": "420",
        "description:": "Ship To/Deliver To Postal Code (Single Postal Authority)",
        "datablocks": ["...20"],
        "format": "none"
    }, {
        "code": "421",
        "description:": "Ship To/Deliver To Postal Code (with ISO country code)",
        "datablocks": ["3", "...15"],
        "format": "none"
    }, {
        "code": "422",
        "description:": "Country of Origin (ISO country code)",
        "datablocks": ["3"],
        "format": "none"
    }, {
        "code": "423",
        "description:": "Country or countries of initial processing",
        "datablocks": ["3", "...15"],
        "format": "none"
    }, {
        "code": "424",
        "description:": "Country of processing",
        "datablocks": ["3"],
        "format": "none"
    }, {
        "code": "425",
        "description:": "Country of disassembly",
        "datablocks": ["3"],
        "format": "none"
    }, {
        "code": "426",
        "description:": "Country of full process chain",
        "datablocks": ["3"],
        "format": "none"
    }, {
        "code": "7001",
        "description:": "NATO Stock Number (NSN)",
        "datablocks": ["13"],
        "format": "none"
    }, {
        "code": "7002",
        "description:": "UN/ECE Meat Carcasses and cuts classification",
        "datablocks": ["...30"],
        "format": "none"
    }, {
        "code": "7003",
        "description:": "expiration date and time",
        "datablocks": ["10"],
        "format": "none"
    }, {
        "code": "7004",
        "description:": "Active Potency",
        "datablocks": ["...4"],
        "format": "none"
    }, {
        "code": "703",
        "description:": "Processor approval (with ISO country code); n indicates sequence number of several processors",
        "datablocks": ["1", "3", "...30"],
        "format": "comma"
    }, {
        "code": "8001",
        "description:": "Roll Products: Width/Length/Core Diameter/Direction/Splices",
        "datablocks": ["14"],
        "format": "none"
    }, {
        "code": "8002",
        "description:": "Mobile phone identifier",
        "datablocks": ["...20"],
        "format": "none"
    }, {
        "code": "8003",
        "description:": "Global Returnable Asset Identifier",
        "datablocks": ["14", "...30"],
        "format": "none"
    }, {
        "code": "8004",
        "description:": "Global Individual Asset Identifier",
        "datablocks": ["...30"],
        "format": "none"
    }, {
        "code": "8005",
        "description:": "Price per Unit of Measure",
        "datablocks": ["6"],
        "format": "none"
    }, {
        "code": "8006",
        "description:": "identification of the components of an item",
        "datablocks": ["18"],
        "format": "none"
    }, {
        "code": "8007",
        "description:": "International Bank Account Number",
        "datablocks": ["...30"],
        "format": "none"
    }, {
        "code": "8008",
        "description:": "Date/time of production",
        "datablocks": ["7", "...12"],
        "format": "datetime"
    }, {
        "code": "8018",
        "description:": "Global Service Relation Number",
        "datablocks": ["18"],
        "format": "none"
    }, {
        "code": "8020",
        "description:": "Payment slip reference number",
        "datablocks": ["...25"],
        "format": "none"
    }, {
        "code": "8100",
        "description:": "Coupon Extended Code: Number System and Offer",
        "datablocks": ["6"],
        "format": "none"
    }, {
        "code": "8101",
        "description:": "Coupon Extended Code: Number System, Offer, End of Offer",
        "datablocks": ["10"],
        "format": "none"
    }, {
        "code": "8102",
        "description:": "Coupon Extended Code: Number System preceded by 0",
        "datablocks": ["2"],
        "format": "none"
    }, {
        "code": "8110",
        "description:": "Coupon code ID (North America)",
        "datablocks": ["...30"],
        "format": "none"
    }, {
        "code": "8200",
        "description:": "Extended Packaging URL",
        "datablocks": ["...70"],
        "format": "none"
    }, {
        "code": "90",
        "description:": "Mutually Agreed Between Trading Partners",
        "datablocks": ["...30"],
        "format": "none"
    }, {
        "code": "91",
        "description:": "Internal Company Codes",
        "datablocks": ["...30"],
        "format": "none"
    }, {
        "code": "92",
        "description:": "Internal Company Codes",
        "datablocks": ["...30"],
        "format": "none"
    }, {
        "code": "93",
        "description:": "Internal Company Codes",
        "datablocks": ["...30"],
        "format": "none"
    }, {
        "code": "94",
        "description:": "Internal Company Codes",
        "datablocks": ["...30"],
        "format": "none"
    }, {
        "code": "95",
        "description:": "Internal Company Codes",
        "datablocks": ["...30"],
        "format": "none"
    }, {
        "code": "96",
        "description:": "Internal Company Codes",
        "datablocks": ["...30"],
        "format": "none"
    }, {
        "code": "97",
        "description:": "Internal Company Codes",
        "datablocks": ["...30"],
        "format": "none"
    }, {
        "code": "98",
        "description:": "Internal Company Codes",
        "datablocks": ["...30"],
        "format": "none"
    }, {
        "code": "99",
        "description:": "Internal Company Codes",
        "datablocks": ["...30"],
        "format": "none"
    }];
}