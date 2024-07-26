import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="container">
      <main className="main">
        <h1>Privacy Policy</h1>
        <p>Last updated: 7/24/2024</p>
        
        <section>
          <h2>1. Introduction</h2>
          <p>Welcome to Grayband Pro. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          <p>We collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
          <ul>
            <li>Personal Data: Personally identifiable information, such as your name, shipping address, email address, and telephone number.</li>
            <li>Usage Data: Information about your device and usage of our website.</li>
          </ul>
        </section>

        <section>
          <h2>3. Use of Your Information</h2>
          <p>We may use information collected about you via our website to:</p>
          <ul>
            <li>Deliver targeted advertising, newsletters, and other information regarding promotions and the Site to you.</li>
            <li>Process your transactions and manage your account.</li>
            <li>Improve our website and services.</li>
          </ul>
        </section>

        <section>
          <h2>4. Sharing of Your Information</h2>
          <p>We may share information we have collected about you in certain situations, such as:</p>
          <ul>
            <li>By Law or to Protect Rights: We may share your information to comply with legal obligations, to protect and defend our rights or property, and in urgent circumstances to protect the personal safety of users of the Site.</li>
            <li>Business Transfers: We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
          </ul>
        </section>

        <section>
          <h2>5. Security of Your Information</h2>
          <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.</p>
        </section>

        <section>
          <h2>6. Your Privacy Rights</h2>
          <p>You have the right to request access to the personal information we have about you, to request the correction or deletion of your personal information, and to request that we limit or stop using your personal information. To exercise these rights, please contact us at [contact information].</p>
        </section>

        <section>
          <h2>7. Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time in order to reflect changes to our practices or for other operational, legal, or regulatory reasons. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.</p>
        </section>

        <section>
          <h2>8. Contact Us</h2>
          <p>If you have any questions or concerns about this Privacy Policy, please contact us at: <a href="mailto:info@graybandpro.com">info@graybandpro.com</a>.</p>
        </section>

        <p>
          <Link href="/">
            <a>Back to Home</a>
          </Link>
        </p>
      </main>

      <style jsx>{`
        .container {
          padding: 20px;
        }
        .main {
          max-width: 800px;
          margin: auto;
        }
        h1, h2 {
          color: #333;
        }
        p, ul {
          color: #555;
        }
        ul {
          list-style-type: disc;
          padding-left: 20px;
        }
        a {
          color: blue;
        }
      `}</style>
    </div>
  );
}
