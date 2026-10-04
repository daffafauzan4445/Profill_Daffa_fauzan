function Contact() {
  const contacts = [
    {
      label: "Email",
      value: "daffaabil2921@gmail.com",
      url: "mailto:daffaabil2921@gmail.com",
    },
    {
      label: "Instagram",
      value: "@benslife_1229",
      url: "https://www.instagram.com/benslife_1229?stkn=emNjMjB2cXkyZmI=",
    },
    {
      label: "GitHub",
      value: "daffafauzan4445",
      url: "https://github.com/daffafauzan4445/Chunking_daffafauzan-",
    },
  ];

  return (
    <section className="contact-section">

      <div className="contact-header">

        <p className="small-title">
          CONTACT ME
        </p>

        <h1>
          Mari <span>Terhubung</span>
        </h1>

        <p>
          Kalau ingin menghubungi saya, silakan pilih salah satu
          kontak di bawah ini.
        </p>

      </div>

      <div className="contact-list">

        {contacts.map((contact, index) => (
          <a
            key={index}
            href={contact.url}
            target={contact.label === "Email" ? "_self" : "_blank"}
            rel="noreferrer"
            className="contact-card"
          >

            <div className="contact-number">
              0{index + 1}
            </div>

            <div className="contact-info">

              <span>
                {contact.label}
              </span>

              <h3>
                {contact.value}
              </h3>

            </div>

            <div className="contact-arrow">
              ↗
            </div>

          </a>
        ))}

      </div>

    </section>
  );
}

export default Contact;

