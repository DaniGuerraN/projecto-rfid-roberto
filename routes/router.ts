import { Router, Request, Response, response } from 'express';
import { lchmod } from 'fs';
var mysql = require('mysql');
/*var LCD = require('lcdi2c');
var lcd = new LCD( 1, 0x27, 20, 4);
const {StringDecoder} = require('string_decoder')
var sleep = require('sleep');
lcd.clear();




		lcd.clear();
		lcd.print('-----READY!-----');

*/

var connection = mysql.createConnection({
    host: '10.42.0.158',
    user: 'lalo',
    password: '123467',
    database: 'arquidb',
    port: 3306
 });


const router = Router();


//------------------------------Alumnos------------------------------------

//registra un alumno
router.post('/registro', (req: Request, res: Response)=>{

    var queryResults:any
    var nombre = req.body.nombre
    var apellido_paterno = req.body.apellido_paterno
    var apellido_materno = req.body.apellido_materno
    var matricula = req.body.matricula
    var rfid = req.body.rfid
    var queryString = 'INSERT INTO `alumno` (`id`, `nombre`, `apellido_paterno`, `apellido_materno`, `matricula`, `rfid`) VALUES (NULL,"' + nombre + '", "' + apellido_paterno + '","'+ apellido_materno +'", ' + matricula +  ',' + rfid + ');'

    connection.query(queryString, function (error:any, results:any, fields:any) {
        if(results.length != 0){
                /*lcd.clear()
    lcd.println("Alumno Registrad",1)
    lcd.println(req.body.nombre,2)*/
            var queryResults = results
        }else{
            results[0] = "error"
            var queryResults = results[0];
        }
        res.json({
            ok:true
        });
    });
    // cuerpo:cuerpo
});

//retorna todos los alumnos
router.get('/alumno', (req: Request, res: Response)=>{

    var queryResults:any

    var queryString = 'SELECT * FROM alumno'

    connection.query(queryString, function (error:any, results:any, fields:any) {
        if(results.length != 0){
            var queryResults = results
        }else{
            results[0] = "error"
            var queryResults = results[0];
        }
        res.json({
            ok:true,
            r:queryResults
        });
    });
    // cuerpo:cuerpo
});

//elimina un alumno
router.post('/alumnoDelete', (req: Request, res: Response)=>{

    var queryResults:any

    var queryString = 'DELETE FROM alumno WHERE rfid = '+ req.body.rfid


    connection.query(queryString, function (error:any, results:any, fields:any) {
        if(results.length != 0){
            var queryResults = results
                /*lcd.clear()
    lcd.println("Alumno elimindo",1)
    lcd.println("rfid:" + req.body.rfid,2)*/
        }else{
            results[0] = "error"
            var queryResults = results[0];
        }
        res.json({
            ok:true
        });
    });
    // cuerpo:cuerpo
});

//actualiza los datos de un alumno
router.post('/alumnoUpdate', (req: Request, res: Response)=>{

    var queryResults:any

    var queryString = 'UPDATE alumno SET nombre = "' + req.body.nombre +'", apellido_paterno = "' + req.body.apellido_paterno + '", apellido_materno = "' + req.body.apellido_materno + '", `matricula` = '+ req.body.matricula + ', rfid = '+ req.body.rfid + ' WHERE alumno.id = ' + req.body.id + ';'

    connection.query(queryString, function (error:any, results:any, fields:any) {
        if(results.length != 0){
                /*lcd.clear()
    lcd.println("Alumno update",1)
    lcd.println(req.body.nombre + " " +req.body.apellido_paterno,2)*/
            var queryResults = results
        }else{
            results[0] = "error"
            var queryResults = results[0];
        }
        res.json({
            ok:true
        });
    });
    // cuerpo:cuerpo
});

//busca a un alumni por rfid y regresa los datos
router.post('/alumnoByRfid', (req: Request, res: Response)=>{

    var queryResults:any

    var queryString = 'SELECT * FROM alumno where rfid = ' + req.body.rfid

    connection.query(queryString, function (error:any, results:any, fields:any) {
        if(results.length != 0){
            var queryResults = results
        }else{
            results[0] = "error"
            var queryResults = results[0];
        }
        res.json({
            ok:true,
            r:queryResults
        });
    });
    // cuerpo:cuerpo
});


//---------------------------<><><><><>--------------------------------


//--------------------------------Profesores---------------------------

//registra un profesor
router.post('/registroProfesor', (req: Request, res: Response)=>{

    var queryResults:any
    var nombre = req.body.nombre
    var apellido_paterno = req.body.apellido_paterno
    var apellido_materno = req.body.apellido_materno
    var matricula = req.body.matricula
    var queryString = 'INSERT INTO `profesor` (`id`, `nombre`, `apellido_paterno`, `apellido_materno`, `matricula`) VALUES (NULL,"' + nombre + '", "' + apellido_paterno + '","'+ apellido_materno +'", ' + matricula + ');'

    connection.query(queryString, function (error:any, results:any, fields:any) {
        if(results.length != 0){
    /*lcd.clear()
    lcd.println("Profe Registrado",1)
    lcd.println(req.body.nombre + " " +req.body.apellido_paterno,2)*/
            var queryResults = results
        }else{
            results[0] = "error"
            var queryResults = results[0];
        }
        res.json({
            ok:true
        });
    });
    // cuerpo:cuerpo
});

//retorna todos los alumnos
router.get('/profesor', (req: Request, res: Response)=>{

    var queryResults:any

    var queryString = 'SELECT * FROM profesor'

    connection.query(queryString, function (error:any, results:any, fields:any) {
        if(results.length != 0){
            var queryResults = results
        }else{
            results[0] = "error"
            var queryResults = results[0];
        }
        res.json({
            ok:true,
            r:queryResults
        });
    });
    // cuerpo:cuerpo
});

//elimina un profesor
router.post('/profesorDelete', (req: Request, res: Response)=>{

    var queryResults:any

    var queryString = 'DELETE FROM profesor WHERE id = '+ req.body.id

    connection.query(queryString, function (error:any, results:any, fields:any) {
        if(results.length != 0){
                /*lcd.clear()
    lcd.println("Profe eliminado",1)
    lcd.println("----------------",2)*/
            var queryResults = results
        }else{
            results[0] = "error"
            var queryResults = results[0];
        }
        res.json({
            ok:true
        });
    });
    // cuerpo:cuerpo
});


//actualiza los datos de un alumno
router.post('/profesorUpdate', (req: Request, res: Response)=>{

    var queryResults:any

    var queryString = 'UPDATE profesor SET nombre = "' + req.body.nombre +'", apellido_paterno = "' + req.body.apellido_paterno + '", apellido_materno = "' + req.body.apellido_materno + '", `matricula` = '+ req.body.matricula + ' WHERE profesor.id = ' + req.body.id + ';'

    connection.query(queryString, function (error:any, results:any, fields:any) {
        if(results.length != 0){
                /*lcd.clear()
    lcd.println("Profe update",1)
    lcd.println(req.body.nombre + " " +req.body.apellido_paterno,2)*/
            var queryResults = results
        }else{
            results[0] = "error"
            var queryResults = results[0];
        }
        res.json({
            ok:true
        });
    });
    // cuerpo:cuerpo
});


//busca a un profesor por rfid y regresa los datos
router.post('/profesorById', (req: Request, res: Response)=>{

    var queryResults:any

    var queryString = 'SELECT * FROM profesor where id = ' + req.body.id_profesor


    connection.query(queryString, function (error:any, results:any, fields:any) {
        if(results.length != 0){
            var queryResults = results
        }else{

            results[0] = "error"
            var queryResults = results[0];
        }
        res.json({
            ok:true,
            r:queryResults
        });
    });
    // cuerpo:cuerpo
});


//-------------------------------<><><><><>----------------------------

//-----------------------------Materia---------------------------------

//registra una materia
router.post('/registroMateria', (req: Request, res: Response)=>{

    var queryResults:any
    var nombre = req.body.nombre

    var id_profesor = req.body.id_profesor
    var queryString = 'INSERT INTO `materia` (`id`, `nombre`, `id_profesor`) VALUES (NULL,"' + nombre + '", ' + id_profesor + ');'

    connection.query(queryString, function (error:any, results:any, fields:any) {
        if(results.length != 0){
                /*lcd.clear()
    lcd.println("Materia agregada",1)
    lcd.println(req.body.nombre,2)*/
            var queryResults = results
        }else{
            results[0] = "error"
            var queryResults = results[0];
        }
        res.json({
            ok:true
        });
    });
    // cuerpo:cuerpo
});

//retorna todas las materias
router.get('/materia', (req: Request, res: Response)=>{

    var queryResults:any

    var queryString = 'SELECT * FROM materia'

    connection.query(queryString, function (error:any, results:any, fields:any) {
        if(results.length != 0){
            var queryResults = results
        }else{
            results[0] = "error"
            var queryResults = results[0];
        }
        res.json({
            ok:true,
            r:queryResults
        });
    });
    // cuerpo:cuerpo
});

//retorna todas las materias
router.get('/materiaProfesor', (req: Request, res: Response)=>{

    var queryResults:any

    var queryString = 'SELECT materia.nombre asignatura, profesor.nombre, profesor.apellido_paterno, profesor.apellido_materno from materia INNER JOIN profesor on materia.id_profesor = profesor.id'

    connection.query(queryString, function (error:any, results:any, fields:any) {
        if(results.length != 0){
            var queryResults = results
        }else{
            results[0] = "error"
            var queryResults = results[0];
        }
        res.json({
            ok:true,
            r:queryResults
        });
    });
    // cuerpo:cuerpo
});

//elimina una materia
router.post('/materiaDelete', (req: Request, res: Response)=>{

    var queryResults:any

    var queryString = 'DELETE FROM materia WHERE id = '+ req.body.id

    connection.query(queryString, function (error:any, results:any, fields:any) {
        if(results.length != 0){
                /*lcd.clear()
    lcd.println("Materia borrada",1)
    lcd.println(req.body.nombre,2)*/
            var queryResults = results
        }else{
            results[0] = "error"
            var queryResults = results[0];
        }
        res.json({
            ok:true
        });
    });
    // cuerpo:cuerpo
});

router.post('/materiaUpdate', (req: Request, res: Response)=>{

    var queryResults:any

    var queryString = 'UPDATE materia SET nombre = "' + req.body.nombre +'", id_profesor = "' + req.body.id_profesor + '" WHERE materia.id = ' + req.body.id + ';'

    connection.query(queryString, function (error:any, results:any, fields:any) {
        if(results.length != 0){
                /*lcd.clear()
    lcd.println("Materia update",1)
    lcd.println(req.body.nombre,2)*/
            var queryResults = results
        }else{
            results[0] = "error"
            var queryResults = results[0];
        }
        res.json({
            ok:true
        });
    });
    // cuerpo:cuerpo
});


//busca a un alumni por rfid y regresa los datos
router.post('/materiaById', (req: Request, res: Response)=>{

    var queryResults:any

    var queryString = 'SELECT * FROM materia where id = ' + req.body.id_materia


    connection.query(queryString, function (error:any, results:any, fields:any) {
        if(results.length != 0){
            var queryResults = results
        }else{

            results[0] = "error"
            var queryResults = results[0];
        }
        res.json({
            ok:true,
            r:queryResults
        });
    });
    // cuerpo:cuerpo
});


//busca a un alumni por rfid y regresa los datos
router.post('/materiaByIdAlumno', (req: Request, res: Response)=>{

    var queryResults:any

    var queryString = "SELECT materia.* FROM horario INNER JOIN materia on horario.id_relaciones = materia.id INNER JOIN alumno on alumno.id = horario.id_alumno WHERE alumno.id =" + req.body.id_alumno


    connection.query(queryString, function (error:any, results:any, fields:any) {
        if(results.length != 0){
            var queryResults = results
        }else{

            results[0] = "error"
            var queryResults = results[0];
        }
        res.json({
            ok:true,
            r:queryResults
        });
    });
    // cuerpo:cuerpo
});


//-----------------------------<><><><><>------------------------------

//-----------------------------Horario---------------------------------

//busca el horario de un alumno por el id del alumno
router.post('/horarioById', (req: Request, res: Response)=>{

    var queryResults:any

    var queryString = 'SELECT a.nombre, r.hora_inicio, r.hora_fin, m.nombre clase, r.id_dia from alumno a INNER JOIN horario h on a.id = h.id_alumno INNER JOIN relacion r on r.id = h.id_relaciones INNER JOIN materia m on r.id_materia = m.id WHERE a.id = ' + req.body.id

    connection.query(queryString, function (error:any, results:any, fields:any) {
        if(results.length != 0){
            var queryResults = results
        }else{
            results[0] = "error"
            var queryResults = results[0];
        }
        res.json({
            ok:true,
            r:queryResults
        });
    });
    // cuerpo:cuerpo
});


//cargar una materia al horario
router.post('/registroHorario', (req: Request, res: Response)=>{

    var queryResults:any
    var id_alumno = req.body.id_alumno

    var id_profesor = req.body.id_profesor
    var queryString2= 'SELECT id from relacion where id_materia = ' + req.body.id_materia

    connection.query(queryString2, function (error:any, results:any, fields:any) {
        if(results.length != 0){
            var queryResults = results
        }else{
            results[0] = "error"
            var queryResults = results[0];
        }
        results.forEach((element:any) => {
            var queryString = 'INSERT INTO `horario` (`id`, `id_alumno`, `id_relaciones`) VALUES (NULL,"' + id_alumno + '", ' + element.id + ');'


            connection.query(queryString, function (error2:any, results2:any, fields2:any) {
                if(results2.length != 0){
                    var queryResults = results2
    
                }else{
                    results2[0] = "error"
                    var queryResults = results[0];
                }
            });
        });
        res.json({
            ok:true,
            r:queryResults
        });

    });
    // cuerpo:cuerpo
});


//-----------------------------<><><><><>------------------------------


router.post('/asistencia', (req: Request, res: Response)=>{


    var queryResults:any
    var date = new Date;
    //date.setDate(2)
    //date.setHours(12)
    var dia = date.getUTCDay()
    var hora = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
    var id_alumno:any
    var id_relacion:any
    
    var queryString = '(SELECT id FROM relacion WHERE id_dia = (SELECT id FROM dia WHERE dia = ' + dia + ') AND hora_inicio <= "' + hora + '" AND hora_fin >= "'+ hora +'")'
    var queryString3 = 'SELECT * FROM alumno WHERE rfid = ' + req.body.rfid
    
    connection.query(queryString3, function(error3:any, results3:any, fields3:any){
        if(results3.length == 0){
            //aqui va el socket que dice que no se encontro el alumno
            // res.json({
            //     ok:"No registrado",
            //     b:false
            // });
                /*lcd.clear()
    lcd.println("-----Alumno-----",1)
    lcd.println(--no Registrado,2-)*/
            res.send(false)
        }else{
            id_alumno=results3[0].id

            connection.query(queryString, function (error:any, results:any, fields:any) {
                if(results.length != 0){
                    if(results.length == 1){
                        id_relacion = results[0].id
                    }
                    else{
                        id_relacion = results[0].id
                    }
                    var fecha = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate()
                    var queryString2 = 'INSERT into asistencia (id_alumno,id_relacion,fecha,asis) VALUES(' + id_alumno + ',' + id_relacion + ',"' + fecha +'",true)'
                    connection.query(queryString2, function (error2:any, results2:any, fields:any) {
                        if(error2){
                            
                        }
                        else{
                            console.log(results3.nombre)
        /*lcd.clear()
    lcd.println("Alumno registrad",1)
    lcd.println(results3.nombre,2-)*/
                            res.json({
                                ok:true
                            });
                        }
                    })
                }else{
                    res.json({
                        ok:false
                    });
                }
            });
        }
    })
    // cuerpo:cuerpo
});



router.delete('/mensajes/:id', (req: Request, res: Response)=>{

    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const id = req.params.id;

    res.json({
        ok:true,
        de,
        id
    });
    // cuerpo:cuerpo
});



export default router;