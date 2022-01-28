Blockly.Python['import_as'] = function(block) {
  var text_rpa = block.getFieldValue('RPA');
  var value_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'import ' + text_rpa+ ' as ' + value_r +'\n';
  return code;
};

Blockly.Python['init1'] = function(block) {
  var value_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_r +'.init()\n';
  return code;
};

Blockly.Python['init2'] = function(block) {
  var value_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
  var value_boolean = Blockly.Python.valueToCode(block, 'BOOLEAN', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_r +'.init(visual_automation = '+ value_boolean +')\n';
  return code;
};

Blockly.Python['init3'] = function(block) {
  var value_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
  var value_boolean = Blockly.Python.valueToCode(block, 'BOOLEAN', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_r +'.init(chrome_browser = '+ value_boolean +')\n';
  return code;
};

Blockly.Python['init4'] = function(block) {
  var value_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
  var value_boolean = Blockly.Python.valueToCode(block, 'BOOLEAN', Blockly.Python.ORDER_ATOMIC);
  var value_boolean0 = Blockly.Python.valueToCode(block, 'BOOLEAN0', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_r +'.init(visual_automation = '+ value_boolean +', chrome_browser = '+ value_boolean0 +')\n';
  return code;
};

Blockly.Python['init5'] = function(block) {
  var value_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
  var value_boolean = Blockly.Python.valueToCode(block, 'BOOLEAN', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_r +'.init(turbo_mode = '+ value_boolean +')\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.Python['close'] = function(block) {
  var value_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_r + '.close()\n';
  return code;
};

Blockly.Python['pack'] = function(block) {
  var value_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code =  value_r + '.pack()\n';
  return code;
};

Blockly.Python['update'] = function(block) {
  var value_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code =value_r + '.update()\n';
  return code;
};

Blockly.Python['debug'] = function(block) {
  var value_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
  var value_boolean = Blockly.Python.valueToCode(block, 'BOOLEAN', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_r + '.debug('+ value_boolean +')\n';
  return code;
};

Blockly.Python['url'] = function(block) {
  var value_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
  var value_url = Blockly.Python.valueToCode(block, 'URL', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_r + '.url('+ value_url +')\n';
  return code;
};

Blockly.Python['click2'] = function(block) {
  var value_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
  var value_element_identifier = Blockly.Python.valueToCode(block, 'ELEMENT_IDENTIFIER', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_r + '.click('+ value_element_identifier +')\n';
  return code;
};

Blockly.Python['click1'] = function(block) {
  var value_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
  var value_x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_r + '.click('+ value_x + ', ' +value_y +')\n';
  return code;
};

Blockly.Python['rclick'] = function(block) {
  var value_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
  var value_element_identifier = Blockly.Python.valueToCode(block, 'ELEMENT_IDENTIFIER', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_r + '.rclick('+ value_element_identifier +')\n';
  return code;
};

Blockly.Python['rclick1'] = function(block) {
  var value_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
  var value_x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_r + '.rclick('+ value_x + ', ' +value_y +')\n';
  return code;
};

Blockly.Python['dclick'] = function(block) {
  var value_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
  var value_element_identifier = Blockly.Python.valueToCode(block, 'ELEMENT_IDENTIFIER', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_r + '.dclick('+ value_element_identifier +')\n';
  return code;
};

Blockly.Python['dclick1'] = function(block) {
  var value_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
  var value_x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_r + '.dclick('+ value_x + ', ' +value_y +')\n';
  return code;
};

Blockly.Python['hover'] = function(block) {
  var value_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
  var value_element_identifier = Blockly.Python.valueToCode(block, 'ELEMENT_IDENTIFIER', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_r + '.hover('+ value_element_identifier +')\n';
  return code;
};

Blockly.Python['hover1'] = function(block) {
  var value_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
  var value_x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_r + '.hover('+ value_x + ', ' +value_y +')\n';
  return code;
};

Blockly.Python['type'] = function(block) {
  var value_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
  var value_x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_ATOMIC);
  var value_text_to_type = Blockly.Python.valueToCode(block, 'TEXT_TO_TYPE', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_r + '.type('+ value_x + ', ' +value_y +', '+value_text_to_type +' )\n';
  return code;
};

Blockly.Python['type1'] = function(block) {
  var value_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
  var value_element_identifier = Blockly.Python.valueToCode(block, 'ELEMENT_IDENTIFIER', Blockly.Python.ORDER_ATOMIC);
  var value_text_to_type = Blockly.Python.valueToCode(block, 'TEXT_TO_TYPE', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_r + '.type('+ value_element_identifier + ', '+value_text_to_type +')\n';
  return code;
};

Blockly.Python['select'] = function(block) {
  var value_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
  var value_element_identifier = Blockly.Python.valueToCode(block, 'ELEMENT_IDENTIFIER', Blockly.Python.ORDER_ATOMIC);
  var value_option_value = Blockly.Python.valueToCode(block, 'OPTION_VALUE', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_r + '.select('+ value_element_identifier + ', '+value_option_value +')\n';
  return code;
};

Blockly.Python['select1'] = function(block) {
  var value_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
  var value_x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_ATOMIC);
  var value_option_value = Blockly.Python.valueToCode(block, 'OPTION_VALUE', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_r + '.select('+ value_x +', '+ value_y + ', '+value_option_value +')\n';
  return code;
};

Blockly.Python['select2'] = function(block) {
  var value_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
  var value_x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_ATOMIC);
  var value_x1 = Blockly.Python.valueToCode(block, 'X1', Blockly.Python.ORDER_ATOMIC);
  var value_y2 = Blockly.Python.valueToCode(block, 'Y2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_r + '.select('+ value_x +', '+ value_y + ', '+ value_x1 + ', ' + value_y2 +')\n';
  return code;
};

Blockly.Python['read'] = function(block) {
  var value_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
  var value_x1 = Blockly.Python.valueToCode(block, 'X1', Blockly.Python.ORDER_ATOMIC);
  var value_y1 = Blockly.Python.valueToCode(block, 'Y1', Blockly.Python.ORDER_ATOMIC);
  var value_x2 = Blockly.Python.valueToCode(block, 'X2', Blockly.Python.ORDER_ATOMIC);
  var value_y2 = Blockly.Python.valueToCode(block, 'Y2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_r + '.read('+ value_x1 +', '+ value_y1 + ', '+ value_x2 + ', ' + value_y2 +')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['read1'] = function(block) {
  var value_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
  var value_element_identifier = Blockly.Python.valueToCode(block, 'ELEMENT_IDENTIFIER', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_r + '.read('+ value_element_identifier +')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['snap'] = function(block) {
  var value_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
  var value_element_identifier = Blockly.Python.valueToCode(block, 'ELEMENT_IDENTIFIER', Blockly.Python.ORDER_ATOMIC);
  var value_filename_to_save = Blockly.Python.valueToCode(block, 'FILENAME_TO_SAVE', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_r + '.snap('+ value_element_identifier + ', ' + value_filename_to_save+')\n';
  return code;
};

Blockly.Python['load'] = function(block) {
  var value_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
  var value_filename_to_load = Blockly.Python.valueToCode(block, 'FILENAME_TO_LOAD', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_r + '.load('+ value_filename_to_load +')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['dump'] = function(block) {
  var value_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
  var value_text_to_dump = Blockly.Python.valueToCode(block, 'TEXT_TO_DUMP', Blockly.Python.ORDER_ATOMIC);
  var value_filename_to_save = Blockly.Python.valueToCode(block, 'FILENAME_TO_SAVE', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_r + '.dump('+ value_text_to_dump + ', ' + value_filename_to_save+')\n';
  return code;
};

Blockly.Python['write'] = function(block) {
  var value_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
  var value_text_to_write = Blockly.Python.valueToCode(block, 'TEXT_TO_WRITE', Blockly.Python.ORDER_ATOMIC);
  var value_filename_to_save = Blockly.Python.valueToCode(block, 'FILENAME_TO_SAVE', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_r + '.write('+ value_text_to_write + ', ' + value_filename_to_save+')\n';
  return code;
};

Blockly.Python['ask'] = function(block) {
  var value_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
  var value_text_to_prompt = Blockly.Python.valueToCode(block, 'TEXT_TO_PROMPT', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_r + '.ask('+ value_text_to_prompt +')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['telegram'] = function(block) {
  var value_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
  var value_telegram_id = Blockly.Python.valueToCode(block, 'TELEGRAM_ID', Blockly.Python.ORDER_ATOMIC);
  var value_text_to_send = Blockly.Python.valueToCode(block, 'TEXT_TO_SEND', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code =value_r + '.telegram('+ value_telegram_id + ', ' + value_text_to_send +')\n';
  return code;
};

Blockly.Python['keyboard'] = function(block) {
  var value_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
  var value_keys_and_modifier = Blockly.Python.valueToCode(block, 'KEYS_AND_MODIFIER', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_r + '.keyboard('+ value_keys_and_modifier +')\n';
  return code;
};

Blockly.Python['mouse'] = function(block) {
  var value_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
  var value_mouse_event = Blockly.Python.valueToCode(block, 'MOUSE_EVENT', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_r + '.mouse('+ value_mouse_event +')\n';
  return code;
};

Blockly.Python['wait'] = function(block) {
  var value_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
  var value_delay = Blockly.Python.valueToCode(block, 'DELAY', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_r + '.wait('+ value_delay +')\n';
  return code;
};

Blockly.Python['table'] = function(block) {
  var value_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
  var value_table_number = Blockly.Python.valueToCode(block, 'TABLE_NUMBER', Blockly.Python.ORDER_ATOMIC);
  var value_filename_to_save = Blockly.Python.valueToCode(block, 'FILENAME_TO_SAVE', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_r + '.table('+ value_table_number + ', ' + value_filename_to_save +')\n';
  return code;
};

Blockly.Python['upload'] = function(block) {
  var value_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
  var value_element_identifier = Blockly.Python.valueToCode(block, 'ELEMENT_IDENTIFIER', Blockly.Python.ORDER_ATOMIC);
  var value_filename_to_upload = Blockly.Python.valueToCode(block, 'FILENAME_TO_UPLOAD', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_r + '.upload('+ value_element_identifier + ', ' + value_filename_to_upload +')\n';
  return code;
};

Blockly.Python['download'] = function(block) {
  var value_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
  var value_download_url = Blockly.Python.valueToCode(block, 'DOWNLOAD_URL', Blockly.Python.ORDER_ATOMIC);
  var value_filename_to_save = Blockly.Python.valueToCode(block, 'FILENAME_TO_SAVE', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_r + '.download('+ value_download_url + ', ' + value_filename_to_save +')\n';
  return code;
};

Blockly.Python['unzip'] = function(block) {
  var value_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
  var value_file_to_unzip = Blockly.Python.valueToCode(block, 'FILE_TO_UNZIP', Blockly.Python.ORDER_ATOMIC);
  var value_unzip_location = Blockly.Python.valueToCode(block, 'UNZIP_LOCATION', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_r + '.unzip('+ value_file_to_unzip + ', ' + value_unzip_location +')\n';
  return code;
};

Blockly.Python['unzip1'] = function(block) {
  var value_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
  var value_file_to_unzip = Blockly.Python.valueToCode(block, 'FILE_TO_UNZIP', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_r + '.unzip('+ value_file_to_unzip + ', '+')\n';
  return code;
};

Blockly.Python['frame'] = function(block) {
  var value_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
  var value_main_frame = Blockly.Python.valueToCode(block, 'MAIN_FRAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code =  value_r + '.frame('+ value_main_frame +')\n';
  return code;
};

Blockly.Python['frame1'] = function(block) {
  var value_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
  var value_main_frame = Blockly.Python.valueToCode(block, 'MAIN_FRAME', Blockly.Python.ORDER_ATOMIC);
  var value_sub_frame = Blockly.Python.valueToCode(block, 'SUB_FRAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_r + '.frame('+ value_main_frame + ', ' + value_sub_frame +')\n';
  return code;
};

Blockly.Python['popup'] = function(block) {
  var value_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
  var value_string_in_url = Blockly.Python.valueToCode(block, 'STRING_IN_URL', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_r + '.popup('+ value_string_in_url +')\n';
  return code;
};

Blockly.Python['popup1'] = function(block) {
  var value_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_r + '.popup()\n';
  return code;
};

Blockly.Python['run'] = function(block) {
  var value_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
  var value_command_to_run = Blockly.Python.valueToCode(block, 'COMMAND_TO_RUN', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_r + '.run('+ value_command_to_run +')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['dom'] = function(block) {
  var value_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
  var value_statement_to_run = Blockly.Python.valueToCode(block, 'STATEMENT_TO_RUN', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_r + '.dom('+ value_statement_to_run +')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['vision'] = function(block) {
  var value_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
  var value_command_to_run = Blockly.Python.valueToCode(block, 'COMMAND_TO_RUN', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code =  value_r + '.vision('+ value_command_to_run +')\n';
  return code;
};

Blockly.Python['timeout'] = function(block) {
  var value_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
  var value_time = Blockly.Python.valueToCode(block, 'TIME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_r + '.timeout('+ value_time +')\n';
  return code;
};

Blockly.Python['mouse_xy'] = function(block) {
  var value_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_r + '.mouse_xy()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['mouse_x'] = function(block) {
  var value_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_r + '.mouse_x()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['mouse_y'] = function(block) {
  var value_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_r + '.mouse_y()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['title'] = function(block) {
  var value_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_r + '.title()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['text_'] = function(block) {
  var value_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_r + '.text()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['timer'] = function(block) {
  var value_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_r + '.timer()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['exist'] = function(block) {
  var value_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
  var value_element_identifier = Blockly.Python.valueToCode(block, 'ELEMENT_IDENTIFIER', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_r + '.exist('+ value_element_identifier +')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['present'] = function(block) {
  var value_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
  var value_element_identifier = Blockly.Python.valueToCode(block, 'ELEMENT_IDENTIFIER', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_r + '.present('+ value_element_identifier +')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['count'] = function(block) {
  var value_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
  var value_element_identifier = Blockly.Python.valueToCode(block, 'ELEMENT_IDENTIFIER', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_r + '.count('+ value_element_identifier +')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['clipboard'] = function(block) {
  var value_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
  var value_text_to_put_ = Blockly.Python.valueToCode(block, 'TEXT_TO_PUT ', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_r + '.clipboard('+ value_text_to_put_ +')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['get_text'] = function(block) {
  var value_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
  var value_source_text = Blockly.Python.valueToCode(block, 'SOURCE_TEXT', Blockly.Python.ORDER_ATOMIC);
  var value_left = Blockly.Python.valueToCode(block, 'LEFT', Blockly.Python.ORDER_ATOMIC);
  var value_right = Blockly.Python.valueToCode(block, 'RIGHT', Blockly.Python.ORDER_ATOMIC);
  var value_count = Blockly.Python.valueToCode(block, 'COUNT', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_r + '.get_text('+ value_source_text + ', ' + value_left+', '+ value_right +', '+ value_count + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['del_chars'] = function(block) {
  var value_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
  var value_source_text = Blockly.Python.valueToCode(block, 'SOURCE_TEXT', Blockly.Python.ORDER_ATOMIC);
  var value_characters = Blockly.Python.valueToCode(block, 'CHARACTERS', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_r + '.del_chars('+ value_source_text + ', ' + value_characters +')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};



