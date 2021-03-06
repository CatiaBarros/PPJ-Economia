//https://tobiasahlin.com/blog/chartjs-charts-to-get-you-started/
//vê este site

new Chart(document.getElementById("line-chart"), {
  type: "line",
  data: {
    labels: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ],
    datasets: [
      {
        data: [
          1435,
          1532,
          1532,
          1500,
          1463,
          1028,
          490,
          535,
          564,
          706,
          1132,
          1105,
        ],
        label: "2019",
        borderColor: "#ED9B40",
        fill: false,
        backgroundColor: "#ED9B40",
      },
      {
        data: [940, 1629, 1065, 3081],
        label: "2020",
        borderColor: "#4ACC82",
        fill: false,
        backgroundColor: "#4ACC82",
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    title: {
      display: false,
      text: "Número de pessoas em lay-off",
    },
    legend: {
      display: true,
      position: "bottom",
      labels: {},
    },
  },
});

new Chart(document.getElementById("bar-chart"), {
  type: "horizontalBar",
  data: {
    labels: [
      "🇩🇪 Alemanha",
      "🇫🇷 França",
      "🇪🇸 Espanha",
      "🇮🇹 Itália",
      "🇳🇱 Países Baixos",
      "🇦🇹 Áustria",
      "🇵🇱 Polónia",
      "🇸🇪 Suécia",
      "🇬🇷 Grécia",
      "🇵🇹 Portugal",
      "🇨🇿 República Checa",
      "🇭🇷 Croácia",
      "🇧🇪 Bélgica",
      "🇭🇺 Hungria",
      "🇷🇴 Roménia",
      "🇫🇮 Finlândia",
      "🇩🇰 Dinamarca",
      "🇧🇬 Bulgária",
      "🇸🇰 Eslóvaquia",
      "🇱🇹 Lituânia",
      "🇪🇪 Estónia",
      "🇨🇾 Chipre",
      "🇲🇹 Malta",
      "🇱🇺 Luxembrugo",
    ],
    datasets: [
      {
        data: [
          179242169,
          171475894,
          130803657,
          128100932,
          43912615,
          40093480,
          33895930,
          30736850,
          28718094,
          25866422,
          21247150,
          18648937,
          17559915,
          13116056,
          12815999,
          11967117,
          7966674,
          7799680,
          5487207,
          3620390,
          3591495,
          3177161,
          2808808,
          1982579,
          1139037,
        ],
        label: "Número de turistas",
        backgroundColor: [
          "#4ACC82",
          "#4ACC82",
          "#4ACC82",
          "#4ACC82",
          "#4ACC82",
          "#4ACC82",
          "#4ACC82",
          "#4ACC82",
          "#4ACC82",
          "#BA3B46",
          "#4ACC82",
          "#4ACC82",
          "#4ACC82",
          "#4ACC82",
          "#4ACC82",
          "#4ACC82",
          "#4ACC82",
          "#4ACC82",
          "#4ACC82",
          "#4ACC82",
          "#4ACC82",
          "#4ACC82",
          "#4ACC82",
          "#4ACC82",
        ],
        fill: true,
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    title: {
      display: false,
      text: "Entrada de turistas em alojamentos turísticos",
    },
    legend: {
      display: false,
      position: "bottom",
      labels: {},
    },
    scales: {
      xAxes: [
        {
          ticks: {
            userCallback: function (item) {
              return item / 1000000 + " M";
            },
          },
        },
      ],
    },
  },
});

new Chart(document.getElementById("bar2-chart"), {
  type: "bar",
  data: {
    labels: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ],
    datasets: [
      {
        data: [
          1266569,
          1384281,
          1851804,
          2315302,
          2591650,
          2721267,
          2829319,
          3310953,
          2876341,
          2500312,
          1754086,
          1572013,
        ],
        label: "2019",
        borderColor: "#ED9B40",
        fill: false,
        backgroundColor: "#ED9B40",
      },
      {
        data: [1418459, 1594530, 692691, 60103],
        label: "2020",
        borderColor: "#4ACC82",
        fill: false,
        backgroundColor: "#4ACC82",
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    title: {
      display: false,
      text: "Número de pessoas em lay-off",
    },
    legend: {
      display: true,
      position: "bottom",
      labels: {},
    },
  },
});

new Chart(document.getElementById("bar3-chart"), {
  type: "line",
  data: {
    labels: ["Fevereiro", "Março", "Abril", "Maio"],
    datasets: [
      {
        data: [263, 44712, 102195, 135080],
        label: "Desempregados",
        borderColor: "#4ACC82",
        fill: false,
        backgroundColor: "#4ACC82",
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    title: {
      display: false,
      text: "Número de pessoas em lay-off",
    },
    legend: {
      display: false,
      position: "bottom",
      labels: {},
    },
  },
});

