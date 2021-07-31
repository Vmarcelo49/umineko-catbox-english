const fs = require('fs')
const lines = fs.readFileSync('script.rb', 'utf-8').split('\n')
/* eslint-disable quote-props */
const nametags = {
  '南條　輝正': 'Nanjo',
  '右代宮　金蔵': 'Kinzo',
  '呂ノ上　源次': 'Genji',
  '右代宮　戦人': 'Battler',
  '右代宮　譲治': 'George',
  'ベアトリーチェ': 'BEATRICE',
  'ベルンカステル': 'BERNKASTEL',
  '右代宮　絵羽': 'Eva',
  '郷田　俊朗': 'Gohda',
  '右代宮　秀吉': 'Hideyoshi',
  '右代宮　朱志香': 'Jessica',
  '嘉音': 'Kanon',
  '右代宮　霧江': 'Kyrie',
  '右代宮　蔵臼': 'Krauss',
  '熊沢　チヨ': 'Kumasawa',
  '右代宮　真里亞': 'Maria',
  '右代宮　夏妃': 'Natsuhi',
  '右代宮　楼座': 'Rosa',
  '右代宮　留弗夫': 'Rudolf',
  '紗音': 'Shannon',
  'ラムダデルタ': 'LAMBDADELTA',
  'ルシファー': 'Lucifer',
  'レヴィアタン': 'Leviathan',
  'サタン': 'Satan',
  'ベルフェゴール': 'Belphegor',
  'マモン': 'Mammon',
  'ベルゼブブ': 'Beelzebub',
  'アスモデウス': 'Asmodeus',
  'ロノウェ': 'Ronove',
  'シエスタ４１０': 'Chiester410',
  'シエスタ４５@': 'Chiester45',
  'シエスタ００': 'Chiester00',
  'シエスタ５５６': 'Chiester556',
  'さくたろう': 'Sakutarou',
  'ワルギリア': 'VIRGILIA',
  '天草　十三': 'Amakusa',
  '右代宮　縁寿': 'Ange',
  '須磨寺　霞': 'Kasumi',
  '川畑船長': 'Kawabata',
  '南條　雅行': 'Masayuki',
  '小此木　鉄郎': 'Okonogi',
  '大月教授': 'Ootsuki',
  '熊沢　鯖吉': 'Sabakichi',
  '古戸　ヱリカ': 'Erika',
  'コーネリア': 'Cornelia',
  'ドラノール': 'Dlanor',
  'ガートルード': 'Gertrude',
  'フルフル': 'Furfur',
  'ゼパル': 'Zepar',
  'フェザリーヌ': 'FEATHERINE',
  'ウィラード・Ｈ・ライト': 'Will',
  '右代宮　理御': 'Lion',
  '山羊の従者': 'Goat',
  'ピース': 'Piece',
  'ウェルギリアス': 'Virgilius',
  'エヴァ・ベアトリーチェ': 'Eva Beatrice'
}
/* eslint-enable quote-props */
for (let i = 0; i < lines.length; i++) {
  if (!lines[i].startsWith('s.ins 0x86')) continue
  for (const nt of Object.keys(nametags)) {
    lines[i] = lines[i].replace(`s.layout('${nt}@r`, `s.layout('${nametags[nt]}@r`)
  }
}
fs.writeFileSync('script.rb', lines.join('\n'), 'utf-8')
