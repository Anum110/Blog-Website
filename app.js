const express = require("express");
const bodyParser=require("body-parser");
const ejs= require("ejs");
const _ = require("lodash");

const homeStartingContent="Welcome to our Blog!Discover a world of inspiration, knowledge, and insights. Our blog is dedicated to bringing you captivating articles, informative guides, and thought-provoking content on a wide range of topics. Whether you're a passionate reader, a curious learner, or someone seeking practical tips, our blog is here to cater to your interests.Explore our carefully curated collection of articles written by experts in their fields. From technology and science to art and culture, we cover it all. Our team is committed to delivering engaging and well-researched content that will enrich your mind and broaden your horizons.Join our vibrant community of readers and contributors. Share your thoughts, leave comments, and engage in meaningful discussions. We believe in the power of knowledge-sharing and fostering a supportive environment for learning.Stay up-to-date with the latest posts by subscribing to our newsletter. Be the first to receive new articles, exclusive content, and special offers straight to your inbox.Thank you for visiting our blog. Start exploring and let the journey of discovery begin!"
const aboutContent= "About Us Welcome to [Your Blog Name]! We are a passionate team of writers and enthusiasts dedicated to creating a platform where knowledge, ideas, and inspiration converge. Our mission is to provide valuable and engaging content that caters to a diverse range of interests. We believe in the power of words to educate, entertain, and empower individuals, and it is our goal to make a positive impact through our blog. At [Your Blog Name], we strive to deliver high-quality articles that are well-researched, informative, and thought-provoking. Our team consists of experts and enthusiasts from various fields, ensuring a multidisciplinary approach to our content. We are committed to covering a wide array of topics, including technology, science, health, lifestyle, arts, culture, and more. Whether you're seeking practical advice, in-depth analysis, or simply looking to indulge in captivating stories, you'll find it all here. We value our readers and aim to create a vibrant community of like-minded individuals. We encourage you to engage with our content, leave comments, and share your thoughts. Your feedback is essential to us, as it helps us improve and cater to your interests. Join us on this journey of exploration and learning. Stay connected with us through our newsletter and social media channels to receive regular updates, exclusive content, and behind-the-scenes insights."
const contactContent= "Get in Touch. We would love to hear from you! The contact page of [Your Blog Name] is the place where you can reach out, share your thoughts, and connect with our team. We value your feedback, suggestions, and questions. If you have any inquiries regarding our content, partnerships, or advertising opportunities, please don't hesitate to contact us. We are here to assist you and provide the information you need. You can reach us by filling out the contact form below or by sending us an email directly to [Your Email Address]. We strive to respond to all inquiries promptly and efficiently. Please allow us up to [Time Frame] to get back to you. We also encourage you to connect with us on our social media channels. Follow us on [Social Media Platform] to stay updated with our latest articles, news, and announcements. Join our community of like-minded individuals who share a passion for knowledge and inspiration. Your feedback is valuable to us as it helps us improve and cater to your interests. We appreciate your support and engagement with [Your Blog Name]. Together, let's continue to create a thriving platform that provides meaningful content and fosters intellectual growth. Thank you for reaching out to us. We look forward to hearing from you and building a lasting connection!"

const app= express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

let posts=[];

app.get("/",function(req,res){
    res.render("home",{
        startingContent: homeStartingContent,
        posts: posts
    });
});

app.get("/about",function(req,res){
    res.render("about",{aboutContent: contactContent});
});

app.get("/contact",function(req,res){
    res.render("contact",{contactContent: aboutContent});
});

app.get("/compose",function(req,res){
    res.render("compose");
});

app.post("/compose",function(req,res){
    const post= {
        title:req.body.postTitle,
        content: req.body.postBody
    };
    posts.push(post);
    res.redirect("/");
}); 

app.get("/posts/:postName",function(req,res){
    const requestedTitle= _.lowerCase(req.params.postName);

    posts.forEach(function(post){
        const storedTitle= _.lowerCase(post.title);

        if(storedTitle === requestedTitle){
            res.render("post",{
                title: post.title,
                content: post.content
            });
        }
    }); 
});


app.listen(3000,function(){
    console.log("Server started on port 3000");
});