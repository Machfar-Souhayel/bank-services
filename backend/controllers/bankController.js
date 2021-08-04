const catchAsync = require("./../utils/catchAsync");
const appError = require("./../utils/appError");
const bankHelper = require("./../helpers/bankHelper");

exports.creditTitle = catchAsync(async (req, res, next) => {
  // Filter out unwanted fields
  const filteredQuery = bankHelper.filterObj(
    req.query,
    "montantAchat",
    "fondsPropres",
    "dureeCredit",
    "tauxAnnuel"
  );

  if (!bankHelper.validateCreditTitleParams(filteredQuery)) {
    return next(new appError(`Invalid request body`, 400));
  }

  const { montantAchat, fondsPropres, dureeCredit, tauxAnnuel } = filteredQuery;
  const tauxMensuel = bankHelper.tauxInteretMensuel(tauxAnnuel);
  const montantBrut = bankHelper.montantEmprunterBrut(
    montantAchat,
    fondsPropres
  );
  const montantNet = bankHelper.montantEmprunterNet(montantBrut);
  const mensualite = bankHelper.mensualite(
    montantNet,
    dureeCredit,
    tauxMensuel
  );

  let tableauAmortissement = bankHelper.tableauAmortissement(
    montantNet,
    mensualite,
    dureeCredit,
    tauxMensuel
  );

  res.status(200).json({
    status: "success",
    data: {
      montant: {
        montantBrut,
        montantNet,
      },
      taux: {
        tauxAnnuel,
        tauxMensuel,
      },
      dureeCredit,
      mensualite,
      tableauAmortissement,
    },
  });
});
