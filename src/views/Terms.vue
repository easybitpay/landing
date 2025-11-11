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
    target: '#term-nav'
  })

  scrollSpy.refresh()
})
</script>

<template>
  <div class="container pt-14 d-flex gap-12">
    <div id="document-holder">
      <div
        data-bs-spy="scroll"
        data-bs-target="#term-nav"
        data-bs-smooth-scroll="true"
        tabindex="0"
      >
        <section id="overview">
          <PageHeader title="Terms & Conditions" description="Last updated: 10 November 2025" />

          <p class="text-gray-800 dark-text-gray-400 mb-6">
            These Terms & Conditions (“Terms”) govern your access to and use of:
          </p>

          <ul class="d-flex flex-column gap-2 fs-7 text-gray-800 dark-text-gray-400">
            <li>
              Use our website at <span class="text-dark fw-medium">https://easybitpay.com</span>
            </li>
            <li>Use our mobile applications (the “Wallet”)</li>
            <li>Use our merchant tools, payment gateway, and related services</li>
          </ul>

          <p class="text-gray-800 dark-text-gray-400 mb-6">
            (collectively, the
            <span class="text-dark fw-bolder">“Services”</span> ) operated by
            <span class="text-dark fw-medium">SepantaTech</span>
          </p>

          <p class="text-gray-800 dark-text-gray-400 mb-0">
            By accessing or using the Services, you agree to be bound by these Terms. If you do not
            agree to these Terms, do not use the Services.
          </p>
        </section>

        <div class="divider my-10 h-2px"></div>

        <section id="item_1" class="mb-10">
          <h2 class="pb-3 border-bottom mb-4 text-dark">1. Eligibility</h2>

          <p class="text-gray-800 dark-text-gray-400 mb-6">
            By using the Services, you represent and warrant that:
          </p>

          <ol class="d-flex flex-column gap-2 fs-7 text-gray-800 dark-text-gray-400">
            <li>
              You are at least <span class="text-dark fw-medium"> 18 years old </span> and have the
              legal capacity to enter into a binding agreement.
            </li>
            <li>
              You are not located in, a citizen or resident of, or otherwise subject to the
              jurisdiction of:

              <ul class="d-flex flex-column gap-2 mt-2">
                <li>The <span class="text-dark fw-medium">United States of America</span></li>
                <li>
                  Any member state of the <span class="text-dark fw-medium">European Union</span>
                </li>
                <li>
                  Or any other country or region subject to comprehensive sanctions or embargoes
                  under the laws or regulations of the United Nations, the United States, the
                  European Union, or other relevant authorities.
                </li>
              </ul>
            </li>

            <li>
              You are not listed on any sanctions or restricted party list maintained by any
              relevant authority.
            </li>
          </ol>

          <p class="text-gray-800 dark-text-gray-400 mb-0">
            We may restrict or terminate access to the Services where we believe use would violate
            applicable laws, sanctions, or these Terms.
          </p>
        </section>

        <section id="item_2" class="mb-10">
          <h2 class="pb-3 border-bottom mb-4 text-dark">2. Description of the Services</h2>

          <h6 class="text-dark mb-4">EasyBitPay provides tools that enable:</h6>

          <ul class="d-flex flex-column gap-2 fs-7 text-gray-800 dark-text-gray-400">
            <li>
              <span class="text-dark fw-medium">End users</span> to manage compatible crypto assets
              through a <span>non-custodial wallet</span>.
            </li>
            <li>
              <span class="text-dark fw-medium">Merchants </span> to accept crypto payments using a
              <span class="text-dark fw-medium">crypto payment gateway</span> by displaying payment
              instructions or invoices to customers.
            </li>
          </ul>

          <h6 class="text-dark mb-4">Key characteristics:</h6>

          <ul class="d-flex flex-column gap-2 fs-7 text-gray-800 dark-text-gray-400">
            <li>
              We <span class="text-dark fw-medium">do not</span> hold or control user or merchant
              funds.
            </li>
            <li>
              We <span class="text-dark fw-medium">do not</span> store private keys or seed phrases.
            </li>
            <li>
              Payments are executed directly on blockchain networks between the payer and the
              merchant.
            </li>
          </ul>

          <h6 class="text-dark mb-4">We <span class="fw-bolder">do not</span> provide:</h6>

          <ul class="d-flex flex-column gap-2 fs-7 text-gray-800 dark-text-gray-400">
            <li>Fiat currency deposits or withdrawals (no cash-in / cash-out).</li>
            <li>Exchange or trading services between different currencies or tokens.</li>
            <li>Financial, tax, investment, or legal advice.</li>
          </ul>

          <p class="text-gray-800 dark-text-gray-400 mb-0">
            The specific features and supported assets may change over time and will be reflected in
            the Services and documentation.
          </p>
        </section>

        <section id="item_3" class="mb-10">
          <h2 class="pb-3 border-bottom mb-4 text-dark">
            3. Non-custodial nature and your responsibilities
          </h2>

          <p class="text-gray-800 dark-text-gray-400 mb-6">
            The Services are designed to be non-custodial. That means:
          </p>

          <h6 class="text-dark mb-4">1) You are solely responsible for:</h6>

          <ul class="d-flex flex-column gap-2 fs-7 text-gray-800 dark-text-gray-400">
            <li>Generating, storing, and securing your private keys and seed phrases.</li>
            <li>Backing up your wallet and recovery information.</li>
            <li>
              Carefully reviewing and authorizing each transaction before broadcasting it to the
              network.
            </li>
          </ul>

          <h6 class="text-dark mb-4">2) We cannot and do not:</h6>

          <ul class="d-flex flex-column gap-2 fs-7 text-gray-800 dark-text-gray-400">
            <li>Access or recover your private keys or seed phrases.</li>
            <li>Recover funds if you lose your private keys or seed phrases.</li>
            <li>Reverse or cancel confirmed blockchain transactions.</li>
          </ul>

          <p class="text-gray-800 dark-text-gray-400 mb-0">
            If you lose access to your private keys or seed phrase, your funds may be permanently
            lost. You understand and accept this risk.
          </p>
        </section>

        <section id="item_4" class="mb-10">
          <h2 class="pb-3 border-bottom mb-4 text-dark">4. Merchant use and obligations</h2>

          <p class="text-gray-800 dark-text-gray-400 mb-0">
            If you use the Services as a merchant:
          </p>
        </section>

        <section id="item_4-1" class="mb-10">
          <h4 class="text-dark mb-4">4.1 Merchant information</h4>

          <p class="text-gray-800 dark-text-gray-400 mb-6">You may be required to provide:</p>

          <ul class="d-flex flex-column gap-2 fs-7 text-gray-800 dark-text-gray-400">
            <li>Business or trade name</li>
            <li>Contact email and other contact details</li>
            <li>Website or platform URL</li>
            <li>One or more wallet addresses to receive payments</li>
          </ul>

          <p class="text-gray-800 dark-text-gray-400 mb-0">
            You represent that the information you provide is accurate and kept up to date.
          </p>
        </section>

        <section id="item_4-2" class="mb-10">
          <h4 class="text-dark mb-4">4.2 Wallets and receiving addresses</h4>

          <p class="text-gray-800 dark-text-gray-400 mb-6">You are responsible for:</p>

          <ul class="d-flex flex-column gap-2 fs-7 text-gray-800 dark-text-gray-400 mb-0">
            <li>
              Ensuring the receiving addresses you provide are correct and under your control.
            </li>
            <li>
              Managing your own wallets and any associated security measures (e.g., backups,
              hardware wallets).
            </li>
          </ul>
        </section>

        <section id="item_4-3" class="mb-10">
          <h4 class="text-dark mb-4">4.3 Compliance with laws</h4>

          <p class="text-gray-800 dark-text-gray-400 mb-6">
            You are solely responsible for complying with all laws and regulations that apply to
            your business and your use of the Services, including but not limited to:
          </p>

          <ul class="d-flex flex-column gap-2 fs-7 text-gray-800 dark-text-gray-400 mb-0">
            <li>Tax reporting and payment</li>
            <li>Consumer protection laws</li>
            <li>
              Any anti-money laundering (AML), counter-terrorist financing (CTF), or similar
              obligations that may apply to you
            </li>
          </ul>
        </section>

        <section id="item_4-4" class="mb-10">
          <h4 class="text-dark mb-4">4.4 Your relationship with your customers</h4>

          <ul class="d-flex flex-column gap-2 mb-0 fs-7 text-gray-800 dark-text-gray-400">
            <li>You are solely responsible for your relationship with your customers.</li>
            <li>We are not a party to transactions between you and your customers.</li>
            <li>We do not guarantee or insure any payments or refunds.</li>
          </ul>
        </section>

        <section id="item_4-5" class="mb-10">
          <h4 class="text-dark mb-4">4.5 Prohibited conduct by merchants</h4>

          <p class="text-gray-800 dark-text-gray-400 mb-6">
            You may not use the Services to support or promote activities that are illegal,
            fraudulent, or otherwise violate these Terms, including but not limited to:
          </p>

          <ul class="d-flex flex-column gap-2 fs-7 text-gray-800 dark-text-gray-400">
            <li>Sale of illegal goods or services</li>
            <li>Fraudulent schemes, scams, or Ponzi/pyramid schemes</li>
            <li>Distribution of malware, ransomware, or malicious code</li>
          </ul>

          <p class="text-gray-800 dark-text-gray-400 mb-0">
            We may suspend or terminate your access to the Services if we reasonably believe you are
            engaged in prohibited activities.
          </p>
        </section>

        <section id="item_5" class="mb-10">
          <h2 class="pb-3 border-bottom mb-0 text-dark">5. Fees and network costs</h2>
        </section>

        <section id="item_5-1" class="mb-10">
          <h4 class="text-dark mb-4">5.1 Service fees</h4>

          <ul class="d-flex flex-column gap-2 mb-0 fs-7 text-gray-800 dark-text-gray-400">
            <li>At present, EasyBitPay may provide certain Services without charging a fee.</li>
            <li>
              We reserve the right to introduce or modify fees for any part of the Services in the
              future.
            </li>
            <li>
              Any applicable fees will be disclosed on our website or within the Services before
              they apply.
            </li>
          </ul>
        </section>

        <section id="item_5-2" class="mb-10">
          <h4 class="text-dark mb-4">5.2 Blockchain network fees</h4>

          <ul class="d-flex flex-column gap-2 fs-7 text-gray-800 dark-text-gray-400">
            <li>
              You and your users are responsible for any transaction or “network” fees charged by
              blockchain networks (e.g., miner fees, gas fees).
            </li>
            <li>These fees are not controlled by EasyBitPay.</li>
          </ul>
        </section>

        <section id="item_5-3" class="mb-10">
          <h4 class="text-dark mb-4">5.3 Taxes</h4>

          <ul class="d-flex flex-column gap-2 fs-7 text-gray-800 dark-text-gray-400">
            <li>Monitoring for suspicious or abusive activity</li>
            <li>Detecting, preventing, and responding to fraud, abuse, or security incidents</li>
          </ul>
        </section>

        <section id="item_5-4" class="mb-10">
          <h4 class="text-dark mb-4">5.4 Improvement and analytics</h4>

          <p class="text-gray-800 dark-text-gray-400 mb-0">
            You are solely responsible for determining and paying any taxes, duties, or similar
            governmental charges that may apply to your use of the Services or to payments you
            receive.
          </p>
        </section>

        <section id="item_5-5" class="mb-10">
          <h4 class="text-dark mb-4">5.5 Legal and compliance</h4>

          <ul class="d-flex flex-column gap-2 fs-7 text-gray-800 dark-text-gray-400">
            <li>Complying with applicable laws and regulations</li>
            <li>Enforcing our Terms & Conditions</li>
            <li>Responding to lawful requests from authorities where required</li>
          </ul>
        </section>

        <section id="item_6" class="mb-10">
          <h2 class="pb-3 border-bottom mb-4 text-dark">6. Acceptable use</h2>

          <ul class="d-flex flex-column gap-2 fs-7 text-gray-800 dark-text-gray-400">
            <li>For any unlawful, fraudulent, or malicious activity.</li>
            <li>In a manner that violates any applicable law or regulation.</li>
            <li>In violation of sanctions or export control laws.</li>
            <li>
              To support or promote:
              <ul>
                <li>Money laundering or terrorist financing</li>
                <li>Ransomware operations</li>
                <li>Child exploitation or abuse</li>
                <li>Distribution of malware or illegal content</li>
              </ul>
            </li>
            <li>
              To interfere with or disrupt the Services, including by:
              <ul>
                <li>Attempting unauthorized access to our systems</li>
                <li>Introducing viruses, worms, or other malicious code</li>
                <li>Overloading or attacking our infrastructure</li>
              </ul>
            </li>
            <li>
              To impersonate any person or entity or misrepresent your affiliation with any person
              or entity.
            </li>
          </ul>

          <p class="text-gray-800 dark-text-gray-400 mb-0">
            We may suspend or terminate your access to the Services if we reasonably believe you
            have violated this section or any other part of these Terms.
          </p>
        </section>

        <section id="item_7" class="mb-10">
          <h2 class="pb-3 border-bottom mb-4 text-dark">
            7. Third-party services and blockchain networks
          </h2>

          <h6 class="text-dark mb-4">The Services may interact with or rely on third-party:</h6>

          <ul class="d-flex flex-column gap-2 fs-7 text-gray-800 dark-text-gray-400">
            <li>Wallets, exchanges, or service providers</li>
            <li>Blockchain networks (such as Bitcoin, Ethereum, or others)</li>
          </ul>

          <h6 class="text-dark mb-4">
            We do not control these third parties or networks and are
            <span class="fw-bolder">not responsible</span> for:
          </h6>

          <ul class="d-flex flex-column gap-2 fs-7 text-gray-800 dark-text-gray-400">
            <li>Their performance, security, availability, or functionality</li>
            <li>Any losses or damages arising from their actions or failures</li>
          </ul>

          <h6 class="text-dark mb-4">You acknowledge and accept that:</h6>

          <ul class="d-flex flex-column gap-2 fs-7 text-gray-800 dark-text-gray-400">
            <li>
              Blockchain networks are public, decentralized systems, and transactions are generally
              <span class="text-dark fw-medium">irreversible</span> once confirmed.
            </li>
            <li>
              Network congestion, forks, attacks, or technical issues may delay, disrupt, or fail
              transactions.
            </li>
          </ul>

          <p class="text-gray-800 dark-text-gray-400 mb-0">
            You are solely responsible for choosing which networks, assets, and third-party services
            you use in combination with EasyBitPay.
          </p>
        </section>

        <section id="item_8" class="mb-10">
          <h2 class="pb-3 border-bottom mb-4 text-dark">
            8. No financial, investment, or legal advice
          </h2>

          <p class="text-gray-800 dark-text-gray-400 mb-6">
            All information provided through the Services (including documentation, examples, and
            other materials) is for
            <span class="text-dark fw-medium">general informational purposes only</span>.
          </p>

          <h6 class="text-dark mb-4">Nothing in the Services constitutes:</h6>

          <ul class="d-flex flex-column gap-2 fs-7 text-gray-800 dark-text-gray-400">
            <li>Financial or investment advice</li>
            <li>Legal or tax advice</li>
            <li>A recommendation to buy, sell, or hold any asset</li>
          </ul>

          <p class="text-gray-800 dark-text-gray-400 mb-0">
            You should consult your own professional advisors before making any financial or legal
            decisions.
          </p>
        </section>

        <section id="item_9" class="mb-10">
          <h2 class="pb-3 border-bottom mb-4 text-dark">
            9. Intellectual property and open-source components
          </h2>

          <h6 class="text-dark mb-4">Unless otherwise stated:</h6>

          <ul class="d-flex flex-column gap-2 fs-7 text-gray-800 dark-text-gray-400">
            <li>
              The <span class="text-dark fw-medium">EasyBitPay name, logo, branding,</span> and the
              overall design of the Services are owned by or licensed to us and may not be used
              without our permission.
            </li>
            <li>
              Certain parts of our software, including some frontend applications and documentation,
              are made available as
              <span class="text-dark fw-medium">open-source software</span> under licenses specified
              in the respective GitHub repositories (for example, MIT or other licenses).
            </li>
          </ul>

          <h6 class="text-dark mb-4">When you use any open-source components of EasyBitPay:</h6>

          <ul class="d-flex flex-column gap-2 mb-0 fs-7 text-gray-800 dark-text-gray-400">
            <li>
              Your use is governed by the applicable open-source license that accompanies that
              component.
            </li>
            <li>
              In the event of a conflict between these Terms and the open-source license for a
              specific component, the open-source license will govern your use of that component.
            </li>
          </ul>
        </section>

        <section id="item_10" class="mb-10">
          <h2 class="pb-3 border-bottom mb-4 text-dark">10. Service availability and changes</h2>

          <h6 class="text-dark mb-4">
            We aim to keep the Services available and functioning, but we do not guarantee:
          </h6>

          <ul class="d-flex flex-column gap-2 fs-7 text-gray-800 dark-text-gray-400">
            <li>Uninterrupted access to the Services</li>
            <li>That the Services will be free from errors, bugs, or security vulnerabilities</li>
          </ul>

          <h6 class="text-dark mb-4">We may, at any time and without prior notice:</h6>

          <ul class="d-flex flex-column gap-2 fs-7 text-gray-800 dark-text-gray-400">
            <li>Modify, update, or remove any feature or part of the Services</li>
            <li>Temporarily or permanently discontinue the Services or any part of them</li>
          </ul>

          <p class="text-gray-800 dark-text-gray-400 mb-0">
            Where reasonably possible, we will try to provide notice of major changes that
            materially affect your use of the Services.
          </p>
        </section>

        <section id="item_11" class="mb-10">
          <h2 class="pb-3 border-bottom mb-4 text-dark">11. Disclaimer of warranties</h2>

          <p class="text-gray-800 dark-text-gray-400 mb-6">
            To the maximum extent permitted by law, the Services are provided on an
            <span class="text-dark fw-medium"> “as is” </span> and
            <span class="text-dark fw-medium">“as available”</span> basis, and we expressly disclaim
            all warranties of any kind, whether express or implied, including but not limited to:
          </p>

          <ul class="d-flex flex-column gap-2 fs-7 text-gray-800 dark-text-gray-400">
            <li>Implied warranties of merchantability</li>
            <li>Fitness for a particular purpose</li>
            <li>Non-infringement</li>
            <li>Accuracy, reliability, or completeness of any information or content</li>
            <li>Security, error-free operation, or availability of the Services</li>
          </ul>

          <p class="text-gray-800 dark-text-gray-400 mb-0">
            You use the Services at your own risk.
          </p>
        </section>

        <section id="item_12" class="mb-10">
          <h2 class="pb-3 border-bottom mb-4 text-dark">12. Limitation of liability</h2>

          <h6 class="text-dark mb-6">To the maximum extent permitted by law:</h6>

          <ol class="d-flex flex-column gap-2 fs-7 text-gray-800 dark-text-gray-400">
            <li>
              In no event shall EasyBitPay, SepantaTech, or any of their owners, directors,
              employees, or agents be liable for:
              <ul class="d-flex flex-column gap-2 mt-2">
                <li>Any indirect, incidental, special, consequential, or punitive damages.</li>
                <li>Any loss of profits, revenue, data, goodwill, or business opportunities.</li>
                <li>
                  Any loss resulting from:
                  <ul class="d-flex flex-column gap-2 mt-2">
                    <li>Lost or compromised private keys or seed phrases.</li>
                    <li>Errors or failures of blockchain networks or third-party services.</li>
                    <li>Unauthorized access to your devices, wallets, or accounts.</li>
                    <li>Your or your users’ misuse of the Services.</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              Our total aggregate liability for any claims arising out of or relating to the
              Services or these Terms, whether in contract, tort, or otherwise, shall be limited to
              the <span class="text-dark fw-medium">lesser</span> of:
              <ul class="d-flex flex-column gap-2 mt-2">
                <li>
                  The total amount of fees you have paid to EasyBitPay for the Services in the
                  <span class="text-dark fw-medium">12 months</span> preceding the event giving rise
                  to the claim, or
                </li>
                <li>
                  <span class="text-dark fw-medium">100 USD</span> (one hundred United States
                  dollars).
                </li>
              </ul>
            </li>
          </ol>

          <p class="text-gray-800 dark-text-gray-400 mb-0">
            Some jurisdictions do not allow the exclusion or limitation of certain damages or
            liabilities. In such cases, these limitations shall apply to the maximum extent
            permitted by applicable law.
          </p>
        </section>

        <section id="item_13" class="mb-10">
          <h2 class="pb-3 border-bottom mb-4 text-dark">13. Indemnification</h2>

          <p class="text-gray-800 dark-text-gray-400">
            You agree to indemnify, defend, and hold harmless EasyBitPay, SepantaTech, and their
            owners, directors, employees, and agents from and against any and all claims,
            liabilities, damages, losses, and expenses (including reasonable legal fees) arising out
            of or in connection with:
          </p>

          <ul class="d-flex flex-column gap-2 fs-7 text-gray-800 dark-text-gray-400">
            <li>Your use of the Services</li>
            <li>Your violation of these Terms</li>
            <li>Your violation of any applicable law or regulation</li>
            <li>Your violation of any rights of any third party</li>
          </ul>

          <p class="text-gray-800 dark-text-gray-400 mb-0">
            We reserve the right, at your expense, to assume the exclusive defense and control of
            any matter subject to indemnification by you, and you agree to cooperate with our
            defense of such claims.
          </p>
        </section>

        <section id="item_14" class="mb-10">
          <h2 class="pb-3 border-bottom mb-4 text-dark">14. Governing law and jurisdiction</h2>

          <p class="text-gray-800 dark-text-gray-400">
            These Terms and any dispute or claim arising out of or in connection with them or the
            Services shall be governed by and construed in accordance with the
            <span class="text-dark fw-medium">laws of the United Arab Emirates</span>, without
            regard to its conflict of law principles.
          </p>

          <p class="text-gray-800 dark-text-gray-400 mb-6">
            You agree that the courts of
            <span class="text-dark fw-medium">Dubai, United Arab Emirates</span> shall have
            exclusive jurisdiction to settle any dispute or claim arising out of or in connection
            with these Terms or the Services.
          </p>

          <p class="text-gray-800 dark-text-gray-400 mb-0">
            Nothing in this section limits our right to seek injunctive or other equitable relief in
            any jurisdiction.
          </p>
        </section>

        <section id="item_15" class="mb-10">
          <h2 class="pb-3 border-bottom mb-4 text-dark">15. Changes to these Terms</h2>

          <p class="text-gray-800 dark-text-gray-400 mb-6">
            We may update these Terms from time to time. When we do, we will update the “Last
            updated” date at the top of this page.
          </p>

          <p class="text-gray-800 dark-text-gray-400 mb-6">
            If we make material changes, we may provide additional notice (for example, on our
            website or within the Services). Your continued use of the Services after any changes
            have become effective constitutes your acceptance of the revised Terms.
          </p>

          <p class="text-gray-800 dark-text-gray-400 mb-0">
            If you do not agree to the updated Terms, you must stop using the Services.
          </p>
        </section>

        <section id="item_16" class="mb-10">
          <h2 class="pb-3 border-bottom mb-4 text-dark">16. Changes to these Terms</h2>

          <h6 class="text-dark mb-4">
            We may suspend or terminate your access to the Services, in whole or in part, at any
            time and for any reason, including but not limited to:
          </h6>

          <ul class="d-flex flex-column gap-2 fs-7 text-gray-800 dark-text-gray-400">
            <li>Your actual or suspected violation of these Terms</li>
            <li>Your actual or suspected violation of applicable law or sanctions</li>
            <li>Security or technical issues affecting the Services</li>
          </ul>

          <h6 class="text-dark mb-4">Upon termination:</h6>

          <ul class="d-flex flex-column gap-2 fs-7 text-gray-800 dark-text-gray-400">
            <li>Your right to use the Services will immediately cease.</li>
            <li>
              Sections of these Terms that by their nature should survive termination (including,
              but not limited to, limitations of liability, indemnification, and governing law)
              shall continue in full force and effect.
            </li>
          </ul>

          <p class="text-gray-800 dark-text-gray-400 mb-0">
            You may stop using the Services at any time. Termination does not relieve you of any
            obligations arising prior to termination.
          </p>
        </section>

        <section id="item_17">
          <h2 class="pb-3 border-bottom mb-4 text-dark">17. Contact information</h2>

          <p class="text-gray-800 dark-text-gray-400 mb-6">
            If you have any questions about these Terms or the Services, please contact:
          </p>

          <div class="card">
            <div class="card-body p-0">
              <div class="p-4 border-bottom fw-medium fs-7 text-dark">EasyBitPay / SepantaTech</div>

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
      <nav id="term-nav" class="scroll-spy">
        <nav class="nav flex-column gap-2">
          <a class="nav-link" href="#overview" @click.prevent="scrollToId('overview')">Overview</a>
          <a class="nav-link" href="#item_1" @click.prevent="scrollToId('item_1')">
            1. Eligibility
          </a>
          <a class="nav-link" href="#item_2" @click.prevent="scrollToId('item_2')">
            2. Description of the Services
          </a>
          <a class="nav-link" href="#item_3" @click.prevent="scrollToId('item_3')">
            3. Non-custodial nature and your responsibilities
          </a>
          <a class="nav-link" href="#item_4" @click.prevent="scrollToId('item_4')">
            4. Merchant use and obligations
          </a>

          <nav class="nav child flex-column">
            <a class="nav-link" href="#item_4-1" @click.prevent="scrollToId('item_4-1')">
              Merchant information
            </a>
            <a class="nav-link" href="#item_4-2" @click.prevent="scrollToId('item_4-2')">
              Wallets and receiving addresses
            </a>
            <a class="nav-link" href="#item_4-3" @click.prevent="scrollToId('item_4-3')">
              Compliance with laws
            </a>
            <a class="nav-link" href="#item_4-4" @click.prevent="scrollToId('item_4-4')">
              Your relationship with your customers
            </a>
            <a class="nav-link" href="#item_4-5" @click.prevent="scrollToId('item_4-5')">
              Prohibited conduct by merchants
            </a>
          </nav>

          <a class="nav-link" href="#item_5" @click.prevent="scrollToId('item_5')">
            5. Fees and network costs
          </a>

          <nav class="nav child flex-column">
            <a class="nav-link" href="#item_5-1" @click.prevent="scrollToId('item_5-1')">
              Service fees
            </a>
            <a class="nav-link" href="#item_5-2" @click.prevent="scrollToId('item_5-2')">
              Blockchain network fees
            </a>
            <a class="nav-link" href="#item_5-3" @click.prevent="scrollToId('item_5-3')"> Taxes </a>
            <a class="nav-link" href="#item_5-4" @click.prevent="scrollToId('item_5-4')">
              Improvement and analytics
            </a>
            <a class="nav-link" href="#item_5-4" @click.prevent="scrollToId('item_5-4')">
              Legal and compliance
            </a>
          </nav>

          <a class="nav-link" href="#item_6" @click.prevent="scrollToId('item_6')">
            6. Acceptable use
          </a>

          <a class="nav-link" href="#item_7" @click.prevent="scrollToId('item_7')">
            7. Third-party services and blockchain networks
          </a>

          <a class="nav-link" href="#item_8" @click.prevent="scrollToId('item_8')">
            8. No financial, investment, or legal advice
          </a>

          <a class="nav-link" href="#item_9" @click.prevent="scrollToId('item_9')">
            9. Intellectual property and open-source components
          </a>

          <a class="nav-link" href="#item_10" @click.prevent="scrollToId('item_10')">
            10. Service availability and changes
          </a>

          <a class="nav-link" href="#item_11" @click.prevent="scrollToId('item_11')">
            11. Disclaimer of warranties
          </a>

          <a class="nav-link" href="#item_12" @click.prevent="scrollToId('item_12')">
            12. Limitation of liability
          </a>

          <a class="nav-link" href="#item_13" @click.prevent="scrollToId('item_13')">
            13. Indemnification
          </a>

          <a class="nav-link" href="#item_14" @click.prevent="scrollToId('item_14')">
            14. Governing law and jurisdiction
          </a>

          <a class="nav-link" href="#item_15" @click.prevent="scrollToId('item_15')">
            15. Changes to these Terms
          </a>

          <a class="nav-link" href="#item_16" @click.prevent="scrollToId('item_16')">
            16. Changes to these Terms
          </a>

          <a class="nav-link" href="#item_17" @click.prevent="scrollToId('item_17')">
            17. Contact information
          </a>
        </nav>
      </nav>
    </div>
  </div>
</template>
