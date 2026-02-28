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
        renderInterview();
    }
    else if (currentStatus === 'interview-filter-btn') {
        filteredSection.classList.remove('hidden');
        allCards.classList.add('hidden');
    }
    else if (currentStatus === 'rejected-filter-btn') {
        allCards.classList.remove('hidden');
        filteredSection.classList.add('hidden');
        renderRejected();
    }
}

