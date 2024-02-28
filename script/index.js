window.onload = function () {
  async function getPopulation() {
    return [
      {
        pref: "北海道",
        total: 5381733,
        male: 2537089,
        female: 2844644,
      },
      {
        pref: "青森県",
        total: 1308265,
        male: 614694,
        female: 693571,
      },
      {
        pref: "岩手県",
        total: 1279594,
        male: 615584,
        female: 664010,
      },
      {
        pref: "宮城県",
        total: 2333899,
        male: 1140167,
        female: 1193732,
      },
      {
        pref: "秋田県",
        total: 1023119,
        male: 480336,
        female: 542783,
      },
      {
        pref: "山形県",
        total: 1123891,
        male: 540226,
        female: 583665,
      },
      {
        pref: "福島県",
        total: 1914039,
        male: 945660,
        female: 968379,
      },
      {
        pref: "茨城県",
        total: 2916976,
        male: 1453594,
        female: 1463382,
      },
      {
        pref: "栃木県",
        total: 1974255,
        male: 981626,
        female: 992629,
      },
      {
        pref: "群馬県",
        total: 1973115,
        male: 973283,
        female: 999832,
      },
      {
        pref: "埼玉県",
        total: 7266534,
        male: 3628418,
        female: 3638116,
      },
      {
        pref: "千葉県",
        total: 6222666,
        male: 3095860,
        female: 3126806,
      },
      {
        pref: "東京都",
        total: 13515271,
        male: 6666690,
        female: 6848581,
      },
      {
        pref: "神奈川県",
        total: 9126214,
        male: 4558978,
        female: 4567236,
      },
      {
        pref: "新潟県",
        total: 2304264,
        male: 1115413,
        female: 1188851,
      },
      {
        pref: "富山県",
        total: 1066328,
        male: 515147,
        female: 551181,
      },
      {
        pref: "石川県",
        total: 1154008,
        male: 558589,
        female: 595419,
      },
      {
        pref: "福井県",
        total: 786740,
        male: 381474,
        female: 405266,
      },
      {
        pref: "山梨県",
        total: 834930,
        male: 408327,
        female: 426603,
      },
      {
        pref: "長野県",
        total: 2098804,
        male: 1022129,
        female: 1076675,
      },
      {
        pref: "岐阜県",
        total: 2031903,
        male: 983850,
        female: 1048053,
      },
      {
        pref: "静岡県",
        total: 3700305,
        male: 1820993,
        female: 1879312,
      },
      {
        pref: "愛知県",
        total: 7483128,
        male: 3740844,
        female: 3742284,
      },
      {
        pref: "三重県",
        total: 1815865,
        male: 883516,
        female: 932349,
      },
      {
        pref: "滋賀県",
        total: 1412916,
        male: 696941,
        female: 715975,
      },
      {
        pref: "京都府",
        total: 2610353,
        male: 1248972,
        female: 1361381,
      },
      {
        pref: "大阪府",
        total: 8839469,
        male: 4256049,
        female: 4583420,
      },
      {
        pref: "兵庫県",
        total: 5534800,
        male: 2641561,
        female: 2893239,
      },
      {
        pref: "奈良県",
        total: 1364316,
        male: 643946,
        female: 720370,
      },
      {
        pref: "和歌山県",
        total: 963579,
        male: 453216,
        female: 510363,
      },
      {
        pref: "鳥取県",
        total: 573441,
        male: 273705,
        female: 299736,
      },
      {
        pref: "島根県",
        total: 694352,
        male: 333112,
        female: 361240,
      },
      {
        pref: "岡山県",
        total: 1921525,
        male: 922226,
        female: 999299,
      },
      {
        pref: "広島県",
        total: 2843990,
        male: 1376211,
        female: 1467779,
      },
      {
        pref: "山口県",
        total: 1404729,
        male: 665008,
        female: 739721,
      },
      {
        pref: "徳島県",
        total: 755733,
        male: 359790,
        female: 395943,
      },
      {
        pref: "香川県",
        total: 976263,
        male: 472308,
        female: 503955,
      },
      {
        pref: "愛媛県",
        total: 1385262,
        male: 654380,
        female: 730882,
      },
      {
        pref: "高知県",
        total: 728276,
        male: 342672,
        female: 385604,
      },
      {
        pref: "福岡県",
        total: 5101556,
        male: 2410418,
        female: 2691138,
      },
      {
        pref: "佐賀県",
        total: 832832,
        male: 393073,
        female: 439759,
      },
      {
        pref: "長崎県",
        total: 1377187,
        male: 645763,
        female: 731424,
      },
      {
        pref: "熊本県",
        total: 1786170,
        male: 841046,
        female: 945124,
      },
      {
        pref: "大分県",
        total: 1166338,
        male: 551932,
        female: 614406,
      },
      {
        pref: "宮崎県",
        total: 1104069,
        male: 519242,
        female: 584827,
      },
      {
        pref: "鹿児島県",
        total: 1648177,
        male: 773061,
        female: 875116,
      },
      {
        pref: "沖縄県",
        total: 1433566,
        male: 704619,
        female: 728947,
      },
    ];
  }

  getPopulation()
    .then((data) => {
      // data = JSON.stringify(data)
      console.log(data); //都道府県別の人口データがdataに格納されています。

      // ↓↓ ここからdataを使い、可視化のコードを記載してください ↓↓

      const app = document.getElementById("app"); // tableを入れる位置
      let out = ""; // Create a string
      let index = 1; // For the first column index
      var japanPopulation = document.getElementById("japanPopulation"); //
      let totalPopulation = 0;

      for (let country of data) {
        //全国人口計算
        totalPopulation += country.total;
      }

      const addNumUnit = (n) => {
        //数字の日本語言い方
        if (isNaN(n) || +n === 0) return n;
        const s = String(n).trim().replace(/^\+/, "");
        if (!/^-?\d+\.?/.test(s)) return n;
        const sp = (d) => {
          const t = ["", "万", "億"];
          const ret = [];
          for (let i = 0, r = d.split(""); r.length > 0; i++) {
            const n = r
              .splice(t[i + 1] !== undefined ? -4 : 0)
              .join("")
              .replace(/^0+/, "");
            if (n !== "") ret.unshift(n + t[i]);
          }
          return ret.join("");
        };
        return s.replace(/^([-+]?)(\d+)/, (_, m1, m2) => m1 + sp(m2));
      };

      var txtCounter = 0; //Text typing animation
      var txt = "現在日本全国人口：" + addNumUnit(totalPopulation) + "人";
      var speed = 200;

      function typeWriter() {
        if (txtCounter < txt.length) {
          japanPopulation.innerHTML += txt.charAt(txtCounter);
          txtCounter++;
          setTimeout(typeWriter, speed);
        }
      }

      $(document).ready(function () {
        typeWriter();
      });

      for (let country of data) {
        // 都道府県のデータを表示させる
        let genderRatio = country.female / country.male;
        out += `
              <tr>
                <td class="number">${index}</td>
                <td class="country"><a href="https://www.google.com/search?q=${
                  country.pref
                }" target="_blank"><img src="/png/${
          country.pref
        }.png"/ height="20px"> ${country.pref}</a></td>
                <td class="number"><span class="hovertext hover-2" data-hover="全国人口の${
                  ((country.total / totalPopulation) * 100).toFixed(1) + "%"
                }">${country.total.toLocaleString("en-US")}</span></td>
                <td class="number">${country.male.toLocaleString("en-US")}</td>
                <td class="number">${country.female.toLocaleString(
                  "en-US"
                )}</td>
                <td class="ratio">1：${genderRatio.toFixed(3)}</td>
              </tr>
            `;
        index += 1;
      }

      app.innerHTML = out;

      $(function () {
        // Start by telling tablesorter to sort your table when the document is loaded:
        $("#myTable").tablesorter();
      });

      $(function () {
        // This tells tablesorter to sort on the first and second column in ascending order.
        $("#myTable").tablesorter({
          sortList: [
            [0, 0],
            [1, 0],
          ],
        });
      });

      // ↓ Index column widget
      $.tablesorter.addWidget({
        id: "numbering",
        format: function (table) {
          var c = table.config;
          $("tr:visible", table.tBodies[0]).each(function (i) {
            $(this)
              .find("td")
              .eq(0)
              .text(i + 1);
          });
        },
      });

      $("table").tablesorter({
        // prevent first column from being sortable
        headers: {
          0: { sorter: false },
        },
        // apply custom widget
        widgets: ["numbering"],
      });
      // ↑ End Index column widget

      $(function () {
        // call the tablesorter plugin
        $("table").tablesorter({
          theme: "blue",
        });

        // Make table cell focusable
        // http://css-tricks.com/simple-css-row-column-highlighting/
        if ($(".focus-highlight").length) {
          $(".focus-highlight")
            .find("td, th")
            .attr("tabindex", "1")
            // add touch device support
            .on("touchstart", function () {
              $(this).focus();
            });
        }
      });

      // just grab a DOM element
      var element = document.querySelector("#scene");

      panzoom(element, {
        maxZoom: 5,
        minZoom: 0.8,
        bounds: true,
        boundsPadding: 0.5,
      });

      //svg showing text
      var svg = document.getElementById("top-svg");

      function displayName(name) {
        document.getElementById("country-name").firstChild.data = name;
      }

      //地域を色付ける
      function colourCountry(name, colour) {
        var country = document.getElementById(name);
        country.classList.add("colour" + colour);
      }

      function colourCountries(data, colour) {
        for (var country = 0; country < data.length; country++) {
          colourCountry(data[country], colour);
        }
      }

      // 人口の数によってArrayを作る
      var data0 = [];
      var data1 = [];
      var data2 = [];
      var data3 = [];
      var data4 = [];

      for (let country of data) {
        if (country.total > 10000000) {
          data4.push(country.pref);
        } else if (country.total > 5000000) {
          data3.push(country.pref);
        } else if (country.total > 2000000) {
          data2.push(country.pref);
        } else if (country.total > 1000000) {
          data1.push(country.pref);
        } else {
          data0.push(country.pref);
        }
      }

      /* var data0 = ["鳥取県", "島根県", "高知県", "徳島県", "福井県", "佐賀県", "山梨県", "和歌山県", "香川県"]
    var data1 = ["秋田県", "富山県", "宮崎県", "山形県", "石川県", "大分県", "岩手県", "青森県", "奈良県", "長崎県", "愛媛県", "山口県", "滋賀県", "沖縄県", "鹿児島県", "熊本県", "三重県", "福島県", "岡山県", "群馬県", "栃木県"]
    var data2 = ["岐阜県", "長野県", "新潟県", "宮城県", "京都府", "広島県", "茨城県", "静岡県"]
    var data3 = ["福岡県", "北海道", "兵庫県", "千葉県", "埼玉県", "愛知県", "大阪府", "神奈川県"]
    var data4 = ["東京都"] */

      //
      colourCountries(data0, 0);
      colourCountries(data1, 1);
      colourCountries(data2, 2);
      colourCountries(data3, 3);
      colourCountries(data4, 4);
    })
    .catch((err) => {
      console.log(err);
    });
};
