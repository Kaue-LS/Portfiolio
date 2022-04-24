// const nodemailer=require('nodemailer')
// const config= require('../../config.local')
// export default function SendEmail(req,res){
//     let transporter = nodemailer.createTransport({
//         service:'gmail',
    
//         auth:{
//             user:config.USERMAIL,
//             pass:config.PASSMAIL
//         }
//     })

//     let mailOptions ={
//         from: `"Fred Foo 👻" <${config.USERMAIL}>`, // sender address
//         to: config.USERMAIL,
//         replyTo:req.body.email, // list of receivers
//         subject: "Hello ✔", // Subject line
//         text: req.body.message, // plain text body
//     }

//     transporter.sendMail(mailOptions,(err,data)=>{
//         if(err){
//             console.log('Erro Occurs',err)
//         }else{
//             console.log('Email sent!!',data)
//         }
//     })
    // transporter.sendMail({
    //     from: `"Fred Foo 👻" <${config.USERMAIL}>`, // sender address
    //     to: config.USERMAIL,
    //     replyTo:req.body.email, // list of receivers
    //     subject: "Hello ✔", // Subject line
    //     text: req.body.message, // plain text body
    //     html: `<b>${req.body.name}</b><br/>${req.body.message}`, // html body
    // }).then((response)=>{
    //     res.send(response)
      
    // })
    // .catch((error)=>{res.send(error)})
// }
