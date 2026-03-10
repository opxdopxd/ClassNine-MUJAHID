/* =========================================
   ১. ডাটাবেজ (রুটিন, শিক্ষার্থী ও শিক্ষক) 
   (আপনার সব ডাটা হুবহু রাখা হয়েছে)
   ========================================= */

const subjects = [
    "কোরআন মাজিদ ও তাজভিদ", "হাদিস শরফি", "আকায়েদ ও ফিকহ", 
    "আল লুগাতুল আরাবিয়াতুল ইত্তেসালিয়", "কাওয়াইদুল লুগাতিল আরাবিয়্যাহা", 
    "বাংলা সাহিত্য", "বাংলা ব্যাকরণ ও নির্মিতি", "English for Today", 
    "English Grammar and Composition", "তথ্য ও যোগাযোগ প্রযুক্তি", 
    "গণিত", "বাংলাদেশ ও বিশ্ব পরিচয়", "উচ্চতর গণিত", 
    "পদার্থ বিজ্ঞান", "রসায়ন", "জীব বিজ্ঞান"
];

const classRoutine = [
    { day: "শনিবার", p1: "English", p2: "Higher Math-Chemistry-Biology", p3: "Quran-Arabic 1st" },
    { day: "রবিবার", p1: "English", p2: "Higher Math-Chemistry-Biology", p3: "Quran-Arabic 1st" },
    { day: "সোমবার", p1: "English", p2: "Higher Math-Chemistry-Biology", p3: "Quran-Arabic 1st" },
    { day: "মঙ্গলবার", p1: "English", p2: "General Math-Physics-Biology", p3: "Hadis-Arabic 2nd" },
    { day: "বুধবার", p1: "English", p2: "General Math-Physics-Biology", p3: "Hadis-Arabic 2nd" },
    { day: "বৃহস্পতিবার", p1: "English", p2: "General Math-Physics-Biology", p3: "Hadis-Arabic 2nd" },
];

const studentsData = [
    { name: "Israfil",    roll: "01", phone: "8801325317415", type: "captain" },
    { name: "Mujahid",    roll: "02", phone: "8801722494482", type: "captain" },
    { name: "Ataullah",   roll: "03", phone: "8801715797980", type: "general" },
    { name: "Ahanaf",     roll: "05", phone: "8801920169201", type: "general" },
    { name: "Abdur Razzak", roll: "07", phone: "8801712560089", type: "general" },
    { name: "Ahmad",      roll: "08", phone: "8801963562037", type: "general" },
];

const teachersData = [
    { name: "Misbahul Islam",      subject: "English",      phone: "8801622874828", type: "class-teacher" },
    { name: "Sadid Tasmid Sazzad", subject: "Science-Math", phone: "8801842707599", type: "others" },
    { name: "Rafit",               subject: "Arabic",       phone: "8801734300863", type: "others" },
];

const noteLinks = {  
    "কোরআন মাজিদ ও তাজভিদ": "",
    "হাদিস শরফি": "",
    "আকায়েদ ও ফিকহ": "",
    "আল লুগাতুল আরাবিয়াতুল ইত্তেসালিয়": "",
    "কাওয়াইদুল লুগাতিল আরাবিয়্যাহা": "",
    "বাংলা সাহিত্য": "",
    "বাংলা ব্যাকরণ ও নির্মিতি": "",
    "English for Today": "",
    "English Grammar and Composition": "",
    "তথ্য ও যোগাযোগ প্রযুক্তি": "",
    "গণিত": "",
    "বাংলাদেশ ও বিশ্ব পরিচয়": "",
    "উচ্চতর গণিত": "",
    "পদার্থ বিজ্ঞান": "https://opxdopxd.github.io/physics-notebook/",
    "রসায়ন": "",
    "জীব বিজ্ঞান": "" };

const bookLinks = {
    "কোরআন মাজিদ ও তাজভিদ": "https://drive.egovcloud.gov.bd/index.php/s/qdmLeXhVpbM7mTx",
    "হাদিস শরফি": "https://drive.egovcloud.gov.bd/index.php/s/1eO4KLEL1m1SX2Y",
    "আকায়েদ ও ফিকহ": "https://drive.egovcloud.gov.bd/index.php/s/CiqD5gsloorBREy",
    "আল লুগাতুল আরাবিয়াতুল ইত্তেসালিয়": "https://drive.egovcloud.gov.bd/index.php/s/8LSDB1TQoU1YPwj",
    "কাওয়াইদুল লুগাতিল আরাবিয়্যাহা": "https://drive.egovcloud.gov.bd/index.php/s/EDSgj8dinfBPmCy",
    "বাংলা সাহিত্য": "https://drive.egovcloud.gov.bd/index.php/s/CQyZHDm7lWNjt6R",
    "বাংলা ব্যাকরণ ও নির্মিতি": "https://drive.egovcloud.gov.bd/index.php/s/4PxWqRT1mUee1yS",
    "English for Today": "https://drive.egovcloud.gov.bd/index.php/s/W4GS5b0sLaiqi5C",
    "English Grammar and Composition": "https://drive.egovcloud.gov.bd/index.php/s/C4CIcURFMSkiLH4",
    "তথ্য ও যোগাযোগ প্রযুক্তি": "https://drive.egovcloud.gov.bd/index.php/s/FKMh2oaKeOD0VCZ",
    "গণিত": "https://drive.egovcloud.gov.bd/index.php/s/UuuFMjxyQiwUYbN",
    "বাংলাদেশ ও বিশ্ব পরিচয়": "https://drive.egovcloud.gov.bd/index.php/s/JcV7XyT0fv3SQI0",
    "উচ্চতর গণিত": "https://drive.egovcloud.gov.bd/index.php/s/IfOYtfvOGz2DCLc",
    "পদার্থ বিজ্ঞান": "https://drive.egovcloud.gov.bd/index.php/s/gHVsj2PwTrbZ6Qp",
    "রসায়ন": "https://drive.egovcloud.gov.bd/index.php/s/4eRcMNdiJMb0Yb9",
    "জীব বিজ্ঞান": "https://drive.egovcloud.gov.bd/index.php/s/HvrFW2HzepiIQRy"
};

/* =========================================
   ২. মেনু এবং সেকশন কন্ট্রোল
   ========================================= */

const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

if(menuBtn) {
    menuBtn.onclick = () => {
        navLinks.classList.toggle('active');
        const icon = menuBtn.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    };
}

function showSection(id) {
    document.querySelectorAll('.content-section').forEach(s => {
        s.classList.remove('active');
        s.style.display = 'none';
    });
    
    const target = document.getElementById(id);
    if(target) {
        target.style.display = 'block';
        setTimeout(() => { target.classList.add('active'); }, 10);
    }

    // মোবাইল মেনু অটো বন্ধ হওয়া
    if(navLinks && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        const icon = menuBtn.querySelector('i');
        if(icon) {
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        }
    }
    window.scrollTo({top: 0, behavior: 'smooth'});
}

/* =========================================
   ৩. এআই অ্যাসিস্ট্যান্ট কন্ট্রোল (Fixed)
   ========================================= */

function showAIModal() {
    // আপনার HTML এ আইডি আছে 'aiModal'
    const modal = document.getElementById('aiModal');
    if (modal) {
        modal.style.display = 'flex'; // মোডাল দেখাবে
        modal.style.zIndex = '9999';  // যেন সবকিছুর উপরে থাকে
        document.body.style.overflow = 'hidden'; // পেজ স্ক্রল বন্ধ করবে
    }
}

function closeAIModal() {
    const modal = document.getElementById('aiModal');
    if (modal) {
        modal.style.display = 'none'; // মোডাল বন্ধ হবে
        document.body.style.overflow = 'auto'; // স্ক্রল চালু করবে
    }
}

// মোডালের বাইরের কালো অংশে ক্লিক করলে বন্ধ হবে
window.addEventListener('click', function(event) {
    const modal = document.getElementById('aiModal');
    if (event.target === modal) {
        closeAIModal();
    }
});
/* =========================================
   ৪. টাইপিং ইফেক্ট ও ডাটা রেন্ডারিং
   ========================================= */

const message = "আমাদের এই ওয়েবসাইটটি নবম শ্রেণির শিক্ষার্থীদের জন্য তৈরি করা হয়েছে। এখানে সবাই সহজে তথ্য খুঁজে পেতে এবং বিভিন্ন শিক্ষামূলক সুবিধা ব্যবহার করতে পারবে।";
let charIndex = 0;

function typeEffect() {
    const typingBox = document.getElementById("typing-text");
    if (typingBox && charIndex < message.length) {
        typingBox.innerHTML += message.charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 40);
    }
}

function renderTables() {
    const renderRow = (data) => `
        <tr>
            <td>${data.name}</td>
            <td>${data.subject || data.roll}</td>
            <td><a href="https://wa.me/${data.phone.replace(/\D/g,'')}" target="_blank" class="wa-link"><i class="fab fa-whatsapp"></i></a></td>
        </tr>
    `;

    // এলিমেন্টগুলো খুঁজে নেওয়া
    const captainBody = document.getElementById('captain-tbody');
    const generalBody = document.getElementById('general-student-tbody');
    const classTeacherBody = document.getElementById('class-teacher-tbody');
    const othersTeacherBody = document.getElementById('others-teacher-tbody');
    const routineBody = document.querySelector('#routineTable tbody');

    if(captainBody) captainBody.innerHTML = studentsData.filter(s => s.type === 'captain').map(renderRow).join('');
    if(generalBody) generalBody.innerHTML = studentsData.filter(s => s.type === 'general').map(renderRow).join('');
    if(classTeacherBody) classTeacherBody.innerHTML = teachersData.filter(t => t.type === 'class-teacher').map(renderRow).join('');
    if(othersTeacherBody) othersTeacherBody.innerHTML = teachersData.filter(t => t.type === 'others').map(renderRow).join('');

    // রুটিন রেন্ডারিং ও আজকের দিন হাইলাইট
    if(routineBody) {
        const daysInBengali = ["রবিবার", "সোমবার", "মঙ্গলবার", "বুধবার", "বৃহস্পতিবার", "শুক্রবার", "শনিবার"];
        const todayName = daysInBengali[new Date().getDay()]; 

        routineBody.innerHTML = classRoutine.map(r => {
            const isToday = r.day === todayName;
            return `
                <tr class="${isToday ? 'today-highlight' : ''}" style="${isToday ? 'background: rgba(231, 76, 60, 0.1); font-weight: bold; border-left: 5px solid #e74c3c;' : ''}">
                    <td style="color:var(--primary-color); font-weight:700;">${r.day} ${isToday ? '<b>(আজ)</b>' : ''}</td>
                    <td>${r.p1}</td>
                    <td>${r.p2}</td>
                    <td>${r.p3}</td>
                </tr>
            `;
        }).join('');
    }
}

/* =========================================
   ৫. সাবজেক্ট বাটন ও ডার্ক মোড
   ========================================= */

function setupSubjectButtons() {
    const noteContainer = document.getElementById('noteButtons');
    const bookContainer = document.getElementById('bookButtons');

    if(noteContainer) {
        noteContainer.innerHTML = subjects.map(sub => `
            <button class="menu-btn" onclick="handleLink(noteLinks['${sub}'], 'noteDisplay', '${sub}', 'নোট')">${sub}</button>
        `).join('');
    }

    if(bookContainer) {
        bookContainer.innerHTML = subjects.map(sub => `
            <button class="menu-btn" onclick="handleLink(bookLinks['${sub}'], 'bookViewer', '${sub}', 'বই')">${sub}</button>
        `).join('');
    }
}

function handleLink(link, displayId, subName, typeName) {
    if (link && link !== "") {
        window.open(link, '_blank');
    } else {
        const box = document.getElementById(displayId);
        if(!box) return;
        box.style.display = 'block';
        box.innerHTML = `<p style="color:#e74c3c; font-weight:700; padding:15px; border:1px solid #ddd; border-radius:8px; background:white; margin-bottom:15px; text-align: center;">দুঃখিত, ${subName}-এর ${typeName} এখনো অ্যাড করা হয়নি।</p>`;
        box.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setTimeout(() => { box.style.display = 'none'; }, 4000);
    }
}

// ডার্ক মোড সেটিংস
const darkModeToggle = document.querySelector('#darkModeToggle');
if (darkModeToggle) {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
        darkModeToggle.checked = true;
    }

    darkModeToggle.addEventListener('change', (e) => {
        if (e.target.checked) {
            document.body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
        }
    });
}

// পেজ লোড হলে সব শুরু হবে
document.addEventListener('DOMContentLoaded', () => {
    typeEffect();
    renderTables();
    setupSubjectButtons();
});

// Back to Top বাটন
const topBtn = document.getElementById("backToTop");
window.onscroll = () => {
    if (topBtn) topBtn.style.display = (window.scrollY > 300) ? "block" : "none";
};
if(topBtn) topBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
