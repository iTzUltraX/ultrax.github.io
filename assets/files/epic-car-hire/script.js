/*
 *  SYNTAX
 *
 *  Comment Syntax:
 *
 *  <name>(<id>)
 *
 */

// tesla model x (tmx)

const tmx = document.getElementById("tmx");
if (tmx) {
  tmx.onclick = function tmxredir() {
    location.href = "/car/TeslaModelX.html";
  };
}

// Kia Niro (kia_niro)

const kia_niro = document.getElementById("kia_niro");
if (kia_niro) {
  kia_niro.onclick = function kia_niro_redir() {
    location.href = "/car/KIA_Niro.html";
  };
}

// BMW 3 Series (bmw_3s)

const bmw_3s = document.getElementById("bmw_3s");
if (bmw_3s) {
  bmw_3s.onclick = function bmw_3s_redir() {
    location.href = "/car/BMW_3_Series.html";
  };
}

// Toyota Prius (toyo_pri)

const toyo_pri = document.getElementById("toyo_pri");
if (toyo_pri) {
  toyo_pri.onclick = function toyo_pri_redir() {
    location.href = "/car/Toyota_Prius.html";
  };
}

// Mercedes-Benz E-Class (benz_ec)

const benz_ec = document.getElementById("benz_ec");
if (benz_ec) {
  benz_ec.onclick = function benz_ec_redir() {
    location.href = "/car/Mercedes_Benz_E_Class.html";
  };
}

//Mercedes-Benz S-Class (benz_sc)

const benz_sc = document.getElementById("benz_sc");
if (benz_sc) {
  benz_sc.onclick = function benz_sc_redir() {
    location.href = "/car/Mercedes_Benz_S_Class.html";
  };
}
