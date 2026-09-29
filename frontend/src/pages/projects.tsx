const Projects = () => {
  return (
    <>
      <ol>
        <li>
          <div>
            <h1 className="font-bold">Self hosted webserver (this page)</h1>
            <p>
              A{" "}
              <a
                href="https://caddyserver.com/"
                className="text-cyan-600 underline"
              >
                Caddy
              </a>{" "}
              webserver exposed to a Cloudflare tunnel, running on my old
              computer as containerized microservices in Docker. It will serve
              as my portfolio, as an alternative to staring at code on GitHub.
              See{" "}
              <a
                href="https://github.com/AndreRishovdMioen/Webserver/blob/main/FEATURES.md"
                className="text-cyan-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                FEATURES.md
              </a>{" "}
              for current and planned features, which may not be visible on the
              frontend. The goal is a production-worthy website, with proper
              documentation, code standardisation, bullet proof security and an
              employment-worthy impression.
            </p>
            <a
              href="https://github.com/AndreRishovdMioen/Webserver"
              className="text-cyan-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/AndreRishovdMioen/Webserver
            </a>
          </div>
        </li>
      </ol>
    </>
  );
};

export default Projects;
