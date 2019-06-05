//On document ready get the object and fill the templates
$( document ).ready(function() {
    m = JSON.parse(localStorage.getItem('storeObj'));
    editTemplate()
});
function editTemplate(){
    // Edit sign up info
    $('#fullName').val(m.fullName);
    $('#email').val(m.peremail);
    // Edit additional info
    $('#title').val(m.title);
    $('#address').val(m.address);
    $('#dateOfBirth').val(m.dateOfBirth);
    $('#placeOfBirth').val(m.placeOfBirth);
    $('#languages').val(m.languages);
    $('#aboutMe').val(m.aboutMe);
    $('#personalWeb').val(m.personalWeb);
    $('#upworkAcc').val(m.upworkAcc);
    $('#linkedinAcc').val(m.linkedinAcc);
    $('#phoneNumber').val(m.phoneNumber);
    $('#gender').val(m.gender);
    // Edit education info
    $('#eduPlace01').val(m.eduPlace01);
    $('#eduTitle01').val(m.eduTitle01);
    $('#eduNumberFrom01').val(m.eduNumberFrom01);
    $('#eduNumberTo01').val(m.eduNumberTo01);
    $('#eduShortDes01').val(m.eduShortDes01);

    $('#eduPlace02').val(m.eduPlace02);
    $('#eduTitle02').val(m.eduTitle02);
    $('#eduNumberFrom02').val(m.eduNumberFrom02);
    $('#eduNumberTo02').val(m.eduNumberTo02);
    $('#eduShortDes02').val(m.eduShortDes02);

    $('#eduPlace03').val(m.eduPlace03);
    $('#eduTitle03').val(m.eduTitle03);
    $('#eduNumberFrom03').val(m.eduNumberFrom03);
    $('#eduNumberTo03').val(m.eduNumberTo03);
    $('#eduShortDes03').val(m.eduShortDes03);
    // Edit work info
    $('#workPlace01').val(m.workPlace01);
    $('#workTitle01').val(m.workTitle01);
    $('#workNumberFrom01').val(m.workNumberFrom01);
    $('#workNumberTo01').val(m.workNumberTo01);
    $('#workShortDes01').val(m.workShortDes01);

    $('#workPlace02').val(m.workPlace02);
    $('#workTitle02').val(m.workTitle02);
    $('#workNumberFrom02').val(m.workNumberFrom02);
    $('#workNumberTo02').val(m.workNumberTo02);
    $('#workShortDes02').val(m.workShortDes02);

    $('#workPlace03').val(m.workPlace03);
    $('#workTitle03').val(m.workTitle03);
    $('#workNumberFrom03').val(m.workNumberFrom03);
    $('#workNumberTo03').val(m.workNumberTo03);
    $('#workShortDes03').val(m.workShortDes03);
    // Edit skill info
    $('#skill1').val(m.skill1);
    $('#skill1Percent').val(m.skill1Percent);
    $('#skill2').val(m.skill2);
    $('#skill2Percent').val(m.skill2Percent);
    $('#skill3').val(m.skill3);
    $('#skill3Percent').val(m.skill3Percent);
    $('#skill4').val(m.skill4);
    $('#skill4Percent').val(m.skill4Percent);
    $('#skill5').val(m.skill5);
    $('#skill5Percent').val(m.skill5Percent);
}