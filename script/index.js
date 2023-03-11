window.onload = function() {
  async function getPopulation () {
    return await (await fetch('../src/json/population.json')).json();
  }

  getPopulation()
    .then(data => {
      // data = JSON.stringify(data)
      console.log(data); //都道府県別の人口データがdataに格納されています。

      // ↓↓ ここからdataを使い、可視化のコードを記載してください ↓↓
      
      

      const app = document.getElementById("app");// tableを入れる位置
      let out = "";　// Create a string
      let index = 1; // For the first column index
      var japanPopulation = document.getElementById("japanPopulation"); //
      let totalPopulation = 0;

      for (let country of data) { //全国人口計算
        totalPopulation += country.total;
      }

      const addNumUnit = n => { //数字の日本語言い方
        if(isNaN(n) || +n === 0) return n;
        const s = String(n).trim().replace(/^\+/, '');
        if(!/^-?\d+\.?/.test(s)) return n;
        const sp = d => {
          const t = ['', '万', '億'];
          const ret = [];
          for(let i = 0, r = d.split(''); r.length > 0; i++) {
            const n = r.splice(t[i + 1] !== undefined ? -4 : 0).join('').replace(/^0+/, '');
            if(n !== '') ret.unshift(n + t[i]);
          }
          return ret.join('');
        }
        return s.replace(/^([-+]?)(\d+)/, (_, m1, m2) => m1 + sp(m2));
      }

      var txtCounter = 0; //Text typing animation
      var txt = '現在日本全国人口：'+ addNumUnit(totalPopulation) +'人';
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

      for (let country of data) { // 都道府県のデータを表示させる
          let genderRatio = country.female/country.male;
          out += `
              <tr>
                <td class="number">${index}</td>
                <td class="country"><a href="https://www.google.com/search?q=${country.pref}" target="_blank"><img src="../png/${country.pref}.png"/ height="20px"> ${country.pref}</a></td>
                <td class="number"><span class="hovertext hover-2" data-hover="全国人口の${(country.total/totalPopulation*100).toFixed(1)+"%"}">${country.total.toLocaleString('en-US')}</span></td>
                <td class="number">${country.male.toLocaleString('en-US')}</td>
                <td class="number">${country.female.toLocaleString('en-US')}</td>
                <td class="ratio">1：${genderRatio.toFixed(3)}</td>
              </tr>
            `;
            index += 1;
          
      }
      
      app.innerHTML = out;

    $(function() { // Start by telling tablesorter to sort your table when the document is loaded:
      $("#myTable").tablesorter();
    });


    $(function() { // This tells tablesorter to sort on the first and second column in ascending order.
    $("#myTable").tablesorter({ sortList: [[0,0], [1,0]] });
    });

    // ↓ Index column widget
    $.tablesorter.addWidget({ 

      id: "numbering",
      format: function(table) {
          var c = table.config;
          $("tr:visible", table.tBodies[0]).each(function(i) {
              $(this).find('td').eq(0).text(i + 1);
          });
      }
    });
    
    $("table").tablesorter({
        // prevent first column from being sortable
        headers: {
            0: { sorter: false }
        },
        // apply custom widget
        widgets: ['numbering']
    });
    // ↑ End Index column widget

    $(function() {
      // call the tablesorter plugin
      $("table").tablesorter({
        theme: 'blue'
      });
    
      // Make table cell focusable
      // http://css-tricks.com/simple-css-row-column-highlighting/
      if ( $('.focus-highlight').length ) {
        $('.focus-highlight').find('td, th')
          .attr('tabindex', '1')
          // add touch device support
          .on('touchstart', function() {
            $(this).focus();
          });
      }
    
    });

    // just grab a DOM element
    var element = document.querySelector('#scene')

    panzoom(element, {
      maxZoom: 5,
      minZoom: 0.8,
      bounds: true,
      boundsPadding: 0.5,
    });

    //svg showing text
    var svg = document.getElementById('top-svg');

    function displayName(name) {
      document.getElementById("country-name").firstChild.data = name;
    }

    //地域を色付ける
    function colourCountry(name, colour) {
      var country = document.getElementById(name);
      country.classList.add("colour" + colour);
    }
    
    function colourCountries(data, colour) {
      for (var country = 0; country < data.length; country++){
          colourCountry(data[country], colour);
      }
    }
    
    // 人口の数によってArrayを作る
    var data0 = []
    var data1 = []
    var data2 = []
    var data3 = []
    var data4 = []
    
    for (let country of data) {
      if(country.total > 10000000) {
        data4.push(country.pref)
      } else if (country.total > 5000000) {
        data3.push(country.pref);
      } else if (country.total > 2000000) {
        data2.push(country.pref);
      } else if (country.total > 1000000) {
        data1.push(country.pref);
      } else {data0.push(country.pref);
      };
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
    .catch(err => {
      console.log(err);
    })
};
