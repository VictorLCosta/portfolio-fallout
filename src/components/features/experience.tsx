export function Experience() {
  return (
    <section id="experience" className="container mx-auto md:pt-32">
      <h2 className="text-center tracking-tight text-6xl text-balance">
        My Experience
      </h2>

      <div className="relative w-full mx-auto mt-20">
        <div className="flex flex-col w-full md:gap-10 max-w-7xl">
          <article className="flex items-start justify-between">
            <div className="w-full lg:max-w-sm">
              <div className="w-full flex flex-col gap-y-3 text-sm font-light">
                <time dateTime="JUN 2024">APR 2023 - Present</time>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold">Comunikime</h3>
                </div>
                <span className="font-medium">Remote work</span>
              </div>
            </div>
            <div className="relative w-full">
              <div className="flex flex-col gap-y-6 text-xs leading-relaxed md:text-sm">
                <h3 className="text-xl font-bold md:text-2xl">
                  .NET Developer
                </h3>
                <section aria-label="Key achievements">
                  <ul className="flex list-none flex-col gap-y-4">
                    <li className="leading-relaxed">
                      Developed an automated data validation system using .NET
                      Framework and Windows Forms.
                    </li>
                    <li className="leading-relaxed">
                      Implemented automated tests following the TDD (Test-Driven
                      Development) methodology.
                    </li>
                    <li className="leading-relaxed">
                      Wrote stored procedures, triggers, and functions in T-SQL
                      to implement complex business logic.
                    </li>
                    <li className="leading-relaxed">
                      Collaborated with cross-functional teams to define
                      requirements and design solutions tailored to project
                      needs.
                    </li>
                  </ul>
                </section>
                <section aria-label="Technologies used">
                  <div className="flex flex-wrap gap-2">
                    <span className="badge">.NET</span>
                    <span className="badge">.NET Framework</span>
                    <span className="badge">VB.NET</span>
                    <span className="badge">Windows Forms</span>
                    <span className="badge">SQL Server</span>
                    <span className="badge">T-SQL</span>
                    <span className="badge">Problem-solving</span>
                    <span className="badge">Teamwork</span>
                  </div>
                </section>
              </div>
            </div>
          </article>

          <article className="flex items-start justify-between">
            <div className="w-full lg:max-w-sm">
              <div className="w-full flex flex-col gap-y-3 text-sm font-light">
                <time dateTime="AUG 2021 - DEC 2022">AUG 2021 - DEC 2022</time>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold">RA System</h3>
                </div>
                <span className="font-medium">Remote work</span>
              </div>
            </div>
            <div className="relative w-full">
              <div className="flex flex-col gap-y-6 text-xs leading-relaxed md:text-sm">
                <h3 className="text-xl font-bold md:text-2xl">
                  Full-Stack Junior Developer
                </h3>
                <section aria-label="Key achievements">
                  <ul className="flex list-none flex-col gap-y-4">
                    <li>
                      Used AJAX and jQuery to create interactive website
                      experiences, enabling partial page updates.
                    </li>
                    <li>
                      Designed and implemented front-end components using
                      React.js.
                    </li>
                    <li>
                      Developed a WhatsApp Web clone page to support
                      instructor-student communication at an English school.
                    </li>
                    <li>
                      Created responsive designs for mobile devices using Razor
                      Pages.
                    </li>
                    <li>
                      Contributed to the implementation of an automated CI/CD
                      pipeline in Azure DevOps, optimizing build, testing, and
                      deployment processes.
                    </li>
                  </ul>
                </section>
                <section aria-label="Technologies used">
                  <div className="flex flex-wrap gap-2">
                    <span className="badge">ASP.NET Core</span>
                    <span className="badge">Ajax</span>
                    <span className="badge">JQuery</span>
                    <span className="badge">React</span>
                    <span className="badge">React Native</span>
                    <span className="badge">Azure Devops</span>
                    <span className="badge">Sql Server</span>
                    <span className="badge">Problem-solving</span>
                    <span className="badge">Typescript</span>
                    <span className="badge">Scrum</span>
                    <span className="badge">Tailwind CSS</span>
                  </div>
                </section>
              </div>
            </div>
          </article>

          <article className="flex items-start justify-between">
            <div className="w-full lg:max-w-sm">
              <div className="w-full flex flex-col gap-y-3 text-sm font-light">
                <time dateTime="JUN 2020 - JUL 2021">JUN 2020 - JUL 2021</time>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold">
                    WA5 Business Intelligence
                  </h3>
                </div>
                <span className="font-medium">
                  Santo André, São Paulo, Brazil
                </span>
              </div>
            </div>
            <div className="relative w-full">
              <div className="flex flex-col gap-y-6 text-xs leading-relaxed md:text-sm">
                <h3 className="text-xl font-bold md:text-2xl">
                  PHP Junior Developer
                </h3>
                <section aria-label="Key achievements">
                  <ul className="flex list-none flex-col gap-y-4">
                    <li>
                      Analyzed user feedback to improve UI design and overall
                      site usability.
                    </li>
                    <li>
                      Ensured all pages were SEO-optimized by adding meta tags,
                      titles, and descriptions.
                    </li>
                    <li>
                      Performed regular maintenance on WordPress websites,
                      including troubleshooting, content updates, and
                      functionality improvements.
                    </li>
                    <li>
                      Contributed to the development and maintenance of the
                      Santos Futebol Clube website.
                    </li>
                  </ul>
                </section>
                <section aria-label="Technologies used">
                  <div className="flex flex-wrap gap-2">
                    <span className="badge">PHP</span>
                    <span className="badge">Wordpress</span>
                    <span className="badge">Elementor</span>
                    <span className="badge">HTML</span>
                    <span className="badge">Bootstrap</span>
                  </div>
                </section>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
