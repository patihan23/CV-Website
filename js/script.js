// คำแปลสำหรับการสลับภาษา

const translations = {

    th: {

        // เมนูหลัก

        'about': 'เกี่ยวกับฉัน',

        'portfolio': 'ผลงาน',

        'contact': 'ติดต่อ',

        'lang': 'EN',

        

        // Hero section

        'hello': 'สวัสดีครับ, ผมชื่อ',

        'portfolio-desc': 'ยินดีต้อนรับสู่พอร์ตโฟลิโอของผม นี่คือที่รวบรวมผลงานและโปรเจกต์ต่างๆ ที่ผมได้สร้าง',

        'view-portfolio': 'ดูผลงานของฉัน',

        'contact-me': 'ติดต่อฉัน',

        

        // About section

        'education': 'ประวัติการศึกษา',

        'skills': 'ทักษะและความสามารถ',

        'interests': 'ความสนใจ',

        'gpa': 'เกรดเฉลี่ย',

        

        // Education details

        'year-bachelor': '2566 - 2568',

        'degree-bachelor': 'ปริญญาตรี สาขาคอมพิวเตอร์ธุรกิจ',

        'university-bachelor': 'มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน',

        'gpa-bachelor': 'เกรดเฉลี่ย: 3.86',

        

        'year-diploma': '2564 - 2566',

        'degree-diploma': 'ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส) สาขาเทคโนโลยีธุรกิจดิจิทัล',

        'school-diploma': 'วิทยาลัยเทคนิคหนองคาย',

        'gpa-diploma': 'เกรดเฉลี่ย: 3.53',

        

        // Portfolio section

        'my-portfolio': 'ผลงานของฉัน',

        'projects-desc': 'โปรเจกต์ระบบเว็บแอปพลิเคชันที่ผมเคยพัฒนา',

        'all': 'ทั้งหมด',

        'academic': 'โปรเจกต์จบการศึกษา',

        'internship': 'โปรเจกต์ฝึกงาน',

        'tech-used': 'เทคโนโลยีที่ใช้',

        

        // Portfolio details

        'project1-title': 'ระบบฉีดวัคซีนสุนัขและแมว',

        'project1-type': 'โปรเจกต์จบการศึกษา',

        'project1-desc': 'ระบบบริหารจัดการการฉีดวัคซีนสำหรับสัตว์เลี้ยงประกอบด้วยฟังก์ชันการลงทะเบียนสัตว์เลี้ยง, การจัดการข้อมูลวัคซีน, การแจ้งเตือนกำหนดการฉีดวัคซีน และระบบรายงานสถิติ โดยมีผู้ดูแลระบบและเจ้าหน้าที่ที่สามารถจัดการข้อมูลต่างๆ เช่น เจ้าของสัตว์และวัคซีน ส่วนผู้ใช้ทั่วไปสามารถค้นหาประวัติการฉีดวัคซีนและดูสถิติ',

        'project2-title': 'ระบบยืมคืนและแจ้งซ่อมครุภัณฑ์',

        'project2-type': 'โปรเจกต์ระหว่างฝึกงาน',

        'project2-desc': 'ระบบบริหารจัดการยืม-คืนและแจ้งซ่อมครุภัณฑ์ พร้อมระบบสแกน QR Code และแจ้งเตือนผ่านอีเมล์',

        'lang-distribution': 'สัดส่วนภาษาที่ใช้ในโปรเจกต์',

        'tech-used': 'เทคโนโลยีที่ใช้',

        

        // Contact section

        'contact-title': 'ติดต่อฉัน',

        'contact-desc': 'patihan.su@outlook.com',

        'email': 'อีเมล',

        'phone': 'โทรศัพท์',

        'address': 'ที่อยู่ปัจจุบัน',

        'address-value': 'หนองคาย, ประเทศไทย',

        'line': 'Line ID',

        'download-cv': 'ดาวน์โหลด Resume/CV',

        'download-desc': 'คุณสามารถดาวน์โหลด CV ของผมเพื่อดูประวัติและประสบการณ์ทำงานได้อย่างละเอียด',

        'download-th': 'ดาวน์โหลด CV ภาษาไทย',

        'download-en': 'ดาวน์โหลด CV ภาษาอังกฤษ',

        'tech-skills': 'ทักษะทางเทคนิค',

        'tech-skills-desc': 'ทักษะและเทคโนโลยีที่ผมมีความเชี่ยวชาญ',

        'profiles': 'โปรไฟล์ออนไลน์',

        'profiles-desc': 'ติดตามผลงานและกิจกรรมของผมได้ที่',

        'availability': 'สถานะการทำงาน',

        'available': 'พร้อมรับงานใหม่',

        'availability-desc': 'ผมกำลังเปิดรับโอกาสใหม่ๆ',

        'work-location': 'ทำงานที่ออฟฟิศหรือ Hybrid',

        'work-time': 'Full-time',

        'work-start': 'พร้อมเริ่มงานภายใน 15 วัน',

        'name': 'ปฏิหาริย์',

        'footer-copyright': '&copy; 2025 ปฏิหาริย์. สงวนลิขสิทธิ์.'

    },

    en: {

        // Main menu

        'about': 'About Me',

        'portfolio': 'Portfolio',

        'contact': 'Contact',

        'lang': 'TH',

        

        // Hero section

        'hello': 'Hello, I\'m',

        'portfolio-desc': 'Welcome to my portfolio. Here you can find all my projects and works that I\'ve created',

        'view-portfolio': 'View My Portfolio',

        'contact-me': 'Contact Me',

        

        // About section

        'education': 'Education',

        'skills': 'Skills & Abilities',

        'interests': 'Interests',

        'gpa': 'GPA',

        

        // Education details

        'year-bachelor': '2023 - 2025',

        'degree-bachelor': 'Bachelor\'s Degree in Business Computer',

        'university-bachelor': 'Rajamangala University of Technology Isan',

        'gpa-bachelor': 'GPA: 3.86',

        

        'year-diploma': '2021 - 2023',

        'degree-diploma': 'High Vocational Certificate in Digital Business Technology',

        'school-diploma': 'Nongkhai Technical College',

        'gpa-diploma': 'GPA: 3.53',

        

        // Portfolio section

        'my-portfolio': 'My Portfolio',

        'projects-desc': 'Web application projects that I\'ve developed',

        'all': 'All',

        'academic': 'Academic Projects',

        'internship': 'Internship Projects',

        'tech-used': 'Technologies Used',

        

        // Portfolio details

        'project1-title': 'Dog and Cat Vaccination System',

        'project1-type': 'Graduation Project',

        'project1-desc': 'A pet vaccination management system featuring pet registration, vaccine data management, vaccination schedule notifications, and statistical reporting. Administrators and staff can manage various data such as pet owners and vaccines, while general users can search vaccination history and view statistics.',

        'project2-title': 'Equipment Borrowing and Repair Notification System',

        'project2-type': 'Internship Project',

        'project2-desc': 'A management system for equipment borrowing, returning, and repair notifications, with QR code scanning functionality and email notifications.',

        'lang-distribution': 'Languages Used in Project',

        'tech-used': 'Technologies Used',

        

        // Contact section

        'contact-title': 'Contact Me',

        'contact-desc': 'patihan.su@outlook.com',

        'email': 'Email',

        'phone': 'Phone',

        'address': 'Address',

        'address-value': 'Nongkhai, Thailand',

        'line': 'Line ID',

        'download-cv': 'Download Resume/CV',

        'download-desc': 'You can download my CV to see my detailed history and work experience',

        'download-th': 'Download Thai CV',

        'download-en': 'Download English CV',

        'tech-skills': 'Technical Skills',

        'tech-skills-desc': 'Skills and technologies I specialize in',

        'profiles': 'Online Profiles',

        'profiles-desc': 'Follow my works and activities at',

        'availability': 'Work Status',

        'available': 'Available for new opportunities',

        'availability-desc': 'I\'m open to new opportunities',

        'work-location': 'Office-based or Hybrid',

        'work-time': 'Full-time',

        'work-start': 'Ready to start within 15 days',

        'name': 'Patihan',

        'footer-copyright': '&copy; 2025 Patihan. All rights reserved.'

    }

};



// ฟังก์ชันสำหรับเปลี่ยนภาษา

function changeLanguage(lang) {

    console.log('Changing language to:', lang); // เพิ่มเพื่อการดีบัก

    

    document.documentElement.lang = lang;

    

    // แปลองค์ประกอบต่างๆ ในหน้าเว็บ

    document.querySelectorAll('[data-translate]').forEach(element => {

        const key = element.getAttribute('data-translate');

        console.log('Translating element with key:', key); // เพิ่มเพื่อการดีบัก

        

        if (translations[lang][key]) {

            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {

                element.placeholder = translations[lang][key];

            } else {

                element.textContent = translations[lang][key];

            }

        }

    });

    

    // บันทึกภาษาที่เลือกใน localStorage

    localStorage.setItem('language', lang);

}



document.addEventListener('DOMContentLoaded', function() {

    console.log('DOM fully loaded'); // เพิ่มเพื่อการดีบัก

    

    // Menu Toggle สำหรับหน้าจอมือถือ

    const menuToggle = document.querySelector('.menu-toggle');

    const menu = document.querySelector('.menu');

    

    // เพิ่ม data-translate ให้กับองค์ประกอบต่างๆ ในหน้าเว็บ

    const aboutLinks = document.querySelectorAll('.menu a[href="#about"]');

    aboutLinks.forEach(el => el.setAttribute('data-translate', 'about'));

    

    const portfolioLinks = document.querySelectorAll('.menu a[href="#portfolio"]');

    portfolioLinks.forEach(el => el.setAttribute('data-translate', 'portfolio'));

    

    const contactLinks = document.querySelectorAll('.menu a[href="#contact"]');

    contactLinks.forEach(el => el.setAttribute('data-translate', 'contact'));

    

    const langToggle = document.getElementById('language-toggle');

    if (langToggle) {

        langToggle.setAttribute('data-translate', 'lang');

        

        // ปุ่มสลับภาษา

        langToggle.addEventListener('click', function(e) {

            e.preventDefault();

            console.log('Language toggle clicked'); // เพิ่มเพื่อการดีบัก

            

            const currentLang = document.documentElement.lang || 'th';

            const newLang = currentLang === 'th' ? 'en' : 'th';

            

            console.log('Changing language from', currentLang, 'to', newLang);

            changeLanguage(newLang);

        });

    } else {

        console.error('Language toggle button not found!'); // เพิ่มเพื่อการดีบัก

    }

    

    // เพิ่ม data-translate ให้กับองค์ประกอบอื่นๆ

    // Hero section

    const heroH1 = document.querySelector('.hero-text h1');

    if (heroH1) {

        heroH1.innerHTML = '<span data-translate="hello">สวัสดีครับ, ผมชื่อ</span> <span class="highlight" data-translate="name">ปฏิหาริย์</span>';

    }

    

    const heroP = document.querySelector('.hero-text p');

    if (heroP) {

        heroP.setAttribute('data-translate', 'portfolio-desc');

    }

    

    const heroBtn1 = document.querySelector('.hero-text .btn-primary');

    if (heroBtn1) {

        heroBtn1.setAttribute('data-translate', 'view-portfolio');

    }

    

    const heroBtn2 = document.querySelector('.hero-text .btn-secondary');

    if (heroBtn2) {

        heroBtn2.setAttribute('data-translate', 'contact-me');

    }

    

    // About section

    const educationHeading = document.querySelector('.about-card:nth-child(1) h3');

    if (educationHeading) {

        educationHeading.innerHTML = '<i class="fas fa-user-graduate"></i> <span data-translate="education">ประวัติการศึกษา</span>';

    }

    

    const skillsHeading = document.querySelector('.about-card:nth-child(2) h3');

    if (skillsHeading) {

        skillsHeading.innerHTML = '<i class="fas fa-laptop-code"></i> <span data-translate="skills">ทักษะและความสามารถ</span>';

    }

    

    const interestsHeading = document.querySelector('.about-card:nth-child(3) h3');

    if (interestsHeading) {

        interestsHeading.innerHTML = '<i class="fas fa-heart"></i> <span data-translate="interests">ความสนใจ</span>';

    }

    

    // Portfolio section

    const portfolioHeader = document.querySelector('.portfolio .section-header h2');

    if (portfolioHeader) {

        portfolioHeader.setAttribute('data-translate', 'my-portfolio');

    }

    

    const portfolioDesc = document.querySelector('.portfolio .section-header p');

    if (portfolioDesc) {

        portfolioDesc.setAttribute('data-translate', 'projects-desc');

    }

    

    const allButton = document.querySelector('.filter-btn[data-filter="all"]');

    if (allButton) {

        allButton.setAttribute('data-translate', 'all');

    }

    

    const academicButton = document.querySelector('.filter-btn[data-filter="academic"]');

    if (academicButton) {

        academicButton.setAttribute('data-translate', 'academic');

    }

    

    const internshipButton = document.querySelector('.filter-btn[data-filter="internship"]');

    if (internshipButton) {

        internshipButton.setAttribute('data-translate', 'internship');

    }

    

    // Contact section

    const contactHeader = document.querySelector('.contact .section-header h2');

    if (contactHeader) {

        contactHeader.setAttribute('data-translate', 'contact-title');

    }

    

    const contactDesc = document.querySelector('.contact .section-header p');

    if (contactDesc) {

        contactDesc.setAttribute('data-translate', 'contact-desc');

    }



    const contactitemp = document.querySelector('.contact-item p');

    if (contactitemp) {

        contactitemp.setAttribute('data-translate', 'contact-desc');

    }

    

    const contactInfoH3 = document.querySelectorAll('.contact-item h3');

    if (contactInfoH3.length > 0) {

        contactInfoH3[0].setAttribute('data-translate', 'email');

        contactInfoH3[1].setAttribute('data-translate', 'phone');

        contactInfoH3[2].setAttribute('data-translate', 'address');

        if (contactInfoH3[3]) {

            contactInfoH3[3].setAttribute('data-translate', 'line');

        }

    }

    

    // ตรวจสอบภาษาที่บันทึกไว้ใน localStorage

    const savedLanguage = localStorage.getItem('language');

    if (savedLanguage) {

        changeLanguage(savedLanguage);

    }

    

    // พิมพ์จำนวน elements ที่มี data-translate เพื่อตรวจสอบ

    console.log('Number of elements with data-translate:', document.querySelectorAll('[data-translate]').length);

    

    if (menuToggle) {

        menuToggle.addEventListener('click', function() {

            menu.classList.toggle('active');

            const icon = menuToggle.querySelector('i');

            if (icon.classList.contains('fa-bars')) {

                icon.classList.remove('fa-bars');

                icon.classList.add('fa-times');

            } else {

                icon.classList.remove('fa-times');

                icon.classList.add('fa-bars');

            }

        });

    }

    

    // เมื่อคลิกที่เมนู ให้ปิดเมนูบนมือถือ

    const menuLinks = document.querySelectorAll('.menu a');

    menuLinks.forEach(link => {

        link.addEventListener('click', function() {

            if (this.getAttribute('id') === 'language-toggle') return;

            

            if (window.innerWidth <= 768) {

                menu.classList.remove('active');

                const icon = menuToggle.querySelector('i');

                icon.classList.remove('fa-times');

                icon.classList.add('fa-bars');

            }

        });

    });

    

    // Smooth Scrolling เมื่อคลิกที่ลิงก์ไปยังส่วนต่างๆ ของหน้าเว็บ

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener('click', function(e) {

            if (this.getAttribute('id') === 'language-toggle') return;

            

            e.preventDefault();

            const targetId = this.getAttribute('href');

            if (targetId === '#') return;

            

            const targetElement = document.querySelector(targetId);

            if (targetElement) {

                const headerHeight = document.querySelector('header').offsetHeight;

                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                

                window.scrollTo({

                    top: targetPosition,

                    behavior: 'smooth'

                });

            }

        });

    });

    

    // ระบบกรองผลงาน Portfolio

    const filterButtons = document.querySelectorAll('.filter-btn');

    const portfolioItems = document.querySelectorAll('.portfolio-item');

    

    // แสดงผลงานทั้งหมดทันทีเมื่อโหลดหน้าเว็บ

    portfolioItems.forEach(item => {

        item.style.display = 'block';

        item.style.opacity = '1';

        item.style.transform = 'scale(1)';

    });

    

    // เลือกปุ่ม "ทั้งหมด" เป็นค่าเริ่มต้น

    const allBtn = document.querySelector('.filter-btn[data-filter="all"]');

    if (allBtn) {

        allBtn.classList.add('active');

    }

    

    filterButtons.forEach(button => {

        button.addEventListener('click', function() {

            // ลบ active class จากปุ่มทั้งหมด

            filterButtons.forEach(btn => btn.classList.remove('active'));

            // เพิ่ม active class ให้กับปุ่มที่คลิก

            this.classList.add('active');

            

            const filterValue = this.getAttribute('data-filter');

            

            portfolioItems.forEach(item => {

                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {

                    item.style.display = 'block';

                    setTimeout(() => {

                        item.style.opacity = '1';

                        item.style.transform = 'scale(1)';

                    }, 10);

                } else {

                    item.style.opacity = '0';

                    item.style.transform = 'scale(0.8)';

                    setTimeout(() => {

                        item.style.display = 'none';

                    }, 300);

                }

            });

        });

    });

    

    // Animation เมื่อเลื่อนมาถึงส่วนต่างๆ ของหน้าเว็บ

    const sections = document.querySelectorAll('section');

    

    const fadeInElements = () => {

        sections.forEach(section => {

            const sectionTop = section.getBoundingClientRect().top;

            const windowHeight = window.innerHeight;

            

            if (sectionTop < windowHeight * 0.8) {

                section.classList.add('fade-in');

            }

        });

    };

    

    // เพิ่ม class fade-in เมื่อเลื่อนมาถึงส่วนนั้นๆ

    window.addEventListener('scroll', fadeInElements);

    fadeInElements(); // เรียกครั้งแรกเมื่อโหลดหน้าเว็บ

    

    // ฟังก์ชั่นสำหรับแสดงรายละเอียดโปรเจ็คใน Modal

    const projectModal = document.getElementById('projectModal');

    const modalBody = projectModal.querySelector('.modal-body');

    const closeModal = projectModal.querySelector('.close-modal');

    const viewProjectButtons = document.querySelectorAll('.view-project');

    

    // ข้อมูลรายละเอียดโปรเจกต์

    const projectDetails = {

        'project1': {

            title: 'ระบบฉีดวัคซีนสุนัขและแมว',

            titleEn: 'Dog and Cat Vaccination System',

            type: 'โปรเจกต์จบการศึกษา',

            typeEn: 'Graduation Project',

            objectives: `

                <h4>วัตถุประสงค์</h4>

                <ol>

                    <li>เพื่อพัฒนาระบบจัดเก็บและบริหารข้อมูลการฉีดวัคซีนสำหรับสัตว์เลี้ยงอย่างเป็นระบบ</li>

                    <li>เพื่อประเมินประสิทธิภาพของระบบในการจัดการข้อมูลการฉีดวัคซีน</li>

                    <li>เพื่อประเมินความพึงพอใจของผู้ใช้งานระบบ</li>

                </ol>

            `,

            objectivesEn: `

                <h4>Objectives</h4>

                <ol>

                    <li>To develop a system for storing and managing pet vaccination data systematically</li>

                    <li>To evaluate the system's efficiency in managing vaccination data</li>

                    <li>To assess user satisfaction with the system</li>

                </ol>

            `,

            scope: `

                <h4>ขอบเขตของโครงการ</h4>

                <h5>1. ความสามารถของระบบ (System Specification)</h5>

                

                <div class="user-role">

                    <h6><i class="fas fa-user-shield"></i> ฟังก์ชันของผู้ดูแลระบบ (Admin)</h6>

                    <ul>

                        <li>จัดการข้อมูล Username / Password ของเจ้าหน้าที่</li>

                        <li>เพิ่ม, ลบ, แก้ไขข้อมูล เจ้าหน้าที่, เจ้าของสัตว์เลี้ยง, สัตว์เลี้ยง, วัคซีน, และ อาสาสมัครประจำหมู่บ้าน</li>

                        <li>เรียกดูข้อมูลวัคซีนที่หมดอายุ และตรวจสอบวัคซีนที่เกินกำหนดการฉีดผ่านระบบไลน์</li>

                        <li>ออกรายงานสรุปข้อมูลประจำปี</li>

                    </ul>

                </div>

                

                <div class="user-role">

                    <h6><i class="fas fa-user-nurse"></i> ฟังก์ชันของเจ้าหน้าที่</h6>

                    <ul>

                        <li>จัดการข้อมูล เจ้าของสัตว์เลี้ยง, สัตว์เลี้ยง, วัคซีน, และ อาสาสมัครประจำหมู่บ้าน</li>

                        <li>ตรวจสอบข้อมูลวัคซีน, ออกรายงานประจำปี และแจ้งเตือนผ่านไลน์เช่นเดียวกับผู้ดูแลระบบ</li>

                    </ul>

                </div>

                

                <div class="user-role">

                    <h6><i class="fas fa-users"></i> ฟังก์ชันของประชาชน (ผู้ใช้ทั่วไป)</h6>

                    <ul>

                        <li>ค้นหาข้อมูลประวัติการฉีดวัคซีนของสัตว์เลี้ยง</li>

                        <li>ดูรายละเอียดสถิติและบุคลากรที่เกี่ยวข้อง</li>

                    </ul>

                </div>

                

                <h5>2. กลุ่มเป้าหมาย</h5>

                <ul class="target-group">

                    <li>เจ้าหน้าที่ประจำหน่วยงาน</li>

                    <li>อาสาสมัครประจำหมู่บ้าน</li>

                    <li>ผู้ใช้ทั่วไปที่ต้องการตรวจสอบประวัติการฉีดวัคซีนของสัตว์เลี้ยง</li>

                </ul>

            `,

            scopeEn: `

                <h4>Project Scope</h4>

                <h5>1. System Specifications</h5>

                

                <div class="user-role">

                    <h6><i class="fas fa-user-shield"></i> Admin Functions</h6>

                    <ul>

                        <li>Manage staff usernames and passwords</li>

                        <li>Add, delete, and edit information for staff, pet owners, pets, vaccines, and village volunteers</li>

                        <li>View expired vaccines and check overdue vaccinations via LINE notification system</li>

                        <li>Generate annual summary reports</li>

                    </ul>

                </div>

                

                <div class="user-role">

                    <h6><i class="fas fa-user-nurse"></i> Staff Functions</h6>

                    <ul>

                        <li>Manage information for pet owners, pets, vaccines, and village volunteers</li>

                        <li>Check vaccine information, generate annual reports, and send notifications via LINE similar to admin</li>

                    </ul>

                </div>

                

                <div class="user-role">

                    <h6><i class="fas fa-users"></i> Public User Functions</h6>

                    <ul>

                        <li>Search for pet vaccination history records</li>

                        <li>View statistical details and relevant personnel information</li>

                    </ul>

                </div>

                

                <h5>2. Target Groups</h5>

                <ul class="target-group">

                    <li>Agency staff</li>

                    <li>Village volunteers</li>

                    <li>General users who need to check their pet's vaccination history</li>

                </ul>

            `,

            image: 'images/project1.png',

            url: 'http://project-pet.wuaze.com/'

        },

        'project2': {

            title: 'ระบบยืมคืนและแจ้งซ่อมครุภัณฑ์',

            titleEn: 'Equipment Borrowing and Repair Notification System',

            type: 'โปรเจกต์ระหว่างฝึกงาน',

            typeEn: 'Internship Project',

            objectives: `

                <h4>วัตถุประสงค์</h4>

                <ol>

                    <li>เพื่อพัฒนาระบบจัดการข้อมูลครุภัณฑ์ให้ง่ายต่อการยืม-คืนและแจ้งซ่อม</li>

                    <li>เพื่อเพิ่มประสิทธิภาพในการตรวจสอบสถานะครุภัณฑ์และประวัติการใช้งาน</li>

                    <li>เพื่อเพิ่มความสะดวกในการแจ้งเตือนสถานะต่างๆ ผ่านอีเมล์แบบอัตโนมัติ</li>

                </ol>

            `,

            objectivesEn: `

                <h4>Objectives</h4>

                <ol>

                    <li>To develop an equipment management system for easy borrowing, returning, and repair notifications</li>

                    <li>To increase efficiency in monitoring equipment status and usage history</li>

                    <li>To enhance convenience with automatic status notifications via email</li>

                </ol>

            `,

            scope: `

                <h4>ขอบเขตของโครงการ</h4>

                <h5>1. ความสามารถของระบบ (System Specification)</h5>

                

                <div class="user-role">

                    <h6><i class="fas fa-cogs"></i> ฟังก์ชันหลักของระบบ</h6>

                    <ul>

                        <li>ระบบ ล็อกอิน สำหรับผู้ใช้งาน พร้อมระบบ แยกสิทธิ์การใช้งาน (Admin / เจ้าหน้าที่ / ผู้ใช้งานทั่วไป)</li>

                        <li>ระบบ เปลี่ยนรหัสผ่าน สำหรับผู้ใช้งาน</li>

                        <li>ระบบ จัดการข้อมูลครุภัณฑ์ และการยืม-คืนครุภัณฑ์</li>

                        <li>ระบบ แจ้งซ่อมครุภัณฑ์ พร้อมบันทึกสถานะการดำเนินงาน</li>

                        <li>ระบบ สแกน QR Code เพื่อตรวจสอบข้อมูลครุภัณฑ์หรือดำเนินการยืม-คืนและแจ้งซ่อมผ่านอุปกรณ์เคลื่อนที่</li>

                        <li>ระบบ แจ้งเตือนสถานะ การยืม-คืนและแจ้งซ่อม ผ่าน อีเมล์ ด้วยการเชื่อมต่อ SMTP</li>

                    </ul>

                </div>

                

                <h5>2. กลุ่มเป้าหมาย</h5>

                <ul class="target-group">

                    <li>เจ้าหน้าที่ประจำฝ่ายพัสดุ</li>

                    <li>ผู้ใช้งานครุภัณฑ์ในหน่วยงาน</li>

                    <li>ผู้ดูแลระบบ</li>

                </ul>

            `,

            scopeEn: `

                <h4>Project Scope</h4>

                <h5>1. System Specifications</h5>

                

                <div class="user-role">

                    <h6><i class="fas fa-cogs"></i> Core System Functions</h6>

                    <ul>

                        <li>Login system with role-based access control (Admin / Staff / Regular Users)</li>

                        <li>Password change functionality for all users</li>

                        <li>Equipment information management and borrowing-returning system</li>

                        <li>Equipment repair notification system with status tracking</li>

                        <li>QR Code scanning for checking equipment details or performing borrow-return and repair operations via mobile devices</li>

                        <li>Status notification system for borrowing-returning and repairs via email using SMTP connection</li>

                    </ul>

                </div>

                

                <h5>2. Target Groups</h5>

                <ul class="target-group">

                    <li>Supply department staff</li>

                    <li>Equipment users within the organization</li>

                    <li>System administrators</li>

                </ul>

            `,

            image: 'images/project2.png',

            url: 'http://br-check.wuaze.com/'

        }

    };

    

    // ฟังก์ชันเปิด Modal และแสดงรายละเอียดโปรเจกต์

    function openProjectModal(projectId) {

        const project = projectDetails[projectId];

        if (!project) return;

        

        // ตรวจสอบภาษาปัจจุบัน

        const currentLang = document.documentElement.lang || 'th';

        

        // สร้าง HTML สำหรับ Modal content

        let modalContent = `

            <div class="project-detail-header">

                <img src="${project.image}" alt="${currentLang === 'th' ? project.title : project.titleEn}" class="project-detail-image">

                <div class="project-detail-info">

                    <h2>${currentLang === 'th' ? project.title : project.titleEn}</h2>

                    <p class="project-type"><i class="${projectId === 'project1' ? 'fas fa-graduation-cap' : 'fas fa-briefcase'}"></i> ${currentLang === 'th' ? project.type : project.typeEn}</p>

                    <p class="project-url"><i class="fas fa-link"></i> <a href="${project.url}" target="_blank">${project.url.replace('http://', '')}</a></p>

                </div>

            </div>

            <div class="project-detail-content">

                ${currentLang === 'th' ? project.objectives : project.objectivesEn}

                ${currentLang === 'th' ? project.scope : project.scopeEn}

            </div>

        `;

        

        // แสดงเนื้อหาใน Modal

        modalBody.innerHTML = modalContent;

        

        // แสดง Modal

        projectModal.classList.add('active');

        document.body.style.overflow = 'hidden'; // ป้องกันการเลื่อนหน้าเว็บเมื่อ Modal เปิดอยู่

    }

    

    // ปิด Modal

    function closeProjectModal() {

        projectModal.classList.remove('active');

        document.body.style.overflow = 'auto'; // อนุญาตให้เลื่อนหน้าได้อีกครั้ง

    }

    

    // เพิ่ม Event Listener ให้กับปุ่ม view-project

    viewProjectButtons.forEach((button, index) => {

        button.addEventListener('click', function(e) {

            e.preventDefault();

            

            // ตรวจสอบว่าเป็นโปรเจกต์ไหน (จากลำดับของปุ่ม)

            const projectId = `project${index + 1}`;

            

            // เปิด Modal และแสดงรายละเอียดโปรเจกต์

            openProjectModal(projectId);

        });

    });

    

    // เพิ่ม Event Listener สำหรับปุ่มปิด Modal

    closeModal.addEventListener('click', closeProjectModal);

    

    // ปิด Modal เมื่อคลิกที่พื้นหลัง

    projectModal.addEventListener('click', function(e) {

        if (e.target === projectModal) {

            closeProjectModal();

        }

    });

    

    // ปิด Modal เมื่อกด ESC

    document.addEventListener('keydown', function(e) {

        if (e.key === 'Escape' && projectModal.style.display === 'flex') {

            closeProjectModal();

        }

    });

});