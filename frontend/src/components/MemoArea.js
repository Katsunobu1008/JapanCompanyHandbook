import React from 'react';
const MemoArea = () => (
  <div className="card">
    <h3>企業全体メモ (マークダウン対応)</h3>
    <textarea style={{width: '95%', minHeight: '150px'}} placeholder="ビジネスモデル、競争優位性などを記録..."></textarea>
    <button style={{marginTop: '10px'}}>保存</button>
  </div>
);
export default MemoArea;
