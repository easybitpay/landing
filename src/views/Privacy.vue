<script setup>
// Vue
import { onMounted } from 'vue'

// Bootstrap
import { ScrollSpy } from 'bootstrap'

// Components
import PageHeader from '../components/globals/PageHeader.vue'

// Functions
const scrollToId = (id) => {
  document.getElementById(id).scrollIntoView()
}

onMounted(() => {
  const scrollSpy = new ScrollSpy(document.body, {
    target: '#privacy-nav'
  })

  scrollSpy.refresh()
})
</script>

<template>
  <div class="container pt-14 d-flex gap-12">
    <div id="document-holder">
      <div
        data-bs-spy="scroll"
        data-bs-target="#privacy-nav"
        data-bs-smooth-scroll="true"
        tabindex="0"
      >
        <section id="overview">
          <PageHeader title="Privacy & Terms" description="We keep your funds & payments safe" />

          <p class="text-gray-800 dark-text-gray-400 mb-6">
            This Privacy Policy explains how
            <span class="text-dark fw-bolder">EasyBitPay</span> collects, uses, and protects
            information when you:
          </p>

          <ul class="d-flex flex-column gap-2">
            <li class="fs-7 text-gray-800 dark-text-gray-400">
              Use our website at <span class="text-dark fw-medium">https://easybitpay.com</span>
            </li>
            <li class="fs-7 text-gray-800 dark-text-gray-400">
              Use our mobile applications (the “Wallet”)
            </li>
            <li class="fs-7 text-gray-800 dark-text-gray-400">
              Use our merchant tools, payment gateway, and related services
            </li>
          </ul>

          <p class="text-gray-800 dark-text-gray-400 mb-6">
            (collectively, the
            <span class="text-dark fw-bolder">“Services”</span> )
          </p>

          <p class="text-gray-800 dark-text-gray-400 mb-0">
            By using the Services, you agree to the practices described in this Privacy Policy. If
            you do not agree with this Privacy Policy, please do not use the Services.
          </p>
        </section>

        <div class="divider my-10 h-2px"></div>

        <section id="item_1" class="mb-10">
          <h2 class="pb-3 border-bottom mb-4 text-dark">1. Who We Are?</h2>

          <p class="text-gray-800 dark-text-gray-400 mb-6">
            The Services are operated by <span class="text-dark fw-bolder">SepantaTech</span>, a
            company established under the laws of the
            <span class="text-dark fw-bolder">United Arab Emirates</span>
          </p>

          <p class="text-gray-800 dark-text-gray-400 mb-6">
            If you have any questions about this Privacy Policy or how we handle data, you can
            contact us at:
          </p>

          <div class="card mb-4">
            <div class="card-body p-0">
              <div
                class="d-flex flex-column flex-md-row align-items-start align-items-md-center gap-3 p-4 border-bottom"
              >
                <p class="w-120px min-w-120px fw-medium fs-7 text-dark mb-0">Email</p>
                <a
                  href="mailto:easybitpay.com@gmail.com"
                  class="badge badge-primary dark-bg-gray-100 dark-text-primary text-start"
                >
                  easybitpay.com@gmail.com
                </a>
              </div>
              <div
                class="d-flex flex-column flex-md-row align-items-start align-items-md-center gap-3 flex-wrap p-4"
              >
                <p class="w-120px min-w-120px fw-medium fs-7 text-dark mb-0">Website</p>
                <a
                  href="https://easybitpay.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="badge badge-primary dark-bg-gray-100 dark-text-primary text-start"
                >
                  https://easybitpay.com
                </a>
              </div>
            </div>
          </div>

          <p class="text-gray-800 dark-text-gray-400 mb-0">
            Our corporate structure and registration details may change over time. When they do, we
            will update this Privacy Policy and, where appropriate, the information on our website.
          </p>
        </section>

        <section id="item_2" class="mb-10">
          <h2 class="pb-3 border-bottom mb-4 text-dark">2. What We Do? (non-custodial services)</h2>

          <h4 class="text-dark mb-4">EasyBitPay provides:</h4>

          <ul class="d-flex flex-column gap-2">
            <li class="fs-7 text-gray-800 dark-text-gray-400">
              A <span class="text-dark fw-medium">non-custodial crypto wallet</span> for end users.
            </li>
            <li class="fs-7 text-gray-800 dark-text-gray-400">
              A <span class="text-dark fw-medium">crypto payment gateway</span> for merchants.
            </li>
          </ul>

          <h4 class="text-dark mb-4">Key points:</h4>

          <ul class="d-flex flex-column gap-2">
            <li class="fs-7 text-gray-800 dark-text-gray-400">
              We <span class="text-dark fw-medium">do not</span> store your private keys or seed
              phrases.
            </li>
            <li class="fs-7 text-gray-800 dark-text-gray-400">
              We <span class="text-dark fw-medium">do not</span> hold your crypto funds or have
              direct control over your wallets.
            </li>
            <li class="fs-7 text-gray-800 dark-text-gray-400">
              Payments occur directly on blockchain networks between payer and merchant.
            </li>
          </ul>

          <p class="text-gray-800 dark-text-gray-400 mb-0">
            Any private keys generated by our Wallet or interfaces are stored
            <span class="text-dark fw-medium">locally on your device</span>
            (for example, in application storage or in your own cloud backup, if you choose to use
            one). We do not have access to these private keys.
          </p>
        </section>

        <section id="item_3" class="mb-10">
          <h2 class="pb-3 border-bottom mb-4 text-dark">3. Information we do not collect</h2>

          <h4 class="text-dark mb-4">We <span class="fw-bolder">do not</span>:</h4>

          <ul class="d-flex flex-column gap-2">
            <li class="fs-7 text-gray-800 dark-text-gray-400">
              Store or have access to your <span class="text-dark fw-medium">private keys</span>.
            </li>
            <li class="fs-7 text-gray-800 dark-text-gray-400">
              Store or have access to your <span class="text-dark fw-medium">seed phrases</span> or
              recovery phrases.
            </li>
            <li class="fs-7 text-gray-800 dark-text-gray-400">
              Control or move your funds on your behalf.
            </li>
          </ul>

          <p class="text-gray-800 dark-text-gray-400 mb-0">
            If you lose your device or seed phrase, we cannot recover your funds for you.
          </p>
        </section>

        <section id="item_4" class="mb-10">
          <h2 class="pb-3 border-bottom mb-4 text-dark">4. Information we collect</h2>

          <p class="text-gray-800 dark-text-gray-400 mb-6">
            We aim to collect only the minimum information necessary to operate and improve the
            Services.
          </p>

          <p class="text-gray-800 dark-text-gray-400 mb-0">
            Depending on your use of EasyBitPay, we may collect the following categories of
            information.
          </p>
        </section>

        <section id="item_4-1" class="mb-10">
          <h4 class="text-dark mb-4">4.1 Merchant account and contact information</h4>

          <p class="text-gray-800 dark-text-gray-400 mb-6">
            If you use the Services as a merchant or business user, we may collect:
          </p>

          <ul class="d-flex flex-column gap-2 mb-0">
            <li class="fs-7 text-gray-800 dark-text-gray-400">Business name</li>
            <li class="fs-7 text-gray-800 dark-text-gray-400">Contact person’s name (optional)</li>
            <li class="fs-7 text-gray-800 dark-text-gray-400">Contact email address</li>
            <li class="fs-7 text-gray-800 dark-text-gray-400">Website URL</li>
            <li class="fs-7 text-gray-800 dark-text-gray-400">
              Receiving wallet addresses you provide for payments
            </li>
            <li class="fs-7 text-gray-800 dark-text-gray-400">
              Any other information you voluntarily provide to us (for example, when contacting
              support)
            </li>
          </ul>
        </section>

        <section id="item_4-2" class="mb-10">
          <h4 class="text-dark mb-4">4.2 Transaction and accounting data</h4>

          <p class="text-gray-800 dark-text-gray-400 mb-6">
            To operate the payment gateway and provide accounting views, we may process:
          </p>

          <ul class="d-flex flex-column gap-2">
            <li class="fs-7 text-gray-800 dark-text-gray-400">
              Wallet addresses you provide for receiving payments
            </li>
            <li class="fs-7 text-gray-800 dark-text-gray-400">Transaction identifiers (TXIDs)</li>
            <li class="fs-7 text-gray-800 dark-text-gray-400">
              Transaction amounts, tokens/currencies, and timestamps
            </li>
            <li class="fs-7 text-gray-800 dark-text-gray-400">
              Invoice IDs, order IDs, internal merchant references
            </li>
            <li class="fs-7 text-gray-800 dark-text-gray-400">
              Payment status (pending, confirmed, expired, failed)
            </li>
            <li class="fs-7 text-gray-800 dark-text-gray-400">
              Summaries of transaction histories for accounting, reporting, and dashboard purposes
            </li>
          </ul>

          <p class="text-gray-800 dark-text-gray-400 mb-0">
            We do not control blockchain networks and cannot modify or delete on-chain data.
          </p>
        </section>

        <section id="item_4-3" class="mb-10">
          <h4 class="text-dark mb-4">4.3 Usage data and log information</h4>

          <p class="text-gray-800 dark-text-gray-400 mb-6">
            When you access our website or apps, we may automatically collect:
          </p>

          <ul class="d-flex flex-column gap-2">
            <li class="fs-7 text-gray-800 dark-text-gray-400">
              IP address and approximate location (based on IP)
            </li>
            <li class="fs-7 text-gray-800 dark-text-gray-400">
              Browser type, device type, and operating system
            </li>
            <li class="fs-7 text-gray-800 dark-text-gray-400">Date and time of access</li>
            <li class="fs-7 text-gray-800 dark-text-gray-400">
              Pages or screens viewed, and features used
            </li>
            <li class="fs-7 text-gray-800 dark-text-gray-400">Referring/exit pages</li>
            <li class="fs-7 text-gray-800 dark-text-gray-400">
              App version and basic diagnostic data
            </li>
          </ul>

          <p class="text-gray-800 dark-text-gray-400 mb-0">
            We may use tools such as <span class="text-dark fw-medium">Google Analytics</span> (for
            usage analytics) and <span class="text-dark fw-medium">Sentry</span> (for error
            monitoring and performance) or similar services to help us understand and improve the
            Services.
          </p>
        </section>

        <section id="item_4-4" class="mb-10">
          <h4 class="text-dark mb-4">4.4 Cookies and similar technologies</h4>

          <p class="text-gray-800 dark-text-gray-400 mb-6">
            Our website may use cookies and similar technologies to:
          </p>

          <ul class="d-flex flex-column gap-2">
            <li class="fs-7 text-gray-800 dark-text-gray-400">Maintain user sessions</li>
            <li class="fs-7 text-gray-800 dark-text-gray-400">Remember your preferences</li>
            <li class="fs-7 text-gray-800 dark-text-gray-400">Analyze how the site is used</li>
          </ul>

          <p class="text-gray-800 dark-text-gray-400 mb-0">
            You can usually control cookies via your browser settings. If you disable cookies, some
            features of the site may not work correctly.
          </p>
        </section>

        <section id="item_5" class="mb-10">
          <h2 class="pb-3 border-bottom mb-4 text-dark">5. How we use your information</h2>

          <p class="text-gray-800 dark-text-gray-400 mb-0">
            We use the information described above for purposes including:
          </p>
        </section>

        <section id="item_5-1" class="mb-10">
          <h4 class="text-dark mb-4">5.1 Service delivery</h4>

          <ul class="d-flex flex-column gap-2 mb-0">
            <li class="fs-7 text-gray-800 dark-text-gray-400">
              Providing, operating, and maintaining the Services
            </li>
            <li class="fs-7 text-gray-800 dark-text-gray-400">
              Creating and managing merchant accounts
            </li>
            <li class="fs-7 text-gray-800 dark-text-gray-400">
              Generating and tracking payment invoices
            </li>
            <li class="fs-7 text-gray-800 dark-text-gray-400">
              Displaying transaction and accounting information to merchants
            </li>
          </ul>
        </section>

        <section id="item_5-2" class="mb-10">
          <h4 class="text-dark mb-4">5.2 Communication and support</h4>

          <ul class="d-flex flex-column gap-2">
            <li class="fs-7 text-gray-800 dark-text-gray-400">
              Responding to your inquiries and support requests
            </li>
            <li class="fs-7 text-gray-800 dark-text-gray-400">
              Sending you important notices about security, changes, or incidents
            </li>
          </ul>
        </section>

        <section id="item_5-3" class="mb-10">
          <h4 class="text-dark mb-4">5.3 Security and integrity</h4>

          <ul class="d-flex flex-column gap-2">
            <li class="fs-7 text-gray-800 dark-text-gray-400">
              Monitoring for suspicious or abusive activity
            </li>
            <li class="fs-7 text-gray-800 dark-text-gray-400">
              Detecting, preventing, and responding to fraud, abuse, or security incidents
            </li>
          </ul>
        </section>

        <section id="item_5-4" class="mb-10">
          <h4 class="text-dark mb-4">5.4 Improvement and analytics</h4>

          <ul class="d-flex flex-column gap-2">
            <li class="fs-7 text-gray-800 dark-text-gray-400">
              Understanding how the Services are used
            </li>
            <li class="fs-7 text-gray-800 dark-text-gray-400">
              Fixing errors and improving performance and usability
            </li>
          </ul>
        </section>

        <section id="item_5-5" class="mb-10">
          <h4 class="text-dark mb-4">5.5 Legal and compliance</h4>

          <ul class="d-flex flex-column gap-2">
            <li class="fs-7 text-gray-800 dark-text-gray-400">
              Complying with applicable laws and regulations
            </li>
            <li class="fs-7 text-gray-800 dark-text-gray-400">Enforcing our Terms & Conditions</li>
            <li class="fs-7 text-gray-800 dark-text-gray-400">
              Responding to lawful requests from authorities where required
            </li>
          </ul>
        </section>

        <section id="item_6" class="mb-10">
          <h2 class="pb-3 border-bottom mb-4 text-dark">
            6. Legal bases (for EEA/UK users, where applicable)
          </h2>

          <p class="text-gray-800 dark-text-gray-400 mb-6">
            Where data protection laws such as the GDPR apply, we process personal data based on:
          </p>

          <ul class="d-flex flex-column gap-2 mb-0">
            <li class="fs-7 text-gray-800 dark-text-gray-400">
              <span class="text-dark fw-medium">Performance of a contract:</span> To provide the
              Services you request as a user or merchant.
            </li>
            <li class="fs-7 text-gray-800 dark-text-gray-400">
              <span class="text-dark fw-medium">Legitimate interests:</span> To secure, maintain,
              and improve the Services, prevent abuse, and communicate reasonable updates.
            </li>
            <li class="fs-7 text-gray-800 dark-text-gray-400">
              <span class="text-dark fw-medium">Legal obligations:</span> To comply with applicable
              laws, regulations, and legal processes.
            </li>
          </ul>
        </section>

        <section id="item_7" class="mb-10">
          <h2 class="pb-3 border-bottom mb-4 text-dark">7. How we share information</h2>

          <p class="text-gray-800 dark-text-gray-400">
            We <span class="text-dark fw-medium">do not</span> sell your personal information.
          </p>

          <p class="text-gray-800 dark-text-gray-400 mb-0">
            We may share information in the following situations:
          </p>
        </section>

        <section id="item_7-1" class="mb-10">
          <h4 class="text-dark mb-4">7.1 Service providers</h4>
          <p class="text-gray-800 dark-text-gray-400 mb-6">
            With trusted third-party service providers that help us operate the Services, such as:
          </p>
          <ul class="d-flex flex-column gap-2">
            <li class="fs-7 text-gray-800 dark-text-gray-400">Hosting providers</li>
            <li class="fs-7 text-gray-800 dark-text-gray-400">
              Analytics tools (e.g., Google Analytics)
            </li>
            <li class="fs-7 text-gray-800 dark-text-gray-400">
              Error monitoring and logging tools (e.g., Sentry)
            </li>
            <li class="fs-7 text-gray-800 dark-text-gray-400">
              Pages or screens viewed, and features used
            </li>
            <li class="fs-7 text-gray-800 dark-text-gray-400">Email and communication providers</li>
          </ul>
          <p class="text-gray-800 dark-text-gray-400 mb-0">
            These providers act under appropriate agreements and are expected to protect your
            information.
          </p>
        </section>

        <section id="item_7-2" class="mb-10">
          <h4 class="text-dark mb-4">7.2 Legal and protection purposes</h4>
          <p class="text-gray-800 dark-text-gray-400 mb-6">
            We may disclose information if we reasonably believe it is necessary to:
          </p>
          <ul class="d-flex flex-column gap-2 mb-0">
            <li class="fs-7 text-gray-800 dark-text-gray-400">
              Comply with a legal obligation, court order, or governmental request
            </li>
            <li class="fs-7 text-gray-800 dark-text-gray-400">
              Protect the rights, property, or safety of EasyBitPay, our users, or others
            </li>
            <li class="fs-7 text-gray-800 dark-text-gray-400">
              Detect, prevent, or address fraud, security, or technical issues
            </li>
          </ul>
        </section>

        <section id="item_7-3" class="mb-10">
          <h4 class="text-dark mb-4">7.3 Business transfers</h4>
          <p class="text-gray-800 dark-text-gray-400 mb-6">
            If we are involved in a merger, acquisition, restructuring, or sale of assets, your
            information may be transferred as part of that transaction. We will take reasonable
            steps to ensure your information remains protected and notify you of material changes.
          </p>
          <p class="text-gray-800 dark-text-gray-400 mb-0">
            We do not grant any third party access to your private keys or seed phrases, as we do
            not store them.
          </p>
        </section>

        <section id="item_8" class="mb-10">
          <h2 class="pb-3 border-bottom mb-4 text-dark">8. International data transfers</h2>

          <p class="text-gray-800 dark-text-gray-400 mb-6">
            Depending on where you are located and where our infrastructure or service providers are
            based, your information may be transferred to and processed in other countries, which
            may have different data protection laws than your country.
          </p>

          <p class="text-gray-800 dark-text-gray-400 mb-0">
            We will take reasonable measures to ensure that, when data is transferred, it is
            protected in accordance with this Privacy Policy and applicable law.
          </p>
        </section>

        <section id="item_9" class="mb-10">
          <h2 class="pb-3 border-bottom mb-4 text-dark">9. Data security</h2>

          <p class="text-gray-800 dark-text-gray-400 mb-6">
            We use technical and organizational measures to protect your information, including:
          </p>

          <ul class="d-flex flex-column gap-2">
            <li class="fs-7 text-gray-800 dark-text-gray-400">
              Encryption in transit (HTTPS/TLS) where appropriate
            </li>
            <li class="fs-7 text-gray-800 dark-text-gray-400">
              Access control and least-privilege principles for internal systems
            </li>
            <li class="fs-7 text-gray-800 dark-text-gray-400">
              Regular software updates and basic security practices
            </li>
          </ul>

          <p class="text-gray-800 dark-text-gray-400 mb-6">
            However, no system is completely secure. You are responsible for:
          </p>

          <ul class="d-flex flex-column gap-2">
            <li class="fs-7 text-gray-800 dark-text-gray-400">
              Securing your devices and accounts
            </li>
            <li class="fs-7 text-gray-800 dark-text-gray-400">
              Maintaining the confidentiality of your seed phrases and private keys
            </li>
            <li class="fs-7 text-gray-800 dark-text-gray-400">
              Using secure backups and strong authentication methods where available
            </li>
          </ul>

          <p class="text-gray-800 dark-text-gray-400 mb-0">
            If you believe your account or data has been compromised, please contact us immediately
            at
            <a
              href="mailto:easybitpay.com@gmail.com"
              class="badge badge-primary dark-bg-gray-100 dark-text-primary text-start"
            >
              easybitpay.com@gmail.com
            </a>
            .
          </p>
        </section>

        <section id="item_10" class="mb-10">
          <h2 class="pb-3 border-bottom mb-4 text-dark">10. Data retention</h2>

          <p class="text-gray-800 dark-text-gray-400 mb-6">
            We retain information for as long as reasonably necessary to:
          </p>

          <ul class="d-flex flex-column gap-2">
            <li class="fs-7 text-gray-800 dark-text-gray-400">Provide and maintain the Services</li>
            <li class="fs-7 text-gray-800 dark-text-gray-400">
              Maintain accurate business and transaction records
            </li>
            <li class="fs-7 text-gray-800 dark-text-gray-400">
              Comply with legal and regulatory obligations
            </li>
            <li class="fs-7 text-gray-800 dark-text-gray-400">
              Resolve disputes and enforce our agreements
            </li>
          </ul>

          <p class="text-gray-800 dark-text-gray-400 mb-6">
            When information is no longer needed, we will take reasonable steps to delete or
            anonymize it, where technically feasible and commercially reasonable.
          </p>

          <p class="text-gray-800 dark-text-gray-400 mb-0">
            Because blockchain transactions are public and recorded on decentralized networks, we
            cannot delete or modify data stored on a blockchain.
          </p>
        </section>

        <section id="item_11" class="mb-10">
          <h2 class="pb-3 border-bottom mb-4 text-dark">11. Your rights</h2>

          <p class="text-gray-800 dark-text-gray-400 mb-6">
            Depending on your jurisdiction, you may have the following rights regarding your
            personal data:
          </p>

          <ul class="d-flex flex-column gap-2">
            <li class="fs-7 text-gray-800 dark-text-gray-400">
              <span class="text-dark fw-medium">Access:</span> Request a copy of the personal data
              we hold about you.
            </li>
            <li class="fs-7 text-gray-800 dark-text-gray-400">
              <span class="text-dark fw-medium">Rectification:</span> Request correction of
              inaccurate or incomplete data.
            </li>
            <li class="fs-7 text-gray-800 dark-text-gray-400">
              <span class="text-dark fw-medium">Erasure:</span> Request deletion of your personal
              data, subject to our legal obligations and technical limitations.
            </li>
            <li class="fs-7 text-gray-800 dark-text-gray-400">
              <span class="text-dark fw-medium">Restriction:</span> Request restriction of
              processing in certain circumstances.
            </li>
            <li class="fs-7 text-gray-800 dark-text-gray-400">
              <span class="text-dark fw-medium">Objection:</span> Object to certain types of
              processing (such as direct marketing).
            </li>
            <li class="fs-7 text-gray-800 dark-text-gray-400">
              <span class="text-dark fw-medium">Portability:</span> Request your data in a
              structured, commonly used, machine-readable format, where applicable.
            </li>
          </ul>

          <p class="text-gray-800 dark-text-gray-400 mb-0">
            To exercise your rights, contact us at
            <a
              href="mailto:easybitpay.com@gmail.com"
              class="badge badge-primary dark-bg-gray-100 dark-text-primary text-start"
            >
              easybitpay.com@gmail.com
            </a>
            We may request additional information to verify your identity before processing your
            request.
          </p>
        </section>

        <section id="item_12" class="mb-10">
          <h2 class="pb-3 border-bottom mb-4 text-dark">12. Children’s privacy</h2>

          <p class="text-gray-800 dark-text-gray-400">
            The Services are
            <span class="text-dark fw-medium">
              not intended for children under 18 years of age.
            </span>
          </p>

          <p class="text-gray-800 dark-text-gray-400 mb-0">
            We do not knowingly collect personal information from children under 18. If you believe
            a child under 18 has provided us with personal information, please contact us and we
            will take steps to delete such information where appropriate.
          </p>
        </section>

        <section id="item_13" class="mb-10">
          <h2 class="pb-3 border-bottom mb-4 text-dark">13. Third-party links and services</h2>

          <p class="text-gray-800 dark-text-gray-400">
            The Services may contain links to third-party websites, wallets, exchanges, or services.
            We are not responsible for the privacy practices or content of those third parties.
          </p>

          <p class="text-gray-800 dark-text-gray-400 mb-0">
            We encourage you to review the privacy policies of any third-party services you use.
          </p>
        </section>

        <section id="item_14" class="mb-10">
          <h2 class="pb-3 border-bottom mb-4 text-dark">14. Changes to this Privacy Policy</h2>

          <p class="text-gray-800 dark-text-gray-400">
            We may update this Privacy Policy from time to time. When we do, we will update the
            “Last updated” date at the top of this page.
          </p>

          <p class="text-gray-800 dark-text-gray-400 mb-0">
            If we make material changes, we may provide additional notice (for example, on our
            website or within the app). Your continued use of the Services after the changes become
            effective means you accept the updated Privacy Policy.
          </p>
        </section>

        <section id="item_15">
          <h2 class="pb-3 border-bottom mb-4 text-dark">15. Contact us</h2>

          <p class="text-gray-800 dark-text-gray-400 mb-6">
            If you have any questions about this Privacy Policy or how we handle data, you can
            contact us at:
          </p>

          <div class="card">
            <div class="card-body p-0">
              <div
                class="d-flex flex-column flex-md-row align-items-start align-items-md-center gap-3 p-4 border-bottom"
              >
                <p class="w-120px min-w-120px fw-medium fs-7 text-dark mb-0">Email</p>
                <a
                  href="mailto:easybitpay.com@gmail.com"
                  class="badge badge-primary dark-bg-gray-100 dark-text-primary text-start"
                >
                  easybitpay.com@gmail.com
                </a>
              </div>
              <div
                class="d-flex flex-column flex-md-row align-items-start align-items-md-center gap-3 flex-wrap p-4"
              >
                <p class="w-120px min-w-120px fw-medium fs-7 text-dark mb-0">Website</p>
                <a
                  href="https://easybitpay.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="badge badge-primary dark-bg-gray-100 dark-text-primary text-start"
                >
                  https://easybitpay.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

    <div class="d-none d-lg-block">
      <nav id="privacy-nav" class="scroll-spy">
        <nav class="nav flex-column gap-2">
          <a class="nav-link" href="#overview" @click.prevent="scrollToId('overview')">Overview</a>
          <a class="nav-link" href="#item_1" @click.prevent="scrollToId('item_1')">
            1. Who We Are?
          </a>
          <a class="nav-link" href="#item_2" @click.prevent="scrollToId('item_2')">
            2. What We Do?
          </a>
          <a class="nav-link" href="#item_3" @click.prevent="scrollToId('item_3')">
            3. Information we do not collect
          </a>
          <a class="nav-link" href="#item_4" @click.prevent="scrollToId('item_4')">
            4. Information we collect
          </a>

          <nav class="nav child flex-column">
            <a class="nav-link" href="#item_4-1" @click.prevent="scrollToId('item_4-1')">
              Merchant account and contact information
            </a>
            <a class="nav-link" href="#item_4-2" @click.prevent="scrollToId('item_4-2')">
              Transaction and accounting data
            </a>
            <a class="nav-link" href="#item_4-3" @click.prevent="scrollToId('item_4-3')">
              Usage data and log information
            </a>
            <a class="nav-link" href="#item_4-4" @click.prevent="scrollToId('item_4-4')">
              Cookies and similar technologies
            </a>
          </nav>

          <a class="nav-link" href="#item_5" @click.prevent="scrollToId('item_5')">
            5. How we use your information
          </a>

          <nav class="nav child flex-column">
            <a class="nav-link" href="#item_5-1" @click.prevent="scrollToId('item_5-1')">
              Service delivery
            </a>
            <a class="nav-link" href="#item_5-2" @click.prevent="scrollToId('item_5-2')">
              Communication and support
            </a>
            <a class="nav-link" href="#item_5-3" @click.prevent="scrollToId('item_5-3')">
              Security and integrity
            </a>
            <a class="nav-link" href="#item_5-4" @click.prevent="scrollToId('item_5-4')">
              Improvement and analytics
            </a>
            <a class="nav-link" href="#item_5-4" @click.prevent="scrollToId('item_5-4')">
              Legal and compliance
            </a>
          </nav>

          <a class="nav-link" href="#item_6" @click.prevent="scrollToId('item_6')">
            6. Legal bases
          </a>

          <a class="nav-link" href="#item_7" @click.prevent="scrollToId('item_7')">
            7. How we share information
          </a>

          <nav class="nav child flex-column">
            <a class="nav-link" href="#item_7-1" @click.prevent="scrollToId('item_7-1')">
              Service providers
            </a>
            <a class="nav-link" href="#item_7-2" @click.prevent="scrollToId('item_7-2')">
              Legal and protection purposes
            </a>
            <a class="nav-link" href="#item_7-3" @click.prevent="scrollToId('item_7-3')">
              Business transfers
            </a>
          </nav>

          <a class="nav-link" href="#item_8" @click.prevent="scrollToId('item_8')">
            8. International data transfers
          </a>

          <a class="nav-link" href="#item_9" @click.prevent="scrollToId('item_9')">
            9. Data security
          </a>

          <a class="nav-link" href="#item_10" @click.prevent="scrollToId('item_10')">
            10. Data retention
          </a>

          <a class="nav-link" href="#item_11" @click.prevent="scrollToId('item_11')">
            11. Your rights
          </a>

          <a class="nav-link" href="#item_12" @click.prevent="scrollToId('item_12')">
            12. Children’s privacy
          </a>

          <a class="nav-link" href="#item_13" @click.prevent="scrollToId('item_13')">
            13. Third-party links and services
          </a>

          <a class="nav-link" href="#item_14" @click.prevent="scrollToId('item_14')">
            14. Changes to this Privacy Policy
          </a>

          <a class="nav-link" href="#item_15" @click.prevent="scrollToId('item_15')">
            15. Contact us
          </a>
        </nav>
      </nav>
    </div>
  </div>
</template>
