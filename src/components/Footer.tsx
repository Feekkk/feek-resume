export default function Footer() {
  return (
    <footer className="w-full max-w-7xl mx-auto px-8 md:px-12 py-8 mt-16">
      <div className="timeline-meta">
        © {new Date().getFullYear()} All rights reserved.
      </div>
    </footer>
  );
}
