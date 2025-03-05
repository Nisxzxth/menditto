document.getElementById("dss").addEventListener("click", function() {
    document.getElementById("ds").style.display = "block";
    document.getElementById("as").style.display = "none";
    document.getElementById("ps").style.display = "none";
    document.getElementById("ts").style.display = "none";
    document.getElementById("dss").classList.add("orange");
    document.getElementById("ass").classList.remove("or");
    document.getElementById("pss").classList.remove("ora");
    document.getElementById("tss").classList.remove("oran");
  });
  
  document.getElementById("ass").addEventListener("click", function() {
    document.getElementById("ds").style.display = "none";
    document.getElementById("as").style.display = "block";
    document.getElementById("ps").style.display = "none";
    document.getElementById("ts").style.display = "none";
    document.getElementById("dss").classList.remove("orange");
    document.getElementById("pss").classList.remove("ora");
    document.getElementById("ass").classList.add("or");
    document.getElementById("tss").classList.remove("oran");
  });

  document.getElementById("pss").addEventListener("click", function() {
    document.getElementById("ds").style.display = "none";
    document.getElementById("ps").style.display = "block";
    document.getElementById("as").style.display = "none";
    document.getElementById("ts").style.display = "none";
    document.getElementById("dss").classList.remove("orange");
    document.getElementById("pss").classList.add("ora");
    document.getElementById("ass").classList.remove("or");
    document.getElementById("tss").classList.remove("oran");
  });

  document.getElementById("tss").addEventListener("click", function() {
    document.getElementById("ds").style.display = "none";
    document.getElementById("ps").style.display = "none";
    document.getElementById("as").style.display = "none";
    document.getElementById("ts").style.display = "block";
    document.getElementById("dss").classList.remove("orange");
    document.getElementById("pss").classList.remove("ora");
    document.getElementById("ass").classList.remove("or");
    document.getElementById("tss").classList.add("oran");
  });

  const loginTrigger = document.getElementById('login-trigger');
  const loginPopup = document.getElementById('login-popup');
  
  // Registration triggers
  const seekerLoginTrigger = document.getElementById('seeker-login-trigger');
  const doerLoginTrigger = document.getElementById('doer-login-trigger');
  const seekerLoginForm = document.getElementById('seeker-login-form');
  const doerLoginForm = document.getElementById('doer-login-form');
  
  // Login triggers
  const seekerLogupTrigger = document.getElementById('seeker-logup-trigger');
  const doerLogupTrigger = document.getElementById('doer-logup-trigger');
  const seekerLogupForm = document.getElementById('seeker-logup-form');
  const doerLogupForm = document.getElementById('doer-logup-form');
  
  const closePopups = document.querySelectorAll('.close-popup');
  
  loginTrigger.addEventListener('click', () => {
    loginPopup.classList.add('active');
  });
  
  // Registration triggers
  seekerLoginTrigger.addEventListener('click', () => {
    loginPopup.classList.remove('active');
    seekerLoginForm.classList.add('active');
  });
  
  doerLoginTrigger.addEventListener('click', () => {
    loginPopup.classList.remove('active');
    doerLoginForm.classList.add('active');
  });
  
  // Login triggers
  seekerLogupTrigger.addEventListener('click', () => {
    loginPopup.classList.remove('active');
    seekerLogupForm.classList.add('active');
  });
  
  doerLogupTrigger.addEventListener('click', () => {
    loginPopup.classList.remove('active');
    doerLogupForm.classList.add('active');
  });
  
  closePopups.forEach(popup => {
    popup.addEventListener('click', () => {
      loginPopup.classList.remove('active');
      seekerLoginForm.classList.remove('active');
      doerLoginForm.classList.remove('active');
      seekerLogupForm.classList.remove('active');
      doerLogupForm.classList.remove('active');
    });
  });

const serviceA = document.getElementById('ser-a');
const serviceADiv = document.getElementById('ser1-d');

serviceA.addEventListener('click', () => {
  serviceADiv.classList.add('active');
});

const serviceB = document.getElementById('ser-b');
const serviceBDiv = document.getElementById('ser1-d');

serviceB.addEventListener('click', () => {
  serviceBDiv.classList.add('active');
});

const serviceC = document.getElementById('ser-c');
const serviceCDiv = document.getElementById('ser1-d');

serviceC.addEventListener('click', () => {
  serviceCDiv.classList.add('active');
});

const serviceD = document.getElementById('ser-d');
const serviceDDiv = document.getElementById('ser1-d');

serviceD.addEventListener('click', () => {
  serviceDDiv.classList.add('active');
});

const serviceE = document.getElementById('ser-e');
const serviceEDiv = document.getElementById('ser1-d');

serviceE.addEventListener('click', () => {
  serviceEDiv.classList.add('active');
});

const serviceF = document.getElementById('ser-f');
const serviceFDiv = document.getElementById('ser1-d');

serviceF.addEventListener('click', () => {
  serviceFDiv.classList.add('active');
});

const serviceG = document.getElementById('ser-g');
const serviceGDiv = document.getElementById('ser1-d');

serviceG.addEventListener('click', () => {
  serviceGDiv.classList.add('active');
});

const serviceH = document.getElementById('ser-h');
const serviceHDiv = document.getElementById('ser1-d');

serviceH.addEventListener('click', () => {
  serviceHDiv.classList.add('active');
});

const serviceI = document.getElementById('ser-i');
const serviceIDiv = document.getElementById('ser1-d');

serviceI.addEventListener('click', () => {
  serviceIDiv.classList.add('active');
});

const serviceJ = document.getElementById('ser-j');
const serviceJDiv = document.getElementById('ser1-d');

serviceJ.addEventListener('click', () => {
  serviceJDiv.classList.add('active');
});

const serviceK = document.getElementById('ser-k');
const serviceKDiv = document.getElementById('ser1-d');

serviceK.addEventListener('click', () => {
  serviceKDiv.classList.add('active');
});

const serviceL = document.getElementById('ser-l');
const serviceLDiv = document.getElementById('ser1-d');

serviceL.addEventListener('click', () => {
  serviceLDiv.classList.add('active');
});

const serviceM = document.getElementById('ser-m');
const serviceMDiv = document.getElementById('ser1-d');

serviceM.addEventListener('click', () => {
  serviceMDiv.classList.add('active');
});

const serviceN = document.getElementById('ser-n');
const serviceNDiv = document.getElementById('ser1-d');

serviceN.addEventListener('click', () => {
  serviceNDiv.classList.add('active');
});

const serviceO = document.getElementById('ser-o');
const serviceODiv = document.getElementById('ser1-d');

serviceO.addEventListener('click', () => {
  serviceODiv.classList.add('active');
});

const serviceP = document.getElementById('ser-p');
const servicePDiv = document.getElementById('ser1-d');

serviceP.addEventListener('click', () => {
  servicePDiv.classList.add('active');
});

const serviceQ = document.getElementById('ser-q');
const serviceQDiv = document.getElementById('ser1-d');

serviceQ.addEventListener('click', () => {
  serviceQDiv.classList.add('active');
});

const serviceR = document.getElementById('ser-r');
const serviceRDiv = document.getElementById('ser1-d');

serviceR.addEventListener('click', () => {
  serviceRDiv.classList.add('active');
});

const serviceS = document.getElementById('ser-s');
const serviceSDiv = document.getElementById('ser1-d');

serviceS.addEventListener('click', () => {
  serviceSDiv.classList.add('active');
});

const serviceT = document.getElementById('ser-t');
const serviceTDiv = document.getElementById('ser1-d');

serviceT.addEventListener('click', () => {
  serviceTDiv.classList.add('active');
});

const serviceU = document.getElementById('ser-u');
const serviceUDiv = document.getElementById('ser1-d');

serviceU.addEventListener('click', () => {
  serviceUDiv.classList.add('active');
});

const serviceV = document.getElementById('ser-v');
const serviceVDiv = document.getElementById('ser1-d');

serviceV.addEventListener('click', () => {
  serviceVDiv.classList.add('active');
});

const serviceW = document.getElementById('ser-w');
const serviceWDiv = document.getElementById('ser1-d');

serviceW.addEventListener('click', () => {
  serviceWDiv.classList.add('active');
});

const serviceX = document.getElementById('ser-x');
const serviceXDiv = document.getElementById('ser1-d');

serviceX.addEventListener('click', () => {
  serviceXDiv.classList.add('active');
});

const serviceY = document.getElementById('ser-y');
const serviceYDiv = document.getElementById('ser1-d');

serviceY.addEventListener('click', () => {
  serviceYDiv.classList.add('active');
});

const serviceZ = document.getElementById('ser-z');
const serviceZDiv = document.getElementById('ser1-d');

serviceZ.addEventListener('click', () => {
  serviceZDiv.classList.add('active');
});

const serviceAA = document.getElementById('ser-aa');
const serviceAADiv = document.getElementById('ser1-d');

serviceAA.addEventListener('click', () => {
  serviceAADiv.classList.add('active');
});

const serviceAB = document.getElementById('ser-ab');
const serviceABDiv = document.getElementById('ser1-d');

serviceAB.addEventListener('click', () => {
  serviceABDiv.classList.add('active');
});

const serviceAC = document.getElementById('ser-ac');
const serviceACDiv = document.getElementById('ser1-d');

serviceAC.addEventListener('click', () => {
  serviceACDiv.classList.add('active');
});

const serviceAD = document.getElementById('ser-ad');
const serviceADDiv = document.getElementById('ser1-d');

serviceAD.addEventListener('click', () => {
  serviceADDiv.classList.add('active');
});

const serviceAE = document.getElementById('ser-ae');
const serviceAEDiv = document.getElementById('ser1-d');

serviceAE.addEventListener('click', () => {
  serviceAEDiv.classList.add('active');
});

const serviceAF = document.getElementById('ser-af');
const serviceAFDiv = document.getElementById('ser1-d');

serviceAF.addEventListener('click', () => {
  serviceAFDiv.classList.add('active');
});

const serviceAG = document.getElementById('ser-ag');
const serviceAGDiv = document.getElementById('ser1-d');

serviceAG.addEventListener('click', () => {
  serviceAGDiv.classList.add('active');
});

const serviceAH = document.getElementById('ser-ah');
const serviceAHDiv = document.getElementById('ser1-d');

serviceAH.addEventListener('click', () => {
  serviceAHDiv.classList.add('active');
});

const serviceAI = document.getElementById('ser-ai');
const serviceAIDiv = document.getElementById('ser1-d');

serviceAI.addEventListener('click', () => {
  serviceAIDiv.classList.add('active');
});

const serviceAJ = document.getElementById('ser-aj');
const serviceAJDiv = document.getElementById('ser1-d');

serviceAJ.addEventListener('click', () => {
  serviceAJDiv.classList.add('active');
});

const serviceAK = document.getElementById('ser-ak');
const serviceAKDiv = document.getElementById('ser1-d');

serviceAK.addEventListener('click', () => {
  serviceAKDiv.classList.add('active');
});

const serviceAL = document.getElementById('ser-al');
const serviceALDiv = document.getElementById('ser1-d');

serviceAL.addEventListener('click', () => {
  serviceALDiv.classList.add('active');
});

const serviceAM = document.getElementById('ser-am');
const serviceAMDiv = document.getElementById('ser1-d');

serviceAM.addEventListener('click', () => {
  serviceAMDiv.classList.add('active');
});

const serviceAN = document.getElementById('ser-an');
const serviceANDiv = document.getElementById('ser1-d');

serviceAN.addEventListener('click', () => {
  serviceANDiv.classList.add('active');
});

const serviceAO = document.getElementById('ser-ao');
const serviceAODiv = document.getElementById('ser1-d');

serviceAO.addEventListener('click', () => {
  serviceAODiv.classList.add('active');
});

const serviceAP = document.getElementById('ser-ap');
const serviceAPDiv = document.getElementById('ser1-d');

serviceAP.addEventListener('click', () => {
  serviceAPDiv.classList.add('active');
});

const serviceAQ = document.getElementById('ser-aq');
const serviceAQDiv = document.getElementById('ser1-d');

serviceAQ.addEventListener('click', () => {
  serviceAQDiv.classList.add('active');
});

const serviceAR = document.getElementById('ser-ar');
const serviceARDiv = document.getElementById('ser1-d');

serviceAR.addEventListener('click', () => {
  serviceARDiv.classList.add('active');
});

const serviceAS = document.getElementById('ser-as');
const serviceASDiv = document.getElementById('ser1-d');

serviceAS.addEventListener('click', () => {
  serviceASDiv.classList.add('active');
});

const closep = document.querySelector('.closep');

closep.addEventListener('click', () => {
  serviceADiv.classList.remove('active');
});


  