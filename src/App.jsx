import content from "./data/content.json";

function slug(s) {
  return String(s || "")
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export default function App() {
  const { nav, home, artists, exhibitions, news, fairs, info } = content;

  const years = Object.keys(exhibitions?.byYear || {})
    .map((y) => Number(y))
    .sort((a, b) => b - a)
    .map(String);

  return (
    <div className="container">
<h1 className="h1">{home?.title}</h1>
<p className="p">{home?.subtitle}</p>
      <nav className="nav">
        {nav.map((label) => (
          <a key={label} href={`#${slug(label)}`}>
            {label}
          </a>
        ))}
      </nav>

      

      <section id="artists" className="section">
        <div className="small">Artists</div>
        <div className="list">
          {artists.length === 0 ? <div className="small">—</div> : null}
          {artists.map((name) => (
            <div key={name}>{name}</div>
          ))}
        </div>
      </section>

      <section id="exhibitions" className="section">
        <div className="small">Exhibitions</div>
        <div className="list">
          {exhibitions?.current ? (
            <div>
              <span className="small">Current </span>
              {exhibitions.current}
            </div>
          ) : (
            <div className="small">—</div>
          )}
        </div>

        {years.map((y) => (
          <div key={y} className="section" style={{ marginTop: 24 }}>
            <div className="small">{y}</div>
            <div className="list">
              {(exhibitions.byYear[y] || []).map((item, idx) => (
                <div key={`${y}-${idx}`}>{item}</div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section id="news" className="section">
        <div className="small">News</div>
        <div className="list">
          {news.length === 0 ? <div className="small">—</div> : null}
          {news.map((item, idx) => (
            <div key={idx}>{item}</div>
          ))}
        </div>
      </section>

      <section id="fairs" className="section">
        <div className="small">Fairs</div>
        <div className="list">
          {fairs.length === 0 ? <div className="small">—</div> : null}
          {fairs.map((item, idx) => (
            <div key={idx}>{item}</div>
          ))}
        </div>
      </section>

      <section id="info" className="section">
        <div className="small">Info</div>
        <div className="list">
          {(info?.lines || []).map((line, idx) => (
            <div key={idx}>{line}</div>
          ))}
        </div>
      </section>
    </div>
  );
}
