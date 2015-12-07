function parse(m, d, a, l) {

  var code = String(m).trim().toUpperCase();
  var terms = String(d).toUpperCase().split(',');
  var addr = String(a).trim().toUpperCase();
  var labels = String(Array(l)[0]).split(',');
  var data = '00';
  var reg, regs, rd, ra, rb, imm, ofs;

  // Parse arguments
  if (terms.length > 0)
  {
    reg = terms[0].trim();
    if (reg[0] == '$')
        imm = '0' + reg.substring(1);

    else if (!isNaN(parseInt(reg)))
        imm = '0' + Number(reg).toString(16).toUpperCase();

    else if ('R0  R1  R2  R3'.indexOf(reg) != -1)
        rd = Number('R0  R1  R2  R3'.indexOf(reg) / 4);

    else
    {
        var arrayLength = labels.length;
        for (var i = 0; i < arrayLength; i += 2)
        {
          if (labels[i+1] != '' && labels[i] != '')
          {
              var idx = parseInt(labels[i],16);
              if (!isNaN(idx) && reg == labels[i+1].toUpperCase())
              {
                  ofs = idx - parseInt(addr,16);
                  break;
              }
          }
        }
        if (typeof(ofs) == "undefined")
          return 'No ref';
    }
  }

  if (terms.length > 1)
  {
    reg = terms[1].trim();
    if (reg[0] == '$')
        imm = '0' + reg.substring(1);

    else if (!isNaN(parseInt(reg)))
        imm = '0' + Number(reg).toString(16).toUpperCase();

    else if ('R0  R1  R2  R3'.indexOf(reg) != -1)
    {
        ra = Number('R0  R1  R2  R3'.indexOf(reg) / 4);
        regs = Number(rd * 4 + ra).toString(16).toUpperCase();
    }
    else
        return '-2';
  }

  if (terms.length > 2)
  {
      reg = terms[2].trim();
      if (reg[0] == '$')
          imm = '0' + reg.substring(1);

      else if (!isNaN(parseInt(reg)))
          imm = '0' + Number(reg).toString(16).toUpperCase();

      else if ('R0  R1  R2  R3'.indexOf(reg) != -1)
          rb = Number('R0  R1  R2  R3'.indexOf(reg) / 4);
  }

  if (terms.length > 3)
    return '-3';

  if (typeof(imm) != "undefined" && imm.length > 2)
      imm = imm.substring(1);

  // Instructions
  if (code == 'HALT')
      return '0000';

  else if (code == 'LD' && terms.length == 3 && typeof(imm) != "undefined")
      return '1' + regs + imm;

  else if (code == 'ST' && terms.length == 3 && typeof(imm) != "undefined")
      return '2' + regs + imm;

  else if (code == 'ADDI' && terms.length == 3 && typeof(imm) != "undefined")
      return '6' + regs + imm;

  else if (code == 'ADD' && terms.length == 3 && typeof(imm) == "undefined")
      return '3' + regs + rb + '0';

  else if (code == 'AND' && terms.length == 3 && typeof(imm) == "undefined")
      return '3' + regs + rb + '1';

  else if (code == 'OR' && terms.length == 3 && typeof(imm) == "undefined")
      return '3' + regs + rb + '2';

  else if (code == 'XOR' && terms.length == 3 && typeof(imm) == "undefined")
      return '3' + regs + rb + '3';

  else if (code == 'XNOR' && terms.length == 3 && typeof(imm) == "undefined")
      return '3' + regs + rb + '4';

  else if (code == 'SUB' && terms.length == 3 && typeof(imm) == "undefined")
      return '3' + regs + rb + '5';

  else if (code == 'SHL' && terms.length == 3 && typeof(imm) == "undefined")
      return '3' + regs + rb + '6';

  else if (code == 'SHR' && terms.length == 3 && typeof(imm) == "undefined")
      return '3' + regs + rb + '7';

  else if (code == 'ROL' && terms.length == 3 && typeof(imm) == "undefined")
      return '3' + regs + rb + '8';

  else if (code == 'ROR' && terms.length == 3 && typeof(imm) == "undefined")
      return '3' + regs + rb + '9';

  else if (code == 'ADD' && terms.length == 2 && typeof(imm) != "undefined")
      return '4' + Number(rd * 4 + 0).toString(16).toUpperCase() + imm;

  else if (code == 'AND' && terms.length == 2 && typeof(imm) != "undefined")
      return '4' + Number(rd * 4 + 1).toString(16).toUpperCase() + imm;

  else if (code == 'OR' && terms.length == 2 && typeof(imm) != "undefined")
      return '4' + Number(rd * 4 + 2).toString(16).toUpperCase() + imm;

  else if (code == 'XOR' && terms.length == 2 && typeof(imm) != "undefined")
      return '4' + Number(rd * 4 + 3).toString(16).toUpperCase() + imm;

  else if (code == 'SHL' && terms.length == 3 && typeof(imm) != "undefined")
      return '7' + Number(rd * 1024 + ra * 256 + 6 * 16 + (imm & 255)).toString(16).toUpperCase();

  else if (code == 'SHR' && terms.length == 3 && typeof(imm) != "undefined")
      return '7' + Number(rd * 1024 + ra * 256 + 7 * 16 + (imm & 255)).toString(16).toUpperCase();

  else if (code == 'ROL' && terms.length == 3 && typeof(imm) != "undefined")
      return '7' + Number(rd * 1024 + ra * 256 + 8 * 16 + (imm & 255)).toString(16).toUpperCase();

  else if (code == 'ROR' && terms.length == 3 && typeof(imm) != "undefined")
      return '7' + Number(rd * 1024 + ra * 256 + 9 * 16 + (imm & 255)).toString(16).toUpperCase();

  else if (code == 'TEST' && terms.length == 2 && typeof(imm) != "undefined")
      return '8' + Number(rd * 4 + 1).toString(16).toUpperCase() + imm;

  else if (code == 'BEQ' && terms.length == 1 && typeof(ofs) != "undefined")
  {
      var addr = (256 + ofs).toString(16).toUpperCase();
      if (addr.length > 2)
          addr = addr.substring(1);
      return '5' + '0' + addr;
  }
  else if (code == 'BNE' && terms.length == 1 && typeof(ofs) != "undefined")
  {
      var addr = (256 + ofs).toString(16).toUpperCase();
      if (addr.length > 2)
          addr = addr.substring(1);
      return '5' + '1' + addr;
  }
  else if (code == 'BCS' && terms.length == 1 && typeof(ofs) != "undefined")
  {
      var addr = (256 + ofs).toString(16).toUpperCase();
      if (addr.length > 2)
          addr = addr.substring(1);
      return '5' + '2' + addr;
  }
  else if (code == 'BCC' && terms.length == 1 && typeof(ofs) != "undefined")
  {
      var addr = (256 + ofs).toString(16).toUpperCase();
      if (addr.length > 2)
          addr = addr.substring(1);
      return '5' + '3' + addr;
  }


  // Alias
  else if (code == 'LD' && terms.length == 2 && typeof(imm) != "undefined")
      return parse('LD', 'R' + rd + ',R0,$' + imm);

  else if (code == 'ST' && terms.length == 2 && typeof(imm) != "undefined")
      return parse('ST', 'R' + rd + ',R0,$' + imm);

  else if (code == 'ST' && terms.length == 2 && typeof(imm) == "undefined")
      return parse('ST', 'R' + rd + ',R' + ra + ',$0');

  else if (code == 'MOV' && terms.length == 2 && typeof(imm) == "undefined")
    return parse('ADD', 'R' + rd + ',R' + ra + ',R0');

  else if (code == 'MOV' && terms.length == 2 && typeof(imm) != "undefined")
    return parse('ADDI', 'R' + rd + ',R0,$' + imm);

  else if (code == 'NOT' && terms.length == 1 && typeof(imm) == "undefined")
    return parse('XOR', 'R' + rd + ',$FF');

  else if (code == 'CLR' && terms.length == 1 && typeof(imm) == "undefined")
    return parse('AND', 'R' + rd + ',$00');

  else if (code == 'INC' && terms.length == 1 && typeof(imm) == "undefined")
    return parse('ADD', 'R' + rd + ',$01');

  else if (code == 'DEC' && terms.length == 1 && typeof(imm) == "undefined")
    return parse('ADD', 'R' + rd + ',$FF');

  else if (code == 'SUB' && terms.length == 2 && typeof(imm) != "undefined")
    return parse('ADD', 'R' + rd + ',$' + (256 - parseInt(imm, 16)).toString(16).toUpperCase()); // Two's complement

  else if (code == 'CMP' && terms.length == 2 && typeof(imm) == "undefined")
    return parse('SUB', 'R0,R' + rd + ',R' + ra);

  else if (code == 'CMP' && terms.length == 2 && typeof(imm) != "undefined")
    return parse('ADDI', 'R0,R' + rd + ',$' + (256 - parseInt(imm, 16)).toString(16).toUpperCase()); // Two's complement

  else if ((code == 'SHL' || code == 'SHR' || code == 'ROL' || code == 'ROR') && terms.length == 2 && typeof(imm) != "undefined")
    return parse(code, 'R' + rd + ',R' + rd + ',$' + imm);

  return '-99';
};
