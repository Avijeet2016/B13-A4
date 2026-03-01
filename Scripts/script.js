let interviewList = [];
let rejectedList = [];
let currentStatus = 'all';

const totalCount = document.getElementById('total-count');
const interviewCount = document.getElementById('interview-count');
const rejectedCount = document.getElementById('rejected-count');
const totalJobs = document.getElementById('total-jobs');

const mainContainer = document.querySelector('main');
const allCards = document.getElementById('all-cards');
const filteredSection = document.getElementById('filtered-section');

function calculateCount() {
    totalCount.innerText = allCards.children.length;
    totalJobs.innerText = totalCount.innerText;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}

calculateCount();

const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');

function toggleStyle(id) {
    allFilterBtn.classList.add('bg-[#FFFFFF]', 'text-[#64748B]');
    interviewFilterBtn.classList.add('bg-[#FFFFFF]', 'text-[#64748B]');
    rejectedFilterBtn.classList.add('bg-[#FFFFFF]', 'text-[#64748B]');

    allFilterBtn.classList.remove('bg-[#3B82F6]', 'text-[#FFFFFF]');
    interviewFilterBtn.classList.remove('bg-[#3B82F6]', 'text-[#FFFFFF]');
    rejectedFilterBtn.classList.remove('bg-[#3B82F6]', 'text-[#FFFFFF]');

    const selected = document.getElementById(id);

    selected.classList.add('bg-[#3B82F6]', 'text-[#FFFFFF]');
    selected.classList.remove('bg-[#FFFFFF]', 'text-[#64748B]');

    currentStatus = id;

    if (currentStatus === 'all-filter-btn') {
        allCards.classList.remove('hidden');
        filteredSection.classList.add('hidden');
    }
    else if (currentStatus === 'interview-filter-btn') {
        allCards.classList.add('hidden');
        filteredSection.classList.remove('hidden');
        renderInterview();
    }
    else if (currentStatus === 'rejected-filter-btn') {
        allCards.classList.add('hidden');
        filteredSection.classList.remove('hidden');
        renderRejected();
    }
    calculateCount();
}

mainContainer.addEventListener('click', function(event){
    if (event.target.classList.contains('interview-btn')) {
        const parentNode = event.target.closest('.card');
        const companyName = parentNode.querySelector('.company-name').innerText;
        const position = parentNode.querySelector('.position').innerText;
        const location = parentNode.querySelector('.location').innerText;
        const type = parentNode.querySelector('.type').innerText;
        const salary = parentNode.querySelector('.salary').innerText;
        const status = parentNode.querySelector('.status').innerText;
        const description = parentNode.querySelector('.description').innerText;

        parentNode.querySelector('.status').innerText = "INTERVIEW";
        
        const cardInfo = {
            companyName,
            position,
            location,
            type,
            salary,
            status: "INTERVIEW",
            description
        };

        const companyExist = interviewList.find(item => item.companyName == cardInfo.companyName);

        if (!companyExist) {
            interviewList.push(cardInfo);
        }
        rejectedList = rejectedList.filter(item => item.companyName !== cardInfo.companyName);

        calculateCount();
        if (currentStatus === 'interview-filter-btn') {
            renderInterview();
        } 
    }
        
    
    else if (event.target.classList.contains('rejected-btn')) {
        const parentNode = event.target.closest('.card');
        const companyName = parentNode.querySelector('.company-name').innerText;
        const position = parentNode.querySelector('.position').innerText;
        const location = parentNode.querySelector('.location').innerText;
        const type = parentNode.querySelector('.type').innerText;
        const salary = parentNode.querySelector('.salary').innerText;
        const status = parentNode.querySelector('.status').innerText;
        const description = parentNode.querySelector('.description').innerText;

        parentNode.querySelector('.status').innerText = "REJECTED";
        
        const cardInfo = {
            companyName,
            position,
            location,
            type,
            salary,
            status: "REJECTED",
            description
        };

        const companyExist = interviewList.find(item => item.companyName == cardInfo.companyName);

        if (!companyExist) {
            rejectedList.push(cardInfo);
        }
        interviewList = interviewList.filter(item => item.companyName !== cardInfo.companyName);

        calculateCount();
        if (currentStatus === 'rejected-filter-btn') {
            renderRejected();
        }
    }

    else if (event.target.classList.contains('delete-btn')) {
        console.log("delete btn clicked");
        const parentNode = event.target.closest('.card');
        const status = parentNode.querySelector('.status').innerText;
        const companyName = parentNode.querySelector('.company-name').innerText;

        parentNode.remove();

        if (status === 'INTERVIEW') {
            interviewList = interviewList.filter(item => item.companyName !== companyName);
        }
        else if (status === 'REJECTED') {
            rejectedList = rejectedList.filter(item => item.companyName !== companyName);
        }
        calculateCount();
    }
});



function renderInterview() {
    filteredSection.innerHTML = '';
    for (const interview of interviewList) {
        const newDiv = document.createElement('div');
        newDiv.className = 'card flex justify-between bg-[#FFFFFF] p-6 rounded-lg mb-3';
        newDiv.innerHTML = `
            <div class="space-y-5">
                    <h3 class="company-name text-2xl text-[#002C5C] font-bold">${interview.companyName}</h3>
                    <p class="position text-[#64748B]">${interview.position}</p>
                    <div class="text-[#64748B]">
                        <ul class="flex flex-col sm:flex-row gap-3">
                            <li class="location list-none list-inside">${interview.location}</li>
                            <li class="type list-disc list-inside">${interview.type}</li>
                            <li class="salary list-disc list-inside">$${interview.salary}</li>
                        </ul>
                    </div>
                    <div>
                        <button class="status text-[#002C5C] font-bold bg-[#EEF4FF] px-5 py-2 rounded-lg">${interview.status}</button>
                    </div>
                    <p class="description text-[#64748B]">${interview.description}</p>
                    <div class="flex gap-2">
                        <button class="interview-btn outline outline-2 outline-[#2FB689] text-[#2FB689] rounded-sm px-4 py-2 font-bold">INTERVIEW</button>
                        <button class="rejected-btn outline outline-2 outline-[#EF4444] text-[#EF4444] rounded-sm px-4 py-2 font-bold">REJECTED</button>
                    </div>
                </div>
                <div>
                    <button><i class="delete-btn fa-regular fa-trash-can"></i></button>
                </div>
                
        `;
        filteredSection.appendChild(newDiv);
    }
    
}

function renderRejected() {
    filteredSection.innerHTML = '';
    for (const rejected of rejectedList) {
        const newDiv = document.createElement('div');
        newDiv.className = 'card flex justify-between bg-[#FFFFFF] p-6 rounded-lg mb-3';
        newDiv.innerHTML = `
            <div class="space-y-5">
                    <h3 class="company-name text-2xl text-[#002C5C] font-bold">${rejected.companyName}</h3>
                    <p class="position text-[#64748B]">${rejected.position}</p>
                    <div class="text-[#64748B]">
                        <ul class="flex flex-col sm:flex-row gap-3">
                            <li class="location list-none list-inside">${rejected.location}</li>
                            <li class="type list-disc list-inside">${rejected.type}</li>
                            <li class="salary list-disc list-inside">$${rejected.salary}</li>
                        </ul>
                    </div>
                    <div>
                        <button class="status text-[#002C5C] font-bold bg-[#EEF4FF] px-5 py-2 rounded-lg">${rejected.status}</button>
                    </div>
                    <p class="description text-[#64748B]">${rejected.description}</p>
                    <div class="flex gap-2">
                        <button class="interview-btn outline outline-2 outline-[#2FB689] text-[#2FB689] rounded-sm px-4 py-2 font-bold">INTERVIEW</button>
                        <button class="rejected-btn outline outline-2 outline-[#EF4444] text-[#EF4444] rounded-sm px-4 py-2 font-bold">REJECTED</button>
                    </div>
                </div>
                <div>
                    <button><i class="delete-btn fa-regular fa-trash-can"></i></button>
                </div>
                
        `;
        filteredSection.appendChild(newDiv);
    }
    
}