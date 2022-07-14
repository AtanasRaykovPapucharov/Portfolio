module.exports = (nodemailerTransporter, mailOptions) => {
	return new Promise((resolve, reject) => {
		nodemailerTransporter.sendMail(mailOptions, (err, info) => {
			if (err) {
				reject(err);
			}
			resolve(info);
		});
	})
};