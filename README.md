# 株式会社PENQE スキルチェックテスト

## テスト内容
script/index.js内でfetchしているdata（都道府県別の人口データ）を用い、表やグラフ等、見やすくなるように可視化してください。

## 注意事項
通常のブラウザでindex.htmlを開くと、CORSエラーが発生してデータを取得することができません。以下の方法で各種ブラウザを設定し、CORSエラーを解除した状態で開発を行ってください。（以下の方法以外でも解除できる方法があれば、どのような方法でも問題ありません。）

### chromeで開発する場合

#### mac
1. ターミナルを開き、以下のコマンドを入力する。
`open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_sess_1" --disable-web-security`
2. CORSが解除されたchromeが立ち上がるので、そのブラウザで開発する

#### windows
以下を参照し、CORS制限を解除する。
https://blog-shika.biz/?p=69

### safariで開発する場合(macのみ)
以下を参照し、CORS制限を解除する。
https://qiita.com/kai_kou/items/54b61a274b77977add54#safari%E3%81%AE%E8%A8%AD%E5%AE%9A%E6%96%B9%E6%B3%95

## 補足
- jQueryやd3.js等、必要に応じて外部プラグインを使用して構いません。
- 可視化の方法、個数、デザインの指定はありません。
- 分からないことは調べていただいて構いませんが、自力で作るようにして下さい。（提出後制作したコードをご説明いただきます。）

## 評価対象
- プログラミングスキル
- デザイン性
