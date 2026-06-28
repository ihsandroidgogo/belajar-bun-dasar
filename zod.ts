import {z} from "zod";

const validasiLogin = z.object({
    username: z.string().min(1, {message: "Username tidak boleh kosong"}).max(50, {message: "Username tidak boleh lebih dari 50 karakter"}).email({message: "Username harus berupa email"}),
    password: z.string().min(1, {message: "Password tidak boleh kosong"}).max(50, {message: "Password tidak boleh lebih dari 50 karakter"})
})

const request = {
    username: "mona@gmail.com",
    password: "123456"
}

validasiLogin.parse(request)