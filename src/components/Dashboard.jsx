import React, { useEffect, useState } from 'react';
import KPI from './KPI';
import TeamAvailabilityTable from './TeamAvailabilityTable';
import SalePerformanceChart from './charts/SalePerformanceChart';
import TaskOverviewPie from './charts/TaskOverviewPie';
import SalesOverviewBar from './charts/SalesOverviewBar';
import TopPerformerChart from './charts/TopPerformerChart';
import ComposedChart from './charts/ComposedChart';

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/data.json').then(r => r.json()).then(setData);
  }, []);

  if (!data) { return <div className="dashboard"><div className="card" style={{ padding: 20 }}>Loading...</div></div> }

  return (
    <main className="dashboard scroll">
      <section className="header-cards">
        <div className="card" style={{ padding: 14 }}>
          <div className="account">
            <div className="avatar" />
            <div>
              <div style={{ fontWeight: 600 }}>{data.account.name}</div>
            </div>
          </div>
        </div>

        <div className="card stat-card">
          <div className="kpi-row">
            <div className="kpi">
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className="icon">💬</div>
                <div className="label">Chat <span className="value" style={{ color: 2 !== 0 ? 'red' : undefined }}>(2)</span></div>
              </div>
            </div>
            <div className="kpi">
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className="icon">📌</div>
                <div className="label">Assigned To <span className="value" style={{ color: 1 !== 0 ? 'red' : undefined }}>(1)</span></div>
              </div>
            </div>
            <div className="kpi">
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className="icon">🧑‍💼</div>
                <div className="label">Assigned By <span className="value" style={{ color: 0 !== 0 ? 'red' : undefined }}>(0)</span></div>
              </div>
            </div>
            <div className="kpi">
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className="icon">⏳</div>
                <div className="label">Pending <span className="value" style={{ color: 0 !== 0 ? 'red' : undefined }}>(0)</span></div>
              </div>
            </div>
            <div className="kpi">
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className="icon">🔔</div>
                <div className="label">Notifications <span className="value" style={{ color: 5 !== 0 ? 'red' : undefined }}>(5)</span></div>
              </div>
            </div>
            <div className="kpi" style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
              <span className="icon" style={{ fontSize: 22, cursor: 'pointer' }}>⋮</span>
            </div>
          </div>
        </div>
      </section>

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


      <section className="mid-grid">
        <TaskOverviewPie data={data.taskOverview} />
        <SalesOverviewBar data={data.salesOverview} />
        <TeamAvailabilityTable rows={data.teamAvailability} />
      </section>

      <section className="bottom-grid">
        <SalePerformanceChart data={data.salePerformance} />
        <TopPerformerChart rows={data.topPerformers} />
        {/* <ComposedChart></ComposedChart> */}
      </section>
    </main>
  );
};

export default Dashboard;
