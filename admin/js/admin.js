const sidebarToggle = document.getElementById("sidebarToggle");
const sidebar = document.getElementById("sidebar");
const logoutBtn = document.getElementById("logoutBtn");

if (sidebarToggle && sidebar) {
  sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("show");
  });
}

if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    window.location.href = "login.html";
  });
}

const serviceForm = document.getElementById("serviceForm");
const servicesList = document.getElementById("servicesList");
const serviceMessage = document.getElementById("serviceMessage");

if (serviceForm && servicesList) {
  serviceForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.getElementById("serviceTitle").value.trim();
    const category = document.getElementById("serviceCategory").value.trim();
    const description = document.getElementById("serviceDescription").value.trim();

    if (!title || !category || !description) {
      serviceMessage.textContent = "Please fill all fields.";
      return;
    }

    const item = document.createElement("div");
    item.className = "admin-item";

    item.innerHTML = `
      <div>
        <h3>${title}</h3>
        <p>${description}</p>
        <small>${category}</small>
      </div>
      <button type="button">Delete</button>
    `;

    item.querySelector("button").addEventListener("click", () => {
      item.remove();
    });

    servicesList.prepend(item);

    serviceMessage.textContent = "Service added successfully.";
    serviceForm.reset();
  });
}

document.querySelectorAll(".admin-item button").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.closest(".admin-item").remove();
  });
});

/* Project Manager */

const projectForm =
document.getElementById("projectForm");

const projectsList =
document.getElementById("projectsList");

const projectMessage =
document.getElementById("projectMessage");

if(projectForm && projectsList){

projectForm.addEventListener(
"submit",
(e)=>{

e.preventDefault();

const title =
document.getElementById(
"projectTitle"
).value.trim();

const category =
document.getElementById(
"projectCategory"
).value.trim();

const description =
document.getElementById(
"projectDescription"
).value.trim();

if(
!title ||
!category ||
!description
){
projectMessage.textContent =
"Please fill all fields.";
return;
}

const item =
document.createElement("div");

item.className =
"admin-item";

item.innerHTML = `
<div>
<h3>${title}</h3>
<p>${description}</p>
<small>${category}</small>
</div>

<button type="button">
Delete
</button>
`;

item
.querySelector("button")
.addEventListener(
"click",
()=>{
item.remove();
}
);

projectsList.prepend(item);

projectMessage.textContent =
"Project added successfully.";

projectForm.reset();

});
}

document
.querySelectorAll(
"#projectsList .admin-item button"
)
.forEach((btn)=>{

btn.addEventListener(
"click",
()=>{
btn
.closest(".admin-item")
.remove();
}
);

});

/* Blog Manager */

const blogForm = document.getElementById("blogForm");
const blogsList = document.getElementById("blogsList");
const blogMessage = document.getElementById("blogMessage");

if (blogForm && blogsList) {
  blogForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.getElementById("blogTitle").value.trim();
    const category = document.getElementById("blogCategory").value.trim();
    const readTime = document.getElementById("blogReadTime").value.trim() || "5 min read";
    const description = document.getElementById("blogDescription").value.trim();

    if (!title || !category || !description) {
      blogMessage.textContent = "Please fill all required fields.";
      return;
    }

    const item = document.createElement("div");
    item.className = "admin-item";

    item.innerHTML = `
      <div>
        <h3>${title}</h3>
        <p>${description}</p>
        <small>${category} · ${readTime}</small>
      </div>
      <button type="button">Delete</button>
    `;

    item.querySelector("button").addEventListener("click", () => {
      item.remove();
    });

    blogsList.prepend(item);

    blogMessage.textContent = "Blog added successfully.";
    blogForm.reset();
  });
}

document.querySelectorAll("#blogsList .admin-item button").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.closest(".admin-item").remove();
  });
});

/* Testimonials Manager */

const testimonialForm =
document.getElementById("testimonialForm");

const testimonialsList =
document.getElementById("testimonialsList");

const testimonialMessage =
document.getElementById("testimonialMessage");

if (
testimonialForm &&
testimonialsList
) {

testimonialForm.addEventListener(
"submit",
(e) => {

e.preventDefault();

const name =
document.getElementById(
"clientName"
).value.trim();

const role =
document.getElementById(
"clientRole"
).value.trim();

const review =
document.getElementById(
"clientReview"
).value.trim();

if (
!name ||
!role ||
!review
) {
testimonialMessage.textContent =
"Please fill all fields.";
return;
}

const item =
document.createElement("div");

item.className =
"admin-item";

item.innerHTML = `
<div>
<h3>${name}</h3>
<p>${review}</p>
<small>${role}</small>
</div>

<button type="button">
Delete
</button>
`;

item
.querySelector("button")
.addEventListener(
"click",
() => {
item.remove();
}
);

testimonialsList.prepend(item);

testimonialMessage.textContent =
"Testimonial added successfully.";

testimonialForm.reset();

});
}

document
.querySelectorAll(
"#testimonialsList .admin-item button"
)
.forEach((btn) => {

btn.addEventListener(
"click",
() => {

btn
.closest(".admin-item")
.remove();

});

});

/* Settings Manager */

function handleSettingsForm(formId, messageId, successText) {
  const form = document.getElementById(formId);
  const message = document.getElementById(messageId);

  if (!form || !message) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    message.textContent = successText;

    setTimeout(() => {
      message.textContent = "";
    }, 2500);
  });
}

handleSettingsForm(
  "brandForm",
  "brandMessage",
  "Brand settings saved successfully."
);

handleSettingsForm(
  "heroForm",
  "heroMessage",
  "Hero settings saved successfully."
);

handleSettingsForm(
  "contactSettingsForm",
  "contactSettingsMessage",
  "Contact settings saved successfully."
);

handleSettingsForm(
  "socialForm",
  "socialMessage",
  "Social links saved successfully."
);
