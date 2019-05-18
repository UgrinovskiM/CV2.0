class Profile {
    constructor(fullName, peremail, title, address, phoneNumber, upworkAcc, linkedinAcc, personalWeb, dateOfBirth, placeOfBirth, languages, gender, aboutMe,workPlace01, workTitle01, workNumberFrom01, workNumberTo01, workShortDes01, workPlace02, workTitle02, workNumberFrom02, workNumberTo02, workShortDes02, workPlace03, workTitle03, workNumberFrom03, workNumberTo03, workShortDes03, eduPlace01, eduTitle01, eduNumberFrom01, eduNumberTo01, eduShortDes01, eduPlace02, eduTitle02, eduNumberFrom02, eduNumberTo02, eduShortDes02, eduPlace03, eduTitle03, eduNumberFrom03, eduNumberTo03, eduShortDes03, skill1, skill1Percent, skill2, skill2Percent, skill3, skill3Percent, skill4, skill4Percent, skill5, skill5Percent) {
        this.fullName = fullName,
            this.peremail = peremail,
            this.title = title,
            this.address = address,
            this.dateOfBirth = dateOfBirth,
            this.placeOfBirth = placeOfBirth,
            this.languages = languages,
            this.gender = gender,
            this.aboutMe = aboutMe,
            this.phoneNumber = phoneNumber,
            this.personalWeb = personalWeb,
            this.upworkAcc = upworkAcc,
            this.linkedinAcc = linkedinAcc,

            this.workPlace01 = workPlace01,
            this.workTitle01 = workTitle01,
            this.workNumberFrom01 = workNumberFrom01,
            this.workNumberTo01 = workNumberTo01,
            this.workShortDes01 = workShortDes01,

            this.workPlace02 = workPlace02,
            this.workTitle02 = workTitle02,
            this.workNumberFrom02 = workNumberFrom02,
            this.workNumberTo02 = workNumberTo02,
            this.workShortDes02 = workShortDes02,

            this.workPlace03 = workPlace03,
            this.workTitle03 = workTitle03,
            this.workNumberFrom03 = workNumberFrom03,
            this.workNumberTo03 = workNumberTo03,
            this.workShortDes03 = workShortDes03,

            this.eduPlace01 = eduPlace01,
            this.eduTitle01 = eduTitle01,
            this.eduNumberFrom01 = eduNumberFrom01,
            this.eduNumberTo01 = eduNumberTo01,
            this.eduShortDes01 = eduShortDes01,

            this.eduPlace02 = eduPlace02,
            this.eduTitle02 = eduTitle02,
            this.eduNumberFrom02 = eduNumberFrom02,
            this.eduNumberTo02 = eduNumberTo02,
            this.eduShortDes02 = eduShortDes02,

            this.eduPlace03 = eduPlace03,
            this.eduTitle03 = eduTitle03,
            this.eduNumberFrom03 = eduNumberFrom03,
            this.eduNumberTo03 = eduNumberTo03,
            this.eduShortDes03 = eduShortDes03,

            this.skill1 = skill1,
            this.skill1Percent = skill1Percent
        this.skill2 = skill2,
            this.skill2Percent = skill2Percent
        this.skill3 = skill3,
            this.skill3Percent = skill3Percent
        this.skill4 = skill4,
            this.skill4Percent = skill4Percent
        this.skill5 = skill5,
            this.skill5Percent = skill5Percent
    }
    skills() {
        return skill1name + skill1Percent
    }
}
//test new object
// let marjan = new Profile('Marjan Ugrinovski','marjan.ugrinovski@yahoo.com','Front end developer','Evtim Sprostranov 34/1-2','28.10.1991','Skopje, Macedonia','Macedonian, English','male','Front end designer/developer at Purple Dot in Skopje, Macedonia','HTML & CSS','100');
let m = new Profile('Marjan Ugrinovski', 'marjan.ugrinovski@yahoo.com', 'Front End Developer', 'Evtim Sprostranov 34/1-2')
// console.log(marjan);

//Hiding forms from start
$('#additionalInformation').hide();
$('#eduInformation').hide();
$('#workInformation').hide();
$('#contactInformation').hide();
$('#skillInformation').hide();

//Sign up button
$('#signUpBtn').on('click', () => {
    fullName = $('#fullName').val();
    personalEmail = $('#email').val();
    // console.log(fullName, personalEmail)
    createProfile(personalEmail);
    $('#signUp').hide();
    $('#additionalInformation').show();
    // console.log(personalEmail)
});
//Get additional information
function addAdditionalInformation(personalEmail) {
    persEmail.title = $('#title').val()
    persEmail.address = $('#address').val()
    persEmail.dateOfBirth = $('#dateOfBirth').val()
    persEmail.placeOfBirth = $('#placeOfBirth').val()
    persEmail.languages = $('#languages').val()
    persEmail.aboutMe = $('#aboutMe').val()
    persEmail.personalWeb = $('#personalWeb').val()
    persEmail.upworkAcc = $('#upworkAcc').val()
    persEmail.linkedinAcc = $('#linkedinAcc').val()
    console.log(persEmail.languages)
    return persEmail;
}
//Get skill information
function addSkillPercent(personalEmail) {
    persEmail.skill1 = $('#skill1').val()
    persEmail.skill1Percent = $('#skill1Percent').val()
    persEmail.skill2 = $('#skill2').val()
    persEmail.skill2Percent = $('#skill2Percent').val()
    persEmail.skill3 = $('#skill3').val()
    persEmail.skill3Percent = $('#skill3Percent').val()
    persEmail.skill4 = $('#skill4').val()
    persEmail.skill4Percent = $('#skill4Percent').val()
    persEmail.skill5 = $('#skill5').val()
    persEmail.skill5Percent = $('#skill5Percent').val()
}
//Get education information
function addEduInformation(personalEmail) {

}
$('#eduNextBtn').on('click', () => {
    addAdditionalInformation(personalEmail);
    $('#additionalInformation').hide();
    $('#eduInformation').show();
});
$('#workNextBtn').on('click', () => {
    $('#eduInformation').hide();
    $('#workInformation').show();
});

$('#contactNextBtn').on('click', () => {
    $('#workInformation').hide();
    $('#contactInformation').show();
})

$('#skillNextBtn').on('click', () => {
    addSkillPercent(personalEmail);
    $('#contactInformation').hide();
    $('#skillInformation').show();
})

let x;
//Creating new profile based on email because its authentic
function createProfile(personalEmail) {
    persEmail = new Profile(fullName, personalEmail);
    console.log(persEmail);
    x = persEmail
}

// $('#createProfile').on('click', () => {
//     $('body').empty();
//     $('body').append(`
//     <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>Sample Three</title>
//     <link href="https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i" rel="stylesheet">
//     <link href="https://fonts.googleapis.com/css?family=Lato:400,700" rel="stylesheet">
//     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
//         integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
//     <link rel="stylesheet" href="styleThree.css">
//     <link rel="stylesheet" href="print.css">
//     </head>
//     <body>
//     <!-- first section header -->
//     <div class="container-fluid p-5" id="sectionOne">
//         <div class="mx-auto p-5 w-50 d-flex flex-column align-items-center text-center" id="headerWrapper">
//             <h1 class="d-flex justify-content-center" id="fullName">${x.fullName}</h1>
//             <hr>
//             <h5 class="d-flex justify-content-center" id="title">${x.title}</h5>
//         </div>
//     </div>
//     <!-- second section body -->
//     <div class="container-fluid" id="sectionTwo">
//         <div class="row py-5">
//             <!-- left side in body -->
//             <div class="col-lg-4 col-md-4 col-sm-12 px-5" id="leftDiv">
//                 <div class="row">
//                     <!-- skills progress bars -->
//                     <div class="col-12">
//                         <h3 class="my-5 text-right">SKILLS</h3>
//                         <div id="progressBar">
//                             <p class="text-right m-0">HTML 5 & CSS 3</p>
//                             <div class="progress flex-row-reverse mb-3">
//                                 <div class="progress-bar bg-secondary progress-bar-striped" role="progressbar"
//                                     aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 100%">100%
//                                 </div>
//                             </div>
//                             <p class="text-right m-0">Adobe Illustrator</p>
//                             <div class="progress flex-row-reverse mb-3">
//                                 <div class="progress-bar bg-secondary progress-bar-striped" role="progressbar"
//                                     aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 100%">100%
//                                 </div>
//                             </div>
//                             <p class="text-right m-0">JavaScript</p>
//                             <div class="progress flex-row-reverse mb-3">
//                                 <div class="progress-bar bg-secondary progress-bar-striped" role="progressbar"
//                                     aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 100%">100
//                                 </div>
//                             </div>
//                             <p class="text-right m-0">Wordpress</p>
//                             <div class="progress flex-row-reverse mb-3">
//                                 <div class="progress-bar bg-secondary progress-bar-striped" role="progressbar"
//                                     aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%">75%
//                                 </div>
//                             </div>
//                             <p class="text-right m-0">Adobe Photoshop</p>
//                             <div class="progress flex-row-reverse mb-3">
//                                 <div class="progress-bar bg-secondary progress-bar-striped" role="progressbar"
//                                     aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 90%">70%
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <!-- education -->
//                     <div class="col-12">
//                         <div id="experience">
//                             <h3 class="my-5 text-right">EDUCATION</h3>
//                             <div class="eduOne">
//                                 <p class="eduPlace text-right">Seavus Education & Development Center | 2018 to present
//                                 </p>
//                                 <p class="eduTitle text-right">Web Developer</p>
//                                 <p class="eduInfo text-right">Learning Front-end technologies with HTML, CSS, JavaScript
//                                     and jQuery. Back End technologies with CSharp.</p>
//                             </div>
//                             <hr>
//                             <div class="eduTwo">
//                                 <p class="eduPlace text-right">Semos Education | 2017 to 2017</p>
//                                 <p class="eduTitle text-right">HTML5 with JavaScript and CSS3</p>
//                                 <p class="eduInfo text-right">Microsoft Official Course 70-480. Programming in HTML5
//                                     with JavaScript and CSS3.</p>
//                             </div>
//                             <hr>
//                             <div class="eduThree">
//                                 <p class="eduPlace text-right">UTMS Skopje | 2010-2013</p>
//                                 <p class="eduTitle text-right">Human Resource Management</p>
//                                 <p class="eduInfo text-right">Team building, business communication, employment, time
//                                     management, career management.</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <!-- <div class="col-12"></div> -->
//             </div>
//             <!-- right side in body -->
//             <div class="col-lg-8 col-md-8 col-sm-12 px-5" id="rightDiv">
//                 <div class="row">
//                     <!-- about -->
//                     <div class="col-12">
//                         <div id="about">
//                             <h3 class="my-5">ABOUT</h3>
//                             <p>${x.aboutMe}</p>
//                         </div>
//                     </div>
//                     <!-- work experience -->
//                     <div class="col-12">
//                         <div id="experience">
//                             <h3 class="my-5">WORK EXPERIENCE</h3>
//                             <div class="workOne">
//                                 <p class="workPlace">Purple Dot | 2019 to present</p>
//                                 <p class="workTitle">Front End Developer</p>
//                                 <p class="workInfo">Developing web application with HTML, CSS, JavaScript, jQuery.</p>
//                             </div>
//                             <hr>
//                             <div class="workTwo">
//                                 <p class="workPlace">Voyage | 2017 to present</p>
//                                 <p class="workTitle">Graphic Designer</p>
//                                 <p class="workInfo">Design articles for magazine & posters. Design weekly cover photos
//                                     for Voyage websites.</p>
//                             </div>
//                             <hr>
//                             <div class="workThree">
//                                 <p class="workPlace">42 Studios & UpWork | 2014 to present</p>
//                                 <p class="workTitle">Web & Graphic Designer</p>
//                                 <p class="workInfo">Design websites in HTML, CSS and WordPress. Graphic design for logo,
//                                     business card, poster, brochure in Adobe Illustrator and Photoshop.</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="col-lg-6 col-md-6 col-sm-12">
//                         <div id="address">
//                             <h3 class="my-5">ADDRESS</h3>
//                             <Address>
//                                 <p><strong>Adress: </strong>${x.address}</p>
//                                 <p><strong>Date of Birth: </strong>${x.dateOfBirth}</p>
//                                 <p><strong>Place of Birth: </strong>${x.placeOfBirth}</p>
//                                 <p><strong>Languages: </strong>${x.languages}</p>
//                                 <p><strong>Gender: </strong>${x.gender}</p>
//                             </Address>
//                         </div>
//                     </div>
//                     <div class="col-lg-6 col-md-6 col-sm-12">
//                         <div id="address">
//                             <h3 class="my-5">CONTACT</h3>
//                             <Address>
//                                 <p><strong>E-mail: </strong><a target="_blank"
//                                         href="mailto:${x.peremail}">${x.peremail}</a></p>
//                                 <p><strong>Phone: </strong><a href="telto:${x.phoneNumber}">${x.phoneNumber}</a></p>
//                                 <p><strong>Personal website: </strong><a
//                                         href="${x.personalWeb}">${x.personalWeb}</a></p>
//                                 <p><strong>Upwork: </strong><a target="_blank"
//                                         href="${x.upworkAcc}">Personal
//                                         profile</a></p>
//                                 <p><strong>Linkedin: </strong><a target="_blank"
//                                         href="${x.linkedinAcc}">Personal profile</a></p>
//                             </Address>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     </body>
//     `)
// })