// Blog post type definition
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
  slug: string;
  category?: string;
  author?: string;
  readTime?: string;
  views?: string;
  likes?: number;
  tags?: string[];
}

// Centralized blog post data
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "From IIT Delhi to Bihar Villages: A Journey of Purpose",
    slug: "iit-delhi-to-bihar-villages-journey",
    image: "/images/blog/founder-journey.png",
    date: "2024-07-15",
    category: "Founder's Journey",
    excerpt: "Why would an IIT graduate leave a promising corporate career to return to a village in Bihar? This is the story of Mukund Agrawal, and his mission to transform rural education through 'Seva' and 'Sanskars'.",
    content: `
      <p>In the corridors of IIT Delhi, amidst discussions of algorithms and startups, a different kind of dream was taking shape in my mind. While my peers were preparing for lives in Silicon Valley or multinational corporations, I found myself constantly drawn back to the memories of my childhood in Bihar. I saw a stark disconnect: the rapid advancement of urban India versus the stagnation of rural communities.</p>
      
      <h2>The Call of the Roots</h2>
      <p>The decision to return wasn't easy. It defied conventional logic. "Why waste an IIT degree in a village?" was a question I faced often. But for me, the degree was not a ticket to escape my roots, but a tool to water them. I realized that true success isn't about how far you can go, but how many people you can take with you.</p>
      
      <h2>The Beginning: A Banyan Tree and a Dream</h2>
      <p>I started with nothing but a whiteboard and a few mats under a Banyan tree in Raghopur. The initial days were challenging. There was skepticism. But when the children started showing up—eyes full of curiosity, minds hungry for knowledge—I knew I was in the right place. We didn't just teach Math and Science; we taught them to dream.</p>
      
      <h2>Education Beyond Textbooks</h2>
      <p>Our vision for the 'Divya Bihar Mission' was never just about academic excellence. It was about character building. We integrated modern pedagogy with ancient Indian values. I wanted to create a system where a student could code a website and also chant Sanskrit shlokas with equal proficiency. Where they understood the laws of physics and the laws of Dharma.</p>
      
      <h2>A Life of Service</h2>
      <p>Today, as I look at the hundreds of students in our Gurukulam, I don't see just future engineers or doctors. I see future leaders who are compassionate, rooted, and committed to their society. This journey from the lecture halls of IIT to the dusty roads of Bihar has been the most fulfilling education of my life. It taught me that the greatest joy lies not in accumulation, but in distribution—of knowledge, of love, and of hope.</p>
    `
  },
  {
    id: 2,
    title: "The Gurukulam Reimagined: Blending Ancient Wisdom with Modern Science",
    slug: "gurukulam-reimagined-ancient-wisdom-modern-science",
    image: "/images/blog/gurukulam-model.png",
    date: "2024-07-10",
    category: "Education Model",
    excerpt: "We are reviving the ancient Gurukulam system, not by rejecting modernity, but by integrating it. Discover how we blend coding with compassion, and robotics with rituals.",
    content: `
      <p>The word 'Gurukulam' often conjures images of ascetics in forests, disconnected from the modern world. At Divya Bihar Mission, we are redefining this image. We believe that the ancient Gurukulam system held the secret to holistic human development—a secret that modern education has largely forgotten.</p>

      <h2>The Best of Both Worlds</h2>
      <p>Imagine a classroom where the day begins with 'Surya Namaskar' and ends with a session on Artificial Intelligence. This is our reality. We have seamlessly merged the CBSE curriculum with Vedic wisdom. Our students study:</p>
      <ul>
        <li><strong>Mathematics & Vedic Math:</strong> Learning speed and logic simultaneously.</li>
        <li><strong>Science & Vrikshayurveda:</strong> Understanding botany through modern biology and ancient plant science.</li>
        <li><strong>Coding & Sanskrit:</strong> Developing logical precision through programming and linguistic purity through Sanskrit.</li>
      </ul>

      <h2>The Guru-Shishya Parampara</h2>
      <p>Central to our model is the relationship between the teacher and the student. In a commercialized education system, this bond has become transactional. Here, it is familial. The Guru is a mentor, a guide, and a parental figure who invests personally in the growth of every child. This emotional security is the bedrock of effective learning.</p>

      <h2>Living the Learning</h2>
      <p>Education here is not confined to four walls. The farm is our biology lab; the kitchen is our chemistry lab; and the community is our sociology textbook. When students grow their own food, they learn patience and ecology. When they serve food to their peers, they learn humility and equality. We are nurturing not just smart students, but wise human beings.</p>
    `
  },
  {
    id: 3,
    title: "Seva as Pedagogy: Building Character Through Selfless Action",
    slug: "seva-as-pedagogy-building-character",
    image: "/images/blog/seva-pedagogy.png",
    date: "2024-07-05",
    category: "Values",
    excerpt: "At our Gurukulam, 'Seva' (service) is not an extracurricular activity; it is the core curriculum. Learn how selfless action transforms the ego and builds empathetic leaders.",
    content: `
      <p>In a world obsessed with 'What's in it for me?', we teach our students to ask, 'How can I help?'. We believe that 'Seva'—selfless service—is the most powerful tool for character development. It is the practical application of empathy.</p>

      <h2>Dissolving the Ego</h2>
      <p>When a student, regardless of their caste or economic background, cleans the campus or serves food to others, a profound shift happens. The ego, which thrives on separation and superiority, begins to dissolve. They realize that no work is big or small, and no person is above or below another. This lived experience of equality is far more powerful than any civics lesson.</p>

      <h2>Service to Nature (Prakriti Seva)</h2>
      <p>Our students actively participate in maintaining our Gaushala and organic farms. Caring for voiceless animals and plants teaches them compassion and responsibility. They learn that they are custodians of the planet, not just consumers.</p>

      <h2>Service to Society (Samaj Seva)</h2>
      <p>Regular visits to nearby villages to help the elderly or teach younger children instill a sense of civic duty. Our students don't wait for the government to fix problems; they take initiative. Whether it's a cleanliness drive or a tree plantation campaign, they are at the forefront.</p>
      
      <blockquote>"Seva is the rent we pay for the privilege of living on this earth."</blockquote>
      <p>By making Seva a daily habit, we are shaping leaders who lead with their hearts. Leaders who understand that true power is the power to serve.</p>
    `
  },
  {
    id: 4,
    title: "The Living Curriculum: How Festivals Teach Values at Gurukulam",
    slug: "living-curriculum-festivals-values",
    image: "/images/blog/festivals-learning.png",
    date: "2024-06-28",
    category: "Culture",
    excerpt: "Diwali is not just about crackers, and Holi is not just about colors. We turn every Indian festival into a vibrant learning module on history, science, and social harmony.",
    content: `
      <p>India is a land of festivals, but often the deeper meaning behind these celebrations is lost in commercialization. At Divya Bihar Mission, we reclaim these festivals as powerful educational tools. We call it 'The Living Curriculum'.</p>

      <h2>Diwali: The Science of Light and Sound</h2>
      <p>During Diwali, our students don't just light lamps; they learn the science of combustion and the history of the Ramayana. They make their own clay diyas, understanding the pottery wheel's physics. We discuss the significance of 'Tamaso Ma Jyotirgamaya'—moving from darkness (ignorance) to light (knowledge).</p>

      <h2>Holi: Botany and Social Harmony</h2>
      <p>Holi becomes a lesson in botany as students prepare natural colors using Tesu flowers, turmeric, and beetroot. This connects them to nature and teaches them about the harmful effects of synthetic chemicals. Socially, Holi is the day we forget all differences. Students, teachers, and staff smear colors on each other, erasing all hierarchies.</p>

      <h2>Chhath Puja: Gratitude to Nature</h2>
      <p>During Bihar's Mahaparv, Chhath, students learn about the solar cycle and the importance of water conservation. They clean the local riverbanks, understanding that true worship requires a clean environment. It is a lesson in ecology wrapped in devotion.</p>

      <p>By celebrating consciously, our students connect with their heritage not as a burden of the past, but as a source of wisdom for the future.</p>
    `
  },
  {
    id: 5,
    title: "The White Gold of Mithila: How Makhana is Reshaping Bihar's Rural Economy",
    slug: "makhana-white-gold-mithila-economy",
    image: "/images/blog/makhana-farming.png",
    date: "2024-06-20",
    category: "Economy",
    excerpt: "Makhana (Fox Nut) has gone from a local snack to a global superfood. Explore how this 'White Gold' is empowering farmers and the Mallah community in Mithila.",
    content: `
      <p>For centuries, the ponds of Mithila have been adorned with the large, green leaves of the Euryale ferox plant. Hidden beneath the thorny exterior of its seeds lies the 'White Gold' of Bihar—Makhana. Once a humble offering to deities and a fasting food, Makhana has now stormed the global health food market.</p>

      <h2>A Boon for the Mallah Community</h2>
      <p>Traditionally cultivated by the Mallah (fishermen) community, Makhana farming was a grueling, low-return task. Farmers would dive into muddy ponds to harvest the seeds manually. Today, with modern processing techniques and rising global demand, the narrative is changing. The GI Tag for 'Mithila Makhana' has given them a unique identity and better pricing power.</p>

      <h2>Nutritional Powerhouse</h2>
      <p>The world is waking up to what our grandmothers always knew: Makhana is a superfood. Low in fat, high in protein, and rich in antioxidants, it is the perfect guilt-free snack. This global recognition is directly translating into prosperity for Bihar's farmers.</p>

      <h2>Our Role</h2>
      <p>At Divya Bihar Mission, we are educating local farmers about value addition. Instead of selling raw seeds at throwaway prices, we encourage them to process, roast, and package the Makhana. We are helping them form cooperatives to negotiate better rates. We believe that the path to Bihar's economic revival passes through its ponds and fields.</p>
    `
  },
  {
    id: 6,
    title: "Beyond the Green Revolution: Bihar's Organic Farming Renaissance",
    slug: "organic-farming-renaissance-bihar",
    image: "/images/blog/sustainable-agriculture.png",
    date: "2024-06-15",
    category: "Agriculture",
    excerpt: "Chemical farming destroyed our soil. Now, a quiet revolution is brewing in villages like Kedia, where farmers are returning to organic methods and reaping rich rewards.",
    content: `
      <p>The Green Revolution saved India from starvation, but it left our soil addicted to chemical fertilizers. In Bihar, we are witnessing the consequences: barren lands, contaminated groundwater, and rising cancer rates. But hope is sprouting in the fields.</p>

      <h2>The Kedia Model</h2>
      <p>Look at the village of Kedia in Jamui. It has become a beacon of hope by becoming Bihar's first 'Organic Village'. Farmers here have replaced urea with vermicompost and pesticides with 'Jeevamrut' (a mixture of cow dung, urine, and jaggery). The result? Healthier soil, lower input costs, and crops that taste like they used to 50 years ago.</p>

      <h2>Integrating Tradition and Science</h2>
      <p>We are promoting this model across our adopted villages. We teach farmers that organic farming is not backward; it is the most advanced science of working *with* nature, not against it. By using crop rotation, mulching, and natural pest repellents, farmers are seeing their yields stabilize and their profits soar.</p>

      <p>This is not just about agriculture; it is about health. It is about ensuring that the food on our plates nourishes us rather than poisoning us. Bihar is poised to lead India's second Green Revolution—an Organic one.</p>
    `
  },
  {
    id: 7,
    title: "The Circular Economy of Dharma: Lessons from the Gaushala",
    slug: "circular-economy-dharma-gaushala",
    image: "/images/blog/gaushala-cows.png",
    date: "2024-06-10",
    category: "Sustainability",
    excerpt: "Modern sustainability experts talk about the 'Circular Economy'. Our ancestors lived it. Discover how our Gaushala creates a zero-waste ecosystem.",
    content: `
      <p>In a world drowning in waste, the solution might just be standing in our backyard—the humble Indian Cow. At our Gaushala, we demonstrate the 'Circular Economy of Dharma', a system where nothing is wasted and everything is interconnected.</p>

      <h2>The Cycle of Life</h2>
      <p>It starts with the cow. She gives milk, which nourishes our students. But her contribution doesn't end there. Her dung goes into our biogas plant, providing clean fuel for our kitchen. The slurry from the biogas plant, along with cow urine, becomes the most potent fertilizer for our fields. The fields, in turn, produce organic fodder for the cow.</p>

      <h2>Wealth from Waste</h2>
      <p>This cycle eliminates the need for expensive LPG cylinders and chemical fertilizers. It turns 'waste' into wealth. It makes the village self-reliant for its energy and agricultural needs. This is the Gandhian ideal of 'Gram Swaraj' in action.</p>

      <p>Our Gaushala is not just a shelter for cows; it is a classroom for sustainable living. It teaches us that in nature's economy, there is no such thing as waste—only resources in the wrong place.</p>
    `
  },
  {
    id: 8,
    title: "The Silent Revolution: Rural Women Leading the Charge",
    slug: "rural-women-entrepreneurship-revolution",
    image: "/images/blog/women_entrepreneurs.png",
    date: "2024-06-05",
    category: "Empowerment",
    excerpt: "From making pickles to painting Madhubani art, rural women in Bihar are stepping out of their homes and becoming the economic backbone of their families.",
    content: `
      <p>They were told their place was in the kitchen. They were told they couldn't handle money. Today, the women of rural Bihar are proving everyone wrong. A silent revolution is underway, driven by Self-Help Groups (SHGs) and micro-enterprises.</p>

      <h2>The Mushroom Mahilas</h2>
      <p>Take the example of the women in our 'Udyamita' program. We trained them in oyster mushroom cultivation—a low-investment, high-yield crop that can be grown indoors. Today, these women, who had never earned a rupee, are contributing significantly to their household income. They are the 'Mushroom Mahilas', and they walk with a new confidence.</p>

      <h2>Art as Livelihood</h2>
      <p>Others are turning their traditional skills into businesses. Women who painted their walls for festivals are now selling their Madhubani art on canvas to global buyers. They are making pickles and papads that taste of home, finding markets in bustling cities.</p>

      <p>When a woman earns, she invests in her children's education and health. Empowering a woman is not just empowering an individual; it is empowering a generation.</p>
    `
  },
  {
    id: 9,
    title: "Echoes of Nalanda: Reclaiming Bihar's Legacy as a Global Knowledge Hub",
    slug: "nalanda-legacy-global-knowledge-hub",
    image: "/images/blog/nalanda_ruins.png",
    date: "2024-05-30",
    category: "Heritage",
    excerpt: "Bihar was once the education capital of the world. The ruins of Nalanda are not just stones; they are a reminder of what we were and what we can be again.",
    content: `
      <p>Long before Oxford or Cambridge existed, there was Nalanda. A residential university that hosted 10,000 students and 2,000 teachers from across Asia. It was a beacon of logic, philosophy, medicine, and astronomy. Today, the red brick ruins stand as a testament to Bihar's glorious intellectual heritage.</p>

      <h2>More Than History</h2>
      <p>But Nalanda is not just about the past. It is a reminder of the DNA of this land. Bihar has always been a land of seekers. From Buddha seeking enlightenment to Chanakya seeking political wisdom, the quest for knowledge is in our soil.</p>

      <h2>The Modern Revival</h2>
      <p>The revival of Nalanda University is a symbolic step, but the real revival must happen in every village school. We need to rekindle that spirit of inquiry and debate. We need to move away from rote learning and embrace the critical thinking that Nalanda was famous for.</p>

      <p>At Divya Bihar Mission, we tell our students: "You are the descendants of the scholars of Nalanda. Greatness is your heritage." This instills a deep sense of pride and responsibility in them.</p>
    `
  },
  {
    id: 10,
    title: "Painting Empowerment: How Mithila Art Gave Rural Women a Global Voice",
    slug: "mithila-art-women-empowerment",
    image: "/images/blog/mithila_art_painting.png",
    date: "2024-05-25",
    category: "Art & Culture",
    excerpt: "Mithila (Madhubani) painting started as wall art for weddings. Today, it is a tool for social commentary and financial independence for thousands of women.",
    content: `
      <p>In the villages of Mithila, art is not a hobby; it is a way of life. For centuries, women have painted the walls of their mud houses (Kohbar) to celebrate weddings and births. These vibrant paintings, characterized by geometrical patterns and double lines, were a domestic ritual.</p>

      <h2>From Walls to Paper</h2>
      <p>The great famine of the 1960s changed everything. To generate income, women were encouraged to transfer their art to paper. This simple shift unleashed a creative explosion. Suddenly, the private expressions of rural women were being admired in galleries in Europe and Japan.</p>

      <h2>A Voice for the Voiceless</h2>
      <p>What makes Mithila art truly powerful today is its evolution. Artists like Godavari Dutta and Dulari Devi didn't just paint gods and goddesses; they painted their realities. They painted about female infanticide, about dowry, about the environment. The art became a language of protest and progress.</p>

      <p>We encourage our students to learn this art form not just to preserve a tradition, but to find their own voice. When a girl picks up a brush, she is not just painting; she is rewriting her destiny.</p>
    `
  },
  {
    id: 11,
    title: "Chhath Puja: The Science and Sustainability Behind Bihar's Mahaparv",
    slug: "chhath-puja-science-sustainability",
    image: "/images/blog/festivals-learning.png", // Reusing festival image
    date: "2024-05-20",
    category: "Culture",
    excerpt: "Chhath is unique. No idols, no priests, just a direct connection with nature. Explore the scientific and environmental wisdom embedded in this ancient festival.",
    content: `
      <p>Chhath Puja is the soul of Bihar. It is the 'Mahaparv' (Great Festival). Unlike other festivals that worship idols, Chhath worships the visible God—the Sun, the source of all life on earth.</p>

      <h2>The Science of Arghya</h2>
      <p>The ritual of offering 'Arghya' (water) to the rising and setting sun is deeply scientific. Standing in water helps regulate bio-electricity. Looking at the sun through the falling water stream splits the sunlight into its spectrum, providing therapeutic benefits to the eyes and body. The timing corresponds to the periods of maximum Vitamin D absorption.</p>

      <h2>A Lesson in Ecology</h2>
      <p>Chhath is perhaps the most eco-friendly festival in the world. The offerings are seasonal fruits and vegetables. The 'prasad' is cooked on earthen stoves using mango wood. Most importantly, it requires a clean water body. Weeks before the festival, entire communities come together to clean rivers, ponds, and ghats. It is a massive, community-led river rejuvenation drive.</p>

      <p>Chhath teaches us that we are part of nature, not masters of it. In an era of climate change, the wisdom of Chhath is more relevant than ever.</p>
    `
  },
  {
    id: 12,
    title: "Grandmother's Science: Validating Traditional Knowledge with Modern Research",
    slug: "traditional-knowledge-modern-science",
    image: "/images/blog/sustainable-agriculture.png", // Reusing agriculture image
    date: "2024-05-15",
    category: "Wisdom",
    excerpt: "From using turmeric for immunity to eating seasonal greens, our grandmothers knew best. Modern science is now catching up with Bihar's traditional wisdom.",
    content: `
      <p>We often dismiss our traditional practices as superstition. But look closer, and you will find deep scientific reasoning. Why do we eat curd and jaggery before an exam? Because it provides an instant glucose spike to the brain and cools the stomach. Why do we use neem leaves in grain storage? Because it is a natural pesticide.</p>

      <h2>Sattu: The Original Protein Shake</h2>
      <p>Long before protein powders became a fad, the peasant of Bihar had 'Sattu'. This roasted gram flour is a powerhouse of energy, protein, and fiber. It cools the body in the scorching summer heat. It is the perfect superfood.</p>

      <h2>Living with the Seasons</h2>
      <p>Our traditional diet is strictly seasonal. We eat 'Chura-Dahi' in winter and 'Aam-Panna' in summer. This alignment with nature's rhythm keeps the body's immunity high. At our Gurukulam, we are documenting this 'Dadi Ma ke Nuskhe' (Grandmother's remedies) and validating them with scientific explanations. We want our children to respect their heritage not out of blind faith, but out of understanding.</p>
    `
  },
  {
    id: 13,
    title: "Digital Bridges: Connecting Remote Bihar to the Global Economy",
    slug: "digital-bridges-remote-bihar-global-economy",
    image: "/images/blog/gurukulam-model.png", // Reusing gurukulam image
    date: "2024-05-10",
    category: "Technology",
    excerpt: "The internet is the great equalizer. See how digital literacy is allowing youth in remote Bihar villages to work for global clients and access world-class education.",
    content: `
      <p>Geography is no longer destiny. A high-speed internet connection has the power to erase the disadvantage of being born in a remote village. In Bihar, the digital revolution is quietly transforming lives.</p>

      <h2>The Freelance Village</h2>
      <p>We are seeing young people in villages learning graphic design, coding, and content writing. Sitting in Supaul or Madhubani, they are working for clients in New York and London. They are earning 'dollar salaries' while living with their families in fresh air. This 'Reverse Migration' is the dream.</p>

      <h2>Education at Your Fingertips</h2>
      <p>A child in a village school can now watch lectures by the best professors from IITs and MIT. Khan Academy and YouTube have democratized knowledge. We are facilitating this by setting up digital libraries and computer labs in rural areas. We are building digital bridges that cross the chasm of opportunity.</p>
    `
  },
  {
    id: 14,
    title: "Roots and Wings: Why Bihar's Youth are Choosing to Lead Locally",
    slug: "youth-leadership-roots-and-wings",
    image: "/images/blog/founder-journey.png", // Reusing founder image
    date: "2024-05-05",
    category: "Leadership",
    excerpt: "The brain drain is reversing. A new generation of Bihari youth is choosing to stay back and build their state. They have wings to fly, but their roots keep them grounded.",
    content: `
      <p>For decades, the definition of success for a Bihari youth was to leave Bihar. To get a job in Delhi, Mumbai, or Bangalore and never look back. But the tide is turning. We are meeting young professionals—engineers, MBAs, artists—who are choosing to return.</p>

      <h2>The 'Bihari' Pride</h2>
      <p>There is a renewed sense of pride in our identity. This generation is not ashamed of their roots; they are celebrating them. They are starting agri-tech startups, eco-tourism ventures, and social enterprises right here.</p>

      <h2>Changemakers</h2>
      <p>They realize that Bihar is a land of opportunities. The challenges here are actually problems waiting to be solved. And solving them creates value. We support these young leaders through mentorship and incubation. We believe that the best people to solve Bihar's problems are the youth of Bihar themselves.</p>
    `
  },
  {
    id: 15,
    title: "Yoga and Ayurveda: Integrating Wellness into Rural Education",
    slug: "yoga-ayurveda-rural-education",
    image: "/images/blog/gurukulam-model.png", // Reusing gurukulam image
    date: "2024-04-30",
    category: "Wellness",
    excerpt: "A healthy mind needs a healthy body. We don't just teach biology; we teach 'Dinacharya' (daily routine). Yoga and Ayurveda are essential parts of our school day.",
    content: `
      <p>Modern education often treats the body as a machine to carry the brain around. We believe the body is the temple of the spirit. That's why our day begins with Yoga.</p>

      <h2>More Than Exercise</h2>
      <p>Yoga is not just physical exercise; it is a tool for emotional regulation. 'Pranayama' (breath control) helps students manage exam stress and anger. Meditation improves their focus and memory. We have seen a tangible improvement in academic performance since we introduced regular Yoga sessions.</p>

      <h2>Kitchen Pharmacy</h2>
      <p>We also teach the basics of Ayurveda. Students learn to identify medicinal herbs growing in their school garden. They learn the importance of eating fresh, local, and seasonal food. By integrating wellness into education, we are raising a generation that is physically robust and mentally resilient.</p>
    `
  },
  {
    id: 16,
    title: "Guardians of the Ganges: Community-Led Water Conservation",
    slug: "guardians-ganges-water-conservation",
    image: "/images/blog/makhana-farming.png", // Reusing makhana image (water context)
    date: "2024-04-25",
    category: "Environment",
    excerpt: "Water is life, especially in an agrarian state. Learn how communities are reviving traditional ponds and protecting the holy Ganges from pollution.",
    content: `
      <p>Bihar is blessed with rivers, yet we face water crises. The problem is management. We are reviving the traditional 'Ahar-Pyne' systems of irrigation—an ancient engineering marvel of South Bihar that managed flood and drought simultaneously.</p>

      <h2>Pond Rejuvenation</h2>
      <p>Every village in Mithila traditionally had a pond. Over time, these were encroached upon or became dumping grounds. We are mobilizing youth clubs to clean and de-silt these ponds. A revived pond recharges the groundwater, provides fish, and cools the micro-climate.</p>

      <h2>The Ganga Prahari</h2>
      <p>Along the banks of the Ganges, we are training 'Ganga Praharis'—local volunteers who monitor river health, prevent littering, and plant trees along the banks. They are the guardians of the river. They understand that if the Ganga dies, our civilization dies.</p>
    `
  },
  {
    id: 17,
    title: "Viksit Bihar: A Blueprint for a Self-Reliant and Prosperous State",
    slug: "viksit-bihar-blueprint-prosperity",
    image: "/images/blog/founder-journey.png", // Reusing founder image
    date: "2024-04-20",
    category: "Vision",
    excerpt: "What will Bihar look like in 2047? We envision a state that is not defined by its poverty, but by its prosperity, culture, and innovation. This is our dream for a 'Viksit Bihar'.",
    content: `
      <p>We dare to dream. We dream of a Bihar where every child has access to world-class education without leaving their village. A Bihar where farmers are wealthy entrepreneurs. A Bihar that is a global hub for spiritual and cultural tourism.</p>

      <h2>The Roadmap</h2>
      <p>This is not a pipe dream. It is a possibility that requires work. It requires:</p>
      <ul>
        <li><strong>Investment in Human Capital:</strong> Health and Education first.</li>
        <li><strong>Agro-Industrialization:</strong> Processing what we grow.</li>
        <li><strong>Digital Connectivity:</strong> Bridging the urban-rural divide.</li>
        <li><strong>Cultural Confidence:</strong> Believing in our own worth.</li>
      </ul>

      <p>The 'Divya Bihar Mission' is just one brick in this foundation. We invite every Bihari, resident or non-resident, to add their brick. Together, let us rebuild the glory of Magadh. Let us build a Viksit Bihar.</p>
    `
  }
];