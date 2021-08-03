const { BigNumber } = require("bignumber.js");

/* 
INPUT
    The filterObj method takes 2 parameters
    the first param : Object (req.body is used)
    the second param: Object that contain the properties that we want to extract from the first param
OUTPUT
    The filterObj method return an object that contains, wanted properties
*/
const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

/*
INPUT
    The montantEmprunterBrut method takes 2 parameters
    the first param : Montant de l'achat
    the second param: Fonds propres
OUTPUT
    The montantEmprunterBrut method return a number
*/
const montantEmprunterBrut = (montantAchat, fondsPropres) => {
  const fraisAchat = montantAchat > 50000 ? montantAchat * 0.1 : 0;
  return montantAchat + fraisAchat - fondsPropres;
};

/* 
INPUT
    The montantEmprunterNet method takes 1 parameter
    the first param : montantEmprunterBrut is need to calculate (Frais d'hypothèque, montant à emprunter net)
OUTPUT
    The montantEmprunterNet method return a number
    */
const montantEmprunterNet = (montantBrut) => {
  return montantBrut + montantBrut * 0.02;
};

/* 
INPUT
    The tauxInteretMensuel method takes 1 parameter
    the first param : tauxInteretAnnuel is need to calculate (Taux d'intérêt mensuel)
OUTPUT
    The tauxInteretMensuel method return a number
    */
const tauxInteretMensuel = (tauxInteretAnnuel) => {
  let resultNoRound = (Math.pow(1 + tauxInteretAnnuel / 100, 1 / 12) - 1) * 100;
  return resultNoRound.toFixed(3) * 1;
};

/* 
INPUT
    The monsualite method takes 3 parameters
    the first  param : capital 
    the second param : dureeCredit expressed in months
    the third  param : tauxInteretMensuel calculated with tauxInteretMensuel method
OUTPUT
    The monsualite method return a number
    */
const mensualite = (capital, dureeCredit, tauxInteretMensuel) => {
  let tauxInteretAnnuelPourcentage = tauxInteretMensuel / 100;
  let dividende =
    capital *
    tauxInteretAnnuelPourcentage *
    Math.pow(1 + tauxInteretAnnuelPourcentage, dureeCredit);
  let diviseur = Math.pow(1 + tauxInteretAnnuelPourcentage, dureeCredit) - 1;

  let resultNoRound = dividende / diviseur;
  return resultNoRound.toFixed(2) * 1;
};

/* 
INPUT
    The monsualite method takes 3 parameters
    the first  param : capital 
    the second param : dureeCredit expressed in months
    the third  param : tauxInteretMensuel calculated with tauxInteretMensuel method
OUTPUT
    The monsualite method return a number
    */

function financial(x) {
  return Number.parseFloat(x).toFixed(2) * 1;
}
const tableauAmortissement = (
  soldeDebutProp,
  mensualite,
  dureeCredit,
  tauxMensuel
) => {
  // Properties needed to generate the table : "tableauAmortissement"
  let tableauAmortissement = [];
  let interet, capitalRembourse, capitalRembourseRound, soldeFin;
  let soldeDebut = soldeDebutProp;
  // Generate the table
  for (let i = 0; i < dureeCredit; i++) {
    interet = (soldeDebut * tauxMensuel) / 100;
    capitalRembourse = mensualite - interet;
    capitalRembourseRound = financial(capitalRembourse);
    soldeFin = soldeDebut - capitalRembourseRound;

    tableauAmortissement[i] = {
      month: i + 1,
      soldeDebut,
      mensualite,
      interet: {
        interet,
        interetRound: financial(interet),
      },
      capitalRembourse: {
        capitalRembourse,
        capitalRembourseRound,
      },
      soldeFin,
    };

    soldeDebut = soldeFin;
  }
  return tableauAmortissement;
};

module.exports = {
  filterObj,
  montantEmprunterBrut,
  montantEmprunterNet,
  tauxInteretMensuel,
  mensualite,
  tableauAmortissement,
};
