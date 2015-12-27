var ISA = {};

// ***************************************************************************
//
// Here is defined our ISA set
//
// ***************************************************************************
ISA['NOP'] = { opcode:'00', parse_op:parse_op_0 };
ISA['ADC'] = { opcode:'02', parse_op:parse_op_3 };





// Parse a register menmonic and return the corresponding 4 bit number: R3 -> 03
function parse_reg(reg) {
  
  if (reg.length > 1 && reg[0] == 'R')
  {
    id = Number(reg.substr(1));
    if (!isNaN(id) && id >= 0 && id <= 15)
      return id; 
  }
}


// Parse instructions with no operands
function parse_op_0(op) {
  
  if (op.length == 0)
    return { type:'nop', data:[] };
}


// Parse instructions with 3 registers operand
function parse_op_3(op) {
  
  op = op.split(',');
  if (op.length == 3)
  {
    rd = parse_reg(op[0].trim());
    rf = parse_reg(op[1].trim());
    rs = parse_reg(op[2].trim());
    if (rd != undefined && rf != undefined && rs != undefined)
      return { type:'r3', data:[rd, rf, rs] };
  }
}


// Emit the assembly code for the given instruction
function emit(code, operands) {
  
  ins = ISA[code].opcode;
  
  if (operands.type == 'r3')
  {
    msb = '00' + Number(operands.data[0] * 4 + operands.data[1]).toString(16).toUpperCase();
    lsb = '0000' + Number(operands.data[2]).toString(16).toUpperCase();
    ins = ins + msb.substring(msb.length - 2) + lsb.substring(lsb.length - 4);
  }

  return ins;
};


// Our main function, parse an instructions and returns teh corresponding code. This function is the
// only one called from ouside this module.
function parse2(m, d, a, l) {
  
  var code = String(m).trim().toUpperCase();
  var op = String(d).toUpperCase();
  var addr = String(a).trim().toUpperCase();
  //var labels = String(Array(l)[0]).split(',');
  
  // Parse operands according to the instruction
  if (code in ISA)
  {
    operands = ISA[code].parse_op(op);
    if (operands != undefined)
        return emit(code, operands);
  }

  return '-99';
};
