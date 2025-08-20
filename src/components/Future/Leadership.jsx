/* -------------------- QuoteSection Component -------------------- */
const QuoteSection = () => {
  return (
    <section className="quote-section">
      {/* Background decoration */}
      <div className="quote-background">
        <div className="quote-decoration-1"></div>
        <div className="quote-decoration-2"></div>
        <div className="quote-decoration-3"></div>
      </div>

      <div className="quote-container">
        <div className="quote-mark-container">
          <div className="quote-mark">"</div>
        </div>
        <blockquote className="quote-text">
          The greatest achievements are born from a relentless pursuit of innovation and a collaborative spirit.
        </blockquote>
        <div className="quote-attribution">
          <div className="quote-author">— E-Cell WIET Leadership</div>
        </div>
      </div>
    </section>
  );
};