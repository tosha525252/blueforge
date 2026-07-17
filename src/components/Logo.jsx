export default function Logo({ compact = false }) {
  return (
    <div className="logo-lockup" aria-label="BlueForge Labs">
      <svg className="logo-mark" viewBox="0 0 64 64" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="forgeGradient" x1="9" y1="55" x2="54" y2="9" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1F66FF" />
            <stop offset="0.55" stopColor="#49B8FF" />
            <stop offset="1" stopColor="#78E6FF" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.4" result="blur" />
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>
        <path d="M35 5c3 11-8 14-5 25 2 6 9 7 8 16-1 7-7 12-15 12-10 0-17-7-17-17 0-13 11-20 20-29 0 7 4 10 9 12-2-7 0-13 0-19Z" fill="url(#forgeGradient)" opacity=".24" filter="url(#glow)"/>
        <path d="M31 10c1 9-8 13-8 23 0 5 3 8 8 8h10v7H31c-10 0-16-6-16-15 0-9 7-15 16-23Zm0 11h18v7H31v-7Z" fill="url(#forgeGradient)" filter="url(#glow)"/>
        <circle cx="49" cy="24.5" r="2" fill="#9AF1FF" />
        <circle cx="19" cy="42" r="2" fill="#9AF1FF" />
        <path d="M49 24.5h7M19 42h-7M35 13V6" stroke="#86E6FF" strokeWidth="1.5" strokeLinecap="round" opacity=".9" />
      </svg>
      {!compact && <div><strong>BlueForge</strong><span>Labs</span></div>}
    </div>
  );
}
