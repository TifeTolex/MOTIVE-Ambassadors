import { requireAmbassador } from "@/lib/auth";
import { ambassadors } from "@/lib/data";

export default async function StatusPage() {
  const username = await requireAmbassador();
  const current = ambassadors.find((person) => person.username === username)!;
  return (
    <div className="page-content inner-page">
      <div className="page-heading"><p className="eyebrow">AMBASSADOR DIRECTORY</p><h1>Activity <span>status.</span></h1><p className="muted">A live-style overview of the Motive ambassador team. </p></div>
      <section className="roster-grid">
        {ambassadors.map((person) => (
          <article key={person.username} className={person.username === username ? "roster-card roster-card-current" : "roster-card"} style={{ "--status-color": person.statusColor } as React.CSSProperties}>
            <div className="roster-card-top"><span className="status-pulse" /><span>AMBASSADOR STATUS</span>{person.username === username && <span className="you-label">YOU</span>}</div>
            <h2>{person.displayName}</h2>
            <div className="roster-status"><span className="roster-status-dot" /><span>{person.statusText}</span></div>
            <div className="roster-card-bottom"><span>MOTIVE / TEAM</span><span>↗</span></div>
          </article>
        ))}
      </section>
      <section className="status-legend">
        <p className="eyebrow">STATUS GUIDE</p>
        <div className="legend-items">
          <div className="legend-row"><span className="legend-dot active-dot" /><div><strong>Active</strong><p>Engaged and meeting current ambassador expectations.</p></div></div>
          <div className="legend-row"><span className="legend-dot idle-dot" /><div><strong>Idle</strong><p>Activity is currently low; reconnect and get involved.</p></div></div>
          <div className="legend-row"><span className="legend-dot probation-dot" /><div><strong>Probation</strong><p>Follow-up or improvement is needed based on programme guidelines.</p></div></div>
        </div>
      </section>
      {/* <p className="edit-hint"><strong>For the site owner:</strong> change each ambassador’s <code>displayName</code>, <code>status</code>, <code>statusText</code>, and <code>statusColor</code> in <code>lib/data.ts</code>. These are sample placeholders.</p> */}
    </div>
  );
}
