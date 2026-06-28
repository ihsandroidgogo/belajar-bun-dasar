const passwordHash = await Bun.password.hash("inipasswordnya", {
    algorithm: "bcrypt",
    cost: 10
});

const hasil = await Bun.password.verify("inipasswordnya", passwordHash, "bcrypt");
console.info(hasil); // true