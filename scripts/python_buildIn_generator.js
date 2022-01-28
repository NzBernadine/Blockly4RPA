Blockly.Python['abs'] = function(block) {
  var value_number = Blockly.Python.valueToCode(block, 'NUMBER', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "abs(" + value_number + ")";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_FUNCTION_CALL, Blockly.Python.ORDER_MEMBER];
};


Blockly.Python['enumarate_block'] = function(block) {
  var value_list = Blockly.Python.valueToCode(block, 'LIST', Blockly.Python.ORDER_ATOMIC);
  var value_start = Blockly.Python.valueToCode(block, 'START', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "enumerate("+value_list+","+value_start+")";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['filter'] = function(block) {
  var value_funtion = Blockly.Python.valueToCode(block, 'FUNTION', Blockly.Python.ORDER_ATOMIC);
  var value_list = Blockly.Python.valueToCode(block, 'LIST', Blockly.Python.ORDER_ATOMIC);
  var code = "filter("+value_funtion+","+ value_list+")";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['float_block'] = function(block) {
  var value_object = Blockly.Python.valueToCode(block, 'OBJECT', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'float('+value_object+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['int_block'] = function(block) {
  var value_object = Blockly.Python.valueToCode(block, 'OBJECT', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'int('+value_object+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['insitanceof_block'] = function(block) {
  var value_object = Blockly.Python.valueToCode(block, 'OBJECT', Blockly.Python.ORDER_ATOMIC);
  var value_function = Blockly.Python.valueToCode(block, 'FUNCTION', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'isinstance(' + value_object + ',' + value_function +')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['min_block'] = function(block) {
  var value_list = Blockly.Python.valueToCode(block, 'LIST', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'min('+value_list+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};


Blockly.Python['maximum_block'] = function(block) {
  var value_list = Blockly.Python.valueToCode(block, 'LIST', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'max('+value_list+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['connect_block'] = function(block) {
  var value_connector = Blockly.Python.valueToCode(block, 'CONNECTOR', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_connector+'\n';
  return  code;
};


Blockly.Python['open_file'] = function(block) {
  var value_file_name = Blockly.Python.valueToCode(block, 'FILE_NAME', Blockly.Python.ORDER_ATOMIC);
  var dropdown_mode = block.getFieldValue('MODE');
  // TODO: Assemble Python into code variable.
  var code = 'open('+value_file_name+','+dropdown_mode+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['power'] = function(block) {
  var value_base = Blockly.Python.valueToCode(block, 'BASE', Blockly.Python.ORDER_ATOMIC);
  var value_exp = Blockly.Python.valueToCode(block, 'EXP', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'pow('+value_base+','+ value_exp+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['range'] = function(block) {
  var value_start = Blockly.Python.valueToCode(block, 'START', Blockly.Python.ORDER_ATOMIC);
  var value_stop = Blockly.Python.valueToCode(block, 'STOP', Blockly.Python.ORDER_ATOMIC);
  var value_step = Blockly.Python.valueToCode(block, 'STEP', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'range('+value_start+','+ value_stop+','+ value_step+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['round_block'] = function(block) {
  var value_number = Blockly.Python.valueToCode(block, 'NUMBER', Blockly.Python.ORDER_ATOMIC);
  var value_digit = Blockly.Python.valueToCode(block, 'DIGIT', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'round('+value_number+','+ value_digit+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['reversese_block'] = function(block) {
  var value_list = Blockly.Python.valueToCode(block, 'LIST', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'reversed('+value_list+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['string_block'] = function(block) {
  var value_object = Blockly.Python.valueToCode(block, 'OBJECT', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'str('+ value_object + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['sum_block'] = function(block) {
  var value_list = Blockly.Python.valueToCode(block, 'LIST', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'sum('+value_list+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['sort_block'] = function(block) {
  var value_list = Blockly.Python.valueToCode(block, 'LIST', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'sorted('+value_list+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python["create_dict"] = function(a){

  var b = 1,
     c = "{";
     do {
         var d = Blockly.Python.valueToCode(a, "KEY" + b, Blockly.Python.ORDER_NONE)|| "";
         var e = Blockly.Python.valueToCode(a, "VAL" + b,  Blockly.Python.ORDER_NONE)|| "";
         Blockly.Python.STATEMENT_SUFFIX && (e = Blockly.Python.prefixLines(Blockly.Python.injectId(Blockly.Python.STATEMENT_SUFFIX, a), Blockly.Python.INDENT) + e);
         if(b>1){
         c += ",";
         }
         c += d+":"+e;
         ++b;
     } while (a.getInput("KEY" + b));
     c += "}";
     if ((e != "") && (d != "")){
         return [c, Blockly.Python.ORDER_FUNCTION_CALL];
     }else{
         return ["None", Blockly.Python.ORDER_FUNCTION_CALL];
     }
 }

// Blockly.Python['upper_block'] = function(block) {
//   var value_word = Blockly.Python.valueToCode(block, 'WORD', Blockly.Python.ORDER_ATOMIC);
//   // TODO: Assemble Python into code variable.
//   var code = '...';
//   // TODO: Change ORDER_NONE to the correct strength.
//   return [code, Blockly.Python.ORDER_NONE];
// };

// Blockly.Python['join_block'] = function(block) {
//   var variable_name = Blockly.Python.nameDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
//   var value_value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC);
//   // TODO: Assemble Python into code variable.
//   var code = '...';
//   // TODO: Change ORDER_NONE to the correct strength.
//   return [code, Blockly.Python.ORDER_NONE];
// };

// Blockly.Python['find_block'] = function(block) {
//   var value_value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC);
//   var value_start = Blockly.Python.valueToCode(block, 'START', Blockly.Python.ORDER_ATOMIC);
//   var value_stop = Blockly.Python.valueToCode(block, 'STOP', Blockly.Python.ORDER_ATOMIC);
//   var value_string = Blockly.Python.valueToCode(block, 'STRING', Blockly.Python.ORDER_ATOMIC);
//   // TODO: Assemble Python into code variable.
//   var code = '...';
//   // TODO: Change ORDER_NONE to the correct strength.
//   return [code, Blockly.Python.ORDER_NONE];
// };

// Blockly.Python['replace_block'] = function(block) {
//   var value_oldvalue = Blockly.Python.valueToCode(block, 'OLDVALUE', Blockly.Python.ORDER_ATOMIC);
//   var value_newvalue = Blockly.Python.valueToCode(block, 'NEWVALUE', Blockly.Python.ORDER_ATOMIC);
//   var value_value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC);
//   // TODO: Assemble Python into code variable.
//   var code = '...';
//   // TODO: Change ORDER_NONE to the correct strength.
//   return [code, Blockly.Python.ORDER_NONE];
// };