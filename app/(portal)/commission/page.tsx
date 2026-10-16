import { requireAmbassador } from "@/lib/auth";
import { ambassadors, currency } from "@/lib/data";

const formatMoney = (amount: number) => `${currency}${amount.toLocaleString("en-NG")}`;

export default async function CommissionPage() {
  const username = await requireAmbassador();
  const ambassador = ambassadors.find((person) => person.username === username)!;
  return (
    <div className="page-content inner-page">
      <div className="page-heading"><p className="eyebrow">YOUR REWARDS</p><h1>Commission <span>overview.</span></h1><p className="muted">A simple view of your recorded ambassador earnings.</p></div>
      <section className="commission-grid">
        <article className="commission-card commission-week"><div className="commission-card-head"><span>THIS WEEK</span><span className="commission-icon">↗</span></div><p className="commission-amount">{formatMoney(ambassador.weeklyCommission)}</p><p className="commission-description">Weekly commission earned</p><div className="commission-rule" /><p className="commission-foot">WEEKLY TOTAL <span>01 / 02</span></p></article>
        <article className="commission-card commission-month"><div className="commission-card-head"><span>THIS MONTH</span><span className="commission-icon">◎</span></div><p className="commission-amount">{formatMoney(ambassador.monthlyCommission)}</p><p className="commission-description">Monthly commission total</p><div className="commission-rule" /><p className="commission-foot">MONTHLY TOTAL <span>02 / 02</span></p></article>
      </section>
      <div className="notice-panel"><span className="notice-symbol">i</span><p><strong>Commission note</strong><br />Commissions and bonuses are earned  and can be withdrawn weekly. </p></div>
    </div>
  );
}
