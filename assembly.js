// ***************************************************************************
//
// Here is defined our ISA set
//
// ***************************************************************************
var ISA = {}

ISA['NOP']  = { opcode:'00', format:[p0, p0, p0] }
ISA['ADC']  = { opcode:'02', format:[pr, pr, pr] }
ISA['ADCI'] = { opcode:'04', format:[pr, pr, pn] }
ISA['ADD']  = { opcode:'06', format:[pr, pr, pr] }
ISA['ADDI'] = { opcode:'08', format:[pr, pr, pn] }
ISA['CP']   = { opcode:'0A', format:[p0, pr, pr] }
ISA['CPI']  = { opcode:'0C', format:[p0, pr, pn] }
ISA['DEC']  = { opcode:'0E', format:[pr, pr, p0] }
ISA['INC']  = { opcode:'10', format:[pr, pr, p0] }
ISA['SBC']  = { opcode:'12', format:[pr, pr, pr] }
ISA['SBCI'] = { opcode:'14', format:[pr, pr, pn] }
ISA['SUB']  = { opcode:'16', format:[pr, pr, pr] }
ISA['SUBI'] = { opcode:'18', format:[pr, pr, pn] }

ISA['AND']  = { opcode:'1A', format:[pr, pr, pr] }
ISA['ANDI'] = { opcode:'1D', format:[pr, pr, pn] }
ISA['OR']   = { opcode:'20', format:[pr, pr, pr] }
ISA['ORI']  = { opcode:'23', format:[pr, pr, pn] }
ISA['XOR']  = { opcode:'26', format:[pr, pr, pr] }
ISA['XORI'] = { opcode:'29', format:[pr, pr, pn] }

ISA['RL']   = { opcode:'2C', format:[pr, pr, p0] }
ISA['RLD']  = { opcode:'2E', format:[pr, pr, p0] }
ISA['RR']   = { opcode:'30', format:[pr, pr, p0] }
ISA['RRD']  = { opcode:'32', format:[pr, pr, p0] }
ISA['SHL']  = { opcode:'34', format:[pr, pr, p0] }
ISA['SHR']  = { opcode:'36', format:[pr, pr, p0] }

ISA['SCF']  = { opcode:'3A', format:[p0, p0, p0] }
ISA['HLT']  = { opcode:'3C', format:[p0, p0, p0] }
ISA['PAI']  = { opcode:'3D', format:[p0, p0, pn] }
ISA['PAR']  = { opcode:'3F', format:[p0, p0, pr] }
ISA['PARM'] = { opcode:'41', format:[p0, p0, pri] }
ISA['PARC'] = { opcode:'43', format:[p0, p0, pri] }
ISA['PARD'] = { opcode:'45', format:[p0, p0, pri] }
ISA['PARE'] = { opcode:'47', format:[p0, p0, pri] }
ISA['PARF'] = { opcode:'49', format:[p0, p0, pri] }

ISA['EXX']  = { opcode:'4B', format:[p0, p0, p0] }
ISA['INV']  = { opcode:'4D', format:[pr, p0, pr] }
ISA['LD']   = { opcode:'4F', format:[pr, p0, pr] }
ISA['LDI']  = { opcode:'51', format:[pr, p0, pn] }

ISA['LDA']  = { opcode:'53', format:[pr, p0, pai] }
ISA['LDAC'] = { opcode:'55', format:[pr, p0, pai] }
ISA['LDAD'] = { opcode:'57', format:[pr, p0, pai] }
ISA['LDAE'] = { opcode:'59', format:[pr, p0, pai] }
ISA['LDAF'] = { opcode:'5B', format:[pr, p0, pai] }
ISA['LDR']  = { opcode:'5D', format:[pr, p0, pri] }
ISA['LDRC'] = { opcode:'5F', format:[pr, p0, pri] }
ISA['LDRD'] = { opcode:'61', format:[pr, p0, pri] }
ISA['LDRE'] = { opcode:'63', format:[pr, p0, pri] }
ISA['LDRF'] = { opcode:'65', format:[pr, p0, pri] }
ISA['STA']  = { opcode:'67', format:[p0, pr, pai] }
ISA['STAC'] = { opcode:'69', format:[p0, pr, pai] }
ISA['STAD'] = { opcode:'6B', format:[p0, pr, pai] }
ISA['STAE'] = { opcode:'6D', format:[p0, pr, pai] }
ISA['STAF'] = { opcode:'6F', format:[p0, pr, pai] }
ISA['STR']  = { opcode:'71', format:[p0, pr, pri] }
ISA['STRC'] = { opcode:'73', format:[p0, pr, pri] }
ISA['STRD'] = { opcode:'75', format:[p0, pr, pri] }
ISA['STRE'] = { opcode:'77', format:[p0, pr, pri] }
ISA['STRF'] = { opcode:'79', format:[p0, pr, pri] }

ISA['JP']   = { opcode:'7B', format:[p0, p0, pa] }
ISA['JPN']  = { opcode:'7D', format:[p0, p0, pa] }
ISA['JPP']  = { opcode:'7F', format:[p0, p0, pa] }
ISA['JPZ']  = { opcode:'81', format:[p0, p0, pa] }
ISA['JPNZ'] = { opcode:'83', format:[p0, p0, pa] }
ISA['JPPO'] = { opcode:'85', format:[p0, p0, pa] }
ISA['JPNO'] = { opcode:'87', format:[p0, p0, pa] }
ISA['JPC']  = { opcode:'89', format:[p0, p0, pa] }
ISA['JPNC'] = { opcode:'8B', format:[p0, p0, pa] }

ISA['JR']   = { opcode:'8D', format:[p0, p0, po] }
ISA['JRN']  = { opcode:'8F', format:[p0, p0, po] }
ISA['JRP']  = { opcode:'91', format:[p0, p0, po] }
ISA['JRZ']  = { opcode:'93', format:[p0, p0, po] }
ISA['JRNZ'] = { opcode:'95', format:[p0, p0, po] }
ISA['JRPO'] = { opcode:'97', format:[p0, p0, po] }
ISA['JRNO'] = { opcode:'99', format:[p0, p0, po] }
ISA['JRC']  = { opcode:'9B', format:[p0, p0, po] }
ISA['JRNC'] = { opcode:'9D', format:[p0, p0, po] }

ISA['LDSP'] = { opcode:'9F', format:[p0, p0, p0] }
ISA['POP']  = { opcode:'A1', format:[pr, p0, p0] }
ISA['PUSH'] = { opcode:'A4', format:[p0, pr, p0] }
ISA['POPF'] = { opcode:'A7', format:[p0, p0, p0] }
ISA['PUSHF']= { opcode:'AA', format:[p0, p0, p0] }

ISA['CALL'] = { opcode:'AD', format:[p0, p0, pa] }
ISA['RET']  = { opcode:'B1', format:[p0, p0, p0] }
ISA['JPM']  = { opcode:'B4', format:[p0, p0, pri] }
ISA['JPR']  = { opcode:'B6', format:[p0, p0, pr] }

ISA['OTA']  = { opcode:'B8', format:[pp, p0, pai] }
ISA['OTAC'] = { opcode:'BA', format:[pp, p0, pai] }
ISA['OTAD'] = { opcode:'BC', format:[pp, p0, pai] }
ISA['OTAE'] = { opcode:'BE', format:[pp, p0, pai] }
ISA['OTAF'] = { opcode:'C0', format:[pp, p0, pai] }
ISA['OUT']  = { opcode:'C2', format:[pp, pr, p0] }
ISA['OTI']  = { opcode:'C4', format:[pp, p0, pn] }
ISA['OTR']  = { opcode:'C6', format:[pp, p0, pri] }
ISA['OTRC'] = { opcode:'C8', format:[pp, p0, pri] }
ISA['OTRD'] = { opcode:'CA', format:[pp, p0, pri] }
ISA['OTRE'] = { opcode:'CC', format:[pp, p0, pri] }
ISA['OTRF'] = { opcode:'CE', format:[pp, p0, pri] }

ISA['INA']  = { opcode:'D0', format:[p0, pp, pai] }
ISA['INAC'] = { opcode:'D2', format:[p0, pp, pai] }
ISA['INAD'] = { opcode:'D4', format:[p0, pp, pai] }
ISA['INAE'] = { opcode:'D6', format:[p0, pp, pai] }
ISA['INAF'] = { opcode:'D8', format:[p0, pp, pai] }
ISA['IN']   = { opcode:'DA', format:[pn, pp, p0] }
ISA['INR']  = { opcode:'DC', format:[p0, pp, pri] }
ISA['INRC'] = { opcode:'DE', format:[p0, pp, pri] }
ISA['INRD'] = { opcode:'E0', format:[p0, pp, pri] }
ISA['INRE'] = { opcode:'E2', format:[p0, pp, pri] }
ISA['INRF'] = { opcode:'E4', format:[p0, pp, pri] }

ISA['LPRC'] = { opcode:'E6', format:[pn, p0, p0] }
ISA['LPRD'] = { opcode:'E8', format:[pn, p0, p0] }
ISA['LPRE'] = { opcode:'EA', format:[pn, p0, p0] }
ISA['LPRF'] = { opcode:'EC', format:[pn, p0, p0] }
ISA['SPRC'] = { opcode:'EE', format:[p0, pn, pn] }
ISA['SPRD'] = { opcode:'F0', format:[p0, pn, pn] }
ISA['SPRE'] = { opcode:'F2', format:[p0, pn, pn] }
ISA['SPRF'] = { opcode:'F4', format:[p0, pn, pn] }

var LABELS = [] // A comma separated string like address0,label0,address1,label1,...
var MYADDR      // A number with current instruction memory address

// Look-up a given label and return the address if found. Comparison
// is case-insensitive.
function lookup(label) {
  for (var i = 1; i < LABELS.length; i += 2)
    if (LABELS[i].toUpperCase() == label.toUpperCase())
       return parseInt(LABELS[i-1], 16)
}

// Parse and indirect call to function 'fun'
function indirect(fun, reg) {
  reg = reg.trim()
  if (reg.length > 2 && reg[0] == '(' && reg[reg.length - 1] == ')')
    return fun(reg.substring(1, reg.length - 1))
}

// Ignore argument
function p0(reg) { return 0 }

// Parse a 16 bit number
function pn(reg) {
  var id = parseInt(reg)
  if (!isNaN(id))
      return id & 0xFFFF
}

// Parse a register
function pr(reg) {
  reg = reg.trim()
  if (reg.length == 2 && reg[0] == 'R')
    return parseInt(reg[1], 16)
}

// Parse a port number (0-15)
function pp(reg) {
  reg = reg.trim()
  if (reg.length == 1)
    return parseInt(reg, 16)
}

// Parse an absolute address out of a number or a label
function pa(reg) {
  var addr = pn(reg)
  if (!isNaN(addr))
    return addr
  
  return lookup(reg.trim())
}

// Parse a relative offset out of a number or a label
function po(reg) {
  var addr = pa(reg)
  if (!isNaN(addr))
    return pn(addr - MYADDR)
}

// Parse indirect calls to corresponding functions
function pri(reg) { return indirect(pr, reg) }
function pni(reg) { return indirect(pn, reg) }
function pai(reg) { return indirect(pa, reg) }

// Our main function, parse an instruction and returns the corresponding code.
// This function is the only one called from outside this module.
function parse2(m, d, a, l) {

  var Shifts = [4, 4, 16]

  var code = String(m).trim().toUpperCase()
  var op = String(d).trim().toUpperCase().split(',')
  var addr = String(a).trim().toUpperCase()
  
  if (!(code in ISA))
    return '-99'
  
  LABELS = l.split(',')
  MYADDR = parseInt(addr, 16)

  var ins = 0, idx = 0
  ISA[code].format.forEach(function(fun, pos) {

    ins = (ins << Shifts[pos]) + fun(op[idx])

    if (fun != p0)
       idx += 1
  })

  if (idx < op.length && op[0] != '') // Split() returns non-empty array
     return 'too many arguments'

  return ISA[code].opcode + ('000000' + ins.toString(16).toUpperCase()).substr(-6)
}
