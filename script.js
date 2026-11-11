const courseList = document.getElementById('courseList');
const myCourses = document.getElementById('myCourses');

async function load() {
 let courses = await (await fetch('/courses')).json();
 let enrolled = await (await fetch('/enrolled')).json();

 courseList.innerHTML = courses.map(c =>
 `<div class="card">
 <h2>📘</h2>
 <h3>${c}</h3>
 <button onclick="join('${c}')">Enroll Now</button>
 </div>`).join('');

 myCourses.innerHTML = enrolled.length ?
 enrolled.map(c => `<div class="card">${c} ✓</div>`).join('') :
 'No Courses Enrolled';
}

async function join(course) {
 let r = await fetch('/enroll', {
 method:'POST',
 headers:{'Content-Type':'application/json'},
 body:JSON.stringify({course})
 });
 let data = await r.json();
 alert(data.message);
 load();
}

load();