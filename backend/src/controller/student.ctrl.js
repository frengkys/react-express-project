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
        res.json({message: 'success', student});
    })
    .catch( error => {
        res.json({message: 'failed', error});
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
        res.json({message: 'success', student });
    })
    .catch( error => {
        res.json({message: 'failed', error});
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
        res.json({message: 'success', deletedOwner});
    })
    .catch( error => {
        res.json({message: 'failed', error});
    });
}

function getStudentStatus(req, res) {
    StudentStatus.findAll()
    .then(status => {
        return res.json({message: 'success', status})
    })
    .catch(err => {
        return res.json({message: 'error', err})
    })

}

export default {
    getAll,
    store,
    update,
    remove,
    getStudentStatus
}