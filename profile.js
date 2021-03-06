//On document ready get the object and fill the templates
$(document).ready(function () {
    m = JSON.parse(localStorage.getItem('storeObj'));
    FillTemplate()
});

// Hide profiles on start and open modal
// $('#profileOneBody').hide();
$('#profileTwoBody').hide();
$('#profileThreeBody').hide();
$('#profileFourBody').hide();
$('#profileFiveBody').hide();

$('#modalButton').show();

//modal nav bar shows and hides templates
$('#updateProfileButton').on('click', () => {
    //Profile 01 Tab
    if ($('#profile01-tab').hasClass('active')) {
        //Test to see if it is active
        console.log('Profile one activated');
        //Hide all profiles except this
        $('#profileTwoBody').hide();
        $('#profileThreeBody').hide();
        $('#profileFourBody').hide();
        $('#profileFiveBody').hide();
        $('#profileOneBody').show();
        //If first toggle active
        if (!$("#profile01 .switch-box:nth-child(1) .switch").hasClass("off")) {
            $("#profileOneBody h1, #profileOneBody h3, #profileOneBody i").addClass('no-color');
            $("#profileOneBody .smallestHr").addClass('no-color-border');
            $("#profileOneBody .progress-bar").addClass('no-color-background');
            $("#profileOneBody .prof-one-info a").addClass('text-dark');
        } else {
            $("#profileOneBody h1, #profileOneBody h3, #profileOneBody i").removeClass('no-color');
            $("#profileOneBody .smallestHr").removeClass('no-color-border');
            $("#profileOneBody .progress-bar").removeClass('no-color-background');
            $("#profileOneBody .prof-one-info a").removeClass('text-dark');
        }
        //If second toggle active
        if (!$("#profile01 .switch-box:nth-child(2) .switch").hasClass("off")) {
            $('#profOneProgress').addClass('display-none');
        } else {
            $('#profOneProgress').removeClass('display-none');
        }
        //If third toggle active
        if (!$("#profile01 .switch-box:nth-child(3) .switch").hasClass("off")) {
            $('#profOne').removeClass('display-none');
        } else {
            $('#profOne').addClass('display-none');
        }
        
    }
    //Profile 02 Tab
    if ($('#profile02-tab').hasClass('active')) {
        console.log('Profile two activated');
        $('#profileOneBody').hide();
        $('#profileFourBody').hide();
        $('#profileThreeBody').hide();
        $('#profileFiveBody').hide();
        $('#profileTwoBody').show();
        //If first toggle active
        if (!$("#profile02 .switch-box:nth-child(1) .switch").hasClass("off")) {
            $('#profTwoProgress').addClass('d-none');
        } else {
            $('#profTwoProgress').removeClass('d-none');
        }
        //If second toggle active
        if (!$("#profile02 .switch-box:nth-child(2) .switch").hasClass("off")) {
            $('#AboutBottom').removeClass('d-none');
            $('#AddConTop').removeClass('d-none');
            $('#AboutTop').addClass('d-none');
            $('#AddConBottom').addClass('d-none');
        } else {
            $('#AboutTop').removeClass('d-none');
            $('#AddConBottom').removeClass('d-none');
            $('#AboutBottom').addClass('d-none');
            $('#AddConTop').addClass('d-none');
        }
        //If third toggle active
        if (!$("#profile02 .switch-box:nth-child(3) .switch").hasClass("off")) {
            $('#EduTop').removeClass('d-none');
            $('#EduBottom').addClass('d-none');
        } else {
            $('#EduBottom').removeClass('d-none');
            $('#EduTop').addClass('d-none');
        }
        //If fourth toggle active
        if (!$("#profile02 .switch-box:nth-child(4) .switch").hasClass("off")) {
            $('#profileTwoBody #profTwo').removeClass('display-none');
            $('#profileTwoBody #sectionOne').addClass('d-flex justify-content-around align-items-center');
            $('#profileTwoBody #headerWrapper').removeClass('mx-auto m-5');
        } else {
            $('#profileTwoBody #profTwo').addClass('display-none');
            $('#profileTwoBody #sectionOne').removeClass('d-flex justify-content-around align-items-center');
            $('#profileTwoBody #headerWrapper').addClass('mx-auto m-5');
        }
    }
    // if ($('#profile03-tab').hasClass('active')) {
    //     console.log('Profile three activated');
    //     $('#profileOneBody').hide();
    //     $('#profileTwoBody').hide();
    //     $('#profileFourBody').hide();
    //     $('#profileFiveBody').hide();
    //     $('#profileThreeBody').show();
    // }
    //Profile 04 Tab
    if ($('#profile04-tab').hasClass('active')) {
        console.log('Profile four activated');
        $('#profileOneBody').hide();
        $('#profileTwoBody').hide();
        $('#profileThreeBody').hide();
        $('#profileFiveBody').hide();
        $('#profileFourBody').show();

        if (!$("#profile04 .switch-box:nth-child(1) .switch").hasClass("off")) {
            $('#profFour').addClass('display-none');
            $('#topInnerSection').removeClass('col-lg-9 col-md-8');
            $('#topInnerSection').addClass('col-lg-12 col-md-12');
        } else {
            $('#profFour').removeClass('display-none');
            $('#topInnerSection').addClass('col-lg-9  col-md-8');
            $('#topInnerSection').removeClass('col-lg-12 col-md-12');
        }
        //If second toggle active
        if (!$("#profile04 .switch-box:nth-child(2) .switch").hasClass("off")) {
            $('#04progressBars').removeClass('d-none');
            $('#04progressButtons').addClass('d-none');
        } else {
            $('#04progressButtons').removeClass('d-none');
            $('#04progressBars').addClass('d-none');
        }
        //If color picked here
        $('.palette').on('click',(e)=>{
            ColorPicker(e)
        })
    }
    // if ($('#profile05-tab').hasClass('active')) {
    //     console.log('Profile five activated');
    //     $('#profileOneBody').hide();
    //     $('#profileTwoBody').hide();
    //     $('#profileThreeBody').hide();
    //     $('#profileFourBody').hide();
    //     $('#profileFiveBody').show();
    // }
});

//Color picker function
function ColorPicker(e){
    let currentTopColor = e.currentTarget.style.backgroundColor;
    let currentMiddleColor = e.currentTarget.style.borderColor;
    $('#topSection').css('background-color',currentTopColor);
    $('#middleSection').css('background-color',currentMiddleColor);
}
//Print Button
$('#printProfileButton').on('click', () => {
    // $('#exampleModal').modal('hide');
    let modal = $('#exampleModalLabel');
    $(modal).modal('hide');
    setTimeout(() => {
        window.print();
    }, 500);
});
//Switch box toggle
$('.switch-box').on('click', (e) => {
    let sw = $(e.currentTarget.children[1]);
    console.log(sw);
    // let sw = $('.switch');
    if ($(sw).hasClass('off')) {
        $(sw).removeClass('off');
    } else {
        $(sw).addClass('off');
    }
});

//m for the Sign up form
//m for global Marjan - user 0
//let m = users[0];
//Batman
//let b = users[1];
//Elon Musk
//let e = users[2];
//IronMan
//let i = users[3];

function FillTemplate() {
    $('.fullNameClass').text(m.fullName);
    $('.titleClass').text(m.title);
    $('.aboutMeClass').text(m.aboutMe);

    $('.workPlace01Class').text(m.workPlace01 + ' | ' + m.workNumberFrom01 + " to " + m.workNumberTo01);
    $('.workTitle01Class').text(m.workTitle01);
    $('.workInfo01Class').text(m.workShortDes01);

    $('.workPlace02Class').text(m.workPlace02 + ' | ' + m.workNumberFrom02 + " to " + m.workNumberTo02);
    $('.workTitle02Class').text(m.workTitle02);
    $('.workInfo02Class').text(m.workShortDes02);

    $('.workPlace03Class').text(m.workPlace03 + ' | ' + m.workNumberFrom03 + " to " + m.workNumberTo03);
    $('.workTitle03Class').text(m.workTitle03);
    $('.workInfo03Class').text(m.workShortDes03);

    $('.eduPlace01Class').text(m.eduPlace01 + ' | ' + m.eduNumberFrom01 + " to " + m.eduNumberTo01);
    $('.eduTitle01Class').text(m.eduTitle01);
    $('.eduInfo01Class').text(m.eduShortDes01);

    $('.eduPlace02Class').text(m.eduPlace02 + ' | ' + m.eduNumberFrom02 + " to " + m.eduNumberTo02);
    $('.eduTitle02Class').text(m.eduTitle02);
    $('.eduInfo02Class').text(m.eduShortDes02);

    $('.eduPlace03Class').text(m.eduPlace03 + ' | ' + m.eduNumberFrom03 + " to " + m.eduNumberTo03);
    $('.eduTitle03Class').text(m.eduTitle03);
    $('.eduInfo03Class').text(m.eduShortDes03);

    $('.addressClass').text(m.address);
    $('.dateOfBirthClass').text(m.dateOfBirth);
    $('.placeOfBirthClass').text(m.placeOfBirth);
    $('.languagesClass').text(m.languages);
    $('.genderClass').text(m.gender);
    $('.emailClass').html(`<a target="_blank" href="mailto:${m.peremail}">${m.peremail}</a>`);
    $('.phoneClass').html(`<a href="telto:${m.phoneNumber}">${m.phoneNumber}</a>`);
    $('.perwebClass').html(`<a target="_blank" href="${m.personalWeb}">${m.personalWeb}</a>`);
    $('.upworkAccClass').html(`<a target="_blank" href="${m.upworkAcc}">Upwork Profile</a>`);
    $('.linkedinAccClass').html(`<a target="_blank" href="${m.linkedinAcc}">Linkedin Profile</a>`);

    $('.skill01Class').text(m.skill1);
    $('.skillOnePercentClass').html(`<div class="progress"><div class="progress-bar" role="progressbar"
    aria-valuenow="${m.skill1Percent}" aria-valuemin="0" aria-valuemax="100" style="width: ${m.skill1Percent}%">${m.skill1Percent}%</div>
</div>`);
    $('.skill02Class').text(m.skill2);
    $('.skill02PercentClass').html(`<div class="progress"><div class="progress-bar" role="progressbar"
    aria-valuenow="${m.skill2Percent}" aria-valuemin="0" aria-valuemax="100" style="width: ${m.skill2Percent}%">${m.skill2Percent}%</div>
</div>`);
    $('.skill03Class').text(m.skill3);
    $('.skill03PercentClass').html(`<div class="progress"><div class="progress-bar" role="progressbar"
    aria-valuenow="${m.skill3Percent}" aria-valuemin="0" aria-valuemax="100" style="width: ${m.skill3Percent}%">${m.skill3Percent}%</div>
</div>`);
    $('.skill04Class').text(m.skill4);
    $('.skill04PercentClass').html(`<div class="progress"><div class="progress-bar" role="progressbar"
    aria-valuenow="${m.skill4Percent}" aria-valuemin="0" aria-valuemax="100" style="width: ${m.skill4Percent}%">${m.skill4Percent}%</div>
</div>`);
    $('.skill05Class').text(m.skill5);
    $('.skill05PercentClass').html(`<div class="progress"><div class="progress-bar" role="progressbar"
    aria-valuenow="${m.skill5Percent}" aria-valuemin="0" aria-valuemax="100" style="width: ${m.skill5Percent}%">${m.skill5Percent}%</div>
</div>`);
}