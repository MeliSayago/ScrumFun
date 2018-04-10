const nodemailer = require('nodemailer');

const sendEmail=function(subject,text,to){
    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            type:'OAuth2',
            user:'hola.teststore@gmail.com',
            clientId:'377989625562-tiunge0tt0fj5pfh3d7h2b9b21addaes.apps.googleusercontent.com',
            clientSecret:'zVaPnMpd9mFo5SJDLQQW6nkV',
            refreshToken:'1/5oMh2fsbzebz5h7OsvwdYArT6tjO-57VdrMPZShjU0dPT4AAuIZJZ6rLfzcGZ13U' 
        }
    });//transporter
    var mailOptions = {
        from: "Test Store <hola.teststore@gmail.com>", // nuestro mail
        to:to, 
        subject:subject,
        text: text
    }//mailoptions
    transporter.sendMail(mailOptions,function(err,response){
        err?console.log(err):console.log('Email Enviado')   
    })//transporter
}

const sendResults=function(mail,text){
    var subject='Stories Results!'
    var text=text
    sendEmail(subject,text,mail)
}



module.exports={sendEmail,
    sendResults,
    }