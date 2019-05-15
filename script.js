class Profile {
    constructor(fullName,peremail,title,address,dateOfBirth,placeOfBirth,languages,gender,aboutMe,skill1,skill1Percent){
        this.fullName = fullName,
        this.peremail = peremail,
        this.title = title,
        this.address = address,
        this.dateOfBirth = dateOfBirth,
        this.placeOfBirth = placeOfBirth,
        this.languages = languages,
        this.gender = gender,
        this.aboutMe = aboutMe,
        this.skill1 = skill1,
        this.skill1Percent = skill1Percent
    }
    skills(){
        return skill1name + skill1Percent
    }
}
//test new object
let marjan = new Profile('Marjan Ugrinovski','marjan.ugrinovski@yahoo.com','Front end developer','Evtim Sprostranov 34/1-2','28.10.1991','Skopje, Macedonia','Macedonian, English','male','Front end designer/developer at Purple Dot in Skopje, Macedonia','HTML & CSS','100');
// console.log(marjan);

//Hiding forms from start
$('#additionalInformation').hide();
$('#eduInformation').hide();

//Sign up button
$('#signUpBtn').on('click',()=>{
    fullName = $('#fullName').val();
    personalEmail = $('#email').val();
    // console.log(fullName, personalEmail)
    createProfile(personalEmail)
    $('#additionalInformation').show();
    // console.log(personalEmail)
});

function addAdditionalInformation(personalEmail){
    persEmail.title = $('#title').val()
    persEmail.address = $('#address').val()
    persEmail.dateOfBirth = $('#dateOfBirth').val()
    persEmail.placeOfBirth = $('#placeOfBirth').val()
    persEmail.languages = $('#languages').val()
    persEmail.aboutMe = $('#aboutMe').val()
    persEmail.skill1 = $('#skill1').val()
    persEmail.skill1Percent = $('#skill1Percent').val()
    console.log(persEmail.languages)
    return persEmail;
}
$('#eduNextBtn').on('click', ()=>{
    addAdditionalInformation(personalEmail)
    $('#eduInformation').show();
});

// let testEmail;
//Creating new profile based on email because its authentic
function createProfile(personalEmail){
    persEmail = new Profile(fullName,personalEmail);
    console.log(persEmail);
}
//Adds additional information to object

//Adds Education info to object
function addEduInformation(personalEmail){

}

$('#nextBtn').on('click',()=>{
    $('body').empty();
    $('body').append(`<!-- Section one -->
    <div class="container shadow bg-white rounded">
        <div id="secOneBackground" class="row alignCenter">
            <div id="profileImgWrapper">
                <img id="secOneProfile" src="img/mu.jpg" class="rounded">
                <div id="secOneFullName" class="alignCenter">${persEmail.fullName}</div>
                <div id="secOneTitle">${persEmail.title}</div>
            </div>
        </div>
        <div class="row" id="secOneAboutSection">
            <div class="col-7" id="secOneAbout">
            ${persEmail.aboutMe}
            </div>
            <div class="col-5" id="secOneBasicInfo">
                <Address>
                        <strong>Address:</strong><div id="sampleOneAddress">${persEmail.address}</div><br>
                        <strong>Date of Birth:</strong><div id="sampleOneDateOfBirth">${persEmail.dateOfBirth}</div><br>
                        <strong>Place of Birth:</strong><div id="sampleOnePlaceOfBirth">${persEmail.placeOfBirth}</div><br>
                        <strong>Languages:</strong><div id="sampleOneLanguages">${persEmail.languages}</div><br>
                        <strong>Gender:</strong><div id="sampleOneGender">${persEmail.gender}</div>
                </Address>
            </div>
        </div>
    </div>
    <div class="container shadow bg-white rounded">
        <div id="secTwo" class="row no-padding">
            <div id="progressBar" class="col-6">
                <p>Adobe Illustrator</p>
                <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>
                </div>
                <p>Adobe Photoshop</p>
                <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 55%"></div>
                </div>
                <p>HTML 5 & CSS 3</p>
                <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 25%"></div>
                </div>
                <p>Wordpress</p>
                <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
                </div>
                <p>JavaScript</p>
                <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 90%"></div>
                </div>
            </div>
            <div id="secTwoBackground" class="col-6">

            </div>
        </div>
    </div>
    <div class="container shadow bg-white rounded">
        <div id="secThreeExperience" class="row">
            <div class="col-12">Work Experience</div>
            <div class="col-12 row work-wrapper">
                <div class="col-2">2017 to present</div>
                <div class="col-10">
                    <div>Graphic Designer - Voyage</div>
                    <div>Design articles for magazine & posters. Design weekly cover photos for Voyage websites.</div>
                </div>
            </div>
            <div class="col-12 row work-wrapper">
                <div class="col-2">2014 to present</div>
                <div class="col-10">
                    <div>HTML/CSS/Wordpress & Graphic Design - 42 Studios & UpWork</div>
                    <div>Design websites in HTML, CSS and WordPress. Graphic design for logo, business card, poster, brochure in Adobe Illustrator and Photoshop.</div>
                </div>
            </div>
            <div class="col-12 row work-wrapper">
                <div class="col-2">2016-2016</div>
                <div class="col-10">
                    <div>Marketing and Sales assistant - Genel Canon</div>
                    <div>E-mail and Social Media Marketing. Web administrator for new posts, products and gallery. Internet and phone sales.</div>
                </div>
            </div>
        </div>
    </div>
    <div class="container shadow bg-white rounded">
        <div id="secThreeEducation" class="row">
                <div class="col-12">Work Experience</div>
                <div class="col-12 row work-wrapper">
                    <div class="col-2">2017-2017</div>
                    <div class="col-10">
                        <div>HTML5 with JavaScript and CSS3 - Semos Education</div>
                        <div>Microsoft Official Course 70-480. Programming in HTML5 with JavaScript and CSS3.

                            </div>
                    </div>
                </div>
                <div class="col-12 row work-wrapper">
                    <div class="col-2">2016-2016</div>
                    <div class="col-10">
                        <div>Graphic design & Illustrator - Brainster</div>
                        <div>Advanced course for learning designer software. Adobe Photoshop and Illustrator.</div>
                    </div>
                </div>
                <div class="col-12 row work-wrapper">
                    <div class="col-2">2010-2013</div>
                    <div class="col-10">
                        <div>Human Resource Management - UTMS Skopje</div>
                        <div>Team building, business communication, employment, time management, career management.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>`)
})