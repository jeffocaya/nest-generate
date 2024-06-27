import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-black mt-o border border-bgray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left mb-12">
          <div>
            <h3 className="text-lg font-bold mb-2">Get ahead</h3>
            <p>
              VMware offers training and certification to turbo-charge your
              progress.
            </p>
            <a href="#" className="text-tprimary underline">
              Learn more
            </a>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Get support</h3>
            <p>
              Tanzu Spring offers support and binaries for OpenJDK™, Spring, and
              Apache Tomcat® in one simple subscription.
            </p>
            <a href="#" className="text-primary underline">
              Learn more
            </a>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Upcoming events</h3>
            <p>Check out all the upcoming events in the Spring community.</p>
            <a href="#" className="text-primary underline">
              View all
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-8 mb-12">
          <div>
            <h4 className="font-bold mb-2">Why Spring</h4>
            <ul>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Microservices
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Reactive
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Event Driven
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Cloud
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Web Applications
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Serverless
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Batch
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Learn</h4>
            <ul>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Quickstart
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Guides
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Solutions</h4>
            <ul>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Tanzu Spring
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Spring Consulting
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Spring Academy For Teams
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Spring Advisories
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Community</h4>
            <ul>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Team
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Projects</h4>
            <ul>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Training
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Thank You
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter and Social Icons Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
          <div className="text-center sm:text-left">
            <h4 className="font-bold mb-2">Get the Spring newsletter</h4>
            <p className="mb-4">Stay connected with the Spring newsletter</p>
            <button className="bg-white border border-black text-black py-2 px-4 rounded">
              SUBSCRIBE
            </button>
          </div>
          <div className="flex justify-center sm:justify-end space-x-4">
            <a href="#" className="text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2.25c-5.384 0-9.75 4.365-9.75 9.75S6.616 21.75 12 21.75s9.75-4.365 9.75-9.75S17.384 2.25 12 2.25z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 9.75h4.5m-4.5 4.5h4.5M9 12h.75m-.75 0a.75.75 0 100-1.5h-.75m.75 1.5v.75m0-4.5h.75m-.75 0a.75.75 0 100-1.5h-.75m.75 1.5v.75"
                />
              </svg>
            </a>
            <a href="#" className="text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2.25c-5.384 0-9.75 4.365-9.75 9.75S6.616 21.75 12 21.75s9.75-4.365 9.75-9.75S17.384 2.25 12 2.25z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 9.75h4.5m-4.5 4.5h4.5M9 12h.75m-.75 0a.75.75 0 100-1.5h-.75m.75 1.5v.75m0-4.5h.75m-.75 0a.75.75 0 100-1.5h-.75m.75 1.5v.75"
                />
              </svg>
            </a>
            <a href="#" className="text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2.25c-5.384 0-9.75 4.365-9.75 9.75S6.616 21.75 12 21.75s9.75-4.365 9.75-9.75S17.384 2.25 12 2.25z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 9.75h4.5m-4.5 4.5h4.5M9 12h.75m-.75 0a.75.75 0 100-1.5h-.75m.75 1.5v.75m0-4.5h.75m-.75 0a.75.75 0 100-1.5h-.75m.75 1.5v.75"
                />
              </svg>
            </a>
            <a href="#" className="text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2.25c-5.384 0-9.75 4.365-9.75 9.75S6.616 21.75 12 21.75s9.75-4.365 9.75-9.75S17.384 2.25 12 2.25z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 9.75h4.5m-4.5 4.5h4.5M9 12h.75m-.75 0a.75.75 0 100-1.5h-.75m.75 1.5v.75m0-4.5h.75m-.75 0a.75.75 0 100-1.5h-.75m.75 1.5v.75"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 mt-8 pt-8 text-center text-gray-500 text-xs">
          <p>
            &copy; 2005 - 2024 Broadcom. All Rights Reserved. The term
            “Broadcom” refers to Broadcom Inc. and/or its subsidiaries.
          </p>
          <p>
            Terms of Use • Privacy • Trademark Guidelines • Your California
            Privacy Rights
          </p>
          <p className="mt-2">
            Apache®, Apache Tomcat®, Apache Kafka®, Apache Cassandra™, and
            Apache Geode™ are trademarks of the Apache Software Foundation in
            the United States and/or other countries.
          </p>
          <p>
            Linux® is the registered trademark of Linus Torvalds in the United
            States and other countries. Windows® and Microsoft® Azure are
            registered trademarks of Microsoft Corporation. “AWS” and “Amazon
            Web Services” are trademarks of Amazon.com Inc. or its affiliates.
            All other trademarks and copyrights are property of their respective
            owners and are only mentioned for informative purposes.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
