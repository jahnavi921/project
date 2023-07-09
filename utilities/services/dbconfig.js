var config = {
    server: 'localhost\\SQLEXPRESS', // You can use 'localhost\\instance' to connect to named instance
    database: 'master',
    user: 'sa',
    password: 'sa',
    options: {
        trustedconnection:  true,
        trustServerCertificate: true,
        trustedServerSecure:true,
       // instancename:  'SQLEXPRESS'  // SQL Server instance name
    }
}

module.exports=config