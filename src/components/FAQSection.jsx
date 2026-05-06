import { useState } from "react";

const FAQS = [
  {
    q: "Is ToDesktop For Me?",
    a: "Yes, if you are developing Electron apps and want to streamline the process of deploying, securing, and updating your app across multiple platforms (Windows, Mac, and Linux). ToDesktop helps eliminate frustration by handling much of the infrastructure, such as code signing, automated updates, and analytics.",
  },
  {
    q: "Can I try ToDesktop without buying?",
    a: "Yes, we offer a 7-day free trial for all our plans. If you're not satisfied with the product, just cancel before the trial ends and you won't be charged.",
  },
  {
    q: "What is the difference between ToDesktop for Electron and ToDesktop Builder?",
    a: "In short, ToDesktop for Electron is for developers who want to deploy, secure, and update their existing Electron app. ToDesktop Builder is for developers who want to create a desktop app from a web app — no Electron code required.",
  },
  {
    q: "Do you support staging and dev versions of my app?",
    a: "Yes, we support staging and dev versions of your app in the Performance plan and above. You can create a new version of your app and select the 'Staging' or 'Development' channel.",
  },
  {
    q: "I already use Electron Forge or Electron Builder. Can I migrate to ToDesktop?",
    a: "Yes, we can even use auto-update with your existing Electron app so migration is seamless from an end-user perspective. We have guides to help you migrate from electron-builder, electron-forge, and electron-packager.",
  },
  {
    q: "Do you collect or store data about my customers?",
    a: "We host your updates and downloads, so we collect IP addresses for logging and security purposes when a user downloads your app. We don't collect any other data about your customers or their usage.",
  },
  {
    q: "Can I migrate away from ToDesktop if it doesn't meet my needs?",
    a: "Yes, we never want you to be stuck with a service that doesn't meet your needs. If you're not satisfied with ToDesktop, reach out and we'll help you migrate to a different service for free.",
  },
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section className="faq-wrap">
      <div className="container">
        <div className="faq">
          <p className="section-eyebrow" style={{ textAlign: "center" }}>
            F.A.Q
          </p>
          <h2>Questions &amp; answers</h2>

          {FAQS.map((item, i) => (
            <div
              className={`faq-item${openIdx === i ? " open" : ""}`}
              key={i}
            >
              <button
                className="faq-q"
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
              >
                {item.q}
                <span className="faq-chevron">▼</span>
              </button>
              <div className="faq-a">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
