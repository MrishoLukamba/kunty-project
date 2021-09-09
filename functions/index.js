const functions = require("firebase-functions");
const cors = require('cors');
const admin = require('firebase-admin');
const { firestore } = require("firebase-admin");
const { firebaseConfig } = require("firebase-functions");

const express = require('express');
const app = express();
app.use(cors({ origin: true }));

admin.initializeApp();

const db = admin.firestore()

//sending student data to the firestore db


exports.postStudent = functions.https.onRequest(async(req, res)=>{
    const name = req.query.name;
    //const age = req.query.age;
    const id = req.query.id;
    const parentName=req.query.parentName;
    const address = req.query.address;
    const email = req.query.email;
    const date = req.query.date;
    const status = req.query.status

    const data = {
        name:name,
        id:id,
        parent:{
            name:parentName,
            address:address,
            email:email
        },
        arrival:[
            {date:date, status:status}
        ]
        
    }


    await db.collection('class1').doc(data.id).set(data).then(resp =>{
        console.log('successful added')
    }).catch(err=>{
        console.log(err)
    })

    res.send('added')


})

//updating student arrival

exports.updatingArrival = functions.https.onRequest(async(req, res)=>{
    const date= req.query.date;
    const status = req.query.status
    const id = req.query.id;

    const studentId = id
    const arrival = {date:date,status:status}

    await db.collection('class1').doc(studentId).update({arrival:admin.firestore.FieldValue.arrayUnion(arrival)})

    res.send('updated')
})

//event trigger and sending email
const SENDGRID_API_KEY = functions.config().sendgrid.key
const sgMail = require("@sendgrid/mail");
const { response } = require("express");
sgMail.setApiKey('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')

exports.sendEmail = functions.firestore.document('class1/{id}')
        .onUpdate((snap, context) =>{
            const id = context.params.id;

            const data = snap.after.data()
           
            if(snap.before.data() !== data){
                const msg = {
                    to:data.parent.email,
                    from:'adulrazzaqlukamba@gmail.com',
                    templateId: 'd-f421589746184c608ec7ec4bd37ba90d',
                    substitutionWrapper: ['{{','}}'],
                    substitutions: {
                        name: data.name,
                    }
                };
                return sgMail.send(msg).then(()=> console.log('email send'))
                .catch((err) =>{
                    console.log(err,'error ccured')
                })  
            }
        })

//getting student data

exports.getStudents = functions.https.onRequest(async(req, res)=>{
    
    await db.collection('class1').get().then((snap)=>{
        const documents = snap.docs.map(doc=> doc.data())
        res.send(documents)
    })

})
    

app.get('/:id',async(req,res)=>{

   const id = req.params.id
   console.log(id)
    await db.collection('class1').doc(id).get().then((snap) => {
        const result = snap.data()
        res.send(result)
    })
        
})     
  
   
        
    
exports.app = functions.https.onRequest(app);    
    


// sendgridAPI-key= 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        

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
