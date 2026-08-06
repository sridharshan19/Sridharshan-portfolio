export default function Blog(){
return(
<div className="max-w-5xl mx-auto py-16 px-6">

<style>{`
@keyframes slideDown {
from { opacity: 0; transform: translateY(-20px); }
to { opacity: 1; transform: translateY(0); }
}
@keyframes fadeInUp {
from { opacity: 0; transform: translateY(30px); }
to { opacity: 1; transform: translateY(0); }
}
@keyframes pulse-glow {
0%, 100% { box-shadow: 0 0 10px rgba(59, 130, 246, 0.3); }
50% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.6); }
}
@keyframes shift-colors {
0% { background-position: 0% 50%; }
50% { background-position: 100% 50%; }
100% { background-position: 0% 50%; }
}
.animate-slide-down { animation: slideDown 0.6s ease-out; }
.animate-fade-up { animation: fadeInUp 0.8s ease-out; }
.animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
.animate-gradient { animation: shift-colors 6s ease infinite; }
`}</style>

<h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-slide-down">About Me</h1>
<p className="text-lg mb-12 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-semibold animate-fade-up">Full-Stack Developer with a passion for building scalable applications and solving complex problems through clean, efficient code.</p>

{/* INTERNSHIP EXPERIENCES SECTION */}
<section className="mb-16">
<h2 className="text-3xl font-bold mb-8 text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text animate-fade-up">Professional Experience</h2>

<div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-50 rounded-xl p-8 mb-6 border-l-4 border-blue-500 hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer animate-fade-up">
<div className="flex justify-between items-start mb-3">
<div>
<h3 className="text-2xl font-bold text-blue-900">MERN Stack Intern</h3>
<p className="text-blue-600 font-semibold">RV Techlearn Institute • 2025 (17 Days)</p>
</div>
</div>
<p className="text-blue-800 leading-relaxed">
Gained hands-on experience in developing full-stack web applications using <strong>MongoDB, Express.js, React.js, and Node.js</strong>. Developed skills in frontend and backend development through project-based learning, real-time implementation, and problem-solving. This internship strengthened my understanding of modern web development practices and the MERN ecosystem.
</p>
</div>

<div className="bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-50 rounded-xl p-8 border-l-4 border-purple-500 hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer animate-fade-up">
<div className="flex justify-between items-start mb-3">
<div>
<h3 className="text-2xl font-bold text-purple-900">Java Full Stack Developer</h3>
<p className="text-purple-600 font-semibold">RAMPeX Technologies • 2025 (15 Days)</p>
</div>
</div>
<p className="text-purple-800 leading-relaxed">
Created full-stack web applications using <strong>React</strong> for the frontend and <strong>Spring Boot</strong> for the backend. Designed and implemented <strong>RESTful APIs</strong>, managed application state, and implemented <strong>secure authentication with role-based access control</strong>. Integrated <strong>MySQL databases</strong> and created optimized components to enhance application efficiency and performance.
</p>
</div>
</section>

{/* PROJECTS SECTION */}
<section className="mb-16">
<h2 className="text-3xl font-bold mb-8 text-transparent bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text animate-fade-up">Featured Projects</h2>

<div className="grid gap-6">
<div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl border-2 border-pink-300 p-8 hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer animate-fade-up group">
<div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-rose-400 opacity-0 group-hover:opacity-10 rounded-xl transition-opacity"></div>
<h3 className="text-2xl font-bold text-pink-900 mb-2">LeaveMate</h3>
<p className="text-pink-600 font-semibold text-sm mb-4">MERN Stack • MongoDB • Express.js • React.js • Node.js</p>
<p className="text-pink-800 leading-relaxed">
A simplified leave management application that automates and streamlines the leave application process. Users can apply for leaves effortlessly while maintaining seamless workflow. The application provides systematic organization, making leave management hassle-free for any organization.
</p>
</div>

<div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border-2 border-amber-300 p-8 hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer animate-fade-up group">
<div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 opacity-0 group-hover:opacity-10 rounded-xl transition-opacity"></div>
<h3 className="text-2xl font-bold text-amber-900 mb-2">Event Insight</h3>
<p className="text-amber-600 font-semibold text-sm mb-4">MERN Stack • Anonymous Feedback System</p>
<p className="text-amber-800 leading-relaxed">
An innovative anonymous feedback management system built with MERN Stack. Users can provide confidential feedback to event organizers while maintaining complete anonymity. The system stores data securely and reveals feedback details on the event's final day for comprehensive insights.
</p>
</div>

<div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl border-2 border-teal-300 p-8 hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer animate-fade-up group">
<div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-400 opacity-0 group-hover:opacity-10 rounded-xl transition-opacity"></div>
<h3 className="text-2xl font-bold text-teal-900 mb-2">NextGen Resume Builder</h3>
<p className="text-teal-600 font-semibold text-sm mb-4">Spring Boot • React.js • MongoDB • JWT • Razorpay</p>
<p className="text-teal-800 leading-relaxed">
A comprehensive resume builder with Live Preview and Custom Templates. Features include user authentication with JWT, profile image upload, client-side PDF generation, and integrated Razorpay payment gateway. Built with React.js and Tailwind CSS frontend, Spring Boot backend, and MongoDB database.
</p>
</div>
</div>
</section>

{/* ACHIEVEMENTS SECTION */}
<section>
<h2 className="text-3xl font-bold mb-8 text-transparent bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text animate-fade-up">Achievements</h2>

<div className="space-y-4">
<div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-6 border-l-4 border-emerald-500 hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer animate-fade-up">
<h4 className="text-xl font-bold text-emerald-900 mb-2">INTELLINA Hackathon Finalist</h4>
<p className="text-emerald-800">
Shortlisted to the final round of the INTELLINA Hackathon organized by Coimbatore Institute of Technology (CIT). Designed a web-based student management system that helps mentors track student progress, manage activities, and address student queries efficiently.
</p>
</div>

<div className="bg-gradient-to-br from-green-50 to-lime-50 rounded-xl p-6 border-l-4 border-green-500 hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer animate-fade-up">
<h4 className="text-xl font-bold text-green-900 mb-2">Competitive Programming</h4>
<p className="text-green-800">
Achieved expertise in problem-solving through competitive programming platforms. Solved 270+ problems on LeetCode with a global rank of 407,604 and contest rating of 1,486. Solved 400+ problems on SkillRack with a global rank of 76,468.
</p>
</div>
</div>
</section>

</div>
)
}