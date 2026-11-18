
/* =====================================================
   BARANGAYHUB - COMPLETE FRONT-END SCRIPT
   HTML + CSS + VANILLA JAVASCRIPT
   Local Storage Prototype
   Supabase will be connected later.
===================================================== */


// =====================================================
// 1. SAMPLE BARANGAY MEMBERS
// =====================================================

const sampleBarangayMembers = [
    {
        id: "BM-001",
        name: "Alex Santos",
        position: "Punong Barangay",
        contact: "Not provided",
        email: "alex@example.invalid",
        office: "Barangay Hall"
    },
    {
        id: "BM-002",
        name: "Jamie Cruz",
        position: "Barangay Kagawad",
        contact: "Not provided",
        email: "jamie@example.invalid",
        office: "Sangguniang Barangay"
    },
    {
        id: "BM-003",
        name: "Morgan Reyes",
        position: "Barangay Kagawad",
        contact: "Not provided",
        email: "morgan@example.invalid",
        office: "Sangguniang Barangay"
    },
    {
        id: "BM-004",
        name: "Taylor Garcia",
        position: "Barangay Secretary",
        contact: "Not provided",
        email: "taylor@example.invalid",
        office: "Barangay Office"
    },
    {
        id: "BM-005",
        name: "Riley Dela Cruz",
        position: "Barangay Treasurer",
        contact: "Not provided",
        email: "riley@example.invalid",
        office: "Barangay Office"
    },
    {
        id: "BM-006",
        name: "Casey Ramos",
        position: "Barangay Health Worker",
        contact: "Not provided",
        email: "casey@example.invalid",
        office: "Barangay Health Center"
    }
];


// =====================================================
// 2. SAMPLE RESIDENTS
// =====================================================

const sampleResidents = [
    {
        id: "RS-001",
        name: "Jamie Dela Cruz",
        birthDate: "1995-04-18",
        gender: "Female",
        purok: "Purok 1",
        street: "Mabini Street",
        barangay: "Sample Barangay",
        city: "Sample City"
    },
    {
        id: "RS-002",
        name: "Mark Santos",
        birthDate: "2001-09-02",
        gender: "Male",
        purok: "Purok 2",
        street: "Rizal Street",
        barangay: "Sample Barangay",
        city: "Sample City"
    },
    {
        id: "RS-003",
        name: "Angela Reyes",
        birthDate: "1988-12-21",
        gender: "Female",
        purok: "Purok 1",
        street: "Bonifacio Street",
        barangay: "Sample Barangay",
        city: "Sample City"
    },
    {
        id: "RS-004",
        name: "Daniel Garcia",
        birthDate: "1976-03-09",
        gender: "Male",
        purok: "Purok 3",
        street: "Quezon Street",
        barangay: "Sample Barangay",
        city: "Sample City"
    },
    {
        id: "RS-005",
        name: "Sofia Ramos",
        birthDate: "2005-07-11",
        gender: "Female",
        purok: "Purok 2",
        street: "Mabini Street",
        barangay: "Sample Barangay",
        city: "Sample City"
    },
    {
        id: "RS-006",
        name: "Noah Mendoza",
        birthDate: "1992-01-25",
        gender: "Male",
        purok: "Purok 4",
        street: "Rizal Street",
        barangay: "Sample Barangay",
        city: "Sample City"
    }
];


// =====================================================
// 3. SAMPLE RESIDENT DOCUMENTS
// =====================================================

const sampleResidentDocuments = [
    {
        id: "DOC-001",
        residentId: "RS-001",
        type: "Barangay Clearance",
        dateIssued: "2026-01-15",
        status: "Available",
        notes: "Sample barangay clearance record."
    },
    {
        id: "DOC-002",
        residentId: "RS-001",
        type: "Certificate of Residency",
        dateIssued: "2026-02-02",
        status: "Available",
        notes: "Sample certificate of residency record."
    },
    {
        id: "DOC-003",
        residentId: "RS-002",
        type: "Barangay Clearance",
        dateIssued: "2026-03-10",
        status: "Available",
        notes: "Sample barangay clearance record."
    },
    {
        id: "DOC-004",
        residentId: "RS-003",
        type: "Certificate of Indigency",
        dateIssued: "2026-02-18",
        status: "Available",
        notes: "Sample certificate of indigency record."
    },
    {
        id: "DOC-005",
        residentId: "RS-003",
        type: "Barangay Clearance",
        dateIssued: "2026-04-05",
        status: "Available",
        notes: "Sample barangay clearance record."
    },
    {
        id: "DOC-006",
        residentId: "RS-004",
        type: "Certificate of Residency",
        dateIssued: "2026-01-22",
        status: "Available",
        notes: "Sample certificate of residency record."
    },
    {
        id: "DOC-007",
        residentId: "RS-005",
        type: "Certificate of Indigency",
        dateIssued: "2026-04-17",
        status: "Available",
        notes: "Sample certificate of indigency record."
    },
    {
        id: "DOC-008",
        residentId: "RS-006",
        type: "Barangay Clearance",
        dateIssued: "2026-05-01",
        status: "Available",
        notes: "Sample barangay clearance record."
    }
];


// =====================================================
// 4. DOCUMENT GUIDE
// =====================================================

const documentGuides = [
    {
        id: "GUIDE-001",
        code: "BC",
        name: "Barangay Clearance",
        purpose: "A document commonly requested for employment, school, and other transactions.",
        requirements: [
            "Valid identification or accepted ID.",
            "Resident information and address.",
            "Purpose of the clearance.",
            "Completed application form, if required."
        ],
        steps: [
            "Visit or contact the barangay office.",
            "Provide the required information.",
            "Allow staff to verify your records.",
            "Follow the office's approval and release process."
        ],
        note: "Additional requirements or fees may depend on the purpose and barangay rules."
    },
    {
        id: "GUIDE-002",
        code: "CR",
        name: "Certificate of Residency",
        purpose: "A document used to certify that a person resides in a particular barangay.",
        requirements: [
            "Valid identification or accepted ID.",
            "Complete residential address.",
            "Proof of residency, if requested.",
            "Completed application form, if required."
        ],
        steps: [
            "Provide your name and complete address.",
            "Submit the requested identification.",
            "Allow the staff to verify your residency.",
            "Follow the certificate approval and release process."
        ],
        note: "The barangay may request additional proof of residency."
    },
    {
        id: "GUIDE-003",
        code: "CI",
        name: "Certificate of Indigency",
        purpose: "A document used to certify indigency for certain assistance or other eligible purposes.",
        requirements: [
            "Valid identification or accepted ID.",
            "Complete resident information.",
            "Purpose of the certificate.",
            "Supporting information or assessment, if required."
        ],
        steps: [
            "Inform the barangay about the purpose of your request.",
            "Provide the necessary personal information.",
            "Submit supporting documents if requested.",
            "Follow the barangay's assessment and approval process."
        ],
        note: "Eligibility and supporting requirements must be confirmed with the barangay."
    },
    {
        id: "GUIDE-004",
        code: "BB",
        name: "Barangay Business Clearance",
        purpose: "A document related to the barangay-level clearance process for a business operating in the community.",
        requirements: [
            "Valid identification of the applicant.",
            "Business name and location.",
            "Business registration or related documents, if required.",
            "Completed application form, if required."
        ],
        steps: [
            "Provide the business name and address.",
            "Submit the requested business information.",
            "Allow the staff to verify the submitted details.",
            "Follow the clearance approval and release process."
        ],
        note: "Requirements depend on local business-clearance rules and other applicable permits."
    }
];


// =====================================================
// 5. LOCAL STORAGE
// =====================================================

const MEMBERS_STORAGE_KEY = "barangayhub_members";
const RESIDENTS_STORAGE_KEY = "barangayhub_residents";
const DOCUMENTS_STORAGE_KEY = "barangayhub_resident_documents";

const MEMBER_ID_COUNTER_KEY = "barangayhub_next_member_id";
const RESIDENT_ID_COUNTER_KEY = "barangayhub_next_resident_id";


function cloneData(data) {
    return JSON.parse(JSON.stringify(data));
}


function loadArrayFromStorage(key, fallbackData) {

    try {

        const savedData = localStorage.getItem(key);

        if (savedData === null) {

            const initialData = cloneData(fallbackData);

            localStorage.setItem(
                key,
                JSON.stringify(initialData)
            );

            return initialData;

        }

        const parsedData = JSON.parse(savedData);

        if (Array.isArray(parsedData)) {
            return parsedData;
        }

    } catch (error) {

        console.error("Storage loading error:", error);

    }

    return cloneData(fallbackData);

}


function saveArrayToStorage(key, data) {

    try {

        localStorage.setItem(
            key,
            JSON.stringify(data)
        );

        return true;

    } catch (error) {

        console.error("Storage saving error:", error);

        alert(
            "Unable to save changes in browser storage. Please check available storage."
        );

        return false;

    }

}


// LOAD SAVED MEMBERS

let barangayMembers = loadArrayFromStorage(
    MEMBERS_STORAGE_KEY,
    sampleBarangayMembers
);


// LOAD SAVED RESIDENTS

let residents = loadArrayFromStorage(
    RESIDENTS_STORAGE_KEY,
    sampleResidents
);


// LOAD SAVED DOCUMENTS

let residentDocuments = loadArrayFromStorage(
    DOCUMENTS_STORAGE_KEY,
    sampleResidentDocuments
);


// GENERATE MEMBER ID

function generateMemberId() {

    const highestNumber = barangayMembers.reduce(
        function (highest, member) {

            const match = String(member.id).match(/^BM-(\d+)$/);

            return match
                ? Math.max(highest, Number(match[1]))
                : highest;

        },
        0
    );

    let storedNumber = 1;

    try {

        storedNumber = Number(
            localStorage.getItem(MEMBER_ID_COUNTER_KEY)
        ) || 1;

    } catch (error) {

        console.warn("Could not read member ID counter.");

    }

    const nextNumber = Math.max(
        highestNumber + 1,
        storedNumber
    );

    try {

        localStorage.setItem(
            MEMBER_ID_COUNTER_KEY,
            String(nextNumber + 1)
        );

    } catch (error) {

        console.warn("Could not save member ID counter.");

    }

    return `BM-${String(nextNumber).padStart(3, "0")}`;

}


// GENERATE RESIDENT ID

function generateResidentId() {

    const highestNumber = residents.reduce(
        function (highest, resident) {

            const match = String(resident.id).match(/^RS-(\d+)$/);

            return match
                ? Math.max(highest, Number(match[1]))
                : highest;

        },
        0
    );

    let storedNumber = 1;

    try {

        storedNumber = Number(
            localStorage.getItem(RESIDENT_ID_COUNTER_KEY)
        ) || 1;

    } catch (error) {

        console.warn("Could not read resident ID counter.");

    }

    const nextNumber = Math.max(
        highestNumber + 1,
        storedNumber
    );

    try {

        localStorage.setItem(
            RESIDENT_ID_COUNTER_KEY,
            String(nextNumber + 1)
        );

    } catch (error) {

        console.warn("Could not save resident ID counter.");

    }

    return `RS-${String(nextNumber).padStart(3, "0")}`;

}


// =====================================================
// 6. AUTOMATIC BARANGAY MEMBER FORM SETUP
// =====================================================

// This creates the Add Member button and modal if
// they are not already present in index.html.

function ensureMemberManagementUI() {

    const membersPage =
        document.getElementById("membersPage");

    if (!membersPage) {
        console.warn("Members page was not found.");
        return;
    }


    // ADD MEMBER BUTTON

    const header =
        membersPage.querySelector(".directory-header");

    if (header && !document.getElementById("addMemberButton")) {

        let toolbar =
            header.querySelector(".resident-toolbar");

        if (!toolbar) {

            toolbar = document.createElement("div");

            toolbar.className = "resident-toolbar";

            const searchBox =
                header.querySelector(".member-search-box");

            if (searchBox) {
                toolbar.appendChild(searchBox);
            }

            header.appendChild(toolbar);

        }


        const addButton =
            document.createElement("button");

        addButton.type = "button";

        addButton.id = "addMemberButton";

        addButton.className = "primary-action-button";

        addButton.textContent = "+ Add Member";

        toolbar.appendChild(addButton);

    }


    // EDIT AND DELETE BUTTONS

    const detailPanel =
        membersPage.querySelector("#memberDetailPanel");

    const detailHeading =
        detailPanel?.querySelector(".member-detail-heading");

    if (detailHeading) {

        let actions =
            detailHeading.querySelector(".resident-detail-actions");

        if (!actions) {

            actions = document.createElement("div");

            actions.className = "resident-detail-actions";

            detailHeading.appendChild(actions);

        }


        const closeButton =
            document.getElementById("closeMemberDetails");


        if (!document.getElementById("editMemberButton")) {

            const editButton =
                document.createElement("button");

            editButton.type = "button";

            editButton.id = "editMemberButton";

            editButton.className = "primary-action-button";

            editButton.textContent = "Edit";

            actions.appendChild(editButton);

        }


        if (!document.getElementById("deleteMemberButton")) {

            const deleteButton =
                document.createElement("button");

            deleteButton.type = "button";

            deleteButton.id = "deleteMemberButton";

            deleteButton.className = "delete-action-button";

            deleteButton.textContent = "Delete";

            actions.appendChild(deleteButton);

        }


        if (closeButton && closeButton.parentElement !== actions) {
            actions.appendChild(closeButton);
        }

    }


    // CREATE MEMBER MODAL IF MISSING

    if (!document.getElementById("memberModal")) {

        const modal =
            document.createElement("div");

        modal.className = "resident-modal";

        modal.id = "memberModal";

        modal.hidden = true;


        modal.innerHTML = `
            <div
                class="resident-modal-backdrop"
                id="memberModalBackdrop">
            </div>

            <div
                class="resident-modal-card"
                role="dialog"
                aria-modal="true"
                aria-labelledby="memberModalTitle">

                <div class="resident-modal-header">

                    <div>
                        <span class="detail-label">
                            BARANGAY MEMBER MANAGEMENT
                        </span>

                        <h3 id="memberModalTitle">
                            Add New Member
                        </h3>
                    </div>

                    <button
                        type="button"
                        class="modal-close-button"
                        id="closeMemberModal">
                        ×
                    </button>

                </div>

                <form id="memberForm">

                    <input
                        type="hidden"
                        id="memberEditId">

                    <div class="resident-form-grid">

                        <div class="form-group full-width">
                            <label for="memberNameInput">
                                Full Name
                            </label>

                            <input
                                type="text"
                                id="memberNameInput"
                                placeholder="Enter full name"
                                required>
                        </div>

                        <div class="form-group full-width">
                            <label for="memberPositionInput">
                                Position
                            </label>

                            <select
                                id="memberPositionInput"
                                required>

                                <option value="">
                                    Select position
                                </option>

                                <option value="Punong Barangay">
                                    Punong Barangay
                                </option>

                                <option value="Barangay Kagawad">
                                    Barangay Kagawad
                                </option>

                                <option value="Barangay Secretary">
                                    Barangay Secretary
                                </option>

                                <option value="Barangay Treasurer">
                                    Barangay Treasurer
                                </option>

                                <option value="Barangay Health Worker">
                                    Barangay Health Worker
                                </option>

                                <option value="Barangay Staff">
                                    Barangay Staff
                                </option>

                            </select>
                        </div>

                        <div class="form-group">
                            <label for="memberContactInput">
                                Contact Number
                            </label>

                            <input
                                type="tel"
                                id="memberContactInput"
                                placeholder="Optional">
                        </div>

                        <div class="form-group">
                            <label for="memberEmailInput">
                                Email Address
                            </label>

                            <input
                                type="email"
                                id="memberEmailInput"
                                placeholder="Optional">
                        </div>

                        <div class="form-group full-width">
                            <label for="memberOfficeInput">
                                Assigned Office
                            </label>

                            <input
                                type="text"
                                id="memberOfficeInput"
                                placeholder="Enter assigned office"
                                required>
                        </div>

                    </div>

                    <p
                        id="memberFormMessage"
                        class="auth-status"
                        aria-live="polite">
                    </p>

                    <div class="resident-form-actions">

                        <button
                            type="button"
                            class="secondary-action-button"
                            id="cancelMemberForm">
                            Cancel
                        </button>

                        <button
                            type="submit"
                            class="primary-action-button"
                            id="saveMemberButton">
                            Save Member
                        </button>

                    </div>

                </form>

            </div>
        `;


        membersPage.appendChild(modal);

    }

}


// CREATE MEMBER UI BEFORE GETTING ITS ELEMENTS

ensureMemberManagementUI();


// =====================================================
// 7. LOGIN ELEMENTS
// =====================================================

const authContainer =
    document.getElementById("authContainer");

const dashboardPage =
    document.getElementById("dashboardPage");

const loginCard =
    document.getElementById("loginPage");

const loginPanel =
    document.getElementById("loginPanel");

const registrationPanel =
    document.getElementById("registrationPanel");

const googleSignInButton =
    document.getElementById("googleSignInButton");

const showRegisterButton =
    document.getElementById("showRegisterButton");

const backToLoginButton =
    document.getElementById("backToLoginButton");

const registrationForm =
    document.getElementById("registrationForm");

const registrationMessage =
    document.getElementById("registrationMessage");

const authMessage =
    document.getElementById("authMessage");

const developerPreviewButton =
    document.getElementById("developerPreviewButton");

const logoutButton =
    document.getElementById("logoutButton");

const emailLoginForm =
    document.getElementById("emailLoginForm");

const loginEmail =
    document.getElementById("loginEmail");

const loginPassword =
    document.getElementById("loginPassword");

const loginPasswordToggle =
    document.getElementById("loginPasswordToggle");

const emailLoginMessage =
    document.getElementById("emailLoginMessage");

const forgotPasswordButton =
    document.getElementById("forgotPasswordButton");


// =====================================================
// 8. DASHBOARD ELEMENTS
// =====================================================

const pageTitle =
    document.getElementById("pageTitle");

const pageDescription =
    document.getElementById("pageDescription");

const navButtons =
    document.querySelectorAll(".nav-link");

const dashboardViews =
    document.querySelectorAll(".dashboard-view");

const quickCards =
    document.querySelectorAll(".quick-card");


// =====================================================
// 9. MEMBER ELEMENTS
// =====================================================

const memberSearch =
    document.getElementById("memberSearch");

const memberTableBody =
    document.getElementById("memberTableBody");

const memberResultCount =
    document.getElementById("memberResultCount");

const memberDetailPanel =
    document.getElementById("memberDetailPanel");

const closeMemberDetails =
    document.getElementById("closeMemberDetails");

const addMemberButton =
    document.getElementById("addMemberButton");

const editMemberButton =
    document.getElementById("editMemberButton");

const deleteMemberButton =
    document.getElementById("deleteMemberButton");

const memberModal =
    document.getElementById("memberModal");

const memberModalBackdrop =
    document.getElementById("memberModalBackdrop");

const memberModalTitle =
    document.getElementById("memberModalTitle");

const memberForm =
    document.getElementById("memberForm");

const memberEditId =
    document.getElementById("memberEditId");

const memberNameInput =
    document.getElementById("memberNameInput");

const memberPositionInput =
    document.getElementById("memberPositionInput");

const memberContactInput =
    document.getElementById("memberContactInput");

const memberEmailInput =
    document.getElementById("memberEmailInput");

const memberOfficeInput =
    document.getElementById("memberOfficeInput");

const memberFormMessage =
    document.getElementById("memberFormMessage");

const saveMemberButton =
    document.getElementById("saveMemberButton");

const closeMemberModal =
    document.getElementById("closeMemberModal");

const cancelMemberForm =
    document.getElementById("cancelMemberForm");

let selectedMemberId = null;


// =====================================================
// 10. RESIDENT ELEMENTS
// =====================================================

const residentSearch =
    document.getElementById("residentSearch");

const residentTableBody =
    document.getElementById("residentTableBody");

const residentResultCount =
    document.getElementById("residentResultCount");

const residentDetailPanel =
    document.getElementById("residentDetailPanel");

const closeResidentDetails =
    document.getElementById("closeResidentDetails");

const addResidentButton =
    document.getElementById("addResidentButton");

const residentModal =
    document.getElementById("residentModal");

const residentModalBackdrop =
    document.getElementById("residentModalBackdrop");

const residentModalTitle =
    document.getElementById("residentModalTitle");

const residentForm =
    document.getElementById("residentForm");

const residentEditId =
    document.getElementById("residentEditId");

const residentNameInput =
    document.getElementById("residentNameInput");

const residentBirthDateInput =
    document.getElementById("residentBirthDateInput");

const residentGenderInput =
    document.getElementById("residentGenderInput");

const residentPurokInput =
    document.getElementById("residentPurokInput");

const residentStreetInput =
    document.getElementById("residentStreetInput");

const residentBarangayInput =
    document.getElementById("residentBarangayInput");

const residentCityInput =
    document.getElementById("residentCityInput");

const residentFormMessage =
    document.getElementById("residentFormMessage");

const saveResidentButton =
    document.getElementById("saveResidentButton");

const closeResidentModal =
    document.getElementById("closeResidentModal");

const cancelResidentForm =
    document.getElementById("cancelResidentForm");

const editResidentButton =
    document.getElementById("editResidentButton");

const deleteResidentButton =
    document.getElementById("deleteResidentButton");

let selectedResidentId = null;


// =====================================================
// 11. DOCUMENT FINDER ELEMENTS
// =====================================================

const documentSearch =
    document.getElementById("documentSearch");

const documentResidentTableBody =
    document.getElementById("documentResidentTableBody");

const documentResidentCount =
    document.getElementById("documentResidentCount");

const residentDocumentPanel =
    document.getElementById("residentDocumentPanel");

const residentDocumentsTableBody =
    document.getElementById("residentDocumentsTableBody");

const closeResidentDocuments =
    document.getElementById("closeResidentDocuments");

const documentDetailPanel =
    document.getElementById("documentDetailPanel");

const closeDocumentDetails =
    document.getElementById("closeDocumentDetails");


// =====================================================
// 12. DOCUMENT GUIDE ELEMENTS
// =====================================================

const guideSearch =
    document.getElementById("guideSearch");

const documentGuideGrid =
    document.getElementById("documentGuideGrid");

const guideEmptyState =
    document.getElementById("guideEmptyState");


// =====================================================
// 13. HELPER FUNCTIONS
// =====================================================

function calculateAge(birthDate) {

    if (!birthDate) return "Not available";

    const today = new Date();

    const birthday = new Date(`${birthDate}T00:00:00`);

    if (Number.isNaN(birthday.getTime())) {
        return "Not available";
    }

    let age = today.getFullYear() - birthday.getFullYear();

    const monthDifference =
        today.getMonth() - birthday.getMonth();

    if (
        monthDifference < 0 ||
        (
            monthDifference === 0 &&
            today.getDate() < birthday.getDate()
        )
    ) {
        age--;
    }

    return age;
}


function formatDate(dateValue) {

    if (!dateValue) return "Not provided";

    const date = new Date(`${dateValue}T00:00:00`);

    if (Number.isNaN(date.getTime())) {
        return "Not provided";
    }

    return date.toLocaleDateString("en-PH", {
        year: "numeric",
        month: "short",
        day: "numeric"
    });
}


function formatDocumentDate(dateValue) {
    return formatDate(dateValue);
}


function getResidentAddress(resident) {

    return [
        resident.purok,
        resident.street,
        resident.barangay,
        resident.city
    ].filter(Boolean).join(", ");

}


function setText(elementId, value) {

    const element = document.getElementById(elementId);

    if (element) {
        element.textContent = value ?? "";
    }

}


function getTodayLocalDate() {

    const today = new Date();

    const year = today.getFullYear();

    const month = String(today.getMonth() + 1).padStart(2, "0");

    const day = String(today.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;

}


// =====================================================
// 14. LOGIN AND REGISTRATION
// =====================================================


// GOOGLE SIGN-IN PLACEHOLDER

if (googleSignInButton) {

    googleSignInButton.addEventListener("click", function () {

        if (authMessage) {

            authMessage.textContent =
                "Google Sign-In will be activated after Supabase Authentication is connected.";

        }

    });

}


// EMAIL LOGIN PLACEHOLDER

if (emailLoginForm) {

    emailLoginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        if (emailLoginMessage) {

            emailLoginMessage.textContent =
                "Email and password sign-in will be activated after Supabase Authentication is connected.";

        }

    });

}


// SHOW / HIDE PASSWORD

if (loginPasswordToggle && loginPassword) {

    loginPasswordToggle.addEventListener("click", function () {

        const isHidden = loginPassword.type === "password";

        loginPassword.type = isHidden ? "text" : "password";

        loginPasswordToggle.textContent =
            isHidden ? "Hide" : "Show";

    });

}


// FORGOT PASSWORD PLACEHOLDER

if (forgotPasswordButton) {

    forgotPasswordButton.addEventListener("click", function () {

        if (emailLoginMessage) {

            emailLoginMessage.textContent =
                "Password recovery will be available after Supabase Authentication is connected.";

        }

    });

}


// SHOW REGISTRATION PANEL

if (showRegisterButton) {

    showRegisterButton.addEventListener("click", function () {

        if (loginPanel) loginPanel.hidden = true;

        if (registrationPanel) registrationPanel.hidden = false;

        if (authMessage) authMessage.textContent = "";

        if (registrationMessage) registrationMessage.textContent = "";

    });

}


// RETURN TO LOGIN PANEL

if (backToLoginButton) {

    backToLoginButton.addEventListener("click", function () {

        if (registrationPanel) registrationPanel.hidden = true;

        if (loginPanel) loginPanel.hidden = false;

        if (registrationMessage) registrationMessage.textContent = "";

        if (authMessage) authMessage.textContent = "";

    });

}


// REGISTRATION FORM PREVIEW

if (registrationForm) {

    registrationForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const fullName =
            document.getElementById("registerFullName")?.value.trim();

        const email =
            document.getElementById("registerEmail")?.value.trim();

        const position =
            document.getElementById("registerPosition")?.value;

        const invitationCode =
            document.getElementById("registerInvitationCode")?.value.trim();


        if (!fullName || !email || !position || !invitationCode) {

            if (registrationMessage) {
                registrationMessage.textContent =
                    "Please complete all registration fields.";
            }

            return;

        }


        if (registrationMessage) {

            registrationMessage.textContent =
                "Your form is complete. Actual account creation will be enabled after Supabase integration.";

        }

    });

}


// DEVELOPER PREVIEW

if (developerPreviewButton) {

    developerPreviewButton.addEventListener("click", function () {

        if (authContainer) authContainer.hidden = true;

        if (dashboardPage) dashboardPage.hidden = false;

        showDashboardPage("overview");

    });

}


// =====================================================
// 15. DASHBOARD NAVIGATION
// =====================================================

function showDashboardPage(pageName) {

    const selectedPageId = `${pageName}Page`;

    const targetPage =
        document.getElementById(selectedPageId);

    if (!targetPage) {

        console.error("Page not found:", selectedPageId);

        return;

    }


    dashboardViews.forEach(function (view) {

        view.hidden = view.id !== selectedPageId;

    });


    navButtons.forEach(function (button) {

        button.classList.toggle(
            "active",
            button.dataset.page === pageName
        );

    });


    const activeButton = document.querySelector(
        `.nav-link[data-page="${pageName}"]`
    );

    if (activeButton) {

        if (pageTitle) {
            pageTitle.textContent =
                activeButton.dataset.title || "Dashboard";
        }

        if (pageDescription) {
            pageDescription.textContent =
                activeButton.dataset.description || "";
        }

    }


    if (pageName === "overview") {
        updateDashboardCounters();
    }

    if (pageName === "members") {

        renderMembers();

        if (memberDetailPanel) memberDetailPanel.hidden = true;

        selectedMemberId = null;

    }

    if (pageName === "residents") {

        renderResidents();

        if (residentDetailPanel) residentDetailPanel.hidden = true;

        selectedResidentId = null;

    }

    if (pageName === "documents") {

        renderDocumentResidents();

        if (residentDocumentPanel) residentDocumentPanel.hidden = true;

        if (documentDetailPanel) documentDetailPanel.hidden = true;

    }

    if (pageName === "guide") {
        renderDocumentGuide();
    }

}


// SIDEBAR NAVIGATION

navButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        showDashboardPage(button.dataset.page);

    });

});


// QUICK ACCESS NAVIGATION

quickCards.forEach(function (card) {

    card.addEventListener("click", function () {

        showDashboardPage(card.dataset.goPage);

    });

});


// =====================================================
// 16. BARANGAY MEMBERS DIRECTORY
// =====================================================

function renderMembers() {

    if (
        !memberSearch ||
        !memberTableBody ||
        !memberResultCount
    ) {
        return;
    }


    const searchTerm =
        memberSearch.value.trim().toLowerCase();


    const filteredMembers =
        barangayMembers.filter(function (member) {

            return (

                String(member.id).toLowerCase().includes(searchTerm) ||

                String(member.name).toLowerCase().includes(searchTerm) ||

                String(member.position).toLowerCase().includes(searchTerm)

            );

        });


    memberTableBody.innerHTML = "";

    memberResultCount.textContent =
        `${filteredMembers.length} of ${barangayMembers.length} members`;


    if (filteredMembers.length === 0) {

        const row = document.createElement("tr");

        const cell = document.createElement("td");

        cell.colSpan = 5;

        cell.textContent =
            "No matching barangay members found.";

        row.appendChild(cell);

        memberTableBody.appendChild(row);

        return;

    }


    filteredMembers.forEach(function (member) {

        const row = document.createElement("tr");

        const values = [
            member.id,
            member.name,
            member.position,
            member.contact
        ];


        values.forEach(function (value) {

            const cell = document.createElement("td");

            cell.textContent = value;

            row.appendChild(cell);

        });


        const actionCell = document.createElement("td");

        const viewButton = document.createElement("button");

        viewButton.type = "button";

        viewButton.className = "view-member-button";

        viewButton.textContent = "View Details";


        viewButton.addEventListener("click", function () {

            showMemberDetails(member);

        });


        actionCell.appendChild(viewButton);

        row.appendChild(actionCell);

        memberTableBody.appendChild(row);

    });

}


// SHOW MEMBER DETAILS

function showMemberDetails(member) {

    selectedMemberId = member.id;

    const details = {

        memberDetailName: member.name,

        memberDetailPosition: member.position,

        memberDetailId: member.id,

        memberDetailRole: member.position,

        memberDetailContact: member.contact,

        memberDetailEmail: member.email,

        memberDetailOffice: member.office

    };


    Object.entries(details).forEach(function ([elementId, value]) {

        setText(elementId, value);

    });


    if (memberDetailPanel) {

        memberDetailPanel.hidden = false;

        memberDetailPanel.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });

    }

}


// MEMBER SEARCH

if (memberSearch) {

    memberSearch.addEventListener("input", function () {

        if (memberDetailPanel) {
            memberDetailPanel.hidden = true;
        }

        selectedMemberId = null;

        renderMembers();

    });

}


// CLOSE MEMBER DETAILS

if (closeMemberDetails) {

    closeMemberDetails.addEventListener("click", function () {

        if (memberDetailPanel) {
            memberDetailPanel.hidden = true;
        }

        selectedMemberId = null;

    });

}


// =====================================================
// 17. BARANGAY MEMBER MANAGEMENT
// ADD / EDIT / DELETE
// =====================================================


// OPEN MEMBER FORM

function openMemberForm(mode, member = null) {

    if (!memberModal || !memberForm) {

        alert("Member Management form could not be opened.");

        return;

    }


    memberForm.reset();

    if (memberFormMessage) {
        memberFormMessage.textContent = "";
    }


    const isEditing = mode === "edit" && member;


    if (memberModalTitle) {

        memberModalTitle.textContent = isEditing
            ? "Edit Member Information"
            : "Add New Member";

    }


    if (saveMemberButton) {

        saveMemberButton.textContent = isEditing
            ? "Update Member"
            : "Save Member";

    }


    if (memberEditId) {

        memberEditId.value =
            isEditing ? member.id : "";

    }


    if (isEditing) {

        memberNameInput.value = member.name || "";

        memberPositionInput.value = member.position || "";

        memberContactInput.value =
            member.contact === "Not provided"
                ? ""
                : member.contact || "";

        memberEmailInput.value =
            member.email === "Not provided"
                ? ""
                : member.email || "";

        memberOfficeInput.value = member.office || "";

    }


    memberModal.hidden = false;

    document.body.classList.add("modal-open");

    memberNameInput.focus();

}


// CLOSE MEMBER FORM

function closeMemberFormWindow() {

    if (memberModal) {
        memberModal.hidden = true;
    }

    document.body.classList.remove("modal-open");

    if (memberForm) {
        memberForm.reset();
    }

    if (memberFormMessage) {
        memberFormMessage.textContent = "";
    }

}


// ADD MEMBER

if (addMemberButton) {

    addMemberButton.addEventListener("click", function () {

        openMemberForm("add");

    });

}


// EDIT MEMBER

if (editMemberButton) {

    editMemberButton.addEventListener("click", function () {

        const member = barangayMembers.find(function (item) {

            return item.id === selectedMemberId;

        });

        if (member) {
            openMemberForm("edit", member);
        }

    });

}


// CLOSE MODAL

if (closeMemberModal) {

    closeMemberModal.addEventListener(
        "click",
        closeMemberFormWindow
    );

}

if (cancelMemberForm) {

    cancelMemberForm.addEventListener(
        "click",
        closeMemberFormWindow
    );

}

if (memberModalBackdrop) {

    memberModalBackdrop.addEventListener(
        "click",
        closeMemberFormWindow
    );

}


// SAVE MEMBER

if (memberForm) {

    memberForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const editingId = memberEditId.value;


        const memberData = {

            name: memberNameInput.value.trim(),

            position: memberPositionInput.value,

            contact:
                memberContactInput.value.trim() || "Not provided",

            email:
                memberEmailInput.value.trim() || "Not provided",

            office: memberOfficeInput.value.trim()

        };


        if (
            !memberData.name ||
            !memberData.position ||
            !memberData.office
        ) {

            memberFormMessage.textContent =
                "Please complete the name, position, and assigned office.";

            return;

        }


        let updatedMembers;

        let newMemberId = "";


        // EDIT EXISTING MEMBER

        if (editingId) {

            const existingMember = barangayMembers.find(
                function (member) {
                    return member.id === editingId;
                }
            );

            if (!existingMember) {

                memberFormMessage.textContent =
                    "Member record could not be found.";

                return;

            }


            updatedMembers = barangayMembers.map(
                function (member) {

                    return member.id === editingId
                        ? { ...member, ...memberData }
                        : member;

                }
            );

        } else {

            // ADD NEW MEMBER

            newMemberId = generateMemberId();

            updatedMembers = [

                ...barangayMembers,

                {
                    id: newMemberId,
                    ...memberData
                }

            ];

        }


        // SAVE MEMBER DATA

        if (
            !saveArrayToStorage(
                MEMBERS_STORAGE_KEY,
                updatedMembers
            )
        ) {
            return;
        }


        barangayMembers = updatedMembers;


        // UPDATE DIRECTORY AND COUNTERS

        renderMembers();

        updateDashboardCounters();


        // CLOSE MODAL

        closeMemberFormWindow();


        // SHOW UPDATED DETAILS

        if (editingId) {

            const updatedMember = barangayMembers.find(
                function (member) {
                    return member.id === editingId;
                }
            );

            if (updatedMember) {
                showMemberDetails(updatedMember);
            }

        } else {

            selectedMemberId = null;

            if (memberDetailPanel) {
                memberDetailPanel.hidden = true;
            }

        }

    });

}


// DELETE MEMBER

if (deleteMemberButton) {

    deleteMemberButton.addEventListener("click", function () {

        const member = barangayMembers.find(function (item) {

            return item.id === selectedMemberId;

        });


        if (!member) {
            return;
        }


        const confirmed = window.confirm(
            `Are you sure you want to delete ${member.name} from the barangay member directory?`
        );


        if (!confirmed) {
            return;
        }


        const updatedMembers =
            barangayMembers.filter(function (item) {

                return item.id !== selectedMemberId;

            });


        if (
            !saveArrayToStorage(
                MEMBERS_STORAGE_KEY,
                updatedMembers
            )
        ) {
            return;
        }


        barangayMembers = updatedMembers;

        selectedMemberId = null;


        if (memberDetailPanel) {
            memberDetailPanel.hidden = true;
        }


        renderMembers();

        updateDashboardCounters();

    });

}


// =====================================================
// 18. RESIDENTS DIRECTORY
// =====================================================

function renderResidents() {

    if (
        !residentSearch ||
        !residentTableBody ||
        !residentResultCount
    ) {
        return;
    }


    const searchTerm =
        residentSearch.value.trim().toLowerCase();


    const filteredResidents =
        residents.filter(function (resident) {

            const address =
                getResidentAddress(resident).toLowerCase();

            return (

                String(resident.id).toLowerCase().includes(searchTerm) ||

                String(resident.name).toLowerCase().includes(searchTerm) ||

                address.includes(searchTerm)

            );

        });


    residentTableBody.innerHTML = "";

    residentResultCount.textContent =
        `${filteredResidents.length} of ${residents.length} residents`;


    if (filteredResidents.length === 0) {

        const row = document.createElement("tr");

        const cell = document.createElement("td");

        cell.colSpan = 6;

        cell.textContent = "No matching residents found.";

        row.appendChild(cell);

        residentTableBody.appendChild(row);

        return;

    }


    filteredResidents.forEach(function (resident) {

        const row = document.createElement("tr");

        const values = [

            resident.id,

            resident.name,

            formatDate(resident.birthDate),

            `${calculateAge(resident.birthDate)} years old`,

            getResidentAddress(resident)

        ];


        values.forEach(function (value) {

            const cell = document.createElement("td");

            cell.textContent = value;

            row.appendChild(cell);

        });


        const actionCell = document.createElement("td");

        const viewButton = document.createElement("button");

        viewButton.type = "button";

        viewButton.className = "view-member-button";

        viewButton.textContent = "View Details";


        viewButton.addEventListener("click", function () {

            showResidentDetails(resident);

        });


        actionCell.appendChild(viewButton);

        row.appendChild(actionCell);

        residentTableBody.appendChild(row);

    });

}


// SHOW RESIDENT DETAILS

function showResidentDetails(resident) {

    selectedResidentId = resident.id;


    const details = {

        residentDetailName: resident.name,

        residentDetailId: resident.id,

        residentDetailGender: resident.gender,

        residentDetailBirthday: formatDate(resident.birthDate),

        residentDetailAge:
            `${calculateAge(resident.birthDate)} years old`,

        residentDetailAddress: getResidentAddress(resident)

    };


    Object.entries(details).forEach(function ([elementId, value]) {

        setText(elementId, value);

    });


    if (residentDetailPanel) {

        residentDetailPanel.hidden = false;

        residentDetailPanel.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });

    }

}


// RESIDENT SEARCH

if (residentSearch) {

    residentSearch.addEventListener("input", function () {

        if (residentDetailPanel) {
            residentDetailPanel.hidden = true;
        }

        selectedResidentId = null;

        renderResidents();

    });

}


// CLOSE RESIDENT DETAILS

if (closeResidentDetails) {

    closeResidentDetails.addEventListener("click", function () {

        if (residentDetailPanel) {
            residentDetailPanel.hidden = true;
        }

        selectedResidentId = null;

    });

}


// =====================================================
// 19. RESIDENT MANAGEMENT
// ADD / EDIT / DELETE
// =====================================================


// OPEN RESIDENT FORM

function openResidentForm(mode, resident = null) {

    if (!residentModal || !residentForm) {

        alert("Resident Management form is missing.");

        return;

    }


    residentForm.reset();

    if (residentFormMessage) {
        residentFormMessage.textContent = "";
    }

    residentBirthDateInput.max = getTodayLocalDate();


    const isEditing = mode === "edit" && resident;


    residentModalTitle.textContent = isEditing
        ? "Edit Resident Information"
        : "Add New Resident";


    saveResidentButton.textContent = isEditing
        ? "Update Resident"
        : "Save Resident";


    residentEditId.value =
        isEditing ? resident.id : "";


    if (isEditing) {

        residentNameInput.value = resident.name || "";

        residentBirthDateInput.value =
            resident.birthDate || "";

        residentGenderInput.value =
            resident.gender || "";

        residentPurokInput.value =
            resident.purok || "";

        residentStreetInput.value =
            resident.street || "";

        residentBarangayInput.value =
            resident.barangay || "";

        residentCityInput.value =
            resident.city || "";

    }


    residentModal.hidden = false;

    document.body.classList.add("modal-open");

    residentNameInput.focus();

}


// CLOSE RESIDENT FORM

function closeResidentFormWindow() {

    residentModal.hidden = true;

    document.body.classList.remove("modal-open");

    residentForm.reset();

    residentFormMessage.textContent = "";

}


// ADD RESIDENT

if (addResidentButton) {

    addResidentButton.addEventListener("click", function () {

        openResidentForm("add");

    });

}


// EDIT RESIDENT

if (editResidentButton) {

    editResidentButton.addEventListener("click", function () {

        const resident = residents.find(function (item) {

            return item.id === selectedResidentId;

        });

        if (resident) {
            openResidentForm("edit", resident);
        }

    });

}


// CLOSE RESIDENT MODAL

if (closeResidentModal) {

    closeResidentModal.addEventListener(
        "click",
        closeResidentFormWindow
    );

}

if (cancelResidentForm) {

    cancelResidentForm.addEventListener(
        "click",
        closeResidentFormWindow
    );

}

if (residentModalBackdrop) {

    residentModalBackdrop.addEventListener(
        "click",
        closeResidentFormWindow
    );

}


// SAVE RESIDENT

if (residentForm) {

    residentForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const editingId = residentEditId.value;

        const birthDate = residentBirthDateInput.value;


        if (
            !birthDate ||
            birthDate > getTodayLocalDate()
        ) {

            residentFormMessage.textContent =
                "Date of birth cannot be in the future.";

            return;

        }


        const residentData = {

            name: residentNameInput.value.trim(),

            birthDate: birthDate,

            gender: residentGenderInput.value,

            purok: residentPurokInput.value.trim(),

            street: residentStreetInput.value.trim(),

            barangay: residentBarangayInput.value.trim(),

            city: residentCityInput.value.trim()

        };


        const allFieldsCompleted =
            Object.values(residentData).every(function (value) {

                return String(value).trim() !== "";

            });


        if (!allFieldsCompleted) {

            residentFormMessage.textContent =
                "Please complete all resident information.";

            return;

        }


        let updatedResidents;

        if (editingId) {

            const existingResident = residents.find(
                function (resident) {
                    return resident.id === editingId;
                }
            );

            if (!existingResident) {

                residentFormMessage.textContent =
                    "Resident record could not be found.";

                return;

            }


            updatedResidents = residents.map(
                function (resident) {

                    return resident.id === editingId
                        ? { ...resident, ...residentData }
                        : resident;

                }
            );

        } else {

            const newId = generateResidentId();

            updatedResidents = [

                ...residents,

                {
                    id: newId,
                    ...residentData
                }

            ];

        }


        if (
            !saveArrayToStorage(
                RESIDENTS_STORAGE_KEY,
                updatedResidents
            )
        ) {
            return;
        }


        residents = updatedResidents;


        renderResidents();

        renderDocumentResidents();

        updateDashboardCounters();


        closeResidentFormWindow();


        if (editingId) {

            const updatedResident = residents.find(
                function (resident) {
                    return resident.id === editingId;
                }
            );

            if (updatedResident) {
                showResidentDetails(updatedResident);
            }

        } else {

            selectedResidentId = null;

            residentDetailPanel.hidden = true;

        }

    });

}


// DELETE RESIDENT

if (deleteResidentButton) {

    deleteResidentButton.addEventListener("click", function () {

        const resident = residents.find(function (item) {

            return item.id === selectedResidentId;

        });


        if (!resident) {
            return;
        }


        const confirmed = window.confirm(
            `Are you sure you want to delete ${resident.name}? Their linked sample documents will also be removed.`
        );


        if (!confirmed) {
            return;
        }


        const updatedResidents =
            residents.filter(function (item) {

                return item.id !== selectedResidentId;

            });


        const updatedDocuments =
            residentDocuments.filter(function (doc) {

                return doc.residentId !== selectedResidentId;

            });


        if (
            !saveArrayToStorage(
                DOCUMENTS_STORAGE_KEY,
                updatedDocuments
            )
        ) {
            return;
        }


        if (
            !saveArrayToStorage(
                RESIDENTS_STORAGE_KEY,
                updatedResidents
            )
        ) {

            saveArrayToStorage(
                DOCUMENTS_STORAGE_KEY,
                residentDocuments
            );

            return;

        }


        residents = updatedResidents;

        residentDocuments = updatedDocuments;

        selectedResidentId = null;


        residentDetailPanel.hidden = true;

        renderResidents();

        renderDocumentResidents();

        updateDashboardCounters();

    });

}


// =====================================================

// =====================================================
// 20. DOCUMENT MANAGEMENT INTERFACE
// =====================================================

function ensureDocumentManagementUI() {

    const documentsPage =
        document.getElementById("documentsPage");

    if (!documentsPage) {
        console.error("Document Finder page not found.");
        return;
    }

    const header =
        documentsPage.querySelector(".directory-header");

    if (header) {

        let toolbar =
            header.querySelector(".resident-toolbar");

        const searchBox =
            header.querySelector(".member-search-box");

        if (!toolbar) {

            toolbar = document.createElement("div");
            toolbar.className = "resident-toolbar";

            if (searchBox) {
                toolbar.appendChild(searchBox);
            }

            header.appendChild(toolbar);
        }

        if (!document.getElementById("addDocumentButton")) {

            const button = document.createElement("button");

            button.type = "button";
            button.id = "addDocumentButton";
            button.className = "primary-action-button";
            button.textContent = "+ Add Document";

            toolbar.appendChild(button);
        }
    }


    // CREATE DOCUMENT MODAL

    if (!document.getElementById("documentModal")) {

        const modal = document.createElement("div");

        modal.className = "resident-modal";
        modal.id = "documentModal";
        modal.hidden = true;

        modal.innerHTML = `
            <div
                class="resident-modal-backdrop"
                id="documentModalBackdrop">
            </div>

            <div
                class="resident-modal-card"
                role="dialog"
                aria-modal="true"
                aria-labelledby="documentModalTitle">

                <div class="resident-modal-header">

                    <div>
                        <span class="detail-label">
                            DOCUMENT MANAGEMENT
                        </span>

                        <h3 id="documentModalTitle">
                            Add New Document
                        </h3>
                    </div>

                    <button
                        type="button"
                        class="modal-close-button"
                        id="closeDocumentModal">
                        ×
                    </button>

                </div>

                <form id="documentForm">

                    <input
                        type="hidden"
                        id="documentEditId">

                    <div class="resident-form-grid">

                        <div class="form-group full-width">

                            <label for="documentResidentInput">
                                Select Resident
                            </label>

                            <select
                                id="documentResidentInput"
                                required>
                                <option value="">
                                    Select a resident
                                </option>
                            </select>

                        </div>

                        <div class="form-group full-width">

                            <label for="documentTypeInput">
                                Document Type
                            </label>

                            <input
                                type="text"
                                id="documentTypeInput"
                                list="documentTypeSuggestions"
                                placeholder="Enter document type"
                                required>

                            <datalist id="documentTypeSuggestions">
                                <option value="Barangay Clearance">
                                <option value="Certificate of Residency">
                                <option value="Certificate of Indigency">
                                <option value="Barangay Business Clearance">
                                <option value="Other">
                            </datalist>

                        </div>

                        <div class="form-group">

                            <label for="documentDateInput">
                                Date Issued
                            </label>

                            <input
                                type="date"
                                id="documentDateInput">

                        </div>

                        <div class="form-group">

                            <label for="documentStatusInput">
                                Document Status
                            </label>

                            <select
                                id="documentStatusInput"
                                required>

                                <option value="Pending">Pending</option>
                                <option value="Processing">Processing</option>
                                <option value="Available">Available</option>
                                <option value="Released">Released</option>

                            </select>

                        </div>

                        <div class="form-group full-width">

                            <label for="documentNotesInput">
                                Notes / Description
                            </label>

                            <input
                                type="text"
                                id="documentNotesInput"
                                placeholder="Enter additional notes (optional)">

                        </div>

                    </div>

                    <p
                        id="documentFormMessage"
                        class="auth-status"
                        aria-live="polite">
                    </p>

                    <div class="resident-form-actions">

                        <button
                            type="button"
                            class="secondary-action-button"
                            id="cancelDocumentForm">
                            Cancel
                        </button>

                        <button
                            type="submit"
                            class="primary-action-button"
                            id="saveDocumentButton">
                            Save Document
                        </button>

                    </div>

                </form>

            </div>
        `;

        documentsPage.appendChild(modal);
    }
}


// CREATE DOCUMENT INTERFACE

ensureDocumentManagementUI();


// =====================================================
// 21. DOCUMENT ELEMENTS
// =====================================================

const addDocumentButton =
    document.getElementById("addDocumentButton");

const documentModal =
    document.getElementById("documentModal");

const documentModalBackdrop =
    document.getElementById("documentModalBackdrop");

const documentModalTitle =
    document.getElementById("documentModalTitle");

const documentForm =
    document.getElementById("documentForm");

const documentEditId =
    document.getElementById("documentEditId");

const documentResidentInput =
    document.getElementById("documentResidentInput");

const documentTypeInput =
    document.getElementById("documentTypeInput");

const documentDateInput =
    document.getElementById("documentDateInput");

const documentStatusInput =
    document.getElementById("documentStatusInput");

const documentNotesInput =
    document.getElementById("documentNotesInput");

const documentFormMessage =
    document.getElementById("documentFormMessage");

const saveDocumentButton =
    document.getElementById("saveDocumentButton");

const closeDocumentModal =
    document.getElementById("closeDocumentModal");

const cancelDocumentForm =
    document.getElementById("cancelDocumentForm");


// =====================================================
// 22. GENERATE DOCUMENT ID
// =====================================================

function generateDocumentId() {

    const highestNumber = residentDocuments.reduce(
        function (highest, doc) {

            const match = String(doc.id).match(/^DOC-(\d+)$/);

            return match
                ? Math.max(highest, Number(match[1]))
                : highest;

        },
        0
    );

    let storedNumber = 1;

    try {

        storedNumber = Number(
            localStorage.getItem("barangayhub_next_document_id")
        ) || 1;

    } catch (error) {

        console.warn("Could not read document ID counter.");

    }

    const nextNumber = Math.max(
        highestNumber + 1,
        storedNumber
    );

    try {

        localStorage.setItem(
            "barangayhub_next_document_id",
            String(nextNumber + 1)
        );

    } catch (error) {

        console.warn("Could not save document ID counter.");

    }

    return `DOC-${String(nextNumber).padStart(3, "0")}`;

}


// =====================================================
// 23. RESIDENT DROPDOWN
// =====================================================

function populateDocumentResidents(selectedId = "") {

    if (!documentResidentInput) return;

    documentResidentInput.innerHTML = "";

    const defaultOption =
        document.createElement("option");

    defaultOption.value = "";
    defaultOption.textContent = "Select a resident";

    documentResidentInput.appendChild(defaultOption);


    residents.forEach(function (resident) {

        const option =
            document.createElement("option");

        option.value = resident.id;

        option.textContent =
            `${resident.name} (${resident.id})`;

        documentResidentInput.appendChild(option);

    });

    documentResidentInput.value = selectedId;

}


// =====================================================
// 24. OPEN DOCUMENT FORM
// =====================================================

function openDocumentForm(mode, doc = null) {

    documentForm.reset();

    documentFormMessage.textContent = "";

    populateDocumentResidents(
        doc ? doc.residentId : ""
    );


    const isEditing = mode === "edit" && doc;


    documentModalTitle.textContent = isEditing
        ? "Edit Document Information"
        : "Add New Document";


    saveDocumentButton.textContent = isEditing
        ? "Update Document"
        : "Save Document";


    documentEditId.value =
        isEditing ? doc.id : "";


    documentDateInput.max = getTodayLocalDate();


    if (isEditing) {

        documentTypeInput.value = doc.type || "";

        documentDateInput.value = doc.dateIssued || "";

        documentStatusInput.value =
            doc.status || "Pending";

        documentNotesInput.value = doc.notes || "";

    } else {

        documentStatusInput.value = "Available";

        documentDateInput.value = getTodayLocalDate();

    }


    if (residents.length === 0) {

        documentFormMessage.textContent =
            "Please add a resident before creating a document.";

        saveDocumentButton.disabled = true;

    } else {

        saveDocumentButton.disabled = false;

    }


    documentModal.hidden = false;

    document.body.classList.add("modal-open");

    documentResidentInput.focus();

}


// =====================================================
// 25. CLOSE DOCUMENT FORM
// =====================================================

function closeDocumentFormWindow() {

    if (documentModal) {
        documentModal.hidden = true;
    }

    document.body.classList.remove("modal-open");

    if (documentForm) {
        documentForm.reset();
    }

    if (documentFormMessage) {
        documentFormMessage.textContent = "";
    }

}


// ADD DOCUMENT BUTTON

if (addDocumentButton) {

    addDocumentButton.addEventListener("click", function () {

        openDocumentForm("add");

    });

}


// CLOSE BUTTONS

if (closeDocumentModal) {

    closeDocumentModal.addEventListener(
        "click",
        closeDocumentFormWindow
    );

}

if (cancelDocumentForm) {

    cancelDocumentForm.addEventListener(
        "click",
        closeDocumentFormWindow
    );

}

if (documentModalBackdrop) {

    documentModalBackdrop.addEventListener(
        "click",
        closeDocumentFormWindow
    );

}


// =====================================================
// 26. SAVE NEW OR UPDATED DOCUMENT
// =====================================================

if (documentForm) {

    documentForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const editingId = documentEditId.value;

        const residentId = documentResidentInput.value;

        const documentType = documentTypeInput.value.trim();

        const dateIssued = documentDateInput.value;

        const status = documentStatusInput.value;

        const notes = documentNotesInput.value.trim();


        // VALIDATE RESIDENT

        const resident = residents.find(function (item) {

            return item.id === residentId;

        });

        if (!resident) {

            documentFormMessage.textContent =
                "Please select a valid resident.";

            return;

        }


        // VALIDATE DOCUMENT TYPE

        if (!documentType) {

            documentFormMessage.textContent =
                "Please enter a document type.";

            return;

        }


        // VALIDATE DATE

        if (
            dateIssued &&
            dateIssued > getTodayLocalDate()
        ) {

            documentFormMessage.textContent =
                "Date issued cannot be in the future.";

            return;

        }


        // VALIDATE STATUS

        const allowedStatuses = [
            "Pending",
            "Processing",
            "Available",
            "Released"
        ];

        if (!allowedStatuses.includes(status)) {

            documentFormMessage.textContent =
                "Please select a valid document status.";

            return;

        }


        const documentData = {

            residentId: residentId,
            type: documentType,
            dateIssued: dateIssued,
            status: status,
            notes: notes || "No additional notes."

        };


        let updatedDocuments;


        // EDIT EXISTING DOCUMENT

        if (editingId) {

            const existingDocument =
                residentDocuments.find(function (item) {

                    return item.id === editingId;

                });


            if (!existingDocument) {

                documentFormMessage.textContent =
                    "Document record could not be found.";

                return;

            }


            updatedDocuments =
                residentDocuments.map(function (doc) {

                    return doc.id === editingId
                        ? { ...doc, ...documentData }
                        : doc;

                });

        } else {

            // ADD NEW DOCUMENT

            const newDocumentId = generateDocumentId();

            updatedDocuments = [

                ...residentDocuments,

                {
                    id: newDocumentId,
                    ...documentData
                }

            ];

        }


        // SAVE DOCUMENTS

        if (
            !saveArrayToStorage(
                DOCUMENTS_STORAGE_KEY,
                updatedDocuments
            )
        ) {
            return;
        }


        residentDocuments = updatedDocuments;


        // CLOSE FORM

        closeDocumentFormWindow();


        // UPDATE DASHBOARD AND DIRECTORY

        renderDocumentResidents();

        updateDashboardCounters();


        // SHOW UPDATED RESIDENT DOCUMENTS

        const updatedResident = residents.find(function (item) {

            return item.id === residentId;

        });

        if (updatedResident) {

            showResidentDocuments(updatedResident);

        }

    });

}


// =====================================================
// 27. DOCUMENT SEARCH
// =====================================================

function renderDocumentResidents() {

    if (
        !documentSearch ||
        !documentResidentTableBody ||
        !documentResidentCount
    ) {
        return;
    }


    const searchTerm =
        documentSearch.value.trim().toLowerCase();


    const filteredResidents =
        residents.filter(function (resident) {

            const residentValues = [

                resident.id,
                resident.name,
                getResidentAddress(resident)

            ];


            const residentMatches =
                residentValues.some(function (value) {

                    return String(value)
                        .toLowerCase()
                        .includes(searchTerm);

                });


            const documentMatches =
                residentDocuments.some(function (doc) {

                    if (doc.residentId !== resident.id) {
                        return false;
                    }

                    const searchableValues = [

                        doc.id,
                        doc.type,
                        doc.status,
                        doc.notes

                    ];

                    return searchableValues.some(function (value) {

                        return String(value || "")
                            .toLowerCase()
                            .includes(searchTerm);

                    });

                });


            return residentMatches || documentMatches;

        });


    documentResidentTableBody.innerHTML = "";


    documentResidentCount.textContent =
        `${filteredResidents.length} of ${residents.length} residents`;


    if (filteredResidents.length === 0) {

        const row = document.createElement("tr");

        const cell = document.createElement("td");

        cell.colSpan = 5;

        cell.textContent =
            "No matching residents or documents found.";

        row.appendChild(cell);

        documentResidentTableBody.appendChild(row);

        return;

    }


    filteredResidents.forEach(function (resident) {

        const row = document.createElement("tr");


        const residentDocs =
            residentDocuments.filter(function (doc) {

                return doc.residentId === resident.id;

            });


        const values = [

            resident.id,
            resident.name,
            getResidentAddress(resident),
            `${residentDocs.length} documents`

        ];


        values.forEach(function (value) {

            const cell = document.createElement("td");

            cell.textContent = value;

            row.appendChild(cell);

        });


        const actionCell = document.createElement("td");

        const viewButton = document.createElement("button");

        viewButton.type = "button";

        viewButton.className = "view-member-button";

        viewButton.textContent = "View Documents";


        viewButton.addEventListener("click", function () {

            showResidentDocuments(resident);

        });


        actionCell.appendChild(viewButton);

        row.appendChild(actionCell);

        documentResidentTableBody.appendChild(row);

    });

}


// DOCUMENT SEARCH LISTENER

if (documentSearch) {

    documentSearch.addEventListener("input", function () {

        if (residentDocumentPanel) {
            residentDocumentPanel.hidden = true;
        }

        if (documentDetailPanel) {
            documentDetailPanel.hidden = true;
        }

        renderDocumentResidents();

    });

}


// =====================================================
// 28. SHOW RESIDENT DOCUMENTS
// =====================================================

function showResidentDocuments(resident) {

    if (documentDetailPanel) {
        documentDetailPanel.hidden = true;
    }


    setText(
        "documentResidentName",
        resident.name
    );

    setText(
        "documentResidentInfo",
        `${resident.id} | ${getResidentAddress(resident)}`
    );


    const filteredDocuments =
        residentDocuments.filter(function (doc) {

            return doc.residentId === resident.id;

        });


    if (!residentDocumentsTableBody) {
        return;
    }


    residentDocumentsTableBody.innerHTML = "";


    if (filteredDocuments.length === 0) {

        const row = document.createElement("tr");

        const cell = document.createElement("td");

        cell.colSpan = 5;

        cell.textContent =
            "No documents registered for this resident yet.";

        row.appendChild(cell);

        residentDocumentsTableBody.appendChild(row);

    } else {

        filteredDocuments.forEach(function (doc) {

            const row = document.createElement("tr");


            const values = [

                doc.id,
                doc.type,
                formatDocumentDate(doc.dateIssued)

            ];


            values.forEach(function (value) {

                const cell = document.createElement("td");

                cell.textContent = value || "Not provided";

                row.appendChild(cell);

            });


            // STATUS

            const statusCell = document.createElement("td");

            const statusLabel = document.createElement("span");

            statusLabel.className = "document-status";

            statusLabel.textContent = doc.status || "Pending";

            statusCell.appendChild(statusLabel);

            row.appendChild(statusCell);


            // ACTIONS

            const actionCell = document.createElement("td");

            const actionWrapper = document.createElement("div");

            actionWrapper.className = "resident-detail-actions";


            // VIEW DETAILS

            const viewButton = document.createElement("button");

            viewButton.type = "button";

            viewButton.className = "view-member-button";

            viewButton.textContent = "Details";


            viewButton.addEventListener("click", function () {

                showDocumentDetails(doc, resident);

            });


            // EDIT DOCUMENT

            const editButton = document.createElement("button");

            editButton.type = "button";

            editButton.className = "view-member-button";

            editButton.textContent = "Edit";


            editButton.addEventListener("click", function () {

                openDocumentForm("edit", doc);

            });


            // DELETE DOCUMENT

            const deleteButton = document.createElement("button");

            deleteButton.type = "button";

            deleteButton.className = "delete-action-button";

            deleteButton.textContent = "Delete";


            deleteButton.addEventListener("click", function () {

                deleteDocumentRecord(doc);

            });


            actionWrapper.appendChild(viewButton);

            actionWrapper.appendChild(editButton);

            actionWrapper.appendChild(deleteButton);

            actionCell.appendChild(actionWrapper);

            row.appendChild(actionCell);

            residentDocumentsTableBody.appendChild(row);

        });

    }


    if (residentDocumentPanel) {

        residentDocumentPanel.hidden = false;

        residentDocumentPanel.scrollIntoView({

            behavior: "smooth",
            block: "nearest"

        });

    }

}


// =====================================================
// 29. SHOW DOCUMENT DETAILS
// =====================================================

function showDocumentDetails(doc, resident) {

    const details = {

        selectedDocumentName: doc.type,

        selectedDocumentResident:
            `Resident: ${resident.name}`,

        selectedDocumentId: doc.id,

        selectedDocumentType: doc.type,

        selectedDocumentDate:
            formatDocumentDate(doc.dateIssued),

        selectedDocumentStatus: doc.status,

        selectedDocumentNotes: doc.notes

    };


    Object.entries(details).forEach(function ([elementId, value]) {

        setText(elementId, value);

    });


    if (documentDetailPanel) {

        documentDetailPanel.hidden = false;

        documentDetailPanel.scrollIntoView({

            behavior: "smooth",
            block: "nearest"

        });

    }

}


// =====================================================
// 30. DELETE DOCUMENT
// =====================================================

function deleteDocumentRecord(doc) {

    const confirmed = window.confirm(
        `Are you sure you want to delete ${doc.type} (${doc.id})?`
    );


    if (!confirmed) {
        return;
    }


    const updatedDocuments =
        residentDocuments.filter(function (item) {

            return item.id !== doc.id;

        });


    if (
        !saveArrayToStorage(
            DOCUMENTS_STORAGE_KEY,
            updatedDocuments
        )
    ) {
        return;
    }


    residentDocuments = updatedDocuments;


    if (documentDetailPanel) {
        documentDetailPanel.hidden = true;
    }


    renderDocumentResidents();

    updateDashboardCounters();


    const resident = residents.find(function (item) {

        return item.id === doc.residentId;

    });


    if (resident) {

        showResidentDocuments(resident);

    }

}


// CLOSE RESIDENT DOCUMENT PANEL

if (closeResidentDocuments) {

    closeResidentDocuments.addEventListener("click", function () {

        if (residentDocumentPanel) {
            residentDocumentPanel.hidden = true;
        }

        if (documentDetailPanel) {
            documentDetailPanel.hidden = true;
        }

    });

}


// CLOSE DOCUMENT DETAILS

if (closeDocumentDetails) {

    closeDocumentDetails.addEventListener("click", function () {

        if (documentDetailPanel) {
            documentDetailPanel.hidden = true;
        }

    });

}


// =====================================================
// 31. DOCUMENT GUIDE
// =====================================================

function renderDocumentGuide() {

    if (
        !guideSearch ||
        !documentGuideGrid ||
        !guideEmptyState
    ) {
        return;
    }


    const searchTerm =
        guideSearch.value.trim().toLowerCase();


    const filteredGuides =
        documentGuides.filter(function (guide) {

            const searchableText = [

                guide.id,
                guide.code,
                guide.name,
                guide.purpose,
                guide.note,
                ...guide.requirements,
                ...guide.steps

            ].join(" ").toLowerCase();


            return searchableText.includes(searchTerm);

        });


    documentGuideGrid.innerHTML = "";

    guideEmptyState.hidden =
        filteredGuides.length > 0;

    documentGuideGrid.hidden =
        filteredGuides.length === 0;


    filteredGuides.forEach(function (guide) {

        const card = document.createElement("article");

        card.className = "guide-card";


        const header = document.createElement("div");

        header.className = "guide-card-header";


        const icon = document.createElement("div");

        icon.className = "guide-icon";

        icon.textContent = guide.code;


        const heading = document.createElement("div");

        const title = document.createElement("h3");

        title.textContent = guide.name;


        const subtitle = document.createElement("p");

        subtitle.textContent = guide.id;


        heading.appendChild(title);

        heading.appendChild(subtitle);

        header.appendChild(icon);

        header.appendChild(heading);

        card.appendChild(header);


        const purposeTitle = document.createElement("h4");

        purposeTitle.textContent = "Purpose";

        card.appendChild(purposeTitle);


        const purpose = document.createElement("p");

        purpose.textContent = guide.purpose;

        card.appendChild(purpose);


        const requirementsTitle = document.createElement("h4");

        requirementsTitle.textContent = "Typical Requirements";

        card.appendChild(requirementsTitle);


        const requirementsList = document.createElement("ul");


        guide.requirements.forEach(function (requirement) {

            const item = document.createElement("li");

            item.textContent = requirement;

            requirementsList.appendChild(item);

        });


        card.appendChild(requirementsList);


        const stepsContainer = document.createElement("div");

        stepsContainer.className = "guide-steps";


        const stepsTitle = document.createElement("h4");

        stepsTitle.textContent = "Basic Instructions";

        stepsContainer.appendChild(stepsTitle);


        guide.steps.forEach(function (step, index) {

            const stepText = document.createElement("p");

            stepText.textContent = `${index + 1}. ${step}`;

            stepsContainer.appendChild(stepText);

        });


        card.appendChild(stepsContainer);


        const note = document.createElement("div");

        note.className = "guide-note";

        note.textContent = guide.note;

        card.appendChild(note);


        documentGuideGrid.appendChild(card);

    });

}


// DOCUMENT GUIDE SEARCH

if (guideSearch) {

    guideSearch.addEventListener("input", function () {

        renderDocumentGuide();

    });

}


// =====================================================
// 32. DASHBOARD COUNTERS
// =====================================================

function updateDashboardCounters() {

    const totalMembers =
        document.getElementById("totalMembers");

    const totalResidents =
        document.getElementById("totalResidents");

    const totalDocuments =
        document.getElementById("totalDocuments");


    if (totalMembers) {
        totalMembers.textContent = barangayMembers.length;
    }

    if (totalResidents) {
        totalResidents.textContent = residents.length;
    }

    if (totalDocuments) {
        totalDocuments.textContent = residentDocuments.length;
    }

}


// =====================================================
// 33. LOGOUT
// =====================================================

if (logoutButton) {

    logoutButton.addEventListener("click", function () {

        if (dashboardPage) {
            dashboardPage.hidden = true;
        }

        if (authContainer) {
            authContainer.hidden = false;
        }


        // RESET LOGIN PANELS

        if (registrationPanel) {
            registrationPanel.hidden = true;
        }

        if (loginPanel) {
            loginPanel.hidden = false;
        }


        // RESET FORMS

        if (registrationForm) {
            registrationForm.reset();
        }

        if (emailLoginForm) {
            emailLoginForm.reset();
        }


        // CLEAR MESSAGES

        if (registrationMessage) {
            registrationMessage.textContent = "";
        }

        if (authMessage) {
            authMessage.textContent = "";
        }

        if (emailLoginMessage) {
            emailLoginMessage.textContent = "";
        }


        // RESET PASSWORD

        if (loginPassword) {
            loginPassword.type = "password";
        }

        if (loginPasswordToggle) {
            loginPasswordToggle.textContent = "Show";
        }


        // REPLAY LOGIN ANIMATION

        if (loginCard) {

            loginCard.classList.remove("login-replay");

            void loginCard.offsetWidth;

            loginCard.classList.add("login-replay");

        }


        // CLOSE DETAIL PANELS

        if (memberDetailPanel) {
            memberDetailPanel.hidden = true;
        }

        if (residentDetailPanel) {
            residentDetailPanel.hidden = true;
        }

        if (residentDocumentPanel) {
            residentDocumentPanel.hidden = true;
        }

        if (documentDetailPanel) {
            documentDetailPanel.hidden = true;
        }


        // CLOSE OPEN MODALS

        if (memberModal && !memberModal.hidden) {
            closeMemberFormWindow();
        }

        if (residentModal && !residentModal.hidden) {
            closeResidentFormWindow();
        }

        if (documentModal && !documentModal.hidden) {
            closeDocumentFormWindow();
        }


        selectedMemberId = null;

        selectedResidentId = null;


        showDashboardPage("overview");

    });

}


// =====================================================
// 34. CLOSE MODALS USING ESCAPE
// =====================================================

document.addEventListener("keydown", function (event) {

    if (event.key !== "Escape") {
        return;
    }

    if (memberModal && !memberModal.hidden) {
        closeMemberFormWindow();
    }

    if (residentModal && !residentModal.hidden) {
        closeResidentFormWindow();
    }

    if (documentModal && !documentModal.hidden) {
        closeDocumentFormWindow();
    }

});


// =====================================================
// STEP 4 - DOCUMENT GUIDE FILTER IMPROVEMENTS
// =====================================================


// CREATE CATEGORY FILTER

(function setupDocumentGuideFilters() {

    const guidePage =
        document.getElementById("guidePage");

    const guideGrid =
        document.getElementById("documentGuideGrid");

    if (!guidePage || !guideGrid) {
        console.warn("Document Guide page not found.");
        return;
    }


    // ADD FILTER BESIDE SEARCH

    const header =
        guidePage.querySelector(".directory-header");

    if (header) {

        let toolbar =
            header.querySelector(".resident-toolbar");

        const searchBox =
            header.querySelector(".member-search-box");

        if (!toolbar) {

            toolbar = document.createElement("div");

            toolbar.className = "resident-toolbar";

            if (searchBox) {
                toolbar.appendChild(searchBox);
            }

            header.appendChild(toolbar);

        }


        if (!document.getElementById("guideCategoryFilter")) {

            const filter =
                document.createElement("select");

            filter.id = "guideCategoryFilter";

            filter.className = "guide-filter-select";

            filter.innerHTML = `
                <option value="all">All Categories</option>
                <option value="Clearances">Clearances</option>
                <option value="Certificates">Certificates</option>
                <option value="Business Documents">Business Documents</option>
                <option value="Other">Other</option>
            `;

            toolbar.appendChild(filter);

        }

    }


    // ADD RESULT COUNT

    if (!document.getElementById("guideResultCount")) {

        const count =
            document.createElement("p");

        count.id = "guideResultCount";

        count.className = "guide-result-count";

        guideGrid.parentNode.insertBefore(
            count,
            guideGrid
        );

    }

})();


// GET GUIDE CATEGORY

function getGuideCategory(guide) {

    const name =
        guide.name.toLowerCase();

    if (name.includes("business")) {
        return "Business Documents";
    }

    if (name.includes("certificate")) {
        return "Certificates";
    }

    if (name.includes("clearance")) {
        return "Clearances";
    }

    return "Other";

}


// CREATE GUIDE TEXT ELEMENT

function createGuideText(tag, textValue, className = "") {

    const element =
        document.createElement(tag);

    element.textContent =
        textValue || "";

    if (className) {
        element.className = className;
    }

    return element;

}


// DISPLAY FILTERED DOCUMENT GUIDES

function renderEnhancedDocumentGuide() {

    if (
        !guideSearch ||
        !documentGuideGrid ||
        !guideEmptyState
    ) {
        return;
    }


    const searchTerm =
        guideSearch.value.trim().toLowerCase();

    const categoryFilter =
        document.getElementById("guideCategoryFilter")?.value || "all";


    // FILTER GUIDES

    const filteredGuides =
        documentGuides.filter(function (guide) {

            const category =
                getGuideCategory(guide);

            const matchesCategory =
                categoryFilter === "all" ||
                category === categoryFilter;


            const searchableText = [

                guide.id,
                guide.code,
                guide.name,
                guide.purpose,
                guide.note,
                ...guide.requirements,
                ...guide.steps

            ].join(" ").toLowerCase();


            const matchesSearch =
                searchableText.includes(searchTerm);


            return matchesCategory && matchesSearch;

        });


    // CLEAR OLD CARDS

    documentGuideGrid.innerHTML = "";


    // UPDATE RESULT COUNT

    const resultCount =
        document.getElementById("guideResultCount");

    if (resultCount) {

        resultCount.textContent =
            `${filteredGuides.length} document guide(s) found`;

    }


    // EMPTY STATE

    guideEmptyState.hidden =
        filteredGuides.length > 0;

    documentGuideGrid.hidden =
        filteredGuides.length === 0;


    // DISPLAY GUIDES

    filteredGuides.forEach(function (guide) {

        const card =
            document.createElement("article");

        card.className = "guide-card";


        // HEADER

        const header =
            document.createElement("div");

        header.className = "guide-card-header";


        const icon =
            document.createElement("div");

        icon.className = "guide-icon";

        icon.textContent = guide.code;


        const heading =
            document.createElement("div");


        const title =
            createGuideText("h3", guide.name);

        const subtitle =
            createGuideText("p", guide.id);


        heading.appendChild(title);

        heading.appendChild(subtitle);

        header.appendChild(icon);

        header.appendChild(heading);

        card.appendChild(header);


        // CATEGORY

        const categoryLabel =
            createGuideText(
                "span",
                getGuideCategory(guide),
                "guide-category-label"
            );

        card.appendChild(categoryLabel);


        // PURPOSE

        card.appendChild(
            createGuideText("h4", "Purpose")
        );

        card.appendChild(
            createGuideText("p", guide.purpose)
        );


        // REQUIREMENTS

        card.appendChild(
            createGuideText("h4", "Typical Requirements")
        );


        const requirementsList =
            document.createElement("ul");


        guide.requirements.forEach(function (requirement) {

            const item =
                createGuideText("li", requirement);

            requirementsList.appendChild(item);

        });


        card.appendChild(requirementsList);


        // INSTRUCTIONS

        const stepsContainer =
            document.createElement("div");

        stepsContainer.className = "guide-steps";


        stepsContainer.appendChild(
            createGuideText("h4", "Basic Instructions")
        );


        guide.steps.forEach(function (step, index) {

            const stepText =
                createGuideText(
                    "p",
                    `${index + 1}. ${step}`
                );

            stepsContainer.appendChild(stepText);

        });


        card.appendChild(stepsContainer);


        // IMPORTANT NOTE

        const note =
            createGuideText(
                "div",
                guide.note,
                "guide-note"
            );

        card.appendChild(note);


        // ADD CARD

        documentGuideGrid.appendChild(card);

    });

}


// SEARCH LISTENER

if (guideSearch) {

    guideSearch.addEventListener(
        "input",
        renderEnhancedDocumentGuide
    );

}


// CATEGORY FILTER LISTENER

const guideCategoryFilter =
    document.getElementById("guideCategoryFilter");

if (guideCategoryFilter) {

    guideCategoryFilter.addEventListener(
        "change",
        renderEnhancedDocumentGuide
    );

}


// =====================================================
// BARANGAYHUB - DOCUMENT FILE ATTACHMENTS
// PDF / JPG / PNG UPLOAD, PREVIEW AND DOWNLOAD
// Uses IndexedDB for local browser file storage.
// =====================================================


// =====================================================
// 1. ADD FILE UPLOAD FIELD TO DOCUMENT FORM
// =====================================================

(function addDocumentFileInput() {

    const form = document.getElementById("documentForm");

    const grid = form?.querySelector(".resident-form-grid");

    if (!grid || document.getElementById("documentFileInput")) {
        return;
    }

    const fileGroup = document.createElement("div");

    fileGroup.className = "form-group full-width";

    fileGroup.innerHTML = `
        <label for="documentFileInput">
            Attach Document File
        </label>

        <input
            type="file"
            id="documentFileInput"
            accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png">

        <small
            id="documentFileInfo"
            style="display:block;margin-top:8px;color:#577877;">
            Accepted files: PDF, JPG, PNG. Maximum size: 10 MB.
        </small>
    `;

    grid.appendChild(fileGroup);

})();


// =====================================================
// 2. FILE INPUT ELEMENTS
// =====================================================

const bhDocumentFileInput =
    document.getElementById("documentFileInput");

const bhDocumentFileInfo =
    document.getElementById("documentFileInfo");


// =====================================================
// 3. INDEXEDDB FILE STORAGE
// =====================================================

const BH_FILE_DB_NAME = "BarangayHubFiles";

const BH_FILE_STORE_NAME = "documentAttachments";

let bhFileDatabasePromise = null;


function bhOpenFileDatabase() {

    if (!window.indexedDB) {

        return Promise.reject(
            new Error("IndexedDB is not supported by this browser.")
        );

    }

    if (!bhFileDatabasePromise) {

        bhFileDatabasePromise = new Promise(function (resolve, reject) {

            const request = window.indexedDB.open(
                BH_FILE_DB_NAME,
                1
            );

            request.onupgradeneeded = function () {

                const db = request.result;

                if (!db.objectStoreNames.contains(BH_FILE_STORE_NAME)) {

                    db.createObjectStore(
                        BH_FILE_STORE_NAME,
                        { keyPath: "documentId" }
                    );

                }

            };

            request.onsuccess = function () {

                resolve(request.result);

            };

            request.onerror = function () {

                reject(
                    request.error ||
                    new Error("Could not open document file storage.")
                );

            };

            request.onblocked = function () {

                reject(
                    new Error("Document file storage is blocked.")
                );

            };

        });

    }

    return bhFileDatabasePromise;

}


// SAVE FILE

async function bhSaveDocumentFile(documentId, file) {

    const db = await bhOpenFileDatabase();

    return new Promise(function (resolve, reject) {

        const transaction = db.transaction(
            BH_FILE_STORE_NAME,
            "readwrite"
        );

        const record = {

            documentId: documentId,

            fileName: file.name,

            fileType: file.type,

            fileSize: file.size,

            blob: file

        };

        transaction.objectStore(
            BH_FILE_STORE_NAME
        ).put(record);


        transaction.oncomplete = function () {
            resolve(true);
        };

        transaction.onerror = function () {

            reject(
                transaction.error ||
                new Error("Could not save the document file.")
            );

        };

        transaction.onabort = function () {

            reject(
                transaction.error ||
                new Error("Document file saving was cancelled.")
            );

        };

    });

}


// GET FILE

async function bhGetDocumentFile(documentId) {

    const db = await bhOpenFileDatabase();

    return new Promise(function (resolve, reject) {

        const transaction = db.transaction(
            BH_FILE_STORE_NAME,
            "readonly"
        );

        const request = transaction.objectStore(
            BH_FILE_STORE_NAME
        ).get(documentId);


        request.onsuccess = function () {
            resolve(request.result || null);
        };

        request.onerror = function () {

            reject(
                request.error ||
                new Error("Could not retrieve the document file.")
            );

        };

    });

}


// DELETE FILE

async function bhDeleteDocumentFile(documentId) {

    const db = await bhOpenFileDatabase();

    return new Promise(function (resolve, reject) {

        const transaction = db.transaction(
            BH_FILE_STORE_NAME,
            "readwrite"
        );

        transaction.objectStore(
            BH_FILE_STORE_NAME
        ).delete(documentId);


        transaction.oncomplete = function () {
            resolve(true);
        };

        transaction.onerror = function () {

            reject(
                transaction.error ||
                new Error("Could not delete the document file.")
            );

        };

        transaction.onabort = function () {

            reject(
                transaction.error ||
                new Error("Document file deletion was cancelled.")
            );

        };

    });

}


// =====================================================
// 4. VALIDATE UPLOADED FILE
// =====================================================

function bhValidateDocumentFile(file) {

    if (!file) {
        return null;
    }

    const maxSize = 10 * 1024 * 1024;

    if (file.size > maxSize) {

        return "File is too large. Maximum allowed size is 10 MB.";

    }

    const extension = file.name
        .split(".")
        .pop()
        .toLowerCase();

    const allowedExtensions = [
        "pdf",
        "jpg",
        "jpeg",
        "png"
    ];

    if (!allowedExtensions.includes(extension)) {

        return "Invalid file format. Please upload PDF, JPG, or PNG.";

    }

    const requiredType = {

        pdf: "application/pdf",
        jpg: "image/jpeg",
        jpeg: "image/jpeg",
        png: "image/png"

    }[extension];


    if (
        file.type &&
        file.type !== requiredType
    ) {

        return "The selected file type does not match its extension.";

    }

    return null;

}


// =====================================================
// 5. FILE PREVIEW WINDOW
// =====================================================

let bhActiveFileURL = null;


function bhCreatePreviewWindow() {

    if (document.getElementById("bhFilePreviewModal")) {
        return;
    }


    const style = document.createElement("style");

    style.id = "bhFilePreviewStyles";

    style.textContent = `
        #bhFilePreviewModal {
            position:fixed;
            inset:0;
            z-index:10010;
            display:flex;
            align-items:center;
            justify-content:center;
            padding:20px;
            background:rgba(22,38,35,.75);
            backdrop-filter:blur(5px);
        }

        #bhFilePreviewModal[hidden] {
            display:none !important;
        }

        .bh-preview-card {
            width:100%;
            max-width:900px;
            height:90vh;
            display:flex;
            flex-direction:column;
            background:#E8F0EE;
            border:1px solid #B8CCC6;
            border-radius:15px;
            overflow:hidden;
            box-shadow:0 20px 50px rgba(0,0,0,.25);
        }

        .bh-preview-header {
            display:flex;
            justify-content:space-between;
            align-items:center;
            gap:10px;
            padding:15px 20px;
            background:#295255;
            color:white;
        }

        .bh-preview-header strong {
            overflow-wrap:anywhere;
            font-size:13px;
        }

        .bh-preview-close {
            border:0;
            border-radius:7px;
            background:rgba(255,255,255,.15);
            color:white;
            width:34px;
            height:34px;
            font-size:22px;
            cursor:pointer;
        }

        .bh-preview-body {
            flex:1;
            min-height:0;
            overflow:auto;
            display:flex;
            align-items:center;
            justify-content:center;
            padding:10px;
            background:#DCE8E5;
        }

        .bh-preview-body iframe {
            width:100%;
            height:100%;
            border:0;
            background:white;
        }

        .bh-preview-body img {
            max-width:100%;
            max-height:100%;
            object-fit:contain;
        }

        .bh-preview-footer {
            padding:13px;
            display:flex;
            justify-content:flex-end;
            gap:10px;
            background:#E8F0EE;
        }

        .bh-preview-download {
            padding:11px 18px;
            border:0;
            border-radius:8px;
            background:#295255;
            color:white;
            font-weight:600;
            cursor:pointer;
        }

        .bh-preview-download:hover {
            background:#162623;
        }

        .bh-attachment-button {
            padding:8px 11px;
            background:#DCE8E5;
            color:#295255;
            border:1px solid #B8CCC6;
            border-radius:7px;
            font-size:11px;
            cursor:pointer;
        }

        .bh-attachment-button:disabled {
            opacity:.55;
            cursor:not-allowed;
        }

        @media(max-width:600px) {
            .bh-preview-card {
                height:95vh;
            }
        }
    `;

    document.head.appendChild(style);


    const modal = document.createElement("div");

    modal.id = "bhFilePreviewModal";

    modal.hidden = true;


    modal.innerHTML = `
        <div class="bh-preview-card">

            <div class="bh-preview-header">

                <strong id="bhPreviewFileName">
                    Document Preview
                </strong>

                <button
                    type="button"
                    id="bhClosePreview"
                    class="bh-preview-close">
                    ×
                </button>

            </div>

            <div
                class="bh-preview-body"
                id="bhPreviewBody">
            </div>

            <div class="bh-preview-footer">

                <button
                    type="button"
                    id="bhDownloadPreview"
                    class="bh-preview-download">
                    Download File
                </button>

            </div>

        </div>
    `;


    document.body.appendChild(modal);


    document.getElementById("bhClosePreview")
        .addEventListener("click", bhClosePreview);


    modal.addEventListener("click", function (event) {

        if (event.target === modal) {
            bhClosePreview();
        }

    });

}


function bhClosePreview() {

    const modal =
        document.getElementById("bhFilePreviewModal");

    if (modal) {
        modal.hidden = true;
    }

    if (bhActiveFileURL) {

        URL.revokeObjectURL(bhActiveFileURL);

        bhActiveFileURL = null;

    }

}


// OPEN DOCUMENT PREVIEW

async function bhOpenDocumentPreview(doc) {

    try {

        const record = await bhGetDocumentFile(doc.id);

        if (!record) {

            alert("No uploaded file was found for this document.");

            return;

        }


        bhCreatePreviewWindow();


        if (bhActiveFileURL) {
            URL.revokeObjectURL(bhActiveFileURL);
        }


        bhActiveFileURL =
            URL.createObjectURL(record.blob);


        const modal =
            document.getElementById("bhFilePreviewModal");

        const previewBody =
            document.getElementById("bhPreviewBody");

        const fileName =
            document.getElementById("bhPreviewFileName");

        const downloadButton =
            document.getElementById("bhDownloadPreview");


        fileName.textContent = record.fileName;

        previewBody.innerHTML = "";


        const extension = record.fileName
            .split(".")
            .pop()
            .toLowerCase();


        // PDF PREVIEW

        if (extension === "pdf") {

            const iframe =
                document.createElement("iframe");

            iframe.src = bhActiveFileURL;

            iframe.title = record.fileName;

            previewBody.appendChild(iframe);

        } else {

            // IMAGE PREVIEW

            const image =
                document.createElement("img");

            image.src = bhActiveFileURL;

            image.alt = record.fileName;

            previewBody.appendChild(image);

        }


        downloadButton.onclick = function () {

            if (!bhActiveFileURL) return;

            const link =
                document.createElement("a");

            link.href = bhActiveFileURL;

            link.download = record.fileName;

            document.body.appendChild(link);

            link.click();

            link.remove();

        };


        modal.hidden = false;

    } catch (error) {

        console.error("Document preview error:", error);

        alert(
            "Unable to open this document. Please check browser storage."
        );

    }

}


// CREATE PREVIEW WINDOW

bhCreatePreviewWindow();


// =====================================================
// 6. ADD FILE INFORMATION TO DOCUMENT FORM
// =====================================================

const bhOriginalOpenDocumentForm =
    openDocumentForm;


openDocumentForm = function (mode, doc = null) {

    bhOriginalOpenDocumentForm(mode, doc);


    if (bhDocumentFileInput) {

        bhDocumentFileInput.value = "";

        bhDocumentFileInfo.textContent =
            "Accepted files: PDF, JPG, PNG. Maximum size: 10 MB.";

    }


    if (mode === "edit" && doc) {

        bhGetDocumentFile(doc.id)
            .then(function (record) {

                if (
                    record &&
                    bhDocumentFileInfo &&
                    !documentModal.hidden
                ) {

                    bhDocumentFileInfo.textContent =
                        `Current file: ${record.fileName}. Choose another file to replace it.`;

                }

            })
            .catch(function (error) {

                console.error("Could not check attachment:", error);

            });

    }

};


// FILE NAME PREVIEW

if (bhDocumentFileInput) {

    bhDocumentFileInput.addEventListener("change", function () {

        const file = this.files[0];

        if (!file) {

            bhDocumentFileInfo.textContent =
                "No new file selected. The existing attachment will be kept.";

            return;

        }


        const validationError =
            bhValidateDocumentFile(file);


        if (validationError) {

            bhDocumentFileInput.value = "";

            bhDocumentFileInfo.textContent =
                validationError;

            return;

        }


        bhDocumentFileInfo.textContent =
            `Selected file: ${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)`;

    });

}


// =====================================================
// 7. SAVE DOCUMENT WITH ATTACHMENT
// =====================================================

// Capture phase prevents the older document submit
// handler from saving the same record a second time.

if (documentForm) {

    documentForm.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();

            event.stopImmediatePropagation();


            const editingId =
                documentEditId.value;

            const residentId =
                documentResidentInput.value;

            const documentType =
                documentTypeInput.value.trim();

            const dateIssued =
                documentDateInput.value;

            const status =
                documentStatusInput.value;

            const notes =
                documentNotesInput.value.trim();

            const selectedFile =
                bhDocumentFileInput?.files[0] || null;


            const resident = residents.find(function (item) {

                return item.id === residentId;

            });


            if (!resident) {

                documentFormMessage.textContent =
                    "Please select a valid resident.";

                return;

            }


            if (!documentType) {

                documentFormMessage.textContent =
                    "Please enter a document type.";

                return;

            }


            if (
                dateIssued &&
                dateIssued > getTodayLocalDate()
            ) {

                documentFormMessage.textContent =
                    "Date issued cannot be in the future.";

                return;

            }


            const allowedStatuses = [
                "Pending",
                "Processing",
                "Available",
                "Released"
            ];

            if (!allowedStatuses.includes(status)) {

                documentFormMessage.textContent =
                    "Please select a valid status.";

                return;

            }


            const validationError =
                bhValidateDocumentFile(selectedFile);

            if (validationError) {

                documentFormMessage.textContent =
                    validationError;

                return;

            }


            const existingDocument = editingId
                ? residentDocuments.find(function (item) {
                    return item.id === editingId;
                })
                : null;


            if (editingId && !existingDocument) {

                documentFormMessage.textContent =
                    "Document record could not be found.";

                return;

            }


            const documentId =
                editingId || generateDocumentId();


            const documentData = {

                id: documentId,

                residentId: residentId,

                type: documentType,

                dateIssued: dateIssued,

                status: status,

                notes: notes || "No additional notes."

            };


            const updatedDocuments = editingId

                ? residentDocuments.map(function (doc) {

                    return doc.id === editingId
                        ? documentData
                        : doc;

                })

                : [...residentDocuments, documentData];


            if (saveDocumentButton) {
                saveDocumentButton.disabled = true;
                saveDocumentButton.textContent = "Saving...";
            }


            let previousFile = null;

            let fileWasChanged = false;


            try {

                // PRESERVE OLD FILE IF EDITING

                if (selectedFile && editingId) {

                    previousFile =
                        await bhGetDocumentFile(documentId);

                }


                // SAVE NEW FILE

                if (selectedFile) {

                    await bhSaveDocumentFile(
                        documentId,
                        selectedFile
                    );

                    fileWasChanged = true;

                }


                // SAVE DOCUMENT INFORMATION

                const saved = saveArrayToStorage(
                    DOCUMENTS_STORAGE_KEY,
                    updatedDocuments
                );


                if (!saved) {

                    // RESTORE OLD FILE IF SAVE FAILED

                    if (fileWasChanged) {

                        if (previousFile) {

                            await bhSaveDocumentFile(
                                documentId,
                                previousFile.blob
                            );

                        } else {

                            await bhDeleteDocumentFile(documentId);

                        }

                    }

                    return;

                }


                residentDocuments = updatedDocuments;


                // CLOSE FORM

                closeDocumentFormWindow();


                // REFRESH DIRECTORY AND COUNTERS

                renderDocumentResidents();

                updateDashboardCounters();


                // SHOW UPDATED RESIDENT DOCUMENTS

                const updatedResident = residents.find(
                    function (item) {
                        return item.id === residentId;
                    }
                );


                if (updatedResident) {

                    showResidentDocuments(updatedResident);

                }

            } catch (error) {

                console.error("Document save error:", error);

                documentFormMessage.textContent =
                    "Unable to save the file. Please try again.";

            } finally {

                if (saveDocumentButton) {

                    saveDocumentButton.disabled = false;

                    saveDocumentButton.textContent =
                        editingId
                            ? "Update Document"
                            : "Save Document";

                }

            }

        },
        true
    );

}


// =====================================================
// 8. SHOW RESIDENT DOCUMENTS WITH ATTACHMENTS
// =====================================================

showResidentDocuments = function (resident) {

    if (documentDetailPanel) {
        documentDetailPanel.hidden = true;
    }


    setText("documentResidentName", resident.name);

    setText(
        "documentResidentInfo",
        `${resident.id} | ${getResidentAddress(resident)}`
    );


    const filteredDocuments =
        residentDocuments.filter(function (doc) {

            return doc.residentId === resident.id;

        });


    if (!residentDocumentsTableBody) {
        return;
    }


    residentDocumentsTableBody.innerHTML = "";


    if (filteredDocuments.length === 0) {

        const row = document.createElement("tr");

        const cell = document.createElement("td");

        cell.colSpan = 5;

        cell.textContent =
            "No documents registered for this resident yet.";

        row.appendChild(cell);

        residentDocumentsTableBody.appendChild(row);

    } else {

        filteredDocuments.forEach(function (doc) {

            const row = document.createElement("tr");


            // DOCUMENT ID, TYPE, DATE

            const values = [
                doc.id,
                doc.type,
                formatDocumentDate(doc.dateIssued)
            ];


            values.forEach(function (value) {

                const cell = document.createElement("td");

                cell.textContent = value || "Not provided";

                row.appendChild(cell);

            });


            // STATUS

            const statusCell = document.createElement("td");

            const statusLabel = document.createElement("span");

            statusLabel.className = "document-status";

            statusLabel.textContent =
                doc.status || "Pending";

            statusCell.appendChild(statusLabel);

            row.appendChild(statusCell);


            // ACTIONS

            const actionCell = document.createElement("td");

            const actionWrapper = document.createElement("div");

            actionWrapper.className = "resident-detail-actions";


            // DETAILS BUTTON

            const detailsButton = document.createElement("button");

            detailsButton.type = "button";

            detailsButton.className = "view-member-button";

            detailsButton.textContent = "Details";

            detailsButton.addEventListener("click", function () {

                showDocumentDetails(doc, resident);

            });


            // EDIT BUTTON

            const editButton = document.createElement("button");

            editButton.type = "button";

            editButton.className = "view-member-button";

            editButton.textContent = "Edit";

            editButton.addEventListener("click", function () {

                openDocumentForm("edit", doc);

            });


            // DELETE BUTTON

            const deleteButton = document.createElement("button");

            deleteButton.type = "button";

            deleteButton.className = "delete-action-button";

            deleteButton.textContent = "Delete";

            deleteButton.addEventListener("click", function () {

                deleteDocumentRecord(doc);

            });


            // FILE PREVIEW BUTTON

            const fileButton = document.createElement("button");

            fileButton.type = "button";

            fileButton.className = "bh-attachment-button";

            fileButton.textContent = "Checking file...";

            fileButton.disabled = true;


            bhGetDocumentFile(doc.id)
                .then(function (record) {

                    if (record) {

                        fileButton.textContent = "View File";

                        fileButton.disabled = false;

                        fileButton.title = record.fileName;

                        fileButton.addEventListener(
                            "click",
                            function () {

                                bhOpenDocumentPreview(doc);

                            }
                        );

                    } else {

                        fileButton.textContent = "No File";

                    }

                })
                .catch(function (error) {

                    console.error("Attachment lookup error:", error);

                    fileButton.textContent = "Unavailable";

                });


            actionWrapper.appendChild(detailsButton);

            actionWrapper.appendChild(editButton);

            actionWrapper.appendChild(deleteButton);

            actionWrapper.appendChild(fileButton);


            actionCell.appendChild(actionWrapper);

            row.appendChild(actionCell);


            residentDocumentsTableBody.appendChild(row);

        });

    }


    if (residentDocumentPanel) {

        residentDocumentPanel.hidden = false;

        residentDocumentPanel.scrollIntoView({

            behavior: "smooth",
            block: "nearest"

        });

    }

};


// =====================================================
// 9. DELETE DOCUMENT AND ITS ATTACHMENT
// =====================================================

deleteDocumentRecord = async function (doc) {

    const confirmed = window.confirm(
        `Are you sure you want to delete ${doc.type} (${doc.id})? Its attached file will also be deleted.`
    );


    if (!confirmed) {
        return;
    }


    const updatedDocuments =
        residentDocuments.filter(function (item) {

            return item.id !== doc.id;

        });


    // SAVE UPDATED DOCUMENT LIST FIRST

    if (
        !saveArrayToStorage(
            DOCUMENTS_STORAGE_KEY,
            updatedDocuments
        )
    ) {

        return;

    }


    residentDocuments = updatedDocuments;


    // DELETE ATTACHED FILE

    try {

        await bhDeleteDocumentFile(doc.id);

    } catch (error) {

        console.error("Could not delete the attached file:", error);

    }


    // UPDATE THE PAGE

    if (documentDetailPanel) {
        documentDetailPanel.hidden = true;
    }


    renderDocumentResidents();

    updateDashboardCounters();


    const resident = residents.find(function (item) {

        return item.id === doc.residentId;

    });


    if (resident) {

        showResidentDocuments(resident);

    }

};


/* =====================================================
   STEP 5 - DOCUMENT GUIDE IMPROVEMENTS AND REPORTS
   BarangayHub - HTML, CSS and Vanilla JavaScript
===================================================== */

(function () {
    function initializeStep5() {
        const guidePage = document.getElementById("guidePage");

        if (!guidePage) {
            console.warn("BarangayHub: Document Guide page was not found.");
            return;
        }

        // Prevent adding the same section more than once.
        if (document.getElementById("bhStep5GuidePanel")) return;

        // -------------------------------------------------
        // 1. ADD STYLES
        // -------------------------------------------------

        const style = document.createElement("style");

        style.textContent = `
            #bhStep5GuidePanel {
                margin-top: 24px;
                padding: 22px;
                background: #ffffff;
                border: 1px solid #e5e7eb;
                border-radius: 14px;
            }

            .bh5-heading {
                font-size: 20px;
                font-weight: 700;
                color: #173b3b;
                margin-bottom: 8px;
            }

            .bh5-description {
                color: #64748b;
                font-size: 14px;
                margin-bottom: 20px;
                line-height: 1.6;
            }

            .bh5-guide-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
                gap: 15px;
            }

            .bh5-guide-card {
                background: #f8fafc;
                border: 1px solid #e2e8f0;
                border-radius: 12px;
                padding: 17px;
            }

            .bh5-guide-card h4 {
                color: #164e4e;
                margin: 0 0 12px;
                font-size: 16px;
            }

            .bh5-guide-card ul {
                padding-left: 19px;
                margin: 0;
                color: #475569;
                font-size: 13px;
                line-height: 1.8;
            }

            .bh5-note {
                margin-top: 18px;
                padding: 13px;
                background: #f0fdfa;
                border-left: 4px solid #0d9488;
                border-radius: 7px;
                font-size: 13px;
                color: #334155;
            }

            .bh5-primary-btn {
                background: #0f766e;
                color: white;
                border: none;
                border-radius: 8px;
                padding: 11px 17px;
                cursor: pointer;
                font-weight: 600;
                margin-top: 18px;
            }

            .bh5-primary-btn:hover {
                background: #115e59;
            }

            .bh5-modal {
                display: none;
                position: fixed;
                inset: 0;
                z-index: 99999;
                background: rgba(15, 23, 42, 0.65);
                justify-content: center;
                align-items: center;
                padding: 20px;
            }

            .bh5-modal.is-open {
                display: flex;
            }

            .bh5-modal-card {
                background: white;
                width: 100%;
                max-width: 900px;
                max-height: 90vh;
                overflow-y: auto;
                border-radius: 14px;
                padding: 24px;
            }

            .bh5-modal-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 12px;
                margin-bottom: 20px;
            }

            .bh5-modal-header h2 {
                margin: 0;
                color: #173b3b;
            }

            .bh5-close {
                border: none;
                background: #f1f5f9;
                border-radius: 7px;
                padding: 9px 13px;
                cursor: pointer;
                font-size: 17px;
            }

            .bh5-report-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
                gap: 13px;
                margin-bottom: 24px;
            }

            .bh5-stat {
                background: #f8fafc;
                border: 1px solid #e2e8f0;
                border-radius: 10px;
                padding: 17px;
            }

            .bh5-stat span {
                display: block;
                color: #64748b;
                font-size: 13px;
                margin-bottom: 8px;
            }

            .bh5-stat strong {
                display: block;
                color: #0f766e;
                font-size: 27px;
            }

            .bh5-report-section {
                margin-top: 23px;
            }

            .bh5-report-section h3 {
                color: #173b3b;
                margin-bottom: 12px;
            }

            .bh5-report-table {
                width: 100%;
                border-collapse: collapse;
                font-size: 14px;
            }

            .bh5-report-table th,
            .bh5-report-table td {
                text-align: left;
                padding: 11px;
                border-bottom: 1px solid #e2e8f0;
            }

            .bh5-report-table th {
                background: #f1f5f9;
                color: #334155;
            }

            .bh5-report-actions {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
                margin-top: 22px;
            }

            .bh5-report-actions button {
                padding: 10px 15px;
                border: none;
                border-radius: 8px;
                cursor: pointer;
                font-weight: 600;
            }

            .bh5-export-btn {
                background: #0f766e;
                color: white;
            }

            .bh5-print-btn {
                background: #334155;
                color: white;
            }

            .bh5-muted {
                color: #64748b;
                font-size: 13px;
                line-height: 1.6;
            }

            @media (max-width: 600px) {
                .bh5-modal-card {
                    padding: 16px;
                }

                .bh5-report-table {
                    font-size: 12px;
                }

                .bh5-report-table th,
                .bh5-report-table td {
                    padding: 8px;
                }
            }

            @media print {
                body * {
                    visibility: hidden !important;
                }

                #bhStep5Modal,
                #bhStep5Modal * {
                    visibility: visible !important;
                }

                #bhStep5Modal {
                    display: block !important;
                    position: absolute;
                    inset: 0;
                    background: white;
                    padding: 0;
                    overflow: visible;
                }

                .bh5-modal-card {
                    max-width: none;
                    max-height: none;
                    overflow: visible;
                    box-shadow: none;
                    border-radius: 0;
                }

                .bh5-no-print {
                    display: none !important;
                }
            }
        `;

        document.head.appendChild(style);

        // -------------------------------------------------
        // 2. IMPROVED DOCUMENT GUIDE
        // -------------------------------------------------

        const guidePanel = document.createElement("section");
        guidePanel.id = "bhStep5GuidePanel";

        guidePanel.innerHTML = `
            <div class="bh5-heading">
                Document Requirements Guide
            </div>

            <p class="bh5-description">
                Review these general preparation reminders before
                requesting a barangay document.
            </p>

            <div class="bh5-guide-grid">

                <div class="bh5-guide-card">
                    <h4>Barangay Clearance</h4>
                    <ul>
                        <li>Valid identification card</li>
                        <li>Purpose of the request</li>
                        <li>Proof of address, if requested</li>
                        <li>Applicable fee, if required</li>
                    </ul>
                </div>

                <div class="bh5-guide-card">
                    <h4>Certificate of Residency</h4>
                    <ul>
                        <li>Valid identification card</li>
                        <li>Proof of current address</li>
                        <li>Purpose of the request</li>
                        <li>Authorization letter, if represented by another person</li>
                    </ul>
                </div>

                <div class="bh5-guide-card">
                    <h4>Certificate of Indigency</h4>
                    <ul>
                        <li>Valid identification card</li>
                        <li>Resident information</li>
                        <li>Purpose of the request</li>
                        <li>Additional assessment documents, if required</li>
                    </ul>
                </div>

                <div class="bh5-guide-card">
                    <h4>Business Clearance</h4>
                    <ul>
                        <li>Valid identification card</li>
                        <li>Business information</li>
                        <li>Business location details</li>
                        <li>Other applicable business requirements</li>
                    </ul>
                </div>

            </div>

            <div class="bh5-note">
                <strong>Reminder:</strong>
                These are general preparation reminders, not official
                requirements. Actual requirements, fees, and processing
                procedures must be confirmed by the barangay office.
            </div>

            <button type="button" class="bh5-primary-btn" id="bh5OpenReports">
                View Barangay Reports
            </button>
        `;

        guidePage.appendChild(guidePanel);

        // -------------------------------------------------
        // 3. CREATE REPORT MODAL
        // -------------------------------------------------

        const modal = document.createElement("div");
        modal.id = "bhStep5Modal";
        modal.className = "bh5-modal";

        modal.innerHTML = `
            <div class="bh5-modal-card" id="bhStep5PrintArea">

                <div class="bh5-modal-header">
                    <h2>BarangayHub Reports</h2>

                    <button type="button"
                        class="bh5-close bh5-no-print"
                        id="bh5CloseReports">
                        ✕
                    </button>
                </div>

                <p class="bh5-muted" id="bh5ReportDate"></p>

                <div id="bh5ReportContent"></div>

                <div class="bh5-report-actions bh5-no-print">
                    <button type="button"
                        class="bh5-export-btn"
                        id="bh5ExportCSV">
                        Download CSV
                    </button>

                    <button type="button"
                        class="bh5-print-btn"
                        id="bh5PrintReport">
                        Print Report
                    </button>
                </div>

                <p class="bh5-muted">
                    Report data comes from records saved in this browser.
                </p>

            </div>
        `;

        document.body.appendChild(modal);

        // -------------------------------------------------
        // 4. GET CURRENT PROJECT DATA
        // -------------------------------------------------

        function getCurrentData() {
            return {
                residents:
                    typeof residents !== "undefined" &&
                    Array.isArray(residents) ? residents : [],

                members:
                    typeof barangayMembers !== "undefined" &&
                    Array.isArray(barangayMembers) ? barangayMembers : [],

                documents:
                    typeof residentDocuments !== "undefined" &&
                    Array.isArray(residentDocuments) ? residentDocuments : []
            };
        }

        function escapeHTML(value) {
            return String(value ?? "").replace(/[&<>"']/g, function (char) {
                const entities = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;"
                };

                return entities[char];
            });
        }

        function getDocumentType(doc) {
            return doc.type ||
                doc.documentType ||
                doc.document_type ||
                "Unspecified";
        }

        function getDocumentDate(doc) {
            return doc.date ||
                doc.documentDate ||
                doc.requestDate ||
                doc.createdAt ||
                "";
        }

        function getDocumentStatus(doc) {
            const status = String(doc.status || "Pending").toLowerCase();

            if (status === "ready") return "Available";
            if (status === "completed") return "Released";

            return status.charAt(0).toUpperCase() + status.slice(1);
        }

        function getResidentName(resident) {
            const fullName = [
                resident.firstName,
                resident.middleName,
                resident.lastName
            ].filter(Boolean).join(" ");

            return fullName ||
                resident.fullName ||
                resident.name ||
                "Unnamed Resident";
        }

        function getDocumentResident(doc, residentList) {
            if (doc.residentName) return doc.residentName;

            const residentId = doc.residentId || doc.residentID;

            const resident = residentList.find(function (item) {
                return String(item.id || item.residentId || "") ===
                    String(residentId || "");
            });

            return resident ? getResidentName(resident) : "Not linked";
        }

        // -------------------------------------------------
        // 5. GENERATE REPORT
        // -------------------------------------------------

        let latestReportData = [];

        function generateReport() {
            const data = getCurrentData();

            const residentList = data.residents;
            const memberList = data.members;
            const documents = data.documents;

            const statusNames = [
                "Pending",
                "Processing",
                "Available",
                "Released"
            ];

            const statusCounts = {};

            statusNames.forEach(function (status) {
                statusCounts[status] = documents.filter(function (doc) {
                    return getDocumentStatus(doc).toLowerCase() ===
                        status.toLowerCase();
                }).length;
            });

            const typeCounts = {};

            documents.forEach(function (doc) {
                const type = getDocumentType(doc);

                typeCounts[type] = (typeCounts[type] || 0) + 1;
            });

            const sortedTypes = Object.entries(typeCounts)
                .sort(function (a, b) {
                    return b[1] - a[1];
                });

            const topDocument = sortedTypes.length
                ? escapeHTML(sortedTypes[0][0]) +
                  " (" + sortedTypes[0][1] + ")"
                : "No documents yet";

            const today = new Date();
            const thirtyDaysAgo = new Date(today);

            thirtyDaysAgo.setDate(today.getDate() - 30);

            const recentDocuments = documents.filter(function (doc) {
                const date = getDocumentDate(doc);
                if (!date) return false;

                const parsedDate = new Date(date);

                return !isNaN(parsedDate.getTime()) &&
                    parsedDate >= thirtyDaysAgo &&
                    parsedDate <= today;
            }).length;

            latestReportData = documents.map(function (doc) {
                return {
                    id: doc.id || doc.documentId || "",
                    resident: getDocumentResident(doc, residentList),
                    type: getDocumentType(doc),
                    date: getDocumentDate(doc),
                    status: getDocumentStatus(doc),
                    notes: doc.notes || ""
                };
            });

            const statusRows = statusNames.map(function (status) {
                return `
                    <tr>
                        <td>${escapeHTML(status)}</td>
                        <td>${statusCounts[status]}</td>
                    </tr>
                `;
            }).join("");

            const typeRows = sortedTypes.length
                ? sortedTypes.map(function (item) {
                    return `
                        <tr>
                            <td>${escapeHTML(item[0])}</td>
                            <td>${item[1]}</td>
                        </tr>
                    `;
                }).join("")
                : `<tr><td colspan="2">No document records found.</td></tr>`;

            document.getElementById("bh5ReportDate").textContent =
                "Generated: " + today.toLocaleString();

            document.getElementById("bh5ReportContent").innerHTML = `
                <div class="bh5-report-grid">

                    <div class="bh5-stat">
                        <span>Total Residents</span>
                        <strong>${residentList.length}</strong>
                    </div>

                    <div class="bh5-stat">
                        <span>Barangay Members</span>
                        <strong>${memberList.length}</strong>
                    </div>

                    <div class="bh5-stat">
                        <span>Total Documents</span>
                        <strong>${documents.length}</strong>
                    </div>

                    <div class="bh5-stat">
                        <span>Documents in Last 30 Days</span>
                        <strong>${recentDocuments}</strong>
                    </div>

                </div>

                <div class="bh5-report-section">
                    <h3>Document Status Summary</h3>

                    <table class="bh5-report-table">
                        <thead>
                            <tr>
                                <th>Status</th>
                                <th>Number of Documents</th>
                            </tr>
                        </thead>

                        <tbody>
                            ${statusRows}
                        </tbody>
                    </table>
                </div>

                <div class="bh5-report-section">
                    <h3>Documents by Type</h3>

                    <table class="bh5-report-table">
                        <thead>
                            <tr>
                                <th>Document Type</th>
                                <th>Number of Requests</th>
                            </tr>
                        </thead>

                        <tbody>
                            ${typeRows}
                        </tbody>
                    </table>
                </div>

                <div class="bh5-report-section">
                    <h3>Most Requested Document</h3>
                    <p><strong>${topDocument}</strong></p>
                </div>
            `;
        }

        // -------------------------------------------------
        // 6. OPEN AND CLOSE REPORTS
        // -------------------------------------------------

        document.getElementById("bh5OpenReports")
            .addEventListener("click", function () {
                generateReport();
                modal.classList.add("is-open");
            });

        function closeReports() {
            modal.classList.remove("is-open");
        }

        document.getElementById("bh5CloseReports")
            .addEventListener("click", closeReports);

        modal.addEventListener("click", function (event) {
            if (event.target === modal) {
                closeReports();
            }
        });

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape" &&
                modal.classList.contains("is-open")) {
                closeReports();
            }
        });

        // -------------------------------------------------
        // 7. EXPORT DOCUMENT REPORT TO CSV
        // -------------------------------------------------

        document.getElementById("bh5ExportCSV")
            .addEventListener("click", function () {
                const headers = [
                    "Document ID",
                    "Resident",
                    "Document Type",
                    "Date",
                    "Status",
                    "Notes"
                ];

                const rows = latestReportData.map(function (doc) {
                    return [
                        doc.id,
                        doc.resident,
                        doc.type,
                        doc.date,
                        doc.status,
                        doc.notes
                    ];
                });

                function escapeCSV(value) {
                    return '"' + String(value ?? "").replace(/"/g, '""') + '"';
                }

                const csvContent = [headers, ...rows]
                    .map(function (row) {
                        return row.map(escapeCSV).join(",");
                    })
                    .join("\r\n");

                const blob = new Blob(
                    ["\uFEFF" + csvContent],
                    { type: "text/csv;charset=utf-8;" }
                );

                const url = URL.createObjectURL(blob);
                const link = document.createElement("a");

                link.href = url;
                link.download = "BarangayHub-Document-Report.csv";

                document.body.appendChild(link);
                link.click();
                link.remove();

                URL.revokeObjectURL(url);
            });

        // -------------------------------------------------
        // 8. PRINT REPORT
        // -------------------------------------------------

        document.getElementById("bh5PrintReport")
            .addEventListener("click", function () {
                window.print();
            });

        console.log("BarangayHub Step 5 loaded successfully.");
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initializeStep5);
    } else {
        initializeStep5();
    }
})();



// =====================================================
// 10. FINAL INITIALIZATION
// =====================================================

renderDocumentResidents();

updateDashboardCounters();


// INITIAL DISPLAY

renderEnhancedDocumentGuide();


// =====================================================
// 35. INITIALIZE WEBSITE
// =====================================================

renderMembers();

renderResidents();

renderDocumentResidents();

renderDocumentGuide();

updateDashboardCounters();
