import Header from "../components/Header";
import SubHeader from "../components/SubHeader";

import style from "./style.module.scss";

export default function Admissions() {
  const deadLine = "January 15, 2023";
  const application_req = [
    "A statement of purpose that addresses your specific interests and/or expertise in the field you wish to study, and describes as specifically as possible the area of research you wish to pursue.",
    "Transcripts for all college-level institutions attended.",
    "Three letters of reference.",
    "If applying through the Dietrich School of Arts and Sciences, please click here",
    "If applying through the Swanson School of Engineering, please click here",
    "If applying through the School of Computing and Information, please click here",
  ];
  return (
    <div className={style.container}>
      <Header headingTitle="Admissions" />
      <SubHeader headingTitle=" How to Apply" />
      <section className={style.paragraph}>
        <p>
          Deadline <b>{deadLine}</b>
        </p>
        <p>
          To get started on your electronic application, you must create an
          account in GradCAS. You will receive a CAS ID number once your account
          is created. If you need to contact CAS Applicant Help Center, please
          provide this ID number so they can find your application quickly. It
          is not necessary to complete the application in one session, but you
          cannot submit a partially completed application, so be sure to save
          your work before exiting. You will need to enter your login
          information when you return to complete your application. Your
          application will be transmitted through a secure server and is kept
          confidential.
        </p>
      </section>
      <SubHeader headingTitle="All applicants (domestic and international) must provide" />
      <section className={style.paragraph}>
        <ul>
          {application_req.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
        <p>
          All application materials should be received by January 15, 2023 to
          guarantee full consideration for admission to the fall term of 2023.
          Late applications will be considered as space permits.
        </p>
        <p>
          All application materials must be uploaded to your application before
          submission. <b>If you are having issues</b> with any part of your
          on-line application, please reach out to the associated Applicant Help
          center.
        </p>
        <p>
          If you are applying to DSAS or SCI, please contact: GradCAS Applicant
          Help Center – Liaison (liaisonedu.com). If you cannot find the answer
          to your question(s), you can also contact them by phone{" "}
          <b>857-304-2086</b>
          or email: <b>gradcasinfo@liaisoncas.com.</b> For the quickest
          response, log in to your application and contact CAS by chat.
        </p>
        <p>
          If you are applying to SSOE, please use: EngineeringCAS Applicant Help
          Center – Liaison (liaisonedu.com). For help with application-related
          questions, you can log in to your application and contact CAS using
          the chat icon in the lower right corner. You can also contact them by
          phone at <b>857-304-2048</b> or email at{" "}
          <b>engineeringcasinfo@liaisoncas.com.</b>
        </p>
      </section>
      <SubHeader headingTitle="Additional Requirements For International Applicants" />
      <section className={style.paragraph}>
        <p>
          <b>Please provide all of the above plus:</b>
        </p>
        <p>
          Test of English as a Foreign Language (TOEFL), International English
          Language Testing System (IELTS), or the Duolingo English Test scores.
          The minimum TOEFL score of 100 (with at least a score of 22 in all of
          the four sections of speaking, listening, reading, and writing), the
          required minimum IELTS of 7.0 (with at least 6.5 in each of its four
          sections), or the required minimum Duolingo score of 110. Please
          submit your scores officially in order for them to be considered
          received.
        </p>
        <p>
          <b>TOEFL</b> scores will need to be sent sent electronically from ETS
          directly to the University of Pittsburgh. A PDF copy of the score
          report can be uploaded to your application under “Additional
          Information” as an unofficial copy until your official scores are
          received.
        </p>
        <p>
          <b>IELTS</b> report will need to be sent directly to the university. A
          PDF copy of the score report must be uploaded to your application
          under “Additional Information” as an unofficial copy until your
          official scores are received.
        </p>
        <p>
          <b>Duolingo </b>scores will need to be sent directly to the
          university. A PDF copy of the score report must be uploaded to your
          application under “Additional Information” as an unofficial copy until
          your official scores are received.
        </p>

        <p>
          <b>Application fee</b> – $75 For DSAS applicants: To be considered for
          an application fee waiver, submit this survey for review. More
          information can be found on the Graduate Studies site and through the
          application system. In an effort to reduce financial barriers to
          attending graduate school, the Kenneth P. Dietrich Graduate School of
          Arts and Sciences offers application fee waivers. Please note that fee
          waivers are approved on a case-by-case basis and not all fee waiver
          requests will be granted. All requests received will be reviewed and
          responded to within 48 hours during normal business hours: Monday –
          Friday 8:30a.m. to 5:00p.m. EST.
        </p>
      </section>
      <SubHeader headingTitle="Contact Information" />
      <section className={style.paragraph}>
        <ul>
          <li>
            <b>If applying through the Dietrich School of Arts & Sciences:</b>
            <div>
              <p>Christie Hay</p>{" "}
              <p>Computational Modeling and Simulation Program</p>
              <p>
                236 Chevron Science Center University of Pittsburgh Pittsburgh,
                PA 15260
              </p>
              <p>
                Phone: (412) 624-8501 FAX: (412) 624-8611 E-mail:
                cmspadm@pitt.edu
              </p>
            </div>
          </li>

          <li>
            <b>If applying through the Swanson School of Engineering:</b>
            <div>
              <p>Christy Kohser and Kathy McGuire</p>{" "}
              <p>
                151 Benedum Hall University of Pittsburgh Pittsburgh, PA 15216
              </p>
              <p>
                Phone: (412) 624-9803 FAX: (412) 624-9808 E-mail:
                ssoeadm@pitt.edu
              </p>
            </div>
          </li>

          <li>
            <b>If applying through the School of Computing and Information:</b>
            <div>
              <p>Keena Walker</p>{" "}
              <p>
                6117 Sennott Square University of Pittsburgh Pittsburgh, PA
                15206
              </p>
              <p>
                Phone: (412) 624-8495 FAX: (412) 624-8845 E-mail:
                keena@cs.pitt.edu About Pittsburgh: Cool Pittsburgh
              </p>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}
