import React from 'react';
import { Link } from 'react-router-dom';

const CompanyListPage = () => {
  return (
    <div className="card">
      <h3>登録企業一覧</h3>
      <ul>
        <li><Link to="/company/7203">トヨタ自動車 (7203)</Link></li>
        <li><Link to="/company/9984">ソフトバンクグループ (9984)</Link></li>
      </ul>
      <button>＋ 新しい企業を追加</button>
    </div>
  );
};

export default CompanyListPage;
