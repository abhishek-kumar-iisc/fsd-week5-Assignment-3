console.log("I am inside the js");

/*let url = ["https://fsd1.herokuapp.com/users/1/details", "https://fsd1.herokuapp.com/users/1/media",
    "https://fsd1.herokuapp.com/users/1/followers/suggestions", "https://fsd1.herokuapp.com/users/1/following/tweets",
    "https://fsd1.herokuapp.com/users/1/tweets",
    "https://fsd1.herokuapp.com/users/1/following",
    "https://fsd1.herokuapp.com/users/1/followers",
];
*/
let urlDetails = "https://fsd1.herokuapp.com/users/1/details";
let urlMedia = "https://fsd1.herokuapp.com/users/1/media";
let urlSuggestions = "https://fsd1.herokuapp.com/users/1/followers/suggestions";
let urlTweets = "https://fsd1.herokuapp.com/users/1/tweets";
let urlfollowing = "https://fsd1.herokuapp.com/users/1/following";
let urlFollowers = "https://fsd1.herokuapp.com/users/1/followers";


/*=========================================================================================================*/
/* Update the user profile dataisl */
let promiseDetails = fetch(urlDetails);
/*promiseDetails.then(response => response.json())
    .then(data => updateProfileDetaisl(data.data));*/


/*promiseDetails.then(res => res.json()).then(data =>{
        var div = document.querySelector(".username");
        console.log(data.data.user_name);
        console.log(data.data.user_email);
        console.log(div);
        div.innerText = data.data.user_name;
        var div1 = document.querySelector(".userid");
        console.log(div1);
        div1.innnerText = data.data.user_email;
        })*/

promiseDetails.then(res => res.json()).then(data => {
    var div = document.querySelector(".username");
    console.log(data.data.user_name);
    console.log(data.data.user_email);
    console.log(div);
    div.innerText = data.data.user_name;
    var div1 = document.querySelector(".rowprofile-1 .logid");
    console.log(div1);
    div1.innnerText = data.data.user_email;
    document.querySelector(".box:nth-of-type(1) p:nth-of-type(2)").innerText = data.data.stats.tweets;
    document.querySelector(".box:nth-of-type(2) p:nth-of-type(2)").innerText = data.data.stats.followers;
    document.querySelector(".box:nth-of-type(3) p:nth-of-type(2)").innerText = data.data.stats.following;
    document.querySelector(".rowprofile-1 .email").innerText = data.data.user_email;
    var dateObj = new Date(data.data.user_created_at);
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();

    newdate = year + "/" + month + "/" + day;
    document.querySelector(".rowprofile-1 .joined").innerText = "Joined" + newdate;
    var dateObj = new Date(data.data.user_birthday);
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();

    newdate = year + "/" + month + "/" + day;
    document.querySelector(".rowprofile-1 .DOB").innerText = "BirthDay-" + newdate;
})

function updateProfileDetaisl(data) {
    var div = document.querySelector(".username");
    console.log(data.data.user_name);
    console.log(data.data.user_email);
    console.log(div);
    div.innerText = data.data.user_name;
    var div1 = document.querySelector(".userid");
    console.log(div1);
    div1.innnerText = data.data.user_email;
    document.querySelector(".box:nth-of-type(1) p:nth-of-type(2)").innerText = data.data.stats.tweets;
    document.querySelector(".box:nth-of-type(2) p:nth-of-type(2)").innerText = data.data.stats.followers;
    document.querySelector(".box:nth-of-type(3) p:nth-of-type(2)").innerText = data.data.stats.following;
    document.querySelector(".rowprofile-1 .useremail").innerText = data.data.user_email;
}

/*============================================================================================================*/
/* Updating the suggestion DOM.-*/
let promiseSuggestions = fetch(urlSuggestions);

promiseSuggestions.then(res => res.json()).then(data => updateSuggestions(data.data));

function updateSuggestions(data) {
    /*updating the suggestion */
    /*Select the first element*/
    var div = document.querySelector(".user .user-details .userid");
    div.innerText = data[0].user_email;;
    var div = document.querySelector(".user .user-details .username");
    div.innerText = data[0].user_name;
    var div = document.querySelector(".user .user-details .user-avatar");
    /*var img = document.createElement("img");
      img.src =*/
    /*Select the second elements*/
    var div = document.querySelector(".user:nth-of-type(2) .user-details .userid");
    div.innerText = data[1].user_email;
    var div = document.querySelector(".user:nth-of-type(2) .user-details .username");
    div.innerText = data[1].user_name;
    var div = document.querySelector(".user:nth-of-type(2) .user-details .user-avatar");
    /*Selcting the third elements*/
    var div = document.querySelector(".user:nth-of-type(3) .user-details .userid");
    div.innerText = data[2].user_email;
    var div = document.querySelector(".user:nth-of-type(3) .user-details .username");
    div.innerText = data[2].user_name;
    var div = document.querySelector(".user:nth-of-type(3) .user-details .user-avatar");

    /*var userdiv = document.querySelector(".follow-body");
    var newdiv = document.createElement("user");
    var newdiv1 = userdiv.appendChild(newdiv);
    newdiv1.appendChild(".user")*/
}

/*============================================================================================================*/
/*Updating the tweets made by the users*/
let promiseTweets = fetch(urlTweets);

/*promiseTweets.then(res => res.json()).then(data => updateTweets(data.data)); */

function updateTweets(data) {
    /*Updating the comment header*/
    var div = document.querySelector(".row1:nth-of-type(2) .comment-header .box span:nth-of-type(1)");
    div.innerText = data[0].user.full_name;
    var div = document.querySelector(".row1:nth-of-type(2) .comment-header .box span:nth-of-type(2)");
    div.innerText = data[0].user.user_email;
    var div = document.querySelector(".row1:nth-of-type(2) .comment-header .box span:nth-of-type(3)");
    var currentTime = Date();
    var tweetTime = Date(1555500072050);
    console.log(currentTime);
    console.log(tweetTime);
    div.innerText = "10hr";

    /*Updating the commnet-body*/
    var div = document.querySelector(".row1:nth-of-type(2) .comment-body p");
    div.innerText = data[0].text;
    /*Updating the comment-footer*/
    var div = document.querySelector(".row1:nth-of-type(2) .comment-footer div:nth-of-type(1) span");
    div.innerText = data[0].stats.comments;
    var div = document.querySelector(".row1:nth-of-type(2) .comment-footer div:nth-of-type(2) span");
    div.innerText = data[0].stats.retweets;
    var div = document.querySelector(".row1:nth-of-type(2) .comment-footer div:nth-of-type(3) span");
    div.innerText = data[0].stats.likes;
    /*-------------------------------------------------------------------------------------------------------------*/
    /*Updating the comment header*/
    var div = document.querySelector(".row1:nth-of-type(3) .comment-header .box span:nth-of-type(1)");
    div.innerText = data[0].user.full_name;
    var div = document.querySelector(".row1:nth-of-type(3) .comment-header .box span:nth-of-type(2)");
    div.innerText = data[0].user.user_email;
    var div = document.querySelector(".row1:nth-of-type(3) .comment-header .box span:nth-of-type(3)");
    var currentTime = Date();
    var tweetTime = Date(1555500072050);
    console.log(currentTime);
    console.log(tweetTime);
    div.innerText = "10hr";

    /*Updating the commnet-body*/
    var div = document.querySelector(".row1:nth-of-type(3) .comment-body p");
    div.innerText = data[0].text;
    /*Updating the comment-footer*/
    var div = document.querySelector(".row1:nth-of-type(3) .comment-footer div:nth-of-type(1) span");
    div.innerText = data[0].stats.comments;
    var div = document.querySelector(".row1:nth-of-type(3) .comment-footer div:nth-of-type(2) span");
    div.innerText = data[0].stats.retweets;
    var div = document.querySelector(".row1:nth-of-type(3) .comment-footer div:nth-of-type(3) span");
    div.innerText = data[0].stats.likes;
    /*------------------------------------------------------------------------------------------------------------------*/
    var div = document.querySelector(".row1:nth-of-type(4) .comment-header .box span:nth-of-type(1)");
    div.innerText = data[0].user.full_name;
    var div = document.querySelector(".row1:nth-of-type(4) .comment-header .box span:nth-of-type(2)");
    div.innerText = data[0].user.user_email;
    var div = document.querySelector(".row1:nth-of-type(4) .comment-header .box span:nth-of-type(3)");
    var currentTime = Date();
    var tweetTime = Date(1555500072050);
    console.log(currentTime);
    console.log(tweetTime);
    div.innerText = "10hr";

    /*Updating the commnet-body*/
    var div = document.querySelector(".row1:nth-of-type(4) .comment-body p");
    div.innerText = data[0].text;
    var div = document.querySelector(".row1:nth-of-type(4) .comment-body img:nth-of-type(1)");
    console.log(data[0].entities.media[0].link);
    //div.src = data[0].entities.media[0].url;
    var div = document.querySelector(".row1:nth-of-type(4) .comment-body video:nth-of-type(1)");
    console.log(data[0].entities.media[0].link);
    div.src = data[0].entities.media[0].link;
    /*Updating the comment-footer*/
    var div = document.querySelector(".row1:nth-of-type(4) .comment-footer div:nth-of-type(1) span");
    div.innerText = data[0].stats.comments;
    var div = document.querySelector(".row1:nth-of-type(3) .comment-footer div:nth-of-type(2) span");
    div.innerText = data[0].stats.retweets;
    var div = document.querySelector(".row1:nth-of-type(4) .comment-footer div:nth-of-type(3) span");
    div.innerText = data[0].stats.likes;
    /*-------------------------------------------------------------------------------------------------------------*/

}

/*========================================================================================================================================*/
/* -------------------------Now Updating the Tweet from the following DOM ---------------------------------------------------------*/

let promiseFollowers = fetch(urlFollowers);

promiseFollowers.then(res => res.json()).then(data => updateFollowings(data.data));

function updateFollowings(data) {
    var div = document.querySelector(".mybox1 .profile-box .following .header");
    div.src = data[0].cover_img;
    var div = document.querySelector(".mybox1 .profile-box .following .body .left");
    div.src = data[0].profile_img;
    var div = document.querySelector(".mybox1 .profile-box .following .body .right .username");
    div.innerText = data[0].user_name;
    var div = document.querySelector(".mybox1 .profile-box .following .body .right .userid");
    div.innerText = data[0].user_email;
    var div = document.querySelector(".mybox1 .profile-box .following .stats");
    div.innerText = data[0].user_bio;
    /*-----------------------------------------------------------------------------*/
    var div = document.querySelector(".mybox1 .profile-box:nth-of-type(2) .following .header");
    div.src = data[1].cover_img;
    var div = document.querySelector(".mybox1 .profile-box:nth-of-type(2) .following .body .left");
    div.src = data[1].profile_img;
    var div = document.querySelector(".mybox1 .profile-box:nth-of-type(2) .following .body .right .username");
    div.innerText = data[1].user_name;
    var div = document.querySelector(".mybox1 .profile-box:nth-of-type(2) .following .body .right .userid");
    div.innerText = data[1].user_email;
    var div = document.querySelector(".mybox1 .profile-box:nth-of-type(2) .following .stats");
    div.innerText = data[1].user_bio;
    /*-----------------------------------------------------------------------------------------*/

    var div = document.querySelector(".mybox1:nth-of-type(3) .profile-box .following .header");
    div.src = data[2].cover_img;
    var div = document.querySelector(".mybox1:nth-of-type(3) .profile-box .following .body .left");
    div.src = data[2].profile_img;
    var div = document.querySelector(".mybox1:nth-of-type(3) .profile-box .following .body .right .username");
    div.innerText = data[2].user_name;
    var div = document.querySelector(".mybox1:nth-of-type(3) .profile-box .following .body .right .userid");
    div.innerText = data[2].user_email;
    var div = document.querySelector(".mybox1:nth-of-type(3) .profile-box .following .stats");
    div.innerText = data[2].user_bio;
    /*-----------------------------------------------------------------------------*/
    var div = document.querySelector(".mybox1:nth-of-type(3) .profile-box:nth-of-type(2) .following .header");
    div.src = data[3].cover_img;
    var div = document.querySelector(".mybox1:nth-of-type(3) .profile-box:nth-of-type(2) .following .body .left");
    div.src = data[3].profile_img;
    var div = document.querySelector(".mybox1:nth-of-type(3) .profile-box:nth-of-type(2) .following .body .right .username");
    div.innerText = data[3].user_name;
    var div = document.querySelector(".mybox1:nth-of-type(3) .profile-box:nth-of-type(2) .following .body .right .userid");
    div.innerText = data[3].user_email;
    var div = document.querySelector(".mybox1:nth-of-type(3) .profile-box:nth-of-type(2) .following .stats");
    div.innerText = data[3].user_bio;
    /*-----------------------------------------------------------------------------------------*/
    var div = document.querySelector(".mybox1:nth-of-type(4) .profile-box .following .header");
    div.src = data[4].cover_img;
    var div = document.querySelector(".mybox1:nth-of-type(4) .profile-box .following .body .left");
    div.src = data[4].profile_img;
    var div = document.querySelector(".mybox1:nth-of-type(4) .profile-box .following .body .right .username");
    div.innerText = data[4].user_name;
    var div = document.querySelector(".mybox1:nth-of-type(4) .profile-box .following .body .right .userid");
    div.innerText = data[4].user_email;
    var div = document.querySelector(".mybox1:nth-of-type(4) .profile-box .following .stats");
    div.innerText = data[4].user_bio;
    /*-----------------------------------------------------------------------------*/
    var div = document.querySelector(".mybox1:nth-of-type(4) .profile-box:nth-of-type(2) .following .header");
    div.src = data[5].cover_img;
    var div = document.querySelector(".mybox1:nth-of-type(4) .profile-box:nth-of-type(2) .following .body .left");
    div.src = data[5].profile_img;
    var div = document.querySelector(".mybox1:nth-of-type(4) .profile-box:nth-of-type(2) .following .body .right .username");
    div.innerText = data[5].user_name;
    var div = document.querySelector(".mybox1:nth-of-type(4) .profile-box:nth-of-type(2) .following .body .right .userid");
    div.innerText = data[5].user_email;
    var div = document.querySelector(".mybox1:nth-of-type(4) .profile-box:nth-of-type(2) .following .stats");
    div.innerText = data[5].user_bio;
    /*-----------------------------------------------------------------------------------------*/
    var div = document.querySelector(".mybox1:nth-of-type(5) .profile-box .following .header");
    div.src = data[6].cover_img;
    var div = document.querySelector(".mybox1:nth-of-type(5) .profile-box .following .body .left");
    div.src = data[6].profile_img;
    var div = document.querySelector(".mybox1:nth-of-type(5) .profile-box .following .body .right .username");
    div.innerText = data[6].user_name;
    var div = document.querySelector(".mybox1:nth-of-type(5) .profile-box .following .body .right .userid");
    div.innerText = data[6].user_email;
    var div = document.querySelector(".mybox1:nth-of-type(5) .profile-box .following .stats");
    div.innerText = data[6].user_bio;
    /*-----------------------------------------------------------------------------*/
    var div = document.querySelector(".mybox1:nth-of-type(5) .profile-box:nth-of-type(2) .following .header");
    div.src = data[7].cover_img;
    var div = document.querySelector(".mybox1:nth-of-type(5) .profile-box:nth-of-type(2) .following .body .left");
    div.src = data[7].profile_img;
    var div = document.querySelector(".mybox1:nth-of-type(5) .profile-box:nth-of-type(2) .following .body .right .username");
    div.innerText = data[7].user_name;
    var div = document.querySelector(".mybox1:nth-of-type(5) .profile-box:nth-of-type(2) .following .body .right .userid");
    div.innerText = data[7].user_email;
    var div = document.querySelector(".mybox1:nth-of-type(5) .profile-box:nth-of-type(2) .following .stats");
    div.innerText = data[7].user_bio;
    /*-----------------------------------------------------------------------------------------*/
}