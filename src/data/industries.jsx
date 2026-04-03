import {
    FaHeartbeat,
    FaChartLine,
    FaShoppingCart,
    FaTruck,
    FaGraduationCap,
    FaBuilding,
    FaHotel,
    FaHandsHelping,
    FaHospital,
    FaUniversity,
    FaCarSide
} from "react-icons/fa";
import {
    Database, Shield, Zap, BarChart, Smartphone, Lock, Globe, Map, Settings, Award, Heart, Clock, Users, TrendingUp
} from "lucide-react";

export const industries = [
    {
        id: 1,
        number: "01",
        title: "Ride-Hailing Industry",
        subtitle: "On-Demand Mobility Solutions for the Modern World",
        description: "We build sophisticated on-demand mobility platforms that connect riders with drivers seamlessly. Our solutions include real-time tracking, dynamic pricing, and secure payment integration for a safe and efficient travel experience. We focus on enhancing driver productivity, optimizing route planning, and providing a premium user experience for every journey through innovative technology.",
        icon: <FaCarSide className="w-6 h-6" />,
        image: "/ridehailing.jpg",
        fallbackImage: "https://images.pexels.com/photos/4606342/pexels-photo-4606342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        color: "from-blue-600 to-blue-400",
        slug: "ride-hailing",
        align: "left",
        features: [
            { title: "Real-time Fleet Tracking", icon: <Map className="w-4 h-4" />, description: "Live GPS mapping and status updates for all active vehicles, ensuring precise dispatching and accurate arrival estimates for passengers across the city." },
            { title: "Dynamic Pricing Engine", icon: <TrendingUp className="w-4 h-4" />, description: "AI-driven algorithms that adjust fares in real-time based on demand, traffic, and supply to maximize revenue and balance network performance during peak hours." },
            { title: "Driver App & Management", icon: <Users className="w-4 h-4" />, description: "Comprehensive tools for drivers including route navigation, earnings tracking, and performance analytics to ensure a productive and safe driving experience for every trip." },
            { title: "Secure Payment & Wallets", icon: <Lock className="w-4 h-4" />, description: "Integrated multi-currency payment gateways and digital wallets providing a seamless and secure transaction process for both riders and drivers globally." }
        ],
        solutions: [
            "Rider Mobile Apps", "Driver Management Systems", "Real-time Dispatching",
            "Heatmap Analytics", "Route Optimization", "In-app Chat & Support",
            "Safety & SOS Features", "Ratings & Reviews", "Referral Management",
            "Surge Pricing Logic", "Subscription Models", "Corporate Travel Portals"
        ]
    },
    {
        id: 2,
        number: "02",
        title: "Healthcare & Life Sciences",
        subtitle: "Smart Healthcare Solutions for Better Patient Outcomes",
        description: "We deliver HIPAA-compliant solutions, telemedicine platforms, and medical research tools that transform patient care and streamline clinical workflows. Our technology empowers healthcare providers to focus on what matters most - patient health. We specialize in integrating healthcare data systems and improving patient outcomes through innovative digital tools and secure data management.",
        icon: <FaHospital className="w-6 h-6" />,
        image: "/healthcare.jpg",
        fallbackImage: "https://images.pexels.com/photos/7088536/pexels-photo-7088536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        color: "from-blue-900 to-blue-700",
        slug: "healthcare-life-sciences",
        align: "right",
        features: [
            { title: "Hospital Information Systems", icon: <Database className="w-4 h-4" />, description: "Comprehensive management systems that integrate patient records, scheduling, and billing for unified clinical operations and error reduction." },
            { title: "Data Security & Compliance", icon: <Shield className="w-4 h-4" />, description: "Enterprise-grade HIPAA-compliant infrastructure ensuring the highest level of patient data protection, privacy, and regulatory adherence throughout the care cycle." },
            { title: "Process Automation", icon: <Zap className="w-4 h-4" />, description: "Smart automation of administrative tasks and clinical workflows to reduce burden on medical staff and improve overall departmental output and efficiency." },
            { title: "Analytics & AI", icon: <BarChart className="w-4 h-4" />, description: "Advanced predictive models that analyze patient data to identify trends, improve diagnostic accuracy, and enable proactive preventive care strategies." }
        ],
        solutions: [
            "EMR/EHR Systems", "Telemedicine Platforms", "Patient Portals",
            "Billing & Claims", "Inventory Management", "Appointment Scheduling",
            "Lab Systems", "Healthcare Analytics", "Mobile Health Apps",
            "Clinical Decision Support", "Remote Patient Monitoring", "Pharmacy Management"
        ]
    },
    {
        id: 3,
        number: "03",
        title: "Finance & Legal",
        subtitle: "Secure, Scalable Digital Solutions for Financial Institutions",
        description: "Secure banking platforms, fintech solutions, and compliance tools with enterprise-grade security for financial institutions and law firms. We prioritize data integrity and regulatory compliance, ensuring that your financial and legal data is protected at all times. Our solutions help you automate complex processes, reduce risk, and deliver superior service to your clients in a highly regulated environment.",
        icon: <FaUniversity className="w-6 h-6" />,
        image: "/finance.jpg",
        fallbackImage: "https://images.pexels.com/photos/4386328/pexels-photo-4386328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        color: "from-emerald-900 to-emerald-700",
        slug: "finance-legal",
        align: "left",
        features: [
            { title: "Digital Banking Platforms", icon: <Smartphone className="w-4 h-4" />, description: "Modern, secure mobile and web banking experiences that offer customers seamless access to their finances with intuitive interfaces and real-time updates." },
            { title: "Risk & Compliance", icon: <Shield className="w-4 h-4" />, description: "Automated regulatory monitoring and compliance tools that help firms navigate complex financial laws while minimizing manual oversight and operational risk." },
            { title: "Automation & AI", icon: <Zap className="w-4 h-4" />, description: "Intelligent process automation for document review, contract analysis, and routine financial reporting, significantly increasing speed and precision in operations." },
            { title: "Data Security", icon: <Lock className="w-4 h-4" />, description: "Sophisticated multi-layered security protocols and encryption methods designed to protect sensitive financial records and legal documents from unauthorized access." }
        ],
        solutions: [
            "Core Banking Systems", "Payment Gateways", "Fraud Detection",
            "Loan Management Systems", "Mobile Banking Apps", "Financial Analytics",
            "Regulatory Reporting", "Customer Identity Management", "Cloud Banking",
            "Wealth Management", "Trading Platforms", "KYC Solutions"
        ]
    },
    {
        id: 4,
        number: "04",
        title: "Retail & E-Commerce",
        subtitle: "Transform Shopping Experiences with Digital Innovation",
        description: "Custom online stores, inventory management, and omnichannel solutions that drive sales and enhance customer experience. We help retailers bridge the gap between physical and digital storefronts to create a unified shopping journey. Our e-commerce experts focus on conversion optimization, mobile experience, and personalized marketing to help you grow your brand in a competitive marketplace.",
        icon: <FaShoppingCart className="w-6 h-6" />,
        image: "/commerce.jpg",
        fallbackImage: "https://images.pexels.com/photos/4498127/pexels-photo-4498127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        color: "from-purple-900 to-purple-700",
        slug: "retail-ecommerce",
        align: "right",
        features: [
            { title: "Omnichannel Commerce", icon: <Globe className="w-4 h-4" />, description: "Unified selling systems that synchronize inventory and customer data across web, mobile, and physical stores for a truly seamless shopping experience." },
            { title: "Inventory Intelligence", icon: <Database className="w-4 h-4" />, description: "Real-time stock tracking and automated reordering systems that prevent overstocking and stockouts while optimizing warehouse efficiency and fulfillment." },
            { title: "Personalization", icon: <Users className="w-4 h-4" />, description: "AI-driven recommendation engines that analyze shopper behavior to provide tailored product suggestions, increasing average order value and customer loyalty." },
            { title: "Analytics & Insights", icon: <BarChart className="w-4 h-4" />, description: "Data-driven dashboards that reveal customer trends and campaign performance, allowing retailers to make informed decisions and optimize their marketing spend." }
        ],
        solutions: [
            "E-Commerce Platforms", "POS Systems", "Inventory Management",
            "Customer Analytics", "Loyalty Programs", "Mobile Commerce",
            "Marketplace Integration", "Order Management", "Supply Chain Optimization",
            "AI Recommendations", "Chat Commerce", "Voice Commerce"
        ]
    },
    {
        id: 5,
        number: "05",
        title: "Logistics & Supply Chain",
        subtitle: "Intelligent Solutions for Modern Supply Chains",
        description: "Fleet management, warehouse optimization, and real-time tracking solutions for maximum operational efficiency. We leverage IoT and data analytics to provide end-to-end visibility into your supply chain. Our solutions help you reduce transit times, optimize route planning, and improve warehouse throughput, ensuring that your goods are delivered efficiently and reliably to your customers.",
        icon: <FaTruck className="w-6 h-6" />,
        image: "/logistics.jpg",
        fallbackImage: "https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        color: "from-amber-900 to-amber-700",
        slug: "logistics-supply-chain",
        align: "left",
        features: [
            { title: "Real-time Tracking", icon: <Globe className="w-4 h-4" />, description: "Advanced IoT-enabled tracking systems that provide live location and status updates for shipments, ensuring full transparency across the entire transport network." },
            { title: "Route Optimization", icon: <Map className="w-4 h-4" />, description: "AI-powered routing algorithms that calculate the most efficient paths based on traffic, weather, and fuel consumption to minimize delivery delays and costs." },
            { title: "Warehouse Automation", icon: <Settings className="w-4 h-4" />, description: "Smart systems for automated sorting, picking, and inventory logging that maximize space utilization and dramatically increase daily warehouse throughput." },
            { title: "Predictive Analytics", icon: <BarChart className="w-4 h-4" />, description: "Intelligent demand forecasting tools that analyze historical data to help businesses prepare for seasonal peaks and better manage their supply chain resources." }
        ],
        solutions: [
            "Fleet Management", "Warehouse Management", "Route Planning",
            "Inventory Optimization", "Last-Mile Delivery", "Supplier Portals",
            "Blockchain Tracking", "IoT Sensors", "Automated Documentation",
            "Cross-border Compliance", "Returns Management", "Carbon Tracking"
        ]
    },
    {
        id: 6,
        number: "06",
        title: "Education & EdTech",
        subtitle: "Shaping the Future of Learning",
        description: "Learning management systems, virtual classrooms, and educational platforms that engage students and facilitate modern learning. We build interactive tools that make education accessible and personalized for every learner. Our EdTech solutions focus on student engagement, administrative efficiency, and data-driven insights to help educational institutions deliver high-quality learning experiences in person or online.",
        icon: <FaGraduationCap className="w-6 h-6" />,
        image: "/education.jpg",
        fallbackImage: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        color: "from-indigo-900 to-indigo-700",
        slug: "education-edtech",
        align: "right",
        features: [
            { title: "Virtual Learning", icon: <Globe className="w-4 h-4" />, description: "Immersive virtual classroom platforms that support real-time interaction, digital whiteboarding, and collaborative study tools to bridge the gap in remote education." },
            { title: "Adaptive Learning", icon: <Zap className="w-4 h-4" />, description: "Intelligent learning paths that automatically adjust content difficulty and pace based on individual student performance to ensure optimal knowledge retention." },
            { title: "Assessment Tools", icon: <Award className="w-4 h-4" />, description: "Robust digital testing and automated grading systems that provide immediate feedback to students and reduce the administrative time spent on manual evaluation." },
            { title: "Analytics Dashboard", icon: <BarChart className="w-4 h-4" />, description: "Comprehensive data visualization tools for educators to monitor student progress, identify learning gaps, and measure the effectiveness of teaching strategies." }
        ],
        solutions: [
            "Learning Management Systems", "Virtual Classrooms", "Student Portals",
            "Course Authoring", "Assessment Platforms", "Video Learning",
            "Mobile Learning Apps", "Gamification", "Parent Engagement",
            "Administrative Tools", "Library Management", "Career Counseling"
        ]
    },
    {
        id: 7,
        number: "07",
        title: "Real Estate & Construction",
        subtitle: "Building Tomorrow with Smart Technology",
        description: "Property management platforms, construction tracking, and real estate marketplaces that streamline operations. We provide digital tools that help developers, property managers, and real estate agents work more efficiently. Our solutions include virtual tours, project management dashboards, and tenant portals that enhance transparency and improve the overall real estate experience for all stakeholders.",
        icon: <FaBuilding className="w-6 h-6" />,
        image: "/realestate.jpg",
        fallbackImage: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        color: "from-orange-900 to-orange-700",
        slug: "real-estate-construction",
        align: "left",
        features: [
            { title: "Property Management", icon: <Settings className="w-4 h-4" />, description: "Integrated platforms for lease tracking, maintenance requests, and financial reporting that simplify the daily operations of diverse property portfolios." },
            { title: "Project Tracking", icon: <Clock className="w-4 h-4" />, description: "Real-time construction monitoring tools that allow developers to track site progress, manage resources, and stay on schedule with live data and visual updates." },
            { title: "Marketplace Platform", icon: <Globe className="w-4 h-4" />, description: "Advanced digital listing platforms with integrated virtual tours and secure document handling that connect buyers and sellers in a modern, transparent ecosystem." },
            { title: "Tenant Portals", icon: <Users className="w-4 h-4" />, description: "Self-service digital hubs for residents to pay rent, submit service tickets, and communicate with building staff, significantly improving the overall tenant experience." }
        ],
        solutions: [
            "Property Management Systems", "Construction Management", "CRM for Real Estate",
            "Virtual Tours", "Document Management", "Maintenance Tracking",
            "Lease Management", "Tenant Portals", "Investment Analytics",
            "Smart Building Integration", "Energy Management", "Safety Compliance"
        ]
    },
    {
        id: 8,
        number: "08",
        title: "Hospitality & Tourism",
        subtitle: "Creating Memorable Guest Experiences",
        description: "Booking engines, property management systems, and guest experience apps for hotels and travel companies. We help hospitality businesses deliver personalized service and streamline their operations. Our technology focuses on direct booking optimization, guest engagement, and revenue management to help you maximize your occupancy and provide an exceptional stay for every traveler.",
        icon: <FaHotel className="w-6 h-6" />,
        image: "/hospitality.jpg",
        fallbackImage: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        color: "from-rose-900 to-rose-700",
        slug: "hospitality-tourism",
        align: "right",
        features: [
            { title: "Booking Engine", icon: <Globe className="w-4 h-4" />, description: "High-conversion direct booking tools that integrate seamlessly with your website, reducing reliance on third-party OTAs while maximizing your profitable revenue." },
            { title: "Guest Experience", icon: <Users className="w-4 h-4" />, description: "Personalized guest apps and portals that allow for mobile check-in, room service requests, and customized travel itineraries for an elevated and modern stay." },
            { title: "Property Management", icon: <Database className="w-4 h-4" />, description: "Unified management systems that handle front-desk operations, housekeeping, and billing in one platform to ensure smooth and efficient guest turnover." },
            { title: "Revenue Management", icon: <TrendingUp className="w-4 h-4" />, description: "Smart pricing algorithms that analyze market demand and competitor rates in real-time to adjust pricing dynamically and maximize your property's daily yield." }
        ],
        solutions: [
            "Property Management Systems", "Channel Management", "Booking Engines",
            "Guest Portals", "Loyalty Programs", "Housekeeping Apps",
            "Restaurant Management", "Event Management", "Review Analytics",
            "Concierge Apps", "Mobile Check-in", "Smart Room Controls"
        ]
    },
    {
        id: 9,
        number: "09",
        title: "Non-Profit & Government",
        subtitle: "Technology for Social Impact",
        description: "Donation platforms, grant management systems, and community engagement tools for social impact. We provide secure and transparent digital solutions that help organizations achieve their mission. Our technology empowers non-profits and government agencies to manage resources effectively, engage with their communities, and report on their impact with clarity and professional precision.",
        icon: <FaHandsHelping className="w-6 h-6" />,
        image: "/nonprofit.jpg",
        fallbackImage: "https://images.pexels.com/photos/6995222/pexels-photo-6995222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        color: "from-teal-900 to-teal-700",
        slug: "non-profit-government",
        align: "left",
        features: [
            { title: "Donation Platforms", icon: <Heart className="w-4 h-4" />, description: "Secure, high-performance giving platforms with recurring donation options and automated tax receipting that provide donors with a trusted and easy experience." },
            { title: "Grant Management", icon: <Database className="w-4 h-4" />, description: "End-to-end systems for tracking grant applications, funding disbursements, and compliance documentation to ensure full accountability and operational clarity." },
            { title: "Community Engagement", icon: <Users className="w-4 h-4" />, description: "Digital tools for public outreach, volunteer coordination, and stakeholder communication that help organizations build stronger relationships with their communities." },
            { title: "Impact Reporting", icon: <BarChart className="w-4 h-4" />, description: "Sophisticated data dashboards that visualize program outcomes and organizational impact, making it easy to share results with donors, boards, and the public." }
        ],
        solutions: [
            "Donation Management", "Grant Management Systems", "Volunteer Portals",
            "Event Management", "Constituent CRM", "Program Tracking",
            "Impact Analytics", "Compliance Reporting", "Public Portals",
            "Board Management", "Fundraising Tools", "Awareness Campaigns"
        ]
    }
];
