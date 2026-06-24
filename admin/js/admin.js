import { addService, getServices } from "../../firebase/services.js";

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

async function loadServices() {
  if (!servicesList) return;

  servicesList.innerHTML = "Loading...";

  try {
    const services = await getServices();

    servicesList.innerHTML = "";

    services.forEach((service) => {
      servicesList.innerHTML += `
        <div class="admin-item">
          <div>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
            <small>${service.category}</small>
          </div>
        </div>
      `;
    });
  } catch (error) {
    servicesList.innerHTML = error.message;
    console.log(error);
  }
}

if (serviceForm) {
  serviceForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    serviceMessage.textContent = "Button clicked...";

    const title = document.getElementById("serviceTitle").value.trim();
    const category = document.getElementById("serviceCategory").value.trim();
    const description = document.getElementById("serviceDescription").value.trim();

    try {
      serviceMessage.textContent = "Saving...";

      await addService({
        title: title,
        category: category,
        description: description,
        createdAt: Date.now()
      });

      serviceMessage.textContent = "Saved Successfully";

      serviceForm.reset();
      loadServices();
    } catch (error) {
      serviceMessage.textContent = error.message;
      console.log(error);
    }
  });
}

loadServices();
