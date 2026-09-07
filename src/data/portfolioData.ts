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
	clients: string[];
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

export enum SkillIcon {
	Code = "Code",
	Terminal = "Terminal",
	Cpu = "Cpu",
	Server = "Server",
	Database = "Database",
	Cloud = "Cloud",
	Layers = "Layers",
	Workflow = "Workflow",
	GitBranch = "GitBranch",
	Box = "Box",
	Globe = "Globe",
	Zap = "Zap",
	Bot = "Bot",
	Shield = "Shield",
}

export interface Skill {
	name: string;
	icon: SkillIcon;
}

export type Skills = Skill;

export interface SkillCategory {
	name: string;
	skills: Skills[];
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
			clients: ["FDH Bank", "Chanel", "HDFC Bank"],
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
				"PostgreSQL",
				"AWS SDK",
				"Docker",
				"AI SDK",
				"CloudFormation",
				"TypeScript",
				"Flyway",
				"Maven",
				"Gradle",
			],
		},
	],

	skillsCategory: [
		{
			name: "Backend & Core Engineering",
			skills: [
				{ name: "Kotlin", icon: SkillIcon.Code },
				{ name: "TypeScript", icon: SkillIcon.Code },
				{ name: "Python", icon: SkillIcon.Code },
				{ name: "C/C++", icon: SkillIcon.Cpu },
				{ name: "NodeJS", icon: SkillIcon.Server },
				{ name: "Ktor", icon: SkillIcon.Server },
				{ name: "Koin", icon: SkillIcon.Layers },
				{ name: "JavaScript (ES6+)", icon: SkillIcon.Code },
				{ name: "SQL", icon: SkillIcon.Database },
				{ name: "Java", icon: SkillIcon.Code },
			],
		},
		{
			name: "Cloud & DevOps",
			skills: [
				{ name: "AWS Fargate", icon: SkillIcon.Cloud },
				{ name: "AWS CloudFormation", icon: SkillIcon.Layers },
				{ name: "AWS S3", icon: SkillIcon.Cloud },
				{ name: "AWS SNS/SES", icon: SkillIcon.Globe },
				{ name: "AWS Lambda", icon: SkillIcon.Zap },
				{ name: "Docker", icon: SkillIcon.Box },
				{ name: "CI/CD", icon: SkillIcon.Workflow },
				{ name: "GitHub Actions", icon: SkillIcon.Workflow },
			],
		},
		{
			name: "Databases & ORM",
			skills: [
				{ name: "PostgreSQL", icon: SkillIcon.Database },
				{ name: "jOOQ", icon: SkillIcon.Database },
				{ name: "Flyway", icon: SkillIcon.Workflow },
			],
		},
		{
			name: "Frontend & AI Tooling",
			skills: [
				{ name: "React", icon: SkillIcon.Layers },
				{ name: "Vite", icon: SkillIcon.Zap },
				{ name: "MobX State Tree", icon: SkillIcon.Layers },
				{ name: "Material UI", icon: SkillIcon.Layers },
				{ name: "Bootstrap", icon: SkillIcon.Layers },
				{ name: "React-Router-Dom", icon: SkillIcon.Globe },
				{ name: "AI SDK", icon: SkillIcon.Bot },
				{ name: "Agentic AI", icon: SkillIcon.Bot },
				{ name: "i18n", icon: SkillIcon.Globe },
			],
		},
		{
			name: "Build Tools & Platform",
			skills: [
				{ name: "Git", icon: SkillIcon.GitBranch },
				{ name: "GitHub", icon: SkillIcon.GitBranch },
				{ name: "Linux", icon: SkillIcon.Terminal },
				{ name: "Maven", icon: SkillIcon.Box },
				{ name: "Gradle", icon: SkillIcon.Box },
				{ name: "Bun", icon: SkillIcon.Zap },
			],
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
			githubUrl: "https://github.com/no1Gangster/Expense-Tracker",
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
			githubUrl: "https://github.com/no1Gangster/go-flowers",
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
			title: "The Joy of Computing using Python",
			issuer: "NPTEL",
			date: "May 2024",
			icon: "Code",
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
		{
			title: "DotNet Web Application Development",
			issuer: "Syllogistek Systems Private Ltd.",
			date: "Sep 2022",
			icon: "Code",
		},
	],
};

export default PORTFOLIO_DATA;
