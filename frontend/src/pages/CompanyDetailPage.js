import React from 'react';
import { useParams } from 'react-router-dom';
import CompanyInfo from '../components/CompanyInfo';
import DataInputTabs from '../components/DataInputTabs';
import GraphArea from '../components/GraphArea';
import MemoArea from '../components/MemoArea';

const CompanyDetailPage = () => {
  const { id } = useParams();
  const companyName = `サンプル企業 (${id})`; 

  return (
    <div>
      <h1>{companyName}</h1>
      <div className="detail-page-layout">
        <div className="left-column">
          <CompanyInfo />
          <DataInputTabs />
          <MemoArea />
        </div>
        <div className="right-column">
          <GraphArea />
        </div>
      </div>
    </div>
  );
};

export default CompanyDetailPage;
