export const resultado = (formData) => {
  let isOlder = parseInt(formData.isOlder, 10);
  let isDisabled = parseInt(formData.isDisabled, 10);
  let isBeneficiary = parseInt(formData.isBeneficiary, 10);
  let isCadiunicoOrCras = parseInt(formData.isCadiunicoOrCras, 10);
  let spentMedicine = parseInt(formData.spentMedicine, 10);
  let incomes = formData.incomes.map((str) => parseInt(str, 10));
  let qtdMembers = 1 + incomes.length;
  let sumIncomes = incomes.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  let perCapitaIncome =
    Math.round(((sumIncomes - spentMedicine) / qtdMembers) * 100) / 100;
  let itemMembro = formData.itemMembro.map((str) => parseInt(str, 10));
  let sumItemMembro = itemMembro.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  let minimumSalary = 1100;

  let fourthPart = minimumSalary / 4;
  let halfPart = minimumSalary / 2;

  let positiveTitle =
    "Você tem grandes chances de conseguir o benefício sem precisar de ação judicial. Junte os documentos e faça o requerimento do benefício junto ao INSS.";

  let negativeTitle =
    "Infelizmente parece que você não tem direito ao benefício da LOAS nesse momento. Os seguinte pontos te impedem (podendo existir outros):";

  if (
    !isDisabled &&
    isOlder &&
    sumIncomes / qtdMembers < fourthPart &&
    !isBeneficiary &&
    isCadiunicoOrCras
  ) {
    return {
      id: 1,
      result: "positive",
      title: positiveTitle,
      description: `Mantenha atualizado o seu registro no CRAS / CADUNICO, pois será necessário para a concessão e 
      manutenção do seu benefício. Nunca declare que mora sozinho(a) se não é essa a verdade, 
      pois isso pode lhe trazer sérios problemas.`,
      isOlder: isOlder,
      isDisabled: isDisabled,
      isBeneficiary: isBeneficiary,
      incomes: incomes,
      isCadiunicoOrCras: isCadiunicoOrCras,
      qtdMembers: qtdMembers,
      sumIncomes: sumIncomes,
      spentMedicine: spentMedicine,
      perCapitaIncome: perCapitaIncome,
    };
  }

  // 2º
  if (
    !isDisabled &&
    isOlder &&
    sumIncomes / qtdMembers < fourthPart &&
    !isBeneficiary &&
    !isCadiunicoOrCras
  ) {
    return {
      id: 2,
      result: "positive",
      title: positiveTitle,
      description: `Faça o seu cadastro no CRAS ou CADUNICO e o mantenha atualizado, pois será necessário 
      para a concessão e manutenção do seu benefício. Nunca declare que mora sozinho(a) se não é essa a verdade, 
      pois isso pode lhe trazer sérios problemas.`,
      isOlder: isOlder,
      isDisabled: isDisabled,
      isBeneficiary: isBeneficiary,
      incomes: incomes,
      isCadiunicoOrCras: isCadiunicoOrCras,
      qtdMembers: qtdMembers,
      sumIncomes: sumIncomes,
      spentMedicine: spentMedicine,
      perCapitaIncome: perCapitaIncome,
    };
  }

  // 3º
  if (
    isDisabled &&
    (sumIncomes - spentMedicine) / qtdMembers < fourthPart &&
    !isBeneficiary &&
    !isCadiunicoOrCras
  ) {
    return {
      id: 3,
      result: "positive",
      title: positiveTitle,
      description: `Faça o seu cadastro no CRAS ou CADUNICO e o mantenha atualizado, pois será necessário para a 
      concessão e manutenção do seu benefício. Nunca declare que mora sozinho(a) se não é essa a verdade, 
      pois isso pode lhe trazer sérios problemas.`,
      isOlder: isOlder,
      isDisabled: isDisabled,
      isBeneficiary: isBeneficiary,
      incomes: incomes,
      isCadiunicoOrCras: isCadiunicoOrCras,
      qtdMembers: qtdMembers,
      sumIncomes: sumIncomes,
      spentMedicine: spentMedicine,
      perCapitaIncome: perCapitaIncome,
    };
  }

  // 4º
  if (
    isDisabled &&
    (sumIncomes - spentMedicine) / qtdMembers < fourthPart &&
    !isBeneficiary &&
    isCadiunicoOrCras
  ) {
    return {
      id: 4,
      result: "positive",
      title: positiveTitle,
      description: `Mantenha atualizado o seu registro no CRAS / CADUNICO, pois será necessário para a 
      concessão e manutenção do seu benefício. Nunca declare que mora sozinho(a) se não é essa a verdade, 
      pois isso pode lhe trazer sérios problemas.`,
      isOlder: isOlder,
      isDisabled: isDisabled,
      isBeneficiary: isBeneficiary,
      incomes: incomes,
      isCadiunicoOrCras: isCadiunicoOrCras,
      qtdMembers: qtdMembers,
      sumIncomes: sumIncomes,
      spentMedicine: spentMedicine,
      perCapitaIncome: perCapitaIncome,
    };
  }

  // 5º
  if (
    !isDisabled &&
    isOlder &&
    sumIncomes / qtdMembers <= halfPart &&
    !isBeneficiary &&
    isCadiunicoOrCras
  ) {
    return {
      id: 5,
      result: "positive",
      title: positiveTitle,
      description: `Mantenha atualizado o seu registro no CRAS / CADUNICO, pois será necessário para a 
      concessão e manutenção do seu benefício. Nunca declare que mora sozinho(a) se não é essa a verdade, 
      pois isso pode lhe trazer sérios problemas. Nesse caso, poderá ser necessário ação judicial, 
      pois o Poder Judiciário adota critério de renda familiar menos restritivo.`,
      isOlder: isOlder,
      isDisabled: isDisabled,
      isBeneficiary: isBeneficiary,
      incomes: incomes,
      isCadiunicoOrCras: isCadiunicoOrCras,
      qtdMembers: qtdMembers,
      sumIncomes: sumIncomes,
      spentMedicine: spentMedicine,
      perCapitaIncome: perCapitaIncome,
    };
  }

  // 6º
  if (
    !isDisabled &&
    isOlder &&
    sumIncomes / qtdMembers <= halfPart &&
    !isBeneficiary &&
    !isCadiunicoOrCras
  ) {
    return {
      id: 6,
      result: "positive",
      title: positiveTitle,
      description: `Faça o seu cadastro no CRAS ou CADUNICO e o mantenha atualizado, pois será necessário 
      para a concessão e manutenção do seu benefício. Nunca declare que mora sozinho(a) se não é essa a verdade, 
      pois isso pode lhe trazer sérios problemas. Nesse caso, poderá ser necessário ação judicial, 
      pois o Poder Judiciário adota critério de renda familiar menos restritivo.`,
      isOlder: isOlder,
      isDisabled: isDisabled,
      isBeneficiary: isBeneficiary,
      incomes: incomes,
      isCadiunicoOrCras: isCadiunicoOrCras,
      qtdMembers: qtdMembers,
      sumIncomes: sumIncomes,
      spentMedicine: spentMedicine,
      perCapitaIncome: perCapitaIncome,
    };
  }

  // 7º
  if (
    isDisabled &&
    (sumIncomes - spentMedicine) / qtdMembers <= halfPart &&
    !isBeneficiary &&
    !isCadiunicoOrCras
  ) {
    return {
      id: 7,
      result: "positive",
      title: positiveTitle,
      description: `Faça o seu cadastro no CRAS ou CADUNICO e o mantenha atualizado, pois será necessário 
      para a concessão e manutenção do seu benefício. Nunca declare que mora sozinho(a) se não é essa a verdade, 
      pois isso pode lhe trazer sérios problemas. Nesse caso, poderá ser necessário ação judicial, 
      pois o Poder Judiciário adota critério de renda familiar menos restritivo.`,
      isOlder: isOlder,
      isDisabled: isDisabled,
      isBeneficiary: isBeneficiary,
      incomes: incomes,
      isCadiunicoOrCras: isCadiunicoOrCras,
      qtdMembers: qtdMembers,
      sumIncomes: sumIncomes,
      spentMedicine: spentMedicine,
      perCapitaIncome: perCapitaIncome,
    };
  }

  // 8º
  if (
    isDisabled &&
    (sumIncomes - spentMedicine) / qtdMembers <= halfPart &&
    !isBeneficiary &&
    !isCadiunicoOrCras
  ) {
    return {
      id: 8,
      result: "positive",
      title: positiveTitle,
      description: `Mantenha atualizado o seu registro no CRAS / CADUNICO, pois será necessário para a 
      concessão e manutenção do seu benefício. Nunca declare que mora sozinho(a) se não é essa a verdade, 
      pois isso pode lhe trazer sérios problemas. Nesse caso, poderá ser necessário ação judicial, 
      pois o Poder Judiciário adota critério de renda familiar menos restritivo.`,
      isOlder: isOlder,
      isDisabled: isDisabled,
      isBeneficiary: isBeneficiary,
      incomes: incomes,
      isCadiunicoOrCras: isCadiunicoOrCras,
      qtdMembers: qtdMembers,
      sumIncomes: sumIncomes,
      spentMedicine: spentMedicine,
      perCapitaIncome: perCapitaIncome,
    };
  }

  // negative results
  // 9º
  if (!isDisabled && !isOlder) {
    return {
      id: 9,
      result: "negative",
      title: negativeTitle,
      description: `Você não possui 65 anos no mínimo ou não é pessoa com deficiência.`,
      isOlder: isOlder,
      isDisabled: isDisabled,
      isBeneficiary: isBeneficiary,
      incomes: incomes,
      isCadiunicoOrCras: isCadiunicoOrCras,
      qtdMembers: qtdMembers,
      sumIncomes: sumIncomes,
      spentMedicine: spentMedicine,
      perCapitaIncome: perCapitaIncome,
    };
  }

  // 10º
  if (isDisabled || (isOlder && isBeneficiary)) {
    return {
      id: 10,
      result: "negative",
      title: negativeTitle,
      description: `Você recebe benefício não acumulável com benefício da LOAS 
      (se marcou que recebe benefício mas se trata de bolsa família, volte e marque NÃO na resposta 03, 
      pois não existe impedimento para que recebe bolsa família).`,
      isOlder: isOlder,
      isDisabled: isDisabled,
      isBeneficiary: isBeneficiary,
      incomes: incomes,
      isCadiunicoOrCras: isCadiunicoOrCras,
      qtdMembers: qtdMembers,
      sumIncomes: sumIncomes,
      spentMedicine: spentMedicine,
      perCapitaIncome: perCapitaIncome,
    };
  }

  // 11º
  if (
    isDisabled ||
    (isOlder && !isBeneficiary && sumIncomes / qtdMembers > halfPart)
  ) {
    return {
      id: 11,
      result: "negative",
      title: negativeTitle,
      description: `Ao que parece a sua renda por pessoa na família não se enquadra nos requisitos 
      para receber o benefício da LOAS. A renda de algum familiar que vive debaixo do mesmo teto que você 
      supera o patamar para concessão. Verifique se marcou todas as opçoes corretamente. 
      Se houve renda de pessoa com 65 anos ou mais no valor de até 1 salário mínimo vigente, 
      marque para não contar no cálculo na etapa 04.`,
      isOlder: isOlder,
      isDisabled: isDisabled,
      isBeneficiary: isBeneficiary,
      incomes: incomes,
      isCadiunicoOrCras: isCadiunicoOrCras,
      qtdMembers: qtdMembers,
      sumIncomes: sumIncomes,
      spentMedicine: spentMedicine,
      perCapitaIncome: perCapitaIncome,
    };
  }
};

export const buildUriWhatsapp = (title, tel) => {
  let nl = "%0A"; //new line
  let link = `https://wa.me/${tel}?text=`; //Link Whatsapp Share
  let welcome = encodeURIComponent(
    "Oi, fiz a simulação do BPC LOAS no site e gostaria de maiores detalhes: Seguem os resultados do site:"
  );
  let titleMsg = encodeURIComponent("*" + title + "*");
  let msg_final = encodeURIComponent(
    "Preciso que me ajudem a obter o benefício."
  );

  let msg = welcome + nl + nl + titleMsg + nl + nl + msg_final + nl + nl;
  return link + msg;
};
