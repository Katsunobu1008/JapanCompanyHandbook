import React from 'react';

const GraphArea = () => {
  return (
    <>
      <div className="card">
        <h3>P/L グラフ (損益計算書)</h3>
        <div className="graph-placeholder">
          ここにP/Lウォーターフォールチャートを実装<br/>(IMG_3505.png準拠)
        </div>
      </div>
      <div className="card">
        <h3>B/S グラフ (貸借対照表)</h3>
        <div className="graph-placeholder">
          ここに左右対比100%積み上げ棒グラフを実装<br/>(IMG_3504.png準拠)
        </div>
      </div>
      <div className="card">
        <h3>C/F グラフ (キャッシュ・フロー計算書)</h3>
        <div className="graph-placeholder">
          ここにC/Fウォーターフォールチャートを実装<br/>(IMG_3506.png準拠)
        </div>
      </div>
    </>
  );
};

export default GraphArea;
