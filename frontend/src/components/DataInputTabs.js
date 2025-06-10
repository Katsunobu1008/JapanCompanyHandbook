import React, { useState } from 'react';

const DataInputTabs = () => {
  const [activeTab, setActiveTab] = useState('pl');

  const renderContent = () => {
    return (
      <div>
        <select>
          <option>2024/3期</option>
          <option>2023/3期</option>
        </select>
        <table className="table-placeholder">
          <thead>
            <tr><th>項目</th><th>数値</th></tr>
          </thead>
          <tbody>
            <tr><td>売上高</td><td>[入力欄]</td></tr>
            <tr><td>営業利益</td><td>[入力欄]</td></tr>
          </tbody>
        </table>
        <button style={{marginTop: '10px'}}>＋ 新しい行を追加</button>
      </div>
    );
  };

  return (
    <div className="card">
      <h3>時系列データ入力</h3>
      <div>
        <button onClick={() => setActiveTab('pl')}>P/L・配当</button>
        <button onClick={() => setActiveTab('bs')}>B/S</button>
        <button onClick={() => setActiveTab('cf')}>C/F</button>
      </div>
      <div style={{marginTop: '15px'}}>
        {renderContent()}
      </div>
    </div>
  );
};

export default DataInputTabs;
