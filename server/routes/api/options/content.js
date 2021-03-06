const express = require("express");
const router = express.Router();

// Schema Models
const Send = require("../../../models/send"); // Send schema model

// Test endpoint to ensure that endpoint is working
router.get("/status", (request, response) => {
    response.status(200).json({Response: "OK"})
});

// Returns all documents in fullSend.sends collection
router.post("/file/:id", (request, response) => {
    Send.findById(request.params.id).then((doc) => {
        response.status(200).json({
            status: 200,
            Response: "OK",
            data: doc
        });
    }).catch((error) => {
        response.status(404).json({
            status: 404,
            Response: "Resource does not exist",
            traceback: error
        });
    })
});

module.exports = router;