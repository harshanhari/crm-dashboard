import React from 'react';
import KPI from '../KPI';
import TeamAvailabilityTable from '../TeamAvailabilityTable';

const DashboardMainContent = ({ data }) => (
  <div className="dashboard-container">
    <div className="left-column">
      <section className="middle-cards">
        <div className="card" style={{ padding: 14 }}>
          <div className="account">
            <div className='middle-cardsitem'>
              <div className="small">
                <div className='smallfont'>Address : {data.account.address}</div>
                <div className='smallfont'>Contact Mail : {data.account.contact}</div>
                <div className='smallfont'>ID : <b>LKSDMDB861</b></div>
              </div>
              <div className="small">
                <div className='smallfont'>GST Number : <b>{data.account.gst}</b></div>
                <div className='smallfont'>Account Manager : <b>{data.account.manager}</b></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="kpi-grid">
        {data.metrics.map((m, idx) => (
          <KPI key={idx} label={m.label} value={m.value} suffix={m.suffix} progress={m.progress} />
        ))}
      </section>
    </div>

    <div className="right-column">
      <section className="right-section">
        <div className="card stat-card">
          <div className="small">
            <div className="account-summary">
              <div className="account-row">
                <div className="account-label">Total Sales</div>
                <div className="account-separator">:</div>
                <div className="account-value">₹ {data.account.totals.totalSales.toLocaleString()}</div>
              </div>
              <div className="account-row">
                <div className="account-label">Outstanding Amount</div>
                <div className="account-separator">:</div>
                <div className="account-value">₹ {data.account.totals.outstandingAmount.toLocaleString()}</div>
              </div>
              <div className="account-row">
                <div className="account-label">Monthly Purchase</div>
                <div className="account-separator">:</div>
                <div className="account-value">₹ {data.account.totals.monthlyPurchase.toLocaleString()}</div>
              </div>
              <div className="account-row">
                <div className="account-label">Credit Limit</div>
                <div className="account-separator">:</div>
                <div className="account-value">₹ {data.account.totals.creditLimit.toLocaleString()}</div>
              </div>
              <div className="account-row">
                <div className="account-label">Overdue Amount</div>
                <div className="account-separator">:</div>
                <div className="account-value account-overdue">₹ {data.account.totals.overdueAmount.toLocaleString()}</div>
              </div>
              <div className="account-row">
                <div className="account-label">Available Credit Limit</div>
                <div className="account-separator">:</div>
                <div className="account-value">₹ {data.account.totals.availableCreditLimit.toLocaleString()}</div>
              </div>
              <div className="account-row">
                <div className="account-label">Last Payment Date</div>
                <div className="account-separator">:</div>
                <div className="account-value">{data.account.totals.lastPaymentDate}</div>
              </div>
              <div className="account-row">
                <div className="account-label">Average Payment Days</div>
                <div className="account-separator">:</div>
                <div className="account-value">{data.account.totals.avgPaymentDays} Days</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default DashboardMainContent;