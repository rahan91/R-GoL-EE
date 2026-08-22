const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://r-gol-ee.vercel.app";

export default function AboutSection() {
  return (
    <>
      <section className="about" id="about">
        <h2>What is R-GoL-EE?</h2>
        <p>
          R-GoL-EE (<strong>Rahan&apos;s Game of Life, Extended Edition</strong>) is a free,
          open-source <strong>Conway&apos;s Game of Life simulator</strong> that runs entirely in
          your browser. It is a cellular automaton playground where cells age visibly through the
          color spectrum — blue, green, yellow, orange, red, purple, then white after 180
          generations — while you paint, pan, and zoom an infinite-feeling neon grid.
        </p>

        <h3>What is Conway&apos;s Game of Life?</h3>
        <p>
          Conway&apos;s Game of Life is a zero-player cellular automaton devised by mathematician
          John Conway in 1970. Cells on a grid live or die each generation based on two numbers:
          how many neighbors a dead cell needs to be <strong>born</strong> (B) and how many
          neighbors a live cell needs to <strong>survive</strong> (S). The classic rule is{" "}
          <code>B3/S23</code>. From those simple rules emerge gliders, oscillators, guns, and
          patterns that run for thousands of generations.
        </p>

        <h3>How do you play?</h3>
        <ol>
          <li><strong>Paint</strong> live cells by dragging on the board (right-drag erases).</li>
          <li>Press <strong>Play</strong> (or Space) and watch the simulation evolve.</li>
          <li>Drop <strong>pattern modules</strong> from the sidebar — gliders, Gosper guns, R-pentominoes.</li>
          <li>Edit the <strong>B/S rule</strong> fields to invent your own universe, or pick one of 23 presets like HighLife, Seeds, or Day &amp; Night.</li>
        </ol>

        <h3>Which rules are supported?</h3>
        <p>
          Any outer-totalistic Life-like rule: type digits 0–9 into the B and S fields. Curated
          presets include Conway (B3/S23), HighLife (B36/S23), Seeds (B2/S), Day &amp; Night
          (B3678/S34678), Maze, Replicator, Diamoeba, and more.
        </p>

        <h3>Quick answers</h3>
        <details className="faq-item">
          <summary>Is R-GoL-EE free?</summary>
          <div className="faq-a"><p>Yes — it is free and open-source, with no ads, accounts, or tracking.</p></div>
        </details>
        <details className="faq-item">
          <summary>Do I need to install anything?</summary>
          <div className="faq-a"><p>No. It runs in any modern desktop or mobile browser.</p></div>
        </details>
        <details className="faq-item">
          <summary>What makes R-GoL-EE different?</summary>
          <div className="faq-a">
            <p>
              Cell age is visible as color, any B/S rule is editable live, the sim detects still
              lifes and period loops (up to 128) and pauses itself, and the whole board is a
              pannable, zoomable canvas from 20% to 800%.
            </p>
          </div>
        </details>
      </section>

      <footer className="footer">
        Built by <a href="https://github.com/rahan91" rel="me author">Rahan</a> ·{" "}
        <a href={`${SITE_URL.replace(/\/$/, "")}/../../..` === "/" ? "https://github.com/rahan91/R-GoL-EE" : "https://github.com/rahan91/R-GoL-EE"} rel="source">Source on GitHub</a>
      </footer>
    </>
  );
}

export { SITE_URL };
