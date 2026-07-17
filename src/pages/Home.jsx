import { ArrowUpRight, BrainCircuit, Cable, Layers3, Sparkles, Sun, WandSparkles } from 'lucide-react';
import { CTA, Eyebrow, SectionTitle } from '../components/UI';

const paths = [
  { icon: Sun, number:'01', title:'Understand my business', product:'BlueForge 8AM', text:'Turn scattered work data into a focused, actionable daily brief.', href:'/8am' },
  { icon: WandSparkles, number:'02', title:'Design my workspace', product:'BlueForge Architect', text:'Create intelligent monday.com systems around the way your organization works.', href:'/architect' },
  { icon: Cable, number:'03', title:'Connect my systems', product:'BlueForge Sync', text:'Integrate the tools, data, and workflows your business depends on.', href:'/contact' },
];

export default function Home() {
  return <>
    <section className="gateway hero-grid">
      <div className="hero-copy">
        <Eyebrow>Welcome to BlueForge Labs</Eyebrow>
        <h1>What would you like to <em>improve</em> today?</h1>
        <p>BlueForge brings clarity to complex work—connecting your systems, surfacing what matters, and helping your team act with confidence.</p>
      </div>
      <div className="gateway-orbit" aria-hidden="true"><div className="orbit-ring ring-one"/><div className="orbit-ring ring-two"/><div className="core"><BrainCircuit size={38}/></div><span className="node n1"/><span className="node n2"/><span className="node n3"/></div>
      <div className="path-grid">
        {paths.map(({icon:Icon,...p}) => <a className="path-card" href={p.href} key={p.product}><div className="path-top"><span>{p.number}</span><ArrowUpRight/></div><Icon className="path-icon"/><h3>{p.title}</h3><strong>{p.product}</strong><p>{p.text}</p></a>)}
      </div>
      <a className="browse-link" href="#main-story">Browse the full site instead <span>↓</span></a>
    </section>

    <section className="hero-main" id="main-story">
      <div className="hero-beam" />
      <Eyebrow>Intelligence for the way work gets done</Eyebrow>
      <h2>Your business already has the data.<br/><span>BlueForge makes it useful.</span></h2>
      <p>Connect the systems where work happens. Understand priorities, risks, and relationships. Turn recommendations into action.</p>
      <div className="button-row"><CTA to="/8am">Explore BlueForge 8AM</CTA><CTA to="/contact" secondary>Join early access</CTA></div>
      <div className="signal-strip"><span>MONDAY.COM</span><i/><span>GMAIL</span><i/><span>JIRA</span><i/><span>GITHUB</span><i/><span>CALENDAR</span></div>
    </section>

    <section className="section" id="ecosystem">
      <SectionTitle eyebrow="The BlueForge ecosystem" title="One company. A clearer way to work." copy="Each product solves a distinct problem while sharing the same foundation: connected systems, useful intelligence, and human-centered design." />
      <div className="product-grid">
        <article className="product-card featured"><div className="product-badge">Flagship</div><Sun/><small>PREPARE</small><h3>BlueForge 8AM</h3><p>Your organization, summarized before coffee. A proactive morning brief built from the systems your team already uses.</p><a href="/8am">Explore 8AM <ArrowUpRight/></a></article>
        <article className="product-card"><WandSparkles/><small>DESIGN</small><h3>Architect</h3><p>AI-guided monday.com workspace design, optimization, and implementation.</p><a href="/architect">Explore Architect <ArrowUpRight/></a></article>
        <article className="product-card"><Cable/><small>CONNECT</small><h3>Sync</h3><p>Reliable integrations and workflow orchestration across your technology stack.</p><span className="coming">In development</span></article>
        <article className="product-card"><Sparkles/><small>GUIDE</small><h3>Beacon</h3><p>An intelligent planning, organization, and curriculum platform for educators.</p><span className="coming">In development</span></article>
      </div>
    </section>

    <section className="section how-section" id="how">
      <SectionTitle eyebrow="How BlueForge works" title="From scattered signals to focused action." align="center" />
      <div className="step-line">
        <div className="step"><span>01</span><Cable/><h3>Connect</h3><p>Bring together the systems your organization already uses.</p></div>
        <div className="flow-arrow">→</div>
        <div className="step"><span>02</span><BrainCircuit/><h3>Understand</h3><p>Identify priorities, risks, relationships, and opportunities.</p></div>
        <div className="flow-arrow">→</div>
        <div className="step"><span>03</span><Layers3/><h3>Act</h3><p>Turn recommendations into workflows and measurable progress.</p></div>
      </div>
    </section>

    <section className="section demo-section">
      <div className="demo-copy"><Eyebrow>Not another dashboard</Eyebrow><h2>Know what deserves your attention—before the day gets away from you.</h2><p>8AM turns project updates, meetings, email, and operational signals into a concise daily brief with clear next steps.</p><CTA to="/8am">See the 8AM experience</CTA></div>
      <div className="brief-card"><div className="brief-header"><div><small>FRIDAY · JULY 17</small><h3>Good morning, Natosha.</h3></div><span className="status-dot">Live brief</span></div><p className="brief-lead">Three things require your attention.</p>{[
        ['01','Product Launch','QA remains blocked, placing Friday’s release at risk.','Review blockers before 10:00'],
        ['02','Acme Renewal','A client response has been waiting for 19 hours.','Reply before your 11:30 meeting'],
        ['03','Operations','Two related deadlines conflict with your 2:00 meeting.','Resolve the schedule conflict'],
      ].map(([n,t,c,a])=><div className="brief-item" key={n}><span>{n}</span><div><h4>{t}</h4><p>{c}</p><small>Recommended: {a}</small></div></div>)}</div>
    </section>

    <section className="section final-cta"><div><Eyebrow>Build a clearer way to work</Eyebrow><h2>Start your day with intelligence—not noise.</h2></div><CTA to="/contact">Join the early access list</CTA></section>
  </>;
}
