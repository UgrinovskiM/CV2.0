class Profile {
    constructor(fullName, peremail, title, address, phoneNumber, upworkAcc, linkedinAcc, personalWeb, dateOfBirth, placeOfBirth, languages, gender, aboutMe, workPlace01, workTitle01, workNumberFrom01, workNumberTo01, workShortDes01, workPlace02, workTitle02, workNumberFrom02, workNumberTo02, workShortDes02, workPlace03, workTitle03, workNumberFrom03, workNumberTo03, workShortDes03, eduPlace01, eduTitle01, eduNumberFrom01, eduNumberTo01, eduShortDes01, eduPlace02, eduTitle02, eduNumberFrom02, eduNumberTo02, eduShortDes02, eduPlace03, eduTitle03, eduNumberFrom03, eduNumberTo03, eduShortDes03, skill1, skill1Percent, skill2, skill2Percent, skill3, skill3Percent, skill4, skill4Percent, skill5, skill5Percent) {
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

//Hiding forms from start
$('#additionalInformation').hide();
$('#eduInformation').hide();
$('#workInformation').hide();
$('#contactInformation').hide();
$('#skillInformation').hide();

//Creating new profile based on email because its authentic
function createProfile(personalEmail) {
    personalEmail = new Profile(fullName, personalEmail);
    x = personalEmail
    console.log(x);
}
//Sign up button
$('#signUpBtn').on('click', () => {
    fullName = $('#fullName').val();
    personalEmail = $('#email').val();
    createProfile(personalEmail)
    $('#signUp').hide();
    $('#additionalInformation').show();
});
//Go back to sign up
$('#BackToSignUp').on('click', () => {
    $('#signUp').show();
    $('#additionalInformation').hide();
});
//Go to education button
$('#eduNextBtn').on('click', () => {
    addAdditionalInformation(x);
    console.log(x);
    $('#additionalInformation').hide();
    $('#eduInformation').show();
});
//Go back to additional info
$('#BackToAddInfo').on('click', () => {
    $('#additionalInformation').show();
    $('#eduInformation').hide();
});
//Go to work button
$('#workNextBtn').on('click', () => {
    $('#eduInformation').hide();
    $('#workInformation').show();
    addEduInformation(x)
});
//Go back to education info
$('#BackToEdu').on('click', () => {
    $('#eduInformation').show();
    $('#workInformation').hide();
});
//Go to contact button
$('#contactNextBtn').on('click', () => {
    $('#workInformation').hide();
    $('#contactInformation').show();
    addWorkInformation(x)
})
//Go back to work info
$('#BackToWork').on('click', () => {
    $('#contactInformation').hide();
    $('#workInformation').show();
});
//Go to skills button
$('#skillNextBtn').on('click', () => {
    addSkillPercent(x);
    $('#contactInformation').hide();
    $('#skillInformation').show();
});
//Go back to contact
$('#BackToContact').on('click', () => {
    $('#contactInformation').show();
    $('#skillInformation').hide();
});

//Get additional information
function addAdditionalInformation(x) {
    x.title = $('#title').val();
    x.address = $('#address').val();
    x.dateOfBirth = $('#dateOfBirth').val();
    x.placeOfBirth = $('#placeOfBirth').val();
    x.languages = $('#languages').val();
    x.aboutMe = $('#aboutMe').val();
    x.personalWeb = $('#personalWeb').val();
    x.upworkAcc = $('#upworkAcc').val();
    x.linkedinAcc = $('#linkedinAcc').val();
    x.phoneNumber = $('#phoneNumber').val();
    x.gender = $('#gender').val();
}
//Get skill information
function addSkillPercent(x) {
    x.skill1 = $('#skill1').val();
    x.skill1Percent = $('#skill1Percent').val();
    x.skill2 = $('#skill2').val();
    x.skill2Percent = $('#skill2Percent').val();
    x.skill3 = $('#skill3').val();
    x.skill3Percent = $('#skill3Percent').val();
    x.skill4 = $('#skill4').val();
    x.skill4Percent = $('#skill4Percent').val();
    x.skill5 = $('#skill5').val();
    x.skill5Percent = $('#skill5Percent').val();
}
//Get education information
function addEduInformation(x) {
    x.eduPlace01 = $('#eduPlace01').val();
    x.eduTitle01 = $('#eduTitle01').val();
    x.eduNumberFrom01 = $('#eduNumberFrom01').val();
    x.eduNumberTo01 = $('#eduNumberTo01').val();
    x.eduShortDes01 = $('#eduShortDes01').val();

    x.eduPlace02 = $('#eduPlace02').val();
    x.eduTitle02 = $('#eduTitle02').val();
    x.eduNumberFrom02 = $('#eduNumberFrom02').val();
    x.eduNumberTo02 = $('#eduNumberTo02').val();
    x.eduShortDes02 = $('#eduShortDes02').val();

    x.eduPlace03 = $('#eduPlace03').val();
    x.eduTitle03 = $('#eduTitle03').val();
    x.eduNumberFrom03 = $('#eduNumberFrom03').val();
    x.eduNumberTo03 = $('#eduNumberTo03').val();
    x.eduShortDes03 = $('#eduShortDes03').val();
}
//Get work information
function addWorkInformation(x) {
    x.workPlace01 = $('#workPlace01').val();
    x.workTitle01 = $('#workTitle01').val();
    x.workNumberFrom01 = $('#workNumberFrom01').val();
    x.workNumberTo01 = $('#workNumberTo01').val();
    x.workShortDes01 = $('#workShortDes01').val();

    x.workPlace02 = $('#workPlace02').val();
    x.workTitle02 = $('#workTitle02').val();
    x.workNumberFrom02 = $('#workNumberFrom02').val();
    x.workNumberTo02 = $('#workNumberTo02').val();
    x.workShortDes02 = $('#workShortDes02').val();

    x.workPlace03 = $('#workPlace03').val();
    x.workTitle03 = $('#workTitle03').val();
    x.workNumberFrom03 = $('#workNumberFrom03').val();
    x.workNumberTo03 = $('#workNumberTo03').val();
    x.workShortDes03 = $('#workShortDes03').val();
}

// let x;
let m;
//Create CV and save to local storage
$('#createProfile').on('click', () => {
    localStorage.setItem('storeObj', JSON.stringify(x));
    m = JSON.parse(localStorage.getItem('storeObj'));
    console.log(m.fullName, 'created');
});
//Features page animation switch
$(document).ready(function () {
    FeaturesSwitch();
});

function FeaturesSwitch() {
    let feature01 = $('#Feature01');
    let feature02 = $('#Feature02');
    let feature03 = $('#Feature03');
    $('#featImg02').hide();
    $('#featImg03').hide();
    $(feature01).on('mouseover', () => {
        // console.log("01 active");
        $('#featImg02').hide();
        $('#featImg03').hide();
        $('#featImg01').show();
        $(feature02).removeClass('active');
        $(feature03).removeClass('active');
        $(feature01).addClass('active');
    })
    $(feature02).on('mouseover', () => {
        // console.log("02 active");
        $('#featImg01').hide();
        $('#featImg03').hide();
        $('#featImg02').show();
        $(feature01).removeClass('active');
        $(feature03).removeClass('active');
        $(feature02).addClass('active');
    })
    $(feature03).on('mouseover', () => {
        // console.log("03 active");
        $('#featImg01').hide();
        $('#featImg02').hide();
        $('#featImg03').show();
        $(feature01).removeClass('active');
        $(feature02).removeClass('active');
        $(feature03).addClass('active');
    })
}