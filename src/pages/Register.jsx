{
  /* Silahkan Input Data Register Secara Lengkap Terlebih Dahulu lalu klik "Daftar" Untuk Mencoba Fitur CRUD */
}
{
  /* Silahkan Input Data Register Secara Lengkap Terlebih Dahulu lalu klik "Daftar" Untuk Mencoba Fitur CRUD */
}
{
  /* Silahkan Input Data Register Secara Lengkap Terlebih Dahulu lalu klik "Daftar" Untuk Mencoba Fitur CRUD */
}

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import FormNama from "../components/formComponents/FormNama";
import FormEmail from "../components/formComponents/FormEmail";
import FormNoHp from "../components/formComponents/FormNoHp";
import FormPassword from "../components/formComponents/FormPassword";

import Button from "../components/button/Button";
const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    noHp: "",
    password: "",
    konfirmasiPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.konfirmasiPassword) {
      alert("Password dan konfirmasi tidak cocok!");
      return;
    }
    const dataToStore = { ...formData };
    delete dataToStore.konfirmasiPassword;
    localStorage.setItem("userProfile", JSON.stringify(dataToStore));
    alert("Pendaftaran berhasil!");
    navigate("/profil");
  };

  return (
    <div className="flex justify-center items-center min-h-screen mt-20 p-9">
      <div className=" bg-white rounded-lg shadow-md p-9 w-full max-w-md mx-auto sm:max-w-xl">
        <div className="text-center mb-8">
          <h3 className="font-poppins text-[24px] md:text-[32px] font-bold text-gray-800">
            Pendaftaran Akun
          </h3>
          <p className="font-dm-sans text-sm sm:text-base text-gray-500 mt-2">
            Yuk, daftarkan akunmu sekarang juga!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <FormNama value={formData.nama} onChange={handleChange} />
          <FormEmail value={formData.email} onChange={handleChange} />
          <FormNoHp value={formData.noHp} onChange={handleChange} />
          <FormPassword
            label="Kata Sandi"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <FormPassword
            label="Konfirmasi Kata Sandi"
            name="konfirmasiPassword"
            value={formData.konfirmasiPassword}
            onChange={handleChange}
          />

          <div className="text-right">
            <a
              href="#"
              className="font-dm-sans text-sm sm:text-base text-gray-500 hover:underline focus:outline-none"
            >
              Lupa Password?
            </a>
          </div>

          <Button variant="primary" type="submit">
            Daftar
          </Button>

          <Button variant="thirdth" type="submit" value="masuk">
            Masuk
          </Button>

          <div className="flex items-center my-6">
            <hr className="flex-1 border-t border-gray-300" />
            <span className="px-4 text-gray-500 text-base">atau</span>
            <hr className="flex-1 border-t border-gray-300" />
          </div>

          <Button variant="google">
            <img src="/googlelogo.png" alt="logo Google" />
            Daftar dengan Google
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
