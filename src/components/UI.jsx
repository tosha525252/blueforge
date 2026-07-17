import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Eyebrow({ children }) { return <div className="eyebrow"><span />{children}</div>; }
export function CTA({ to, children, secondary = false }) { return <Link className={secondary ? 'button secondary' : 'button'} to={to}>{children}<ArrowRight size={18}/></Link>; }
export function SectionTitle({ eyebrow, title, copy, align='left' }) { return <div className={`section-title ${align}`}><Eyebrow>{eyebrow}</Eyebrow><h2>{title}</h2>{copy && <p>{copy}</p>}</div>; }
