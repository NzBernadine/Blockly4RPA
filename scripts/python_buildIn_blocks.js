Blockly.defineBlocksWithJsonArray([
  {
    "type": "abs",
    "message0": "absolute of %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "NUMBER",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "output": "Number",
    "colour": 105,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "connect_block",
    "message0": "%1",
    "args0": [
      {
        "type": "input_value",
        "name": "CONNECTOR"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "float_block",
    "message0": "float of %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "OBJECT",
        "check": [
          "Number",
          "String"
        ]
      }
    ],
    "inputsInline": true,
    "output": "Number",
    "colour": 105,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "int_block",
    "message0": "interger of  %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "OBJECT",
        "check": [
          "Number",
          "String"
        ]
      }
    ],
    "inputsInline": true,
    "output": "Number",
    "colour": 105,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "maximum_block",
    "message0": "max of %1 %2",
     "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "LIST"
    }
  ],
    "inputsInline": true,
    "output": null,
    "colour": 105,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "open_file",
    "message0": "open file  %1 %2 %3",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "FILE_NAME",
        "check": "String"
      },
      {
        "type": "field_dropdown",
        "name": "MODE",
        "options": [
          [
            "read",
            "r"
          ],
          [
            "write",
            "w"
          ],
          [
            "creation",
            "x"
          ],
          [
            "append",
            "a"
          ],
          [
            "binary",
            "b"
          ],
          [
            "text",
            "t"
          ],
          [
            "update",
            "+"
          ]
        ]
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 105,
    "tooltip": "",
    "helpUrl": ""
    },
    {
      "type": "power",
      "message0": " base  %1 %2 to the power of  %3 %4",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "BASE",
          "check": "Number"
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "EXP",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "output": "Number",
      "colour": 105,
      "tooltip": "",
      "helpUrl": ""
  },
  {
    "type": "range",
    "message0": "range of from  %1 %2 to %3 %4 step by %5 %6",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "START",
        "check": "Number"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "STOP",
        "check": "Number"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "STEP",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 105,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "string_block",
    "message0": "string of  %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "OBJECT"
      }
    ],
    "inputsInline": true,
    "output": "String",
    "colour": 105,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "sum_block",
    "message0": "sum of  %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "LIST"
      }
    ],
    "inputsInline": true,
    "output": "Number",
    "colour": 105,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "sort_block",
    "message0": "sort  %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "LIST"
      }
      
    ],
    "inputsInline": true,
    "output": null,
    "colour": 105,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "round_block",
    "message0": "round  %1 %2 by %3 %4",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "NUMBER",
        "check": "Number"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "DIGIT",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "output": "Number",
    "colour": 105,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "reversese_block",
    "message0": "reverse %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "LIST"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 105,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "min_block",
    "message0": "min of %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "LIST"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 105,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "enumarate_block",
    "message0": "enumarate %1 %2 start %3 %4",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "LIST"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "START",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 105,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "filter",
    "message0": "filter %1 %2 from %3 %4",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "FUNTION"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "LIST"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 105,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "insitanceof_block",
    "message0": "is  %1 %2 instance of  %3 %4",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "OBJECT"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "FUNCTION"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 105,
    "tooltip": "",
    "helpUrl": ""
  }
// {
//   "type": "upper_block",
//   "message0": "upper case of  %1 %2",
//   "args0": [
//     {
//       "type": "input_dummy"
//     },
//     {
//       "type": "input_value",
//       "name": "WORD",
//       "check": "String"
//     }
//   ],
//   "inputsInline": true,
//   "output": "String",
//   "colour": 105,
//   "tooltip": "",
//   "helpUrl": ""
// },
// {
//   "type": "replace_block",
//   "message0": "replace %1 %2 with %3 %4 in  %5 %6",
//   "args0": [
//     {
//       "type": "input_dummy"
//     },
//     {
//       "type": "input_value",
//       "name": "OLDVALUE",
//       "check": "String"
//     },
//     {
//       "type": "input_dummy"
//     },
//     {
//       "type": "input_value",
//       "name": "NEWVALUE",
//       "check": "String"
//     },
//     {
//       "type": "input_dummy"
//     },
//     {
//       "type": "input_value",
//       "name": "VALUE",
//       "check": "String"
//     }
//   ],
//   "inputsInline": true,
//   "output": "String",
//   "colour": 105,
//   "tooltip": "",
//   "helpUrl": ""
// },
// {
//   "type": "join_block",
//   "message0": "join %1 %2 %3 with %4 %5",
//   "args0": [
//     {
//       "type": "input_dummy"
//     },
//     {
//       "type": "field_variable",
//       "name": "NAME",
//       "variable": "list"
//     },
//     {
//       "type": "input_dummy"
//     },
//     {
//       "type": "input_dummy"
//     },
//     {
//       "type": "input_value",
//       "name": "VALUE",
//       "check": "String"
//     }
//   ],
//   "inputsInline": true,
//   "output": "String",
//   "colour": 105,
//   "tooltip": "",
//   "helpUrl": ""
// },
// {
//   "type": "find_block",
//   "message0": "find %1 %2 from %3 %4 to %5 %6 in %7 %8",
//   "args0": [
//     {
//       "type": "input_dummy"
//     },
//     {
//       "type": "input_value",
//       "name": "VALUE",
//       "check": "String"
//     },
//     {
//       "type": "input_dummy"
//     },
//     {
//       "type": "input_value",
//       "name": "START",
//       "check": "Number"
//     },
//     {
//       "type": "input_dummy"
//     },
//     {
//       "type": "input_value",
//       "name": "STOP",
//       "check": "Number"
//     },
//     {
//       "type": "input_dummy"
//     },
//     {
//       "type": "input_value",
//       "name": "STRING",
//       "check": "String"
//     }
//   ],
//   "inputsInline": true,
//   "output": null,
//   "colour": 105,
//   "tooltip": "",
//   "helpUrl": ""
// }
]);