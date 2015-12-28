// ***************************************************************************
//
// Here is defined our ISA set
//
// ***************************************************************************
var ISA = {};

ISA['NOP']  = { opcode:'00', parse_op:[p0, p0, p0] };
ISA['ADC']  = { opcode:'02', parse_op:[pr, pr, pr] };
ISA['ADCI'] = { opcode:'04', parse_op:[pr, pr, pn] };
ISA['ADD']  = { opcode:'06', parse_op:[pr, pr, pr] };
ISA['ADDI'] = { opcode:'08', parse_op:[pr, pr, pn] };
ISA['CP']   = { opcode:'0A', parse_op:[p0, pr, pr] };
ISA['CPI']  = { opcode:'0C', parse_op:[p0, pr, pn] };
ISA['DEC']  = { opcode:'0E', parse_op:[pr, pr, p0] };
ISA['INC']  = { opcode:'10', parse_op:[pr, pr, p0] };
ISA['SBC']  = { opcode:'12', parse_op:[pr, pr, pr] };
ISA['SBCI'] = { opcode:'14', parse_op:[pr, pr, pn] };
ISA['SUB']  = { opcode:'16', parse_op:[pr, pr, pr] };
ISA['SUBI'] = { opcode:'18', parse_op:[pr, pr, pn] };

ISA['AND']  = { opcode:'1A', parse_op:[pr, pr, pr] };
ISA['ANDI'] = { opcode:'1D', parse_op:[pr, pr, pn] };
ISA['OR']   = { opcode:'20', parse_op:[pr, pr, pr] };
ISA['ORI']  = { opcode:'23', parse_op:[pr, pr, pn] };
ISA['XOR']  = { opcode:'26', parse_op:[pr, pr, pr] };
ISA['XORI'] = { opcode:'29', parse_op:[pr, pr, pn] };

ISA['RL']   = { opcode:'2C', parse_op:[pr, pr, p0] };
ISA['RLD']  = { opcode:'2E', parse_op:[pr, pr, p0] };
ISA['RR']   = { opcode:'30', parse_op:[pr, pr, p0] };
ISA['RRD']  = { opcode:'32', parse_op:[pr, pr, p0] };
ISA['SHL']  = { opcode:'34', parse_op:[pr, pr, p0] };
ISA['SHR']  = { opcode:'36', parse_op:[pr, pr, p0] };

ISA['SCF']  = { opcode:'3A', parse_op:[p0, p0, p0] };
ISA['HLT']  = { opcode:'3C', parse_op:[p0, p0, p0] };
ISA['PAI']  = { opcode:'3D', parse_op:[p0, p0, pn] };
ISA['PAR']  = { opcode:'3F', parse_op:[p0, p0, pr] };
ISA['PARM'] = { opcode:'41', parse_op:[p0, p0, pri] };
ISA['PARC'] = { opcode:'43', parse_op:[p0, p0, pri] };
ISA['PARD'] = { opcode:'45', parse_op:[p0, p0, pri] };
ISA['PARE'] = { opcode:'47', parse_op:[p0, p0, pri] };
ISA['PARF'] = { opcode:'49', parse_op:[p0, p0, pri] };

ISA['EXX']  = { opcode:'4B', parse_op:[p0, p0, p0] };
ISA['INV']  = { opcode:'4D', parse_op:[pr, p0, pr] };
ISA['LD']   = { opcode:'4F', parse_op:[pr, p0, pr] };
ISA['LDI']  = { opcode:'51', parse_op:[pr, p0, pn] };

ISA['LDA']  = { opcode:'53', parse_op:[pr, p0, pni] };
ISA['LDAC'] = { opcode:'55', parse_op:[pr, p0, pni] };
ISA['LDAD'] = { opcode:'57', parse_op:[pr, p0, pni] };
ISA['LDAE'] = { opcode:'59', parse_op:[pr, p0, pni] };
ISA['LDAF'] = { opcode:'5B', parse_op:[pr, p0, pni] };
ISA['LDR']  = { opcode:'5D', parse_op:[pr, p0, pri] };
ISA['LDRC'] = { opcode:'5F', parse_op:[pr, p0, pri] };
ISA['LDRD'] = { opcode:'61', parse_op:[pr, p0, pri] };
ISA['LDRE'] = { opcode:'63', parse_op:[pr, p0, pri] };
ISA['LDRF'] = { opcode:'65', parse_op:[pr, p0, pri] };
ISA['STA']  = { opcode:'67', parse_op:[p0, pr, pni] };
ISA['STAC'] = { opcode:'69', parse_op:[p0, pr, pni] };
ISA['STAD'] = { opcode:'6B', parse_op:[p0, pr, pni] };
ISA['STAE'] = { opcode:'6D', parse_op:[p0, pr, pni] };
ISA['STAF'] = { opcode:'6F', parse_op:[p0, pr, pni] };
ISA['STR']  = { opcode:'71', parse_op:[p0, pr, pri] };
ISA['STRC'] = { opcode:'73', parse_op:[p0, pr, pri] };
ISA['STRD'] = { opcode:'75', parse_op:[p0, pr, pri] };
ISA['STRE'] = { opcode:'77', parse_op:[p0, pr, pri] };
ISA['STRF'] = { opcode:'79', parse_op:[p0, pr, pri] };

ISA['JP']   = { opcode:'7B', parse_op:[p0, p0, pn] };
ISA['JPN']  = { opcode:'7D', parse_op:[p0, p0, pn] };
ISA['JPP']  = { opcode:'7F', parse_op:[p0, p0, pn] };
ISA['JPZ']  = { opcode:'81', parse_op:[p0, p0, pn] };
ISA['JPNZ'] = { opcode:'83', parse_op:[p0, p0, pn] };
ISA['JPPO'] = { opcode:'85', parse_op:[p0, p0, pn] };
ISA['JPNO'] = { opcode:'87', parse_op:[p0, p0, pn] };
ISA['JPC']  = { opcode:'89', parse_op:[p0, p0, pn] };
ISA['JPNC'] = { opcode:'8B', parse_op:[p0, p0, pn] };

ISA['JR']   = { opcode:'8D', parse_op:[p0, p0, pn] };
ISA['JRN']  = { opcode:'8F', parse_op:[p0, p0, pn] };
ISA['JRP']  = { opcode:'91', parse_op:[p0, p0, pn] };
ISA['JRZ']  = { opcode:'93', parse_op:[p0, p0, pn] };
ISA['JRNZ'] = { opcode:'95', parse_op:[p0, p0, pn] };
ISA['JRPO'] = { opcode:'97', parse_op:[p0, p0, pn] };
ISA['JRNO'] = { opcode:'99', parse_op:[p0, p0, pn] };
ISA['JRC']  = { opcode:'9B', parse_op:[p0, p0, pn] };
ISA['JRNC'] = { opcode:'9D', parse_op:[p0, p0, pn] };

ISA['LDSP'] = { opcode:'9F', parse_op:[p0, p0, p0] };
ISA['POP']  = { opcode:'A1', parse_op:[pr, p0, p0] };
ISA['PUSH'] = { opcode:'A4', parse_op:[p0, pr, p0] };
ISA['POPF'] = { opcode:'A7', parse_op:[p0, p0, p0] };
ISA['PUSHF']= { opcode:'AA', parse_op:[p0, p0, p0] };

ISA['CALL'] = { opcode:'AD', parse_op:[p0, p0, pn] };
ISA['RET']  = { opcode:'B1', parse_op:[p0, p0, p0] };
ISA['JPM']  = { opcode:'B4', parse_op:[p0, p0, pri] };
ISA['JPR']  = { opcode:'B6', parse_op:[p0, p0, pr] };


// Ignore argument
function p0(reg) { return 0; }

// Parse a 16 bit number
function pn(reg) {

  var id = parseInt(reg.trim());
  if (!isNaN(id) && id >= 0 && id <= 0xFFFF)
      return id;
}

// Parse a register
function pr(reg) {

  reg = reg.trim()
  if (reg.length == 2 && reg[0] == 'R')
    return parseInt(reg[1], 16);
}

// Parse an indirect register
function pri(reg) {

  reg = reg.trim()
  if (reg.length > 2 && reg[0] == '(' && reg[reg.length - 1] == ')')
    return pr(reg.substring(1, reg.length - 1));
}

// Parse an indirect number
function pni(reg) {

  reg = reg.trim()
  if (reg.length > 2 && reg[0] == '(' && reg[reg.length - 1] == ')')
    return pn(reg.substring(1, reg.length - 1));
}


// Our main function, parse an instruction and returns the corresponding code. This
// function is the only one called from outside this module.
function parse2(m, d, a, l) {

  var Shifts = [4, 4, 16];

  var code = String(m).trim().toUpperCase();
  var op = String(d).toUpperCase().split(',');
  var addr = String(a).trim().toUpperCase();
  //var labels = String(Array(l)[0]).split(',');

  if (!(code in ISA))
    return '-99';

  var ins = 0, idx = 0;

  ISA[code].parse_op.forEach(function(fun, pos) {

    ins = (ins << Shifts[pos]) + fun(op[idx]);

    if (fun != p0)
       idx = idx + 1;
  })

  return ISA[code].opcode + ('000000' + ins.toString(16).toUpperCase()).substr(-6);
};
