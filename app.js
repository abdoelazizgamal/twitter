//Preloader
var preloader = document.querySelector(".loading-screen");
setTimeout(function()
    {
        preloader.classList.add('hidepre');
        setTimeout(function()
        {

            preloader.style.display = 'none';
        },1000);
    },3000) 
window.onload = function()
{

    //Dom Elements
    let mainPage = document.querySelector('.main-page');
    let loginPage = document.querySelector('.login-page');
    let signUpPage = document.querySelector('.signup-page');
    let feedsPage = document.querySelector(".feeds-page");
    let arrOfDoms = [mainPage,loginPage,signUpPage,feedsPage];
    //end pages
    let middleContent = document.querySelector(".middle-content");
    let brandToHomeLogin = document.getElementById('loginHome');
    let brandToHomeSign  = document.getElementById('signHome');
    let btnTop =document.querySelector('.btn-top');
    let loginModal = document.querySelector('.login-modal');
    let closeLoginModal = document.querySelector('.login-modal i');
    let loginFormBtn = document.querySelector('.login-form-btn');
    let postBtn = document.querySelector('.post-btn');
    let postBtn1 = document.querySelector('.post-btn1');
    let postWrapper = document.querySelector('.modal-wrapper');
    let postModal = document.querySelector('.modal');
    let closePostBtn = document.querySelector('.modal-header i');
    let modalPostBtn = document.querySelector('.modal-header button');
    let modalFooterPlus = document.querySelector('.modal-footer span');
    let modalInput =document.querySelector('.modal-input');
    let user = document.querySelector('.user');
    let sideBarWrapper = document.querySelector('.sidebar-wrapper');
    let sideBar = document.querySelector('.sidebar');
    let sideBarClose = document.querySelector('.sidebar-header i');
    let MessageBox  = document.querySelector('.message');
    let messageOpener = document.querySelector('.message-header');
    let toggle = document.querySelector('.toggle');
    let circle = document.querySelector('.circle');
    let showingWrapper = document.querySelector('.showing-wrapper');
    let preview = document.querySelector('.preview');
    let closePreview = document.querySelector('.showing-wrapper i');
    let logOut = document.querySelector('.logout');
    /******************************************************************/
    //MainPage
    //login
    let goToLoginPage = ()=>
    {
        for(i = 0 ; i < arrOfDoms.length ; i ++)
        {
            arrOfDoms[i].classList.remove('main-active-page');
            arrOfDoms[i].classList.remove('hidden-page');
            mainPage.classList.add('hidden-page');
            signUpPage.classList.add('hidden-page');
            feedsPage.classList.add('hidden-page');
            loginPage.classList.add('main-active-page');
        }
    };
    //signup
    let goToSignupPage = ()=>
    {
        for(i = 0 ; i < arrOfDoms.length ; i ++)
        {
            arrOfDoms[i].classList.remove('hidden-page');
            arrOfDoms[i].classList.remove('main-active-page');
            mainPage.classList.add('hidden-page');
            loginPage.classList.add('hidden-page');
            feedsPage.classList.add('hidden-page');
            signUpPage.classList.add('main-active-page');
        }
    };
    //mainpage
    let goToMainPage = ()=>
    {
        for(i = 0 ; i < arrOfDoms.length ; i ++)
        {
            arrOfDoms[i].classList.remove('main-active-page');
            arrOfDoms[i].classList.remove('hidden-page');
            loginPage.classList.add('hidden-page');
            signUpPage.classList.add('hidden-page');
            feedsPage.classList.add('hidden-page');
            mainPage.classList.add('main-active-page')
        }
    };
    //feeds Page
    let goToFeedsPage = ()=>
    {
        for(i = 0 ; i < arrOfDoms.length ; i ++)
        {
            arrOfDoms[i].classList.remove('main-active-page');
            arrOfDoms[i].classList.remove('hidden-page');
            mainPage.classList.add('hidden-page');
            signUpPage.classList.add('hidden-page');
            loginPage.classList.add('hidden-page');
            feedsPage.classList.add('main-active-page');
        }
    }
    //event listners click // forward Pages 
    middleContent.addEventListener('click',(e)=>{
        if( e.target.classList[0] === "log-in")
        {
            goToLoginPage();
        }
        if( e.target.classList[0] === "sign-up")
        {
            goToSignupPage();
        }
    });
    //log Out to main page
    logOut.addEventListener('click',()=>
    {
        goToMainPage();
    });
    //Back to main pages
    brandToHomeLogin.addEventListener('click',()=>
    {
         goToMainPage();
    });
    brandToHomeSign.addEventListener('click',()=>
    {
         goToMainPage();
    });
    //////////////////////////////////////////////////////////////////
    //Validation in the main Page
     btnTop.addEventListener('click',()=>
    {
        let  inputUserInfo = document.querySelector('.user-info');
        let  inputPasswordInfo = document.querySelector('.user-password');
        if (inputUserInfo.value == "scorpion" && inputPasswordInfo.value == "12345" )
        {
            goToFeedsPage()
        }
        else
        {
            goToLoginPage();
            loginModal.style.display='block';
        }
    });
    //login
    closeLoginModal.addEventListener('click',()=>
    {
        loginModal.style.display='none'
    })  
    loginFormBtn.addEventListener('click',()=>
    {
        let loginUserInfo = document.querySelector('.login-user-info');
        let loginPassword = document.querySelector('.login-password');
        if (loginUserInfo.value =="scorpion" && loginPassword.value == "12345" )
        {
            goToFeedsPage()
        }
        else
        {
            loginModal.style.display='block';
        }
    });
    // news feeds page
    //post Modal
    postBtn.addEventListener('click',()=>
    {
        postWrapper.classList.add('modal-wrapper-display');
        postModal.classList.add('modal-display')
    });
    postBtn1.addEventListener('click',()=>
    {
        postWrapper.classList.add('modal-wrapper-display');
        postModal.classList.add('modal-display')
    });
    closePostBtn.addEventListener('click',()=>
    {
        postWrapper.classList.remove('modal-wrapper-display');
        postModal.classList.remove('modal-display')
        if(modalInput.value !=='')
        {
            modalInput.value = "";
            changeOpacity(.5);
        }
    });
    // opacity abd blur 
    let changeOpacity = (x) =>
    {
        modalPostBtn.style.opacity=x;
        modalFooterPlus.style.opacity=x;
    };
    modalInput.addEventListener('input',(e)=>
    {
        if(e.target.value !== "")
        {
            changeOpacity(1);
        }
    });
    modalInput.addEventListener('blur',(e)=>
    {
        if(e.target.value == "")
        {
            changeOpacity(.5);
        } 
    })   
    // end opacity abd blur    
    // sidebar 
    user.addEventListener('click',()=>
    {
        sideBarWrapper.classList.add('sidebar-wrapper-display');
        sideBar.classList.add('sidebar-display');
    });
    sideBarClose.addEventListener('click',()=>
    {
        sideBarWrapper.classList.remove('sidebar-wrapper-display');
        sideBar.classList.remove('sidebar-display');
    });
    //Message Box
    messageOpener.addEventListener('click',()=>
    {
        MessageBox.classList.toggle('active');
    });
    //Dark Mode
    let darkElements1 = document.querySelectorAll('.dark-mode-1');
    let darkElements2 = document.querySelectorAll('.dark-mode-2');
    let lightTextElements = document.querySelectorAll('.light-text');
    let lightUsersElements = document.querySelectorAll('.light-user');
    let borderElements = document.querySelectorAll('.border');
    toggle.addEventListener('click', ()=>{
        circle.classList.toggle('move');
        Array.from(darkElements1).map(darkEl1 => darkEl1.classList.toggle('dark-1'));
        Array.from(darkElements2).map(darkEl2 => darkEl2.classList.toggle('dark-2'));
        Array.from(lightTextElements).map(lightEl => lightEl.classList.toggle('light'));
        Array.from(lightUsersElements).map(lightUEl => lightUEl.classList.toggle('light-txt'));
        Array.from(borderElements).map(borderEl => borderEl.classList.toggle('border-color'));
    });
    //preview Posts
    let postsImages = document.querySelectorAll('.post-img img');
    for(let i=0; i < postsImages.length; i++)
    {
        postsImages[i].addEventListener('click',function()
        {
            feedsPage.classList.add('blur');
            showingWrapper.classList.add('showing-wrapper-display');
            preview.classList.add('display');
            preview.src = this.src;

        });
    }
    closePreview.addEventListener('click',()=>
    {
        feedsPage.classList.remove('blur');
        preview.classList.remove('display');
        showingWrapper.classList.remove('showing-wrapper-display');
    });
    
}