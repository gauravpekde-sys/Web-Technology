function card(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value.trim();
    let pass = document.getElementById("pass").value;
    let phone = document.getElementById("phone").value.trim();

    if (phone.length !== 10 || isNaN(phone)) {
        alert("Invalid Mobile Number! Mobile number must be exactly 10 digits.");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Invalid Email Address! Please enter a valid email.");
        return;
    }

    if (pass.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    if (age <= 0 || age > 100) {
        alert("Please enter a valid age.");
        return;
    }

    alert("Registration Successful!\n\nName: " + name + "\nAge: " + age + "\nEmail: " + email + "\nPhone: " + phone);

    let displayCard = document.getElementById("studentCard");

    if (!displayCard) {
        displayCard = document.createElement("div");
        displayCard.id = "studentCard";
        displayCard.className = "card student-card";
        document.body.appendChild(displayCard);
    }

    displayCard.innerHTML = `
        <h2>Registered Student Card</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Age:</strong> ${age} years</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
    `;
}
