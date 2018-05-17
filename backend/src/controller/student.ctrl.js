import { Student, StudentStatus } from '../models/'

/**
 * Get /Student
 * @returns {Student}
 */

function getAll(req, res) {
    Student.findAll({
        include: [{
          model: StudentStatus,
          attributes: ['status']
        }]
      })
    .then(student => {
        return res.json({message: 'success', student})
    })
    .catch(err => {
        return res.json({message: 'error', err})
    })
}

/**
 * POST /Student
 * @returns {Student}
 */
function store(req, res) {
    const data = {
        student_no : req.fields.student_no,
        name : req.fields.name,
        email : req.fields.email,
        telp : req.fields.telp,
        address : req.fields.address,
        statusId : 1,
    }

    Student.create( data )
    .then( student => {
        // console.log( getStudentStatusById( student.statusId ) )
        getStudentStatusById( student.statusId ).then( status => {
            student= student.toJSON()
            student['status']= status
            return res.json({message: 'success', student});
        })
    })
    .catch( error => {
        console.log('Err ', error);
    });
}

/**
 * PATCH /Student
 * @returns {Student}
 */
function update(req, res) {
    const id = req.params.id;
    const newData = {
        student_no : req.fields.student_no,
        name : req.fields.name,
        email : req.fields.email,
        telp : req.fields.telp,
        address : req.fields.address,
        statusId : req.fields.statusId,
    };
      
    Student.update(newData, {where: { id } })  
    .then( student => {
        return res.json({message: 'success', student });
    })
    .catch( error => {
        console.log('Err ', error);
    });
}

/**
 * DELETE /Student
 * @returns {Student}
 */
function remove(req, res) {
    const id = req.params.id;
    Student.destroy({
      where: { id }
    })
    .then(deletedOwner => {
        return res.json({message: 'success', deletedOwner});
    })
    .catch( error => {
        console.log('Err ', error);
    });
}

function getStudentStatus(req, res) {
    StudentStatus.findAll()
    .then(status => {
        return res.json({message: 'success', status})
    })
    .catch( error => {
        console.log('Err ', error);
    });
}

function getStudentStatusById(id) {
    return new Promise(function(res, rej){
        return StudentStatus.findById(id).then( ss => {
            console.log('ss ',ss.status)
            return res(ss.status)
        }).catch(err => {
                throw err
        })
    })
}

export default {
    getAll,
    store,
    update,
    remove,
    getStudentStatus
}