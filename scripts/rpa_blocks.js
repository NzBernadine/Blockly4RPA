Blockly.defineBlocksWithJsonArray([
  {
    "type": "import_as",
    "message0": "import %1 as %2 %3",
    "args0": [
      {
        "type": "field_input",
        "name": "RPA",
        "text": "rpa"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "R"
     }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 45,
    "tooltip": "",
    "helpUrl": ""
    },
  {
    "type": "init1",
    "message0": "%1 .init ( )",
    "args0": [
      {
        "type": "input_value",
        "name": "R"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "init2",
    "message0": "%1 .init ( visual_automation = %2 %3 )",
    "args0": [
      {
        "type": "input_value",
        "name": "R"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "BOOLEAN",
        "check": "Boolean"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "init3",
    "message0": "%1 .init ( chrome_browser  = %2 %3 )",
    "args0": [
      {
        "type": "input_value",
        "name": "R"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "BOOLEAN",
        "check": "Boolean"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "init4",
    "message0": "%1 .init ( visual_automation  = %2 %3 chrome_browser  = %4 %5 )",
    "args0": [
      {
        "type": "input_value",
        "name": "R"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "BOOLEAN",
        "check": "Boolean"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "BOOLEAN0",
        "check": "Boolean"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "close",
    "message0": "%1 .close ( )",
    "args0": [
      {
        "type": "input_value",
        "name": "R"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "pack",
    "message0": "%1 .pack ( )",
    "args0": [
      {
        "type": "input_value",
        "name": "R"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "update",
    "message0": "%1 .update ( )",
    "args0": [
      {
        "type": "input_value",
        "name": "R"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "debug",
    "message0": "%1 .debug ( %2 %3 )",
    "args0": [
      {
        "type": "input_value",
        "name": "R"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "BOOLEAN",
        "check": "Boolean"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "url",
    "message0": "%1 .url ( %2 %3 )",
    "args0": [
      {
        "type": "input_value",
        "name": "R"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "URL",
        "check": "String"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 345,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "click2",
    "message0": "%1 .click ( %2 %3 )",
    "args0": [
      {
        "type": "input_value",
        "name": "R"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "ELEMENT_IDENTIFIER",
        "check": "String"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 345,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "click1",
    "message0": "%1 .click ( %2 %3 %4 )",
    "args0": [
      {
        "type": "input_value",
        "name": "R"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "X",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "Y",
        "check": "Number"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 345,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "rclick",
    "message0": "%1 .rclick ( %2 %3 )",
    "args0": [
      {
        "type": "input_value",
        "name": "R"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "ELEMENT_IDENTIFIER",
        "check": "String"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 345,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "rclick1",
    "message0": "%1 .rclick ( %2 %3 %4 )",
    "args0": [
      {
        "type": "input_value",
        "name": "R"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "X",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "Y",
        "check": "Number"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 345,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "dclick",
    "message0": "%1 .dclick ( %2 %3 )",
    "args0": [
      {
        "type": "input_value",
        "name": "R"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "ELEMENT_IDENTIFIER",
        "check": "String"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 345,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "dclick1",
    "message0": "%1 .dclick ( %2 %3 %4 )",
    "args0": [
      {
        "type": "input_value",
        "name": "R"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "X",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "Y",
        "check": "Number"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 345,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "hover",
    "message0": "%1 .hover ( %2 %3 )",
    "args0": [
      {
        "type": "input_value",
        "name": "R"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "ELEMENT_IDENTIFIER",
        "check": "String"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 345,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "hover1",
    "message0": "%1 .hover ( %2 %3 %4 )",
    "args0": [
      {
        "type": "input_value",
        "name": "R"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "X",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "Y",
        "check": "Number"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 345,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "type",
    "message0": "%1 .type ( %2 %3 %4 %5 )",
    "args0": [
      {
        "type": "input_value",
        "name": "R"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "X",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "Y",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "TEXT_TO_TYPE",
        "check": "String"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 345,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "type1",
    "message0": "%1 .type ( %2 %3 %4 )",
    "args0": [
      {
        "type": "input_value",
        "name": "R"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "ELEMENT_IDENTIFIER",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "TEXT_TO_TYPE",
        "check": "String"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 345,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "select",
    "message0": "%1 .select ( %2 %3 %4 )",
    "args0": [
      {
        "type": "input_value",
        "name": "R"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "ELEMENT_IDENTIFIER",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "OPTION_VALUE",
        "check": "String"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 345,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "select1",
    "message0": "%1 .select ( %2 %3 %4 %5 )",
    "args0": [
      {
        "type": "input_value",
        "name": "R"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "X",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "Y",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "OPTION_VALUE",
        "check": "String"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 345,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "select2",
    "message0": "%1 .select ( %2 %3 %4 %5 %6 )",
    "args0": [
      {
        "type": "input_value",
        "name": "R"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "X",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "Y",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "X1",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "Y2",
        "check": "Number"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 345,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "read",
    "message0": "%1 .read ( %2 %3 %4 %5 %6 )",
    "args0": [
      {
        "type": "input_value",
        "name": "R"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "X1",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "Y1",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "X2",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "Y2",
        "check": "Number"
      }
    ],
    "output": null,
    "colour": 345,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "read1",
    "message0": "%1 .read ( %2 %3 )",
    "args0": [
      {
        "type": "input_value",
        "name": "R"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "ELEMENT_IDENTIFIER",
        "check": "String"
      }
    ],
    "output": null,
    "colour": 345,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "snap",
    "message0": "%1 .snap ( %2 %3 %4 )",
    "args0": [
      {
        "type": "input_value",
        "name": "R"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "ELEMENT_IDENTIFIER",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "FILENAME_TO_SAVE",
        "check": "String"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 345,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "load",
    "message0": "%1 .load ( %2 %3 )",
    "args0": [
      {
        "type": "input_value",
        "name": "R"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "FILENAME_TO_LOAD",
        "check": "String"
      }
    ],
    "output": null,
    "colour": 345,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "dump",
    "message0": "%1 .dump ( %2 %3 %4 )",
    "args0": [
      {
        "type": "input_value",
        "name": "R"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "TEXT_TO_DUMP",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "FILENAME_TO_SAVE",
        "check": "String"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 345,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "write",
    "message0": "%1 .write ( %2 %3 %4 )",
    "args0": [
      {
        "type": "input_value",
        "name": "R"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "TEXT_TO_WRITE",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "FILENAME_TO_SAVE",
        "check": "String"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 345,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "ask",
    "message0": "%1 .ask ( %2 %3 )",
    "args0": [
      {
        "type": "input_value",
        "name": "R"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "TEXT_TO_PROMPT",
        "check": "String"
      }
    ],
    "output": null,
    "colour": 345,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "telegram",
    "message0": "%1 .telegram ( %2 %3 %4 )",
    "args0": [
      {
        "type": "input_value",
        "name": "R"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "TELEGRAM_ID",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "TEXT_TO_SEND",
        "check": "String"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 15,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "keyboard",
    "message0": "%1 .keyboard ( %2 %3 )",
    "args0": [
      {
        "type": "input_value",
        "name": "R"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "KEYS_AND_MODIFIER",
        "check": "String"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 15,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "mouse",
    "message0": "%1 .mouse ( %2 %3 )",
    "args0": [
      {
        "type": "input_value",
        "name": "R"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "MOUSE_EVENT",
        "check": "String"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 15,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "wait",
    "message0": "%1 .wait ( %2 %3 )",
    "args0": [
      {
        "type": "input_value",
        "name": "R"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "DELAY",
        "check": "Number"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 15,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "table",
    "message0": "%1 .table ( %2 %3 %4 )",
    "args0": [
      {
        "type": "input_value",
        "name": "R"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "TABLE_NUMBER",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "FILENAME_TO_SAVE",
        "check": "String"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 15,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "upload",
    "message0": "%1 .upload ( %2 %3 %4 )",
    "args0": [
      {
        "type": "input_value",
        "name": "R"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "ELEMENT_IDENTIFIER",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "FILENAME_TO_UPLOAD",
        "check": "String"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 15,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "download",
    "message0": "%1 .download ( %2 %3 %4 )",
    "args0": [
      {
        "type": "input_value",
        "name": "R"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "DOWNLOAD_URL",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "FILENAME_TO_SAVE",
        "check": "String"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 15,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "unzip",
    "message0": "%1 .unzip ( %2 %3 %4 )",
    "args0": [
      {
        "type": "input_value",
        "name": "R"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "FILE_TO_UNZIP",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "UNZIP_LOCATION",
        "check": "String"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 15,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "unzip1",
    "message0": "%1 .unzip ( %2 %3 )",
    "args0": [
      {
        "type": "input_value",
        "name": "R"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "FILE_TO_UNZIP",
        "check": "String"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 15,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "frame",
    "message0": "%1 .frame ( %2 %3 )",
    "args0": [
      {
        "type": "input_value",
        "name": "R"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "MAIN_FRAME",
        "check": [
          "Number",
          "String"
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 15,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "frame1",
    "message0": "%1 .frame ( %2 %3 %4 )",
    "args0": [
      {
        "type": "input_value",
        "name": "R"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "MAIN_FRAME",
        "check": [
          "Number",
          "String"
        ]
      },
      {
        "type": "input_value",
        "name": "SUB_FRAME",
        "check": [
          "Number",
          "String"
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 15,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "popup",
    "message0": "%1 .popup ( %2 %3 )",
    "args0": [
      {
        "type": "input_value",
        "name": "R"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "STRING_IN_URL",
        "check": "String"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 15,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "popup1",
    "message0": "%1 .popup ( )",
    "args0": [
      {
        "type": "input_value",
        "name": "R"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 15,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "run",
    "message0": "%1 .run ( %2 %3 )",
    "args0": [
      {
        "type": "input_value",
        "name": "R"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "COMMAND_TO_RUN",
        "check": "String"
      }
    ],
    "output": null,
    "colour": 15,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "dom",
    "message0": "%1 .dom ( %2 %3 )",
    "args0": [
      {
        "type": "input_value",
        "name": "R"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "STATEMENT_TO_RUN",
        "check": "String"
      }
    ],
    "output": null,
    "colour": 15,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "vision",
    "message0": "%1 .vision ( %2 %3 )",
    "args0": [
      {
        "type": "input_value",
        "name": "R"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "COMMAND_TO_RUN",
        "check": "String"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 15,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "timeout",
    "message0": "%1 .timeout ( %2 %3 )",
    "args0": [
      {
        "type": "input_value",
        "name": "R"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "TIME",
        "check": "Number"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 15,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "mouse_xy",
    "message0": "%1 .mouse_xy ( )",
    "args0": [
      {
        "type": "input_value",
        "name": "R"
      }
    ],
    "output": null,
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "mouse_x",
    "message0": "%1 .mouse_x ( )",
    "args0": [
      {
        "type": "input_value",
        "name": "R"
      }
    ],
    "output": null,
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "mouse_y",
    "message0": "%1 .mouse_y ( )",
    "args0": [
      {
        "type": "input_value",
        "name": "R"
      }
    ],
    "output": null,
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "title",
    "message0": "%1 .title ( )",
    "args0": [
      {
        "type": "input_value",
        "name": "R"
      }
    ],
    "output": null,
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "text_",
    "message0": "%1 .text ( )",
    "args0": [
      {
        "type": "input_value",
        "name": "R"
      }
    ],
    "output": null,
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "timer",
    "message0": "%1 .timer ( )",
    "args0": [
      {
        "type": "input_value",
        "name": "R"
      }
    ],
    "output": null,
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "exist",
    "message0": "%1 .exist ( %2 %3 )",
    "args0": [
      {
        "type": "input_value",
        "name": "R"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "ELEMENT_IDENTIFIER",
        "check": "String"
      }
    ],
    "output": null,
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "present",
    "message0": "%1 .present ( %2 %3 )",
    "args0": [
      {
        "type": "input_value",
        "name": "R"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "ELEMENT_IDENTIFIER",
        "check": "String"
      }
    ],
    "output": null,
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "count",
    "message0": "%1 .count ( %2 %3 )",
    "args0": [
      {
        "type": "input_value",
        "name": "R"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "ELEMENT_IDENTIFIER",
        "check": "String"
      }
    ],
    "output": null,
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "clipboard",
    "message0": "%1 .clipboard ( %2 %3 )",
    "args0": [
      {
        "type": "input_value",
        "name": "R"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "TEXT_TO_PUT ",
        "check": "String"
      }
    ],
    "output": null,
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "get_text",
    "message0": "%1 .get_text ( %2 %3 %4 %5 count = %6 %7 )",
    "args0": [
      {
        "type": "input_value",
        "name": "R"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "SOURCE_TEXT",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "LEFT",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "RIGHT",
        "check": "String"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "COUNT",
        "check": "Number"
      }
    ],
    "output": null,
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "del_chars",
    "message0": "%1 .del_chars ( %2 %3 %4 )",
    "args0": [
      {
        "type": "input_value",
        "name": "R"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "SOURCE_TEXT",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "CHARACTERS",
        "check": "String"
      }
    ],
    "output": null,
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "r_variable",
    "message0": "%1",
    "args0": [
      {
        "type": "field_variable",
        "name": "",
        "variable": "r"
      }
    ],
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "init5",
    "message0": "%1 .init ( turbo_mode = %2 %3 )",
    "args0": [
      {
        "type": "input_value",
        "name": "R"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "BOOLEAN",
        "check": "Boolean"
      }
    ],
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  }
]);

