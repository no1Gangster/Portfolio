export interface PersonalInfo {
	name: string;
	role: string;
	tagline: string;
	location: string;
	email: string;
	phone: string;
	linkedin: string;
	github: string;
	experienceYears: string;
	summary: string;
}

export interface Experience {
	company: string;
	role: string;
	period: string;
	client?: string;
	description: string[];
	skills: string[];
}

export interface Metric {
	label: string;
	value: string;
	description: string;
	iconName: string;
}

export interface Project {
	title: string;
	category: string;
	date?: string;
	description: string;
	highlights: string[];
	techStack: string[];
	githubUrl?: string;
	liveUrl?: string;
}

export interface Certification {
	title: string;
	issuer: string;
	date: string;
	icon: string;
}

export interface SkillCategory {
	name: string;
	skills: string[];
}

export interface Education {
	degree: string;
	institution: string;
	period: string;
	score: string;
}

export interface PortfolioData {
	personal: PersonalInfo;
	metrics: Metric[];
	experience: Experience[];
	skillsCategory: SkillCategory[];
	projects: Project[];
	education: Education[];
	certifications: Certification[];
}

const PORTFOLIO_DATA: PortfolioData = {
	personal: {
		name: "Cheerag Routaray",
		role: "Software Development Engineer (SDE - 1)",
		tagline:
			"Engineering High-Concurrency Core Banking Backend & AI-Powered Platforms",
		location: "Bhubaneswar, Odisha, India",
		email: "cheeragroutaray@gmail.com",
		phone: "+91 9853335579",
		linkedin: "https://linkedin.com/in/cheerag-routaray",
		github: "https://github.com/no1Gangster",
		experienceYears: "1 Yr 3 Mos",
		summary:
			"Full-stack SDE with expertise in distributed systems, ACID-compliant payment modules, Core Banking backend maintenance (99.9% uptime), AWS Cloud Fargate deployments, and LLM context cost optimization.",
	},

	metrics: [
		{
			value: "99.9%",
			label: "System Uptime SLA",
			description:
				"Maintained for Core Banking Backend across distributed deployments",
			iconName: "ShieldCheck",
		},
		{
			value: "30%",
			label: "Token Cost Reduction",
			description:
				"Achieved via document-aware context chunking in AI test gen platform",
			iconName: "Zap",
		},
		{
			value: "30+",
			label: "Critical Production Bugs Fixed",
			description:
				"Resolved high-priority production issues improving backend stability",
			iconName: "Bug",
		},
		{
			value: "15+",
			label: "Months Professional Exp",
			description: "Dedicated full-time + intern experience as SDE",
			iconName: "Award",
		},
	],

	experience: [
		{
			company: "Surya Digitech Pvt Ltd",
			role: "SDE - 1 (Full-time + Intern)",
			period: "Jan 2025 - Mar 2026 (1 Yr 3 Mos)",
			client: "FDH Bank",
			description: [
				"Engineered high-concurrency payment modules ensuring ACID compliance for international money transfers and voucher-based redemptions with FDH Bank as client.",
				"Managed deployments to AWS Fargate using AWS CloudFormation across multiple production and staging environments.",
				"Developed document-aware context chunking for an AI test-generation platform using React & TypeScript, reducing LLM token/context costs by 30% while improving test accuracy.",
				"Hardened security and resolved 30+ critical production issues for a high-availability Core Banking backend, elevating system uptime to 99.9% across distributed environments.",
				"Optimized tooling and dependency management, performing critical version upgrades to eliminate security vulnerabilities and ensure compatibility across dependent architectures.",
			],
			skills: [
				"Kotlin",
				"React",
				"Ktor",
				"AWS SDK",
				"CloudFormation",
				"TypeScript",
				"MobX State Tree",
				"jOOQ",
				"Flyway",
			],
		},
	],

	skillsCategory: [
		{
			name: "Backend & Core Engineering",
			skills: [
				"Kotlin",
				"TypeScript",
				"Python",
				"C/C++",
				"Ktor",
				"Koin",
				"JavaScript (ES6+)",
				"SQL",
			],
		},
		{
			name: "Cloud & DevOps",
			skills: [
				"AWS Fargate",
				"AWS CloudFormation",
				"AWS S3",
				"AWS SNS/SES",
				"AWS Lambda",
				"Docker",
				"CI/CD",
				"GitHub Actions",
			],
		},
		{
			name: "Databases & ORM",
			skills: ["PostgreSQL", "jOOQ", "Flyway"],
		},
		{
			name: "Frontend & AI Tooling",
			skills: [
				"React",
				"Vite",
				"MobX State Tree",
				"Material UI",
				"Bootstrap",
				"React-Router-Dom",
				"AI SDK",
				"Agentic AI",
			],
		},
		{
			name: "Build Tools & Platform",
			skills: ["Git", "GitHub", "Linux", "Jira", "Maven", "Gradle", "Bun"],
		},
	],

	projects: [
		{
			title: "Personal Finance Analytics",
			category: "Full-Stack Web Application",
			date: "May 2024",
			description:
				"Full-stack personal finance platform enabling expense tracking, analytics, budget control, and real-time alerts.",
			highlights: [
				"Secure JWT-based authentication & BCrypt password hashing",
				"Integrated real-time budget alert notifications via Nodemailer",
				"Interactive budget analytics dashboard with spend categorization",
			],
			techStack: [
				"React",
				"Node.js",
				"Express",
				"MongoDB",
				"JWT",
				"Nodemailer",
				"BCrypt",
			],
		},
		{
			title: "E-Commerce Platform",
			category: "Full-Stack Application",
			date: "2023 - 2024",
			description:
				"Modern e-commerce platform built as part of hands-on MERN stack development.",
			highlights: [
				"Product catalog with filtering, search, and inventory management",
				"Authentication workflows, shopping cart, and order processing",
				"Responsive, mobile-first UI with modern component architecture",
			],
			techStack: ["React", "Node.js", "Express", "MongoDB", "Bootstrap"],
		},
	],

	education: [
		{
			degree: "Bachelor of Technology in Computer Science and Engineering",
			institution: "Silicon University, Bhubaneswar",
			period: "Nov 2021 - Aug 2025",
			score: "CGPA: 7.98 / 10",
		},
		{
			degree: "Senior Secondary (10+2)",
			institution: "Kendriya Vidyalaya No. 1, Bhubaneswar",
			period: "Apr 2019 - Apr 2021",
			score: "Percentage: 89.0%",
		},
	],

	certifications: [
		{
			title: "Cloud Launchpad Program",
			issuer: "PwC India",
			date: "Sep 2024",
			icon: "Cloud",
		},
		{
			title: "DevOps Masters",
			issuer: "Ingenious-tech",
			date: "Jul 2024",
			icon: "Server",
		},
		{
			title: "Ethical Hacking",
			issuer: "NPTEL",
			date: "Dec 2023",
			icon: "Shield",
		},
		{
			title: "MERN Stack Web Development",
			issuer: "Preplabs",
			date: "Aug 2023",
			icon: "Code",
		},
	],
};

export default PORTFOLIO_DATA;
