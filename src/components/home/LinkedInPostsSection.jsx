"use client";
import React from "react";
import { motion } from "framer-motion";

export default function LinkedInPostsSection() {
  const posts = [
    {
      id: 1,
      content:
        "March is National Colorectal Cancer Awareness Month. Over 150,000 Americans are diagnosed with colorectal cancer each year, according",
      author: "360 Medical",
      Follow: "+ Follow",
      authorImage: "/360-logo.png",
      date: "2 weeks ago",
      likes: 45,
      comments: 8,
      link: "https://www.linkedin.com/posts/360medical_colorectalcancerawareness-healthcarepartners-activity-7434342452989206528-mX4K?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE6KToYBjoOVwTnzG3a5uubKNPv9Fsndtx4",
      hashtags: [
        "#ColorectalCancerAwareness",
        "#HealthcarePartners",
        "#PatientCare",
        "#EarlyDetection",
      ],
      image: "/postImages/postOne.JPG",
    },
    {
      id: 2,
      content:
        "Last Friday, DHR Health held their ER Resident Training at our SIM360: Clinical Advancement Center, utilizing the lecture hall space to",
      author: "360 Medical",
      Follow: "+ Follow",
      authorImage: "/360-logo.png",
      date: "1 month ago",
      likes: 78,
      comments: 12,
      link: "https://www.linkedin.com/posts/360medical_simulationlab-medicaleducation-emergencymedicine-activity-7432201723844399104-nGFt?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE6KToYBjoOVwTnzG3a5uubKNPv9Fsndtx4",
      hashtags: [
        "#SimulationLab",
        "#MedicalEducation",
        "#EmergencyMedicine",
        "#HealthcareTraining",
      ],
      image: "/postImages/postTwo.JPG",
    },
    {
      id: 3,
      content:
        "We're proud to officially introduce SIM360: Clinical Advancement Center - an extension of 360 Medical built to strengthen hands-on learning,",
      author: "360 Medical",
      Follow: "+ Follow",
      authorImage: "/360-logo.png",
      date: "2 months ago",
      likes: 112,
      comments: 23,
      link: "https://www.linkedin.com/posts/360medical_caaweek-healthcarepartners-orpartners-activity-7429912918164586496-zd51?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE6KToYBjoOVwTnzG3a5uubKNPv9Fsndtx4",
      hashtags: [
        "#ClinicalEducation",
        "#SimulationTraining",
        "#ProfessionalDevelopment",
        "#HealthcareLearning",
      ],
      image: "/postImages/postThree.JPG",
    },
    {
      id: 4,
      content:
        "Day 2 complete — and what a strong finish! Our final day of Surgical Sales 101 was all about real-world exposure as participants",
      author: "360 Medical",
      Follow: "+ Follow",
      authorImage: "/360-logo.png",
      date: "2 months ago",
      likes: 67,
      comments: 9,
      link: "https://www.linkedin.com/posts/360medical_purposedriven-patientfirst-healthcareexcellence-activity-7426716194235297792-ugfd?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE6KToYBjoOVwTnzG3a5uubKNPv9Fsndtx4",
      hashtags: [
        "#SurgicalSales",
        "#ClinicalEducation",
        "#ProfessionalDevelopment",
        "#ORExperience",
      ],
      image: "/postImages/postFour.JPG",
    },
    {
      id: 5,
      content:
        "We're proud to support the professionals who help make safe, precise surgical care possible every day. Certified Anesthesiologist",
      author: "360 Medical",
      Follow: "+ Follow",
      authorImage: "/360-logo.png",
      date: "3 months ago",
      likes: 53,
      comments: 14,
      link: "https://www.linkedin.com/posts/360medical_leadership-integrity-grateful-activity-7424197646774599680-8pJr?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE6KToYBjoOVwTnzG3a5uubKNPv9Fsndtx4",
      hashtags: [
        "#CAAWeek",
        "#HealthcarePartners",
        "#ORPartners",
        "#PatientCare",
      ],
      image: "/postImages/postFive.JPG",
    },
    {
      id: 6,
      content:
        "Day 2 complete — and what a strong finish!👏 Our final day of Surgical Sales 101 was all about real-world exposure as participants had the opportunity",
      author: "360 Medical",
      Follow: "+ Follow",
      authorImage: "/360-logo.png",
      date: "1 month ago",
      likes: 36,
      comments: 2,
      link: "https://www.linkedin.com/posts/360medical_surgicalsales-clinicaleducation-professionaldevelopment-activity-7420621724108402688-9-ZN?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE6KToYBjoOVwTnzG3a5uubKNPv9Fsndtx4",
      hashtags: [
        "#SurgicalSales",
        "#ClinicalEducation",
        "#ProfessionalDevelopment",
        "#ORExperience",
      ],
      image: "/postImages/postSix.JPG",
    },
  ];

  // Duplicate posts to make the loop seamless
  const displayPosts = [...posts, ...posts];

  return (
    <section
      className="bg-white py-20 px-0 md:px-5 relative overflow-hidden"
      style={{
        backgroundImage: "url('/Rectangle 18.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-2 md:px-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0097B2] mb-4">
            Where Clinical Excellence
            <br /> Meets Operational Strength
          </h2>
        </motion.div>

        {/* Sliding container - cards move horizontally */}
        <div className="overflow-hidden">
          <div className="flex gap-6 animate-slide mb-10">
            {displayPosts.map((post, index) => (
              <div
                key={`${post.id}-${index}`}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200 overflow-hidden flex-shrink-0 w-[280px] md:w-[350px]"
              >
                {/* Post Header */}
                <div className="px-5 pt-3 pb-3">
                  <div className="flex items-start gap-3">
                    {/* Author Avatar Placeholder */}
                    <div className="w-9 h-9 bg-gradient-to-br from-[#0097B2] to-[#007a8f] rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0 border-1 border-[#ced7e8] overflow-hidden">
                      <img
                        src="360-medical_logo.jpg"
                        alt="360 Medical"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="font-bold text-gray-900 text-sm truncate font-urbanist">
                          {post.author}
                        </h3>
                       
                        <span className="text-[15px] text-[#3467C2] hover:text-[#234684] font-semibold transition-colors ">
                          
                          <a
                            href="https://www.linkedin.com/company/360medical/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {post.Follow}
                          </a>
                          
                        </span>
                      </div>
                      <p className="text-[10px] text-gray-400 truncate">
                        {post.date}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Post Content */}
                <div className="px-5 pt-1 pb-2">
                  <p className="text-gray-800 text-xs leading-relaxed line-clamp-4">
                    {post.content}
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" items-center gap-1 text-[#3467C2] hover:text-[#234684] hover:font-semibold transition-colors text-xs font-semi-bold"
                    >
                      <span> ...more</span>
                    </a>
                  </p>
                </div>

                {/* Hashtags */}
                <div className="px-5  flex flex-wrap gap-0 gap-x-2">
                  {post.hashtags.slice(0, 4).map((tag, i) => (
                    <span
                      key={i}
                      className="text-[11px] text-[#3467C2] hover:underline cursor-pointer font-semi-bold"
                    >
                      {tag}
                    </span>
                  ))}
                  {post.hashtags.length > 3 && (
                    <span className="text-[10px] text-[#3467C2]">
                      +{post.hashtags.length - 3}
                    </span>
                  )}
                </div>

                {/* Post Image Container */}
                {post.image && (
                  <div className="px-1 py-2">
                    <div className=" overflow-hidden border border-gray-100  aspect-[4/3.6]">
                      <img
                        src={post.image}
                        alt="Post visual"
                        className="w-full h-full object-cover "
                      />
                    </div>
                  </div>
                )}

                {/* Engagement Stats */}
                <div className="px-5 py-2 border-t border-gray-100 flex items-center justify-between text-gray-500 text-xs">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                        />
                      </svg>
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                      {post.comments}
                    </span>
                  </div>

                  {/* LinkedIn Link */}
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[#3467C2] hover:text-[#1d3763] transition-colors text-xs font-medium"
                  >
                    <span>View on</span>
                    <svg
                      className="w-3.5 h-3.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>

                {/* View Full Post Link */}
                <div className="px-5 py-2 bg-gray-50 border-t border-gray-100">
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#3467C2] hover:text-[#1d3763] text-sm font-medium flex items-center justify-center gap-1 w-full"
                  >
                    Read full post on LinkedIn
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Follow on LinkedIn CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-8"
        >
          <a
            href="https://www.linkedin.com/company/360medical/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#0097B2] hover:bg-[#007a8f] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            Follow Us on LinkedIn
          </a>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-slide {
          display: flex;
          gap: 1.5rem;
          width: max-content;
          animation: slide 50s linear infinite;
        }

        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}
